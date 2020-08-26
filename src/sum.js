function sum(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else{

        throw new Error("Parameters are not numbers");
    }
}
module.exports = sum;