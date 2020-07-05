import React from 'react';
import { Container } from './styles';
import MenuTheme from '../MenuTheme';
import { ETheme } from '../../utils/ETheme';

interface HeaderProps {
  toggleTheme(theme: ETheme): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <Container>
      Pokecenter
      <MenuTheme onChange={toggleTheme} />
    </Container>
  );
}

export default Header;