function a() {
    console.log(x);
}
function b() {
    const x = 10;
    a();
}
const x = 20;
b();