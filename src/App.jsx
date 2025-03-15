import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from '../src/pages/Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Sign In</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/interview-tips">Interview Tips</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/interview-tips" element={<InterviewTips />} />
      </Routes>
    </Router>
  );
}

export default App
