define(['jasmine', 'models/fizzbuzz'], function(jasmine, FizzBuzz) {
	describe('FizzBuzz', function() {
		it("should emit 1 for input 1", function() {
			var fb = new FizzBuzz();
			expect(fb.result(1)).toEqual("1");
		});

		it("should emit 0 for input 0", function() {
			var fb = new FizzBuzz();
			expect(fb.result(0)).toEqual(0);
		});

		it("should emit 'Not Valid Data' for input a", function() {
			var fb = new FizzBuzz();
			expect(fb.result('a')).toEqual("Not Valid Data");
		});
	});
});