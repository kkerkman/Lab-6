function convertTemp(temp,unit){
  if (unit === "c"){
    return(5/9) * (temp - 32);
  }else if (unit === "f") {
    return((9/5) * temp) + 32;
  }
}
//var tempConvert = convertTemp(-40, "f");

//console.log(tempConvert);

var tempConvert1 = convertTemp(212, "c");
var tempConvert2 = convertTemp(32, "c");
var tempConvert3 = convertTemp(65, "c");
var tempConvert4 = convertTemp(-40, "f");

console.log(tempConvert1, tempConvert2, tempConvert3, tempConvert4);


