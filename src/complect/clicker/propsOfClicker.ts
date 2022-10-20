

export default function propsOfClicker({
    onCtxMenu,
}: {
    onCtxMenu?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}) {
    let onContextMenuTimer: unknown;
    let isContextMenuClicked = false;

    return {
        ...(onCtxMenu ? {
            onContextMenu: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                event.preventDefault();
                event.stopPropagation();
                if (isContextMenuClicked) return;
                isContextMenuClicked = true;
                onCtxMenu(event);
            },
            onTouchStart: (event: any) => {
                if (isContextMenuClicked) return;
                isContextMenuClicked = true;
                event.clientX = event.touches[0].clientX;
                event.clientY = event.touches[0].clientY;
                onContextMenuTimer = setTimeout(onCtxMenu, 1000, event);
            },
            onTouchMove: () => clearTimeout(onContextMenuTimer as never),
            onTouchEnd: () => {
                isContextMenuClicked = true;
                clearTimeout(onContextMenuTimer as never);
            },
        } : null)
    };

}