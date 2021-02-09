const { rawListeners } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  // TODO: Save each answer in the profile as a property to structure the profile
  profile.name = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    profile.activity = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      profile.listensTo = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        profile.favMeal = answer;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          profile.favFood = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            profile.favSport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              profile.power = answer;
              console.log(`${profile.name} loves listening to ${profile.listensTo} while ${profile.activity}, devouring ${profile.favFood} for ${profile.favMeal}, prefers ${profile.favSport} over any other sport, and is amazing at ${profile.power} at inopportune times.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});