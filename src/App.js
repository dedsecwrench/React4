import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from './Routing/Header';
import Home from './Routing/Home';
import PageNotFound from './Routing/PageNotFound';
import Student from './Routing/Student';
import Contact from './Routing/Contact';

function App() {
  return (
    <div className="App">

        <Router>

            <Header/>
                <Routes>
                  <Route path='/' element={<Navigate to='/home' />}  />
                  <Route path='/home' element={<Home/>}  />
                  <Route path='/student' element={<Student/>}  />
                  <Route path='/contact' element={<Contact/>}  />
                  <Route path='/*' element={<PageNotFound/>}  />
                </Routes>
            
        </Router>

    </div>
  );
}

export default App;
