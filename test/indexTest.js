require ( './helpers.js' );


describe("index.js", () => {
  let input;

  beforeEach(function() {
    input = document.getElementById('button');
  })

  it("binds an event listener in addingEventListener()", () => {
    const originalFunction = window.addingEventListener;
    let functionCalled = true;
    window.addingEventListener = function () {
      functionCalled = true;
    };
  
    input.click();
  
    window.addingEventListener = originalFunction;
  
    console.log(functionCalled);
    expect(functionCalled).to.be.true;
  })
})
