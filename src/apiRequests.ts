export type Character = {
    _id: number
    films: string[]
    tvShows: string[]
    imageUrl: string
    name: string
}
export async function getCharacters(): Promise<Character[]> {
    try {
        const response = await fetch('https://api.disneyapi.dev/character?page=1&pageSize=100')
        const data = (await response.json()) as { data: Character[] }
        return data.data
    } catch (error) {
        console.error('Error  while fetching data :', error)
        return []
    }
}
