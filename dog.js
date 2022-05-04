//buttons//
const buttonPlayWith = document.getElementById("buttonPlayWith");
const buttonFeed = document.getElementById("buttonFeed");
const buttonWater = document.getElementById("buttonWater");
const buttonWalk = document.getElementById("buttonWalk");
const buttonKillPet = document.getElementById("buttonKillPet");
//get progress bars by ID//
const objectLvlPlay = document.getElementById("objectLvlPlay");
const objectLvlHunger = document.getElementById("objectLvlHunger");
const objectLvlThirst = document.getElementById("objectLvlThirst");
const objectLvlWalks = document.getElementById("objectLvlWalks");
const petBoxSingular = document.getElementById("petBoxSingular");
const buttonRevivePet = document.getElementById("buttonRevivePet");

var audio = new Audio("puppy-barks.wav");
    document.onclick = function() {
        audio.play();
    }


//petIcon//
document.getElementById("petIcon").src="cyberDog1.png";


//Interacting with Pet//
buttonPlayWith.addEventListener("click", ()=>{ //increases value of play level when clicked//
    objectLvlPlay.value+=20;
})
buttonPlayWith.addEventListener("mousedown", ()=>{ //makes cat happy when interacted with//
    petIcon.src="cyberDog1.png";
})
buttonPlayWith.addEventListener("mouseup", ()=>{ //returns cat to neutral state on mouse release//
    petIcon.src="cyberDog2.png";
})
buttonFeed.addEventListener("click", ()=>{ //increases value of hunger level when clicked//
    objectLvlHunger.value+=20;
})
buttonFeed.addEventListener("mousedown", ()=>{
    petIcon.src="cyberDog1.png";
})
buttonFeed.addEventListener("mouseup", ()=>{
    petIcon.src="cyberDog2.png";
})
buttonWater.addEventListener("click", ()=>{//increases value of thirst level when clicked//
    objectLvlThirst.value+=20;
})
buttonWater.addEventListener("mousedown", ()=>{
    petIcon.src="cyberDog1.png";
})
buttonWater.addEventListener("mouseup", ()=>{
    petIcon.src="cyberDog2.png";
})
buttonWalk.addEventListener("click", ()=>{//increases value of walks level when clicked//
    objectLvlWalks.value+=20;
})
buttonWalk.addEventListener("mousedown", ()=>{
    petIcon.src="cyberDog1.png";
})
buttonWalk.addEventListener("mouseup", ()=>{
    petIcon.src="cyberDog2.png";
})
buttonKillPet.addEventListener("click", () => { //to make pet dead//
    objectLvlPlay.value=0;
    objectLvlHunger.value=0;
    objectLvlThirst.value=0;
    objectLvlWalks.value=0;
    petIcon.src="cyberPetDead.png";
    petBoxSingular.style.background = "grey";
    buttonKillPet.style.display = "none";
    buttonRevivePet.style.display = "block";
})
buttonRevivePet.addEventListener("click", () => { //to revive cat//
    objectLvlPlay.value=1000;
    objectLvlHunger.value=100;
    objectLvlThirst.value=100;
    objectLvlWalks.value=100;
    petIcon.src="cyberDog2.png";
    petBoxSingular.style.background = " #F4CEC7";
    buttonKillPet.style.display = "block";
    buttonRevivePet.style.display = "none";
})

objectLvlPlay.value = 100;
objectLvlHunger.value = 100;
objectLvlThirst.value = 100;
objectLvlWalks.value = 100;

let play = setInterval(() => {
    objectLvlPlay.value--;
}, 1000); 
let hunger = setInterval(() => {
    objectLvlHunger.value--;
}, 1100); 
let thirst = setInterval(() => {
    objectLvlThirst.value--;
}, 1200); 
let walks = setInterval(() => {
    objectLvlWalks.value--;
}, 2000); 

if(objectLvlPlay.value == 0) {
    clearInterval(play);
}
if(objectLvlHunger.value == 0) {
    clearInterval(hunger);
}
if(objectLvlThirst.value == 0) {
    clearInterval(thirst);
}
if(objectLvlWalks.value == 0) {
    clearInterval(walks);
}