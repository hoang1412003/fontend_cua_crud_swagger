
import './App.css';
import StudentDetail from './components/studentDetail/StudentDetail';
import HomePage from './pages/home/HomePage';
import StudentPage from './pages/studentPage/StudentPage';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
          <Router>
                <Routes>
                    <Route path="/student" element={<StudentPage />}></Route>
                    <Route index element={<HomePage />}></Route>
                    <Route path="/student-detail/:id" element={<StudentDetail/>}></Route>
                </Routes>
            </Router>
    </div>
  );
}

export default App;
