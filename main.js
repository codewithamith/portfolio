//Progressbar      
const progressLine = document.querySelector(".progress-line");
function updateProgressLine() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
  progressLine.style.width = scrollPercent + "%";
}
window.addEventListener("scroll", updateProgressLine);
window.addEventListener("load", updateProgressLine);


// Function to show the contact popup
function showContactPopup() {
    var contactPopup = document.getElementById('contact-popup');
    contactPopup.style.display = 'block';
}
function hideContactPopup() {
    var contactPopup = document.getElementById('contact-popup');
    contactPopup.style.display = 'none';
}
document.getElementById('action-btn').addEventListener('click', function() {
    showContactPopup();
});
document.getElementById('close-btn').addEventListener('click', function() {
    hideContactPopup();
});


// Mobile Menu
var mobileBtn = document.getElementById("mobile-btn");
var mainMenu = document.getElementById("main-menu");
var menuVisible = false;

mobileBtn.addEventListener("click", function () {

    if (menuVisible) {
        mainMenu.style.display = "none";
        mobileBtn.className = "ri-menu-line";
        
    } else {
        mainMenu.style.display = "block";
        mobileBtn.className = "ri-close-fill";    
    }

    // Toggle the menu visibility flag
    menuVisible = !menuVisible;
});