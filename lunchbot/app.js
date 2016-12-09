'use strict';

process.env.DEBUG = 'actions-on-google:*';

let ActionsSdkAssistant = require('actions-on-google').ActionsSdkAssistant;
let express = require('express');
let bodyParser = require('body-parser');

const YESNO_INTENT = 'yesno.input';

let app = express();
app.set('port', (process.env.PORT || 8080));
app.use(bodyParser.json({type: 'application/json'}));

let things = ["A Cheesesteak", "A Meatball Sub", "Some Spaghetti", "A Chicken Carbonara", "Some Chicken Parm", "A Pizza", "A Burrito", "A Bacon Cheeseburger", "Some Dumplings", "Some Chipotle Chicken", "Mac And Cheese Because It's Awesome", "Some Chili Cheese Dogs", "A Chicken Bacon Ranch Sandwich", "A Salad, Fatty!", "Some '); DROP TABLE FOOD;", "Some General Tsao's Chicken", "Some Sweet-and-Sour Chicken", "Some Sesame Chicken", "Some Meat On A Stick", "SIERRA FOXTROT BACON TURKEY BRAVO", "Grilled Cheese and Tomato Soup", "McPotato Soup in a Bread Bowl", "A Gross Hot Pocket", "Pad See-Ew", "Chicken Caesar Wrap", "Chicken Tikka Masala", "Drunken Noodles"];

app.post('/', function (request, response) {
  console.log('handle post');
  const assistant = new ActionsSdkAssistant({request: request, response: response});

  function mainIntent (assistant) {
	let thing = things[Math.floor(Math.random()*things.length)].toLowerCase();
	let inputPrompt = assistant.buildInputPrompt(true, '<speak>You should eat ' + thing + '. Would you like another suggestion?</speak>');
    assistant.ask(inputPrompt, [{'intent': YESNO_INTENT}]);
  }

  function yesnoInput (assistant) {
    if (assistant.getRawInput() === 'no') {
      assistant.tell('Have a nice lunch!');
    } else {
	   assistant.tell('Fuck you. Ok...');
	  mainIntent(assistant);
    }
  }

  let actionMap = new Map();
  actionMap.set(assistant.StandardIntents.MAIN, mainIntent);
  actionMap.set(YESNO_INTENT, yesnoInput);

  assistant.handleRequest(actionMap);
});

// Start the server
let server = app.listen(app.get('port'), function () {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
