let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = randomNumber;

if(randomNumber == 1){
  computerMove = 'kamień';
} else if ( randomNumber == 2) {
  computerMove = 'papier';
} else if ( randomNumber == 3) {
  copmuterMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = playerInput;

if( playerInput == 1){
  playerMove = 'kamień';
} else if ( randomNumber == 2) {
  computerMove = 'papier';
} else if ( randomNumber == 3) {
  copmuterMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);


if ( computerMove == 'kamień' && playerMove == 'papier')
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