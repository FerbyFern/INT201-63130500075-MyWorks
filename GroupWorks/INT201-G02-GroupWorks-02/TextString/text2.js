<<<<<<< HEAD
function select(x) {
  string = 'with great power comes great responsibility';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let newString = '';
  let count = 0;
  switch (x) {
    case 1:
      for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
      }
      console.log(newString);
      break;
    case 2:
      string = string.toLowerCase();
      for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
          newString += "*";
        } else {
          newString += string[i];
        }
      }
      
      console.log(newString);
      break;

    case 3:
      string = string.toLowerCase();
      for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
         count++;
        }
      }
      console.log(count);
      break;
  }
}
select(1);
select(2);
select(3);

=======
function select(x) {
  string = 'with great power comes great responsibility';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let newString = '';
  let count = 0;
  switch (x) {
    case 1:
      for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
      }
      console.log(newString);
      break;
    case 2:
      string = string.toLowerCase();
      for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
          newString += "*";
        } else {
          newString += string[i];
        }
      }
      
      console.log(newString);
      break;

    case 3:
      string = string.toLowerCase();
      for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
         count++;
        }
      }
      console.log(count);
      break;
  }
}
select(1);
select(2);
select(3);

>>>>>>> 8511728 ([update] Wk2)
