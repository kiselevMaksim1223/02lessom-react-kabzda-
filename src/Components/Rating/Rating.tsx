import React from "react";

function Star() {
    console.log("star rendering")
    return <span><b>Star</b> </span>
}

export function Rating() {
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