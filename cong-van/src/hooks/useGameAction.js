export function useGameActions(
    playerState,
    setPlayerState,
    setActiveEvents,
    setActiveNews,
    currentPhaseData,
    initialUpgradeMeta
) {

    const handleEventChoice = (choice) => {
        if (choice.effect) {
            setPlayerState(prev => {
                const newState = { ...prev };
                Object.keys(choice.effect).forEach(stat => {
                    if (newState.hasOwnProperty(stat)) newState[stat] += choice.effect[stat];
                });
                return newState;
            });
        }

        if (choice.triggeredNews) {
            setActiveNews(choice.triggeredNews);
        }

        // Khi set về rỗng, useEffect ở trên sẽ phát hiện activeEvents thay đổi 
        // và tự động khởi động lại interval mới
        setActiveEvents({ mails: [], calls: [] });
    };

    const handleUpgradeClick = (tabKey, upgradeId, targetValue, costOrAmount) => {
        if (isTransitioning) return false;

        // 1. KIỂM TRA ĐIỀU KIỆN BAN ĐẦU (Chỉ áp dụng cho các Tab tiêu thụ tiền vàng Economy)
        if (tabKey !== 'D' && playerState.Economy < costOrAmount) {
            return false;
        }

        let isOperationSuccess = false;

        setPlayerState((prev) => {
            // Tìm meta-data của nâng cấp hiện tại để lấy chỉ số cộng thêm (value)
            const metaItem = initialUpgradeMeta[tabKey]?.find(item => item.id === upgradeId);
            if (!metaItem) return prev;

            const upgradeValue = metaItem.value;

            // ==========================================
            // LOGIC TAB A: KẾ HOẠCH MỞ RỘNG NHÂN SỰ
            // ==========================================
            if (tabKey === 'A') {
                isOperationSuccess = true;
                return {
                    ...prev,
                    Economy: prev.Economy - costOrAmount,
                    Resource: prev.Resource + upgradeValue // Khi Resource tăng, useEffect tự sinh thêm Worker
                };
            }

            // ==========================================
            // LOGIC TAB B: CẢI TIẾN GIÁ TRỊ THÀNH PHẨM (Nâng cấp 1 lần)
            // ==========================================
            if (tabKey === 'B') {
                // Kiểm tra nếu đã đạt level tối đa (1) thì chặn
                if (prev[upgradeId] >= 1) return prev;

                isOperationSuccess = true;
                return {
                    ...prev,
                    Economy: prev.Economy - costOrAmount,
                    coal_value: prev.coal_value + upgradeValue, // Cộng giá trị than
                    [upgradeId]: 1 // Cập nhật trạng thái upgrade thành 1 (tối đa)
                };
            }

            // ==========================================
            // LOGIC TAB C: HỆ THỐNG THU THẬP TỰ ĐỘNG (Nâng cấp Level)
            // ==========================================
            if (tabKey === 'C') {
                const maxLevel = metaItem.maxLevel || 4;
                if (prev[upgradeId] >= maxLevel) return prev; // Chặn nếu đã đạt cấp tối đa

                isOperationSuccess = true;
                return {
                    ...prev,
                    Economy: prev.Economy - costOrAmount,
                    [upgradeId]: targetValue // Cập nhật level mới cho thiết bị tự động (railway, auto...)
                };
            }

            // ==========================================
            // LOGIC TAB D: QUYẾT ĐỊNH CỦA QUẢN ĐỐC (Sử dụng Than)
            // ==========================================
            if (tabKey === 'D') {
                if (prev.Coal <= 0) return prev; // Không có than trong kho thì không thể thực hiện

                // --- Hành động 1: Tuồn Than lén lút ra chợ đen lấy Vốn ---
                if (upgradeId === "sell_market") {
                    const amountToSell = parseInt(costOrAmount) || 0;

                    // Chặn các trường hợp nhập bậy: Số âm, bằng 0, hoặc vượt quá lượng than hiện có
                    if (amountToSell <= 0 || amountToSell > prev.Coal) {
                        return prev;
                    }

                    // Tính số tiền kiếm được = Lượng than * Giá trị mỗi viên hiện tại
                    const goldEarned = Math.floor(amountToSell * prev.coal_value);
                    isOperationSuccess = true;

                    return {
                        ...prev,
                        Coal: prev.Coal - amountToSell,     // Trừ đúng lượng than đã bán từ Input
                        Economy: prev.Economy + goldEarned  // Cộng tiền vàng thặng dư vào ngân sách
                    };
                }

                // --- Hành động 2: Nộp Than hoàn thành Chỉ Tiêu cấp trên đổi Nhân Sự ---
                if (upgradeId === "submit_cartel") {
                    const quota = currentPhaseData.Coal_Quota;

                    // 1. Kiểm tra điều kiện: Có đủ than để nộp chỉ tiêu không?
                    if (playerState.Coal >= quota) {

                        // 2. Thực hiện cập nhật State
                        setPlayerState(prev => ({
                            ...prev,
                            Coal: prev.Coal - quota, // 🌟 Trừ đúng lượng than chỉ tiêu, phần dư được giữ lại
                            currentPhaseID: currentPhaseData.Next_Phase // 🌟 Chuyển sang Phase mới
                        }));
                        isOperationSuccess = true;
                    } else {
                        // Không đủ than
                        isOperationSuccess = false;
                        console.warn("Không đủ than để hoàn thành chỉ tiêu!");
                    }
                }
            }

            return prev;
        });

        // Trả về kết quả (true/false) để kích hoạt hiệu ứng nổ hạt lấp lánh hoặc popup báo lỗi đỏ
        return isOperationSuccess;
    };

    const handleMineClick = () => {
        if (isTransitioning || isEventActive) return;

        setPlayerState((prev) => {
            let addedCoal = 0;

            // Nếu Resource <= 0, không cho phép khai thác thêm than
            if (prev.Resource <= 0) {
                addedCoal = 2
            } else {
                addedCoal = 1 * prev.Resource;
            }

            return {
                ...prev,
                Coal: prev.Coal + addedCoal
            };
        });
    };

    return {
        handleUpgradeClick,
        handleMineClick,
        handleEventChoice
    };
}