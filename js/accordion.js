const tabsBtn   = document.querySelectorAll(".accordion__header");
const tabsItems = document.querySelectorAll(".accordion__content");

tabsBtn.forEach(onTabClick);

/*Обработчик события клика*/
function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

/*document.querySelector('.accordion__header').click()  tabsBtn */