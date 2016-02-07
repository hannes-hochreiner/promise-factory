# promise-factory
A wrapper for creating promises in JavaScript based on native ES2015 promises.

## Usage

### ES5

    var pf = require("promise-factory").PromiseFactory;
    var fs = require("fs");

    pf.createFromNode(fs.readFile.bind(null, "package.json", { "encoding": "utf8" })).then(function(res) {
      console.log(res);
    });

### ES2015

    import {PromiseFactory as pf} from "promise-factory";

    pf.create((resolve, reject) => {
      resolve("test");
    }).then((res) => {
      console.log(res);
    })
