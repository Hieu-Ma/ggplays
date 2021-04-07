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
        genre_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        name: "World of Warcraft",
        description: "Set in the Warcraft fantasy universe, World of Warcraft takes place within the world of Azeroth, approximately four years after the events of the previous game in the series, Warcraft III: The Frozen Throne.",
        year_released: 2004, 
        developer: "Blizzard Entertainment", 
        platforms: "Microsoft Windows, Mac OSX", 
        image_url: "https://upload.wikimedia.org/wikipedia/en/9/91/WoW_Box_Art1.jpg", 
        genre_id: 4, 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      { 
        name: "Super Mega Baseball 3",
        description: "Super Mega Baseball 3 refines the series' formula with the deepest on-field simulation yet, comprehensive offline and online play including Franchise mode and the newly added Online Leagues mode, and vastly improved graphics.",
        year_released: 2020,
        developer: "Metalhead Software Inc.",
        platforms: "Microsoft Windows, Linux",
        image_url: "https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg",
        genre_id: 3,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      { 
        name: "Call of Duty 4: Modern Warfare 4",
        description: "It is the fourth main installment in the Call of Duty series. The game breaks away from the World War II setting of previous entries and is instead set in modern times.",
        year_released: 2007,
        developer: "Infinity Ward",
        platforms: "PlayStation 3, Microsoft Windows, Xbox 360, Wii, Classic Mac OS, Nintendo DS",
        image_url: "https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg",
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: "Persona 5",
        description: "Persona 5 is a role-playing video game developed by Atlus. It is the sixth installment in the Persona series, which is part of the larger Megami Tensei franchise.",
        year_released: 2016,
        developer: "Atlus",
        platforms: "PlayStation 4",
        image_url: "https://image.api.playstation.com/cdn/EP4062/CUSA06638_00/0fSaYhFhEVP183JLTwVec7qkzmaHNMS2.png",
        genre_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: "Bravely Default",
        description: "Bravely Default is a role-playing game (RPG) which features a party of four characters navigating the fantasy world of Luxendarc.",
        year_released: 2012,
        developer: "Silicon Studio",
        platforms: "Nintendo 3DS",
        image_url: "https://www.wallpapertip.com/wmimgs/21-210147_bravely-default.jpg",
        genre_id: 4, 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        name: "Red Dead Redemption 2", 
        description: "Red Dead Redemption is a 2010 action-adventure game developed by Rockstar San Diego and published by Rockstar Games.",
        year_released: 2010,
        developer: "Rockstar North",
        platforms: "PlayStation 3, Xbox 360",
        image_url: "https://images7.alphacoders.com/749/thumb-1920-749807.png",
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Control",
        description: "The game revolves around the Federal Bureau of Control (FBC), a secret U.S. government agengy tasked with containing and studying phenomena that violate the laws of reality",
        year_released: 2019,
        developer: "Remedy Entertainment",
        platforms: "Microsoft Windows",
        image_url: "https://thumbnails.pcgamingwiki.com/6/65/Control_cover.png/600px-Control_cover.png",
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bioshock Infinite",
        description: "The game is set in the year 1912 and follows its protagonist, former Pinkerton agent Booker DeWitt, who is sent to the airborne city of Columbia to find a young woman, Elizabeth, who has been held captive there for most of her life.",
        year_released: 2013,
        developer: "Irrational Games",
        platforms: "Microsoft Windows, Playstation 3, Xbox 360, PlayStation 4, Xbox One, OS X, Linus, Nintendo Switch",
        image_url: "https://upload.wikimedia.org/wikipedia/en/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg",
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Assassin's Creed II",
        description: "The plot is set in a fictional history setting and follows the centuries-old struggle between the Assassins, who fight for peace with free will, and the Knights Templar, who desire peace through control. The framing story is set in the 21st century and follows Desmond Miles as he relives the genetic memories of his ancestor Ezio Auditore da Firenze.",
        year_released: 2009,
        developer: "Ubisoft Montreal",
        platforms: "PlayStation 3, Xbox 360, Microsoft Windows, Mac OS X, PlayStation 4, Xbox One",
        image_url: "https://upload.wikimedia.org/wikipedia/en/7/77/Assassins_Creed_2_Box_Art.JPG",
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pokemon Yellow",
        description: "Pokémon Yellow Version: Special Pikachu Edition, more commonly known as Pokémon Yellow Version, is a 1998 role-playing video game developed by Game Freak and published by Nintendo for the Game Boy.",
        year_released: 1998,
        developer: "Game Freak",
        platforms: "Game Boy, Nintendo 3DS",
        image_url: "https://cdn.wallpapersafari.com/6/45/4NB0vo.png",
        genre_id: 4,
        createdAt: new Date(),
        updatedAt: new Date() },
      {
        name: "Half-Life",
        description: "Players assume the role of Gordon Freeman, a scientist who must escapte the Black Mesa Research Facility after it is invaded by aliens. The core gameplay consists of fighting alien and human enemies with a variety of weapons and solving puzzles.",
        year_released: 1998,
        developer: "Valve",
        platforms: "Microsoft Windows, PlaysStation 2, OS X, Linux", 
        image_url: "https://upload.wikimedia.org/wikipedia/en/f/fa/Half-Life_Cover_Art.jpg", 
        genre_id: 1, 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        name: "Overwatch",
        description: "Described as a \"hero shooter\", Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as \"heroes\", with unique abilities.",
        year_released: 2019,
        developer: "Blizzard Entertainment",
        platforms: "Windows, PS4, Xbox One, Nintendo Switch", 
        image_url: "https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg", 
        genre_id: 1, 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        name: "Dark Souls 3",
        description: "Dark Souls III is an action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment for PlayStation 4, Xbox One, and Microsoft Windows.",
        year_released:2016,
        developer:"FromSoftware, Inc.",
        platforms:"PlayStation 4, Xbox one, Microsoft Windows",
        image_url:"https://i.pinimg.com/originals/cb/10/9d/cb109d5d1402ae804422a89aa168da00.jpg",
        genre_id:4,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: "Tom Clancy's Rainbow Six Siege",
        description: "The game puts heavy emphasis on environmental destruction and cooperation between players. Each player assumes control of an attacker or a defender in different gameplay modes such as rescuing a hostage, defusing a bomb, and taking control of an objective within a room.",
        year_released: 2015,
        developer: "Ubisoft",
        platforms: "Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S",
        image_url: "https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg",
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Madden NFL 08",
        description: "It features the former Tennessee Titans quarterback Vince Young on the cover; San Diego Chargers defensive end Luis Castillo was the cover athlete for the Spanish-language version. This was the first Madden game made for 11 different platforms.",
        year_released: 2007,
        developer: "EA Tiburon",
        platforms: "GameCube, Microsoft Windows, Mobile phone,[1] Nintendo DS, OS X,[2] PlayStation 2, PlayStation 3, PlayStation Portable, Wii, Xbox, Xbox 360",
        image_url: "https://upload.wikimedia.org/wikipedia/en/4/4c/Madden_NFL_08_Coverart.png",
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "NBA 2K21",
        description: "NBA 2K21 is a basketball game simulation video game that was developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association. It is the 22nd installment in the NBA 2K franchise and the successor to NBA 2K20",
        year_released: 2020,
        developer: "Visual Concepts",
        platforms: "PlayStation 4, Xbox One, Android, PlayStation 5",
        image_url: "https://cdn.akamai.steamstatic.com/steam/apps/1225330/ss_4d48f01cd6c486a937f70ef2361f57d68d75f03f.1920x1080.jpg?t=1614622937",
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "FIFA 17",
        description: "FIFA 17 is a sports video game in the FIFA series developed and published by Electronic Arts, that was released in September 2016. This is the first FIFA game in the series to use the Frostbite game engine.[3] Borussia Dortmund midfielder Marco Reus serves as the cover athlete on the game.",
        year_released: 2016,
        developer: "EA Sports",
        platforms: "PlayStation 3, Microsoft Windows, Xbox 360, Xbox One",
        image_url: "https://images-na.ssl-images-amazon.com/images/I/81qSA9r3dAL._SL1500_.jpg",
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "NHL 21",
        description: "NHL 21 is an ice hockey simulation video game developed by EA Vancouver and published by EA Sports. It is the 30th installment in the NHL game series and was released for the PlayStation 4 and Xbox One consoles in October 2020.",
        year_released: 2020,
        developer: "EA Vancouver",
        platforms: "PlayStation 4, Xbox One",
        image_url: "https://s3951.pcdn.co/wp-content/uploads/2015/09/NHL21BWLogo.jpg",
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Super Mario Strikers",
        description: "Super Mario Strikers, known as Mario Smash Football in Europe and Australia, is a five-on-five football game developed by Next Level Games for the GameCube.",
        year_released: 2005,
        developer: "Next Level Games",
        platforms: "GameCube",
        image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Supermariostrikersbox.jpg/220px-Supermariostrikersbox.jpg",
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "GTA 5",
        description: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV.",
        year_released: 2013,
        developer: "Rockstars Games",
        platforms: "PlayStation 4, Xbox One, PlayStation 3, Xbox 360, Xbox Series X and Series S, Microsoft Windows, PlayStation 5",
        image_url: "https://cdn1.dotesports.com/wp-content/uploads/2019/03/22081728/52a03db4019d1fb82e52cbc46fe7d646.jpg",
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Horizon Zero Dawn",
        description: "Horizon Zero Dawn is a 2017 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a young hunter in a world overrun by machines, who sets out to uncover her past.",
        year_released: 2017,
        developer: "Guerrilla Games",
        platforms: "PlayStation 4, Microsoft Windows",
        image_url: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0221/vC7trMorHJgbImp8PCQvpI0p.png",
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "God of War",
        description: "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. Released worldwide on April 20, 2018, for the PlayStation 4, it is the eighth installment in the God of War series, the eighth chronologically, and the sequel to 2010's God of War III. ",
        year_released: 2018,
        developer: "Santa Monica Studio",
        platforms: "PlayStation 4",
        image_url: "https://kbimages1-a.akamaihd.net/920aaf42-d067-4437-8cea-e10fa87de121/1200/1200/False/god-of-war-4-1.jpg",
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Batman: Arkham City",
        description: "The game is presented from the third-person perspective with a primary focus on Batman's combat and stealth abilities, detective skills, and gadgets that can be used in both combat and exploration. Batman can freely move around the Arkham City prison, interacting with characters and undertaking missions, and unlocking new areas by progressing through the main story or obtaining new equipment.",
        year_released: 2011,
        developer: "Rocksteady Studios",
        platforms: "PlayStation 3, Xbox 360, Microsoft Windows, Wii U, OS X, PlayStation 4, Xbox One,",
        image_url: "https://upload.wikimedia.org/wikipedia/en/0/00/Batman_Arkham_City_Game_Cover.jpg",
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});

  }
};
