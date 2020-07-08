import styled from 'styled-components';
import { EBreakpoint } from '../../utils/EBreakpoint';

export const ContainerWrapper = styled.div`
  display: grid;
  grid-row-gap: 30px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  @media ${EBreakpoint.GtSm} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${EBreakpoint.GtMd} {
    grid-template-columns: repeat(4, 1fr);
  }
`;