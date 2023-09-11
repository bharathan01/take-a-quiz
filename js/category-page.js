const span = document.getElementById('player_name')
const playerName = localStorage.getItem('plyerName')

if(playerName == null){
  span.textContent = 'player01'
}
else{
    span.textContent = `${playerName}`
}

