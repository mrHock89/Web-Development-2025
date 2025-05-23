let myString = "I am going to build an empire from scratch."

function vowelCount(str) {
    let newStr = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < newStr.length; i++) {
        const currentLtr = newStr[i];
        // Method 1
        // if(currentLtr === 'a' || currentLtr ===  'e' || currentLtr === 'i' || currentLtr === 'o' || currentLtr === 'u'){
        //     count = count + 1;

        // Method 2
        if ('aeiou'.includes(currentLtr)) {
            count += 1;
        }

    }
    return count;
}

console.log(vowelCount(myString));
