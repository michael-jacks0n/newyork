canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

ArrayDeMarcianosDoLooneToones= ["nasa_image_1.jpg","nasa_image_3.jpg","nasa_image_4.jpg"]
var randounNamber= Math.floor(Math.random()*3)

backgroundImage = ArrayDeMarcianosDoLooneToones[randounNamber];

roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem
    roverImgTag= new Image()
    roverImgTag.onload= uploadrover
    roverImgTag.src= roverImage
  //definindo uma variável com uma nova imagem
	// ajustando uma função, ao carregar essa variável
	// carregar a imagem

	
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight)
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    if(keyPressed == '87')
    {
        up();
        
    }
    if(keyPressed == '83')
		{
			down();
			
		}
        if(keyPressed == '65')
		{
			left();
			
		}
        if(keyPressed == '68')
		{
			right();
			
		}
  
		
}
function up()
{
	if(roverY >=0)
	{
		roverY = roverY - 10;
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(roverY <=550)
	{
		roverY = roverY + 10;
		 uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(roverX >=0)
	{
		roverX = roverX - 10;
		 uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(roverX <=750)
	{
		roverX = roverX + 10;
		 uploadBackground();
		 uploadrover();
	}
}


	 