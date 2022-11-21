import React from "react";


function Accordion(props:any) {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <AccordionTitle h3title={props.title}/>
            <AccordionBody />
        </div>
    )
}

function AccordionTitle(props:any) {
    console.log("AccordionTitle rendering")
    return <h3>{props.h3title}</h3>
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

export default Accordion;