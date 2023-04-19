
  let answer = 'foxdog';
  let chances = 3; 

  function checkLetter(letter) {
    if (chances > 0) {
      let blanks = document.getElementsByClassName('blanks');
      let found = false;
      for (let i = 0; i < answer.length; i++) {
        if (answer[i] === letter && blanks[i].innerHTML === '') {
          blanks[i].innerHTML = letter;
          found = true;
        }
      }
      if (!found) {
        chances--;
        document.getElementById('chances').innerHTML = chances;
        if (chances === 0) {
          document.getElementById('chances').innerHTML = '0';
          document.getElementsByClassName('button').forEach(function(btn) {
            btn.setAttribute('disabled', 'true');
          });
          document.getElementById('gameOverMessage').classList.remove('hidden');
          document.getElementById('gameOverMessage').innerHTML = 'Game Over! Please restart the game.';
        }
      }
      checkAnswer();
    }
  }

  function checkAnswer() {
    let blanks = document.getElementsByClassName('blanks');
    let filled = 0;
    for (let i = 0; i < blanks.length; i++) {
      if (blanks[i].innerHTML !== '') {
        filled++;
      }
    }
    if (filled === answer.length) {
      alert('Congratulations! You solved the puzzle!');
      setTimeout(function() {
        window.location.href = '/room4';
      }, 2000);
    }
  }

  function restartGame() {
    chances = 3;
    document.getElementById('chances').innerHTML = '3';
    let blanks = document.getElementsByClassName('blanks');
    for (let i = 0; i < blanks.length; i++) {
      blanks[i].innerHTML = '';
    }
    let letterButtons = document.getElementsByClassName('button');
    for (let i = 0; i < letterButtons.length; i++) {
      letterButtons[i].removeAttribute('disabled');
    }
    document.getElementById('gameOverMessage').classList.add('hidden');
  }
