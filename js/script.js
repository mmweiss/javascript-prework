
function getMoveName(argMoveId){
  console.log('Wylosowana liczba to :' + getMoveName);
  if(argMoveId == 1){
    return 'kamień';
  } if (argMoveId == 2) {
    return 'papier';
  } if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nieznany ruch:' + argMoveId + '.');
    return 'Błędny ruch';
        }
  }
  
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if ( randomNumber == 2) {
  computerMove = 'papier';
} else if ( randomNumber == 3) {
  copmuterMove = 'nożyce';
}
*/

printMessage('Mój ruch to: ' + computerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/* if( playerInput == 1){
  playerMove = 'kamień';
} else if ( randomNumber == 2) {
  computerMove = 'papier';
} else if ( randomNumber == 3) {
  copmuterMove = 'nożyce';
}
*/

printMessage('Twój ruch to: ' + playerMove);


/* if ( computerMove == 'kamień' && playerMove == 'papier')
  printMessage( 'Ty wygrywasz!' );
} else {
  printMessage( 'Spróbuj jeszcze raz!' );
}
if ( computerMove == 'papier' && playerMove == 'kamień')
  printMessage( 'Przegrywasz!' ); 
} else {
  printMessage( 'Spróbuj jeszcze raz' );
}
if ( computerMove == 'nożyce' && playerMove == 'nożyce')
  printMessage( 'Remis!' );
} 
if ( playerMove == 'nieznany ruch') {
  printMessage( 'Błędny numer. Ponownie wybierz : 1 , 2  bądź 3');
}
*/

function displayResult(argPlayerMove, argComputerMove) {
  console.log('moves:', argComputerMove, argPlayerMove);
  if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage( 'Wygrywasz!' );
  } else {
    printMessage( 'Spróbuj jeszcze raz!' );
  }
  if ( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage( 'Przegrywasz!' ); 
  } else {
    printMessage( 'Spróbuj jeszcze raz' );
  }
  if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
    printMessage( 'Remis!' );
  } 
  if ( argPlayerMove == 'nieznany ruch') {
    printMessage( 'Błędny numer. Ponownie wybierz : 1 , 2  bądź 3');
  } 
}