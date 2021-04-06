window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
})
let profile = document.getElementById('profile');
console.log(profile);

let dropDownItems = document.getElementById('dropdown-content');
console.log(dropDownItems);

profile.addEventListener("mouseover", (event) => {
    dropDownItems.style.display = "block";
})
profile.addEventListener("mouseout", (event) => {
    dropDownItems.style.display = "none";
})

dropDownItems.addEventListener("mouseover", (event) => {
    dropDownItems.style.display = "block";
})

dropDownItems.addEventListener("mouseout", (event) => {
    dropDownItems.style.display = "none";
})