import React from 'react';
import "./index.css"
import {Route,Router,Link,BrowserRouter} from 'react-router-dom'
import {Header} from './components/Header'
import {Footer} from './components/Footer'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <b>asds</b>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;