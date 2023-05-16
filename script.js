var count = 0;

document.querySelector("#increase1").addEventListener("click",() => {
    changeCount(1);
});
document.querySelector("#increase2").addEventListener("click",() => {
    changeCount(2);
});
document.querySelector("#increase3").addEventListener("click",() => {
    changeCount(3);
});
document.querySelector("#increase4").addEventListener("click",() => {
    changeCount(4);
});
document.querySelector("#increase5").addEventListener("click",() => {
    changeCount(5);
});
document.querySelector("#increase6").addEventListener("click",() => {
    changeCount(6);
});
document.querySelector("#increase7").addEventListener("click",() => {
    changeCount(7);
});
document.querySelector("#increase8").addEventListener("click",() => {
    changeCount(8);
});
document.querySelector("#increase9").addEventListener("click",() => {
    changeCount(9);
});

changeCount = (number) => {
    count += number;
    document.querySelector("#count").textContent = count;
}