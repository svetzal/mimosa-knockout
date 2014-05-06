define(['jasmine', 'models/decision'], function(jasmine, Decision) {
	describe('Decision', function() {
		it("should return word if matches", function() {
			decision = new Decision(5, "word");
			expect(decision.result(5)).toEqual("word");
		});

		// it("should return the number if it doesn't match", function() {
		// 	decision = new Decision(5, "word");
		// 	expect(decision.result(1)).toEqual("1");
		// });
	});
});