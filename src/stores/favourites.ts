import { Character } from 'src/apiRequests'
import { Writable, writable } from 'svelte/store'

export const favourites: Writable<Array<Character>> = writable([])
