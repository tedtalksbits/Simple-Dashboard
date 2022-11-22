// toggle open class on .sidebar
const sidebar = document.querySelector('.sidebar');
const sidebarContent = document.querySelector('.sidebar__content');
const sidebarToggle = document.querySelector('#sidebar-toggle');
const content = document.querySelector('.content');

sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    sidebarContent.classList.toggle('hide');
    content.classList.toggle('sidebar-open');
});
/*
    ========================================
    | UNCOMMENT TO ENABLE MOUSE ENTER LEAVE EVENTS FOR SIDEBAR |
    ========================================
*/

// // toggle open class on .sidebar on mouse enter
// sidebar.addEventListener('mouseenter', function () {
//     sidebar.classList.add('open');
//     sidebarContent.classList.remove('hide');
//     content.classList.add('sidebar-open');
// });

// // toggle open class on .sidebar on mouse leave
// sidebar.addEventListener('mouseleave', function (e) {
//     // log mouse position
//     // console.log(e.clientX);

//     sidebar.classList.remove('open');
//     sidebarContent.classList.add('hide');
//     content.classList.remove('sidebar-open');
// });

// toggle open class on .sidepanel
const sidepanel = document.querySelector('.sidepanel');
const sidepanelContent = document.querySelector('.sidepanel__content');
const sidepanelToggle = document.querySelector('#sidepanel-toggle');

sidepanelToggle.addEventListener('click', function () {
    sidepanel.classList.toggle('open');
    sidepanelContent.classList.toggle('hide');
    content.classList.toggle('sidepanel-open');
});
