const loadQuiz = function() {
    // Ссылки на DOM элементы
    const questionBox = document.querySelector('.questions')
    const answerBox = document.querySelector('.answers')
    const checker = document.querySelector('.checker')
  
    // Данные
    const questionsBank = {
      'What is the capital city of China?' : ['⚽️', '🏫', '🏝', 0],
      'What is the capital city of Switzerland?' : ['Zurich', 'Bern' , 'Geneva', 1],
      'What is the capital city of Germany? ' : ['Munich', 'Dresden', 'Berlin', 1]
    }
  
    // Счетчик текущей страницы
    let current = 0
  
    // Функция отображает текущий вопрос
    function loadQuestion(current) {
      const question = Object.keys(questionsBank)[current]
      questionBox.innerHTML = question
    }
  
    // Функция отображает ответы относящиеся к текущему вопросу и навешивает обработчик клика
    function loadAnswers(current) {
      const answers = Object.values(questionsBank)[current]
      answerBox.innerHTML = ''
  
      answers.forEach((answer, index) => {
        if (index === answers[answers.length - 1]) return
  
        const createDiv = document.createElement('div')
        createDiv.textContent = answers[index]
        createDiv.addEventListener('click', checkAnswer(index, answers)) // можно не навешивать на каждый элемент а повесить на весь контейнер answers
  
        answerBox.appendChild(createDiv)
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
        questionBox.innerHTML = 'Game over'
        answerBox.innerHTML = ''
      }
    }
  
    // Функция отвечает за отображение правильных и не правильных ответов
    function addChecker(flag) {
      const createDiv = document.createElement('div')
      createDiv.textContent = ${current + 1}
  
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