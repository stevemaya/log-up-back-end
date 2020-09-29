// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = 'colin.jaffe@codeimmersives.com';
const password1 = 'Hotforhimself';
const user2 = 'mesuara@codeimmersives.com';
const password2 = 'Console.logger';
const user3 = 'anthony@codeimmersives.com';
const password3 = 'like a BOSS';


// **YOUR** code below. Pass those tests!

function isValidEmail(email) {
  if (email.indexOf('@codeimmersives.com') >= 1) {
    return true;
  }
  else {
    return false;
  }

}
// if (email.includes('@codeimmersives.com) && email.length >= 20)
// return (email.endswith('@codeimmersives.com' && email.length >= 20)***
// return (email.indexOf('@codeimmersives.com') > 0)MINE IS GOOD WOOHOO!!! saying instance starts at greater than 0 because it displays it has more than just @codeimm.com
// return (email.endsWith('@codeimmersives.com') && !email.startsWith('@codeimmersives.com) === false;
function isValidPassword(password) { 
  if (password.length >= 8 && password.toUpperCase() !== password && password.toLowerCase() !== password) {
    return true;
  }
  else {
    return false;
  }
}
// return above statement instead of IF with above statement

function isRegisteredUser(user) {
  if (user === user1) {
    return true;
  }
  if (user === user2) {
    return true;
  }
  if (user === user3) {
    return true;
  }
  else {
    return false;
  }
}
// if (user === user 1 || user === user 2 || user === user 3)
// return user === user 1 || user === user 2 || user === user 3;
function passwordMatches(name, password) {
  if (name === user1 && password === password1) {
    return true;
  }
  if (name === user2 && password === password2) {
    return true;
  }
  if (name === user3 && password === password3) {
    return true;
  }
  else {
    return false;
  }
}
// name === user1 & password === password1 || so on so forth with the rest
// *** return email === user1 && password === password1 || so on so forth with the rest *** can also line up DOUBLE PIPES To make it prettier


// Our code below. Do not touch!


if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
}
