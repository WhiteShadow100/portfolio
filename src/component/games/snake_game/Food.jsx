import Circle from "../../../assets/canvas/shapes/Circle";

function Food(size, color, x_cord, y_cord, border_color=null){
    this.size = size;
    this.color = color;
    this.x_cord = x_cord;
    this.y_cord = y_cord;
    this.border_color = border_color || color
    this.circle = new Circle(this.size, this.color, this.x_cord, this.y_cord, this.border_color)

    // used for animation
    // maximum growth and minimum growth of food during animation
    this.max_size = this.size * (1.25)
    this.min_size = this.size * (1/2)
    // speed on the basis of which size is increased or decreased
    this.animation_speed = 0.5;

    // draws the circle on to the screen
    this.draw = function(ctx){
        if(!ctx){ return }

        this.circle.draw(ctx);
    }

    // returns coordinate
    this.getCord = function(){
        return this.circle.getCord()
    }

    // sets the x-coordinate
    this.setXCord = function(x_cord){
        this.circle.setXCord(x_cord)
    }

    // sets the y-coordinate
    this.setYCord = function(y_cord){
        this.circle.setYCord(y_cord)
    }

    // retuns the coordinates after reduction of radius
    this.getActualCord = function(){
        let {x, y} = this.circle.getCord();
        return {x:(x - this.size), y: (y - this.size)}
    }

    // animates the food
    this.drawAnimated = function(ctx){
        debugger
        if(this.size >= this.max_size ||  this.size <= this.min_size){
            this.animation_speed *= -1
        }
        this.size += this.animation_speed
        this.circle.setSize(this.size)
        this.draw(ctx)
    }
    

    // calculates the distance between two square object



}


export default Food;