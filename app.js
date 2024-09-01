let sidebarBtn = document.querySelector('.sidebarBtn')
let sidebar = document.querySelector('.sidebar')
let cancelBtn = document.querySelector('.cancel')

const sidebarBtnToggler = ()=>{
    sidebar.classList.add('active')
    
}

sidebarBtn.addEventListener('click',sidebarBtnToggler)


const cancelToggler = (event)=>{
    const {target}= event
    if (target.classList.contains('sidebar')|| target.classList.contains('cancel')){
    sidebar.classList.remove('active')}
}
cancelBtn.addEventListener('click',cancelToggler)