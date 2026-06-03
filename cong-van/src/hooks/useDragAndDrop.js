import { useState } from "react";

export function useDragAndDrop({
    initialPaperPos,
    initialStamperPos,
    onStamp,
    deskObstacles,
    paperSize,
    mailSize,
    isTransitioning,
    openMailSound,
    activeMailsList
}) {
    const [paperPos, setPaperPos] = useState(initialPaperPos);
    const [livePaperDelta, setLivePaperDelta] = useState({ x: 0, y: 0 });
    const [mailPositions, setMailPositions] = useState({});
    const [liveMailDelta, setLiveMailDelta] = useState({ x: 0, y: 0 });
    const [lastStampPos, setLastStampPos] = useState(null);
    const [liveStamperDelta, setLiveStamperDelta] = useState({ x: 0, y: 0 });
    const [activeMailDragID, setActiveMailDragID] = useState(null);
    const [isStamperReturning, setIsStamperReturning] = useState(false);
    const [isStamping, setIsStamping] = useState(false);

    const playPaperRustle = () => {
        const audio = new Audio(openMailSound);
        audio.volume = 0.55;
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
        if (active.id === "stamper-1") {
            setLiveStamperDelta({ x: 0, y: 0 });
        }
        if (typeof active.id === "string" && active.id.startsWith("mail-")) {
            setActiveMailDragID(active.id);
            setLiveMailDelta({ x: 0, y: 0 });
            playPaperRustle();
        }
    }

    function handleDragEnd(event) {
        if (isTransitioning) return;
        const { active, over } = event;

        if (active.id === "paper-1") {
            setPaperPos((prev) => ({
                x: prev.x + livePaperDelta.x,
                y: prev.y + livePaperDelta.y,
            }));
            setLivePaperDelta({ x: 0, y: 0 });
        }
        if (active.id === "stamper-1") {
            if (over?.id === "paper-1") {
                // Fix lỗi con dấu bị null: Đo trực tiếp vị trí thực tế từ DOM wrapper
                const stamperEl = document.querySelector('.stamper-wrapper');
                const finalPos = stamperEl ? stamperEl.getBoundingClientRect() : null;

                // 1. Khóa cứng vị trí delta ngay tại chỗ thả chuột
                setLiveStamperDelta({ x: event.delta.x, y: event.delta.y });

                // 2. Kích hoạt class CSS dập lún xuống mặt bàn
                setIsStamping(true);

                // 3. Đợi hành trình lún xuống (300ms) -> Tiến hành in dấu mực lên giấy
                setTimeout(() => {
                    if (finalPos) {
                        setLastStampPos(finalPos);
                        onStamp(finalPos); // Gọi hàm callback truyền vị trí đi
                    }
                }, 300);

                // 4. Giữ nguyên trạng thái lún 1.2 giây rồi nhấc lên, bật hiệu ứng quay về
                setTimeout(() => {
                    setIsStamping(false);
                    setIsStamperReturning(true);
                    setLiveStamperDelta({ x: 0, y: 0 }); // Đưa delta về 0 để quay về vị trí ban đầu (1500, 100)
                }, 1200);

                // 5. Sau khi kết thúc thời gian di chuyển (1.2s chờ + 0.6s bay về) -> Dọn dẹp state
                setTimeout(() => {
                    setIsStamperReturning(false);
                    setLastStampPos(null);
                }, 1800);

            } else {
                // Thả hụt giấy thì bay thẳng về ngay lập tức
                setLiveStamperDelta({ x: 0, y: 0 });
            }
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
        if (active.id === "stamper-1") {
            setLiveStamperDelta({ x: 0, y: 0 });
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
        setPaperPos(initialPaperPos);
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
        isStamperReturning,
        lastStampPos,
        isStamping,
        liveStamperDelta,
        handleDragStart,
        handleDragMove,
        handleDragEnd,
        handleReorganizeDesk
    };
}