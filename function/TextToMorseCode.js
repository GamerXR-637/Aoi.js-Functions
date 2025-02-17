module.exports = {
    name: "$textToMorse",
    type: "djs",
    code: async (d) => {
      const data = d.util.aoiFunc(d);
      const [text] = data.inside.splits;
  
      if (!text) {
        data.result = "No text provided!";
        return { code: d.util.setCode(data) };
      }
  
      const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        ' ': ' / ', '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
        ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
      };
  
      const morseCode = text.toUpperCase().split('').map(char => morseCodeMap[char] || char).join(' ');
  
      data.result = morseCode;
      return { code: d.util.setCode(data) };
    }
  }