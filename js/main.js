let about = $('#About').offset().top;
let Blog = $('#Blog').offset().top;
let Services = $('#Services').offset().top;
let Works = $('#Works').offset().top;
let Clients = $('#Clients').offset().top;
let Contact = $('#Contact').offset().top;
console.log(about);
$(window).scroll(() => {
    let scroll = $(window).scrollTop();
    if (scroll >= about - 90) {
        $('.navbar').css('background-color', 'black')
        document.querySelector(".active").classList.remove("active");
        $("#myAbout").addClass("active");
    } else {
        $('.navbar').css('background-color', 'transparent')
        document.querySelector(".active").classList.remove("active");
        $("#myHome").addClass("active");

    }

    if (scroll >= Services) {
        document.querySelector(".active").classList.remove("active");
        $("#myServices").addClass("active");
    }
    if (scroll >= Works) {
        document.querySelector(".active").classList.remove("active");
        $("#myWorks").addClass("active");
    }
    if (scroll >= Clients) {
        document.querySelector(".active").classList.remove("active");
        $("#myClients").addClass("active");
    }
    if (scroll >= Blog) {
        document.querySelector(".active").classList.remove("active");
        $("#myBlog").addClass("active");
    }
    if (scroll >= Contact) {
        document.querySelector(".active").classList.remove("active");
        $("#myContact").addClass("active");
    }

})

$('.nav-link').click((e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

})

var typed = new Typed('.element', {
    strings: ['Larry Daniels', ' Designer', ' Developer'],
    smartBackspace: false,// Default value
    loop: true,
    backDelay: 1000,
    cursorChar: '|',
    typeSpeed: 80,
    backSpeed: 80,
});

$('.counter').counterUp({
    delay: 15,
    time: 2000
});
$(document).ready(()=>{
    $(".loading").fadeOut(2000);
})