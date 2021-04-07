'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Reviews', [
      { title: "The game is pretty good", score: 90, description: "Even though people are devided about the graphics I love them. The game is a lot like csgo but at the same time not at all. Its way easier and more forgiving. What i really like about valorant are the frequent updates and communication between players and devs.The game is not perfect but what did you expect, its a brand new game.But it has a great team of devs behind it and i expect that they are gonna keep adding great content fix some annoying bugs and start to polish this already good game. But by far the biggest con is the the horrendously intrusive anti - cheat. I get why they are using it but it if you are using a kernel anti - cheat it has to be effective, but it just isn't.", user_id: 1, game_id: 6, pro_id: 1, con_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { title: "BAD SERVERS", score: 30, description: "No serves. Bad connection. You want to take over cs-go spot please give us servers. Even Escape of Tolkov has servers in my country", user_id: 5, game_id: 6, pro_id: 20, con_id: 19, createdAt: new Date(), updatedAt: new Date() },
      { title: "It's amazing!", score: 100, description: "Valorant is an amazing game, it is a great 5v5 fps game. It is an upgraded CSGO with precise gunplay. This game is very entertaining and has Esport tournament, there are any well known orgs that compete. It is an extremely good game to play with friends with a great party system. I recommend this game to all users especially ones from Overwatch or CSGO looking for a similar feeling game but new and updated.", user_id: 3, game_id: 6, pro_id: 9, con_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { title: "Honest review after 15 years", score: 60, description: "After 15 years, this game has improved in almost every aspect. There is nostalgia attached to this game, like many, and there always will be for people who played it.", user_id: 7, game_id: 11, pro_id: 19, con_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { title: "Everything about it is great", score: 100, description: "Years later, I've got my own laptop and now play it myself, and it still holds that same magic as it did when I was little. The music, scenery, characters, animation, everything is great. I like going around places doing quests because the storyline is interesting, and collecting ores and herbs to sell in the auction house, but if you just like fighting and action there are options for that to. The point is, its great for all types of players. I really do love this game.", user_id: 8, game_id: 11, pro_id: 14, con_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { title: "Good old classic nostalgia", score: 70, description: "Anyway the game itself has that good old classic nostalgia, fair to say its a success, the resolution was fixed thankfully for new generation screens. You can also get a membership and play classic and then jump to battle for azeroth if you desire, or even potentially play for free under level 20 forever.", user_id: 6, game_id: 11, pro_id: 15, con_id: 11, createdAt: new Date(), updatedAt: new Date() },
      { title: "Great purchase compared to original!", score: 90, description: "Super Mega Baseball 3 is a fun experience that adds a ton of content in comparison to the original (and even to the sequel though the comparison is a lot more fuzzy between those two games) and while it still retains some small problems throughout the franchise, the third game is by far the best of the series and worth buying for Baseball fans, at full small or on a small 25-30% discount as the 39,99€ price tag can be really steep for a casual player.", user_id: 9, game_id: 12, pro_id: 6, con_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { title: "A less serious option", score: 80, description: "If you didn’t want a complex simulation of the real thing like MLB The Show, you could find baseball games featuring robots, little kids, or even living bobbleheads. Most of those have gone the way of the dodo now, but Super Mega Baseball 3 throws it back, not only by offering a less serious option but by recapturing some old favorite retro-style pick-up-and-play gameplay and features.", user_id: 10, game_id: 12, pro_id: 9, con_id: 10, createdAt: new Date(), updatedAt: new Date() },
      { title: "Let’s be honest, there is very little wrong with SMB3. “The bad” section is more of a wishlist for SMB4 than a hardline critique. That said, here we go.", score: 85, description: "The SMB series has become one of the most consistent, and well-developed sports gaming franchises available. It has grown from a decent, lighthearted baseball option on Xbox, PC, and now Switch, to a full-fledged title of interest on every platform–even PlayStation.", user_id: 2, game_id: 12, pro_id: 13, con_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { title: "A must have", score: 100, description: "Overall its a must have for anyone who has any interest in the FPS genre.", user_id: 11, game_id: 13, pro_id: 1, con_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { title: "Amazing All Round", score: 90, description: "Call Of Duty 4: Modern Warfare is the first ever Call Of Duty Game set in the modern era and day which is a massive step up in actual fact, the game is well executed and crafted in many different places and is arguably one of the best Call Of Duty Game ever made in history.", user_id: 14, game_id: 13, pro_id: 10, con_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { title: "The bar has been raised for the open world genre", score: 90, description: "The Zelda series needs no introduction, and neither does its latest installment, Breath of the Wild (BotW). Nintendo did the same thing they did with Twilight Princess and released it as both the final great game for their previous console (the Wii U) and as a fantastic launch game for their new console (Switch). On the surface, this is about as generic as you can get for a Zelda game. Zelda is in peril and you must ultimately defeat Ganon to save the world. But BotW’s brilliance lies in its execution of ideas new and old, and the result is an open world game that is truly open.", user_id: 15, game_id: 2, pro_id: 14, con_id: 20, createdAt: new Date(), updatedAt: new Date() },
      { title: "New idea for Zelda breath of the wild game", score: 80, description: "When you finish the game and kill dark beast Ganon, how about everything that is in ruins goes back to normal and you can roam and explore and see what it was like before Ganon destroyed everything, and all types of guardians went onto your side. I thought this was a great game and want to keep playing it even though I have completed it so it would be good to explore freely now that I've finished the game.", user_id: 7, game_id: 2, pro_id: 6, con_id: 20, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
