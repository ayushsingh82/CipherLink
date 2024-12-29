import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import ContractConverter from './components/ContractConverter';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/converter" element={<ContractConverter />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
