    function longest(s1, s2) {
        let oneword = s1.split("");
        let twoword = s2.split("");
        let threeword = oneword.concat(twoword);
        var unique = [...new Set(threeword)];
        let final = unique.sort();
        let sorted = final.join('');
        return sorted;
        }


        /*
        
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
*/
