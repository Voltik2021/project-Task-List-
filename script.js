let buttonAdd = document.querySelector('.button');
let taskList = document.querySelector('.task-list');
let list = document.querySelector('.task-list').firstElementChild;
let toClose = document.querySelector('.task-list').firstElementChild.lastElementChild;

let grayDOWNarrow = document.querySelector('.grayDOWNarrow');
let blackUParrow = document.querySelector('.blackUParrow');
let blackDOWNarrow = document.querySelector('.blackDOWNarrow');
let grayUParrow = document.querySelector('.grayUParrow');






buttonAdd.addEventListener('click', () => {
    let clonList = list.cloneNode(true);
    clonList.firstElementChild.value = '';    
    taskList.append(clonList);
    clonList.lastElementChild.addEventListener('click', (e) => {
        clonList.remove();
    });    
});

toClose.addEventListener('click', (e) => {
    e.target.parentElement.remove();
});

grayDOWNarrow.addEventListener('click', (e) => {
    let htmlColection = taskList.querySelectorAll('li');
    changingTheSorting('blackUParrow') 
    sortArr(htmlColection, 'true'); 
});

blackUParrow.addEventListener('click', (e) => {
    let htmlColection = taskList.querySelectorAll('li');
    changingTheSorting('blackDOWNarrow') 
    sortArr(htmlColection); 
});

blackDOWNarrow.addEventListener('click', (e) => {
    let htmlColection = taskList.querySelectorAll('li');
    changingTheSorting('upAgain') 
    sortArr(htmlColection, 'true'); 
});



function changingTheSorting(type) {    
    blackDOWNarrow.style.display = 'none';
    grayUParrow.style.display = 'none';
    grayDOWNarrow.style.display = 'none';
    blackUParrow.style.display = 'none';

    switch (type) {
        case 'blackUParrow': 
            blackUParrow.style.display = 'block';
            break;
        case 'blackDOWNarrow':
            blackDOWNarrow.style.display = 'block';
            break;  
        case 'upAgain':
            blackUParrow.style.display = 'block';
            break;  
    };   
};


function sortArr(htmlColection, direction) {
    let arr = Array.from(htmlColection);
    let newArr = arr.map((item) => {
        return item.firstElementChild.value;
    });
    
    newArr.sort((a, b) => {                
        if (a < b) {
            return direction === 'true'? -1:1;
        } else if (a > b) {
            return direction === 'true'? 1:-1;
        } else {
            return 0;
        }
    }); 
    for (i = 0; i < arr.length; i++) {
        arr[i].firstElementChild.value = newArr[i]
    }       
};
