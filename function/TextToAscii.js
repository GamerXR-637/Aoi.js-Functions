module.exports = {
  name: "$textToAscii",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [text] = data.inside.splits;

    if (!text) {
      data.result = "No text provided!";
      return { code: d.util.setCode(data) };
    }

    const ascii = text.split('').map(char => char.charCodeAt(0)).join(' ');
    data.result = ascii;
    return { code: d.util.setCode(data) };
  }
}