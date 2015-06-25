var workspace = new W()

workspace.initialise("canvas", "100%", "100%", "handball")

var previous = function() {
		workspace.previousStep()
		refresh()
	},
	next = function() {
		workspace.nextStep()
		refresh()
	},
	add = function() {
		workspace.addStep()
		refresh()
	},
	del = function() {
		workspace.deleteCurrentStep()
		refresh()
	},
	play = function() {
		workspace.play()
		refresh()
	},
	exportData = function() {
		document.getElementById('exportedData').innerHTML = workspace.exportData()
	},
	refresh = function() {
		document.getElementById('stepsLength').innerHTML = workspace.getStepsLength()
		document.getElementById('stepIndex').innerHTML = workspace.currentStepIndex
	}

refresh()
