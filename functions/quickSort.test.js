const quickSort = require("./quickSort");

test("quickSort([52341, 43422, 3424, 7, 6, 4645, 55]) should be [6, 7, 55, 3424, 4645, 43422, 52341]", () => {
  expect(quickSort([52341, 43422, 3424, 7, 6, 4645, 55])).toEqual([6, 7, 55, 3424, 4645, 43422, 52341]);
});
test("quickSort([[2,1,9,76,4]) should be [1,2,4,9,76]", () => {
  expect(quickSort([2,1,9,76,4])).toEqual([1,2,4,9,76]);
});

