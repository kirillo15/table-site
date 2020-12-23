import {Table} from './Table.js'
import {hideTableItem, showTableItem, showAllTableItem} from './filterTable.js'
import {preload} from './preload.js'

const itemTab = document.querySelector('.table__body-wrap'),
      itemClearInput = document.querySelector('.clear-input'),
      inputSearch = document.querySelector('.search__input')



let promise = new Promise((resolve,reject) =>{
    resolve()
})
    .then(resp => {
           return  preload()   
    })
    .then(url => fetch('https://randomuser.me/api/?results=15'))
    .then(response => response.json())
    .then(resp => {
        for(let i = 0; i < resp.results.length; i++) {
            new Table(resp.results[i]).render(itemTab)
        }
    })
    .then(resp => {
        showLargeImg()
        showSearchName()
    })

async function showLargeImg(){
    const imgThumbnail = document.querySelectorAll('.table__img-thumbnail')
    const imgLarge = document.querySelectorAll('.table__img-large')

    for(let i = 0; i < imgThumbnail.length; i++) {
        imgThumbnail[i].addEventListener('mouseover', () => {
            imgLarge[i].classList.toggle('isActive')
        })

        imgLarge[i].addEventListener('mouseout', () => {
            imgLarge[i].classList.toggle('isActive')
        })
    }
}



async function showSearchName(){
    const nameArray = document.querySelectorAll('.table__fullname')
    const tableMessage = document.querySelector('.table__message')

    itemClearInput.addEventListener('click', (e) => {
        inputSearch.value = ''
        showAllTableItem(nameArray)
    })
    
    inputSearch.addEventListener('input', (e) => {

        nameArray.forEach((item) => {
            if(!item.innerText.toLowerCase().includes(inputSearch.value)) {
               setTimeout(hideTableItem, 700, item) 
            } else {
                setTimeout(showTableItem, 700, item) 
            }
        })

        if(itemTab.clientHeight <= 0) {
            tableMessage.style.display = 'block'
        } else {
            tableMessage.style.display = 'none'
        }
    })
    
}

// let ars = ['table__item hide', 'table__item hde', 'table__item hide']


// console.log(ars.every(item => item === 'table__item hide'))