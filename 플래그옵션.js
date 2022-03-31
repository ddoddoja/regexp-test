let str=`
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
d`
// nst regexp = new RegExp('the','gi')//g플래그라고 부른다. (정규식방식)
// const regexp = /the/gi //리터럴 방식 
//console.log(str.match(regexp))

// const regexp = /HEROPY/gi
// console.log(regexp.test(str))

// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// const regexp = /the/gi
// console.log(str.match(regexp))

// console.log(str.match(/the/gi))

// console.log(str.match(/\./gi)) 

// console.log(str.match(/\.$/gim))  
// m문장 각각문장 끝에 마침표가 있는 지 찾는다 

// console.log(str.match(/d$/g))
// console.log(str.match(/d$/gm))

// console.log(str.match(/^t/gim))

// console.log(str.match(/^T/gm))

// console.log(str.match(/./g))

// console.log(str.match(/h..p/g))

console.log(str.match(/fox|dog/g))

