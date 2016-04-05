/**
 * Created by zanmarolt on 4/5/16.
 */
var shapes = [];

function setup() {

    createCanvas(windowWidth, windowHeight);

    var boxSize = 20;

    for(var y=0;y<height;y+=boxSize){

        for(var x=0;x<width;x+=boxSize){

            var shape = new Shape(x,y);
            shapes.push(shape);

        }
    }
}

function draw() {

    background(255);

    for(var i=0;i<shapes.length;i++){
        var shape = shapes[i];
        shape.intersects();
        shape.draw();
    }

}

function Shape(x, y){
    this.x = x;
    this.y = y;
    this.r = 200;
    this.scale = 10;
    this.grow = 0;

    var r = map(this.y, 0, windowHeight, 10, 255);
    var g = map(this.x, 0, windowWidth, 10, 255);
    var b = random(50,100);

    this.color = color(r,g,b,10);

}

Shape.prototype.intersects = function(){

    var d = dist(this.x, this.y, mouseX, mouseY);

    if(d < this.r){
        this.grow = 1.5*this.scale;
        this.scale = lerp(this.scale, 15, 0.2);
        return true;
    }else{
        this.scale = lerp(this.scale, 1.5, 0.05);
        return false;
    }

};

Shape.prototype.draw = function(){

    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.scale+this.grow, this.scale+this.grow);

};

function mousePressed(){

    for(var i=shapes.length-1;i>=0;i--){
        var shape = shapes[i];
        if(shape.intersects()){
            shapes.splice(i, 1);
        }
    }

}