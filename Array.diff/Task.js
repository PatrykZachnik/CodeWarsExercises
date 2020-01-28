
function array_diff(a, b) {
    let difference = a.filter( x => !b.includes(x)); 
   return difference;
   }
 
 