export const toWeirdCase  = (string) => {
    const dividedWords = string.split(' ');

    const formattedWords = dividedWords.map((word) => {
        return word.split('').map((letter, index)  => {
            if (++index % 2 === 0) {
                return letter.toLowerCase()
            } else {
                return letter.toUpperCase()
            }
        }).join('')
    })
    
    const unifiedWords = formattedWords.join(' ')

    return unifiedWords
}


console.log(toWeirdCase("Weird string case"))



