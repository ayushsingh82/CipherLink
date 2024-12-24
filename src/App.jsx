import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Wallet from './components/Wallet';
import Identity from './components/Identity';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
          
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/identity" element={<Identity />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
