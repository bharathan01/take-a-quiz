const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');

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

function getQuestines(){
  fetch(`https://quizapi.io/api/v1/questions?apiKey=ccegaZ4XUnyeubUluTuoT6yluWYfosjRQ6t52oNb&limit=10&category=Linux&difficulty=easy`)
  //https://quizapi.io/api/v1/questions?apiKey=ccegaZ4XUnyeubUluTuoT6yluWYfosjRQ6t52oNb&limit=10&category=Linux&difficulty=easy
    .then(data => console.log(data))
    .catch(error => console.error(error));

}
getQuestines()
