// const howMany = (phrase) => {
//     // connst num = None
//     let result = 0;
//     // for (i=0; i<=phrase.length; i++) {
//     for (const index in phrase){
//       result =  Number(index) + 1
//     }
//     return {result}
//   }
  
//     // console.log(phrase.length)
//   const phrase = window.prompt('please type in text')
//   console.log(howMany(phrase))


// const agege = () => {
//   let added = 0
//   for (const num of numnum) {
//       added = added + num
//     }
//   return {added}
  
// }
// const numnum = [1, 2, 3, 4]
// console.log(agege(numnum))



// const max = () => {
//   let added = numnum[0]
//   for (const num of numnum) {
//       if (num > added){
//         added = num
//       }
//     }
//   return {added}
  
// }
// const numnum = [1, 4, 3, 2, 22, 10 ]
// console.log(max(numnum))

// //Objects 
// const letterFreq = (numnum) => {
//   let freq = {}
//   for (const letter of numnum){
//     if (letter in freq) {
//       freq[letter] =  freq[letter] + 1
//       // freq[letter] += 1 or freq[letter] ++ 
//     } else {
//       freq[letter] = 1
//     }
//     // return {letter}
//   console.log(freq)
//  }
// }
// const numnum = 'haha'
// letterFreq(numnum)


// const wordCount = (phrase) => {
//   let john = {}
//   let wordList = phrase.split(' ')
//   for (const word of wordList) {  
//     console.log(word)
//     if (word in john) {
//       john[word] ++
//     } else {
//       john[word] = 1
//     }
//   }
//   john['boy'] = 4
//   console.log(john)
// }
// const phrase = 'lol what lol'
// wordCount(phrase)


// //MAP: LOOPS & returns array
// const f = [1, 2, 6, '3']
// const g = f.map(x => x * (Number(x)))
// console.log(g)

// FILTER: LOOPS with CONDITION & returns SHALLOW-COPY
// const c = (b) => {
//   // if (b > 3){
//   //   return b
//   // }
//   return b > 3
// }
// const a = [1, 2, 6, '3', '4', '5', '77']
// const d = a.filter(c)
// console.log(d)

// const actors = [
//   {name: 'johnny', networth:'10000000'},
//   {name: 'amber', networth:'100'},
//   {name: 'leonardo', networth:'20000000'}
// ];
// let sieve = actors.filter(label1 => label1.networth > 1000);
// let world = sieve.map(label2 => label2.name)
// console.log(world)


// const agege = [1, 2, 3, 4, 5] 
// const initial = 1  
// let valu = agege.reduce(((first, second) => (first + second)), initial)
// console.log(valu)


// const actors = [
//   {name: 'johnny', networth: '100'},
//   {name: 'amber', networth: '200'},
//   {name: 'leonardo', networth: '300'}
// ];
// const initial = 1000
// let sieve = actors.reduce(((label1, label2) => (label1 + Number(label2.networth) )), initial);
// // let world = sieve.map(label2 => label2.name)
// console.log(sieve) 