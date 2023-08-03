const express = require("express");
const app = express();
const queries = require("./queries");
const pool = require('./db')
const format = require("pg-format");


pool.connect();

app.use(express.json());

const getSum = (num1, num2) => {
  let [x, y] = [num1.length - 1, num2.length - 1];
  let carryover = 0;
  let newNum = "";
  while (x >= 0 || y >= 0 || carryover !== 0) {
    let digit1 = num1?.[x] ? parseInt(num1[x]) : 0;
    let digit2 = num2?.[y] ? parseInt(num2[y]) : 0;
    let sum = digit1 + digit2 + carryover;
    if (carryover > 0) carryover = 0;
    if (sum >= 10) {
      carryover = 1;
      sum = sum % 10;
    }
    newNum = sum.toString() + newNum;
    if (x >= 0) x--;
    if (y >= 0) y--;
  }
  return newNum;
};

app.post("/sendNumbers", (req, res) => {
  let num = req.body.number;
  if (num === 0) res.status(200).send("")
  pool.query(
    queries.getFibNums, [num],
    (err, results) => {
      if (err) throw err;
      const nums = results.rows.map((el) => {
        return el.value;
      });
      if (nums.length === num) {
        res.send(nums.join(", "));
      } else if (nums.length === 0) {
        nums[0] = "0";
        nums[1] = "1";
        const newNums = [
          [0, "0"],
          [1, "1"],
        ];
        for (let i = 2; i < num; i++) {
          nums[i] = getSum(nums[i - 1], nums[i - 2]);
          newNums[i] = [i, nums[i]];
        }
        pool.query(
          format(queries.addNewFibNums, newNums),
          [],
          (error, result, fields) => {
            if (error) throw err;
            res.status(200).send(nums.join(", "));
          }
        );
      } else if (nums.length < num) {
        const newNums = [];
        for (let i = nums.length; i < num; i++) {
          nums[i] = getSum(nums[i - 1], nums[i - 2]);
          newNums.push([i, nums[i]]);
        }
        pool.query(
          format(queries.addNewFibNums, newNums),
          [],
          (error, result, fields) => {
            if (error) throw error;
            res.status(200).send(nums.join(", "));
          }
        );
      }
    }
  );
});

const PORT = 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));