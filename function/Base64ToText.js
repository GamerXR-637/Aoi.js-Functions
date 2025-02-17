module.exports = {
    name: "$base64ToText",
    type: "djs",
    code: async (d) => {
      const data = d.util.aoiFunc(d);
      const [base64] = data.inside.splits;
  
      if (!base64) {
        data.result = "No Base64 string provided!";
        return { code: d.util.setCode(data) };
      }
  
      const text = Buffer.from(base64, 'base64').toString('utf-8');
      data.result = text;
      return { code: d.util.setCode(data) };
    }
  }