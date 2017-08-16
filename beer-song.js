class BeerSong {
  constructor () {
  }

  verse (verseStart) {
    while (verseStart >= 0) {
      if (verseStart > 2) {
        return `${verseStart} bottles of beer on the wall, ${verseStart} bottles of beer.\nTake one down and pass it around, ${verseStart - 1} bottles of beer on the wall.\n`
      } else if (verseStart === 2) {
        return `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`
      } else if (verseStart === 1) {
        return `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`
      } else if (!verseStart) {
        return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
      }
    }
  }



  sing (verseStart, verseEnd) {
    const arr = []

    if (verseEnd === 0) {
      while
    }

  }

  // sing (verseStart, verseEnd) {
  //   let result = []
  //
  //   while (verseStart >= (verseEnd)) {
  //     if (verseStart > (2 && verseEnd)) {
  //       result.push(`${verseStart} bottles of beer on the wall, ${verseStart} bottles of beer.\nTake one down and pass it around, ${verseStart - 1} bottles of beer on the wall.\n\n`)
  //     } else if (verseStart === 2) {
  //       result.push(`2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n\n`)
  //     } else if (verseStart === 1) {
  //       result.push(`1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\n`)
  //     } else if (!verseStart) {
  //       result.push(`No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n\n`)
  //     }
  //     console.log('hit')
  //     verseStart--
  //     console.log(verseStart)
  //
  //   }
  //   console.log(result[0]);
  //   return result[0]
  // }


}

module.exports = BeerSong
