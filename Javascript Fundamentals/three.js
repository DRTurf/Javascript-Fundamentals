const matches =(pattern, string)=>{
    const regex = new RegExp(pattern,"g");

    return string.match(regex) || [];
}

const tests = [
    { pattern: '\\d', str: 'My phone number is 123-456-7890', description: 'Digits' },
    { pattern: '[A-Z]', str: 'Hello, World!', description: 'Uppercase letters' },
    { pattern: '[a-z]', str: 'Hello, World!', description: 'Lowercase letters' },
    { pattern: '[^a-zA-Z0-9]', str: 'Hello, World! @2024', description: 'Special characters' },
];

tests.forEach((ele,ind)=>{
    const {pattern, str, description}=ele;

    const match = matches(pattern, str)

    console.log(`Test ${ind + 1}: ${description} - Pattern "${pattern}" on "${str}" Matches: ${match}`);
})

