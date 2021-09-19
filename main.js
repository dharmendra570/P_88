var canvas = new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleTowidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		})
		canvas.add(hole_obj);
	    })
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
	ball_obj.scaleTowidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
	top:ball_y,
	left:ball_x
	})
	canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

	else
	{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y >= 0) {
			ball_y = ball_y - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("when Up arrow key is pressed, x = " + ball_x + " , Y =" + ball_y);
			canvas.remove(ball_object);
			ball_update();
		}
	}

	function down()
	{
		if (ball_y <= 500) {
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("when Down arrow key is pressed, x = " + ball_x + " , Y =" + ball_y);
			canvas.remove(ball_object);
			ball_update();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("block image height = " + block_image_width);
			console.log("when left arrow key is pressed, x = " + ball_x + " , Y =" + ball_y);
			canvas.remove(ball_object);
			player_update();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			pball_x = player_x + ball_image_width;
            console.log("block image height = " + block_image_width);
            console.log("when right arrow key is ball, x = " + ball_x + " , Y =" + ball_y);
            canvas.remove(ball_object);
            ball_update();	
		}
	}
	
}

