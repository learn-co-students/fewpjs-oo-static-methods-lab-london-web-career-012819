
class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1, string.length)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'and', 'from']
    let toArr = string.split(" ")
    toArr = toArr.map(i => i[0].toUpperCase() + i.slice(1))
    let result = []
    result.push(toArr[0])
    
    for(let i of toArr.slice(1)){
      if (exceptions.includes(i.toLowerCase())){
        result.push(i.toLowerCase())
        debugger
      }
      else result.push(i)
    }
    return result.join(" ")
  }
  
}



  
 
  
