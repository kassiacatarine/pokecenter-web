import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  padding: 0 30px;
`;