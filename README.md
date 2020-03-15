# Thai Baht Text TS

[![NPM Version](https://img.shields.io/npm/v/thai-baht-text-ts)](https://www.npmjs.com/package/thai-baht-text-ts)
[![license](https://img.shields.io/npm/l/thai-baht-text-ts)](https://opensource.org/licenses/MIT)

[Installation](https://github.com/pthongtaem/thai-baht-text-ts#installation) | [Usage](https://github.com/pthongtaem/thai-baht-text-ts#usage)

Convert number to Thai Baht as Text

แปลง เลข ให้เป็น หน่วยบาทไทย

___
## Installation
#### วิธีติดตั้ง
```bash
npm install thai-baht-text-ts --save
```
##### or
```bash
yarn add thai-baht-text-ts
```

## Usage
#### วิธีการใช้งาน

#### Javascript ES5

```javascript
const { ThaiBaht } = require('thai-baht-text-ts') // for ES5

let money = 10050
let moneyText = ThaiBaht(money)

console.log(moneyText)
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

money = 12345678988888.50

console.log(ThaiBaht(money))
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพันหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพันแปดร้อยแปดสิบแปดบาทห้าสิบสตางค์
```
#### More infomation [ES5 Example](https://github.com/pthongtaem/thai-baht-text-ts/blob/master/example/example_es5.js)
___

#### Javascript ES6

```javascript
import { ThaiBaht } from 'thai-baht-text-ts' // for ES6

let money = 10050
let moneyText = ThaiBaht(money)

console.log(moneyText)
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

money = 12345678988888.50

console.log(ThaiBaht(money))
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพันหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพันแปดร้อยแปดสิบแปดบาทห้าสิบสตางค์
```
#### More infomation [ES6 Example](https://github.com/pthongtaem/thai-baht-text-ts/blob/master/example/example_es6.js)


#### **CAUTION!**

You can use number that doesn't over than 9007199254740991

that is MAX_SAFE_INTEGER of javascript.

คุณสามารถใส่เลขได้ไม่เกิน 9007199254740991

ซึ่งเป็น MAX_SAFE_INTEGER ของ javascript
___
## License
The Thai-Baht-Text-TS is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Ending message
If you found bugs or some missing point, please send pull request back or open an issue.


forked from [antronic/thai-baht-text-js](https://github.com/antronic/thai-baht-text-js)