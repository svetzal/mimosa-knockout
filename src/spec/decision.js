define(['jasmine', 'models/decision'], function(jasmine, Decision) {
	describe('Decision', function() {

		var decision;

		it("should return Fizz if matches ", function() {
			decision = new Decision(3, "Fizz");
			expect(decision.result(3)).toEqual("Fizz");
		});

		it("should return Buzz if matches ", function() {
			decision = new Decision(5, "Buzz");
			expect(decision.result(5)).toEqual("Buzz");
		});

		it("should return Woof if matches ", function() {
			decision = new Decision(7, "Woof");
			expect(decision.result(7)).toEqual("Woof");
		});

		it("should return 0 if matches ", function() {
			decision = new Decision(5, "0");
			expect(decision.result(0)).toEqual("0");
		});

		it("should return nothing if matches ", function() {
			decision = new Decision(5, "Not Valid Data");
			expect(decision.result("sadfasdfasdfasdf")).toEqual("");
		});
	});
});