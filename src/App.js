import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './CommonComponents/Home.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' 
          element = {<Home />}>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
