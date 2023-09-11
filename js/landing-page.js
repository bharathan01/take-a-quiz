const enterToGame = document.getElementById('enter_name');
const playerName = document.getElementById('player_name')
const span = document.querySelector('.err')


function validate(){
       span.style.color = "red"
       span.style.fontSize = '1em'
       span.textContent = "please enter the name"
       document.querySelector('.main-section').appendChild(span)
       span.style.display = "block"
}


plyerName.addEventListener('keyup' ,() =>{
    if(plyerName.value ===''){
        validate()
    }
    else{
        span.style.display = "none"
    }
})

enterToGame.addEventListener('click',() => {
    if(plyerName.value ===''){
        validate()
    }
    else{
        span.style.display = "none"
        localStorage.setItem('playerName' , playerName.value)
        window.location.href = '../html/catagory-selection-page.html'
        
    }
    
   


    // 
    
})