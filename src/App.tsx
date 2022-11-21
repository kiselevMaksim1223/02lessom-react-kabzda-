import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={"This is APP Component"}/>
            <Accordion title={"List of Components"}/>
            <PageTitle title={"Users"}/>
            <Accordion title={"List of Users"}/>
            Article 1
            <Rating value={3}/>
            Article 2
            <Rating value={4}/>
        </div>
    );
}

function PageTitle(props:any) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
