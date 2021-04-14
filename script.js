let buttonAdd = document.querySelector('.button');
let taskList = document.querySelector('.task-list');
let list = document.querySelector('.task-list').firstElementChild;
let toClose = document.querySelector('.toClose')
let grayDOWNarrow = document.querySelector('.form-img').firstElementChild;


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
    changingTheSorting(e.target.classList.contains('grayDOWNarrow'));

});

function changingTheSorting(type) {
    let htmlColection = taskList.querySelectorAll('li');
    switch (type) {
        case true:
            sortArr(htmlColection, 'true');
            grayDOWNarrow.classList.add('grayUParrow');
            grayDOWNarrow.classList.remove('grayDOWNarrow');
            break;
        case false:
            sortArr(htmlColection);
            let grayUParrow = document.querySelector('.grayUParrow');
            grayUParrow.classList.add('grayDOWNarrow');
            grayUParrow.classList.remove('grayUParrow');
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
            return direction === 'true' ? -1 : 1;
        } else if (a > b) {
            return direction === 'true' ? 1 : -1;
        } else {
            return 0;
        }
    });
    for (i = 0; i < arr.length; i++) {
        arr[i].firstElementChild.value = newArr[i]
    }
};
