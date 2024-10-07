function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    let tabsParent = document.querySelector(tabsParentSelector),
        tabs = tabsParent.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector);

	function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('flex');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
	}

	function showTabContent(i = 0) {
        tabsContent[i].classList.add('flex');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();
    
    let selector = tabsSelector.split('.').join('')
    document.querySelectorAll(tabsSelector).forEach((item, i) => {
        let class_list = item.classList.value

        item.addEventListener('click', function(event) {
            if(class_list.includes(selector)) {
                tabs.forEach((tab, j) => {
                    if (i == j) {
                        hideTabContent();
                        showTabContent(j);
                    }
                });
            }
        });
    })
}
