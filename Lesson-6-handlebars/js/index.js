const menuData = {
    title: "Hello",
    items: [
        'Hde',
        'das',
        'dsa'
    ]
}

const element = document.getElementById('menu-template').innerHTML;

const template = Handlebars.compile(element);
const generatedHTMl = template(menuData);

document.body.insertAdjacentHTML('afterbegin', generatedHTMl);