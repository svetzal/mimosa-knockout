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
			else if (parseInt(ivar) === 0) {
				console.log("here");
				out = "" + ivar;
			}
			else if (out === ""){
				out = "" + ivar;
			}
			else if(ivar.length < 1) {
				out = "" + ivar;
			}
			console.log(ivar);
			return out;
		};

		this.decisions.push(new Decision(3, "Fizz"));
		this.decisions.push(new Decision(5, "Buzz"));
		this.decisions.push(new Decision(7, "Woof"));
	};
	return FizzBuzz;
});