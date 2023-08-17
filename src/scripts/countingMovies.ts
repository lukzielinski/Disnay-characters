import { Character } from 'src/apiRequests'

export function mostPopularCharacters(characters: Character[] = []) {
    const sortedCharacters = characters
        .filter((character) => character.films.length > 0)
        .sort((a, b) => b.films.length - a.films.length)
        .slice(0, 3)

    console.log(sortedCharacters)
    return sortedCharacters
}
