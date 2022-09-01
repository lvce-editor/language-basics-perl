/**
 * @enum number
 */
export const TokenType = {
  Text: 1,
}

export const TokenMap = {
  [TokenType.Text]: 'Text',
}

export const initialLineState = {
  state: 0,
  tokens: [],
}

/**
 * @param {string} line
 */
export const tokenizeLine = (line) => {
  const tokens = [
    {
      type: TokenType.Text,
      length: line.length,
    },
  ]
  return {
    state: 0,
    tokens,
  }
}
