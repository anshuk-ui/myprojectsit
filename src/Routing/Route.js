import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import User from './User'; 
function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element ={<Home />} />
                    <Route path='/about' element ={<About />} />
                    <Route path='/user' element ={<User />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
 }
 export default App;