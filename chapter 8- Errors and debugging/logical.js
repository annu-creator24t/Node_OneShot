const logical =() => {
  let num =98;
  if(num=10){  // it will throw logical err because we are not compairing instead we are assigning
    console.log(num);
  }else{
    console.log("num is not 10");
  }
};

module.exports =runtime;