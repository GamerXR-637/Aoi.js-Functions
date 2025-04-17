# Aoi.js Functions

The code in this repository is designed to work only with `aoi.js` https://github.com/aoijs/aoi.js. You are free to use the code as you wish, but if you intend to use the functions as they are, please include the following snippet in the index file or the file that all of the important part are:

```javascript
const functionsPath = path.join(__dirname, 'src', 'functions');
fs.readdirSync(functionsPath).forEach(file => {
    const func = require(path.join(functionsPath, file));
    if (func.name) {
        client.functionManager.createFunction(func);
    } else {
        console.error(`Function in file ${file} does not have a name property.`);
    }
});
```

In this snippet, "src" should be the main folder, and "functions" refers to the folder where your function files are stored.

Please note that I cannot guarantee this code will work for everyone, as it functioned well for me. I am unable to provide further assistance, as I received help from AI and cannot offer support. 
