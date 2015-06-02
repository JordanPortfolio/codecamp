function palindrome(str) {
    var string = (str+'').replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~\ ()]/g,"").replace(/\s/g, "").toLowerCase();
    return string == string.split("").reverse().join("") ? true : false;
}

console.log(palindrome("Race Car"));
console.log(palindrome("hello"));