function Square(size, color, x_cord, y_cord, border_color=''){
    this.size = size;
    this.color = color;
    this.x_cord = x_cord;
    this.y_cord = y_cord;
    this.border_color = border_color;

    // draws the square on to the screen
    this.draw = function(ctx){
        if(!ctx){ return }
        ctx.beginPath();
        ctx.strokeStyle = this.border_color;
        ctx.fillStyle = this.color;
        ctx.rect(this.x_cord, this.y_cord, this.size, this.size);
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

    // returns the distance between this object and other object
    // if is_integer is true then converts the distance into integer
    this.distance = function({x, y}, is_integer=false){

        let distance = Math.abs(Math.sqrt(Math.pow((x - this.x_cord), 2) + Math.pow((y - this.y_cord), 2)));

        if(is_integer){
            distance = Math.floor(distance);
        }
        return distance;
    }

}

export default Square;