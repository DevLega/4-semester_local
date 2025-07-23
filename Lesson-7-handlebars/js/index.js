const menuData = {
    title: "Hello",
    categories: [
        'Усі',
        'Ноутбуки',
        'Телефони'
    ],

    urls: [
        {
            url: "https://img.freepik.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8594.jpg?semt=ais_hybrid&w=740",
            category: "Ноутбуки"
        },
        {
            url: "https://img.freepik.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8594.jpg?semt=ais_hybrid&w=740",
            category: "Ноутбуки"
        },
        {
            url: "https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg?semt=ais_hybrid&w=740",
            category: "Телефони"
        },
        {
            url: "https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg?semt=ais_hybrid&w=740",
            category: "Телефони"
        }
    ]
}

const buttonsBox = document.getElementById('buttons-template').innerHTML;

const buttonsTemplate = Handlebars.compile(buttonsBox);
const generatedButtonsHTMl = buttonsTemplate(menuData);

//

const imgBox = document.getElementById('img-template').innerHTML;

const imgTemplate = Handlebars.compile(imgBox);
const generatedImgHTMl = imgTemplate(menuData);

document.body.insertAdjacentHTML('afterbegin', generatedButtonsHTMl);
document.body.insertAdjacentHTML('afterend', generatedImgHTMl);

const buttonsList = document.querySelectorAll(".button")
const itemsList = document.querySelectorAll(".img-item")

buttonsList.forEach(button => {
    button.addEventListener("click", function () {
        const filterText = this.textContent;

        itemsList.forEach(item => {
            const itemText = item.querySelector('p').textContent;
            if(filterText === "Усі" || itemText === filterText) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        })
    })
})