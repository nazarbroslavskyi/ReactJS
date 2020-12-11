import './App.scss';
import Button from './components/Button';
import Header from './components/Header';
import FilmsCounter from './components/FilmsCounter';
import Footer from './components/Footer';
import Main from './components/Main';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="app">
      {/* <header className="App-header">
       
      
      </header> */}

     

      <Header></Header>
      <Main></Main>
      {/* <FilmsCounter counter="39"></FilmsCounter> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
