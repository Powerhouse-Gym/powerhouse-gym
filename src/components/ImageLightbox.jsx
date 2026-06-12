import { useState, useEffect } from 'react';
import '../image-lightbox.css';

function ImageLightbox({ src, alt, className = '', hintLabel = 'Tap to enlarge' }) {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e) => {
            if (e.key === 'Escape') close();
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKey);
        };
    }, [isOpen]);

    return (
        <>
            <button
                type="button"
                className={`image-lightbox-trigger ${className}`.trim()}
                onClick={open}
                aria-label={`${hintLabel} — ${alt}`}
            >
                <img src={src} alt={alt} />
                <span className="image-lightbox-hint" aria-hidden="true">
                    <span className="image-lightbox-hint-icon">⤢</span>
                    <span className="image-lightbox-hint-text">{hintLabel}</span>
                </span>
            </button>

            {isOpen && (
                <div
                    className="image-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={alt}
                    onClick={close}
                >
                    <button
                        type="button"
                        className="image-lightbox-close"
                        onClick={close}
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <img
                        src={src}
                        alt={alt}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}

export default ImageLightbox;
