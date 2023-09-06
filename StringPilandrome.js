function Pilandrome(mystring) {
  let isPalindrome = true;
  var newString = [];

  let j = 0;
  for (i = mystring.length - 1; i >= 0; i--) {
    //console.log(mystring[i]);
    newString[j] = mystring[i];
    j++;
  }

  for (let i = 0; i < mystring.length; i++) {
    if (newString[i] != mystring[i]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome === true) {
    console.log("it is a palindrom");
  } else {
    console.log("not a palindrom");
  }
}

let mystring = "MADAM";
Pilandrome(mystring);
