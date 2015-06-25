
var Sports = {

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

window.S = Sports