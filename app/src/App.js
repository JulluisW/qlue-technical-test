import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from '../src/pages/Main'
import Profile from './pages/Profile';
import CreatePage from './pages/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile/:fullName" element={<Profile />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
