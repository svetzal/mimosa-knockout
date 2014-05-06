define(['knockout'], function(ko) {

	function FizzyBuzzViewModel() {
		this.input1 = ko.observable();

		var Decision = function(mod,output){
			this.mod = mod;
			this.output = output;
			this.modChecking = function(input){
				var finalOutput = "";
				if (input !== "" && input % this.mod === 0) {
					finalOutput += this.output;
				}
				else{
					finalOutput = finalOutput;
				}
				return finalOutput;
			};
		};

		this.output1 = ko.computed(function() {
			var value = this.input1();

			var a = new Decision(3, "Fizz");
			var b = new Decision(5, "Buzz");
			var c = new Decision(7, "Woof");

			var output = a.modChecking(value) + b.modChecking(value) + c.modChecking(value);
			console.log(value);
			return output;

		}, this);

	}
	return new FizzyBuzzViewModel();
});
