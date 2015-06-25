/**
 * [W description]
 */
var W = function() {
    this.sport            = undefined;          // name of the sport available
    this.fieldSet         = {};                 // store the field instructions to draw
    this.shapeSet         = {};                 // store the shapes of the workspace, could be players, balls, or everything else needed
    this.currentStepIndex = -1;                 // index of the current step in human language ( + 1 of the computer machine, first array's element is n° 1 and not n° 0)
    this.steps            = [];                  // array of shape's attributes, needed to remember the steps and to animate the shapes
}

/* Initialisation of the Raphael's canvas */
/**
 * Clear the fieldset & the shapeset
 */
W.prototype.clear = function() {
    this.fieldSet.forEach(function(el, index, array) { el.remove() })
    this.fieldSet.clear()
    this.shapeSet.forEach(function(el, index, array) { el.remove() })
    this.shapeSet.clear()
}

/**
 * Initialise the workspace, thanks to RaphaelJS
 * @param  {[type]}   elementId [description]
 * @param  {[type]}   width     [description]
 * @param  {[type]}   height    [description]
 * @param  {[type]}   sport     [description]
 * @param  {[type]}   url       [description]
 * @param  {Function} callback  [description]
 * @return {[type]}             [description]
 */
W.prototype.initialise = function(elementId, width, height, sport) {

    paper = new Raphael(elementId, width, height)
    this.fieldSet = paper.set()
    this.shapeSet = paper.set()
    currentSport = ( Sports.sports[sport] !== null && Sports.sports[sport] !== undefined ) ? sport : this.sport
    if ( Sports.sports[currentSport] !== null && Sports.sports[currentSport] !== undefined )
        this.initialiseWorskpace(currentSport)
    else
        this.initialiseWorskpace('default')

}

/**
 * [initialiseWorskpace description]
 * @param  {[type]}   sport    [description]
 * @return {[type]}            [description]
 */
W.prototype.initialiseWorskpace = function(sport) {
    this.clear()
    this.sport = sport 
    paper.setViewBox(0,0,Sports.sports[this.sport].viewport.width,Sports.sports[this.sport].viewport.height,true)
    this.fieldSet = paper.add(Sports.sports[this.sport].field)
    this.initialiseShapeSet()
}

W.prototype.initialiseShapeSet = function() {

    var currentSport = this.sport

    if (! ( currentSport === null || currentSport === undefined ) ) {

        var playerSize = Sports.sports[currentSport].playerRadius * 3 ,
            width = Sports.sports[this.sport].viewport.width
        var initialHorizontalPosition = Sports.sports[currentSport].maxPlayers * playerSize / 2 + 25,
            ratio = 1
        
        var self = this,
            start = function () {
                        this.ox = this.attr("cx")
                        this.oy = this.attr("cy")
                        ratio = document.getElementById('canvas').offsetWidth / width
                    },
            move = function (dx, dy) {
                this.attr({cx: this.ox + ( dx / ratio ), cy: this.oy + ( dy / ratio )})
            },
            up = function () {
                self.shapeSet.forEach(function(el, index, array) { if ( el.id === this.id ) el.attr(this.attr)})
                self.updateStep(self.currentStepIndex)
            }
            
        // Set used for containing players & ball
        this.shapeSet = paper.set()

        // team 1
        for(var i = 0; i < Sports.sports[currentSport].maxPlayers; i+=1) {
            var currentCircle = paper.circle(initialHorizontalPosition + 3 * i * Sports.sports[currentSport].playerRadius, 
                Sports.sports[currentSport].playerRadius * 2 + 25, 
                Sports.sports[currentSport].playerRadius).attr({
                    fill: Sports.sports[currentSport].shapes.playerTeam1.fill,
                    stroke: Sports.sports[currentSport].shapes.playerTeam1.strokerColor
                }).drag(move, start, up)
            this.shapeSet.push(currentCircle)
        }

        // team 2
        for(var i = 0; i < Sports.sports[currentSport].maxPlayers; i+=1) {
            var currentCircle = paper.circle(initialHorizontalPosition + 3 * i * Sports.sports[currentSport].playerRadius, 
                Sports.sports[currentSport].playerRadius * 5 + 25, 
                Sports.sports[currentSport].playerRadius).attr({
                    fill: Sports.sports[currentSport].shapes.playerTeam2.fill,
                    stroke: Sports.sports[currentSport].shapes.playerTeam2.strokerColor
                }).drag(move, start, up)
            this.shapeSet.push(currentCircle)
        }

        // ball
        var ball = paper.circle(Sports.sports[currentSport].viewport.width / 2, Sports.sports[currentSport].viewport.height / 2, Sports.sports[currentSport].playerRadius / 1.5)
                .attr({
                    fill: Sports.sports[currentSport].shapes.ball.fill,
                    stroke: Sports.sports[currentSport].shapes.ball.strokerColor
                }).drag(move, start, up)
        this.shapeSet.push(ball)

        if (this.steps.length === 0)
            this.addStep()
        
    } else {
        // no sport configured, error logged
        this.error = "Sport not defined. Please choose first a sport in the available sports' list."
        console.error(this.error)
    }
}

/**
 * Update the fieldset with the sport in parameter
 * @param  {string} sport The sport we want to be drawn in the workspace
 */
W.prototype.updateFieldSet = function(sport) {
    this.steps = []
    this.initialiseWorskpace(sport)
}

/* data's functions */
/**
 * Export the workspace in a JSON format
 * @return {JSON} JSON workspace
 */
W.prototype.exportData = function () { 
    return JSON.stringify(
        { 
            sport       : this.sport, 
            title       : this.title, 
            description : this.description, 
            steps       : this.steps 
        }
    )
};

W.prototype.importData = function (importData) { 
    try {
        this.clear()
        this.title = importData.title
        this.description = importData.description
        this.initialiseWorskpace(importData.sport)
        this.steps = importData.steps
        this.goToStep(0)
    } catch (e) {
        console.error(e)
        this.error = e.message
    }
    return JSON.stringify(this.steps) 
}

/* CRUD Step's functions */
W.prototype.addStep = function () { 
    this.steps.push(JSON.parse(JSON.stringify(this.getObjectValueForAKey(this.shapeSet.items, 'attrs'))) ) 
    this.currentStepIndex = this.steps.length - 1
}

W.prototype.getStep = function (index) {
    if (index > this.steps.length || index < 0) 
        return null
    return this.steps[index]
}

W.prototype.updateStep = function (index) { 
    if (index < this.steps.length) 
        this.steps[index] = JSON.parse(JSON.stringify(this.getObjectValueForAKey(this.shapeSet.items, 'attrs') ) ) };

W.prototype.deleteStep = function (index) { 
    this.steps.splice(index, 1)
    this.goToStep( index === this.steps.length ? index - 1 : index )
}

W.prototype.deleteCurrentStep = function () { 
    this.deleteStep( this.currentStepIndex) 
};

W.prototype.getStepsLength = function () { 
    return this.steps.length 
};

/* navigation functions */
W.prototype.goToStep = function(indexStep) {
    var currentStep = this.getStep(indexStep),
        duration = 0 

    if (! ( currentStep === null || currentStep === undefined ) ) {
        for (var i = 0; i < currentStep.length; i++) {
            this.shapeSet[i].animate(Raphael.animation(currentStep[i], duration))
        }
        this.currentStepIndex = indexStep
    }
}

W.prototype.playStep = function (indexStep) {
    var 
    currentStep = this.getStep(indexStep),
    duration    = indexStep === 0 ? 100 : 1500,
    self        = this

    if (! ( currentStep === null || currentStep === undefined ) ) {
        this.currentStepIndex = indexStep
        var elementWith = this.shapeSet[0]
        var animWith = Raphael.animation(currentStep[0], duration, 'linear', function() { self.playStep(indexStep + 1) })
        elementWith.animate(animWith)
        for (var i = 1; i < currentStep.length; i++) {
            this.shapeSet[i].animateWith(elementWith, animWith, Raphael.animation(currentStep[i], duration))
        }
    }
}

W.prototype.play = function() {
    this.playStep(0)
}

W.prototype.previousStep = function() {
    this.goToStep(this.currentStepIndex - 1)
}

W.prototype.nextStep = function() {
    this.goToStep(this.currentStepIndex + 1)
}

/* utilities */
W.prototype.getObjectValueForAKey = function(object, key) {
    var result = []
    if (object !== null && object !== undefined)
        object.forEach( function (el, index, array) { result.push(el[key]) } )
    return result
}

// TODO
// manage collisions between shapes, that don't have to cross themselves, maybe with a property on the shape ?
// manage coordinate's system when CSS change, for example in 3D ?