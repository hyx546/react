import React, { useCallback, useState } from 'react';
import ThemedButton from './themeButton';

const themes = {
  light: { foreground: '#000000', background: '#eeeeee' },
  dark: { foreground: '#ffffff', background: '#222222' },
};

// 创建一个Theme的Context
export const ThemeContext = React.createContext(themes.light);

export default function MyApp() {
  const [theme, setTheme] = useState('light');

  // 切换theme的回调函数
  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }, []);
  // 整个应用下使用ThemeContext.Provider作为根组件
  return (
    <ThemeContext.Provider value={themes[theme]}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Toolbar></Toolbar>
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>;
}
