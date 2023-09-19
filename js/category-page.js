const span = document.getElementById('player_name')
const mainDiv= document.querySelector('.main-cat')
const playerName = localStorage.getItem('plyerName')


if(playerName == null){
  span.textContent = 'player01'
}
else{
    span.textContent = `${playerName}`
}

const catagory = [
    {catagory:"Linux",icon:'<i class="fa-brands fa-linux"></i>'},
    {catagory:"DevOps",icon:'<i class="fa-solid fa-terminal"></i>'},
    {catagory:"JavaScript",icon:'<i class="fa-brands fa-square-js"></i>'},
    {catagory:"Kubernetes",icon:'<i class="fa-solid fa-gear"></i>'},
    {catagory:"Laravel",icon:'<i class="fa-brands fa-laravel"></i>'},
    {catagory:"WordPress",icon:'<i class="fa-brands fa-wordpress-simple"></i>'},
    {catagory:"MySQL",icon:'<i class="fa-solid fa-database"></i>'},
    {catagory:"HTML",icon:'<i class="fa-brands fa-html5"></i>'},
    {catagory:"Docker",icon:'<i class="fa-brands fa-docker"></i>'},
    {catagory:"PHP",icon:'<i class="fa-brands fa-php"></i>'},
    {catagory:"BASH",icon:'<i class="fa-solid fa-code"></i>'},
    {catagory:"CSS",icon:'<i class="fa-brands fa-css3-alt"></i>'}
]

for(let i = 0; i < catagory.length; i++){
    const div = document.createElement('div')
    div.classList.add('single-cat')
    if (catagory[i] && catagory[i].icon) {
        div.innerHTML = `${catagory[i].icon} ${catagory[i].catagory} `;
    } else {
        div.innerHTML = "Category information not available";
    }
    mainDiv.appendChild(div)
}

function setCatagory (data){
    localStorage.setItem('catagory',data)
    window.location.href = '../html/take-quiz-page.html'
}
mainDiv.addEventListener('click' ,(el) =>{
    let catData
    if(el.target.tagName === 'I'){
        catData = el.target.nextSibling.nodeValue;
        setCatagory(catData)
    }
    else{
        const catData = el.target.childNodes[1].nodeValue
        setCatagory(catData)
    }
})