import React from "react";

type AccordionPropsType = {
    title:string
}

function Accordion(props:AccordionPropsType) {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <AccordionTitle h3title={props.title}/>
            <AccordionBody />
        </div>
    )
}

type AccordionTitlePropsType = {
    h3title:string
}

function AccordionTitle(props:AccordionTitlePropsType) {
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