var situation = new W()

situation.initialise("canvas", "100%", "100%", "handball")

var previous = function() {
		situation.previousStep()
	},
	next = function() {
		situation.nextStep()
	},
	add = function() {
		situation.addStep()
		refreshNumberOfSteps()
	},
	del = function() {
		situation.deleteCurrentStep()
		refreshNumberOfSteps()
	},
	play = function() {
		situation.play()
	},
	refreshNumberOfSteps = function() {
		document.getElementById('stepsLength').innerHTML = situation.getStepsLength()
	}

refreshNumberOfSteps()