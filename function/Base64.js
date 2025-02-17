module.exports = {
    name: "$textToBase64",
    type: "djs",
    code: async (d) => {
      const data = d.util.aoiFunc(d);
      const [text] = data.inside.splits;
  
      if (!text) {
        data.result = "No text provided!";
        return { code: d.util.setCode(data) };
      }
  
      const base64 = Buffer.from(text).toString('base64');
      data.result = base64;
      return { code: d.util.setCode(data) };
    }
  }