
var numberOfDrumButtons= document.querySelectorAll(".drum").length;
//Detecting  a buttton pressed
for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        
        var buttonIdentity = this.innerHTML;
        makeSound(buttonIdentity);
        btnAnimation(buttonIdentity);
    });
}

//Detecting a Keyboard key was Pressed
document.addEventListener("keypress", function (event){
    makeSound(event.key);
    btnAnimation(event.key);
})

// which sound was played on this button or keypress
function makeSound(key){
    switch (key){
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'l':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        default:
            console.log(); 
    }
}

//Button animation
function btnAnimation(currentKey){
    var activeBtn=document.querySelector("."+ currentKey); 
    activeBtn.classList.add('pressed');
    setTimeout(function(){
        activeBtn.classList.remove('pressed');
    },250)
}
