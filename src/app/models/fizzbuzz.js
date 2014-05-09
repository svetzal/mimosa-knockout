define(['models/decision','models/utilities'], function(Decision,Utilities) {
	var FizzBuzz = function() {

		this.decisions = [];
		var utility = new Utilities();

		this.result = function(inputValue) {

			var output = "";

			inputValue = utility.trimWhiteSpaceFromString(inputValue);

			for (var i = 0; i < this.decisions.length; i++) {
				output += this.decisions[i].result(inputValue);
			}

			if(isNaN(inputValue)) {
				output = "Not Valid Data";
			}
			else if(utility.isEqualToZero(inputValue)) {
				output = "0";
			}
			else if(utility.isLengthLessThanOne(inputValue)) {
				output = "" + inputValue;
			}
			else if(utility.isEqualToASpace(inputValue)){
				output= "Not Valid Data";
			}
			else if(output === "") {
				output = "" + inputValue;
			}

			return output;

		};

		this.decisions.push(new Decision(3, "Fizz"));
		this.decisions.push(new Decision(5, "Buzz"));
		this.decisions.push(new Decision(7, "Woof"));
	};

	return FizzBuzz;
});