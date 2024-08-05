function customSort( compareFn ) {
    'use strict';
  
    if (!compareFn) {
        // Default sorting when no compare function is provided
        compareFn = (a, b) => {
            const aStr = String(a);
            const bStr = String(b);
            if (aStr < bStr) return -1;
            if (aStr > bStr) return 1;
            return 0;
        };
    }
  
    // Implement a simple bubble sort for demonstration purposes
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            if (compareFn(this[j], this[j + 1]) > 0) {
                // Swap elements
                const temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
  
    return this;
}

Array.prototype.customSort = customSort;

// Testing the customSort function
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.customSort();
console.log(months); // expected output: Array ["Dec", "Feb", "Jan", "March"]

const numbers = [1, 30, 4, 21, 100000];
numbers.customSort((a,b) => { a>b });
console.log(numbers); 
