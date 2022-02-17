const age = prompt("Enter your age");

if (5 > age && age >= 0) {
    console.log("Free")
}
else if (10 > age) {
    console.log("$10")
}
else if (65 > age) {
    console.log("$20")
}
else {
    console.log("$5")
}