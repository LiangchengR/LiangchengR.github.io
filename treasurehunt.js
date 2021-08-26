//variables for treasure, chicken, and play counter
var treasureLocation = Math.floor(Math.random()*9)
var chickLocation = Math.floor(Math.random()*9)
var counter = 3

//image variables
var winPic = document.createElement("img")
var losePic = document.createElement("img")
var clickPic = document.createElement("img")

winPic.src = "https://cdn.pixabay.com/photo/2018/03/13/22/05/easter-bunny-3223851_960_720.png"
winPic.style.height = "300px"
losePic.src = "https://freesvg.org/img/1537213264.png"
losePic.style.height = "300px"
clickPic.src = "https://cdn.pixabay.com/photo/2014/04/02/11/02/egg-305311_960_720.png"
clickPic.style.height = "120px"


//while function to get unique treasure and chicken locs
while (treasureLocation == chickLocation){
  treasureLocation = Math.floor(Math.random()*9)
  chickLocation = Math.floor(Math.random()*9)
}

//function to determine game outcomes 
const treasure = (location) =>{
    if(location == treasureLocation){
      document.getElementById('table').innerHTML = "<br>" + "You win!!!" + "<br> <br>"
      document.getElementById('table').appendChild(winPic)
      counter --
      document.getElementById('triesLeft').innerHTML = counter
    }
    else if (location == chickLocation){
      document.getElementById('table').innerHTML = "<br>" + "You lose!!!" + "<br> <br>"
      document.getElementById('table').appendChild(losePic)
      document.getElementById('triesLeft').innerHTML = "0"
    }
    else if (counter == 1){
      document.getElementById('table').innerHTML = "<br>" + "You ran out of turns!" + "<br>" + "Try again!" + "<br> <br>"
      document.getElementById('table').appendChild(clickPic)
      counter --
      document.getElementById('triesLeft').innerHTML = counter
    }
    else{
      document.getElementById(location).innerHTML = ""
      document.getElementById(location).appendChild(clickPic)
      counter --
      document.getElementById('triesLeft').innerHTML = counter
    }
}
