import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"                 element={<HomePage />} />
        <Route path="/projects/:id"     element={<ProjectPage />} />
        {/* Redirect any unknown route back to home */}
        <Route path="*"                 element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
