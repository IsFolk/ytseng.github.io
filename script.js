var aboutmeButtons = document.getElementsByClassName('aboutme_button');
var showprojectButtons = document.getElementsByClassName('project_button');
var experienceButtons = document.getElementsByClassName('experience_button');


var helloDiv = document.getElementById('hello');
var projectDiv = document.getElementById('project');
var experienceDiv = document.getElementById('experience');
var animated = false;


document.getElementById('experience').addEventListener('click', function experiencehandleClick() {
    if(!animated){
        experienceDiv.classList.add('animate');
        projectDiv.style.display = 'none';
        document.getElementById('experience').removeEventListener('click', experiencehandleClick);
        console.log("experience animate");
        animated = true;    
    }
    helloDiv.style.display = 'none';
});

document.getElementById('project').addEventListener('click', function projecthandleClick() {
    if(!animated){
        project.classList.add('animate');
        experienceDiv.style.display = 'none';
        document.getElementById('project').removeEventListener('click', projecthandleClick);
        console.log("project animate");
        animated = true    
    }
    helloDiv.style.display = 'none';
});


for (let button of showprojectButtons) {
    button.addEventListener('click', function() {
        experienceDiv.style.display = 'none';

        projectDiv.classList.remove('animate');
        projectDiv.style.display = 'block';
        projectDiv.style.transform = 'translate(0%, 0%) rotate(0)';
        
        console.log("Show project")
    });
}

for (let button of experienceButtons) {
    button.addEventListener('click', function() {
        projectDiv.style.display = 'none';

        experienceDiv.classList.remove('animate');
        experienceDiv.style.display = 'block';
        experienceDiv.style.transform = 'translate(0%, 0%) rotate(0)';

        console.log("Show experience")
    });
}

let scrollDiv = document.getElementsByClassName('scroll');
let containerDiv = document.querySelector('.project-container');

let isDown = false;
let startX;
let scrollLeft;

for(let div of scrollDiv){
    console.log(div);
    div.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - div.offsetLeft;
        scrollLeft = containerDiv.scrollLeft;
    });
    
    
    div.addEventListener('mouseup', () => {
        isDown = false;
    });
}

document.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollDiv[0].offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    containerDiv.scrollLeft = scrollLeft - walk;
});