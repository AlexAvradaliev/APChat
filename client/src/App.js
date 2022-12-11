import Router from './routes';
import './generalCss/App.css';
import Drawer from './components/SettingsDrawer';

function App() {
    return (
        <>
            <Drawer />
            <Router />
        </>
    );
}

export default App;
