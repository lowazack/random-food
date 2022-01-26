import {
    faBreadLoaf, faChartPie, faChartPyramid,
    faCow, faFish,
    faGlass,
    faLeafHeart, faLobster,
    faPanFrying, faPawClaws,
    faSalad,
    faShishKebab
} from "@fortawesome/pro-thin-svg-icons";

const diets = [
    {
        id: 1,
        name: 'Gluten Free',
        icon: faBreadLoaf
    },
    {
        id: 2,
        name: 'Ketogenic',
        icon: faShishKebab
    },
    {
        id: 3,
        name: 'Vegetarian',
        icon: faSalad
    },
    {
        id: 4,
        name: 'Lacto-Vegetarian',
        icon: faGlass
    },
    {
        id: 5,
        name: 'Ovo-Vegetarian',
        icon: faPanFrying
    },
    {
        id: 6,
        name: 'Vegan',
        icon: faLeafHeart
    },
    {
        id: 7,
        name: 'Pescetarian',
        icon: faFish
    },
    {
        id: 8,
        name: 'Paleo',
        icon: faLobster
    },
    {
        id: 9,
        name: 'Primal',
        icon: faPawClaws
    },
    {
        id: 10,
        name: 'Low FODMAP',
        icon: faChartPyramid
    },
    {
        id: 11,
        name: 'Whole30',
        icon: faChartPie
    },
]

export default diets;
