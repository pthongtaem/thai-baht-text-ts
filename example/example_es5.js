/* eslint-disable import/no-extraneous-dependencies */

const { ThaiBaht } = require('thai-baht-text-ts'); // for ES5

// This module is very simple to use
// You just put the number that you want to convert into the first parameter
// LIKE THIS --> THBText(Number)

let money = 10050;
const moneyText = ThaiBaht(money);

console.log(moneyText);
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

money = 12345678988888.5;

console.log(ThaiBaht(money));
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพันหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพันแปดร้อยแปดสิบแปดบาทห้าสิบสตางค์

// You can see that this module can handle big number, but
// it must not over than 9007199254740991 that is MAX_SAFE_INTEGER of javascript.
