const pivotHelper = require("./pivotHelper");

test("pivotHelper([52341, 43422, 3424, 7, 6, 4645, 55]) should be [6, 7, 55, 3424, 4645, 43422, 52341]", () => {
  const arr = [21, 43422, 3424, 7, 6, 4645, 55]
  expect(pivotHelper(arr)).toEqual(2);
  expect(arr[2]).toEqual(21);
});