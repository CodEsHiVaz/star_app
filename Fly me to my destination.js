function minimumPlan(array) {
    const n = array.length;
    let planes = 1;
    let curr = 0;

    while (curr < n - 1) {
        let x = -1;
        let max = 0;
        for (let i = curr + 1; i < Math.min(curr + array[curr] + 1, n); i++) {
            if (i === n - 1) {
                return planes + 1;
            }
            const dist = i - curr;
            if (array[i] >= dist && dist > max) {
                x = i;
                max = dist;
            }
        }
        if (x === -1) {
            return -1;
        }
        curr = x;
        planes++;
    }

    return planes;
}
let arr = [1,6,3,4,5,0,0,0,6]
console.log(minimumPlan(arr)); 
