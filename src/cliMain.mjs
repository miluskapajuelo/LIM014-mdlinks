import mdLinks from './main.mjs'


const ruta = '../src'
mdLinks(ruta,{validate:true})
    .then(result => console.log(result))
    .catch((err) => console.log(err))


/*
const stat = () =>{
  let array = []
  let result
  let total
  for (let i=0; i < info.length;i++){
      array.push(info[i].href)
      const dataArray = new Set(array);
      total = info.length
      result = [...dataArray]
}
console.log('Unique: ' + result.length)
console.log('Total: ' + info.length)}
 */


