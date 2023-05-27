import { Outlet } from "react-router"
export const Layout = () => {
    return (
        <>
        <Outlet />
        </>
    )
}
const links = [
    {
        id: 1,
        text: 'Бизнес Ланчи',
        route: '/buisness-lunch'
    },
    {
        id: 2,
        text: 'Боулы',
        route: '/bowls'
    },
    {
        id: 3,
        text: 'Блюда из тофу',
        route: '/tofu'
    },
    {
        id: 4,
        text: 'Супы',
        route: '/soup'
    },
    {
        id: 5,
        text: 'Салаты',
        route: '/salads'
    },
    {
        id: 6,
        text: 'Закуски',
        route: '/snacks'
    },
    {
        id: 7,
        text: 'Блюда из курицы',
        route: '/chicken'
    },
    {
        id: 8,
        text: 'Блюда из говядины',
        route: '/beef'
    },
    {
        id: 9,
        text: 'Блюда из рыбы',
        route: '/fish'
    },
    {
        id: 10,
        text: 'Блюда с лапшой',
        route: '/noodles'
    },
    {
        id: 11,
        text: 'Воки',
        route: '/wok'
    },
    {
        id: 12,
        text: 'Гунканы и Суси',
        route: '/gunkan'
    },
    {
        id: 13,
        text: 'Роллы',
        route: '/rolls'
    },
    {
        id: 14,
        text: 'Запеченные роллы',
        route: '/baked-rolls'
    },
    {
        id: 15,
        text: 'Темпура роллы',
        route: '/tempura-rolls'
    },
    {
        id: 16,
        text: 'Сеты',
        route: '/sets'
    },
    {
        id: 17,
        text: 'Детское меню',
        route: '/kids-menu'
    },
    {
        id: 18,
        text: 'Десерты',
        route: '/deserts'
    },
    {
        id: 19,
        text: 'Напитки',
        route: '/drinks'
    }
]