export interface INavbarMenu {
    id: number;
    title: string;
    path: string;
}

export const navbarMenu : INavbarMenu[] = [
    {
        id: 1,
        title: "Categories",
        path: "/",
    },
    {
        id: 2,
        title: "Movies",
        path: "/movies",
    },
    {
        id: 3,
        title: "Tv Shows",
        path: "/contact",
    },
    {
        id: 4,
        title: "Login",
        path: "/contact",
    },
];

export const categoryMenu : INavbarMenu[] = [
    {
        id: 1,
        title: "Action",
        path: "/",
    },
    {
        id: 2,
        title: "Adventure",
        path: "/about",
    },
    {
        id: 3,
        title: "Animation",
        path: "/contact",
    },
    {
        id: 4,
        title: "Comedy",
        path: "/contact",
    },
    {
        id: 5,
        title: "Crime",
        path: "/contact",
    },
    {
        id: 5,
        title: "Documentary",
        path: "/contact",
    },
    {
        id: 5,
        title: "Drama",
        path: "/contact",
    },
    {
        id: 5,
        title: "Family",
        path: "/contact",
    },
    {
        id: 5,
        title: "Fantasy",
        path: "/contact",
    },
    {
        id: 5,
        title: "History",
        path: "/contact",
    },
    {
        id: 5,
        title: "Horror",
        path: "/contact",
    },
]

export const popularSort :string[] = [
    "Popularity Ascending",
    "Popularity Descending",
    "Release Date Ascending",
    "Release Date Descending",
    "Rating Ascending",
    "Rating Descending"
]

