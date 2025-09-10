function SolveThis(inputObj) {
    let res = {}; // result object

    for (let key in inputObj) {
        let values = inputObj[key]; // get array or value for this key

        switch (key) {
            // ----- SUM -----
            case "sum":
                res[key] = values.reduce((a, b) => a + b, 0);
                break;

            // ----- MIN -----
            case "min":
                res[key] = Math.min(...values);
                break;

            // ----- MAX -----
            case "max":
                res[key] = Math.max(...values);
                break;

            // ----- ABS -----
            case "abs":
                res[key] = Math.abs(values); // abs works on single number
                break;

            // ----- ROUND -----
            case "round":
                res[key] = Math.round(values);
                break;

            // ----- CEIL -----
            case "ceil":
                res[key] = Math.ceil(values);
                break;

            // ----- FLOOR -----
            case "floor":
                res[key] = Math.floor(values);
                break;

            // ----- RANDOM -----
            case "random":
                res[key] = Math.random(); // returns 0 to 1
                break;

            default:
                res[key] = "Operation not supported!";
        }
    }

    return res;
}

// ---------------------
// ✅ Testing the function
console.log(
    SolveThis({
        sum: [3, 2, 4],
        max: [2, 4, 3, 5],
        min: [5, 3, 4, 3],
    })
); 
// { sum: 9, max: 5, min: 3 }

console.log(
    SolveThis({
        abs: -12,
        round: 4.7,
        ceil: 4.2,
        floor: 4.9,
        random: true, // random doesn't need array
    })
);
// Example output: { abs: 12, round: 5, ceil: 5, floor: 4, random: 0.6732 }
