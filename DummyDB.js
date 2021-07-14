const veggyPizza = require("./assets/img/vegy-pizza.jpeg");

const easternMenuItems = [
    {
        id: 0,
        name: "sugar and cream",
        photo: veggyPizza,
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
        id: 0,
        name: "Pepperoni",
        photo: veggyPizza,
        price: {
            'small': 60,
            'medium': 90,
            'large': 110,
            'XLarge':120
        }
    },
    {
        id: 1,
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
        id: 2,
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
        id: 0,
        name: "Crispy Crepe",
        photo: veggyPizza,
        price: {
            'fixed':35
        }
    },
    {
        id: 1,
        name: "Beef Crepe",
        photo: veggyPizza,
        price: {
            'fixed':35
        }
    },
    {
        id: 2,
        name: "Cheese Crepe",
        photo: veggyPizza,
        price: {
            'fixed':35
        }
    },
]
const sideMenuItems = [
    {
        id: 0,
        name: "Fries",
        photo: veggyPizza,
        price: {
            'fixed':15
        }
    },
    {
        id: 1,
        name: "Pepsi",
        photo: veggyPizza,
        price: {
            'fixed':10
        }
    },
    {
        id: 2,
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