import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SignUp from './pages/SignUp';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp/>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App