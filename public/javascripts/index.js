window.addEventListener("load", (event)=>{
    // console.log("hello from javascript!")
})
let profile = document.getElementById('profile');

let dropDownItems = document.getElementById('dropdown-content');
try {

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
    
} catch (e){
    console.log("no errors here chief ;)")
}