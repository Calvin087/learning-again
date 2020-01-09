const Hangman = function (word, remainingGueses) {
    this.word = word.toLowerCase().split('')
    this.remainingGueses = remainingGueses
    this.guessedLetters = ['c']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

const game1 = new Hangman('cat', 2)
console.log(game1)

const game2 = new Hangman('New Jersey', 4)
console.log(game2)