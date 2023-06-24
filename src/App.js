import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Register, Landing, Error } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/inscription' element={<Register />} />
          <Route path='/bienvenue' element={<Landing />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
