const BASE_URL = "/";
const DEV_URL = "http://localhost:3000";

const navPrefixes = {
    workshop: "/workshop",
    guzars: "/guzars",
    blog: "/blog",
}
const pages = {
    about: `${navPrefixes.guzars}/about`,
    portfolio: `${navPrefixes.guzars}/portfolio`,
    contact: `/contact`,
};



export const URLS = {
    BASE_URL,
    navPrefixes,
    pages,
};