export const toWeirdCase  = (word: string) => {
    const dividedWords = word.split(' ');

    const formattedWords = dividedWords.map((word) => {
        return [...word].map((letter, index)  => {
            if (++index % 2 === 0) {
                return letter.toLowerCase()
            } else {
                return letter.toUpperCase()
            }
            
        }).join('')
    })
    
    const unifiedWords: string = formattedWords.join(' ')

    return unifiedWords
}


console.log(toWeirdCase("Weird string case"))



