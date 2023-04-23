import styled from 'styled-components';

export const Container = styled.div`
  margin: 18px auto 0;
  text-align: center;
  width: ${p => p.theme.spacing(100)};
  border: 1px dashed black;
  border-radius: ${p => p.theme.spacing()};
  background: ${p => p.theme.colors.background};
`;
