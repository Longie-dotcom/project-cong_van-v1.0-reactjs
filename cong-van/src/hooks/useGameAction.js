import { STATS } from "../data/assets/stats";
import { GAME_BALANCE } from "../data/config";

export function useGameActions(
    playerState,
    setPlayerState,
    setActiveEvents,
    setActiveNews,
    currentPhaseData,
    initialUpgradeMeta,
    isTransitioning,
    isEventActive
) {

    const handleEventChoice = (choice) => {
        if (choice.effect) {
            setPlayerState(prev => {
                const newState = { ...prev };
                Object.keys(choice.effect).forEach(stat => {
                    // Nếu key nằm trong STATS, cập nhật theo chuẩn
                    if (newState.hasOwnProperty(stat)) newState[stat] += choice.effect[stat];
                });
                return newState;
            });
        }

        if (choice.flagAction) {
            const { flag, value } = choice.flagAction;

            setPlayerState(prev => ({
                ...prev,
                [flag]: value
            }));
        }

        setPlayerState(prev => ({
            ...prev,
            currentEventID: null,
        }));

        if (choice.triggeredNews) {
            setActiveNews(choice.triggeredNews);
        }

        setActiveEvents({ mails: [], calls: [] });
    };

    const handleUpgradeClick = (tabKey, upgradeId, targetValue, costOrAmount) => {
        if (isTransitioning) return false;

        // Kiểm tra điều kiện (Tab D không dùng Economy)
        if (tabKey !== 'D' && playerState[STATS.ECONOMY] < costOrAmount) {
            return false;
        }

        let isOperationSuccess = false;

        setPlayerState((prev) => {
            const metaItem = initialUpgradeMeta[tabKey]?.find(item => item.id === upgradeId);
            if (!metaItem) return prev;

            const upgradeValue = metaItem.value;

            // TAB A: Mở rộng nhân sự
            if (tabKey === 'A') {
                // Scale giá mới
                const currentBoughtCount = prev[upgradeId] || 0;
                const currentPrice = Math.trunc(metaItem.baseCost * Math.pow(GAME_BALANCE.PRICING.VILLAGE_MULTIPLIER, currentBoughtCount));

                // Kiểm tra tiền
                if (prev[STATS.ECONOMY] < currentPrice) return prev;

                isOperationSuccess = true;
                return {
                    ...prev,
                    [STATS.ECONOMY]: prev[STATS.ECONOMY] - currentPrice,
                    [STATS.RESOURCE]: prev[STATS.RESOURCE] + upgradeValue,
                    [upgradeId]: currentBoughtCount + 1 // Tăng số lần đã mua của village đó
                };
            }

            // TAB B: Giá trị thành phẩm
            if (tabKey === 'B') {
                if (prev[upgradeId] >= 1) return prev;
                isOperationSuccess = true;
                return {
                    ...prev,
                    [STATS.ECONOMY]: prev[STATS.ECONOMY] - costOrAmount,
                    coal_value: prev.coal_value + upgradeValue,
                    [upgradeId]: 1
                };
            }

            // TAB C: Hệ thống tự động
            if (tabKey === 'C') {
                const maxLevel = metaItem.maxLevel || 4;
                if (prev[upgradeId] >= maxLevel) return prev;
                isOperationSuccess = true;
                return {
                    ...prev,
                    [STATS.ECONOMY]: prev[STATS.ECONOMY] - costOrAmount,
                    [upgradeId]: targetValue
                };
            }

            // TAB D: Quản đốc
            if (tabKey === 'D') {
                if (prev[STATS.COAL] <= 0) return prev;

                if (upgradeId === "sell_market") {
                    const amountToSell = parseInt(costOrAmount) || 0;
                    if (amountToSell <= 0 || amountToSell > prev[STATS.COAL]) return prev;

                    const goldEarned = Math.floor(amountToSell * prev.coal_value);
                    isOperationSuccess = true;
                    return {
                        ...prev,
                        [STATS.COAL]: prev[STATS.COAL] - amountToSell,
                        [STATS.ECONOMY]: prev[STATS.ECONOMY] + goldEarned
                    };
                }

                if (upgradeId === "submit_cartel") {
                    const quota = currentPhaseData.Coal_Quota;
                    if (prev[STATS.COAL] >= quota) {
                        isOperationSuccess = true;

                        if (currentPhaseData.Next_Phase === "ENDING") {
                            return {
                                ...prev,
                                [STATS.COAL]: prev[STATS.COAL] - quota,
                                currentPhaseID: "ENDING_TRIGGERED" // Một ID đặc biệt để báo hiệu đã xong
                            };
                        }

                        return {
                            ...prev,
                            [STATS.COAL]: prev[STATS.COAL] - quota,
                            currentPhaseID: currentPhaseData.Next_Phase,
                            currentEventIdx: 0,
                            currentEventID: null
                        };
                    }
                }
            }
            return prev;
        });

        return isOperationSuccess;
    };

    const handleMineClick = () => {
        if (isTransitioning || isEventActive) return;

        setPlayerState((prev) => {
            // Áp dụng công thức từ config
            const { BASE_COAL, MULTIPLIER } = GAME_BALANCE.MINE_CLICK;

            // Tính toán lượng than tăng thêm
            const addedCoal = Math.trunc(
                prev[STATS.RESOURCE] <= 0
                    ? BASE_COAL
                    : (prev[STATS.RESOURCE] * MULTIPLIER)
            );

            return {
                ...prev,
                [STATS.COAL]: prev[STATS.COAL] + addedCoal
            };
        });
    };

    return { handleUpgradeClick, handleMineClick, handleEventChoice };
}