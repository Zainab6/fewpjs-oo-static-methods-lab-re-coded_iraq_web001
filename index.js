class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string){
    let  words = ["the", "a", "an", "but", "of", "and", "for", "at", "by","from"]
    let result = string.split(' ')
    for(let i = 0 ; i < result.length;i++){
     result[i]= result[i].charAt(0).toUpperCase() + result[i].slice(1)
     if (words.includes( result[i])){
       return words.push()
     }
    }
    return result.join(' ')
  }
}