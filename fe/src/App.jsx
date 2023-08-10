import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Container/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
