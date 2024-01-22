
import './App.css';
import Login from './Pages/Form/Form';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Student_Login from './Pages/student_form/Form';
function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/Student_Login' element={<Student_Login/>}/>
        </Routes>
        </Router>
    </>
  );
}

export default App;
 