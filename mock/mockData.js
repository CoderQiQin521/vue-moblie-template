var Mock = require("mockjs");

const order = Mock.mock({
  code: 0,
  data: {
    "id|+1": 1,
    "list|20-60": [
      {
        name: "@cname"
      }
    ]
  }
});

const user = Mock.mock({
  code: 0,
  "data|5-15": [
    {
      "id|+1": 1,
      name: "@cname",
      money: "@integer()",
      address: "@paragraph()"
    }
  ]
});

module.exports = {
  order,
  user
};
