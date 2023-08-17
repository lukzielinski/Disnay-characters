import { Character } from 'src/apiRequests'

export function mostPopularCharacters(characters: Character[] = []) {
    const characterAppearances: Map<string, number> = new Map()

    characters.forEach((character) => {
        if (character.films.length > 0) {
            console.log(character.name, character.films)
            characterAppearances.set(character.name, character.films.length)
        }
    })

    const sortedCharacters = Array.from(characterAppearances.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([ characterName, appearances ]) => ({
            characters: characterName,
            appearances,
        }))
        .slice(0, 3)
    console.log(sortedCharacters)
    return sortedCharacters
}
