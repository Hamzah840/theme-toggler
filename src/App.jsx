import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

const App = () => {
  const { theme, themeToggler } = useContext(ThemeContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-all duration-500 ease-in-out bg-gray-100 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Current Theme: {theme}</h1>
      <button
        className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 rounded-full px-4 py-4 font-semibold text-white shadow transition-colors duration-300 ease-in-out flex gap-2"
        onClick={themeToggler}
      >
        {theme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
        <p>Toggle Theme</p>
      </button>
    </div>
  );
};

export default App;
