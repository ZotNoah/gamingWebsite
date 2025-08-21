const jobs = document.querySelectorAll('.jobContainer');

jobs.forEach(job => {
    const displayJob = job.querySelector('.jobSubContainer');

    job.addEventListener('click', () => {
        if(displayJob.style.display === "none" || displayJob.style.display === ""){
            displayJob.style.display = "block";
        } else {
            displayJob.style.display = "none";
        }
    });
});

document.querySelectorAll('.jobContainer').forEach(container => {
  container.addEventListener('click', () => {
    const arrow = container.querySelector('.rotateArrow');
    arrow.classList.toggle('active');
  });
});

const menuItems = document.getElementsByClassName('menuPannel')[0];
const menubutton = document.getElementById('bigNav');

function dropdownMenu(event){
  menuItems.classList.toggle('activePannel');
  event.stopPropagation();
}


menubutton.addEventListener('click',dropdownMenu);