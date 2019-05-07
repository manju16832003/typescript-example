"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.send('Hello TypeScript');
});
console.log('Listening to port 3004');
app.listen(3004);
//# sourceMappingURL=index.js.map