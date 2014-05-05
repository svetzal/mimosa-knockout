define(['knockout'], function(ko) {

	function AppViewModel() {
		this.input1 = ko.observable();

		this.output1 = ko.computed(function() {
			var value = this.input1();

			var eInput = document.getElementsByTagName("input")[0];
			var eOutput = document.getElementsByTagName("strong")[0];


			if(isNaN(value) === false) {

				eInput.setAttribute("maxlength","8");

				if(value !== 0 && value !=="") {
					eOutput.className = "";
					if(value % 105 === 0){
						value = "FizzBuzzWoof";
					}
					if(value % 15 === 0){
						value = "FizzBuzz";
					}
					if(value % 5 === 0){
						value = "Buzz";
					}
					if(value % 3 === 0){
						value = "Fizz";
					}
				}else{
					value = "" + this.input1();
				}
			}
			else{
				value = "not valid data";
				eOutput.className = "colourSwap";
				eInput.setAttribute("maxlength","0");
			}
			return value;

		}, this);


	}

	// Activates knockout.js
	ko.applyBindings(new AppViewModel());

});
