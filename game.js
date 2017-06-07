var payAttention = prompt('Did you pay attention?');
if(payAttention.toLowerCase() === 'yes'){
  alert('Great job!');
} else {
  alert('Really? ' + payAttention + ' .Ok...');
}
console.log('When asked if the user was paying attention, the user responded with ' + payAttention);

var homeTown = prompt('Was I born in Butte, MT?');
if(homeTown.toLowerCase() === 'no'){
  alert('Correct! You chose ' + homeTown + '. I was born in Billings, MT.');
} else {
  alert('Incorrect. You chose ' + homeTown + '. I was born in Billings, MT.');
}
console.log('When asked where I was born, the user responded ' + homeTown + '.');

var schoolName = prompt('Did I go to Idaho State University?');
if(schoolName.toLowerCase() === 'yes'){
  alert('I did go to ISU and you said ' + schoolName + '. You are right. GO BENGALS!!!');
} else {
  alert('Wrong. ' + schoolName + ' is incorrect.');
}
console.log('When asked if I attended Idaho State University, the user responded with ' + schoolName + '.');

var downTime = prompt('Is watching sports one of my 3 listed hobbies?');
if(downTime.toLowerCase() === 'no'){
  alert("That's right, I don't watch sports.");
} else {
  alert("That's wrong, you put " + downTime + ", but I don't watch sports.");
}
console.log('When asked if I watch sports as one of my hobbies the user put ' + downTime + '.');

var toBe = prompt('Do you want to be Awesome?!');
if(toBe.toLowerCase() === 'yes'){
  alert(toBe + ". I think you're already awesome!");
} else {
  alert(toBe + ". Well that's cool too.");
}
console.log('When asked if the user wants to be awesome, the user responded ' + toBe + '.');
