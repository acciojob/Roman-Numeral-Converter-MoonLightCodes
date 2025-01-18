document.getElementById('inp').addEventListener('input',convertToRoman(this.value))
function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1],
    7: ['IV', 4],
    8: ['IX', 9],
    9: ['XL', 40],
    10: ['XC', 90],
    11: ['CD', 400],
    12: ['CM', 900]
  };

  let roman = '';
  for (let i = 0; i < Object.keys(obj).length; i++) {
    while (num >= obj[i][1]) {
      roman += obj[i][0];
      num -= obj[i][1];
    }
  }
  document.getElementById('ot').innerHTML = roman
}