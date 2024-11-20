////////////////////////////////
///       BOOT-UP GAME       ///
////////////////////////////////
startUp();
function startUp() {
  callSavedData_cookies();
  startTime();
  testNew();
  setInterval(makeSavedData_cookies, 1);
  //basic inv
  setInterval(updateVitals, 250);
  setInterval(updateMain, 250);
  setInterval(updateSlots, 250);
  //Armors
  setInterval(updateCommonHeadArmors, 250);
  setInterval(updateCommonChestArmors, 2500);
  setInterval(updateCommonLegArmors, 2500);
  //needs boots
  setInterval(updateUncommonHeadArmors, 250);
  setInterval(updateUncommonChestArmors, 250);
  setInterval(updateUncommonLegArmors, 250);
  //needs boots
  //Armor Descriptions
  setInterval(updateHeadDiscription, 250); 
  setInterval(updateChestDiscription, 250);
  setInterval(updateLegDiscription, 250);
}

////////////////////////////////
///     NEW USER SET UP      ///
////////////////////////////////
function testNew() {
  if (user != true) {
    setRandomName();
  } else {
    alert("Welcome back " + username + "!");
  }
}

function setRandomName() {
  let adjectives = ['Silly', 'Funny', 'Smart', 'Weird', 'Cool', 'Difficult', 'Dumb', 'Short', 'Tall', 'Expensive', 'Interesting', 'Ugly', 'Pretty'];
  let animals = ['Dog', 'Cat', 'Panda', 'Pig', 'Cow', 'Parot', 'Snake', 'Eel', 'Pangolin', 'Giraffe', 'Monster', 'Crocodile', 'Hippo'];
  adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  ani = animals[Math.floor(Math.random() * animals.length)];
  num = Math.floor(Math.random() * 999) + 1;
  username = (adj + ani + num)
  console.log(username)
  alert("Hello! We do not have accounts set up yet, sorry for the inconvenience. Becuase of this yu will be known as " + username + "!")
  user = true;   
  makeSavedData_cookies();
  mili = 0;
}

function startTime() {
  setInterval(timer, 1000);
}
var timeA = 0;
var timeB = 0;
var timeC = 0;
var timeD = 0;

function timer() {
  //mili to sec
  if (timeA >= 1000) {
    timeA = timeA - 1000
    timeB++
  }
  //sec to min
  if (timeB >= 60) {
    timeB = timeB - 60
    timeC++ 
  }
  //min to hour
  if (timeC >= 60) {
    timeC = timeC - 60
    timeD++ 
  }
  timeA++;
}


///////////////////////////////////////////
///              VARIABLES              ///
///        1) Stats                     ///
///        2) BunBerries                ///
///        3) Achievements              ///
///        4) Armor                     ///
///        5) Weapons                   ///
///        6) Items                     ///
///        7) LootChest/Boxes           ///
///                                     ///
///////////////////////////////////////////

//////////////////////////// 
///       1) STATS       ///
////////////////////////////
function checkLevelUp() {
  if (xp >= xpTop) {
    xp = xp - xpTop;
    xpTop = Math.round(xpTop * 1.2);
    level++;
    levelSlot.innerHTML = "Level: " + level + ", Xp: " + xp + "/" + xpTop;
    xpSlot.innerHTML = xp + "/" + xpTop;
    levelUpRewards();
  }
}

function levelUpRewards() {
  //prize = Math.floor(Math.random() * 1500) + 1000;
  //maxWater
  //maxSat
  //maxHealth
}
 
//stats 
var level = 0; //               The level of the player
var xp = 0; //                  The amount of XP the player has
var xpTop = 100; //             The about of XP needed for the player to level up
var xpBoost = 1; //             The about of XP you get from raw XP
var xpBoostOn = false; //       If the player has an XP booster on

var user;
var username;
var atTag = "@guest";
var allowCookies = false;
var mili;
var invOn = true;

var currentHeath = 10; //       Current amount of Heath
var currentWater = 10; //       Current amount of Water
var currentSat = 10; //         Current amount of Saturation
var currentStrenth = 10; //     Current amount of Strenth
var currentStealth = 10; //     Current amount of Stealth
var currentLuck = 0; //         Current amount of Luck
var currentProtection = 0; //   Current amount of Protection

var maxHeath = 10; //           Max amount of Heath
var maxWater = 15; //           Max amount of Water
var maxSat = 15; //             Max amount of Saturation
var gears = 0; //               The number of gears owned

var HeadProtection = 0;
var ChestProtection = 0;
var LegProtection = 0;
var BootProtection = 0;


var id;
var name;
var description;
var protection;
var owned;
var trys = 0;
var prize = 0;

var commonHeadOwned = true;
var uncommonHeadOwned = false;
var rareHeadOwned = false;
var epicHeadOwned = false;
var mythicHeadOwned = false;
var dungeonHeadOwned = false;
var seasonOneHeadOwned = false;
var relicHeadOwned = false;

var commonChestOwned = true;
var uncommonChestOwned = false;
var rareChestOwned = false;
var epicChestOwned = false;
var mythicChestOwned = false;
var dungeonChestOwned = false;
var seasonOneChestOwned = false;
var relicChestOwned = false;


var uncommonLegOwned = false;


////////////////////////////
////  2) BUN BERRIES     ///
////////////////////////////
//TOTALS
var totalBunBerriesEver = 0; //  Total Number of Bun Berries Even Owned (Owned + Eaten)
var totalBunBerries = 0; //      Total Number of Bun Berries Owned
var totalEaten = 0; //           Total Number of Bun Berries Eaten
//BASIC BUN BERRIES
var bunberries = [
  ["ID", "NAME", "DISCRIPTION", "TYPE", "STRENTH", "AMOUNT"],
  ["--", "Luck Bun Berry", "DISCRIPTION", "Basic", 1, 0],
  ["--", "Strenth Bun Berry", "DISCRIPTION", "Basic", 1, 0]
];
var luckBunBerries = 0; //           +3 Luck
var strenthBunBerries = 0; //        +5 Strength
var stealthBunBerries  = 0; //       +5 Stealth
var waterBunBerries = 0; //          +5 Water
var saturationBunBerries = 0; //     +10 Saturation
//HEATH BUN BERRIES
var lv1HeathHealBunBerries = 0; //   restores 5% of Heath
var lv2HeathHealBunBerries = 0; //   restores 10% of Heath
var lv3HeatHealhBunBerries = 0; //   restores 25% of Heath
var lv4HeathHealBunBerries = 0; //   restores 50% of Heath
var lv5HeathHealBunBerries = 0; //   restores 100% of Heath
//XP BUN BERRIES
var lv1XpHeathBunBerries = 0; //    +100 Xp  
var lv2XpHeathBunBerries = 0; //    +500 Xp 
//SPECIAL BUN BERRIES
var shadowBunBerries = 0; //         +10 Stealth, +5 Heath, +3 Luck
var lavaBunBerries = 0; //           +10 Strength, +5 Stealth, +3 Heath
var aquaBunBerries = 0; //           +10 Water, +5 Strength, +3 Heath
var jesterBunBerries = 0; //         +10 Luck, +5 Steath, +3 Heath


///////////////////////////////// 
///      3) ACHIEVEMENTS      ///
/////////////////////////////////
//TOTALS
var ach_total = 0; //                  Total Number of Achievements
//MECHANIC ACHIEVEMENTS
var ach_mech_strtGame = false; //      Started game 
var ach_mech_donor = false; //         The player has given the devs money
var ach_mech_giver = false; //         The player has given the devs feedback that has been put in the game 
var ach_mech_exterm = false; //        The player has reported a bug in the game
var ach_mech_alpha = false; //         The player was a Alpha tester
var ach_mech_beta = false; //          The player was a Beta tester
//PLAYING ACHIEVEMENTS
var ach_lvl_Five = false; //           Got to level 5
var ach_lvl_Ten = false; //            Got to level 10
var ach_lvl_TwoFive = false; //        Got to level 25
var ach_lvl_Fifty = false; //          Got to level 50
var ach_lvl_OneHun = false; //         Got to level 100
var ach_lvl_TwoFiveHun = false; //     Got to level 250
var ach_lvl_FiveHun = false; //        Got to level 500
var ach_lvl_OneT = false; //           Got to level 1000
//ARMOR ACHIEVEMENTS
var ach_armors_CommonAll = false; //    Unlocked all common armors
var ach_armors_UnommonAll = false; //   Unlocked all uncommon armors
var ach_armors_RareAll = false; //      Unlocked all rare armors
var ach_armors_EpicAll = false; //      Unlocked all epic armors
var ach_armors_MythicAll = false; //    Unlocked all mythic armors
var ach_armors_RelicFirst = false; //   Unlocked all relic armors
//DUMB ACHIEVEMENTS
var ach_dumb_youAsked = false; //       Clicked on that achievement
var ach_dumb_plusFifty = false; //      Has more unlocked achievements than locked ones
var ach_dumb_takingAfterZ = false; //   Has Zharria's ideal setup (PepperSpray + Holy Bamboo + Panda)
var ach_dumb_takingAfterO = false; //   Has Olive's ideal setup (Rosax Fistes + Rosax Armor + Rosax Lucky)

//SEASON ONE ACHIEVEMENTS
var ach_seasonOne_AllArmor = false; //  Unlocked all season one armors

if (ach_lvl_Five == true) {
  let image = document.getElementById("levelOneId");
  image.src = "assets/ach/ach_startedGame.png"
}

////////////////////////////
///      4) ARMORS       ///
////////////////////////////
//collections and raritys
var collections = ["Classic", "Dumb", "\"What the f***?\"", "Starter", "Explorer\'s", "Fruty", "Unique"]
var raritys = ["Common", "Uncommon", "Rare", "Epic", "Mythic", "Relic", "Dungeon", "Seasonal"]

/////////////////////////////////////////////COMMON/////////////////////////////////////////////
//Collections: DONE
var CommonHeadArmorTypes = [
  ["1", "Bead Head", 0, "Get a Comb lunkhead.", "Common", "Starter", true],
  ["2", "Fig Leaf Wreath", 1, "Wow a leaf you look very cool *sarcasm*.", "Common", "Fruity",  false],
  ["3", "Wood Helmet", 1, "Knock on wood.", "Common", "Classic", false],
  ["4", "Leather Bandana", 2, "You look like someone trick or treating with a bracelet around their head.", "Common", "Classic", false],
  ["5", "Painted on Helmet", 2, "Did Vincent van Goh paint it on it looks so pretty *sarcasm*.", "Common", "\"What the f***?\"", false],
  ["6", "Explorers Helmet", 3, "dum dum dum du dum dum dum da dum dum dum du dum.", "Common", "Explorer\'s", false]
];

var CommonChestArmorTypes = [
  ["7", "T-shirt", 0, "Everyone has to start somewhere.", "Common", "Starter", true],
  ["8", "Fig Leaf Breastplate", 1, "Stop murdering the trees you sicko.", "Common", "Fruity", false],
  ["9", "Woodplate", 1, "STOP MURDERING THE TREES IT ISN\'T GOOD FOR THEIR HEALTH!!!!!!!!!!!!", "Common", "Classic", false],
  ["10", "Leather Chestplate", 2, "Found some cow patties I see.", "Common", "Classic", false],
  ["11", "Painted on Armor", 2, "Wow look at you, Picasso.", "Common", "\"What the f***?\"", false],
  ["12", "Basic Explorers Chestplate", 3, "Indiana Jones is nothing compared to you *sarcasm*.", "Common", "Explorer\'s", false]
];

var CommonLegArmorTypes = [
  ["13", "Jeans", 0, "You-- You-- You- --You\'r burning my eyes please someone help!!", "Common", "Starter", true],
  ["14", "The Fig Leaf", 1, "You look very, very, very, stupid.", "Common", "Fruity", false],
  ["15", "Wooden Leg Padding", 1, "you lunkhead now you can't move!!", "Common", "Classic", false],
  ["16", "Leather Leggings", 2, "cool very very cool you MURDERER OF HORSES!!!!", "Common", "Classic", false],
  ["17", "Painted on Leggings", 2, " Look Michelangelo what are you painting?", "Common", "\"What the f***?\"", false],
  ["18", "Basic Explorers Leggings", 3, "How Many pockets Does it have?.", "Common", "Explorer\'s", false]
];

var CommonBootArmorTypes = [
  ["19", "Shoes", 0, "Why are they untied?.", "Common", "Starter", true],
  ["20", "Fig Leaf Feet Covers", 1, "Rocks can easily poke through and cause you pain.", "Common", "Fruity", true],
  ["21", "Wood Sandals", 1, "Forget to bring tweezers?", "Common", "Classic", false],
  ["22", "Leather Boots", 2, "Like Minecraft I assume.", "Common", "Classic", false],
  ["23", "Painted on Boots", 2, "Da Vinci who are you painting?", "Common", "\"What the hell?\"", false],
  ["24", "Basic Explorers Boots", 3, "No they aren't air Jordans.", "Common", "Explorer\'s", false]
];

/////////////////////////////////////////////UNCOMMON/////////////////////////////////////////////
//Collections: DONE
var UncommonHeadArmorTypes = [
  ["25", "Fruit Hat", 3, "Hungry? Don't eat it.", "Uncommon", "Fruity", false],
  ["26", "Safari Hat", 3, "You look like a cheetah.", "Uncommon", "Unique", false],
  ["27", "Rubber Mask", 3, "I AM THOR! STRIKE ME LIGHTNING, YOU DO NO HARM.", "Uncommon", "Dumb", false],
  ["28", "Mud Mask", 3, "It looks so much like poop, I mean that's what fertilizer is made of right? I got it from the ground so it must....\"", "Uncommon", "\"What the f***?\"", false],
  ["29", "Tin Head", 4, "Be the Tin Man from the Wizard of OZ.", "Uncommon", "Classic", false],
  ["30", "Stone Helmet", 4, "Rocks, Stone, and Tuff! Don't move you're head or It will roll like a stone :).", "Uncommon", "Classic", false], 
  ["31", "Glass Helmet", 4, "Dang! you can see you're hair..... GET A FRIGGIN COMB LUNKHEAD!", "Uncommon", "Dumb", false],
  ["32", "Nickle Helmet", 5, "Get the new nickel helmet  now being sold for 999.99!", "Uncommon", "Classic", false],
  ["33", "Chain Mail Helmet", 5, "You look so ancient.", "Uncommon", "Classic", false],
  ["34", "Copper Helmet", 5, "Don a torch and book and you can be the Statue of Liberty!", "Uncommon", "Classic", false],
  ["35", "Brass Helmet", 5, "You look so shiny.", "Uncommon", "Classic", false]
];

var UncommonChestArmorTypes = [
  ["36", "CoconutShell Brest Plate", 3, "Wow, you look ready for the beach, just not the dungeons!", "Uncommon", "Fruity", false],
  ["37", "Safari Vest", 3, "You look so dorky.", "Uncommon", "Unique", false],
  ["38", "Rubber Chestplate", 3, "I am Inevitable!! (Marvel fans please don't airstrike me).", "Uncommon", "Dumb", false],
  ["39", "Mud Chestplate", 3, "\"You can grow plants so well, please miss the fact it is made of almost entirely poop\".",  "Uncommon", "\"What the f***?\"", false],
  ["40", "Tin Chestplate", 4, "You look like one of those coke ads.", "Uncommon", "Classic", false],
  ["41", "Stone Chestplate", 4, "Try not to run too much, broken backs aren't fun.", "Uncommon", "Classic", false],
  ["42", "Glass Chestplate", 4, "Why did you keep the same shirt on!", "Uncommon", "Dumb", false],
  ["43", "Nickle Chestplate", 5, "Buy the new and more expensive chest piece for 1,233.99!", "Uncommon", "Classic", false],
  ["44", "Chain Mail Chestplate", 5, "You are so old to think chainmail is good *eye roll*.", "Uncommon", "Classic", false],
  ["45", "Copper Chestplate", 5, "Turn it green to make you look even more like the statue of liberty.", "Uncommon", "Classic", false],
  ["46", "Brass Chestplate", 5, "Turn it into a tuba please, please, please!!", "Uncommon", "Classic", false]
];

var UncommonLegArmorTypes = [
  ["36", "Banana Leaves Skirt", 3, "BANANA!!!!!!!!!!!!!!!!!", "Uncommon", "Fruity", false],
  ["37", "Safari Pants", 3, "Bro you don't need 43 pants.", "Uncommon", "Unique", false],
  ["38", "Rubber Leggings", 3, "私は海賊の王になるつもりだ.",  "Uncommon", "Dumb", false],
  ["39", "Mud Leggings", 3, "You need more Fertilizer.", "Uncommon", "\"What the f***?\"", false],
  ["40", "Tin Leggings", 4, "dang you're knees are poking out.",  "Uncommon", "Classic", false],
  ["41", "Stone Leggings", 4, "You have the one thing different from Minecraft.", "Uncommon", "Classic", false],
  ["42", "Glass Leggings", 4, "Try not to fall or you are paying me like $1,252 for your medical bill.", "Uncommon", "Dumb", false],
  ["43", "Nickle Leggings", 5, "Buy the even more costly nickel leggings for $13,232!", "Uncommon", "Classic", false],
  ["44", "Chain Mail Leggings", 5, "Chainmail Won't protect against my trash talk.", "Uncommon", "Classic", false],
  ["45", "Copper Leggings", 5, "Apologise to your knees please.", "Uncommon", "Classic", false],
  ["46", "Brass Leggings", 5, "Make a clarinet to play to the monsters that try to kill you!!", "Uncommon", "Classic", false]
];

//Does not new descriptions
var UncommonBootArmorTypes = [
  ["36", "Fruit Peel Shoes", 3, "Try not to slip.", "Fruity", false],
  ["37", "Safari Boots", 3, "Caked with dirt and sand from wandering in the safari.", "Uncommon", "Unique", false],
  ["38", "Rubber Boots", 3, "Gomu Gomu No Gatling.", "Uncommon", "Dumb", false],
  ["39", "Mud Boots", 3, "Now these are real crappy boots literally!!", "Uncommon", "\"What the f***?\"", false],
  ["40", "Tin Boots", 4, "Your toes are bleeding....",  "Uncommon", "Classic", false],
  ["41", "Stone Boots", 4, "fee fie foe fum, I can hear you from like 2 miles away.", "Uncommon", "Classic", false],
  ["42", "Glass Boots", 4, "You can see your feet underneath, how cool!", "Uncommon", "Dumb", false],
  ["43", "Nickle Boots", 5, "Buy NOW! Please, I'm poor!.", "Uncommon", "Classic", false],
  ["44", "Chain Mail Boots", 5, "Neat foot pattern.", "Uncommon", "Classic", false],
  ["45", "Copper Boots", 5, "No more moving your ankle....", "Uncommon", "Classic", false],
  ["46", "Brass Boots", 5, "Play the clarinet, not the brass boot!",  "Uncommon", "Classic", false]
];



/////////////////////////////////////////////RARE/////////////////////////////////////////////
//Collections: DONE
var RareHeadArmorTypes = [
  ["47", "Steel Helmet", 5, "Knock on steel *try not to break you're fist*.", "Rare", "Classic", false],
  ["48", "Bronze Helmet", 5, "Description.", "Rare", "Classic", false],
  ["49", "Silver Helmet", 5, "Description.", "Rare", "Classic", false],
  ["50", "Gold Helmet", 6, "Description.", "Rare", "Classic", false],
  ["51", "Iron Helmet", 6, "Description.", "Rare", "Classic", false],
  ["52", "Feathered Mask", 6, "Description.", "Rare", "Uniquie", false],
  ["53", "Blessed Mud Helmet", 6, "Description.", "Rare", '\"What the f***\"", false],
  ["54", "Jungle Vine Helmet", 6, "Description.", "Rare", "Fruity", false]
];

var RareChestArmorTypes = [
  ["55", "Steel Chestplate", 5, "Description.", "Rare", "Classic", false],
  ["56", "Bronze Chestplate", 5, "Description.", "Rare", "Classic", false],
  ["57", "Silver Chestplate", 5, "Description.", "Rare", "Classic", false],
  ["58", "Gold Chestplate", 6, "Description.", "Rare", "Classic", false],
  ["59", "Iron Chestplate", 6, "Description.", "Rare", "Classic", false],
  ["60", "Feathered Chestplate", 6, "Description.", "Rare", "Uniquie", false],
  ["61", "Blessed Mud Chestplate", 6, "Description.", "Rare",  "\"What the f***\"", false],
  ["62", "Jungle Vine Chestplate", 6, "Description.", "Rare", "Fruity", false]
];

var RareLegArmorTypes = [
  ["63", "Steel Leggings", 5, "Description.", "Rare", "Classic", false],
  ["64", "Bronze Leggings", 5, "Description.", "Rare", "Classic", false],
  ["65", "Silver Leggings", 5, "Description.", "Rare", "Classic", false],
  ["66", "Gold Leggings", 6, "Description.", "Classic", false],
  ["67", "Iron Leggings", 6, "Description.", "Rare", "Classic", false],
  ["68", "Feathered Leggings", 6, "Description.", "Rare", "Uniquie", false],
  ["69", "Blessed Mud Leggings", 6, "Description.", "Rare", "\"What the f***\"", false],
  ["70", "Jungle Vine Leggings", 6, "Description.", "Rare", "Fruity", false]
];

var RareBootArmorTypes = [
  ["71", "Steel Boots", 5, "Description.", "Rare", "Classic", false],
  ["72", "Bronze Boots", 5, "Description.", "Rare", "Classic", false],
  ["73", "Silver Boots", 5, "Description.", "Rare", "Classic", false],
  ["74", "Gold Boots", 6, "Description.", "Rare", "Classic", false],
  ["75", "Iron Boots", 6, "Description.", "Rare", "Classic", false],
  ["76", "Feathered Boots", 6, "Description.", "Rare", "Uniquie", false],
  ["77", "Blessed Mud Boots", 6, "Description.", "Rare", "\"What the f***\"", false],
  ["78", "Jungle Vine Boots", 6, "Description.", "Rare", "Fruity", false]
];



/////////////////////////////////////////////////////////////////////////////
//////////////   ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ DONE ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑  //////////////
/////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////
//////////////   →→→→→→→→→→→→→→→→→→ IDEAS ←←←←←←←←←←←←←←←←←←  //////////////
/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
//////////////   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ COMING SOON ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  //////////////
/////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////EPIC/////////////////////////////////////////////
//Collections: DONE
var EpicChestArmorTypes = [
  ["26", "Medevil Armor", 5, "Description", "Epic", "Uniquie", false],
  ["27", "CoralArmor", 4, "Description", "Epic", "Uniquie", false],
  ["28", "Snake Skin", 4, "Description", "Epic", "Uniquie", false],
  ["29", "Cooled magma", 4, "Description", "Epic", "Uniquie", false],
  ["30", "Holy Bamboo", 4, "Description", "Epic", "Uniquie", false],
  ["31", "Diamond", 4, "Description", "Epic", "Classic", false],
  ["31", "Emerald", 4, "Description", "Epic", "Uniquie", false]
];



/////////////////////////////////////////////MYTHIC/////////////////////////////////////////////
//Collections: DONE
var MythicChestArmorTypes = [
  ["32", "Gold encrusted Silk", 4, "Description", "Epic", "Uniquie", false],
  ["33", "Dragon Skin", 4, "Description", "Epic", "Uniquie", false],
  ["27", "Rhodochrosite", 4, "Description", "Epic", "Uniquie", false],
  ["34", "Mythrill", 4, "Description", "Epic", "Classic", false],
  ["34", "Ghoul Skin", 4, "Description", "Epic", "Uniquie", false],
  ["34", "Chicken Suit", 4, "Description", "Epic", "\"What the f***\"", false]
];



/////////////////////////////////////////////RELIC/////////////////////////////////////////////
//Collections: NOT DONE
var FullRelicChestArmorTypes = [
  ["32", "Midas Garments", "50", ""],               //Ancient: The Prosporer ------- Color: Gold (Money) ---------- Branch----------------(Unchosen)
  ["32", "Prospice Gown", "50", ""],                //Ancient: The Hand  ----------- Color: Emerald (Boost) ------- Measurement Stick-----(Unchosen)
  ["32", "Voistiene Entity", "50", ""],             //Ancient: The Void ------------ Color: Purple (Negaite) ------ Liquid----------------(Unchosen)
  ["32", "Miezin Cloud", "50", ""],                 //Ancient: The Mist Forge  ----- Color: White (Mindbending) --- Pepper Spray----------Zharria
  ["32", "Rosax Robes", "50", ""],                  //Ancient: The Nightmare ------- Color: Rose (Leach) ---------- Hands ----------------Olive
  ["32", "HollowGhast Armor", "50", ""],            //Ancient: The HallowGhast  --- Color: Black (Damage) --------- Scythe ---------------Armaan
];

/////////////////////////////////////////////SEASONAL/////////////////////////////////////////////
var SeasonalChestArmorTypes = [
];

/////////////////////////////////////////////DUNGEON/////////////////////////////////////////////
var DungeonChestArmorTypes = [
  ["36", "Red Explorers", "2", ""], // from red Basilisc (d1)
  ["37", "Blue Explorers", "2", ""], // from roaming shark
  ["38", "Black Explorers", "2", ""], // from speedy blur
  ["39", "Green Explorers", "2", ""],  // from overly angry troll
  ["40", "Yellow Explorers", "2", ""],  // from the skydiver
  ["41", "Clan Style", "2", ""],  // from warrior squad
  ["42", " ----- ----- ", "2", ""]  // ----- driver
];

////////////////////////////
///     5) WEAPONS       ///
////////////////////////////
//Sets
//branck
//sword
//meserment
//exploror

//Collections: NOT DONE
var CommonHeadWeaponTypes = [
  ["-", "Fists", 1, "Wow, your so strong! *sarcasm*", "Common", true],
  ["-", "Styrofoam Sword", 2, "Wow so daring and bold a sword made of styrofoam!!!", "Common", false],
  ["-", "Rusty Horseshoes", 2, "Slow, but reliable!", "Common", false],
  ["-", "Pillow", 2, "It\'s kinda gross to think that you beat them up and still sleep with the pillow!", "Common", false],
  //Sets
  ["-", "Twig", 3, "LOOK ITS A TWIG!!!!.", "Common", false],
  ["-", "Ruler", 3, "12 inches, or 1 foot!!", "Common", false],
  ["-", "Water", 3, "They slip!!!!", "Common", false],
  ["-", "Old Pepper Spray", 3, "AHH, a bare!!!", "Common", false],
  ["-", "Taped up hands", 3, "Slow, but reliable!", "Common", false],
  ["-", "Wooden Sword", 3, "The stuff of warriors.", "Common", false],
  //Explorers
  ["-", "Basic Explores Knife", 4, "The stuff of legends!!!", "Common", false]
];

//Collections: NOT DONE
var UncommonHeadWeaponTypes = [
  ["-", "Pen", 5, "Write your enemies to death!", "Uncommon", false],
  ["-", "Fishing Pole", 5, "WAIT! IT BRINGS THEM CLOSER???!???!?!",  "Uncommon", false],
  ["-", "Role of Tape", 5, "You wrap them up so fast that it hurts...", "Uncommon", false],
  ["-", "Sharpened Rocks", 6, "Very close range, but very good damage.", "Uncommon", false],
  ["-", "Crow Bar", 6, "It is good for hitting them on the head.", "Uncommon", false],
  //Sets
  ["-", "Stick", 6, "LOOK ITS A STICK!!", "Uncommon", false],
  ["-", "Yard Stick", 6, "36 inches or 3 feet or 1 yard!!!", "Uncommon", false],
  ["-", "Hot Water", 6, "They slip and fall!!", "Uncommon", false],
  ["-", "New Pepper Spray", 6, "AHH, its a bare!!!", "Uncommon", false],
  ["-", "Gaunlets", 6, "The Classic style of fighting... but it does hurt.", "Uncommon", false],
  ["-", "Stone Sword", 6, "The stuff of warriors!!!", "Uncommon", false],
  //Explorers
  ["-", "New Explores Knife", 7, "The stuff of new legends!!!", "Uncommon", false]
];

//Collections: NOT DONE
var RareHeadWeaponTypes = [
  ["-", "Rusty Katana", 6, "STABY STAB STAB!", "Rare", false],
  ["-", "Battle Staff", 6, "Why is it warm???", "Rare", false],
  ["-", "Living snake", 7, "It bites people, even you!!", "Rare", false],
  ["-", "Daggers", 8, "Its new and sharp and stabs harder than a dart!", "Rare", false],
  ["-", "Curved Daggers", 9, "The new curved blade enhances the strength and effect of these daggers!", "Rare", false],
  ["-", "Sickels", 9, "What used to be for the harvesting of wheat is now for the harvesting of enemies.", "Rare", false],
  ["-", "Scissors", 9, "Split them like chopsticks for inescapable PAIN AND TORTURE!!!!", "Rare", false],
  //Sets
  ["-", "Dead Tree Branch", 8, "LOOK ITS A DEAD TREE BRANCH!!", "Rare", false],
  ["-", "Meter Stick", 8, "40ish inches or 3.5ish feet or a little over 1 yard or 1 meter!!!", "Rare", false],
  ["-", "Oil", 8, "They slip and fall, and break their heads!", "Rare", false],
  ["-", "Extra Concentrated Pepper Spray", 8, "AHH, its a monster!!!", "Rare", false],
  ["-", "Meter Stick", 8, "40ish inches or 3.5ish feet or a little over 1 yard or 1 meter!!!", "Rare", false],
  ["-", "Fighters Bindings", 8, "Even stronger gauntlets, with more pressure pads, reduces pain to a minimum.", "Rare", false],
  ["-", "Iron Sword", 8, "The stuff of warriors!!!", "Rare", false],
  
  //Explorers
  ["-", "Industrial Explores Knife", 9, "The stuff of industrial legends!!!", "Rare", false]
];

//Collections: NOT DONE
var EpicHeadWeaponTypes = [
  ["-", "Sharp Katana", 8, "STABY STAB STAB!!! KILLY KILL KILL!!!", "Epic", false],
  ["-", "Reinforced Battle Staff", 8, "Why is it hot???", "Epic", false],
  ["-", "Wild Living snake", 9, "It bites people, 20 at once!!", "Epic", false],
  ["-", "Mace", 9, "SlAM DUNK!!", "Epic", false],
  ["-", "Fire Extinguisher", 9, "Spray them to death!!", "Epic", false],
  ["-", "Hammer", 9, "BAMM, it hits hard!!", "Epic", false],
  //Sets
  ["-", "Alive Tree Branch", 10, "LOOK ITS AN ALIVE TREE BRANCH!!", "Epic", false],
  ["-", "Large Meter Stick", 10, "100 inches or 9ish feet or almost over 3 yard or 2.5ish meters!!", "Epic", false],
  ["-", "Gasoline and Matches", 9, "They slip and fall, break their heads and get lit on fire!", "Epic", false],
  ["-", "Industrial Strength Pepper Spray", 10, "AHH, its bear monster!!!", "Epic", false],
  ["-", "Mualer's Bindings", 10, "Even stronger bindings, made out of claws of animals whose name real remains unknown and have been dubbed maulers.", "Epic", false],
  ["-", "Golden Sword", 10, "The stuff of warriors!!!.", "Epic", false],
  //Explorers
  ["-", "Duplex Explores Knife", 11, "The stuff of duplex legends!!!", "Epic", false]
];

//Collections: NOT DONE
var MythicHeadWeaponTypes = [
  ["-", "Fire Blade", 12, "The ring of fire? Oh, you mean this thing!", "Myithic", false],
  ["-", "Dragon Katana", 12, "A strong curse emenates from the blade!", "Myithic", false],
  ["-", "Necromancer Staff", 12, "Summon minions to fight for you!", "Myithic", false],
  ["-", "Serpentine Basket", 12, "It bites people, 200 at once!! But not you!!", "Myithic", false],
  ["-", "Spiked Mace", 13, "SlAM DUNK BUT WITH THORNS!!", false],
  ["-", "Runic Hammer", 12, "Just a better version of a hammer!!", "Myithic", false],
  //Sets
  ["-", "Thriving Tree Branch", 10, "LOOK ITS A THRIVING TREE BRANCH!!", "Myithic", false],
  ["-", "Mile Stick", 10, "63360 inches or 5280 feet, 1760 yards, 1609ish meters or one mile!", "Myithic", false],
  ["-", "Nuclear Acid", 9, "They slip and fall, break their heads, get lit on fire and become radioactive!", "Myithic", false],
  ["-", "Aquatex Spray", 10, "AHH, its dev!", "Myithic", false],
  ["-", "Mauler's soul bindings", 10, "The Mauler's paws sewen into the bindings that have  a strong magic radiating from them, causing powerful attacks and scratches.", "Myithic", false],
  ["-", "Mythril Sword", 10, "The stuff of warriors!!!", "Myithic", false],
  //Explorers
  ["-", "Blessed Explores Knife", 11, "The stuff of real legends!!!", "Myithic", false]
];
 
////////////////////////////
///   6) LOOT BOXES       ///
////////////////////////////


/////////////////////////////////////////////////////////////////
///                           FUNCTIONS                       ///
///              1) Updates                                   ///
///              2) Gear Prizes & Loot Boxes                  ///
///              3) Variable Management                       ///
///              4) Story Management                          ///
///              5) Story Dungeon Management                  ///
///              6) Story Dungeons Playout                    ///
///              7) Story Progress                            ///        
///              8) Toggels                                   ///  
///              9) Cookies                                   ///
///                                                           ///
/////////////////////////////////////////////////////////////////

///////////////////////////////////////////
///             1) UPDATES              ///
///////////////////////////////////////////


function updateVitals() {
  currentProtection = HeadProtection + ChestProtection + LegProtection + BootProtection;
  levelSlot.innerText = level;
  xpSlot.innerText = xp + "/" + xpTop;
  hpt.innerText = currentHeath + "/" + maxHeath;
  wtr.innerText = currentWater + "/" + maxWater;
  sat.innerText = currentSat + "/" + maxSat;
  str.innerText = currentStrenth;
  stl.innerText = currentStealth;
  pro.innerText = currentProtection;
  lck.innerText = currentLuck;
}

function updateMain() {
  //il do this soon
}

function updateSlots() {
  gearSlot.innerHTML = gears;
  //il do more this soon
}


function updateCommonHeadArmors() {
  if (CommonHeadArmorTypes[1][6] == true) {
    document.getElementById("FigWreath").classList.add('unlockedArmor');
    document.getElementById("FigWreath").classList.remove('lockedArmor');
  } if (CommonHeadArmorTypes[2][6] == true) {
    document.getElementById("WoodHelmet").classList.add('unlockedArmor');
    document.getElementById("WoodHelmet").classList.remove('lockedArmor');
  } if (CommonHeadArmorTypes[3][6] == true) {
    document.getElementById("LeatherBandana").classList.add('unlockedArmor');
    document.getElementById("LeatherBandana").classList.remove('lockedArmor');
  } if (CommonHeadArmorTypes[4][6] == true) {
    document.getElementById("PaintHelmet").classList.add('unlockedArmor');
    document.getElementById("PaintHelmet").classList.remove('lockedArmor');
  } if (CommonHeadArmorTypes[5][6] == true) {
    document.getElementById("BasicExplorersHelmet").classList.add('unlockedArmor');
    document.getElementById("BasicExplorersHelmet").classList.remove('lockedArmor');
  }
}

function updateCommonChestArmors() {
  if (CommonChestArmorTypes[1][6] == true) {
    FigLeafBreastplate.style.display = "block";
  } if (CommonChestArmorTypes[2][6] == true) {
    Woodplate.style.display = "block";
  } if (CommonChestArmorTypes[3][6] == true) {
    LeatherChestplate.style.display = "block";
  } if (CommonChestArmorTypes[4][6] == true) {
    PaintedArmor.style.display = "block";
  } if (CommonChestArmorTypes[5][6] == true) {
    BasicExplorersChestplate.style.display = "block";
  }
}

function updateCommonLegArmors() {
  if (CommonLegArmorTypes[1][6] == true) {
    TheFigLeaf.style.display = "block";
  } if (CommonLegArmorTypes[2][6] == true) {
    WoodenLegPadding.style.display = "block";
  } if (CommonLegArmorTypes[3][6] == true) {
    LeatherLeggings.style.display = "block";
  } if (CommonLegArmorTypes[4][6] == true) {
    PaintedOnLeggings.style.display = "block";
  } if (CommonLegArmorTypes[5][6] == true) {
    BasicExplorersLeggings.style.display = "block";
  }
}

function updateUncommonHeadArmors() {
  if (UncommonHeadArmorTypes[0][6] == true) {
    FruitHat.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[1][6] == true) {
    SafariHat.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[2][6] == true) {
    RubberMask.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[3][6] == true) {
    MudMask.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[4][6] == true) {
    TinHead.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[5][6] == true) {
    StoneHelmet.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[6][6] == true) {
    GlassHelmet.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[7][6] == true) {
    NickleHelmet.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[8][6] == true) {
    ChainHelmet.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[9][6] == true) {
    CopperHelmet.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[10][6] == true) {
    BrassHelmet.style.display = "block";
    uncommonHeadOwned = true;
  } if (uncommonHeadOwned == true) {
    uncommonHead.style.display = "block";
  }
}

function updateUncommonChestArmors() {
  if (UncommonChestArmorTypes[0][6] == true) {
    CoconutShellBrestPlate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[1][6] == true) {
    SafariVest.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[2][6] == true) {
    RubberChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[3][6] == true) {
    MudChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[4][6] == true) {
    TinChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[5][6] == true) {
    StoneChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[6][6] == true) {
    GlassChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[7][6] == true) {
    NickleChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[8][6] == true) {
    ChainChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[9][6] == true) {
    CopperChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[10][6] == true) {
    BrassChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (uncommonChestOwned == true) {
    uncommonChest.style.display = "block";
  }
}

function updateUncommonLegArmors() {
  if (UncommonLegArmorTypes[0][6] == true) {
    BananaLeavesSkirt.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[1][6] == true) {
    SafariPants.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[2][6] == true) {
    RubberLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[3][6] == true) {
    MudLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[4][6] == true) {
    TinLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[5][6] == true) {
    StoneLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[6][6] == true) {
    GlassLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[7][6] == true) {
    NickleLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[8][6] == true) {
    ChainLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[9][6] == true) {
    CopperLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[10][6] == true) {
    BrassLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (uncommonLegOwned == true) {
    uncommonLeg.style.display = "block";
  }
}


///////////////////////////////////////////
///      1.5) Description updates       ///
///////////////////////////////////////////


function updateHeadDiscription() {
  //COMMON
  if (document.getElementById("bedHead").selected == true) {headSlot = CommonHeadArmorTypes[0];}
  if (document.getElementById("FigWreath").selected == true) {headSlot = CommonHeadArmorTypes[1];}
  if (document.getElementById("WoodHelmet").selected == true) {headSlot = CommonHeadArmorTypes[2];}
  if (document.getElementById("LeatherBandana").selected == true) {headSlot = CommonHeadArmorTypes[3];}
  if (document.getElementById("PaintHelmet").selected == true) {headSlot = CommonHeadArmorTypes[4];}
  if (document.getElementById("BasicExplorersHelmet").selected == true) {headSlot = CommonHeadArmorTypes[5];} 
  // UNCOMMON
  if (document.getElementById("FruitHat").selected == true) {headSlot = UncommonHeadArmorTypes[0];}
  if (document.getElementById("SafariHat").selected == true) {headSlot = UncommonHeadArmorTypes[1];}
  if (document.getElementById("RubberMask").selected == true) {headSlot = UncommonHeadArmorTypes[2];}
  if (document.getElementById("MudMask").selected == true) {headSlot = UncommonHeadArmorTypes[3];}
  if (document.getElementById("TinHead").selected == true) {headSlot = UncommonHeadArmorTypes[4];}
  if (document.getElementById("StoneHelmet").selected == true) {headSlot = UncommonHeadArmorTypes[5];}
  if (document.getElementById("GlassHelmet").selected == true) {headSlot = UncommonHeadArmorTypes[6];}
  if (document.getElementById("NickleHelmet").selected == true) {headSlot = UncommonHeadArmorTypes[7];}
  if (document.getElementById("ChainHelmet").selected == true) {headSlot = UncommonHeadArmorTypes[8];}
  if (document.getElementById("CopperHelmet").selected == true) {headSlot = UncommonHeadArmorTypes[9];}
  if (document.getElementById("BrassHelmet").selected == true) {headSlot = UncommonHeadArmorTypes[10];}
  //SET PROPERTIES
  HeadProtection = headSlot[2];
  HeadDescription.innerHTML = headSlot[3] + "<br>" + "Part of the " + headSlot[5] + " Armor & Weapons collection." + "<br>" +  headSlot[4] + " +" + headSlot[2] + " Protection";
}

function updateChestDiscription() {
  //COMMON
  if (document.getElementById("Shirt").selected == true) {chestSlot = CommonChestArmorTypes[0];}
  if (document.getElementById("FigLeafBreastplate").selected == true) {chestSlot = CommonChestArmorTypes[1];}
  if (document.getElementById("Woodplate").selected == true) {chestSlot = CommonChestArmorTypes[2];}
  if (document.getElementById("LeatherChestplate").selected == true) {chestSlot = CommonChestArmorTypes[3];}
  if (document.getElementById("PaintedArmor").selected == true) {chestSlot = CommonChestArmorTypes[4];}
  if (document.getElementById("BasicExplorersChestplate").selected == true) {chestSlot = CommonChestArmorTypes[5];} 
  // UNCOMMON
  if (document.getElementById("CoconutShellBrestPlate").selected == true) {chestSlot = UncommonChestArmorTypes[0];}
  if (document.getElementById("SafariVest").selected == true) {chestSlot = UncommonChestArmorTypes[1];}
  if (document.getElementById("RubberChestplate").selected == true) {chestSlot = UncommonChestArmorTypes[2];}
  if (document.getElementById("MudChestplate").selected == true) {chestSlot = UncommonChestArmorTypes[3];}
  if (document.getElementById("TinChestplate").selected == true) {chestSlot = UncommonChestArmorTypes[4];}
  if (document.getElementById("StoneChestplate").selected == true) {chestSlot = UncommonChestArmorTypes[5];}
  if (document.getElementById("GlassChestplate").selected == true) {chestSlot = UncommonChestArmorTypes[6];}
  if (document.getElementById("NickleChestplate").selected == true) {chestSlot = UncommonChestArmorTypes[7];}
  if (document.getElementById("ChainChestplate").selected == true) {chestSlot = UncommonChestArmorTypes[8];}
  if (document.getElementById("CopperChestplate").selected == true) {chestSlot = UncommonChestArmorTypes[9];}
  if (document.getElementById("BrassChestplate").selected == true) { chestSlot = UncommonChestArmorTypes[10];}
  //SET PROPERTIES
  ChestProtection = chestSlot[2];
  ChestDescription.innerHTML = chestSlot[3] + "<br>" + "Part of the " + chestSlot[5] + " Armor & Weapons collection." + "<br>" +  chestSlot[4] + " +" + chestSlot[2] + " Protection";
}

function updateLegDiscription() {
  //COMMON
  if (document.getElementById("Jeans").selected == true) { legSlot = CommonLegArmorTypes[0]; }
  if (document.getElementById("TheFigLeaf").selected == true) { legSlot = CommonLegArmorTypes[1]; }
  if (document.getElementById("WoodenLegPadding").selected == true) { legSlot = CommonLegArmorTypes[2]; }
  if (document.getElementById("LeatherLeggings").selected == true) { legSlot = CommonLegArmorTypes[3]; }
  if (document.getElementById("PaintedOnLeggings").selected == true) { legSlot = CommonLegArmorTypes[4]; }
  if (document.getElementById("BasicExplorersLeggings").selected == true) { legSlot = CommonLegArmorTypes[5]; } 
  // UNCOMMON
  if (document.getElementById("BananaLeavesSkirt").selected == true) { legSlot = UncommonLegArmorTypes[0]; }
  if (document.getElementById("SafariPants").selected == true) { legSlot = UncommonLegArmorTypes[1]; }
  if (document.getElementById("RubberLeggings").selected == true) { legSlot = UncommonLegArmorTypes[2]; }
  if (document.getElementById("MudLeggings").selected == true) { legSlot = UncommonLegArmorTypes[3]; }
  if (document.getElementById("TinLeggings").selected == true) { legSlot = UncommonLegArmorTypes[4]; }
  if (document.getElementById("StoneLeggings").selected == true) { legSlot = UncommonLegArmorTypes[5]; }
  if (document.getElementById("GlassLeggings").selected == true) { legSlot = UncommonLegArmorTypes[6]; }
  if (document.getElementById("NickleLeggings").selected == true) { legSlot = UncommonLegArmorTypes[7]; }
  if (document.getElementById("ChainLeggings").selected == true) { legSlot = UncommonLegArmorTypes[8]; }
  if (document.getElementById("CopperLeggings").selected == true) { legSlot = UncommonLegArmorTypes[9]; } 
  if (document.getElementById("BrassLeggings").selected == true) { legSlot = UncommonLegArmorTypes[10]; }
  //SET PROPERTIES
  legProtection = legSlot[2]
  LegDescription.innerHTML = legSlot[3] + "<br>" + "Part of the " + legSlot[5] + " Armor & Weapons collection." + "<br>" +  legSlot[4] + " +" + legSlot[2] + " Protection";
}


function updateLegDiscription() {
  //COMMON
  if (document.getElementById("Jeans").selected == true) {bootSlot = CommonLegArmorTypes[0]; }
  if (document.getElementById("TheFigLeaf").selected == true) {bootSlot = CommonLegArmorTypes[1]; }
  if (document.getElementById("WoodenLegPadding").selected == true) {bootSlot = CommonLegArmorTypes[2]; }
  if (document.getElementById("LeatherLeggings").selected == true) {bootSlot = CommonLegArmorTypes[3]; }
  if (document.getElementById("PaintedOnLeggings").selected == true) {bootSlot = CommonLegArmorTypes[4]; }
  if (document.getElementById("BasicExplorersLeggings").selected == true) {bootSlot = CommonLegArmorTypes[5]; } 
  // UNCOMMON
  if (document.getElementById("BananaLeavesSkirt").selected == true) {bootSlot = UncommonBootArmorTypes[0]; }
  if (document.getElementById("SafariPants").selected == true) {bootSlot = UncommonBootArmorTypes[1]; }
  if (document.getElementById("RubberLeggings").selected == true) {bootSlot = UncommonBootArmorTypes[2]; }
  if (document.getElementById("MudLeggings").selected == true) {bootSlot = UncommonBootArmorTypes[3]; }
  if (document.getElementById("TinLeggings").selected == true) {bootSlot = UncommonBootArmorTypes[4]; }
  if (document.getElementById("StoneLeggings").selected == true) {bootSlot = UncommonBootArmorTypes[5]; }
  if (document.getElementById("GlassLeggings").selected == true) {bootSlot = UncommonBootArmorTypes[6]; }
  if (document.getElementById("NickleLeggings").selected == true) {bootSlot = UncommonBootArmorTypes[7]; }
  if (document.getElementById("ChainLeggings").selected == true) {bootSlot = UncommonBootArmorTypes[8]; }
  if (document.getElementById("CopperLeggings").selected == true) {bootSlot = UncommonBootArmorTypes[9]; } 
  if (document.getElementById("BrassLeggings").selected == true) {bootSlot = UncommonBootArmorTypes[10]; }
  //SET PROPERTIES
  bootProtection = bootSlot[2]
  BootDescription.innerHTML = bootSlot[3] + "<br>" + "Part of the " + bootSlot[5] + " Armor & Weapons collection." + "<br>" +  bootSlot[4] + " +" + bootSlot[2] + " Protection";
}





///////////////////////////////////////////
///     2) GEAR PRIZES & LOOT BOXES     ///
///////////////////////////////////////////


function RandomPullCommonHeadArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (1-50)");
    commonGearPrize();
    trys = 0;
  } else {
    drop = Math.floor(Math.random() * CommonHeadArmorTypes.length);
    owned = CommonHeadArmorTypes[drop][6];
    if (owned == true) {
      trys++;
      RandomPullCommonHeadArmor();
    } else { 
      id = CommonHeadArmorTypes[drop] [0];
      name = CommonHeadArmorTypes[drop] [1];
      protection = CommonHeadArmorTypes[drop] [2];
      description = CommonHeadArmorTypes[drop] [3];
      CommonHeadArmorTypes[drop] [6] = true;
      trys = 0;     
    }
  }  
}

function RandomPullCommonChestArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (1-50)");
    commonGearPrize();
    trys = 0;
  } else {
    drop = Math.floor(Math.random() * CommonChestArmorTypes.length);
    owned = CommonChestArmorTypes[drop][6];
    if (owned == true) {
      trys++;
      RandomPullCommonChestArmor();
    } else {
      id = CommonChestArmorTypes[drop] [0];
      name = CommonChestArmorTypes[drop] [1];
      protection = CommonChestArmorTypes[drop] [2];
      description = CommonChestArmorTypes[drop] [3];
      CommonChestArmorTypes[drop] [6] = true;
      trys = 0;      
    }
  }  
}

function RandomPullCommonLegArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (1-50)");
    commonGearPrize();
    trys = 0;
  } else {
    drop = Math.floor(Math.random() * CommonLegArmorTypes.length);
    owned = CommonLegArmorTypes[drop][6];
    if (owned == true) {
      trys++;
      RandomPullCommonLegArmor();
    } else {
      id = CommonLegArmorTypes[drop] [0];
      name = CommonLegArmorTypes[drop] [1];
      protection = CommonLegArmorTypes[drop] [2];
      description = CommonLegArmorTypes[drop] [3];
      CommonLegArmorTypes[drop] [6] = true;
      trys = 0;      
    }
  }  
}

function RandomPullCommonBootArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (1-50)");
    commonGearPrize();
    trys = 0;
  } else {
    drop = Math.floor(Math.random() * CommonBootArmorTypes.length);
    owned = CommonBootArmorTypes[drop][6];
    if (owned == true) {
      trys++;
      RandomPullCommonBootArmor();
    } else {
      id = CommonBootArmorTypes[drop] [0];
      name = CommonBootArmorTypes[drop] [1];
      protection = CommonBootArmorTypes[drop] [2];
      description = CommonBootArmorTypes[drop] [3];
      CommonBootArmorTypes[drop] [6] = true;
      trys = 0;
    }
  }  
}
 
function RandomPullUncommonHeadArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize.(50-100)");
    uncommonGearPrize();
    trys = 0;
  } else {
    drop = Math.floor(Math.random() * UncommonHeadArmorTypes.length);
    owned = UncommonHeadArmorTypes[drop][6];
    if (owned == true) {
      trys++;
      RandomPullUncommonHeadArmor();
    } else {
      id = UncommonHeadArmorTypes[drop] [0];
      name = UncommonHeadArmorTypes[drop] [1];
      protection = UncommonHeadArmorTypes[drop] [2];
      description = UncommonHeadArmorTypes[drop] [3];
      UncommonHeadArmorTypes[drop] [6] = true;
      trys = 0;
    }
  }
}

function RandomPullUncommonChestArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (50-100)");
    commonGearPrize();
    trys = 0;
  } else {
    drop = Math.floor(Math.random() * UncommonChestArmorTypes.length);
    owned = UncommonChestArmorTypes[drop][6];
    if (owned == true) {
      trys++;
      RandomPullUncommonChestArmor();
    } else {
      id = UncommonChestArmorTypes[drop] [0];
      name = UncommonChestArmorTypes[drop] [1];
      protection = UncommonChestArmorTypes[drop] [2];
      description = UncommonChestArmorTypes[drop] [3];
      UncommonChestArmorTypes[drop] [6] = true;
      trys = 0;
    }
  }  
}

function RandomPullUncommonLegArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (50-100)");
    commonGearPrize();
    trys = 0;
  } else {
    drop = Math.floor(Math.random() * UncommonLegArmorTypes.length);
    owned = UncommonLegArmorTypes[drop][6];
    if (owned == true) {
      trys++;
      RandomPullUncommonLegArmor();
    } else {
      id = UncommonLegArmorTypes[drop] [0];
      name = UncommonLegArmorTypes[drop] [1];
      protection = UncommonLegArmorTypes[drop] [2];
      description = UncommonLegArmorTypes[drop] [3];
      UncommonLegArmorTypes[drop] [6] = true;
      trys = 0;
    }
  }  
}

function RandomPullUncommonBootArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (50-100)");
    commonGearPrize();
    trys = 0;
  } else {
    drop = Math.floor(Math.random() * UncommonBootArmorTypes.length);
    owned = UncommonBootArmorTypes[drop][6];
    if (owned == true) {
      trys++;
      RandomPullUncommonBootArmor();
    } else {
      id = UncommonBootArmorTypes[drop] [0];
      name = UncommonBootArmorTypes[drop] [1];
      protection = UncommonBootArmorTypes[drop] [2];
      description = UncommonBootArmorTypes[drop] [3];
      UncommonBootArmorTypes[drop] [6] = true;
      trys = 0;
    }
  }  
}

//1-50
function commonGearPrize() {
  prize = Math.floor(Math.random() * 50) + 1;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}
//50-100
function uncommonGearPrize() {
  prize = Math.floor(Math.random() * 50) + 50;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}
//100-300
function rareGearPrize() {
  prize = Math.floor(Math.random() * 200) + 100;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}
//300-1000
function epicGearPrize() {
  prize = Math.floor(Math.random() * 700) + 300;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}
//1000-5000
function mythicGearPrize() {
  prize = Math.floor(Math.random() * 4000) + 1000;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}
//5000-20000
function relicGearPrize() {
  prize = Math.floor(Math.random() * 15000) + 5000;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}
//1000-2500
function dungeonGearPrize() {
  prize = Math.floor(Math.random() * 1500) + 1000;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}
//1000-2500
function seasonOneGearPrize() {
  prize = Math.floor(Math.random() * 1500) + 1000;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}



//////////////////////////// 
///     8) TOGGELS       ///
////////////////////////////
function toggleInvOff() {
    inventory.style.display = "none";
    invetoryToggleOff.style.display = "block";
    invetoryToggleOn.style.display = "none";
}

function toggleInvOn() {
    inventory.style.display = "block";
    invetoryToggleOn.style.display = "block";
    invetoryToggleOff.style.display = "none";
}

function toggleAchOff() {
    AchievementsGallery.style.display = "none";
    achievementToggleOff.style.display = "block";
    achievementToggleOn.style.display = "none";
}

function toggleAchOn() {
    AchievementsGallery.style.display = "block";
    achievementToggleOn.style.display = "block";
    achievementToggleOff.style.display = "none";
}


///////////////////////////////////////////
///             9) COOKIES              ///
///////////////////////////////////////////
function makeSavedData_cookies() {
  const data = {
    //User Cookies
    user: user,
    username: username,
    atTag: atTag,
    //Ach cookies
    //Total Ach
    ach_total: ach_total,
    mili: mili,
    //Mech Ach
    ach_mech_strtGame: ach_mech_strtGame,
    ach_mech_donor: ach_mech_donor,
    ach_mech_giver: ach_mech_giver,
    ach_mech_exterm: ach_mech_exterm,
    ach_mech_alpha: ach_mech_alpha,
    ach_mech_beta: ach_mech_beta,
    //Playing Ach
    ach_lvl_Five: ach_lvl_Five,
    ach_lvl_Ten: ach_lvl_Ten,
    ach_lvl_TwoFive: ach_lvl_TwoFive,
    ach_lvl_Fifty: ach_lvl_Fifty,
    ach_lvl_OneHun: ach_lvl_OneHun,
    ach_lvl_TwoFiveHun: ach_lvl_TwoFiveHun,
    ach_lvl_FiveHun: ach_lvl_FiveHun,
    ach_lvl_OneT: ach_lvl_OneT,
    //Armor Ach
    ach_armors_CommonAll: ach_armors_CommonAll,
    ach_armors_UnommonAll: ach_armors_UnommonAll,
    ach_armors_RareAll: ach_armors_RareAll,
    ach_armors_EpicAll: ach_armors_EpicAll,
    ach_armors_MythicAll: ach_armors_MythicAll,
    ach_armors_RelicFirst: ach_armors_RelicFirst,
     //Dumb Ach
    ach_dumb_youAsked: ach_dumb_youAsked,
    ach_dumb_plusFifty: ach_dumb_plusFifty,
    //Season 1 Ach
    ach_seasonOne_AllArmor: ach_seasonOne_AllArmor,
  };
  localStorage.setItem('savedData', JSON.stringify(data));
}


function callSavedData_cookies() {
  //const
  savedData = JSON.parse(localStorage.getItem('savedData'));
  if (savedData) {
    //User Cookies
    user = savedData.user || false;
    username = savedData.username || "guest";
    atTag = savedData.atTag || "@guest";
    //Ach Cookies
    //Total Ach
    ach_total = savedData.ach_total || "false";
    mili = savedData.mili || 0;
    //Mech Ach
    ach_mech_strtGame = savedData.ach_mech_strtGame || false;
    ach_mech_donor = savedData.ach_mech_donor || false;
    ach_mech_giver = savedData.ach_mech_giver || false;
    ach_mech_exterm = savedData.ach_mech_exterm || false;
    ach_mech_alpha = savedData.ach_mech_alpha || false;
    ach_mech_beta = savedData.ach_mech_beta || false;
    //PLaying Ach
    ach_lvl_Five = savedData.ach_lvl_Five || false;
    ach_lvl_Ten = savedData.ach_lvl_Ten || false;
    ach_lvl_TwoFive = savedData.ach_lvl_TwoFive || false;
    ach_lvl_Fifty = savedData.ach_lvl_Fifty || false;
    ach_lvl_OneHun = savedData.ach_lvl_OneHun || false;
    ach_lvl_TwoFiveHun = savedData.ach_lvl_TwoFiveHun || false;
    ach_lvl_FiveHun = savedData.ach_lvl_FiveHun || false;
    ach_lvl_OneT = savedData.ach_lvl_OneT || false;
    //Armors Ach
    ach_armors_CommonAll = savedData.ach_armors_CommonAll || false;
    ach_armors_UnommonAll = savedData.ach_armors_UnommonAll || false;
    ach_armors_RareAll = savedData.ach_armors_RareAll || false;
    ach_armors_EpicAll = savedData.ach_armors_EpicAll || false;
    ach_armors_MythicAll = savedData.ach_armors_MythicAll || false;
    ach_armors_RelicFirst = savedData.ach_armors_RelicFirst || false;
    //Dumb Ach
    ach_dumb_youAsked = savedData.ach_dumb_youAsked || false;
    ach_dumb_plusFifty = savedData.ach_dumb_plusFifty || false;
    ach_dumb_takingAfterZ = savedData.ach_dumb_takingAfterZ || false; 
    ach_dumb_takingAfterO = savedData.ach_dumb_takingAfterO || false; 
    //Season 1 Ach
    ach_seasonOne_AllArmor = savedData.ach_seasonOne_AllArmor || false;
  }
}


window.gears = gears;

