import { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
} from '@mui/material';

const PHONE_DISPLAY = '501-247-1517';
const PHONE_TEL = '+15012471517';

export { PHONE_DISPLAY, PHONE_TEL };

export default function PhoneLink({
    children,
    className,
    style,
    as: Component = 'a',
    ...rest
}) {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleOpen = (e) => {
        if (e?.preventDefault) e.preventDefault();
        setCopied(false);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleCopy = async () => {
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(PHONE_DISPLAY);
            } else {
                const ta = document.createElement('textarea');
                ta.value = PHONE_DISPLAY;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            setCopied(true);
        } catch {
            setCopied(false);
        }
    };

    const { onClick: userOnClick, ...restProps } = rest;

    const triggerProps = {
        ...restProps,
        className,
        style: { cursor: 'pointer', ...(style || {}) },
        onClick: (e) => {
            if (userOnClick) userOnClick(e);
            handleOpen(e);
        },
    };

    if (Component === 'a') {
        triggerProps.href = '#';
    } else if (Component !== 'button') {
        triggerProps.role = 'button';
        triggerProps.tabIndex = 0;
        triggerProps.onKeyDown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') handleOpen(e);
        };
    }

    return (
        <>
            <Component {...triggerProps}>
                {children ?? PHONE_DISPLAY}
            </Component>
            <Dialog open={open} onClose={handleClose} aria-labelledby="phone-dialog-title">
                <DialogTitle id="phone-dialog-title" sx={{ textAlign: 'center' }}>
                    Call for more information
                </DialogTitle>
                <DialogContent sx={{ textAlign: 'center', minWidth: 280 }}>
                    <Typography
                        variant="h4"
                        component="a"
                        href={`tel:${PHONE_TEL}`}
                        sx={{
                            display: 'block',
                            fontWeight: 700,
                            color: 'var(--powerhouse-red)',
                            textDecoration: 'none',
                            mb: 1.5,
                        }}
                    >
                        {PHONE_DISPLAY}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555' }}>
                        {copied ? 'Copied to clipboard!' : 'Tap the number to call, or copy it below.'}
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                        onClick={handleCopy}
                        variant="contained"
                        sx={{ backgroundColor: 'var(--powerhouse-red)' }}
                    >
                        {copied ? 'Copied' : 'Copy Number'}
                    </Button>
                    <Button onClick={handleClose} variant="outlined">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
