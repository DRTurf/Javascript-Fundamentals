const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // checkes for valid email addresses

const string1 = "sagnik.tarafder@gmail.com";
const string2 = "Sagnik Tarafder";

function check(string){
    return regex.test(string);
}

console.log(check(string1)); //true
console.log(check(string2)); //false
