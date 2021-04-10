'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [
      { name: "Counter-Strike", description: "Counter-Strike is a first-person shooter game in which players join either the terrorist team, the counter-terrorist team, or become spectators. Each team attempts to complete their mission objective and/or eliminate the opposing team. Set in various locations around the globe, players assume the roles of counter-terrorist forces and terrorist militants opposing them. During each round of gameplay, the two teams are tasked with defeating the other by the means of either achieving the map's objectives or eliminating all of the enemy combatants.", year_released: 2012, developer: "Valve Corporation", platforms: "Microsoft Windows, macOS, Linux, PlayStation 3, Xbox, Xbox 360", image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1txv.jpg", genre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Zelda: BOTW", description: "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Breath of the Wild is part of the Legend of Zelda franchise and is set at the end of the Zelda timeline; the player controls Link, who awakens from a hundred-year slumber to defeat Calamity Ganon and save the kingdom of Hyrule.", year_released: 2017, developer: "Nintendo", platforms: "Wii U, Nintendo Switch", image_url: "https://i.pinimg.com/originals/91/39/81/913981f5b6ba95ce61178b0710d43175.jpg", genre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Fortnite", description: "Fortnite is an online video game. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative hybrid-tower defense-shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with traps and fortifications they can build; Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas.", year_released: 2017, developer: "Epic Games", platforms: "Windows, macOS, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, iOS, Android", image_url: "https://gamepedia.cursecdn.com/fortnite_gamepedia/5/5e/BRBoxImage.jpg", genre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Rocket League", description: "Described as \"soccer, but with rocket - powered cars\", Rocket League has up to eight players assigned to each of the two teams, using rocket-powered vehicles to hit a ball into their opponent's goal and score points over the course of a match. The game includes single-player and multiplayer modes that can be played both locally and online, including cross-platform play between all versions.", year_released: 2015, developer: "Psyonix", platforms: "Microsoft Windows, macOS, Linux, PlayStation 4, Xbox One, PlayStation5, Nintendo Switch", image_url: "https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-s2-1200x1600-b1aecb2c82d9.jpg", genre_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: "Tony Hawk: PS 2", description: "Tony Hawk's Pro Skater 2 was critically acclaimed upon release and is considered one of the greatest video games of all time, as well as the highest-rated sports video game. All versions of the game were praised, including its addictive gameplay, large environments, detailed graphics, fluid and precise controls, customization features and soundtrack, with some minor criticisms directed at the lack of a first-person camera and the truncated soundtrack of the Nintendo 64 version.", year_released: 2000, developer: "Neversoft", platforms: "PlayStation, Microsoft Windows, Game Boy Color, Dreamcast, Game Boy Advance, Mac OS, Nintendo 64, iOS", image_url: "https://blockchainworldconference.io/wp-content/uploads/2021/02/egs-tonyhawksproskater12-vicariousvisions-s6-1200x1600-914784345-1170x1560.jpg", genre_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: "Valorant", description: "Valorant is a team-based tactical shooter and first-person shooter set in the near future. Players play as one of a set of agents, characters designed based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it.", year_released: 2020, developer: "Riot Games", platforms: "Microsoft Windows", image_url: "https://s3-cdn.mogul.gg/gameasset/d5d233c3-e34e-4a86-ad48-73490e4762bd.png", genre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Skyrim", description: "The Elder Scrolls V: Skyrim is an open world action role-playing video game It is the fifth main installment in The Elder Scrolls series, following 2006's The Elder Scrolls IV: Oblivion. The game's main story revolves around the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world.", year_released: 2011, developer: "Bethesda Game Studios", platforms: "Microsoft Windows, Play Station 3, Xbox 360, Play Station 4, Xbox One, Nintendo Switch", image_url: "https://d1x7zurbps6occ.cloudfront.net/product/xlarge/531440-154653.jpg", genre_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: "Outriders", description: "Outriders is a cooperative role-playing third-person video game. In the beginning of the game, players create their custom characters and choose from four classes, each of them has unique abilities that the players can utilize. As the players explore, they can explore different hub areas, talk to non-playable characters and complete side missions. Players combat both monsters and human enemies. As the player progresses, the world level (the game's equivalent to gameplay difficulty) will increase.", year_released: 2021, developer: "People Can Fly", platforms: "PlayStation 4, Microsoft Windows, Xbox One, Xbox Series X and Series S, PlayStation 5, Google Stadia", image_url: "https://cdn2.unrealengine.com/egs-outriders-peoplecanfly-s4-1200x1600-723857823.jpg", genre_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: "SSB Melee", description: "Super Smash Bros. Melee is a 2001 crossover fighting video game. It is the second installment in the Super Smash Bros. series. It features characters from Nintendo video game franchises such as Mario, The Legend of Zelda, Star Fox and Pokémon. The stages and gameplay modes reference or take designs from these franchises as well. Melee's gameplay system offers an unorthodox approach to the fighting game genre, with a counter that measures damage with increasing percentages, representing the knockback the character will experience, rather than a depleting health bar seen in most fighting games.", year_released: 2001, developer: "Hal Laboratory", platforms: "GameCube", image_url: "https://upload.wikimedia.org/wikipedia/en/7/75/Super_Smash_Bros_Melee_box_art.png", genre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Minecraft", description: "In Minecraft, players explore a blocky, procedurally-generated 3D world with infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures or earthworks.", year_released: 2011, developer: "Mojang", platforms: "Windows, OS X, Linux", image_url: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png", genre_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: "World of Warcraft", description: "Set in the Warcraft fantasy universe, World of Warcraft takes place within the world of Azeroth, approximately four years after the events of the previous game in the series, Warcraft III: The Frozen Throne.", year_released: 2004, developer: "Blizzard Entertainment", platforms: "Microsoft Windows,  Mac OSX", image_url: "https://upload.wikimedia.org/wikipedia/en/9/91/WoW_Box_Art1.jpg", genre_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: "SM Baseball 3", description: "Super Mega Baseball 3 refines the series' formula with the deepest on-field simulation yet, comprehensive offline and online play including Franchise mode and the newly added Online Leagues mode, and vastly improved graphics.", year_released: 2020, developer: "Metalhead Software Inc.", platforms: "Microsoft Windows, Linux", image_url: "https://th.bing.com/th/id/OIP.qtAwgqCZQtojVtmn90-a2gAAAA?pid=ImgDet&rs=1", genre_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: "Call of Duty 4: MW", description: "Armed with an arsenal of advanced and powerful modern-day firepower, players are transported to treacherous hotspots around the globe to take on a rogue enemy group threatening the world. As both a U.S. Marine and British S.A.S. soldier fighting through an unfolding story full of twists and turns, players use sophisticated technology, superior firepower, and coordinated land and air strikes on a battlefield where speed, accuracy, and communication are essential to victory.", year_released: 2007, developer: "Infinity Ward", platforms: "PlayStation 3, Microsoft Windows, Xbox 360, Wii, Classic Mac OS, Nintendo DS", image_url: "https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg", genre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Persona 5", description: "Persona 5 is a game about the internal and external conflicts of a group of troubled high school students - the protagonist and a collection of compatriots he meets in the game's story - who live dual lives as Phantom Thieves. They have the typically ordinary day-to-day of a Tokyo high schooler - attending class, after school activities and part-time jobs. But they also undertake fantastical adventures by using otherworldly powers to enter the hearts of people.", year_released: 2016, developer: "Atlus", platforms: "PlayStation 4", image_url: "https://wallpapercave.com/wp/wp1918217.jpg", genre_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: "Bravely Default", description: "Enter a brave new world of turn-based combat! Time your turns tactically and turn the tides in your favor with the new Brave and Default system. Flex your strategic muscle by combining more than twenty jobs with hundreds of different abilities. Summon friend’s characters to fight by your side, or borrow their abilities", year_released: 2012, developer: "Silicon Studio", platforms: "Nintendo 3DS", image_url: "https://th.bing.com/th/id/OIP.QfoKqzRaLPK9NDoke1oL5wHaJM?pid=ImgDet&rs=1", genre_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: "RDR", description: "The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.", year_released: 2010, developer: "Rockstar North", platforms: "PlayStation 3, Xbox 360", image_url: "https://upload.wikimedia.org/wikipedia/en/a/a7/Red_Dead_Redemption.jpg", genre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Control", description: "The game revolves around the Federal Bureau of Control (FBC), a secret U.S. government agengy tasked with containing and studying phenomena that violate the laws of reality. Can you handle The Bureau's dark secrets? Unfold an epic supernatural struggle, filled with unexpected characters and bizarre events, as you search for your missing brother, and discover the truth that has brought you here. ", year_released: 2019, developer: "Remedy Entertainment", platforms: "Microsoft Windows", image_url: "https://media.playstation.com/is/image/SCEA/control-poster-01-ps4-us-11sep19?$native_nt$", genre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Bioshock Infinite", description: "The game is set in the year 1912 and follows its protagonist, former Pinkerton agent Booker DeWitt, who is sent to the airborne city of Columbia to find a young woman, Elizabeth, who has been held captive there for most of her life.", year_released: 2013, developer: "Irrational Games", platforms: "Microsoft Windows, Playstation 3, Xbox 360, PlayStation 4, Xbox One, OS X, Linus, Nintendo Switch", image_url: "https://upload.wikimedia.org/wikipedia/en/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg", genre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Assassin's Creed II", description: "The plot is set in a fictional history setting and follows the centuries-old struggle between the Assassins, who fight for peace with free will, and the Knights Templar, who desire peace through control. The framing story is set in the 21st century and follows Desmond Miles as he relives the genetic memories of his ancestor Ezio Auditore da Firenze.", year_released: 2009, developer: "Ubisoft Montreal", platforms: "PlayStation 3, Xbox 360, Microsoft Windows, Mac OS X, PlayStation 4, Xbox One", image_url: "https://upload.wikimedia.org/wikipedia/en/7/77/Assassins_Creed_2_Box_Art.JPG", genre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Pokemon Yellow", description: "Pokémon Yellow Version: Special Pikachu Edition, more commonly known as Pokémon Yellow Version, is a 1998 role-playing video game developed by Game Freak and published by Nintendo for the Game Boy.", year_released: 1998, developer: "Game Freak", platforms: "Game Boy, Nintendo 3DS", image_url: "https://s2.gaming-cdn.com/images/products/3550/orig/pokemon-yellow-version-special-pikachu-edition-3ds-cover.jpg", genre_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: "Half-Life", description: "Players assume the role of Gordon Freeman, a scientist who must escapte the Black Mesa Research Facility after it is invaded by aliens. The core gameplay consists of fighting alien and human enemies with a variety of weapons and solving puzzles.", year_released: 1998, developer: "Valve", platforms: "Microsoft Windows, PlaysStation 2, OS X, Linux", image_url: "https://upload.wikimedia.org/wikipedia/en/f/fa/Half-Life_Cover_Art.jpg", genre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Overwatch", description: "Described as a \"hero shooter\", Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as \"heroes\", with unique abilities. The world needs heroes. Join over 40 million players as you take your place in the world of Overwatch. Choose your hero from a diverse cast of soldiers, scientists, adventurers, and oddities. Bend time, defy physics, and unleash an array of extraordinary powers and weapons. Engage your enemies in iconic locations from around the globe in the ultimate team-based shooter.", year_released: 2019, developer: "Blizzard Entertainment", platforms: "Windows, PS4, Xbox One, Nintendo Switch", image_url: "https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg", genre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Dark Souls 3", description: "Dark Souls III is an action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment for PlayStation 4, Xbox One, and Microsoft Windows.",year_released:2016,developer:"FromSoftware, Inc.",platforms:"PlayStation 4, Xbox one, Microsoft Windows",image_url:"https://cdn-products.eneba.com/resized-products/BjdEY6u_350x200_3x-0.jpg",genre_id:4,createdAt:new Date(),updatedAt:new Date()},
      { name: "Rainbow Six Siege", description: "The game puts heavy emphasis on environmental destruction and cooperation between players. Each player assumes control of an attacker or a defender in different gameplay modes such as rescuing a hostage, defusing a bomb, and taking control of an objective within a room.", year_released: 2015, developer: "Ubisoft", platforms: "Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S", image_url: "https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg", genre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Madden NFL 08", description: "It features the former Tennessee Titans quarterback Vince Young on the cover; San Diego Chargers defensive end Luis Castillo was the cover athlete for the Spanish-language version. This was the first Madden game made for 11 different platforms.", year_released: 2007, developer: "EA Tiburon", platforms: "GameCube, Microsoft Windows, Mobile phone,[1] Nintendo DS, OS X,[2] PlayStation 2, PlayStation 3, PlayStation Portable, Wii, Xbox, Xbox 360", image_url: "https://static.gamespot.com/uploads/scale_medium/mig/9/7/2/9/2219729-box_madden08.png", genre_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: "NBA 2K21", description: "NBA 2K21 is a basketball game simulation video game that was developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association. With exciting improvements upon its best-in-class gameplay, competitive and community online features, and deep, varied game modes, NBA 2K21 offers one-of-a-kind immersion into all facets of NBA basketball and culture - where Everything is Game. In NBA 2K21, new, old, and returning ballers alike will find exciting game modes that offer a variety of basketball experiences.", year_released: 2020, developer: "Visual Concepts", platforms: "PlayStation 4, Xbox One, Android, PlayStation 5", image_url: "https://wallpapercave.com/wp/wp6940866.jpg", genre_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: "FIFA 17", description: "FIFA 17 is a sports video game in the FIFA series developed and published by Electronic Arts, that was released in September 2016. This is the first FIFA game in the series to use the Frostbite game engine. Borussia Dortmund midfielder Marco Reus serves as the cover athlete on the game.", year_released: 2016, developer: "EA Sports", platforms: "PlayStation 3, Microsoft Windows, Xbox 360, Xbox One", image_url: "https://media.loot.co.za/static/gallery/details/w/y/k/wykd-4001-ga20/detail.wykd-4001-ga20.0.photo.XJYN0M9S56.jpg", genre_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: "NHL 21", description: "NHL 21 is an ice hockey simulation video game developed by EA Vancouver and published by EA Sports. It is the 30th installment in the NHL game series and was released for the PlayStation 4 and Xbox One consoles in October 2020.", year_released: 2020, developer: "EA Vancouver", platforms: "PlayStation 4, Xbox One", image_url: "https://wallpapercave.com/wp/wp7254607.jpg", genre_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: "SM Strikers", description: "Super Mario Strikers, known as Mario Smash Football in Europe and Australia, is a five-on-five football game developed by Next Level Games for the GameCube. Super Mario Strikers is a new soccer game that's unlike anything ever to hit the pitch! You'll combine classic Mario gameplay with real soccer fun -- whether you freeze an opponent with an ice-cold shell, kicking over a spiny shell or scaring off an entire team with the roving Chain Chomp, you're sure to see something new around every corner kick.", year_released: 2005, developer: "Next Level Games", platforms: "GameCube", image_url: "https://giantbomb1.cbsistatic.com/uploads/original/8/82063/2680713-supermariostrikers.jpg", genre_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: "GTA 5", description: "Los Santos: a sprawling sun-soaked metropolis full of self-help gurus, starlets and fading celebrities, once the envy of the Western world, now struggling to stay afloat in an era of economic uncertainty and cheap reality TV. Amidst the turmoil, three very different criminals plot their own chances of survival and success: Franklin, a street hustler looking for real opportunities and serious money; Michael, a professional ex-con whose retirement is a lot less rosy than he hoped it would be; and Trevor, a violent maniac driven by the chance of a cheap high and the next big score. Running out of options, the crew risks everything in a series of daring and dangerous heists that could set them up for life.", year_released: 2013, developer: "Rockstars Games", platforms: "PlayStation 4, Xbox One, PlayStation 3, Xbox 360, Xbox Series X and Series S, Microsoft Windows, PlayStation 5", image_url: "https://vkehe45v84w20n29n1m63wok-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/GTA-5.jpg", genre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Horizon Zero Dawn", description: "Horizon Zero Dawn is a 2017 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a young hunter in a world overrun by machines, who sets out to uncover her past.", year_released: 2017, developer: "Guerrilla Games", platforms: "PlayStation 4, Microsoft Windows", image_url: "https://file-cdn.gvgmall.com/product/20200730100750_gvgmall.png", genre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "God of War", description: "For the first time in the series, there are two protagonists: Kratos, the former Greek God of War who remains the only playable character, and his young son Atreus. Following the death of Kratos' second wife and Atreus' mother, they journey to fulfill her request that her ashes be spread at the highest peak of the nine realms. Kratos keeps his troubled past a secret from Atreus, who is unaware of his divine nature. Along their journey, they encounter monsters and gods of the Norse world.", year_released: 2018, developer: "Santa Monica Studio", platforms: "PlayStation 4", image_url: "https://giantbomb1.cbsistatic.com/uploads/scale_medium/8/87790/2139780-box_gow.png", genre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Batman: Arkham City", description: "The game is presented from the third-person perspective with a primary focus on Batman's combat and stealth abilities, detective skills, and gadgets that can be used in both combat and exploration. Batman can freely move around the Arkham City prison, interacting with characters and undertaking missions, and unlocking new areas by progressing through the main story or obtaining new equipment.", year_released: 2011, developer: "Rocksteady Studios", platforms: "PlayStation 3, Xbox 360, Microsoft Windows, Wii U, OS X, PlayStation 4, Xbox One,", image_url: "https://upload.wikimedia.org/wikipedia/en/0/00/Batman_Arkham_City_Game_Cover.jpg", genre_id: 2, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  }
};
