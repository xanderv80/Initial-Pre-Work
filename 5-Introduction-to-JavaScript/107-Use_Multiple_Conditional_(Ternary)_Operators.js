/* This makes sense because otherwise if you just needed a false postive result, you wouldn't need something so verbose */

function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);