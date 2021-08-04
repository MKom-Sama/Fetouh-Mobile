import { shortUID } from "./utils/uuid";

const veggyPizza = require("./assets/img/vegy-pizza.jpeg");

const easternMenuItems = [
    {
        id: shortUID(),
        name: 'كريمة والمكسرات ',
        photo: require("./assets/img/sweetAndSugar.png"),
        price: {
            'small': 50,
            'medium': 75,
            'large': 100,
            'XLarge':125
        }
    },
    {
        id: shortUID(),
        name: ' سادة بالسكر',
        photo: require("./assets/img/sweetAndSugar.png"),
        price: {
            'small': 50,
            'medium': 70,
            'large': 95,
            'XLarge':125
        }
    },
    {
        id: shortUID(),
        name: 'جبنة الرومي والبيض',
        photo: require("./assets/img/sweetAndSugar.png"),
        price: {
            'small': 50,
            'medium': 75,
            'large': 100,
            'XLarge':125
        }
    },
    {
        id: shortUID(),
        name: 'كريمة والمكسرات والفواكه',
        photo: veggyPizza,
        price: {
            'small': 75,
            'medium': 100,
            'large': 125,
            'XLarge':150
        }
    },
    {
        id: shortUID(),
        name: ' جبنه رومي وخضروات',
        photo: veggyPizza,
        price: {
            'small': 65,
            'medium': 90,
            'large': 120,
            'XLarge':150
        }
    },
    {
        id: shortUID(),
        name: 'اللحمة المفرومة ',
        photo: veggyPizza,
        price: {
            'small': 65,
            'medium': 90,
            'large': 120,
            'XLarge':150
        }
    },
    {
        id: shortUID(),
        name: ' سجق',
        photo: veggyPizza,
        price: {
            'small': 65,
            'medium': 90,
            'large': 120,
            'XLarge':150
        }
    },
    {
        id: shortUID(),
        name: 'سوسيس',
        photo: veggyPizza,
        price: {
            'small': 65,
            'medium': 90,
            'large': 120,
            'XLarge':150
        }
    },
    {
        id: shortUID(),
        name: 'بسطرمه',
        photo: veggyPizza,
        price: {
            'small': 65,
            'medium': 90,
            'large': 120,
            'XLarge':150
        }
    },
]
const italianMenuItems = [
    {
        id: shortUID(),
        name: "مارجريتا",
        photo: require("./assets/img/superCrunchy.png"),
        price: {
            'small': 50,
            'medium': 70,
            'large': 90,
            'XLarge':110
        }
    },
    {
        id: shortUID(),
        name: "سجق",
        photo: veggyPizza,
        price: {
            'small': 50,
            'medium': 70,
            'large': 90,
            'XLarge':110
        }
    },
    {
        id: shortUID(),
        name: "لحمه مفرومة",
        photo: veggyPizza,
        price: {
            'small': 50,
            'medium': 70,
            'large': 90,
            'XLarge':110
        }
    },
    {
        id: shortUID(),
        name: " سوسيس",
        photo: veggyPizza,
        price: {
            'small': 50,
            'medium': 70,
            'large': 90,
            'XLarge':110
        }
    },
    {
        id: shortUID(),
        name: "بسطرمه",
        photo: veggyPizza,
        price: {
            'small': 50,
            'medium': 70,
            'large': 90,
            'XLarge':110
        }
    },
]
const crepeMenuItems = [
    {
        id: shortUID(),
        name: " مشكل جبن",
        photo: veggyPizza,
        price: {
            'fixed':40
        }
    },
    {
        id: shortUID(),
        name: "شاورما فراخ",
        photo: veggyPizza,
        price: {
            'fixed':35
        }
    },
    {
        id: shortUID(),
        name: " كرانشي",
        photo: veggyPizza,
        price: {
            'fixed':35
        }
    },
    {
        id: shortUID(),
        name: "شيش طاووق",
        photo: veggyPizza,
        price: {
            'fixed':35
        }
    },
]
const sideMenuItems = [
    {
        id: shortUID(),
        name: "Fries",
        photo: veggyPizza,
        price: {
            'fixed':15
        }
    },
    {
        id: shortUID(),
        name: "Pepsi",
        photo: veggyPizza,
        price: {
            'fixed':10
        }
    },
    {
        id: shortUID(),
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