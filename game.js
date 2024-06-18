var buttonColours=["red", "green", "blue" ,"yellow"];

var randomChosenColour=0;

var gamePattern = [];

var coutOfPatt =0;

 
function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);

  randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  
  console.log(gamePattern);

  setTimeout(function() {
         $("#"+randomChosenColour).fadeOut(100).fadeIn(100);//make an element "flash" in jQuery
         $("#level-title").text("Level "+ gamePattern.length);
        }, 500);

  coutOfPatt=0;


 }

debugger
function ClickH(){
    var theClass=$(this).attr("class");
   
    if (theClass.slice(4,)==gamePattern[coutOfPatt]){
        var audio = new Audio('./sounds/'+theClass.slice(4,)+'.mp3');// theClass.slice(4,) to selet the target class ex : (btn yellow)
        audio.play();

        $("#"+theClass.slice(4,)).addClass("pressed");//add press class

        // dely function
        setTimeout(function() {
        $("#"+theClass.slice(4,)).removeClass("pressed");
        }, 100);
        coutOfPatt=coutOfPatt+1;
        if (coutOfPatt==gamePattern.length)
          {nextSequence();}
      }

      else if (theClass.slice(4,)!=gamePattern[coutOfPatt]){

        var audio = new Audio('./sounds/wrong.mp3'); 
        audio.play();

        $("body").addClass("game-over");//add game-over class

        // dely function
        setTimeout(function() {
        $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        gamePattern=[];

        addEventListener("keydown",randfunc);
        
  }

}


$( ".btn" ).on( "click",ClickH);





function randfunc(){

  removeEventListener("keydown",randfunc);
  
  nextSequence();

  var audio2 = new Audio('./sounds/'+randomChosenColour+'.mp3');

  audio2.play();

  ClickH();

}


addEventListener("keydown",randfunc);


  