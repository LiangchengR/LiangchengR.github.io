var treasureLocation = Math.floor(Math.random()*9)
var chickLocation = Math.floor(Math.random()*9)
var counter = 3


while (treasureLocation == chickLocation){
  treasureLocation = Math.floor(Math.random()*9)
  chickLocation = Math.floor(Math.random()*9)
}

const treasure = (location) =>{
    if(location == treasureLocation){
      document.getElementById('table').innerHTML = "<br>" + "You win!!!" + "<br>" + "<br>" + '<img src="http://clipart-library.com/images_k/chocolate-bunny-silhouette/chocolate-bunny-silhouette-24.png" height= "300px"/>'
    }
    else if (location == chickLocation){
      document.getElementById('table').innerHTML = "<br>" + "You lose!!!" + "<br>" + "<br>" + '<img src="https://freesvg.org/img/1537213264.png" height= "300px"/>'
    }
    else if (counter == 0){
      document.getElementById('table').innerHTML = "<br>" + "You ran out of turns! Try again!"
    }
    else{
        document.getElementById(location).innerHTML = '<img src="https://cdn.pixabay.com/photo/2014/04/02/11/02/egg-305311_960_720.png" height= "100px"/>'
        counter--
    }
}
