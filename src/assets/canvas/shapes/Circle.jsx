function Circle(size, color, x_cord, y_cord, border_color=null){
    this.size = size;
    this.color = color;
    this.x_cord = x_cord;
    this.y_cord = y_cord;
    this.border_color = border_color || color;

    // draws the square on to the screen
    this.draw = function(ctx){
        if(!ctx){ return }
        ctx.beginPath();
        ctx.strokeStyle = this.border_color;
        ctx.fillStyle = this.color;
        ctx.arc(this.x_cord, this.y_cord, this.size, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.fill();
    }

    // sets the x-coordinate of the square
    this.setXCord = function(x_cord){
        this.x_cord = x_cord
    }

    // sets the y-coordinate of the square
    this.setYCord = function(y_cord){
        this.y_cord = y_cord
    }

    // returns the coordinate of the square
    this.getCord = function(){
        return {x: this.x_cord, y: this.y_cord}
    }

    // returns the size 
    this.getSize = function(){
        return this.size
    }

    // set the size
    this.setSize = function(size){
        this.size = size
    }

}

export default Circle;