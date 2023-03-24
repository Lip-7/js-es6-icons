
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
    for (icon of icons) {
        const newCard = drawCard(icon);
        document.querySelector('.cards').append(newCard)
    }

}
app();

function generateOptions(obj) {
    const newOption = document.createElement('option')

}