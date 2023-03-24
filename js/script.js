function app() {
    document.querySelector('button.navbar-toggler').addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.toggle('collapsed');
        document.querySelector('.navbar-collapse').classList.toggle('collapse');
    })
    const icons = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'solid',
            color: 'orange'
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'solid',
            color: 'orange'
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'solid',
            color: 'orange'
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'solid',
            color: 'orange'
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'solid',
            color: 'orange'
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'solid',
            color: 'orange'
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'solid',
            color: 'orange'
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'solid',
            color: 'orange'
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'solid',
            color: 'green'
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'solid',
            color: 'green'
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'solid',
            color: 'green'
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'solid',
            color: 'green'
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'solid',
            color: 'blue'
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'solid',
            color: 'blue'
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'solid',
            color: 'blue'
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'solid',
            color: 'blue'
        }
    ];
    const typeList = ['all','animal', 'vegetable', 'user']
    changeColorObjList(icons, typeList)
    for (let icon of icons) {
        const newCard = drawCard(icon);
        document.querySelector('.cards').append(newCard);
    }
    const options = generateOptions(typeList);
    const filterSelect = document.getElementById('filter');
    for (let opt of options) {
        filterSelect.appendChild(opt);
    }
    filterSelect.addEventListener('change', function() {
        const selectedOption = this.value;
        const objByTypeList = [listFromObjValue(icons, 'type', 'animal'), listFromObjValue(icons, 'type', 'vegetable'), listFromObjValue(icons, 'type', 'user')];
        document.querySelector('.cards').innerHTML = ''
        switch (selectedOption) {
            case 'all' :
                for (let icon of icons) {
                    const newCard = drawCard(icon);
                    document.querySelector('.cards').append(newCard);
                }
                break;
            case 'animal' :
                for (let icon of objByTypeList[0]) {
                    const newCard = drawCard(icon);
                    document.querySelector('.cards').append(newCard);
                }
                break;
            case 'vegetable' :
                for (let icon of objByTypeList[1]) {
                    const newCard = drawCard(icon);
                    document.querySelector('.cards').append(newCard);
                }
                break;
            case 'user' :
                for (let icon of objByTypeList[2]) {
                    const newCard = drawCard(icon);
                    document.querySelector('.cards').append(newCard);
                }
                break;
        }
    })  
}
app();