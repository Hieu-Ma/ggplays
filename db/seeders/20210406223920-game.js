'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Games', [
        {
          name: "Counter-Strike",
          description: "Counter-Strike is a series of multiplayer first-person shooter video games in which teams of terrorists battle to perpetrate an act of terror while counter-terrorists try to prevent it.",
          year_released: 2012,
          developer: "Valve Corporation",
          platforms: "Microsoft, Windows, macOS, Linux, PlayStation 3, Xbox, Xbox 360",
          image_url: "https://gamerssuffice.com/wp-content/uploads/2020/07/Counter-Strike-Global-Offensive-780x405.jpg",
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
       },
      {
        name: "The Legend of Zelda: Breath of the Wild",
        description: "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Breath of the Wild is part of the Legend of Zelda franchise and is set at the end of the Zelda timeline; the player controls Link, who awakens from a hundred-year slumber to defeat Calamity Ganon and save the kingdom of Hyrule.",
        year_released: 2017,
        developer: "Nintendo",
        platforms: "Wii U, Nintendo Switch",
        image_url: "https://th.bing.com/th/id/R222790d158fc551130c2427bcdf03e63?rik=EOMTGtQoLYj0Lg&riu=http%3a%2f%2fwww.zelda.com%2fbreath-of-the-wild%2fassets%2fmedia%2fwallpapers%2fdesktop-1.jpg&ehk=nq7Q43VP%2fAb7UOn%2bkf28XLn%2bFzDfwN4DpFcSQo8pCJQ%3d&risl=&pid=ImgRaw",
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Fortnite",
        description: "Fortnite is an online video game, available in three distinct game mode versions that otherwise share the same general gameplay and game engine.",
        year_released: 2017,
        developer: "Psyonix",
        platforms: "Windows, macOS, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, iOS, Android",
        image_url: "https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg",
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rocket League",
        description: "Described as 'soccer, but with rocket-powered cars', Rocket League has up to eight players assigned to each of the two teams, using rocket-powered vehicles to hit a ball into their opponent's goal and score points over the course of a match. The game includes single-player and multiplayer modes that can be played both locally and online, including cross-platform play between all versions.",
        year_released: 2015,
        developer: "Psyonix",
        platforms: "Microsoft Windows, macOS, Linux, PlayStation 4, Xbox One, PlayStation5, Nintendo Switch",
        image_url: "https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg",
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tony Hawk's Pro Skater 2",
        description: "Tony Hawk's Pro Skater 2 was critically acclaimed upon release and is considered one of the greatest video games of all time, as well as the highest-rated sports video game. All versions of the game were praised, including its addictive gameplay, large environments, detailed graphics, fluid and precise controls, customization features and soundtrack, with some minor criticisms directed at the lack of a first-person camera and the truncated soundtrack of the Nintendo 64 version.",
        year_released: 2000,
        developer: "Neversoft",
        platforms: "PlayStation, Microsoft Windows, Game Boy Color, Dreamcast, Game Boy Advance, Mac OS, Nintendo 64, iOS",
        image_url: "https://upload.wikimedia.org/wikipedia/en/4/41/Tony_Hawk%27s_Pro_Skater_2_cover.png",
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Valorant",
        description: "Valorant is a team-based tactical shooter and first-person shooter set in the near future. Players play as one of a set of agents, characters designed based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it.",
        year_released: 2020,
        developer: "Riot Games",
        platforms: "Microsoft Windows",
        image_url: "https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg",
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Skyrim",
        description: "The Elder Scrolls V: Skyrim is an open world action role-playing video game It is the fifth main installment in The Elder Scrolls series, following 2006's The Elder Scrolls IV: Oblivion. The game's main story revolves around the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world.",
        year_released: 2011,
        developer: "Bethesda Game Studios",
        platforms: "Microsoft Windows, Play Station 3, Xbox 360, Play Station 4, Xbox One, Nintendo Switch",
        image_url: "https://hb.imgix.net/12d1d9ac840e649ca0d749b0e5d8b403d310b10e.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=ea7b42b6e2b1535675ccca94ba8c0b95",
        genre_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Outriders",
        description: "Outriders is a cooperative role-playing third-person video game. In the beginning of the game, players create their custom characters and choose from four classes, each of them has unique abilities that the players can utilize. As the players explore, they can explore different hub areas, talk to non-playable characters and complete side missions. Players combat both monsters and human enemies. As the player progresses, the world level (the game's equivalent to gameplay difficulty) will increase.",
        year_released: 2021,
        developer: "People Can Fly",
        platforms: "PlayStation 4, Microsoft Windows, Xbox One, Xbox Series X and Series S, PlayStation 5, Google Stadia",
        image_url: "https://i.ytimg.com/vi/ZUb-UM2IfXc/maxresdefault.jpg",
        genre_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Super Smash Bros. Melee",
        description: "Super Smash Bros. Melee is a 2001 crossover fighting video game. It is the second installment in the Super Smash Bros. series. It features characters from Nintendo video game franchises such as Mario, The Legend of Zelda, Star Fox and Pokémon. The stages and gameplay modes reference or take designs from these franchises as well. Melee's gameplay system offers an unorthodox approach to the fighting game genre, with a counter that measures damage with increasing percentages, representing the knockback the character will experience, rather than a depleting health bar seen in most fighting games.",
        year_released: 2001,
        developer: "Hal Laboratory",
        platforms: "GameCube",
        image_url: "https://upload.wikimedia.org/wikipedia/en/7/75/Super_Smash_Bros_Melee_box_art.png",
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Minecraft",
        description: "In Minecraft, players explore a blocky, procedurally-generated 3D world with infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures or earthworks.",
        year_released: 2011,
        developer: "Mojang",
        platforms: "Windows, OS X, Linux",
        image_url: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        genre_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Games', null, {});

  }
};
