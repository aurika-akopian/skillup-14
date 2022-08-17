var userObj = {
  firstName: "James",
  lastName: "Bond",
  age: 43,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// console.log({ userObj })
// console.log({ fullName: userObj.fullName() })

function defUpperStr(text) {
  return (text || "default text").toUpperCase();
}

console.log(defUpperStr("My text"));

function evenFn(n) {
  var ans = [];

  for (var i = 2; i <= n; i += 2) {
    ans.push(i);
  }

  return ans;
}

function weekFn(cond) {
  var str = "";

  switch (cond) {
    case 1:
      str = "Понедельник";
      break;
    case 2:
      str = "Вторник";
      break;
    case 3:
      str = "Среда";
      break;
    case 4:
      str = "Четверг";
      break;
    case 5:
      str = "Пятница";
      break;
    case 6:
      str = "Суббота";
      break;
    case 7:
      str = "Воскресенье";
      break;
    default:
      str = null;
  }

  return str;
}

console.log(weekFn(1)); // 'Понедельник'
console.log(weekFn(3)); // 'Среда'
console.log(weekFn(7)); // 'Воскресенье'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn("2")); // null

function ageClassification(num) {
  return num > 0
    ? num > 24
      ? num > 44
        ? num > 65
          ? num > 75
            ? num > 90
              ? num > 122
                ? null
                : "долгожители"
              : "старческий возраст"
            : "пожилой возраст"
          : "средний возраст"
        : "молодой возраст"
      : "детский возраст"
    : null;
}

console.log("    -1 :", ageClassification(-1)); // -1 : null
console.log("     1 :", ageClassification(1)); // 1 : детский возраст
console.log("    24 :", ageClassification(24)); // 24 : детский возраст
console.log(" 24.01 :", ageClassification(24.01)); // 24.01 : молодой возраст
console.log("    44 :", ageClassification(44)); // 44 : молодой возраст
console.log(" 44.01 :", ageClassification(44.01)); // 44.01 : средний возраст
console.log("    65 :", ageClassification(65)); // 65 : средний возраст
console.log("  65.1 :", ageClassification(65.1)); // 65.1 : пожилой возраст
console.log("    75 :", ageClassification(75)); // 75 : пожилой возраст
console.log(" 75.01 :", ageClassification(75.01)); // 75.01 : старческий возраст
console.log("    90 :", ageClassification(90)); // 90 : старческий возраст
console.log(" 90.01 :", ageClassification(90.01)); // 90.01 : долгожители
console.log("   122 :", ageClassification(122)); // 122 : долгожители
console.log("122.01 :", ageClassification(122.01)); // 122.01 : null
console.log("   150 :", ageClassification(150)); // 150 : null

function oddFn(n) {
  var arr = [];
  var i = 0;

  while (i++ < n) if (i % 2 !== 0) arr.push(i);

  return arr;
}
console.log(oddFn(10)); // [1, 3, 5, 7, 9]
console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

function mainFunc(a, b, cb) {
  if (cb && typeof cb === "function") return cb(a, b);

  return false;
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
  return Math.pow(num, pow);
}

function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); // 7
console.log(mainFunc(2, 5, "not a func")); // false
