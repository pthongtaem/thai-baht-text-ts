# Thai Baht Text TS

[![NPM Download](https://img.shields.io/npm/dt/thai-baht-text.svg?style=flat-square)](https://www.npmjs.com/package/thai-baht-text-ts)
[![NPM Version](https://img.shields.io/npm/v/thai-baht-text.svg?style=flat-square)](https://www.npmjs.com/package/thai-baht-text-ts)
[![license-svg](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[Installation](https://github.com/pthongtaem/thai-baht-text-ts#installation) | [Usage](https://github.com/pthongtaem/thai-baht-text-ts#usage)

Convert number to Thai Baht as Text

แปลง เลข ให้เป็น หน่วยบาทไทย

___
## Installation
#### วิธีติดตั้ง
```bash
npm install thai-baht-text async --save
```
##### or
```bash
yarn add thai-baht-text async
```

## Usage
#### วิธีการใช้งาน

#### Javascript ES5

```javascript
const THBText = require('thai-baht-text') // for ES5

let money = 10050
let moneyText = THBText(money)

console.log(moneyText)
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

money = 12345678988888.50

console.log(THBText(money))
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพันหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพันแปดร้อยแปดสิบแปดบาทห้าสิบสตางค์
```
#### More infomation [ES5 Example](https://github.com/pthongtaem/thai-baht-text-ts/blob/master/example/example_es5.js)
___

#### Javascript ES6

```javascript
import THBText from 'thai-baht-text' // for ES6

let money = 10050
let moneyText = THBText(money)

console.log(moneyText)
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

money = 12345678988888.50

console.log(THBText(money))
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพันหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพันแปดร้อยแปดสิบแปดบาทห้าสิบสตางค์
```
#### More infomation [ES6 Example](https://github.com/pthongtaem/thai-baht-text-ts/blob/master/example/example_es6.js)


#### More infomation [Browser version (UMD)](https://github.com/pthongtaem/thai-baht-text-ts/blob/master/example/example_umd.js)

#### **CAUTION!**

You can use number that doesn't over than 9007199254740991

that is MAX_SAFE_INTEGER of javascript.

คุณสามารถใส่เลขได้ไม่เกิน 9007199254740991

ซึ่งเป็น MAX_SAFE_INTEGER ของ javascript
___
## License
The Thai-Baht-Text JS is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Ending message
If you found bugs or some missing point, please send pull request back or open an issue.


forked from [antronic/thai-baht-text-js](https://github.com/antronic/thai-baht-text-js)