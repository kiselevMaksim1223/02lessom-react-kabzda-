import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <AppTitle/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <h1>This is App</h1>
}

function Star() {
    console.log("star rendering")
    return <div>Star</div>
}

function Rating() {
    console.log("rating rendering")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return <>This is Acc Title</>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
}

function Accordion() {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody />
        </div>
    )
}

export default App;
