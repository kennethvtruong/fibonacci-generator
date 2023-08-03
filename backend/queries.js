const getFibNums = "SELECT value FROM numbers WHERE number < $1"
const addNewFibNums = "INSERT INTO numbers (number, value) VALUES %L"; 

module.exports = {
    getFibNums,
    addNewFibNums
}