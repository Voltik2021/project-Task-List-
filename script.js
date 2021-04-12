let buttonAdd = document.querySelector('.button');
let taskList = document.querySelector('.task-list');
let list = document.querySelector('.task-list').firstElementChild;
let toClose = document.querySelector('.task-list').firstElementChild.lastElementChild;

let grayDOWNarrow = document.querySelector('.grayDOWNarrow');
let blackUParrow = document.querySelector('.blackUParrow');
let blackDOWNarrow = document.querySelector('.blackDOWNarrow');






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
    sortArr(htmlColection);  

});


function sortArr(arr) {
    let newArr = Array.from(arr);
    console.log(newArr)
    newArr.sort((a, b) => {
        a = a.firstElementChild.value;
        b = b.firstElementChild.value;        
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });   
}

