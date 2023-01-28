import Home from './pages/Home';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
    return(
        <ThemeContextProvider>
            <Home />
        </ThemeContextProvider>
    );
}

export default App
