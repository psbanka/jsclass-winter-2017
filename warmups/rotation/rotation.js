/*
Functional program to encode and decode messages using the Caesar cipher.
*/

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

/**
 * Creates the rotated string that will be used to encode/decode messages
 * @param {Number} rot number of positions rotated
 * @returns {String} New rotated alphabet
 */
const rotation = (rot) => {
  const rotString = ALPHABET.slice(rot) + ALPHABET.slice(0, rot)

  return rotString
}

/**
 * Exposes encode and decode functionality in one method.
 * @param {String} msg String that you want to encode or decode
 * @param {Number} rot Number of rotations for encoding/decoding (must match to enc/dec same message!)
 * @param {Bool} encode true to encode msg, false to 'decode' msg
 * @returns {String} the newMessage that has been encoded/decoded
 */
const cipher = (msg, rot, encode = false) => {
  const rotString = rotation(rot)
  let lowerTable, upperTable, newMessage
  if (encode) {
    lowerTable = makeTrans(ALPHABET, rotString)
    upperTable = makeTrans(ALPHABET.toUpperCase(), rotString.toUpperCase())
  } else {
    lowerTable = makeTrans(rotString, ALPHABET)
    upperTable = makeTrans(rotString.toUpperCase(), ALPHABET.toUpperCase())
  }

  newMessage = translate(msg, lowerTable, upperTable)

  return newMessage
}

/**
 * Modeled after Python's maketrans method.
 * @param {String} input the original string (ALPHABET for encoding)
 * @param {String} change the string to change it to
 * @returns {Object} object that has each input mapped to the change value at that index.
 */
const makeTrans = (input, change) => {
  if (input.length === change.length) {
    let table = {}
    input.split('').forEach((v, i) => {
      table[v] = change[i]
    })
    return table
  }
}

/**
 * Modeled after Python's translate method.
 * @param {String} str message to translate
 * @param {Object} lowerTable all lowercase letters mapped to their rotation
 * @param {Object} upperTable all uppercase letters mapped to their rotation
 * @returns {String} newMessage that has been translated
 */
const translate = (str, lowerTable, upperTable) => {
  return str.split('').reduce((ans, v) => {
    switch (v) {
      case ' ':
        return ans + ' '
      case v.toLowerCase():
        return ans + lowerTable[v]
      case v.toUpperCase():
        return ans + upperTable[v]
      default:
        return ans + v
    }
  }, '')
}

// console.log(cipher('apple happy dayZ', 1, true))
// console.assert(cipher('apple happy dayZ', 1, true) === 'bqqmf ibqqz ebzA')

module.exports = cipher
