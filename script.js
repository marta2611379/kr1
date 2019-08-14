let getSel = x => document.querySelector(x);
let getSelAll = y => document.querySelectorAll(y);

let result = getSel('.result');
let editBox = getSel('.editBox');
let textArea = getSel('#textArea');
let styleBox = getSel('.styleBox');
let tableListBox = getSel('.tableListBox');
let buttonGroup = getSel('.buttonGroup');

//button EDIT
getSel('.edit').addEventListener('click', () => {
    editBox.style.display = 'block';
    result.style.display = 'block';
    textArea.value = result.innerHTML;
    styleBox.style.display = 'none';
})

//button SAVE
getSel('.save').addEventListener('click', () => {
    result.innerHTML = textArea.value;
})

//button ADD
getSel('.add').addEventListener('click', () => {
    editBox.style.display = 'none';
    styleBox.style.display = 'none';
    result.style.display = 'none';
    tableListBox.style.display = 'block';
    buttonGroup.style.display = 'none';
})

//button STYLE
getSel('.style').addEventListener('click', () => {
    tableListBox.style.display = 'none';
    result.style.display = 'block';
    editBox.style.display = 'none';
    styleBox.style.display = 'block';
})

//font-size
let f2 = document.forms['f2'];
for (let i = 0; i < f2.elements.length; i++) {
    f2.elements[i].addEventListener('click', function () {
        result.style.fontSize = this.value;
    })
}

//font-family
getSel('#fontFamily').onchange = function () {
    result.style.fontFamily = this.value;
}

//checkbox1 (font-style:italic)
let f4 = document.forms['f4'];
let scheck = true;
f4.fstyle.addEventListener('click', function () {
    if (scheck) {
        result.style.fontStyle = this.value;
        scheck = false;
    }
    else {
        result.style.fontStyle = '';
        scheck = true;

    }
})

//checkbox2 (font-weight:bold)
let wcheck = true;
f4.fweight.addEventListener('click', function () {
    if (wcheck) {
        result.style.fontWeight = this.value;
        wcheck = false;
    }
    else {
        result.style.fontWeight = '';
        wcheck = true;

    }
})

//color container disappear  after a click
let f5 = document.forms['f5'];
getSel('.containerColors').addEventListener('click', () => {
    getSel('.containerColors').style.display = 'none';
})

// 'Text color' button 
getSel('.tcolor').addEventListener('click', () => {
    getSel('.containerColors').style.display = 'flex';
    getSel('.containerColors').style.flexWrap = 'wrap';
    let getAtrColor = getSelAll('.containerColors>div');
    [].forEach.call(getAtrColor, function (a) {
        a.onclick = function () {
            result.style.color = this.dataset.c;
        }
    })
})

// 'Background color' button 
getSel('.bgcolor').addEventListener('click', () => {
    getSel('.containerColors').style.display = 'flex';
    getSel('.containerColors').style.flexWrap = 'wrap';
    let getAtrColor = getSelAll('.containerColors>div');
    [].forEach.call(getAtrColor, function (a) {
        a.onclick = function () {
            getSel('#result').style.backgroundColor = this.dataset.c;
        }
    })
})

let f6 = document.forms['f6'];
let f7 = document.forms['f7'];

for (let i = 0; i < f7.elements.length; i++) {
    f7.elements[i].addEventListener('click', function () {
        //radio 'table'
        if (f7.elements[i].value == 'table') {
            getSel('.listBox').style.display = 'none';
            getSel('.tableBox').style.display = 'block';
        }
        //radio 'list'
        else if (f7.elements[i].value == 'list') {
            getSel('.tableBox').style.display = 'none';
            getSel('.listBox').style.display = 'block';
        }
    })
}

let createEl = z => document.createElement(z);

//'Create table' button
getSel('.createTable').addEventListener('click', function () {
    buttonGroup.style.display = 'block';
    //get filled values
    let tr = f6.tr.value;
    let td = f6.td.value;
    let tdWidth = f6.tdWidth.value;
    let tdHeight = f6.tdHeigth.value;
    let borderWidth = f6.borderWidth.value;
    let borderColor = f6.borderColor.value;
    let borderType = f6.borderType.value;

    //create DIV for table
    let div = createEl('div');
    document.body.appendChild(div);
    div.style.display = 'none';

    //create TABLE
    let table = createEl('table');
    div.appendChild(table);

    //create TD and TR tags
    for (let i = 0; i <= tr; i++) {
        let tr = createEl('tr');
        table.appendChild(tr);
        for (let j = 0; j <= td; j++) {
            let td = createEl('td');
            tr.appendChild(td);
        }
    }

    //add style to TD tags
    let tdTag = document.getElementsByTagName('td')
    for (let i = 0; i < tdTag.length; i++) {
        tdTag[i].innerText = 'TD';
        tdTag[i].style.width = tdWidth + 'px';
        tdTag[i].style.height = tdHeight + 'px';
        tdTag[i].style.borderWidth = borderWidth + 'px';
        tdTag[i].style.borderColor = borderColor;
        tdTag[i].style.borderStyle = borderType;
    }

    result.style.display = 'block';
    textArea.value = result.innerHTML + div.innerHTML;
    tableListBox.style.display = 'none';
    editBox.style.display = 'block';
})


//'Create list' button
getSel('.createList').addEventListener('click', function () {
    buttonGroup.style.display = 'block';

    //get filled values
    let li = f6.li.value;
    let marksType = f6.marksType.value;

    //create DIV for list
    let div = createEl('div');
    document.body.appendChild(div);
    div.style.display = 'none';

    //create UL list
    let ul = createEl('ul');
    div.appendChild(ul);
    ul.style.listStyleType = marksType;


    //create LI    
    for (let i = 0; i <= li; i++) {
        let li = createEl('li');
        ul.appendChild(li);
    }

    //add style to TD tags
    let liTag = document.getElementsByTagName('li')
    for (let i = 0; i < liTag.length; i++) {
        liTag[i].innerText = 'LI';
    }

    result.style.display = 'block';
    textArea.value = result.innerHTML + div.innerHTML;
    tableListBox.style.display = 'none';
    editBox.style.display = 'block';

})
