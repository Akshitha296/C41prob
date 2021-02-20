const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops = 100;

function preload(){
    
}

function setup(){
    createCanvas(400, 650) 
    boy = new Umbrella(200, 325, 40)
}

function draw(){
    background(2, 28, 38)
        boy.display()
            for(var i=0; i<maxDrops; i++){
                drop.push(new Drop(random(0, 400), random(650), 10))
            }
            drop.display()
}