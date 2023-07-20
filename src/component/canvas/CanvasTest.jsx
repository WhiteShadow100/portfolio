import { useEffect, useRef, useState } from "react";
import RandomCanvas from "./helper/RandomCanvas";
import StarCanvas from "./helper/StarCanvas";

function CanvasTest(){

    const page_input_ref = useRef("1");

    const [page, setPage] = useState("1");

    // hold the page number and its respective element
    const page_dictionary = {
        "1": {
            title: "Random Canvas",
            element: <RandomCanvas />
        },
        "2": {
            title: "Star Canvas",
            element: <StarCanvas />
        }
    }

    // changes the current page number
    function handlePageChange(){
        let page_number = page_input_ref.current.value;

        setPage(page_number)
    }

    return(
        <>
            <div>
                Title: {page_dictionary[page].title}
                <br />
                Page: {page}
                <br />
                <input
                    type="text"
                    ref={page_input_ref}
                />
                <button onClick={handlePageChange}>Change</button>
            </div>  
            <h1>Welcome to canvas</h1>
            {page_dictionary[page].element}
        </>
    )
}

export default CanvasTest;