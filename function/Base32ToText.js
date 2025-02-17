const base32 = require('hi-base32');

module.exports = {
    name: "$base32ToText",
    type: "djs",
    code: async (d) => {
      const data = d.util.aoiFunc(d);
      const [base32Text] = data.inside.splits;
  
      if (!base32Text) {
        data.result = "No Base32 string provided!";
        return { code: d.util.setCode(data) };
      }
  
      const text = base32.decode(base32Text);
      data.result = text;
      return { code: d.util.setCode(data) };
    }
  }