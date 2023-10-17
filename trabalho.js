var header = document.getElementById('header');
var navigationheader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar(){
    showSidebar = !showSidebar;
    
    if(showSidebar){
        navigationheader.style.marginLeft = '-10vw';
        navigationheader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';        
    }
    else{
        navigationheader.style.marginLeft = '-100vw';
        navigationheader.style.animationName = '';
        content.style.filter = '';        
        
    }


}
function closeSidebar(){
    if(showSidebar){
        toggleSidebar();
    }
}
window.addEventListener('resize', function(event){
    if(this.window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
});

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })

})
const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => {
        myObserver.observe(element)
})
