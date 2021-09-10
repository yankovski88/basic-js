import {NotImplementedError} from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false
    }
    const letters = members.map((item) => {
        if (typeof item === 'string') {

            const word = item.split('').map((l) => {
                if (l !== ' ') {
                    return l
                }
            }).join('')


            if (word) {
                return word[0].toUpperCase()
            }
        }
    })
    return letters.sort().join('')
}
