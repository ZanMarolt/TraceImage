/**
 * Created by zanmarolt on 4/5/16.
 */

var squares = [];
var boxSize = 20;

function setup(){

    createCanvas(windowWidth, windowHeight);

    noStroke();

    for(var y=0;y<windowHeight-boxSize; y+= boxSize){

        for(var x=0;x<windowWidth-boxSize; x+=boxSize){

            squares.push({x:x, y:y});

        }

    }

}

function preload(){

    img = loadImage('./image.jpg');

}

var i = 0;

function draw(){

    var myColor = random(0,255);

    var imageColor = img.get(squares[i].x, squares[i].y);

    fill(imageColor);
    rect(squares[i].x,squares[i].y,boxSize,boxSize);

    i++;

}