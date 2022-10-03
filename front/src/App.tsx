import React from 'react';
import "./index.css"
import {Route,Router,Link,BrowserRouter} from 'react-router-dom'
import {Header} from './components/Header'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <b>asds</b>
            </main>
        </BrowserRouter>
    );
}

export default App;