import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import RootRouter from './RootRouter'
import Footer from './views/components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <RootRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App
