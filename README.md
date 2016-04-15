# MeteorDust
http://meteortips.com/first-meteor-tutorial/
Notes:
* File structure is defined differently in default
  - No need for isClient / isServer blocks
  - `new Mongo.Collection` has to be declared in both client and server main.js files?
* Had to download sessions package for sessions to work
  - `meteor add session`
* Had to look up how to clear forms that have been stripped of default behavior
  - It was too annoying and weird to go in and delete the contents of the form after submission
  - Add last line to 'submit form' event function: `event.target.reset();`

Last Updated: APR-05-2016
