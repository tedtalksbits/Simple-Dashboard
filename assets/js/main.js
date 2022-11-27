// toggle open class on .sidebar
const sidebar = document.querySelector('.sidebar');
const sidebarContent = document.querySelector('.sidebar__content');
const sidebarToggle = document.querySelector('#sidebar-toggle');
const content = document.querySelector('.content');
// side panel
const sidepanel = document.querySelector('.sidepanel');
const sidepanelContent = document.querySelector('.sidepanel__content');

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

function showSidebar() {
    sidepanel.classList.add('open');
    sidepanelContent.classList.remove('hide');
    content.classList.add('sidepanel-open');
}

function hideSidebar() {
    const actionButtons = document.querySelectorAll('.action-button');

    actionButtons.forEach((button) => {
        button.classList.remove('active');
    });

    sidepanel.classList.remove('open');
    sidepanelContent.classList.add('hide');
    content.classList.remove('sidepanel-open');
}

function sidepanelAction(element) {
    hideSidebar();
    element.classList.add('active');

    const actionItems = document.querySelectorAll('.action-item');
    const target = element.dataset.target;

    actionItems.forEach((item) => {
        item.classList.remove('active');

        if (item.dataset.target === target) {
            item.classList.add('active');
        }
    });

    showSidebar();
}

function tabNavigationAction(element) {
    element.classList.add('active');

    const navigationTabs = document.querySelectorAll('.tab-item');
    const tabButtons = document.querySelectorAll('.tab');
    const target = element.dataset.target;

    tabButtons.forEach((button) => {
        button.classList.remove('active');

        if (button.dataset.target === target) {
            button.classList.add('active');
        }
    });

    navigationTabs.forEach((tab) => {
        tab.classList.remove('active');

        if (tab.dataset.target === target) {
            tab.classList.add('active');
        }
    });
}
