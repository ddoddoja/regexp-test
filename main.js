const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
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

// console.log(str.match(/fox|dog/g))

// console.log(str.match(/https/g))

// console.log(str.match(/https?/g))

// console.log(str.match(/d/))

// console.log(str.match(/d{2}/))

//  console.log(str.match(/d{2}/g))

// console.log(str.match(/d{2,}/g))

//  console.log(str.match(/d{2,3}/g))

// console.log(str.match(/\w{2,3}/g))

// console.log(str.match(/\b\w{2,3}\b/g)) // \b는 | 경계를 뜻한다. 

// console.log(str.match(/[fox]/g)) // f또는 o또는 x또는 전체문장에서 찾아라. 

// console.log(str.match(/[0-9]/g)) 

// console.log(str.match(/[0-9]{1,}/g)) 

//  console.log(str.match(/[가-힣]{1,}/g)) 

// console.log(str.match(/\w/g)) 

// console.log(str.match(/\bf\w{1,}\b/g)) // f로 시작하는모든 단어를 찾아라. 

// console.log(str.match(/\d/g)) // 숫자만 찾는 다. 

// console.log(str.match(/\d{1,}/g)) // 숫자 덩어리들만 찾는다. 

// console.log(str.match(/\s/g)) // 공백문자 찾는다. 

// const h = '  the hello world !'

// console.log(h.match(/\s/g))

//  const h = '  the hello world !'

//  console.log(h.replace(/\s/g, ''))

// console.log(str.match(/.{1,}(?=@)/g)) // 이메일 앞쪽일치 

console.log(str.match(/(?<=@).{1,}/g)) // 이메일 뒤쪽일치