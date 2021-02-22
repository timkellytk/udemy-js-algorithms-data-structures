const mergeTwoArrays = require("./mergeTwoArrays");

test("mergeTwoArrays([1,10,50],[2,14,99,100]) should be [1,2,10,14,50,99,100]", () => {
  expect(mergeTwoArrays([1,10,50],[2,14,99,100])).toEqual([1,2,10,14,50,99,100]);
});