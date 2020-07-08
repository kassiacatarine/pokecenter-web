import styled from 'styled-components';
import { EBreakpoint } from '../../utils/EBreakpoint';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${EBreakpoint.GtSm} {
    grid-template-columns: 1fr 2fr 1fr;
  }

  @media ${EBreakpoint.GtMd} {
    grid-template-columns: 1fr 3fr 1fr;
  }
`;