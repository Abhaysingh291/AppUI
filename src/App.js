import './App.css';
import Navb from './components/navbar';
import Ui from './components/main';
import Summary from './components/summary';
import { Routes, Route, } from "react-router-dom";
import BookTicket from './components/form';
function App() {
  return (
    <div className="App">
      <Navb />
      <Routes>
        <Route path="/" element={<Ui />} />
        <Route path="/summary" element={<Summary/>}  />
        <Route path="/BookTicket" element={<BookTicket/>}  />
      </Routes>
    </div>
  );
}

export default App;
