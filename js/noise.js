/**
 * Created by zanmarolt on 4/5/16.
 */

function setup(){

    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);

}

function draw(){

    loadPixels();

    console.log(pixels);

    for(var y=0;y<width;y++){

        for(var x=0;x<height; x++){

            var index = (x+y*width)*4;

            pixels[index]=x;
            pixels[index+1] = random(255);
            pixels[index+2] = y;
            pixels[index+3] = 255;
        }

    }

    updatePixels();

}