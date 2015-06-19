/**
 * SportJS v0.0.1
 * @author Mathieu Dartigues
 * @copyright 2015 DARTIC
 * https://github.com/mdartic/sportjs
 * @license [url] MIT
 */
var Sport = {

    getSports: function() {
        var result = []
        for (var prop in Sport.sports) {
            if (Sport.sports[prop].displayed) result.push( {'value': prop, 'label': Sport.sports[prop].label } )
        }
        return result
    },

    sports: {
        "default": { 
            "label": "Default fieldset",
            "displayed" : false,

            "viewport": {
                "width": 450,
                "height": 250
            },

            "field": [
                {
                    "type": "rect",
                    "x": 25,
                    "y": 25,
                    "width": 400,
                    "height": 200,
                    "stroke-width": 0,
                    "fill": "white"
                }, 
                {
                    "type": "text",
                    "x": 225,
                    "y": 125,
                    "text": "Veuillez choisir un sport en premier"
                }
            ],
            "maxPlayers": 0, 
            "playerRadius": 0,
            "shapes": {
                "ball" :          { "strokerColor": "black",    "fill": "black",    "selectedColor": "white",    "radius": "14 / 2",    "style": "circle" }
            }
        },
        "handball": { 
            "label": "Handball",
            "displayed" : true,

            "viewport": {
                "width": 450,
                "height": 250
            },

            "field": [
                {
                    "type": "rect",
                    "x": 25,
                    "y": 25,
                    "width": 400,
                    "height": 200,
                    "fill": "0-#f1da36-#FCF6BF:50-#f1da36",
                    "fill": "#f1dF45"
                }, 
                {
                    "type": "path",
                    "path": "M25,50 C105,50 105,200 25,200z",
                    "fill": "#5599EE"
                }, 
                {
                    "type": "path",
                    "path": "M45,25 C140,25 140,225 45,225",
                    "stroke-dasharray": ["- "]
                },
                {
                    "type": "path",
                    "path": "M425,50 C345,50 345,200 425,200z",
                    "fill": "#5599EE"
                }, 
                {
                    "type": "path",
                    "path": "M405,25 C310,25 310,225 405,225",
                    "stroke-dasharray": ["- "]
                }, 
                {
                    "type": "path",
                    "path": "M225,25 L225,225"
                }, 
                {
                    "type": "path",
                    "path": "M65,124 L65,126"
                }, 
                {
                    "type": "path",
                    "path": "M385,124 L385,126"
                }, 
                {
                    "type": "path",
                    "path": "M95,120 L95,130"
                }, 
                {
                    "type": "path",
                    "path": "M355,120 L355,130"
                }, 
                {
                    "type": "rect",
                    "x": 20,
                    "y": 110,
                    "width": 5,
                    "height": 30,
                    "fill": "#ff0000"
                }, 
                {
                    "type": "rect",
                    "x": 10,
                    "y": 110,
                    "width": 10,
                    "height": 30,
                    "fill": "transparent"
                }, 
                {
                    "type": "rect",
                    "x": 425,
                    "y": 110,
                    "width": 5,
                    "height": 30,
                    "fill": "#ff0000"
                }, 
                {
                    "type": "rect",
                    "x": 430,
                    "y": 110,
                    "width": 10,
                    "height": 30,
                    "fill": "transparent"
                }
            ],
            "maxPlayers": 7, 
            "playerRadius": 7,
            "shapes": {
                "playerTeam1" :   { "strokerColor": "black",    "fill": "red",      "selectedColor": "black",    "radius": 10,          "style": "circle" },
                "playerTeam2" :   { "strokerColor": "black",    "fill": "green",    "selectedColor": "black",    "radius": 10,          "style": "circle" },
                "ball" :          { "strokerColor": "black",    "fill": "white",    "selectedColor": "white",    "radius": "14 / 2",    "style": "circle" }
            }
        },      
        "foot-en-salle": { 
            "label": "Foot en salle",
            "displayed" : true,

            "viewport": {
                "width": 350,
                "height": 200
            },

            "field": [
                {
                    "type": "rect",
                    "x": 0,
                    "y": 0,
                    "width": 350,
                    "height": 200,
                    "stroke-width": 0,
                    "fill": "green"
                }, 
                {
                    "type": "rect",
                    "x": 25,
                    "y": 25,
                    "width": 300,
                    "height": 150,
                    "stroke": "white",
                    "stroke-width": 2,
                    "fill": "green"
                }, 
                {
                    "type": "rect",
                    "x": 25,
                    "y": 60,
                    "width": 40,
                    "height": 80,
                    "stroke": "white",
                    "stroke-width": 2,
                    "fill": "green"
                }, 
                {
                    "type": "rect",
                    "x": 285,
                    "y": 60,
                    "width": 40,
                    "height": 80,
                    "stroke": "white",
                    "stroke-width": 2,
                    "fill": "green"
                }, 
                {
                    "type": "path",
                    "stroke": "white",
                    "stroke-width": 2,
                    "path": "M175,25 L175,175"
                }, 
                {
                    "type": "rect",
                    "x": 10,
                    "y": 85,
                    "width": 15,
                    "height": 30,
                    "stroke": "white",
                    "stroke-width": 2,
                    "fill": "transparent"
                }, 
                {
                    "type": "rect",
                    "x": 325,
                    "y": 85,
                    "width": 15,
                    "height": 30,
                    "stroke": "white",
                    "stroke-width": 2,
                    "fill": "transparent"
                },
                {
                    "type": "circle",
                    "cx": 175,
                    "cy": 100,
                    "r": 4,
                    "fill": "white",
                    "stroke-width": 0
                },
                {
                    "type": "circle",
                    "cx": 85,
                    "cy": 100,
                    "r": 2,
                    "fill": "white",
                    "stroke-width": 0
                },
                {
                    "type": "circle",
                    "cx": 265,
                    "cy": 100,
                    "r": 2,
                    "fill": "white",
                    "stroke-width": 0
                }
            ],
            "maxPlayers": 5, 
            "playerRadius": 7,
            "shapes": {
                "playerTeam1" :   { "strokerColor": "black",    "fill": "red",      "selectedColor": "black",    "radius": 10,          "style": "circle" },
                "playerTeam2" :   { "strokerColor": "black",    "fill": "yellow",    "selectedColor": "black",    "radius": 10,          "style": "circle" },
                "ball" :          { "strokerColor": "black",    "fill": "orange",    "selectedColor": "white",    "radius": "14 / 2",    "style": "circle" }
            }
        },  
        "football": { 
            "label": "Football",
            "displayed" : true,

            "viewport": {
                "width": 1050,
                "height": 650
            },

            "field": [
                {
                    "type": "rect",
                    "x": 0,
                    "y": 0,
                    "width": 1050,
                    "height": 650,
                    "stroke-width": 0,
                    "fill": "green"
                }, 
                {
                    "type": "rect",
                    "x": 25,
                    "y": 25,
                    "width": 1000,
                    "height": 600,
                    "stroke": "white",
                    "stroke-width": 3,
                    "fill": "green"
                }, 
                {
                    "type": "path",
                    "stroke": "white",
                    "stroke-width": 3,
                    "path": "M525,25 L525,625"
                }, 
                {
                    "type": "circle",
                    "cx": 135,
                    "cy": 325,
                    "r": 91,
                    "stroke": "white",
                    "stroke-width": 3
                }, 
                {
                    "type": "circle",
                    "cx": 915,
                    "cy": 325,
                    "r": 91,
                    "stroke": "white",
                    "stroke-width": 3
                }, 
                {
                    "type": "circle",
                    "cx": 525,
                    "cy": 325,
                    "r": 91,
                    "stroke": "white",
                    "stroke-width": 3
                }, 
                {
                    "type": "rect",
                    "x": 25,
                    "y": 125,
                    "width": 165,
                    "height": 400,
                    "stroke": "white",
                    "fill": "green",
                    "stroke-width": 3
                }, 
                {
                    "type": "rect",
                    "x": 860,
                    "y": 125,
                    "width": 165,
                    "height": 400,
                    "stroke": "white",
                    "fill": "green",
                    "stroke-width": 3
                }, 
                {
                    "type": "rect",
                    "x": 25,
                    "y": 225,
                    "width": 55,
                    "height": 200,
                    "stroke": "white",
                    "fill": "green",
                    "stroke-width": 3
                }, 
                {
                    "type": "rect",
                    "x": 970,
                    "y": 225,
                    "width": 55,
                    "height": 200,
                    "stroke": "white",
                    "stroke-width": 3
                }, 
                {
                    "type": "rect",
                    "x": 1,
                    "y": 289,
                    "width": 24,
                    "height": 73,
                    "stroke": "white",
                    "stroke-width": 3
                }, 
                {
                    "type": "rect",
                    "x": 1024,
                    "y": 289,
                    "width": 24,
                    "height": 73,
                    "stroke": "white",
                    "stroke-width": 3
                }, 
                {
                    "type": "circle",
                    "cx": 525,
                    "cy": 325,
                    "r": 7,
                    "fill": "white",
                    "stroke-width": 0
                }, 
                {
                    "type": "circle",
                    "cx": 135,
                    "cy": 325,
                    "r": 7,
                    "fill": "white",
                    "stroke-width": 0
                }, 
                {
                    "type": "circle",
                    "cx": 915,
                    "cy": 325,
                    "r": 7,
                    "fill": "white",
                    "stroke-width": 0
                } 
            ],
            "maxPlayers": 11, 
            "playerRadius": 10,
            "shapes": {
                "playerTeam1" :   { "strokerColor": "black",    "fill": "red",      "selectedColor": "black",    "radius": 10,          "style": "circle" },
                "playerTeam2" :   { "strokerColor": "black",    "fill": "black",     "selectedColor": "black",    "radius": 10,          "style": "circle" },
                "ball" :          { "strokerColor": "black",    "fill": "orange",    "selectedColor": "white",    "radius": "14 / 2",    "style": "circle" }
            }
        }
    }

}

window.S = Sport
// TODO : integrate a timeline, with play/forward/etc. functions
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
    currentSport = ( S.sports[sport] !== null && S.sports[sport] !== undefined ) ? sport : this.sport
    if ( S.sports[currentSport] !== null && S.sports[currentSport] !== undefined )
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
    paper.setViewBox(0,0,S.sports[this.sport].viewport.width,S.sports[this.sport].viewport.height,true)
    this.fieldSet = paper.add(S.sports[this.sport].field)
    this.initialiseShapeSet()
}

W.prototype.initialiseShapeSet = function() {

    var currentSport = this.sport

    if (! ( currentSport === null || currentSport === undefined ) ) {

        var playerSize = S.sports[currentSport].playerRadius * 3 ,
            width = S.sports[this.sport].viewport.width
        var initialHorizontalPosition = S.sports[currentSport].maxPlayers * playerSize / 2 + 25,
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
        for(var i = 0; i < S.sports[currentSport].maxPlayers; i+=1) {
            var currentCircle = paper.circle(initialHorizontalPosition + 3 * i * S.sports[currentSport].playerRadius, 
                S.sports[currentSport].playerRadius * 2 + 25, 
                S.sports[currentSport].playerRadius).attr({
                    fill: S.sports[currentSport].shapes.playerTeam1.fill,
                    stroke: S.sports[currentSport].shapes.playerTeam1.strokerColor
                }).drag(move, start, up)
            this.shapeSet.push(currentCircle)
        }

        // team 2
        for(var i = 0; i < S.sports[currentSport].maxPlayers; i+=1) {
            var currentCircle = paper.circle(initialHorizontalPosition + 3 * i * S.sports[currentSport].playerRadius, 
                S.sports[currentSport].playerRadius * 5 + 25, 
                S.sports[currentSport].playerRadius).attr({
                    fill: S.sports[currentSport].shapes.playerTeam2.fill,
                    stroke: S.sports[currentSport].shapes.playerTeam2.strokerColor
                }).drag(move, start, up)
            this.shapeSet.push(currentCircle)
        }

        // ball
        var ball = paper.circle(S.sports[currentSport].viewport.width / 2, S.sports[currentSport].viewport.height / 2, S.sports[currentSport].playerRadius / 1.5)
                .attr({
                    fill: S.sports[currentSport].shapes.ball.fill,
                    stroke: S.sports[currentSport].shapes.ball.strokerColor
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
    var currentStep = this.getStep(indexStep),
        duration = indexStep === 0 ? 100 : 1500

    if (! ( currentStep === null || currentStep === undefined ) ) {
        this.currentStepIndex = indexStep
        var elementWith = this.shapeSet[0]
        var animWith = Raphael.animation(currentStep[0], duration, 'linear', this.playStep(indexStep + 1) )
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