import styled, { keyframes, css } from 'styled-components';
import { ETheme } from '../../utils/ETheme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.svg`
  fill: ${props => props.theme.type === ETheme.Light ? 'red' : 'white' };
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.6;
  }
`;

export const Next = styled(Button)`
  left: calc(100% + 20px);
`;

export const Prev = styled(Button)`
  right: calc(100% + 20px);
`;

const Blink = keyframes`
  from { background: #eee;}
  to { background: #e74c3c; }
`;

const Shake = keyframes`
  0 { transform: translate(0, 0) rotate(0); }
  20% { transform: translate(-2px, 0) rotate(-20deg); }
  30% { transform: translate(2px, 0) rotate(20deg); }
  50% { transform: translate(-2px, 0) rotate(-10deg); }
  60% { transform: translate(2px, 0) rotate(10deg); }
  100% { transform: translate(0, 0) rotate(0); }
`;

const Fall = keyframes`
  0% { top: -40px }
  60% { top: 0 }
  80% { top: -4px }
  100% { top: 0 }
`;

export const Pokeball = styled('div')<{ scale: string, color: string, animating?: boolean }>`
  transform: scale(${props => props.scale});
  position: relative;
  width: 40px;
  height: 40px;
  background: #fff;
  border: 2px solid ${props => props.color === 'red' ? '#000' : 'lightgray' };
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -2px 2px 0 2px #ccc;
  animation: ${props => (props.animating ? css`${Fall} .25s ease-in-out, ${Shake} 1.25s cubic-bezier(.36,.07,.19,.97) 3` : '')};


  &::before,
  &::after {
    content:"";
    position: absolute;
  }
  &::before {
    background: ${props => props.color};
    width: 100%;
    height: 50%;
  }
  &::after {
    top: calc(50% - 2px);
    width: 100%;
    height: 4px;
    background: ${props => props.color === 'red' ? '#000' : 'red' };
  }
`;

export const PokeballButton = styled('div')<{ animating?: boolean }>`
  position: absolute;
  top: calc(50% - 6px);
  left: calc(50% - 6px);
  width: 12px;
  height: 12px;
  background: ${props => props.color === 'red' ? '#7f8c8d' : 'red' };
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 2px ${props => props.color === 'red' ? 'black' : 'red' };
  animation: ${props => (props.animating ? css`${Blink} .5s alternate 7` : '')};
`;
