import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';
import './scroll.css';

const Scroll = ({ children, ...other }) => {
    return (
        <SimpleBarReact timeout={500} clickOnTrack={false} {...other}>
            {children}
        </SimpleBarReact>
    );
};

export default Scroll;
