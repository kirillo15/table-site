export function hideTableItem(item){
    item.parentElement.classList.add('hide')
    item.parentElement.classList.remove('show')
}

export function showTableItem(item){
    item.parentElement.classList.add('show')
    item.parentElement.classList.remove('hide')
}

export function showAllTableItem(arr) {
    arr.forEach(item => item.parentElement.classList.add('show'))
}

