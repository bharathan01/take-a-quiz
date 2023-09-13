const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
let API_KEY = 'ccegaZ4XUnyeubUluTuoT6yluWYfosjRQ6t52oNb'
let category = 'Linux'

runAnimation();

function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');
    
  nums.forEach(num => {
    num.classList.value = '';
  });

    nums[0].classList.add('in');
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const penultimate = nums.length - 1;
    num.addEventListener('animationend', (e) => {
      if(e.animationName === 'goIn' && idx !== penultimate){
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling){
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}

const questineNoElement = document.getElementById('qust-no')
const questionElement = document.getElementById("questine")
const previousQuestine = document.getElementById("previous")
const nextQuestine = document.getElementById("next")
const options = document.getElementById("options")
const answers = document.querySelectorAll("#answer") 
let questineNum = 0;
let score = 0;


async function getQuestines(){
  try {
    const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&limit=10&category=${category}&difficulty=easy`)
    const data =  await response.json()
    setQuestine(data)
    if(!response.ok){
      throw new Error(' Failed to load the questions')
    }
  } catch (error) {
    alert(error)
  }
  
}
function setQuestine(questine){
  function changeQustine (Qno){
       questineNoElement.innerHTML = `${Qno + 1}`
        questionElement.innerHTML = `${questine[Qno].question}`
        const options = Object.entries(questine[Qno].answers)
        answers.forEach((el, index) => {
          el.innerHTML = `${options[index][1]}`
  })
  }
  changeQustine(questineNum)
  nextQuestine.addEventListener('click',() =>{
    changeQustine(questineNum += 1);
   })
   previousQuestine.addEventListener('click',() =>{
    changeQustine(questineNum -= 1);
   })

}


getQuestines()
