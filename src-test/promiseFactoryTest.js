import {PromiseFactory as pf} from "../bld/index";
import {default as fs} from "fs";

export function promiseCreateTest(test) {
  test.expect(1);

  pf.create((resolve, reject) => {
    resolve("test");
  }).then((res) => {
    test.equal("test", res);
    test.done();
  }).catch((err) => {
    console.error(err);
  });
}

export function promiseCreateFromNodeTest(test) {
  test.expect(1);

  pf.createFromNode(fs.readFile.bind(null, "src-test/test.txt", { "encoding":  "utf8" })).then((res) => {
    test.equal("just a test\n", res);
    test.done();
  }).catch((err) => {
    console.error(err);
  });
}

export function promiseAll(test) {
  test.expect(1);

  pf.all([
    pf.createFromNode(fs.readFile.bind(null, "src-test/test.txt", { "encoding":  "utf8" })),
    pf.create((resolve, reject) => {
      resolve("test");
    })
  ]).then((res) => {
    test.deepEqual([
      "just a test\n",
      "test"
    ], res);
    test.done();
  }).catch((err) => {
    console.error(err);
  });
}
