module.exports = {
    name: "$asciiToText",
    type: "djs",
    code: async (d) => {
      const data = d.util.aoiFunc(d);
      const [ascii] = data.inside.splits;
  
      if (!ascii) {
        data.result = "No ASCII codes provided!";
        return { code: d.util.setCode(data) };
      }
  
      const text = ascii.split(' ').map(code => String.fromCharCode(code)).join('');
      data.result = text;
      return { code: d.util.setCode(data) };
    }
  }