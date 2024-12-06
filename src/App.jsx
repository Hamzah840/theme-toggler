import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
    const {theme, themeToggler} = useContext(ThemeContext);

    return <div>
        <h1>Current Theme: {theme}</h1>
        <button onClick={themeToggler}>Toggle Theme</button>
    </div>
}

export default App;