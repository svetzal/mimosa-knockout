define([], function() {
	var Decision = function(mod,output) {

		this.mod = mod;
		this.output = output;

		this.result = function(input) {

			var finalOutput = "";

			if (input % this.mod === 0) {
				finalOutput = this.output;
			}

			return finalOutput;

		};
	};
	return Decision;
});