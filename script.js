// let music = new Audio('./kids-music.mp3')
//     music.volume=1;
//     music.play()
   
    

const loadQuiz = function() {
    // Ссылки на DOM элементы
    const questionBox = document.querySelector('.questions')
    const answerBox = document.querySelector('.answers')
    const checker = document.querySelector('.checker')
    const results = document.querySelector('.result')

    // const music = document.querySelector('.checker')
    // Данные
    const questionsBank = {
      '1. 🥝🥝🥝 + 🥝🥝 = ?' : ['6', '4', '5', 2],
      '2. 🍎🍎🍎🍎 - 🍎🍎 = ?' : ['3', '2', '1', 1],
      '3. What horse does not match?' : ['🐴', '🐴' , '🦄', 2],
      '4. What animal does not match? ' : ['🦁', '🐳', '🦈', 0],
      '5. How many days are in week? ' : ['7', '6', '8', 0],
      '6. What vehicle is the fastest? ' : ['🚜', '🛵', '🛩', 2],
      '7. Find yellow color? ' : ['🧡', '💚', '💛', 2],
      '8. Find red color? ' : ['🟠', '🔴', '🟢', 1],
      '9. Choose blue color? ' : ['🔵', '🟣', '🟡', 0],
      '10. 🅰️ for...? ' : ['🍎', '🍦', '🐕', 0],
      '11. 🅱️ for...? ' : ['👗', '💧', '🦋', 2],
      '12. Ⓜ️ for...? ' : ['🍟', '🐵', '🐤', 1],
      '13. What lives in the forest? ' : ['🦊', '🐶', '🐻', 0],
      '14. Who lives in the ocean? ' : ['🐝', '🦉', '🐬', 2],
      '15. Who eats bananas? ' : ['🦩', '🐒', '🐊', 1]
    }  
  
    // Счетчик текущей страницы
    let current = 0
    let numCorrect = 0;
    
  
    // Функция отображает текущий вопрос
    function loadQuestion(current) {
      const question = Object.keys(questionsBank)[current]
      questionBox.innerHTML = question
    }
  console.log(loadQuestion)
    // Функция отображает ответы относящиеся к текущему вопросу и навешивает обработчик клика
    function loadAnswers(current) {
      const answers = Object.values(questionsBank)[current]
      answerBox.innerHTML = ''
  
      answers.forEach((answer, index) => {
        if (index !== answers.length-1) {
  
        const createDiv = document.createElement('div')
        createDiv.textContent = answers[index]
        createDiv.classList.add("answers-flex");

        createDiv.addEventListener('click', checkAnswer(index, answers)) // можно не навешивать на каждый элемент а повесить на весь контейнер answers
  
        answerBox.appendChild(createDiv)}
      })
    }
  
    // Функция проверяет правильность ответа и отвечает за отображение следующей страницы
    const checkAnswer = (givenAnswerIndex, answers) => () => {
    const correctAnswer = answers[answers.length - 1]
    
  
      addChecker(givenAnswerIndex === correctAnswer)
  
      if (current < Object.keys(questionsBank).length - 1) {
        current += 1
        
        console.log(numCorrect)
  
        loadQuestion(current)
        loadAnswers(current)
      } else {
        questionBox.innerHTML = 'Try again'
        answerBox.innerHTML = ''
      }
      results.innerHTML = `${numCorrect} correct out of ${Object.keys(questionsBank).length}`;
    }
  
    // Функция отвечает за отображение правильных и не правильных ответов
    function addChecker(flag) {
      const createDiv = document.createElement('div')
      createDiv.textContent = `${current + 1}`
  
      if (flag) {
        createDiv.className += 'correct'
        checker.appendChild(createDiv)
        numCorrect++
      } else {
        createDiv.className += 'false'
        checker.appendChild(createDiv)
      }
    }
  
    // Загрузка первой страницы
    loadQuestion(current)
    loadAnswers(current)
    //music.play();  
  }
  
  // Загрузка приложения по готовности HTML
  document.addEventListener('DOMContentLoaded', loadQuiz)

  // elem(play)

  