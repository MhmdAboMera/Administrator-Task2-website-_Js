
// show togele menu in somll media 
document.querySelector(".landing-page .header-area .menu").onclick =function (e){
    e.stopPropagation();
    document.querySelector(".landing-page .header-area .links").classList.toggle("open");
    this.classList.toggle("menu-active");
}
document.querySelector(".landing-page .header-area .links").onclick = function(e){
    e.stopPropagation();
}
// close toggle menu
document.addEventListener("click",(e)=>{
    if(e.toggle !== document.querySelector(".landing-page .header-area .menu") && e.toggle !== document.querySelector(".landing-page .header-area .links")){
        if(document.querySelector(".landing-page .header-area .links").classList.contains("open")){
            document.querySelector(".landing-page .header-area .menu").classList.toggle("menu-active");
            document.querySelector(".landing-page .header-area .links").classList.toggle("open");
        }
    }
});
// preventDefault
document.getElementById("student-form").addEventListener("submit", (e) => {
    e.preventDefault();
});
