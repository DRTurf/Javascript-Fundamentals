function outerFunction(name){
    const vari = 25;
    return function innerFunction(){
        console.log(`My name is ${name} and I am ${vari} years old.`);
    }
}

const callback=outerFunction("Sagnik");

callback();

//Lexical scoping refers to the way variables are resolved in nested functions based on their location within the source code. In JavaScript, functions remember the scope in which they were created. This means that even after the outer function has finished executing, the inner function retains access to the variables of the outer function's scope