const myStates = [
    "Maharashtra",
    "Assam",
    "Delhi",
    1947,
    "Telangana",
    "Rajasthan"
];

myStates.forEach( (s) => (console.log(s)));

const names = ["Youtube", "facebook", "instagram", "netflix", "Amazon"];

for(const n of names) {
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline.in"
}

for(const n in symbols){
    console.log(`Keys is: ${n} and value is: ${symbols[n]}`);
}