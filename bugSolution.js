```javascript
//Correct usage of $in operator, all numbers
db.collection('users').find({ age: { $in: [20, 25, 30] }});
//Correct usage of $in operator, all strings
db.collection('users').find({ age: { $in: ['20', '25', 'thirty'] }});
```