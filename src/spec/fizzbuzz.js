define(['jasmine', 'models/fizzbuzz'], function(jasmine, FizzBuzz) {
	describe('FizzBuzz', function() {

		var fb;

	    beforeEach(function() {
	      fb = new FizzBuzz();
	    });

		it("should emit string 1 for string input 1", function() {
			expect(fb.result('1')).toEqual('1');
		});

		it("should emit string 0 for string input 0", function() {
			expect(fb.result('0')).toEqual('0');
		});

		it("should emit string 0 for string input 0000", function() {
			expect(fb.result('0000')).toEqual('0');
		});

		it("should emit string 0 for string input 0000.0000", function() {
			expect(fb.result('0000.0000')).toEqual('0');
		});

		it("should emit 'Not Valid Data' for string input a", function() {
			expect(fb.result('a')).toEqual('Not Valid Data');
		});

		it("should emit 'Not Valid Data' for string input tabs", function() {
			expect(fb.result('		')).toEqual('Not Valid Data');
		});

		it("should emit 'Not Valid Data' for string input /", function() {
			expect(fb.result('///////////')).toEqual('Not Valid Data');
		});
	});
});