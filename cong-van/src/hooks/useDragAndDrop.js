import { useState } from "react";

export function useDragAndDrop(
    initialPaperPos,
    deskObstacles,
    paperSize,
    mailSize,
    isTransitioning,
    openMailSound,
    tabSwitchSound,
    activeMailsList
) {
    const [paperPos, setPaperPos] = useState(initialPaperPos);
    const [livePaperDelta, setLivePaperDelta] = useState({ x: 0, y: 0 });
    const [mailPositions, setMailPositions] = useState({});
    const [liveMailDelta, setLiveMailDelta] = useState({ x: 0, y: 0 });
    const [activeMailDragID, setActiveMailDragID] = useState(null);

    const playPaperRustle = () => {
        const audio = new Audio(OpenMailSound);
        audio.volume = 0.55;
        audio.play().catch(() => { });
    };

    const playDeskSlide = () => {
        const audio = new Audio(TabSwitchSound);
        audio.volume = 0.45;
        audio.play().catch(() => { });
    };

    function checkAABBCollision(rect1, rect2) {
        return (
            rect1.left < rect2.left + rect2.width &&
            rect1.left + rect1.width > rect2.left &&
            rect1.top < rect2.top + rect2.height &&
            rect1.left + rect1.width > rect2.left &&
            rect1.top + rect1.height > rect2.top
        );
    }

    function handleDragStart(event) {
        if (isTransitioning) return;
        const { active } = event;
        if (active.id === "paper-1") {
            setLivePaperDelta({ x: 0, y: 0 });
            playPaperRustle();
        }
        if (typeof active.id === "string" && active.id.startsWith("mail-")) {
            setActiveMailDragID(active.id);
            setLiveMailDelta({ x: 0, y: 0 });
            playPaperRustle();
        }
    }

    function handleDragEnd(event) {
        if (isTransitioning) return;
        const { active } = event;

        if (active.id === "paper-1") {
            setPaperPos((prev) => ({
                x: prev.x + livePaperDelta.x,
                y: prev.y + livePaperDelta.y,
            }));
            setLivePaperDelta({ x: 0, y: 0 });
            playDeskSlide();
        }

        if (active.id === activeMailDragID) {
            setMailPositions((prev) => ({
                ...prev,
                [activeMailDragID]: {
                    x: (prev[activeMailDragID]?.x || 950) + liveMailDelta.x,
                    y: (prev[activeMailDragID]?.y || 400) + liveMailDelta.y,
                },
            }));
            setLiveMailDelta({ x: 0, y: 0 });
            setActiveMailDragID(null);
            playDeskSlide();
        }
    }

    function handleDragMove(event) {
        if (isTransitioning) return;
        const { active, delta } = event;

        if (active.id === "paper-1") {
            let adjustedDelta = { x: delta.x, y: delta.y };
            let targetX = paperPos.x + adjustedDelta.x;
            let targetY = paperPos.y + adjustedDelta.y;
            let paperRect = {
                left: targetX,
                top: targetY,
                width: paperSize.width,
                height: paperSize.height,
            };

            for (let pass = 0; pass < 2; pass++) {
                for (const obstacle of deskObstacles) {
                    if (checkAABBCollision(paperRect, obstacle)) {
                        const overlapLeft = paperRect.left + paperRect.width - obstacle.left;
                        const overlapRight = obstacle.left + obstacle.width - paperRect.left;
                        const overlapTop = paperRect.top + paperRect.height - obstacle.top;
                        const overlapBottom = obstacle.top + obstacle.height - paperRect.top;
                        const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);

                        if (minOverlap === overlapLeft) adjustedDelta.x -= overlapLeft;
                        else if (minOverlap === overlapRight) adjustedDelta.x += overlapRight;
                        else if (minOverlap === overlapTop) adjustedDelta.y -= overlapTop;
                        else if (minOverlap === overlapBottom) adjustedDelta.y += overlapBottom;

                        paperRect.left = paperPos.x + adjustedDelta.x;
                        paperRect.top = paperPos.y + adjustedDelta.y;
                    }
                }
            }
            setLivePaperDelta(adjustedDelta);
        }

        if (active.id === activeMailDragID) {
            let adjustedDelta = { x: delta.x, y: delta.y };
            const currentMailOrigin = mailPositions[activeMailDragID] || { x: 950, y: 400 };
            let mailRect = {
                left: currentMailOrigin.x + adjustedDelta.x,
                top: currentMailOrigin.y + adjustedDelta.y,
                width: mailSize.width,
                height: mailSize.height,
            };

            for (let pass = 0; pass < 2; pass++) {
                for (const obstacle of OBSTACLES) {
                    if (checkAABBCollision(mailRect, obstacle)) {
                        const overlapLeft = mailRect.left + mailRect.width - obstacle.left;
                        const overlapRight = obstacle.left + obstacle.width - mailRect.left;
                        const overlapTop = mailRect.top + mailRect.height - obstacle.top;
                        const overlapBottom = obstacle.top + obstacle.height - mailRect.top;
                        const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);

                        if (minOverlap === overlapLeft) adjustedDelta.x -= overlapLeft;
                        else if (minOverlap === overlapRight) adjustedDelta.x += overlapRight;
                        else if (minOverlap === overlapTop) adjustedDelta.y -= overlapTop;
                        else if (minOverlap === overlapBottom) adjustedDelta.y += overlapBottom;

                        mailRect.left = currentMailOrigin.x + adjustedDelta.x;
                        mailRect.top = currentMailOrigin.y + adjustedDelta.y;
                    }
                }
            }
            setLiveMailDelta(adjustedDelta);
        }
    }

    function handleReorganizeDesk() {
        if (isTransitioning) return;
        setPaperPos(INITIAL_PAPER_POS);
        setLivePaperDelta({ x: 0, y: 0 });
        setMailPositions((prev) => {
            const resetPositions = { ...prev };
            activeMailsList.forEach((mail, idx) => {
                resetPositions[mail.id] = { x: 950 + idx * 20, y: 400 };
            });
            return resetPositions;
        });
        setLiveMailDelta({ x: 0, y: 0 });
    }

    return {
        paperPos,
        livePaperDelta,
        mailPositions,
        activeMailDragID,
        liveMailDelta,
        handleDragStart,
        handleDragMove,
        handleDragEnd,
        handleReorganizeDesk
    };
}