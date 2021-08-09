class searchWrap {
    constructor() {
        this.inputBar = document.querySelector('.input-bar');
        this.cancel = document.querySelector('.cancel')
        this.searchHistory = document.querySelector('.search-history');
        this.historyWrap = document.querySelector('.search-history-wrap');
        this.clearBtn = document.querySelector('.clear')
        this.clickEvent()
    }
    clickEvent() {
        this.cancel.addEventListener('click', ()=> {
            window.localStorage.setItem('value', this.inputBar.value.trim());
            let historyItem = document.createElement('div')
            historyItem.className = 'history-item '
            historyItem.innerHTML = `
                                    <div class="word one-line">${window.localStorage.getItem('value')}</div>
                                    `
            this.inputBar.value = ''
            if (this.searchHistory.children.length < 1) {
                this.searchHistory.appendChild(historyItem);
                this.historyWrap.style.display = 'block';
            }
            var children = this.searchHistory.children;
            if (children.length > 0) {
                this.searchHistory.insertBefore(historyItem, this.searchHistory.children[0]);
            }
        }) 
        this.clearBtn.addEventListener('click', ()=> {
            if(confirm('确认要清除所有历史记录吗？')) {
                this.searchHistory.innerHTML = ''
                window.localStorage.removeItem('value');
                this.historyWrap.style.display = 'none';
            }
            
        })
    }
}
new searchWrap 