function checkAnswers() {
  var answerforOne = document.querySelector("input[name='rate']:checked").value
  var answerforTwo = document.querySelector("input[name='type']:checked").value
  var answerforThree = document.querySelector("input[name='improve']:checked").value
  var answerforFour = document.querySelector("input[name='play']:checked").value
  var answerforFive = document.querySelector("input[name='gaming']:checked").value
  alert("Thank you for your feedback and support! We will ensure that you have the best experience possible. This will also help us recommend games for you.")
}