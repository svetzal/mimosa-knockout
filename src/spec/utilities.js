define(['jasmine', 'models/utilities'], function(jasmine, Utilities) {
	describe('Utilities', function() {

		it("should return true if equal to 0 ", function() {
			utility = new  Utilities();
			expect(utility.isEqualToZero(0)).toEqual(true);
		});

		it("should return false if not equal to 0 ", function() {
			utility = new  Utilities();
			expect(utility.isEqualToZero(1)).toEqual(false);
		});

		it("should return true if length less than one ", function() {
			utility = new  Utilities();
			expect(utility.isLengthLessThanOne("")).toEqual(true);
		});

		it("should return false if length greater than one ", function() {
			utility = new  Utilities();
			expect(utility.isLengthLessThanOne("111")).toEqual(false);
		});

		it("should return true if equal to a space ", function() {
			utility = new  Utilities();
			expect(utility.isEqualToASpace(" ")).toEqual(true);
		});

		it("should return false if not equal to a space", function() {
			utility = new  Utilities();
			expect(utility.isEqualToASpace("111")).toEqual(false);
		});

		it("should return no more than 1 space", function() {
			utility = new  Utilities();
			expect(utility.trimWhiteSpaceFromString("     ")).toEqual(" ");
		});

	});
});