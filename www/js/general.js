function showList() {
    const sections = 50;
    const items =10;

    var list = document.createElement('ul');
    list.setAttribute('class', 'myul');
    for(var i=0; i<sections; i++) {
        var listElement = document.createElement('li');
        listElement.innerHTML = 'Section ' + i;
        listElement.setAttribute('class', 'mySection');
        list.appendChild(listElement);
        for(var j=0; j<items; j++) {
            var listElement = document.createElement('li');
            listElement.innerHTML = 'Item ' + j;
            listElement.setAttribute('class', 'myli');
            list.appendChild(listElement);
        }
    }
    document.getElementById('listview').appendChild(list);
}