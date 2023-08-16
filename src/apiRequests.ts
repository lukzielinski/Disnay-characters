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
        const data = await response.json()
        return data.data
    } catch (error) {
        console.error('Błąd pobierania danych:', error)
        return []
    } finally {
        console.log('Pobieranie danych zakończone')
    }
}
