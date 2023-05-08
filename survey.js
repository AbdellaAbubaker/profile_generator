const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
        rl.question("What's an activity you like doing? ", (activity) => {
          rl.question("What do you listen to while doing that? ", (music) => {
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
              rl.question("What's your favourite thing to eat for that meal? ", (food) => {
                rl.question("Which sport is your absolute favourite? ", (sport) => {
                  rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
                    const profile = `Name: ${name}\n` +
                                    `Activity: ${activity}\n` +
                                    `Music: ${music}\n` +
                                    `Favorite Meal: ${meal}\n` +
                                    `Favorite Food: ${food}\n` +
                                    `Favorite Sport: ${sport}\n` +
                                    `Superpower: ${superpower}`;
      
                    console.log('\nProfile:');
                    console.log(profile);
      
                    rl.close();
                  });
                });
              });
            });
          });
        });
      });
    });