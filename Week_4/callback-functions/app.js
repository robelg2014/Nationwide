//setTimeout(
  //  ()=>{
    //console.log("Hello")
    //}, 4000)

// callback function are functions that are past as an argument to another function

//var cameraFunction = (callBackFunction) => {
  //  console.log("The camera" + callBackFunction)
//}
   //var lensOne =()=>{
     //  return " is now using the macro lens"
   //}
   //var lensTwo =()=>{
     //  return " is now using the super macro lens"
   //}

   //cameraFunction(lensOne())

   // write a function that will capitalize a word

   //var capitalize = (word)=>{
     //var capsWord = word[0].toUpperCase()
       //console.log(capsWord)
   //}
   //capitalize("dog")

  // var excitedWords =(word)=> {
    //   var HappyWord = word + "!"
      // console.log(HappyWord)
   //}
   //excitedWords("Hey")


  const foo = (param, param2) => {
    param(param2);
}

const bar = (param) => {
    console.log(param);
}

foo(bar, 'hi');

const baz = (param) => {
   
   
}