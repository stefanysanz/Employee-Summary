const m = require("./members");

test("creates a new member", () => {
  expect(m.create()).toEqual({});
});