let particleCount = 30;
let particles = [];
let particles2 = [];
let particles3 = [];
let mycolor1;
let mycolor2;
let mins;
let curr_mins;

function setup() {
	createCanvas(600,600); 
	mycolor1=255
	mycolor2=120
	const curr_mins = minute();
}



function draw() {
	
	// setting the background to black
	background(0);

	// adjusting the particle sizes for the seconds candle
	for(let idx = particles.length-1; idx>=0; idx--){
		particles[idx].move();
		particles[idx].show();
		particles[idx].shrink();

		if(particles[idx].rad <=0){
			particles.splice(idx,1);
		}
	}

	// adjusting the particle sizes for the minutes candle
	for(let idx = particles2.length-1; idx>=0; idx--){
		particles2[idx].move();
		particles2[idx].show();
		particles2[idx].shrink();

		if(particles2[idx].rad <=0){
			particles2.splice(idx,1);
		}
	}

	// adjusting the particle sizes for the hours candle
	for(let idx = particles3.length-1; idx>=0; idx--){
		particles3[idx].move();
		particles3[idx].show();
		particles3[idx].shrink();

		if(particles3[idx].rad <=0){
			particles3.splice(idx,1);
		}
	}
	
	// obtaining the current second, minute, and hour values
	const secs = second();
	const mins = minute();
	const hours = hour();

	// Logging the minute value to the console every time it changes
	if(curr_mins != mins){
		curr_mins=mins;
		console.log(curr_mins);
	}

	// Calculating parameters for displaying the pool of candle wax at the base of the candle
	let waxpool_secs = 5*(20-secs);
	let waxpool_mins = 5*(20-mins);
	let waxpool_hours = 5*(18-hours)

	// Calculating values for the candle heights for each candle
	let candle_h_secs = 3*(60-secs); 
	let candle_h_mins = 4*(60-mins); 
	let candle_h_hours = 15*(24-hours); 

	noStroke();
	fill(mycolor1,85,mycolor2);
	
	// Displaying the pool of candle wax at the base of each candle
	ellipse(60,600,30,6-waxpool_hours/9.6);
	ellipse(90,600,34,5-waxpool_hours/8);
	ellipse(250,600,20,6-waxpool_mins/9.6);
	ellipse(280,600,24,5-waxpool_mins/8);
	ellipse(450,600,12,6-waxpool_secs/9.6);
	ellipse(480,600,14,5-waxpool_secs/8);
	

	// Displaying the body of each candle 
	push();
	noStroke();
	fill(mycolor1,85,mycolor2);
	rect(60,600,60,-candle_h_hours);
	pop();


	push();
	noStroke();
	fill(mycolor1,70,mycolor2);
	rect(250,600,40,-candle_h_mins);
	pop();

	

	push();
	noStroke();
	fill(mycolor1,70,mycolor2);
	rect(450,600,30,-candle_h_secs);
	pop();

	// Displaying white lines to show the full height of each candle
	stroke(255);
	line(550,600, 550, 420);
	line(520,420, 550, 420);
	line(535,465, 550, 465);
	line(520,510, 550, 510);
	line(535,555, 550, 555);

	line(380,600, 380, 360);
	line(350,360, 380, 360);
	line(365,420, 380, 420);
	line(350,480, 380, 480);
	line(365,540, 380, 540);

	line(190,600, 190, 240);
	line(160,240, 190, 240);
	line(175,330, 190, 330);
	line(160,420, 190, 420);
	line(175,510, 190, 510);

	// Displaying a short text description of the abstract clock
	textSize(12);
	fill(212,212,212);
	noStroke();
	text('Abstract Clock #1   		     UNI: pc3019   By: Preethi Chandirasekeran', 10, 20);
	text('This clock consists of 3 candles. The first, second, and third candles represent the current hour,', 10, 40);
	text('minute, and second respectively. The white lines represent the full height of each candle ', 10, 60);
	text('As time passes, the height of the candle decreases and slowly wax pools at the bottom of the candle', 10, 80);
	text('For example when the seconds candle reaches the bottom, then 60 seconds have passed', 10, 100);
	fill(148, 247, 224);
	text('Click anywhere to change the candle colors to a random color', 10, 140);
	fill(212,212,212);

	// Adding new flame particles for the seconds candle
	// This candle has the smallest sized flame
	// As the height of the candle decreases, the size of the flame also decreases
	let r = random(10,30);
	if (secs <= 56){
	let p= new Particle(465, 600-candle_h_secs,  r);
	particles.push(p);
	if(secs<=41){
		let p= new Particle(465, -15+600-candle_h_secs,  r);
	particles.push(p);
	}
	if(secs<=31){
		let p= new Particle(465, -15+600-candle_h_secs,  r);
	particles.push(p);
	}
	if(secs<22){
		let p= new Particle(465, -15+600-candle_h_secs,  r);
	particles.push(p);
	}
	}

	// Adding new flame particles for the minutes candle
	let r2 = random(20,40);
	if (mins <= 56){
	let p= new Particle(270, 600-candle_h_mins,  r2);
	particles2.push(p);
	if(mins<=41){
		let p= new Particle(270, -15+600-candle_h_mins,  r2);
	particles2.push(p);
	}
	if(mins<=31){
		let p= new Particle(270, -15+600-candle_h_mins,  r2);
	particles2.push(p);
	}
	if(mins<22){
		let p= new Particle(270, -15+600-candle_h_mins,  r2);
	particles2.push(p);
	}
	}

	// Adding new flame particles for the hours candle
	let r3 = random(30,50);
	if (hours <= 24){
	let p= new Particle(90, 600-candle_h_hours,  r3);
	particles3.push(p);
	if(hours<=15){
		let p= new Particle(90, -15+600-candle_h_hours,  r3);
		particles3.push(p);
	}
	if(hours<=10){
		let p= new Particle(90, -15+600-candle_h_hours,  r3);
		particles3.push(p);
	}
	if(hours<5){
		let p= new Particle(90, -15+600-candle_h_hours,  r3);
	particles3.push(p);
	}
	}
}

// Defining the class particle to be used in creating the flames for each candle
class Particle{
	constructor(currX, currY, currRad){
		this.x=currX;
		this.y=currY;
		this.rad = currRad;

		let r = random(3);
		if(r<1){
			this.color = color(255,100,20,50); 
    } else if(r >= 1 && r < 2 ){
      this.color = color(255, 200, 10, 50); 
    } else if(r >= 2 ){
      this.color = color(255, 80, 5, 50); 
    }
	}
	show(){
		noStroke();
		fill(this.color);
		ellipse(this.x, this.y, this.rad);
	}

	move(){
		this.x+=random(-5,5);
		this.y -= random(1,3);
	}

	shrink(){
		this.rad-=0.4;
	}
}

// Changing the colors of the candles to a random color when the mouse is pressed
function mousePressed(){
	mycolor1=random(0,255);
	mycolor2=random(0,255);

}