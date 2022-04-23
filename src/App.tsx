import styled from 'styled-components'
import GlobalStyles from './GlobalStyles';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F7CBB2;
`

const Title = styled.h1`
  font-size: 3rem;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <Background>
        <Title>Dongoc's Portfolio!</Title>
      </Background>
    </>
  );
}

export default App;
