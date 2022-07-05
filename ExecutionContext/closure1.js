const firstname = 'Tina';
function makeFunc() {
    const lastname = 'Xing';
    function displayName(greeting) {
        console.log(`${greeting} from ${firstname} ${lastname}`);
    }
    return displayName;
}
const myFunc = makeFunc();
// console.dir(myFunc);
myFunc();