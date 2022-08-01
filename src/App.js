import './App.css';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';

const Home = props =>{
  return(
    <div>
      <h1>Welcome</h1>
    </div>
  );
}

const DisplayValue = props =>{
  const {value} = useParams();
  return(
    <h1>{value}</h1>
  );
}

const DisplayStyledWord = props =>{
  const {word} = useParams();
  const {color1} = useParams();
  const {color2} = useParams();
  
  if (isNaN(word)) {
    return(
      <div>
        <h1 style={{ color:color1, backgroundColor:color2}} >{word}</h1>
      </div>
    );
  }
  else {
    return(<Home/>);
  }
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/:value' element={ <DisplayValue/> } />
          <Route path='/:word/:color1/:color2' element={ <DisplayStyledWord/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
