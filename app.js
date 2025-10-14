
console.log('Hello World!!');
//create variables 
const name = "Gus Cardenas Rosales"
let hasDownloaded = false;

//create alert when resume is downloaded 
document.addEventListener('DOMContentLoaded', function(){
    const downloadBtn = document.querySelector('.resume-btn');

    downloadBtn.addEventListener('click', function(){
        if(!hasDownloaded){
            alert("Your resume is downloaded successfully!");
            hasDownloaded = true;
        }
    });
});

//create greeting using java
function showGreeting(name){
    return "Hello my name is " + name + "! Welcome to my portfolio!";
}

document.addEventListener('DOMContentLoaded', function(){
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = showGreeting(name);
});

//create ongoing projects variables  
function daysUntilDeadline(deadlineDate){
    const today = new Date();
    const deadline = new Date(deadlineDate);
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

//display the remaining days 
const remainingdays = daysUntilDeadline("2025-11-01");
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("deadline").textContent = 
    "Days until project deadline: " + remainingdays;
});

