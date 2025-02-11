
        document.getElementById('inp').addEventListener('input', function() {
            convertToRoman(this.value);
        });

        function convertToRoman(num) {
            if (num === "" || num <= 0) {
                document.getElementById('ot').innerHTML = "Please enter a valid positive number.";
                return;
            }

            const obj = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1
            };

            let roman = '';
            for (let key in obj) {
                while (num >= obj[key]) {
                    roman += key;
                    num -= obj[key];
                }
            }
            document.getElementById('ot').innerHTML = roman;
        }