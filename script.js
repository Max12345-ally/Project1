

const loadQuiz = function() {
    // Ссылки на DOM элементы
    const questionBox = document.querySelector('.questions')
    const answerBox = document.querySelector('.answers')
    const checker = document.querySelector('.checker')
    // const music = document.querySelector('.checker')
    // Данные
    const questionsBank = {
      '1. 🥝🥝🥝 + 🥝🥝?' : ['🥝', '🍐', '🍎', 2],
      '2. What horse does not match?' : ['🐴', '🐴' , '🦄', 2],
      '3. What animal does not match?? ' : ['🦁', '🐳', '🦈', 0],
      '4. What horse does match?' : ['🦁', '🦄', 2]
    }
  
    // Счетчик текущей страницы
    let current = 0
  
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
  console.log(index,answers)
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
  
        loadQuestion(current)
        loadAnswers(current)
      } else {
        questionBox.innerHTML = 'Try again'
        answerBox.innerHTML = ''
      }
    }
  
    // Функция отвечает за отображение правильных и не правильных ответов
    function addChecker(flag) {
      const createDiv = document.createElement('div')
      createDiv.textContent = `${current + 1}`
  
      if (flag) {
        createDiv.className += 'correct'
        checker.appendChild(createDiv)
      } else {
        createDiv.className += 'false'
        checker.appendChild(createDiv)
      }
    }
  
    // Загрузка первой страницы
    loadQuestion(current)
    loadAnswers(current)
    
  }
  
  // Загрузка приложения по готовности HTML
  document.addEventListener('DOMContentLoaded', loadQuiz)

  formElement.reset()  

  