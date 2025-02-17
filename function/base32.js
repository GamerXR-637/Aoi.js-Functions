const base32 = require('hi-base32');

module.exports = {
  name: "$textToBase32",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [text] = data.inside.splits;

    if (!text) {
      data.result = "No text provided!";
      return { code: d.util.setCode(data) };
    }

    const base32Encoded = base32.encode(text);
    data.result = base32Encoded;
    return { code: d.util.setCode(data) };
  }
}