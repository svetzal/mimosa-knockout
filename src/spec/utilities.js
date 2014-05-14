define(['jasmine', 'models/utilities'], function(jasmine, Utilities) {
	describe('Utilities', function() {
    var utility;

    beforeEach(function() {
      utility = new Utilities();
    });

		it("should return true if equal to 0 ", function() {
			expect(utility.isEqualToZero(0)).toEqual(true);
		});

		it("should return false if not equal to 0 ", function() {
			expect(utility.isEqualToZero(1)).toEqual(false);
		});

		it("should return true if length less than one ", function() {
			expect(utility.isLengthLessThanOne("")).toEqual(true);
		});

		it("should return false if length greater than one ", function() {
			expect(utility.isLengthLessThanOne("111")).toEqual(false);
		});

		it("should return true if equal to a space ", function() {
			expect(utility.isEqualToASpace(" ")).toEqual(true);
		});

		it("should return false if not equal to a space", function() {
			expect(utility.isEqualToASpace("111")).toEqual(false);
		});

		it("should return no more than 1 space", function() {
			expect(utility.trimWhiteSpaceFromString("     ")).toEqual(" ");
		});

	});
});
