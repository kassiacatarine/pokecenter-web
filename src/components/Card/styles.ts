import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)<{ color: string }>`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  text-decoration: none;
  background-color: ${(props) => props.color};
  opacity: 0.9;
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
`;

export const Title = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;
