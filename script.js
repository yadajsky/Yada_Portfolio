
function changeLinkedInIconHover(){
    document.getElementById("linkedIn").src = "assets/images/icons/linkedin-2.png";
}

function changeLinkedInIconBack(){
    document.getElementById("linkedIn").src = "assets/images/icons/linkedin-4.png";
}

function changeHomeIcon(){
    document.getElementById("homeButton").src = "assets/images/icons/home-2.png";
}

function changeHomeIconBack(){
    document.getElementById("homeButton").src = "assets/images/icons/home.png";
}

function redirectToHome(){
    let homeButton = document.getElementById('homeButton');
    window.location.href = 'index.html';
}

function redirectToProject1(){
    window.location.href = 'project1.html';
}

function redirectToProject2(){
    window.location.href = 'project2.html';
}

function redirectToProject3(){
    window.location.href = 'project3.html';
}

function redirectToProject4(){
    window.location.href = 'project4.html';
}

function changeNextIcon(){
    document.getElementById("nextButton").src = "assets/images/icons/next-button.png";
}

function changeNextIconBack(){
    document.getElementById("nextButton").src = "assets/images/icons/arrow-right.png";

}

function changePreviousIcon(){
    document.getElementById("previousButton").src = "assets/images/icons/previous-button.png";
}

function changePreviousIconBack(){
    document.getElementById("previousButton").src = "assets/images/icons/arrow-left.png";
}

document.querySelectorAll(".nav-bar-link").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});

