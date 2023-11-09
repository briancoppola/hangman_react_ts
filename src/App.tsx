import './App.css';
import Container from './components/layout/Container';
import Header from './components/sections/Header';
import Main from './components/sections/Main';
import Game from './game/Game';
import Footer from './components/sections/Footer';

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Game />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
