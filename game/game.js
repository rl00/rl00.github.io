alert("The game of Trivia Dash is about to begin!")
alert("You only have 3 lives, so answer CAREFULLY")
alert("Let's start!")

var correctAnswer = 0;
var lives = 3;
var score = 0;

function livesCheck() {
  if (lives===0) {
   alert("YOU HAVE LOST ALL YOUR LIVES! GAME OVER.");
  } 
}

while (correctAnswer != 1) {
    var Q1 = prompt("Which food has most Vitamin C? a. Oranges b. Strawberries c. Grapes d. Starfruit. Enter the letter as the answer.").toUpperCase();

    switch (Q1) {
        case 'A':
            alert("Wrong! Oranges are tasty, but this is not the right answer");
            lives--;
            livesCheck();
            break;

        case 'B':
            alert("Correct!");
            correctAnswer = 1;
           var score = score + 1;
           alert ("Your score is " + score);
           break;

        case 'C':
            alert("Wrong! Grapes are nice, but not the right answer");
            lives--;
            livesCheck();
            break;

        case 'D':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;

        default:
         alert("Wrong! Type the letter.")
         lives--;
         livesCheck();
         
    }
}

correctAnswer = 0;
alert("Let's continue !");

var correctAnswer = 0;
while (correctAnswer != 1) {
    var Q2 = prompt("Which country won the first world cup ? a.Brazil, b.Spain, c.Uruguay, or d.Germany ? ").toUpperCase();

    switch (Q2) {
        case 'A':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;

        case 'B':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;

        case 'C':
            alert("Correct!");
            correctAnswer = 1;
           var score = score + 1;
           alert ("Your score is " + score);
           break;

        case 'D':
            alert("Wrong! Germany won the world cup at 2014.Try again.");
            lives--;
            livesCheck();
            break;

        default:
            alert("Wrong!Type the letter.")
            lives--;
            livesCheck();
			break;
    }
}

correctAnswer = 0;
alert(" Let's continue!");

var correctAnswer = 0;
while (correctAnswer != 1) {
    var Q3 = prompt("Who wrote the book Pinocchio? a. John Smith, b. J.K. Rowling, c. Carlo Collodi, or d. Disney Studios").toUpperCase();

    switch (Q3) {
        case 'A':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;

        case 'B':
            alert("Wrong! Rowling wrote Harry Potter.");
            lives--;
            livesCheck();
            break;

        case 'C':
            alert("Correct!");
            correctAnswer = 1;
           var score = score + 1;
           alert ("Your score is " + score);
           break;

        case 'D':
            alert("Wrong! Disney made a movie about Pinocchio. Try again.");
            lives--;
            livesCheck();
            break;

        default:
            alert("Wrong! Type the letter.")

    }
}

correctAnswer = 0;
alert("Let's continue!");

var correctAnswer = 0;
while (correctAnswer != 1) {
    var Q4 = prompt("When was soccer created ? a.1200 AD - 1300 AD, b.206 BC - 220 AD, c.230AD - 500AD, or d.400 BC - 207 BC ").toUpperCase();

    switch (Q4) {
        case 'A':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;

        case 'B':
            alert("Correct");
            correctAnswer = 1;
           var score = score + 1;
           alert ("Your score is " + score);
           break;
            
        case 'C':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;
            
		 case 'D':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;
            
        default:
            alert("Wrong! Type the letter.")
            lives--;
            livesCheck();
    }
}

correctAnswer = 0;
alert("Let's continue!");

var correctAnswer = 0;
while (correctAnswer != 1) {
    var Q5 = prompt("What is the most performed Shakespeare play? Is it a.Macbeth, b.Hamlet, c.Romeo and Juliet, or d.Julius Caesar?").toUpperCase();

    switch (Q5) {
        case 'A':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;

        case 'B':
            alert("Correct!");
            correctAnswer = 1;
           var score = score + 1;
           alert ("Your score is " + score);
           break;
            
        case 'C':
            alert("Wrong");
            lives--;
            livesCheck();
            break;
            
		 case 'D':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;
            
        default:
            alert("Wrong! Type the letter.")
            lives--;
            livesCheck();
    }
}

correctAnswer = 0;
alert("Let's continue!");

var correctAnswer = 0;
while (correctAnswer != 1) {
    var Q6 = prompt("Which item was not included in the English full breakfast? a. Beans, b. English tea, c. Pudding, or d. Toast? ").toUpperCase();

    switch (Q6) {
        case 'A':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;

        case 'B':
            alert("Well Done!");
			correctAnswer = 1;
           var score = score + 1;
           alert ("Your score is " + score);
           break;
            
        case 'C':
            alert("Wrong!");
            lives--;
            livesCheck();
			break;
            
		 case 'D':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;
            
        default:
            alert("Wrong! Type the letter.")
    }
}

correctAnswer = 0;
alert("Let's continue!");

var correctAnswer = 0;
while (correctAnswer != 1) {
    var Q7 = prompt("Which one’s DNA has the most similarities to human DNA? a. Duck, b. Strawberries, c. Salmon, or d. Orange? ").toUpperCase();

    switch (Q7) {
            case 'A':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;

        	case 'B':
            alert("Correct!");
			correctAnswer = 1;
           var score = score + 1;
           alert ("Your score is " + score);
		   break;
            
        	case 'C':
            alert("Wrong!");
            lives--;
            livesCheck();
			break;
            
			case 'D':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;
            
        	default:
            alert("Wrong! Type the letter.")
            lives--;
            livesCheck();
    }
}

correctAnswer = 0;
alert("Let's continue!");

var correctAnswer = 0;
while (correctAnswer != 1) {
    var Q8 = prompt("Where is the Mona Lisa located at? a. Metropolitan Museum of Art, New York, b. the Louvre, c. Da Vinci museum, or d. Picasso Museum").toUpperCase();

    switch (Q8) {
        case 'A':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;

        case 'B':
            alert("Correct!");
            correctAnswer = 1;
           var score = score + 1;
           alert ("Your score is " + score);
           break;
            
        case 'C':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;
            
		 case 'D':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;
            
        default:
        alert("Wrong! Type the letter.");
        lives--;
            livesCheck();
    }
}

correctAnswer = 0;
alert("Let's continue!");

var correctAnswer = 0;
while (correctAnswer != 1) {
    var Q9= prompt("What is NaCl? Is it a.Flour, b. Sugar, c. Table Salt, or d. Water").toUpperCase();

    switch (Q9) {
        case 'A':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;

        case 'B':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;
            
        case 'C':
            alert("Well Done!");
			correctAnswer = 1;
            var score = score + 1;
           alert ("Your score is " + score);
           break;
            
       case 'D':
            alert("Wrong!");
            lives--;
            livesCheck();
            break;
            
        default:
            alert("Wrong! Type the letter.");
            lives--;
            livesCheck();
    }
}
        alert("Wrong!");
        break;
            
        case 'C':
        alert("Correct!");
        correctAnswer = 1;
        break;
     
        case 'D':
        alert("Wrong! Germany won the world cup at 2014. Try again.");
        break;
		
        default:
            alert("Wrong! Type the letter.")
            
    }
}

correctAnswer = 0;
alert("Let's continue!");

var correctAnswer = 0;
while (correctAnswer !=1) {
var Q2 = prompt("Who wrote the book Pinocchio? a. John Smith, b. J.K. Rowling, c. Carlo Collodi, or d. Disney Studios").toUpperCase();
    
    switch(Q2) {
        case 'A':
        alert("Wrong!");
        break;

	    case 'B':
        alert("Wrong! Rowling wrote Harry Potter.");
        break;
            
        case 'C':
        alert("Correct!");
        correctAnswer = 1;
        break;
     
        case 'D':
        alert("Wrong! Disney made a movie about Pinocchio. Try again.");
        break;
		
        default:
            alert("Wrong! Type the letter.")
            
    }
}
