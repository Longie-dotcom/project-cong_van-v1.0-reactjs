import { useRef, useEffect } from 'react';
import './UpgradeRow.css';

export function UpgradeRow({
    'data-item-id': itemId,
    isTargetAnim, isMaxLevel, isDisabled,
    children, icon, name, levelTag, metric, cost, onMouseDown, onStopHolding, onRowReady
}) {
    const rowRef = useRef(null);

    useEffect(() => {
        if (rowRef.current && onRowReady) {
            const iconFrame = rowRef.current.querySelector('.upgrade-icon-frame');
            onRowReady(iconFrame);
        }
    }, []);

    return (
        <div
            data-item-id={itemId}
            className={`upgrade-item-row ${isDisabled ? 'upgrade-disabled' : 'upgrade-purchasable'} ${isTargetAnim ? 'juice-shake-row' : ''}`}
            onMouseDown={onMouseDown}
            onMouseUp={onStopHolding}
            onMouseLeave={onStopHolding}
        >
            <div className={`upgrade-icon-frame ${isTargetAnim ? 'juice-pop-icon' : ''}`}>
                <img src={icon} alt={name} className="upgrade-pixel-icon" />
            </div>
            <div className="upgrade-info-text">
                <div className="upgrade-name-row">
                    <span className="upgrade-title-name">{name}</span>
                    {levelTag && <span className="upgrade-level-tag">{levelTag}</span>}
                </div>
                <div className="upgrade-data-row">
                    {metric}
                    {cost}
                </div>
                {children}
            </div>
            {isMaxLevel && <div className="max-level-overlay">ĐÃ TỐI ĐA</div>}
        </div>
    );
}