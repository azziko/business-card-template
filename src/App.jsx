import Home from './pages/Home';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
    return(
        <ThemeContextProvider>
            <div className='wrapper dark:bg-jet'>
                <Home />
            </div>
        </ThemeContextProvider>
    );
}

export default App
