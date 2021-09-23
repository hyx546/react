import React, { useContext } from 'react';
import { ThemeContext } from './index';

function themeButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme.background, color: theme.foreground }}>I am styled by theme context!</button>;
}

export default themeButton;
