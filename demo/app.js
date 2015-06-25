var situation = new W()

situation.initialise("canvas", "100%", "100%", "handball")

var previous = function() {
		situation.previousStep()
		refresh()
	},
	next = function() {
		situation.nextStep()
		refresh()
	},
	add = function() {
		situation.addStep()
		refresh()
	},
	del = function() {
		situation.deleteCurrentStep()
		refresh()
	},
	play = function() {
		situation.play()
		refresh()
	},
	exportData = function() {
		document.getElementById('exportedData').innerHTML = situation.exportData()
	},
	refresh = function() {
		document.getElementById('stepsLength').innerHTML = situation.getStepsLength()
		document.getElementById('stepIndex').innerHTML = situation.currentStepIndex
	}

refresh()