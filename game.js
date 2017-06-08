'use strict';

var score = 0;
var yourName = prompt('What is your name?');

var payAttention = prompt('Did you pay attention?');
if(payAttention.toLowerCase() === 'yes' || payAttention.toLowerCase() === 'y'){
  alert('Great job!');
  score++;
} else {
  alert('Really? ' + payAttention + ' .Ok...');
}
console.log('When asked if the user was paying attention, the user responded with ' + payAttention);

var homeTown = prompt('Is my birthplace Seattle, WA?');
if(homeTown.toLowerCase() === 'no' || homeTown.toLowerCase() ===  'n'){
  alert('Correct! I was born in Billings, MT.');
  score++;
} else {
  alert('Incorrect. Do better.');
}
console.log('When asked where I was born, the user responded ' + homeTown + '.');

var schoolName = prompt('Did I go to Idaho State University?');
if(schoolName.toLowerCase() === 'yes' || schoolName.toLowerCase() ===  'y'){
  alert(schoolName + '. You are right. GO BENGALS!!!');
  score++;
} else {
  alert('Wrong. ' + schoolName + ' is incorrect.');
}
console.log('When asked if I attended Idaho State University, the user responded with ' + schoolName + '.');

var downTime = prompt('Is watching sports one of my listed hobbies?');
if(downTime.toLowerCase() === 'no' || downTime.toLowerCase() === 'n'){
  alert("That's right, I don't watch sports.");
  score++;
} else {
  alert("That's wrong, you put " + downTime + ", but I don't watch sports.");
}
console.log('When asked if I watch sports as one of my hobbies the user put ' + downTime + '.');

var toBe = prompt('Do you want to be Awesome?!');
if(toBe.toLowerCase() === 'yes' || toBe.toLowerCase() === 'y'){
  alert(toBe + ". That's the right answer!");
  score++;
} else {
  alert(toBe + ". FAIL!");
}
console.log('When asked if the user wants to be awesome, the user responded ' + toBe + '.');

 var myAge;
 var number = 26
 var tries = 4;

 while(tries>0){
   myAge = parseInt(prompt('How old do you think I am?'));
   if(myAge<number){
     alert('Try again you. I am older than that.');
     tries--;
   }else if(myAge>number){
     alert('Nope. I am younger than that.');
     tries--;
   }else if(myAge===number){
     alert('You are correct! Great job!')
     tries = 0;
     score++;
   }else {
     alert('Incorrect. What are you doing?');
     alert("I'm actually 26.");
     tries--;
   }
 }
 console.log('When asked how old I am, the user responded with ' + myAge + '.');

var states = ['WA', 'ID', 'MT', 'CA', 'OH', 'NY', 'IL'];
var guessesLeft = 6;

while(guessesLeft > 0){
  for(var i = 0; i < states.length; i++){
    var ans = prompt('Which state have I not lived in out of WA, ID, MT, CA, OH, IL, and NY?');
    if(ans.toLowerCase() === states[0].toLowerCase()){
      alert("Wrong. I've lived there before. Try again.");
      guessesLeft--;
    }else if(ans.toLowerCase() === states[1].toLowerCase()){
      alert("Wrong. I've lived there before. Try again.");
      guessesLeft--;
    }else if(ans.toLowerCase() === states[2].toLowerCase()){
      alert("Wrong. I've lived there before. Try again.");
      guessesLeft--;
    }else if(ans.toLowerCase() === states[3].toLowerCase()){
      alert("Wrong. I've lived there before. Try again.");
      guessesLeft--;
    }else if(ans.toLowerCase() === states[4].toLowerCase()){
      alert("Wrong. I've lived there before. Try again.");
      guessesLeft--;
    }else if(ans.toLowerCase() === states[6].toLowerCase()){
      alert("Wrong. I've lived there before. Try again.");
      guessesLeft--;
    }else if(ans.toLowerCase() === states[5].toLowerCase()){
      alert("That's right! I've never even been to NY before.");
      guessesLeft = 0;
      i = 7;
      score++;
    }else {
      alert("If you aren't going to take this serious the game is over.");
      guessesLeft = 0;
    }
  }
}

    alert('That concludes this game ' + yourName + '. You got ' + score + ' out of 7. Come back later to try again!');

    console.log('You have completed the game. Your final score is ' + score + '.');
