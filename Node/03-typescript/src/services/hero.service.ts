import { heroes } from "./heroes";

const findHeroById = (id: number) => {
    return heroes.find((hero) => hero.id === id);
}