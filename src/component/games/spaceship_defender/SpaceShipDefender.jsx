import { useRef } from "react";
import { useEffect } from "react";
import Square from "../../canvas/utils/square";

function SpaceShipDefender({width = 600, height = 400}){

    const canvas = useRef();

    useEffect(() => {
        if(canvas == null || canvas.current == null){ return }

        const ctx = canvas.current.getContext('2d');

        let square = new Square(ctx, 10, 10, 10, 'white')

        square.draw();
    }, [])


    return(
        <canvas ref={canvas} width={width+'px'} height={height+'px'}></canvas>
    )
}

export default SpaceShipDefender;