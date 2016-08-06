'use strict'
const ghindex = require('.')
const users = ['torvalds', 'JakeWharton', 'tj', 'addyosmani', 'paulirish', 'flowmemo']
for (let user of users) ghindex(user).then(result => console.log(result) & console.log())

