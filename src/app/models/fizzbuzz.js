define(['models/decision'], function(Decision) {
	var FizzBuzz = function() {

		this.decisions = [];

		this.result = function(ivar) {
			var out = "";
			for (var i = 0; i < this.decisions.length; i++) {
				out += this.decisions[i].result(ivar);
			}

			if(isNaN(ivar)) {
				out = "Not Valid Data";
			}
			else if (isEqualToZero(ivar)) {
				out = "" + ivar;
			}
			else if (out === ""){
				out = "" + ivar;
			}
			else if(isLengthLessThanOne(ivar)) {
				out = "" + ivar;
			}

			return out;
		};

		var isEqualToZero = function(val){
			var isValZero = false;

			if(parseInt(val) === 0){
				isValZero = true;
			}
			return isValZero;
		};

		var isLengthLessThanOne = function(val){
			var isValLengthLessThanOne = false;

			if(val.length < 1){
				isValLengthLessThanOne = true;
			}

			return isValLengthLessThanOne;
		};

		this.decisions.push(new Decision(3, "Fizz"));
		this.decisions.push(new Decision(5, "Buzz"));
		this.decisions.push(new Decision(7, "Woof"));
	};
	return FizzBuzz;
});