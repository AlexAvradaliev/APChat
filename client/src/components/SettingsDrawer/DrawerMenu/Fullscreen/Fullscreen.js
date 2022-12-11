import { useEffect, useState } from 'react';
import { RiFullscreenFill, RiFullscreenExitFill } from 'react-icons/ri';

import styles from './Fullscreen.module.css';

const Fullscreen = () => {
    const [fullscreen, setFullscreen] = useState(false);

    useEffect(() => {
        function onFullscreenChange() {
            setFullscreen(Boolean(document.fullscreenElement));
        }

        document.addEventListener('fullscreenchange', onFullscreenChange);

        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };

    return (
        <button className={`${styles.full} ${fullscreen ? styles.active : ''}`} onClick={toggleFullScreen}>
            {fullscreen ? <RiFullscreenExitFill /> : <RiFullscreenFill />}
            <p className={styles.full__text}>Fullscreen</p>
        </button>
    );
};

export default Fullscreen;
