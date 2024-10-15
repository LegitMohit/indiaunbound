
function changecolor(color ){
    let navbartext=document.getElementsByClassName('navtext')
    for(let i=0; i<navbartext.length; i++){
        navbartext[i].style.color=color
        }
}   
changecolor('#2e2e2e');   
window.addEventListener("scroll", function(event) {
    var scrollPosition = window.scrollY;

    console.log("Scrolled:", scrollPosition, "pixels vertically.");

    if(scrollPosition>80)
    {
        document.getElementById('Navbar').style.background='#2e2e2e'
    }else{
        document.getElementById('Navbar').style.background='transparent'

    }
    if(scrollPosition>80)
    {
        changecolor('#fff')
    }else{
        changecolor('#2e2e2e')
    }
    
});   

function changeImageOnScroll() {
const imageElement1 = document.getElementById('homeicon');
const imageElement = document.getElementById('ticketlogo');
const imageElement2 = document.getElementById('currencylogo');
const imageElement3 = document.getElementById('formicon');
const scrollPosition = window.scrollY;

if (scrollPosition > 80) { // Adjust the threshold as needed
    imageElement1.src = '../images/homeicon.png'; // Replace with the desired image path
    imageElement.src = '../images/ticketlogo.png'; // Replace with the desired image path
    imageElement2.src = '../images/currencylogo.png'; // Replace with the desired image path
    imageElement3.src = '../images/formicon.png'; // Replace with the desired image path

} else {
    imageElement1.src = '../images/blackhome.png'; // Replace with the initial image path
    imageElement.src = '../images/blackticket.png'; // Replace with the initial image path
    imageElement2.src = '../images/blackcurrency.png'; // Replace with the initial image path
    imageElement3.src = '../images/blackform.png'; // Replace with the initial image path

} 
}
window.addEventListener('scroll', changeImageOnScroll);