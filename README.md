# ProjectKnight002
Project Knight is the codename of an effort to recreate the old school MUDS (Multi User Dungeon) text RPGs onto newer
tech stacks. 

## History
Project Knight was born on March 2015.  The team was new to programming and was learning Javascript.  The popular Meteor web app framework
was used to create a single-player text game with a branching dialogue engine and quest engine coded on top of Meteor. 

## Project Overview
This second attempt at a text RPG will be coded ground up without any use of frameworks. It was started mid December 2016. This iteration of the project will use an object oriented
architecture, later to be refactored to Entity-Component-System architecture when complexity hits a suitable inflection point. It will be built
incrementally following the below milestones:
  1. In memory storage of gamedata with ability to snapshot the world state to be saved onto a file in JSON format.
  2. Builder dashboard to create zones served onto a web browser using websockets.
  3. Game player view to be served onto a web browser using websockets.

## Project Scope
The scope of this project is to have a simple 30-room world where 2 or more players can walk around and chat in each individual rooms.

## Technologies
  *Node
