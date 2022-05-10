import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './routes/Detail';
import Home from './routes/Home'

function MovieApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie/:id' element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MovieApp;