import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";

function App() {
    return (
        <div>
            <AppTitle/>
            <Accordion/>
            Article 1
            <Rating value={3}/>
            Article 2
            <Rating value={4}/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <h1>This is App</h1>
}

export default App;
