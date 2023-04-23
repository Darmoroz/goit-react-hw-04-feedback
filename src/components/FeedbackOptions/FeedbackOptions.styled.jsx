import styled from 'styled-components';

export const ButtonGrid = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.spacing(6)};
  margin: ${p => p.theme.spacing(3)} 0;
  button {
    font-size: ${p => p.theme.spacing(4)};
    font-weight: bold;
    padding: ${p => p.theme.spacing()};
    min-width: ${p => p.theme.spacing(15)};
    border: none;
    border-radius: ${p => p.theme.spacing(2)};
  }
`;
