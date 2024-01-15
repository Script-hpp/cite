var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

  document.addEventListener("DOMContentLoaded", function() {
    const bubblyButton = document.querySelector('.bubbly-button');
    const resultElement = document.getElementById('result');

    bubblyButton.addEventListener('click', function() {
      // Get the selected answer
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');

      if (selectedAnswer) {
        // Check if the selected answer is correct (Replace 'Berlin' with the correct answer)
        const correctAnswer = 'Berlin';
        const isCorrect = selectedAnswer.value === correctAnswer;

        if (isCorrect === true)
        {
          resultElement.style.color = "green";
        }
        else
        {
          resultElement.style.color = "red";
        }
        // Display the result
        resultElement.textContent = isCorrect ? 'Richtig!' : 'Falsch!';
      } else {
        // No answer selected
        resultElement.textContent = 'Bitte wähle eine Antwort aus.';
      }

      // Optionally, you can add more logic here, like showing/hiding elements, etc.
    });
  });
