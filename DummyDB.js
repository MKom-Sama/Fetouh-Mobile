const veggyPizza = require("./assets/img/vegy-pizza.jpeg");

const easternMenuItems = [
    {
        id: 0,
        name: "sugar and cream",
        photo: require("./assets/img/sweetAndSugar.png"),
        price: {
            'small': 50,
            'medium': 80,
            'large': 100,
            'XLarge':120
        }
    },
    {
        id: 1,
        name: "Rumy and Cheese",
        photo: veggyPizza,
        price: {
            'small': 50,
            'medium': 80,
            'large': 100,
            'XLarge':120
        }
    },
    {
        id: 2,
        name: "Sausage",
        photo: veggyPizza,
        price: {
            'small': 50,
            'medium': 80,
            'large': 100,
            'XLarge':120
        }
    },
]
const italianMenuItems = [
    {
        id: 3,
        name: "Super Crunchy",
        photo: require("./assets/img/superCrunchy.png"),
        price: {
            'small': 60,
            'medium': 90,
            'large': 110,
            'XLarge':120
        }
    },
    {
        id: 4,
        name: "Salami",
        photo: veggyPizza,
        price: {
            'small': 60,
            'medium': 90,
            'large': 110,
            'XLarge':120
        }
    },
    {
        id: 5,
        name: "Chicken",
        photo: veggyPizza,
        price: {
            'small': 60,
            'medium': 90,
            'large': 110,
            'XLarge':120
        }
    },
]
const crepeMenuItems = [
    {
        id: 6,
        name: "Crispy Crepe",
        photo: veggyPizza,
        price: {
            'fixed':35
        }
    },
    {
        id: 7,
        name: "Beef Crepe",
        photo: veggyPizza,
        price: {
            'fixed':35
        }
    },
    {
        id: 8,
        name: "Cheese Crepe",
        photo: veggyPizza,
        price: {
            'fixed':35
        }
    },
]
const sideMenuItems = [
    {
        id: 9,
        name: "Fries",
        photo: veggyPizza,
        price: {
            'fixed':15
        }
    },
    {
        id: 10,
        name: "Pepsi",
        photo: veggyPizza,
        price: {
            'fixed':10
        }
    },
    {
        id: 11,
        name: "Water",
        photo: veggyPizza,
        price: {
            'fixed':10
        }
    },
]

export {
    easternMenuItems,
    italianMenuItems,
    crepeMenuItems,
    sideMenuItems
}