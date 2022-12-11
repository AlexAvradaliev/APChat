import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

import './Scroll.css'

const overscrollOptions = {
    enable: true,
    effect: 'bounce',
    damping: 0.15,
    maxOverscroll: 100,
    glowColor: '#fff',
};

const options = {
    damping: 0.07,
    plugins: {
        overscroll: { ...overscrollOptions },
    },
};

const Scroll = () => {
    useEffect(() => {
        Scrollbar.use(OverscrollPlugin);
        Scrollbar.init(document.querySelector('.scroll'), options);

        return () => {
            if (Scrollbar) Scrollbar.destroy(document.querySelector('.scroll'));
        };
    }, []);

    return null;
};

export default Scroll;
