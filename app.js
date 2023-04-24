var num = +prompt(`Input the numder`);
var degree = +prompt (`Input the degree of the number`);
 function pow(num,degree){
    if (degree == 1){ return num}
    else
     { return (num * pow(num,degree-1))} };
     alert(pow(num,degree));
   