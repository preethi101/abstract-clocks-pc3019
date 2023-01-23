let myimg;
let billboardimg1;
let billboardimg2;
let billboardimg3;
let billboardimg4;
let billboardimg5;
let billboardimg6;
let x_val;
let y_val;
let outerrad = 30;
let innerrad = 20;
let particles_item;
let particles_item2;
let shape1;
let min_x_arr=[];
let min_y_arr=[];
let hour_x_arr=[];
let hour_y_arr=[];
let curr_mins;
let mins;

function setup() {
	createCanvas(900,900);
	myimg=createImg('assets/skyline.jpg');
	myimg.hide();
	billboardimg1=createImg('assets/lionking.jpg');
	billboardimg1.hide();
	billboardimg2=createImg('assets/apple.jpg');
	billboardimg2.hide();
	billboardimg3=createImg('assets/bmw.jpg');
	billboardimg3.hide();
	billboardimg4=createImg('assets/cocacola.jpg');
	billboardimg4.hide();
	billboardimg5=createImg('assets/avengersposter.jpg');
	billboardimg5.hide();
	billboardimg6=createImg('assets/loreal.jpg');
	billboardimg6.hide();
	billboardimg7=createImg('assets/kitkat.jpg');
	billboardimg7.hide();
	billboardimg8=createImg('assets/netflix.jpg');
	billboardimg8.hide();
	billboardimg9=createImg('assets/hersheys.jpg');
	billboardimg9.hide();
	billboardimg10=createImg('assets/strangerthings.jpeg');
	billboardimg10.hide();
	billboardimg11=createImg('assets/amazonprime.jpg');
	billboardimg11.hide();
	billboardimg12=createImg('assets/sprite.jpg');
	billboardimg12.hide();
	background(0);
	const curr_mins = minute();
	particles_item = new ParticleItems(createVector(100,350));
	particles_item2 = new ParticleItems(createVector(450,350));

	for (let idx=0; idx<24;idx++){
		append(hour_x_arr,random(115,190))
		append(hour_y_arr,random(630,780))
	}

	for (let idx=0; idx<60;idx++){
		append(min_x_arr,random(340,410))
		append(min_y_arr,random(580,710))
	}
	
}

function draw(){
	background(0);

	textSize(12);
	fill(215);
	noStroke();
	text('Clock #2		UNI: pc3019 By: Preethi Chandirasekeran', 600,30);
	text('This abstract clock is based on the ball drop', 600,70);
	text('in Times Square. The number of pink dots correspond', 600,90);
	text('to the current hour and the number of green dots  ', 600,110);
	text('correspond to the current minute. The ball dropping ', 600,130);
	text('corresponds to the current second such that when the', 600,150);
	text('ball reaches the bottom, 60 seconds have completed', 600,170);
	fill(92, 255, 231);
	noStroke();
	
	text('Press the mouse button for a few seconds to ', 600,210);
	text('create confetti particles ', 600,230);
	text('Move the mouse to change the design of the ball in ', 600,270);
	text('the ball drop', 600,290);

	
	stroke(0);
	fill(255);
	shape1=rect(100,900,110,-400)
	fill(240, 181, 255);
	
	const mins = minute();
	const myhours = hour();
	if(curr_mins != mins){
		curr_mins=mins;
		console.log(curr_mins);
	}
	for(let idx =0; idx<myhours; idx++){
		
		shape14=ellipse(hour_x_arr[idx],hour_y_arr[idx],30,30);
	}
	fill(255);
	shape2=rect(0,900,80,-250);
	image(billboardimg1,100,500,110,100)
	image(billboardimg2,100,800,110,100)
	
	
	
	image(billboardimg3,0,750,80,150)
	image(billboardimg4,0,650,80,100)
	shape4=rect(320,900,110,-450)
	fill(166, 237, 204);
	for(let idx =0; idx<mins; idx++){
		
		shape15=ellipse(min_x_arr[idx],min_y_arr[idx],15,15);
	}
	
	fill(255);
	
	image(billboardimg5,320,730,110,170)
	image(billboardimg7,320,450,110,100)
	shape5=rect(440,900,60,-300)
	image(billboardimg8,440,800,60,100)
	image(billboardimg9,440,700,60,100)
	image(billboardimg11,440,600,60,100)
	shape6=rect(510,900,75,-400)
	image(billboardimg10,510,750,75,150)
	image(billboardimg6,510,650,75,100)
	image(billboardimg12,510,500,75,150)
	
	

	if (mouseIsPressed == true){
	particles_item.addParticle();
	particles_item2.addParticle();

	particles_item.run();
	particles_item2.run();
	}

	image(myimg,0,0,590,332);
	noStroke();
	fill(255);
	textSize(20);
	
	const secs = second();
	let ball_h_secs = 5*(60-secs); 
	
	noStroke();
	fill(235,235,255);
	rect(260,900,20,-300);
	


	x_val = 270;
	y_val= 900-ball_h_secs;
	
	stroke(35, 96, 250);
	fill(255);
	let curr_angle = 0;
	let points_count = int(map(mouseX, 0, width, 6, 60));
  	let angleStep = 180.0 / points_count;

  beginShape(TRIANGLE_STRIP);
  for (let idx = 0; idx <= points_count; idx++) {
	let py = y_val + sin(radians(curr_angle)) * outerrad;
    let px = x_val + cos(radians(curr_angle)) * outerrad;
    
    curr_angle += angleStep;
    vertex(px, py);
    px = x_val + cos(radians(curr_angle)) * innerrad;
    py = y_val + sin(radians(curr_angle)) * innerrad;
    vertex(px, py);
    curr_angle += angleStep;
  }
  endShape();

 
}



let Particle = function(pos) {
	this.pos = pos.copy();
	this.lifetime = 255;
	this.acce = createVector(0, 0.05);
	this.velo = createVector(random(-1, 1), random(-1, 0));
	
  };
  
  Particle.prototype.run = function() {
	this.upd();
	this.disp();
  };
  
  Particle.prototype.upd = function(){
	this.velo.add(this.acce);
	this.pos.add(this.velo);
	this.lifetime -= 2;
  };
  
  Particle.prototype.disp = function() {
	stroke(255,233,69, this.lifetime);
	strokeWeight(2);
	fill(247,239,173, this.lifetime);
	ellipse(this.pos.x, this.pos.y, 12, 12);
  };
  
  Particle.prototype.isDead = function(){
	return this.lifetime < 0;
  };
  
  let ParticleItems = function(pos) {
	this.origin = pos.copy();
	this.particles = [];
  };
  
  ParticleItems.prototype.addParticle = function() {
	this.particles.push(new Particle(this.origin));
  };
  
  ParticleItems.prototype.run = function() {
	for (let idx = this.particles.length-1; idx >= 0; idx--) {
	  let p = this.particles[idx];
	  p.run();
	  if (p.isDead()) {
		this.particles.splice(idx, 1);
	  }
	}
  };

