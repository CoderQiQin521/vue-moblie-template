var Mock = require("mockjs");

const order = Mock.mock({
  error: 0,
  data: {
    "id|+1": 1,
    "list|20-60": [
      {
        name: "@cname"
      }
    ]
  }
});

module.exports = order;
