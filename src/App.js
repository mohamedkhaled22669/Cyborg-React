import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import './App.css' 


import { Container} from './components/index'

import {Header, Footer} from './sections/index'
import {Home , Profile, Browse, Details, Streams} from './components/Pages/index'

const App = () => {
    return(
        <>
            <Router basename='/cyborg-react'>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/browse' element={<Browse />} />
                        <Route path='/details' element={<Details />} />
                        <Route path='/streams' element={<Streams />} />
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    )
}

export default App;