class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.substr(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(string){
    const nonCaps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      let str = string.split(' ')
      let arr = []
      str.forEach (word => {
        if (!nonCaps.includes(word)) {
          arr.push(this.capitalize(word))
        } else {
          arr.push(word)
        }
      })
      str = arr.join(' ')
      return this.capitalize(str)
  }
}
