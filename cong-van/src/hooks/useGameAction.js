import { STAMPER_CONFIG } from "../data/assets/stamper";
import { ALL_EVENTS } from "../data/phases/phases";
import { ERROR_POOLS } from "../data/assets/error";

export function useGameActions(
    playerState,
    setPlayerState,
    setActiveEvents,
    setActiveNews,
    setMarks,
    activeEvents,
    setErrorMessage,
    setTransitionClass
) {
    const handleStamp = (rect) => {
        if (!rect) return;

        const hasCalls = activeEvents?.calls?.length > 0;
        const hasMails = activeEvents?.mails?.length > 0;

        if (hasCalls || hasMails) {
            let selectedPool = [];
            if (hasCalls && hasMails) {
                selectedPool = ERROR_POOLS.both;
            } else if (hasCalls) {
                selectedPool = ERROR_POOLS.phone;
            } else {
                selectedPool = ERROR_POOLS.mail;
            }

            const randomMsg = selectedPool[Math.floor(Math.random() * selectedPool.length)];
            setErrorMessage(randomMsg);
            return;
        }

        const paperElement = document.querySelector('.paper');
        if (!paperElement) return;

        const paperRect = paperElement.getBoundingClientRect();
        const stampX = (rect.left - paperRect.left) + (rect.width / 4);
        const stampY = (rect.top - paperRect.top) + (rect.height / 4);

        const newMark = { id: Date.now(), x: stampX, y: stampY };
        setMarks(prev => [...prev, newMark]);
        new Audio(STAMPER_CONFIG.SOUNDS.stamped).play();

        setTimeout(() => {
            setMarks(prev => prev.filter(m => m.id !== newMark.id));
        }, 2800);

        const currentChoiceRaw = paperElement.getAttribute('data-current-choice');
        if (!currentChoiceRaw) return;

        const currentChoice = JSON.parse(currentChoiceRaw);
        if (currentChoice) {
            setTimeout(() => {
                setTransitionClass("fade-out-world");

                setTimeout(() => {

                    handleEventChoice(
                        currentChoice.data || currentChoice,
                        true
                    );

                    setTransitionClass("fade-in-new-world");

                    setTimeout(() => {
                        setTransitionClass("");
                    }, 2000);

                }, 2000);

            }, 800);
        }
    };

    const handleEventChoice = (choice, isFromStamp = false) => {
        // ==========================================
        // 1. XỬ LÝ TÍNH TOÁN HIỆU ỨNG STATS
        // ==========================================
        if (choice.effect && Array.isArray(choice.effect)) {
            setPlayerState(prev => {
                const newState = { ...prev };
                choice.effect.forEach(ef => {
                    const targetStats = ef.stats || ef.stat;
                    const value = ef.value || 0;
                    if (!targetStats) return;

                    if (Array.isArray(targetStats)) {
                        targetStats.forEach(s => { newState[s] = (newState[s] ?? 0) + value; });
                    } else {
                        newState[targetStats] = (newState[targetStats] ?? 0) + value;
                    }
                });
                return newState;
            });
        }

        // ==========================================
        // 2. XỬ LÝ FLAGACTION ĐA NĂNG
        // ==========================================
        if (choice.flagAction) {
            const { flag, value, operator } = choice.flagAction;
            setPlayerState(prev => {
                const newState = { ...prev };
                const targetFlags = Array.isArray(flag) ? flag : [flag];
                targetFlags.forEach(f => {
                    const currentValue = newState[f] ?? 0;
                    if (operator === "+=" || operator === "+") newState[f] = currentValue + value;
                    else if (operator === "-=" || operator === "-") newState[f] = currentValue - value;
                    else newState[f] = value;
                });
                return newState;
            });
        }

        // ==========================================
        // 3. LOGIC CHUYỂN TIẾP TIẾN TRÌNH GỌN GÀNG (BỎ PREVIOUS)
        // ==========================================
        const currentEvent = typeof ALL_EVENTS !== 'undefined' ? ALL_EVENTS[playerState.currentEventID] : null;
        const hasPaper = !!currentEvent?.Paper;
        const isMailChoice = !!choice.actionType;

        if (isFromStamp) {
            // Khi dập dấu giấy -> Set null trực tiếp để báo hiệu hết ngày
            setPlayerState(prev => ({
                ...prev,
                currentEventID: null
            }));
            setActiveEvents({ mails: [], calls: [] });
        } else {
            // Nhấp chọn Mail hoặc Điện thoại
            const nextMails = isMailChoice ? [] : activeEvents.mails;
            const nextCalls = isMailChoice ? activeEvents.calls : [];

            setActiveEvents({ mails: nextMails, calls: nextCalls });

            // Nếu màn chơi không có tờ Paper để chặn cổng và mọi thứ đã giải quyết xong -> Sang ngày mới
            if (!hasPaper && nextMails.length === 0 && nextCalls.length === 0) {
                setPlayerState(prev => ({
                    ...prev,
                    currentEventID: null
                }));
            }
        }

        if (choice.triggeredNews) {
            setActiveNews(choice.triggeredNews);
        }
    };

    return { handleStamp, handleEventChoice };
}