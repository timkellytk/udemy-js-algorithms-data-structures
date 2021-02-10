const bubbleSort = require("./bubbleSort");

test("bubbleSort([52341, 43422, 3424, 4645, 55]) should be [55, 3424, 4645, 43422, 52341]", () => {
  expect(bubbleSort([52341, 43422, 3424, 4645, 55])).toEqual([55, 3424, 4645, 43422, 52341]);
});