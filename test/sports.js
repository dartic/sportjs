

describe("The static object 'Sports' ", function() {
  it("gives me access to several sports", function() {
  	console.log(Sports)
    expect(Sports.getSports().length).toBe(true);
  });
});

