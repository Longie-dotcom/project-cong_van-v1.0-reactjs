import { useDraggable } from '@dnd-kit/core';
import { STAMPER_CONFIG } from '../../../data/assets/stamper';
import './Stamper.css';

export default function Stamper({ isReturning, isStamping, liveDelta = { x: 0, y: 0 } }) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: "stamper-1",
    });

    const style = {
        transform: isDragging
            ? transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined
            : `translate3d(${liveDelta.x}px, ${liveDelta.y}px, 0)`
    };

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={`stamper-wrapper 
                ${isDragging ? 'is-dragging' : ''} 
                ${isReturning ? 'is-returning' : ''} 
                ${isStamping ? 'is-stamping' : ''}`
            }
            style={style}
        >
            <img 
                src={isDragging ? STAMPER_CONFIG.IMAGES.stamped : STAMPER_CONFIG.IMAGES.normal} 
                alt="stamper"
                className="stamper-img"
            />
        </div>
    );
}