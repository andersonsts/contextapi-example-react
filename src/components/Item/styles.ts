import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > span + span {
    margin-left: 10px;
  }
`;