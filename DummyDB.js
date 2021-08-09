import { shortUID } from "./utils/uuid";

const sweetAndCream = require("./assets/menu/sweetAndCream.jpg");
const sweetAndFruit = require("./assets/menu/sweetFruits.jpg");

const veggyPizza = require("./assets/menu/veggyPizza.jpg");

const italianVeggy = require("./assets/menu/italianVeggy.jpg");
const italianBeef = require("./assets/menu/italianBeef.jpg");
const italianChicken = require("./assets/img/superCrunchy.png");

const crepe = require("./assets/menu/crepe.jpg");

const fries = require("./assets/menu/fries.jpeg");
const pepsi = require("./assets/menu/pepsi.png");
const water = require("./assets/menu/water.jpeg");

const easternMenuItems = [
  {
    id: shortUID(),
    name: "كريمة والمكسرات ",
    photo: sweetAndCream,
    price: {
      small: 50,
      medium: 75,
      large: 100,
      XLarge: 125,
    },
  },
  {
    id: shortUID(),
    name: "كريمة والمكسرات والفواكه",
    photo: sweetAndFruit,
    price: {
      small: 75,
      medium: 100,
      large: 125,
      XLarge: 150,
    },
  },
  {
    id: shortUID(),
    name: "اللحمة المفرومة ",
    photo: veggyPizza,
    price: {
      small: 65,
      medium: 90,
      large: 120,
      XLarge: 150,
    },
  },
  {
    id: shortUID(),
    name: " سادة بالسكر",
    photo: sweetAndCream,
    price: {
      small: 50,
      medium: 70,
      large: 95,
      XLarge: 125,
    },
  },
  {
    id: shortUID(),
    name: "جبنة الرومي والبيض",
    photo: sweetAndCream,
    price: {
      small: 50,
      medium: 75,
      large: 100,
      XLarge: 125,
    },
  },
  {
    id: shortUID(),
    name: " جبنه رومي وخضروات",
    photo: veggyPizza,
    price: {
      small: 65,
      medium: 90,
      large: 120,
      XLarge: 150,
    },
  },

  {
    id: shortUID(),
    name: " سجق",
    photo: veggyPizza,
    price: {
      small: 65,
      medium: 90,
      large: 120,
      XLarge: 150,
    },
  },
  {
    id: shortUID(),
    name: "سوسيس",
    photo: veggyPizza,
    price: {
      small: 65,
      medium: 90,
      large: 120,
      XLarge: 150,
    },
  },
  {
    id: shortUID(),
    name: "بسطرمه",
    photo: veggyPizza,
    price: {
      small: 65,
      medium: 90,
      large: 120,
      XLarge: 150,
    },
  },
];
const italianMenuItems = [
  {
    id: shortUID(),
    name: "مارجريتا",
    photo: italianVeggy,
    price: {
      small: 50,
      medium: 70,
      large: 90,
      XLarge: 110,
    },
  },
  {
    id: shortUID(),
    name: "سجق",
    photo: italianVeggy,
    price: {
      small: 50,
      medium: 70,
      large: 90,
      XLarge: 110,
    },
  },
  {
    id: shortUID(),
    name: "لحمه مفرومة",
    photo: italianBeef,
    price: {
      small: 50,
      medium: 70,
      large: 90,
      XLarge: 110,
    },
  },
  {
    id: shortUID(),
    name: " سوبر كرنشي",
    photo: italianChicken,
    price: {
      small: 50,
      medium: 70,
      large: 90,
      XLarge: 110,
    },
  },
  {
    id: shortUID(),
    name: "بسطرمه",
    photo: italianVeggy,
    price: {
      small: 50,
      medium: 70,
      large: 90,
      XLarge: 110,
    },
  },
];
const crepeMenuItems = [
  {
    id: shortUID(),
    name: " مشكل جبن",
    photo: crepe,
    price: {
      fixed: 40,
    },
  },
  {
    id: shortUID(),
    name: "شاورما فراخ",
    photo: crepe,
    price: {
      fixed: 35,
    },
  },
  {
    id: shortUID(),
    name: " كرانشي",
    photo: crepe,
    price: {
      fixed: 35,
    },
  },
  {
    id: shortUID(),
    name: "شيش طاووق",
    photo: crepe,
    price: {
      fixed: 35,
    },
  },
];
const sideMenuItems = [
  {
    id: shortUID(),
    name: "Fries",
    photo: fries,
    price: {
      fixed: 15,
    },
  },
  {
    id: shortUID(),
    name: "Pepsi",
    photo: pepsi,
    price: {
      fixed: 10,
    },
  },
  {
    id: shortUID(),
    name: "Water",
    photo: water,
    price: {
      fixed: 10,
    },
  },
];

export { easternMenuItems, italianMenuItems, crepeMenuItems, sideMenuItems };
