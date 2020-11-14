var numcolor = 6;
var colors =  generateRandomColors(6);
var squares = document.getElementsByClassName("square");
var pickedcolor = pickColor();
var displaycolor=document.getElementById("displaycolor");
var message = document.getElementById("message");
displaycolor.textContent = pickedcolor;
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easybtn = document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn");
easybtn.addEventListener("click",function(){
    hardbtn.classList.remove("selected"); 
    easybtn.classList.add("selected");
     numcolor = 3;
     //generate new colors
     colors = generateRandomColors(numcolor);
     //generate picked color
     pickedcolor = pickColor();
     //display pick color
     displaycolor.textContent = pickedcolor;
     //hide extra 3 squares
     for(var i=0;i<squares.length;i++)
     {
         if(colors[i])
         {
             squares[i].style.background = colors[i];
         }
         else{
             squares[i].style.display = "none";
         }
     }
     //h1 background color change 
     h1.style.background = "steelblue";
     //message change 
     message.textContent = " ";
});
hardbtn.addEventListener("click",function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numcolor = 6;
    //generate 
    colors = generateRandomColors(numcolor);
    //picked color
    pickedcolor = pickColor();
    //display color
    displaycolor.textContent=pickedcolor;
    //display all squares
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
    //h1 background color change
    h1.style.background = "steelblue";
    //message change
    message.textContent = " ";
});
reset.addEventListener("click",function(){
    //change the color
    colors = generateRandomColors(numcolor);
    //change the pickedcolor
    pickedcolor = pickColor();
    //change the display color
    displaycolor.textContent = pickedcolor;
    //change the squares color
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background = colors[i];
    }
    //h1 background color change to original
    h1.style.background = "steelblue";
    //changing the text of button 
    reset.textContent = "New Colors";
    //messsage change 
    message.textContent = " ";
});
 
//changing the square colors and add event listener to match the picked color
for(var i=0;i<squares.length;i++){
  
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function()
    {
        var clickedcolor = this.style.background;
        if(clickedcolor===pickedcolor)
        {
            message.textContent = "Correct!"
            changeColor(clickedcolor);
            h1.style.background = clickedcolor;
            reset.textContent = "Play Again?";
        }
        else
        {
            message.textContent= "Try Again";
            this.style.background = "#232323";
            h1.style.background = "steelblue";
        }
    });
    
}
// change the square's color of same color when matched
function changeColor(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }
}
// pick random color
function pickColor(){
    var randomPick = Math.floor(Math.random()*colors.length);
    return colors[randomPick];
}
//push random colors in an array
function generateRandomColors(num)
{
    var arr=[]; 
    for(var i=0;i<num;i++)
    {
        arr.push(randomColors());
    }
    return arr;
}
//generate random color
function randomColors(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+ r +", "+ g +", "+ b + ")";
}