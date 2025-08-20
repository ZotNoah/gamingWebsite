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