define(['jasmine', 'models/fizzbuzz'], function(jasmine, FizzBuzz) {
	describe('FizzBuzz', function() {
		it("should emit 1 for input 1", function() {
			var fb = new FizzBuzz();
			expect(fb.result(1)).toEqual("1");
		});
		// it("should emit fizz for input 3", function() {
		// var fb = new FizzBuzz();
		// expect(fb.result(3)).toEqual("Fizz");
		// });
	});
});