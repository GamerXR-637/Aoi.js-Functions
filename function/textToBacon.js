module.exports = {
    name: "$textToBacon",
    type: "djs",
    code: async (d) => {
      const data = d.util.aoiFunc(d);
      const [text] = data.inside.splits;
  
      if (!text) {
        data.result = "No text provided!";
        return { code: d.util.setCode(data) };
      }
  
      const baconCipherMap = {
        'A': 'AAAAA', 'B': 'AAAAB', 'C': 'AAABA', 'D': 'AAABB', 'E': 'AABAA', 'F': 'AABAB', 'G': 'AABBA', 'H': 'AABBB', 'I': 'ABAAA', 'J': 'ABAAB',
        'K': 'ABABA', 'L': 'ABABB', 'M': 'ABBAA', 'N': 'ABBAB', 'O': 'ABBBA', 'P': 'ABBBB', 'Q': 'BAAAA', 'R': 'BAAAB', 'S': 'BAABA', 'T': 'BAABB',
        'U': 'BABAA', 'V': 'BABAB', 'W': 'BABBA', 'X': 'BABBB', 'Y': 'BBAAA', 'Z': 'BBAAB'
      };
  
      const baconCipher = text.toUpperCase().split('').map(char => baconCipherMap[char] || char).join(' ');
  
      data.result = baconCipher;
      return { code: d.util.setCode(data) };
    }
  }