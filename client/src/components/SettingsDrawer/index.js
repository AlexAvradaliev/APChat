import { useState } from 'react';
import DrawerButton from './DrawerButton/DrawerButton';
import DrawerMenu from './DrawerMenu/DrawerMenu';

const Drawer = () => {
    const [open, setOpen] = useState(false);
    const openHandler = (o) => () => {
        setOpen(o);
    };

    return (
        <>
            {open ? <DrawerMenu open={open} dismiss={openHandler(false)} /> : <DrawerButton open={openHandler(true)} />}
        </>
    );
};

export default Drawer;
