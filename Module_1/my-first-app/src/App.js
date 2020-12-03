import './App.css';
import FirstComponent from './components/firstComponent';
import SecondElement from './components/secondComponent';
import ThirdComponent from './components/thirdComponent';


function App() {
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <FirstComponent />
      <SecondElement /> 
      <ThirdComponent />
    </div>
  );
}

export default App;
