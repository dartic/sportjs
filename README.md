# Sport JS
JS Library to design graphically training exercices

This library is in beta. Don't use it for production environment !

## What is it ?

Sport JS facilitate the design of spatial situations, for sport purpose.
It integrates 3 sports for the moment :
- football
- handball
- 'foot en salle'

You can place 'players' on a field, and move them step by step.

You can export the 'steps' and then store it somewhere, or not :-)

## Dependencies

It uses the RaphaelJS library.
Please import this library before using Sport JS.

## Demo

Go to [opentrainer](http://www.opentrainer.fr/#/create), an open source project (it's in beta, so sources are coming really soon) which aim is to make better training sessions for sport's team, and trainer !

Or, clone the repo !

* you must have gulp and bower installed... or not :


    npm install bower gulp -g


* then, clone the repo


    git clone https://github.com/mdartic/sportjs

    bower install

* then, open the file 'demo/demo.html' with your favorite browser

## How you can make it works ?

### The beginning

Inspire you from the demo !

First, you have to create a div element with an id. Let's say the id is 'canvas'.

Then, write some lines of JavaScript :

    var workspace = new W()

    workspace.initialise("canvas", "100%", "100%", "handball")

Great ! You just instantiate the div with a new handball fieldset, and 14 players !

You can add some controls on the workspace with just a few more lines :

    var previous = function() {
  		workspace.previousStep()
  	},
  	next = function() {
  		workspace.nextStep()
  	},
  	add = function() {
  		workspace.addStep()
  	},
  	del = function() {
  		workspace.deleteCurrentStep()
  	},
  	play = function() {
  		workspace.play()
  	}

### Second chapter (wip)

SportJS is composed of two main objects :

* Sports
* Workspace

#### Sports

This object contain the definition of the available sports : handball, football, and 'foot-en-salle' (in French).

#### Workspace

This object allow you to build a graphical zone, thanks to RaphaelJS, to represent a fieldset, players and a ball.

Then you can record 'steps', thanks to the different methods :

##### Workspace.initialise()
##### Workspace.previousStep()
##### Workspace.nextStep()
##### Workspace.addStep()
##### Workspace.deleteCurrentStep()
##### Workspace.play()
##### Workspace.updateFieldSet()
##### Workspace.exportData()
##### Workspace.importData()
##### ... to be completed & explain



## Support

Author : Mathieu Dartigues
Twitter: @mdartic

Please file issues here at Github

This software is licensed under the MPL-2.0 licence
