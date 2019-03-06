function getFriendlyNumbers(start, end) {
    if (
        typeof (start) != "number" ||
        typeof (end) != "number" ||
        end < start ||
        start < 0 ||
        end < 0 ||
        !isInteger(start) ||
        !isInteger(end)
    )
        return false;

    function isInteger(num) {
        return (num ^ 0) === num;
    }

    function getDividersSum(num) {
        arr = [];
        for (let i = 1; i <= num / 2; i++) {
            if (num % i == 0)
                arr.push(i);
        }

        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    }

    function getObject(start, end) {
        obj = {};
        for (let i = start; i <= end; i++) {
            obj[i] = getDividersSum(i);
        }
        return obj;
    }

    obj = getObject(start, end);
    result = [];
    for (let i = start; i <= end; i++) {
        for (let j = i + 1; j <= end; j++) {
            if (i == obj[j] && obj[i] == j)
                result.push([i, j]);
        }
    }
    return result;
}

console.log(getFriendlyNumbers(1, 5000));


module.exports = {
    firstName: 'Nikita',
    secondName: 'Polevoy',
    task: getFriendlyNumbers
}