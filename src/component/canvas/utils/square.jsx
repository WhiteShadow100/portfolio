function Square(context, cord_x, cord_y, size, fillColor=null, strokeColor=null, lineWidth=1){
    this.ctx = context
    this.x = cord_x
    this.y = cord_y
    this.size = size
    this.fillColor = fillColor
    this.strokeColor = strokeColor
    this.lineWidth = lineWidth
    

    this.getCords = function(){
        /* returns the x and y coordinate of the square in a object format */
        return {x: this.x, y: this.y}
    }

    this.setCords = function(x, y){
        /* sets the x and y coordinate of the square */ 
        this.x = x
        this.y = y
    }

    this.getCenterCords = function(){
        /* returns the central coordinate of the square in obejct format */ 
        return {x: (this.x - (this.size / 2)), y: (this.y - (this.size / 2))}
    }


    this.draw = function(context=null){
        let ctx = context || this.ctx
        
        ctx.beginPath();
        ctx.strokeStyle = this.fillColor || ''
        ctx.rect(this.x, this.y, this.size, this.size)
        ctx.lineWidth = this.lineWidth
        ctx.stroke();
    }


    
}


export default Square;
