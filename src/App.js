import { useState } from "react";
import { DefaultContext } from "./Context";
import ThemeContext, { themes } from "./context-theme";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  const [theme, setTheme] = useState(themes.dark);
  const toogleTheme = () =>
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);

  return (
    <DefaultContext.Provider value={{ handleCreateFan }}>
      <ThemeContext.Provider value={theme}>
        <Header fan={fan} />
        <button className="ttt" onClick={toogleTheme}>
          Change Theme
        </button>
        <hr />
        <Content />
        <hr />
      </ThemeContext.Provider>
      <Footer />
    </DefaultContext.Provider>
  );
}
