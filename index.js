class Formatter {
  static capitalize(string) {
    let cap = string[0].toUpperCase()
    return cap + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
  let exceptedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  let result = []
  let arr = string.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      result.push(this.capitalize(arr[i]))
    } else {
      if (exceptedWords.includes(arr[i])) {
        result.push(arr[i])
      } else {
        result.push(this.capitalize(arr[i]))
      }
    }
  }
  return result.join(' ')
  }
}
