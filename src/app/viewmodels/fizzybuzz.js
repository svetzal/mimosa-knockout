define(['knockout','models/fizzbuzz'], function(ko, FizzBuzz) {
	function FizzyBuzzViewModel() {

		this.fizzBuzz = new FizzBuzz();

		this.val = ko.observable();

		this.output = ko.computed(function() {
			return this.fizzBuzz.result(this.val());
		}, this);

	}
	return new FizzyBuzzViewModel();
});
