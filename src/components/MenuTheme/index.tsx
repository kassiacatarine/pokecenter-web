import React, { useState, useContext } from 'react';
import { Container } from './styles';
import { AiOutlineBgColors } from 'react-icons/ai';
import { ETheme } from '../../utils/ETheme';
import { ThemeContext } from 'styled-components';

interface MenuThemeProps {
  onChange(theme: ETheme): void;
}

const MenuTheme: React.FC<MenuThemeProps> = ({ onChange }) => {
  const { type } = useContext(ThemeContext);
  const [themeActive, setThemeActive] = useState(type);

  function handleChangeTheme() {
    const theme = themeActive === ETheme.Light ? ETheme.Dark : ETheme.Light;
    setThemeActive(theme);
    onChange(theme);
  }

  return (
    <Container onClick={handleChangeTheme}>
      <AiOutlineBgColors />
    </Container>
  );
}

export default MenuTheme;