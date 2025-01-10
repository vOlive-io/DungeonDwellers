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
  setInterval(updateOwnedHeadArmors, 250);
  setInterval(updateOwnedChestArmors, 2500);
  setInterval(updateOwnedLegArmors, 2500);
  setInterval(updateOwnedBootArmors, 2500);
  //Armor Descriptions
  setInterval(updateHeadDiscription, 250); 
  setInterval(updateChestDiscription, 250);
  setInterval(updateLegDiscription, 250);
  setInterval(updateBootDiscription, 250);
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
  alert("Hello! We do not have accounts set up yet, sorry for the inconvenience. Becuase of this you will be known as " + username + "!")
  user = true;   
  makeSavedData_cookies();
  timeA = 0;
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
///        2) Armor                     ///
///        3) Weapons                   ///
///        4) BunBerries                ///
///        5) Achievements              ///
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
var xpTop = 100; //             The amount of XP needed for the player to level up
var xpBoost = 1; //             The amount of XP you get from raw XP
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

var commonLegOwned = true;
var uncommonLegOwned = false;
var rareLegOwned = false;
var epicLegOwned = false;
var mythicLegOwned = false;
var dungeonLegOwned = false;
var seasonOneLegOwned = false;
var relicLegOwned = false;

var commonBootOwned = true;
var uncommonBootOwned = false;
var rareBootOwned = false;
var epicBootOwned = false;
var mythicBootOwned = false;
var dungeonBootOwned = false;
var seasonOneBootOwned = false;
var relicBootOwned = false;


////////////////////////////
///      2) ARMORS       ///
////////////////////////////
//collections and rarities
var collections = ["Classic", "Dumb", "\"What the f***?\"", "Starter", "Explorer\'s", "Fruty", "Unique", "Up Close & Personal"];
var rarities = ["Common", "Uncommon", "Rare", "Epic", "Mythic", "Relic", "Dungeon", "Seasonal"];

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
  ["18", "Basic Explorers Leggings", 3, "How many pockets Does it have?.", "Common", "Explorer\'s", false]
];

var CommonBootArmorTypes = [
  ["19", "Shoes", 0, "Why are they untied?.", "Common", "Starter", true],
  ["20", "Fig Leaf Feet Covers", 1, "Rocks can easily poke through and cause you pain.", "Common", "Fruity", false],
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
// NEEDS DISCRIPTIONS
var RareHeadArmorTypes = [
  ["47", "Steel Helmet", 5, "Knock on steel *try not to break you're fist*.", "Rare", "Classic", false],
  ["47", "Snow Helmet", 5, "Brr it is cold but you have a hot head", "Rare", "Classic", false],
  ["48", "Bronze Helmet", 5, "TUBA POWER!!!!!!!!!!", "Rare", "Classic", false],
  ["49", "Silver Helmet", 5, "Turn it into a ford! It will be like optimus prime :).", "Rare", "Classic", false],
  ["50", "Gold Helmet", 6, "The only metal not made into a coin (maybe).", "Rare", "Classic", false],
  ["51", "Iron Helmet", 6, "NOT A MINECRAFT KNOCKOFF (THe real world has iron too!).", "Rare", "Classic", false],
  ["52", "Feathered Mask", 6, "How many chickens did you slaughter?", "Rare", "Uniquie", false],
  ["53", "Blessed Mud Mask", 6, "Blessed by Priests, this mud will keep you safe.", "Rare", "\"What the f***\"", false],
  ["54", "Jungle Vine Helmet", 6, "Ouch those are prickly vines. But it's soft on the inside. HOW???", "Rare", "Fruity", false],
  ["55", "Medevil Helmet", 5, "Your not knighted, man", "Rare", "Unique", false]
];

var RareChestArmorTypes = [
  ["56", "Steel Chestplate", 5, "Very strong, but not able to stop a bullet.", "Rare", "Classic", false],
  ["56", "Snow Chestplate", 5, "Need some warm water?.", "Rare", "Classic", false],
  ["57", "Bronze Chestplate", 5, "TUBA POWER PREVAILS!!!!!!!!!!!", "Rare", "Classic", false],
  ["58", "Silver Chestplate", 5, "Shiny!", "Rare", "Classic", false],
  ["59", "Gold Chestplate", 6, "You am rich, you are rich!!.", "Rare", "Classic", false],
  ["60", "Iron Chestplate", 6, "You can eat iron 🤯.", "Rare", "Classic", false],
  ["61", "Feathered Wings", 6, "Wait? You can fly!?!", "Rare", "Uniquie", false],
  ["62", "Blessed Mud Chestplate", 6, "Wow saying you are blessed to a big pile of wanabe poop.", "Rare",  "\"What the f***\"", false],
  ["63", "Jungle Vine Chestplate", 6, "Try not to hurt yourself you clumsy person.", "Rare", "Fruity", false],
  ["64", "Medieval Chestplate", 5, "Face it you wont be a knight", "Rare", "Unique", false]
];

var RareLegArmorTypes = [
  ["65", "Steel Leggings", 5, "nice panies.", "Rare", "Classic", false],
  ["65", "Snow Leggings", 5, "You arent in colorado (if you are then  this insult doesnt work).", "Rare", "Classic", false],
  ["66", "Bronze Leggings", 5, "FRIGGIN TUBA POWER NOOB.", "Rare", "Classic", false],
  ["67", "Silver Leggings", 5, "Wow the coins morphed into knee shattering armor.", "Rare", "Classic", false],
  ["68", "Gold Leggings", 6, "Description.", "Classic", false],
  ["69", "Iron Leggings", 6, "Description.", "Rare", "Classic", false],
  ["70", "Feathered Leg Gliders", 6, "Description.", "Rare", "Uniquie", false],
  ["71", "Blessed Mud Leggings", 6, "Description.", "Rare", "\"What the f***\"", false],
  ["72", "Jungle Vine Leggings", 6, "Description.", "Rare", "Fruity", false],
  ["73", "Medevil Leggings", 5, "Description", "Epic", "Unique", false]
];

var RareBootArmorTypes = [
  ["74", "Steel Boots", 5, "Description.", "Rare", "Classic", false],
  ["74", "Snow Boots", 5, "Description.", "Rare", "Classic", false],
  ["75", "Bronze Boots", 5, "Description.", "Rare", "Classic", false],
  ["76", "Silver Boots", 5, "Description.", "Rare", "Classic", false],
  ["77", "Gold Boots", 6, "Description.", "Rare", "Classic", false],
  ["78", "Iron Boots", 6, "Description.", "Rare", "Classic", false],
  ["79", "Feathered Foot Wings", 6, "Description.", "Rare", "Uniquie", false],
  ["80", "Blessed Mud Boots", 6, "Description.", "Rare", "\"What the f***\"", false],
  ["81", "Jungle Vine Boots", 6, "Description.", "Rare", "Fruity", false],
  ["82", "Medevil Boots", 5, "Description", "Epic", "Unique", false]
];

/////////////////////////////////////////////EPIC/////////////////////////////////////////////
//Collections: DONE
// NEEDS DESCRIPTIONS

//NOTE TO ARMAAN:
//ALL DISCRIPTIONS HERE MUST BE NICE!!! BECAUSE THESE ARE GOOD ARMORS!
var EpicHeadArmorTypes = [
  ["84", "Top Hat", 4, "Description", "Epic", "Fancy", false],
  ["84", "Ice Helmet", 4, "Description", "Epic", "\"What the f***\"", false],
  ["84", "Barely Visible Helmet", 4, "Description", "Epic", "Unique", false],
  ["84", "Reinforced Glass Helmet", 4, "Description", "Epic", "\"What the f***\"", false],
  ["84", "Snakeskin Helmet", 4, "Description", "Epic", "Unique", false],
  ["85", "Cooled magma Helmet", 4, "Description", "Epic", "Unique", false],
  ["86", "Holy Bamboo Helmet", 4, "Description", "Epic", "Unique", false],
  ["87", "Diamond Helmet", 4, "Description", "Epic", "Classic", false],
  ["88", "Emerald Helmet", 4, "Description", "Epic", "Unique", false],
  ["89", "Chicken Costume Head Piece", 4, "Description", "Epic", "\"What the f***\"", false]
];

var EpicChestArmorTypes = [
  ["91", "Suit Shirt", 4, "Description", "Epic", "Fancy", false],
  ["91", "Ice Shirt", 4, "Description", "Epic", "\"What the f***\"", false],
  ["91", "Barely Visible Chestplate", 4, "Description", "Epic", "Unique", false],
  ["91", "Reinforced Glass Chestplate", 4, "Description", "Epic", "\"What the f***\"", false],
  ["91", "Snakeskin Chestplate", 4, "Description", "Epic", "Unique", false],
  ["92", "Cooled magma Chestplate", 4, "Description", "Epic", "Unique", false],
  ["93", "Holy Bamboo Chestplate", 4, "Description", "Epic", "Unique", false],
  ["94", "Diamond Chestplate", 4, "Description", "Epic", "Classic", false],
  ["88", "Emerald Chestplate", 4, "Description", "Epic", "Unique", false],
  ["95", "Chicken Suit Chest Piece", 4, "Description", "Epic", "\"What the f***\"", false]
];

var EpicLegArmorTypes = [
  ["97", "Suit Pants", 4, "Description", "Epic", "Fancy", false],
  ["97", "Ice Pants", 4, "Description", "Epic", "\"What the f***\"", false],
  ["97", "Barely Visible Leggings", 4, "Description", "Epic", "Unique", false],
  ["97", "Reinforced Glass Leggings", 4, "Description", "Epic", "\"What the f***\"", false],
  ["97", "Snakeskin Leggings", 4, "Description", "Epic", "Unique", false],
  ["98", "Cooled magma Leggings", 4, "Description", "Epic", "Unique", false],
  ["99", "Holy Bamboo Leggings", 4, "Description", "Epic", "Unique", false],
  ["100", "Diamond Leggings", 4, "Description", "Epic", "Classic", false],
  ["101", "Emerald Leggings", 4, "Description", "Epic", "Unique", false],
  ["102", "Chicken Suit Leg Piece", 4, "Description", "Epic", "\"What the f***\"", false]
];

var EpicBootArmorTypes = [
  ["104", "Work Boots", 4, "Description", "Epic", "Fancy", false],
  ["104", "Ice Boots", 4, "Description", "Epic", "\"What the f***\"", false],
  ["104", "Barely Visible Boots", 4, "Description", "Epic", "Unique", false],
  ["104", "Reinforced Glass Boots", 4, "Description", "Epic", "\"What the f***\"", false],
  ["104", "Snakeskin Boots", 4, "Description", "Epic", "Unique", false],
  ["105", "Cooled magma Boots", 4, "Description", "Epic", "Unique", false],
  ["106", "Holy Bamboo Boots", 4, "Description", "Epic", "Unique", false],
  ["107", "Diamond Boots", 4, "Description", "Epic", "Classic", false],
  ["108", "Emerald Boots", 4, "Description", "Epic", "Unique", false],
  ["109", "Chicken Suit Boot Piece", 4, "Description", "Epic", "\"What the f***\"", false]
];

//FORGED
var ForgedEpicHeadArmorTypes = [
  ["206", "Lab Googles", 4, "Description", "Epic (Forged)", "Fancy", false],
  ["206", "Surgeon\'s Head Cover and Mask", 4, "Description", "Epic (Forged)", "Fancy", false],
  ["206", "Invisible Helmet", 4, "Description", "Epic (Forged)", "Unique", false],
  ["206", "Racecar Helmet", 4, "Description", "Epic (Forged)", "Fancy", false],
  ["111", "Dragon Skin Hood", 4, "Description", "Epic (Forged)", "Unique", false],
  ["206", "Unicorn Suit Head Piece", 4, "Description", "Epic (Forged)", "\"What the f***\"", false]
];

var ForgedEpicChestArmorTypes = [
  ["206", "Lab Coat", 4, "Description", "Epic (Forged)", "Fancy", false],
  ["206", "Surgeon\'s Scrubs and Stethoscope", 4, "Description", "Epic (Forged)", "Fancy", false],
  ["206", "Invisible Chestplate", 4, "Description", "Epic (Forged)", "Unique", false],
  ["206", "Racecar Suit", 4, "Description", "Epic (Forged)", "Fancy", false],
  ["111", "Dragon Skin Robe", 4, "Description", "Epic (Forged)", "Unique", false],
  ["206", "Unicorn Suit Chest Piece", 4, "Description", "Epic (Forged)", "\"What the f***\"", false]
];

var ForgedEpicLegArmorTypes = [
  ["206", "Lab Pants", 4, "Description", "Epic (Forged)", "Fancy", false],
  ["206", "Surgeon\'s Pant Scrubs and Tools", 4, "Description", "Epic (Forged)", "Fancy", false],
  ["206", "Invisible Leggings", 4, "Description", "Epic (Forged)", "Unique", false],
  ["206", "Racecar Pants", 4, "Description", "Epic (Forged)", "Fancy", false],
  ["111", "Dragon Skin Termals", 4, "Description", "Epic (Forged)", "Unique", false],
  ["206", "Unicorn Suit Leg Piece", 4, "Description", "Epic (Forged)", "\"What the f***\"", false]
];

var ForgedEpicBootArmorTypes = [
  ["206", "Lab Shoes", 4, "Description", "Epic (Forged)", "Fancy", false],
  ["206", "Surgeon\'s Work Boots", 4, "Description", "Epic (Forged)", "Fancy", false],
  ["206", "Invisible Boots", 4, "Description", "Epic (Forged)", "Unique", false],
  ["206", "Racecar Shoes", 4, "Description", "Epic (Forged)", "Fancy", false],
  ["111", "Dragon Skin Sheos", 4, "Description", "Epic (Forged)", "Unique", false],
  ["206", "Unicorn Suit Boot Piece", 4, "Description", "Epic (Forged)", "\"What the f***\"", false]
];
/////////////////////////////////////////////MYTHIC/////////////////////////////////////////////
//Collections: DONE
// NEEDS DESCRIPTIONS
var MythicHeadArmorTypes = [
  ["83", "Coral Helmet", 4, "Description", "Mythic", "Unique", false],
  ["110", "Gold encrusted Silk Vail", 4, "Description", "Mythic", "Unique", false],
  ["112", "Rhodochrosite Helmet", 4, "Description", "Mythic", "Exotic Gems", false],
  ["113", "Amber Helmet", 4, "Description", "Mythic", "Exotic Gems", false],
  ["114", "Mythrill Helmet", 4, "Description", "Mythic", "Exotic Gems", false],
  ["114", "Necrem Helmet", 4, "Description", "Mythic", "Exotic Gems", false],
  ["114", "Tsavorite Helmet", 4, "Description", "Mythic", "Exotic Gems", false],
  ["115", "Ghoul Skin Head Cover", 4, "Description", "Mythic", "Unique", false]
];

var MythicChestArmorTypes = [
  ["90", "Coral Chestplate", 4, "Description", "Mythic", "Uniquie", false],
  ["116", "Gold encrusted Silk Robe", 4, "Description", "Mythic", "Unique", false],
  ["118", "Rhodochrosite Chestplate", 4, "Description", "Mythic", "Exotic Gems", false],
  ["119", "Amber Chestplate", 4, "Description", "Mythic", "Exotic Gems", false],
  ["120", "Mythrill Chestplate", 4, "Description", "Mythic", "Exotic Gems", false],
  ["120", "Necrem Chestplate", 4, "Description", "Mythic", "Exotic Gems", false],
  ["120", "Tsavorite Chestplate", 4, "Description", "Mythic", "Exotic Gems", false],
  ["121", "Ghoul Skin Torso Cover", 4, "Description", "Mythic", "Unique", false]
];

var MythicLegArmorTypes = [
  ["96", "Coral Leggings", 4, "Description", "Mythic", "Unique", false],
  ["122", "Gold encrusted Silk Thermals", 4, "Description", "Mythic", "Unique", false],
  ["124", "Rhodochrosite Leggings", 4, "Description", "Mythic", "Exotic Gems", false],
  ["125", "Amber Leggings", 4, "Description", "Mythic", "Exotic Gems", false],
  ["126", "Mythrill Leggings", 4, "Description", "Mythic", "Exotic Gems", false],
  ["126", "Necrem Leggings", 4, "Description", "Mythic", "Exotic Gems", false],
  ["126", "Tsavorite Leggings", 4, "Description", "Mythic", "Exotic Gems", false],
  ["127", "Ghoul Skin Leg Covers", 4, "Description", "Mythic", "Unique", false]
];

var MythicBootArmorTypes = [
  ["103", "Coral Boots", 4, "Description", "Mythic", "Unique", false],
  ["128", "Amber encrusted Silk Slipers", 4, "Description", "Mythic", "Unique", false],
  ["130", "Rhodochrosite Boots", 4, "Description", "Mythic", "Exotic Gems", false],
  ["131", "Amber Boots", 4, "Description", "Mythic", "Exotic Gems", false],
  ["132", "Mythrill Boots", 4, "Description", "Mythic", "Exotic Gems", false],
  ["132", "Necrem Boots", 4, "Description", "Mythic", "Exotic Gems", false],
  ["132", "Tsavorite Boots", 4, "Description", "Mythic", "Exotic Gems", false],
  ["133", "Ghoul Skin Foot Covers", 4, "Description", "Mythic", "Unique", false]
];

//FORGED

var ForgedMythicHeadArmorTypes = [
  ["110", "Amber encrusted Silk Vail", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["111", "Mythrill encrusted Silk Vail", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["112", "Rhodochrosite encrusted Silk Vail", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["113", "Coral encrusted Silk Vail", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["114", "Necromancer\'s encrusted Silk Vail", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["115", "Tsavorite encrusted Silk Vail", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["115", "Polar Opposite Helmet", 4, "Description", "Mythic (Forged)", "Fancy", false],
  ["115", "Energy Opposite Helmet", 4, "Description", "Mythic (Forged)", "Fancy", false]
];

var ForgedMythicChestArmorTypes = [
  ["116", "Amber encrusted Silk Robe", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["117", "Mythrill encrusted Silk Robe", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["118", "Rhodochrosite encrusted Silk Robe", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["119", "Coral encrusted Silk Robe", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["120", "Necromancer\'s encrusted Silk Robe", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["121", "Tsavorite encrusted Silk Robe", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["115", "Polar Opposite Chestplate", 4, "Description", "Mythic (Forged)", "Fancy", false],
  ["115", "Energy Opposite Chestplate", 4, "Description", "Mythic (Forged)", "Fancy", false]
];

var ForgedMythicLegArmorTypes = [
  ["122", "Amber encrusted Silk Thermals", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["123", "Mythrill encrusted Silk Thermals", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["124", "Rhodochrosite encrusted Silk Thermals", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["125", "Coral encrusted Silk Thermals", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["126", "Necromancer\'s encrusted Silk Thermals", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["127", "Tsavorite encrusted Silk Thermals", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["115", "Polar Opposite Leggings", 4, "Description", "Mythic (Forged)", "Fancy", false],
  ["115", "Energy Opposite Leggings", 4, "Description", "Mythic (Forged)", "Fancy", false]
];

var ForgedMythicChestArmorTypes = [
  ["128", "Amber encrusted Silk Slipers", 4, "Description", "Mythic (Forged)", "Unique", false],
  ["129", "Mythrill encrusted Silk Slipers", 4, "Description", "Mythic (Forged)", "Unique", false],
  ["130", "Rhodochrosite encrusted Silk Slipers", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["131", "Coral encrusted Silk Slipers", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["132", "Necromancer\'s encrusted Silk Slipers", 4, "Description", "Mythic (Forged)", "Exotic Gems", false],
  ["133", "Tsavorite encrusted Silk Slipers", 4, "Description", "Mythic (Forged)", "Unique", false],
  ["115", "Polar Opposite Boots", 4, "Description", "Mythic (Forged)", "Fancy", false],
  ["115", "Energy Opposite Boots", 4, "Description", "Mythic (Forged)", "Fancy", false]
];

/////////////////////////////////////////////////////////////////////////////
//////////////   ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ DONE ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑  //////////////
/////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////
//////////////   →→→→→→→→→→→→→→→→→→ IDEAS ←←←←←←←←←←←←←←←←←←  //////////////
////////////////////////////////////////////////////////////////////////////
/*
--Set up gear giver
  --Wiki
  --Credits
  --Inventory
  --Forge
  --Achievements
  --Google form

--Set up forge
  --Recipes
  --Assets
  
//armor
armor + item + scroll = _______

//item
item + item = ______




--Achievements
  --Array
  --Assets
  --Unlocking



*/
/////////////////////////////////////////////////////////////////////////////
//////////////   ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ COMING SOON ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  //////////////
/////////////////////////////////////////////////////////////////////////////

    
/////////////////////////////////////////////RELIC/////////////////////////////////////////////
//Collections: NOT DONE
var FullRelicChestArmorTypes = [
  ["32", "Thriving Garments", 50, "", "Full Relic", "", false],            //Ancient: The Prosporer ------- Color: Lime + Gold (Money) ------- Branch----------------(Unchosen)
  ["32", "Living Gown", 50, "", "Full Relic", "", false],                  //Ancient: The Hand  ----------- Color: Blue (Boost) -------------- Measurement Stick-----(Unchosen)
  ["32", "Voistiene Entity", 50, "", "Full Relic", "", false],             //Ancient: The Void ------------ Color: Purple (Negaite) ---------- Liquid----------------(Unchosen)
  ["32", "Miezin Cloud", 50, "", "Full Relic", "", false],                 //Ancient: The Mist Forge  ----- Color: White (Mindbending) ------- Pepper Spray----------Zharria
  ["32", "Rosax Robes", 50, "", "Full Relic", "", false],                  //Ancient: The Nightmare ------- Color: Rose (Leach) -------------- Hands ----------------Olive
  ["32", "HollowGhast Armor", 50, "", "Full Relic", "", false],            //Ancient: The HallowGhast  ---- Color: Black (Damage) ------------ Scythe ---------------Armaan
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
///     3) WEAPONS       ///
////////////////////////////
//Collections: NOT DONE

var CommonHeadWeaponTypes = [
  ["-", "Fists", 1, "Wow, your so strong! *sarcasm*", "Common", "Starter", true],
  ["-", "Styrofoam Sword", 2, "Wow so daring and bold a sword made of styrofoam!!!", "Common", "Dumb", false],
  ["-", "Rusty Horseshoes", 2, "Slow, but reliable!", "Common", "Unique", false],
  ["-", "Pillow", 2, "It\'s kinda gross to think that you beat them up and still sleep with the pillow!", "Common", "\"What the f***?\"", false],
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
  ["-", "Pen", 5, "Write your enemies to death!", "Uncommon", "Dumb", false],
  ["-", "Fishing Pole", 5, "WAIT! IT BRINGS THEM CLOSER???!???!?!",  "Uncommon", "\"What the f***?\"", false],
  ["-", "Role of Tape", 5, "You wrap them up so fast that it hurts...", "Uncommon", "Dumb", false],
  ["-", "Sharpened Rocks", 6, "Very close range, but excellent damage.", "Uncommon", "Dumb", false],
  ["-", "Crow Bar", 6, "It is good for hitting them on the head.", "Uncommon", "Classic", false],
  //Sets
  ["-", "Stick", 6, "LOOK IT'S A STICK!!", "Uncommon", false],
  ["-", "Yard Stick", 6, "36 inches or 3 feet or 1 yard!!!", "Uncommon", false],
  ["-", "Hot Water", 6, "They slip and fall!!", "Uncommon", false],
  ["-", "New Pepper Spray", 6, "AHH, it's a bear!!!", "Uncommon", false],
  ["-", "Gaunlets", 6, "The Classic style of fighting... but it does hurt.", "Uncommon", false],
  ["-", "Stone Sword", 6, "The stuff of warriors!!!", "Uncommon", false],
  //Explorers
  ["-", "New Explores Knife", 7, "The stuff of new legends!!!", "Uncommon", false]
];

//Collections: NOT DONE
var RareHeadWeaponTypes = [
  ["-", "Rusty Katana", 6, "STABY STAB STAB!", "Rare", "\"What the f***?\"", false],
  ["-", "Battle Staff", 6, "Why is it warm???", "Rare", "Unique", false],
  ["-", "Living snake", 7, "It bites people, even you!!", "Rare", "\"What the f***?\"", false],
  ["-", "Daggers", 8, "Its new and sharp and stabs harder than a dart!", "Rare", "Up Close & Personal", false],
  ["-", "Curved Daggers", 9, "The new curved blade enhances the strength and effect of these daggers!", "Rare", "Up Close & Personal", false],
  ["-", "Sickels", 9, "What used to be for the harvesting of wheat is now for the harvesting of enemies.", "Rare", "Up Close & Personal", false],
  ["-", "Scissors", 9, "Split them like chopsticks for inescapable PAIN AND TORTURE!!!!", "Rare", "Up Close & Personal", false],
  //Sets
  ["-", "Dead Tree Branch", 8, "LOOK IT'S A DEAD TREE BRANCH!!", "Rare", false],
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
  ["-", "Sharp Katana", 8, "STABY STAB STAB!!! KILLY KILL KILL!!!", "\"What the f***?\"", "Epic", false],
  ["-", "Reinforced Battle Staff", 8, "Why is it hot???", "Epic", "Unique", false],
  ["-", "Wild Living snake", 9, "It bites people, 20 at once!!", "Epic", "\"What the f***?\"", false],
  ["-", "Mace", 9, "SlAM DUNK!!", "Epic", "Classic", false],
  ["-", "Fire Extinguisher", 9, "Spray them to death!!", "Epic", "\"What the f***?\"", false],
  ["-", "Hammer", 9, "BAMM, it hits hard!!", "Epic", "Classic", false],
  //Sets
  ["-", "Alive Tree Branch", 10, "LOOK IT'S AN ALIVE TREE BRANCH!!", "Epic", false],
  ["-", "Mile Stick", 10, "63360 inches or 5280 feet, 1760 yards, 1609ish meters or one mile!!", "Epic", false],
  ["-", "Gasoline and Matches", 9, "They slip and fall, break their heads and get lit on fire!", "Epic", false],
  ["-", "Industrial Strength Pepper Spray", 10, "AHH, its bear monster!!!", "Epic", false],
  ["-", "Mualer's Bindings", 10, "Even stronger bindings, made out of claws of animals whose name real remains unknown and have been dubbed maulers.", "Epic", false],
  ["-", "Golden Sword", 10, "The stuff of warriors!!!.", "Epic", false],
  //Explorers
  ["-", "Duplex Explores Knife", 11, "The stuff of duplex legends!!!", "Epic", false]
];

//Collections: NOT DONE
var MythicHeadWeaponTypes = [
  ["-", "Fire Blade", 12, "The ring of fire? Oh, you mean this thing!", "Mythic", false],
  ["-", "Dragon Katana", 12, "A strong curse emanates from the blade!", "Mythic", false],
  ["-", "Necromancer Staff", 12, "Summon minions to fight for you!", "Mythic", false],
  ["-", "Serpentine Basket", 12, "It bites people, 200 at once!! But not you!!", "Mythic", false],
  ["-", "Spiked Mace", 13, "SlAM DUNK BUT WITH THORNS!!", false],
  ["-", "Runic Hammer", 12, "Just a better version of a hammer!!", "Mythic", false],
  //Sets
  ["-", "Thriving Tree Branch", 10, "LOOK IT'S A THRIVING TREE BRANCH!!", "Mythic", false],
  ["-", "Retractable Mile Stick", 10, "It's kind of hard to carry around a mile of wood, this with make it so your arms don\'t tire out as much!", "Mythic", false],
  ["-", "Nuclear Acid", 9, "They slip and fall, break their heads, get lit on fire and become radioactive!", "Mythic", false],
  ["-", "Aquatex Spray", 10, "AHH, its dev!", "Mythic", false],
  ["-", "Mauler's soul bindings", 10, "The Mauler's paws sewen into the bindings that have  a strong magic radiating from them, causing powerful attacks and scratches.", "Mythic", false],
  ["-", "Mythril Sword", 10, "The stuff of warriors!!!", "Mythic", false],
  //Explorers
  ["-", "Blessed Explores Knife", 11, "The stuff of real legends!!!", "Mythic", false]
];


////////////////////////////
////  4) BUN BERRIES     ///
////////////////////////////
//TOTALS
var totalBunBerriesEver = 0; //  Total Number of Bun Berries Even Owned (Owned + Eaten)
var totalBunBerries = 0; //      Total Number of Bun Berries Owned
var totalEaten = 0; //           Total Number of Bun Berries Eaten
//BASIC BUN BERRIES
var bunberries = [
  ["ID", "NAME", "DISCRIPTION", "ASSET", "TYPE", "AMOUNT"],
  //BASIC
  ["--", "Luck Bun Berry", "DISCRIPTION", "----", "Basic", 0],   //           +5 Luck
  ["--", "Strenth Bun Berry", "DISCRIPTION", "----", "Basic", 0],  //         +5 Strength
  ["--", "Stealth Bun Berry", "DISCRIPTION", "----", "Basic", 0],  //         +5 Stealth
  ["--", "Water Bun Berry", "DISCRIPTION", "----", "Basic", 0],  //           +5 Water 
  ["--", "Saturation Bun Berry", "DISCRIPTION", "----", "Basic", 0],  //      +10 Saturation
  //HEALTH
  ["--", "Heath Bun Berry (Lv 1)", "DESCRIPTION", "----", "Heath", 0],  //    restores 5% of Heath
  ["--", "Heath Bun Berry (Lv 2)", "DESCRIPTION", "----", "Heath", 0],  //    restores 10% of Heath
  ["--", "Heath Bun Berry (Lv 3)", "DESCRIPTION", "----", "Heath", 0],  //    restores 25% of Heath
  ["--", "Heath Bun Berry (Lv 4)", "DESCRIPTION", "----", "Heath", 0],  //    restores 50% of Heath
  ["--", "Heath Bun Berry (Lv 5)", "DISCRIPTION", "----", "Heath", 0],  //    restores 100% of Heath
  //XP
  ["--", "XP Bun Berry (Lv 1)", "DISCRIPTION", "----", "XP", 0],  //          +100 xp
  ["--", "XP Bun Berry (Lv 2)", "DISCRIPTION", "----", "XP", 0],  //          +500 xp
  //SPECIAL
  ["--", "Shadow Bun Berry", "DISCRIPTION", "----", "Special", 0],  //        +10 Stealth, +5 Heath, +3 Luck
  ["--", "Lava Bun Berry", "DISCRIPTION", "----", "Special", 0],  //          +10 Strength, +5 Stealth, +3 Heath
  ["--", "Aqua Bun Berry", "DISCRIPTION", "----", "Special", 0],  //          +10 Water, +5 Strength, +3 Heath
  ["--", "Jester Bun Berry", "DISCRIPTION", "----", "Special", 0]  //        +10 Luck, +5 Stealth, +3 Heath
];



///////////////////////////////// 
///      5) ACHIEVEMENTS      ///
/////////////////////////////////
//TOTALS
var ach_total = 0; //                  Total Number of Achievements
var achievements = [
  ["ID", "NAME", "DISCRIPTION", "ACH_ID", "ASSET", "TYPE", "UNLOCKED"],
  //Mech
  ["--", "Started Game", "DISCRIPTION", "ach_mech_strtGame", "ASSET", "Mechanical", false], //             Started game
  ["--", "Doner", "DISCRIPTION", "ach_mech_donor", "ASSET", "Mechanical", false], //                       The player has given the devs money
  ["--", "Giver", "DISCRIPTION", "ach_mech_giver", "ASSET", "Mechanical", false], //                       The player has given the devs feedback that has been put in the game 
  ["--", "Exterminator", "DISCRIPTION", "ach_mech_exterm", "ASSET", "Mechanical", false], //               The player has reported a bug in the game
  ["--", "Alpha Tester", "DISCRIPTION", "ach_mech_alpha", "ASSET", "Mechanical", false], //                The player was a Alpha tester
  ["--", "Beta Tester", "DISCRIPTION", "ach_mech_beta", "ASSET", "Mechanical", false],  //                 The player was a Beta tester
  //Playing
  ["--", "Level 5", "DISCRIPTION", "ach_lvl_Five", "ASSET", "Playing", false],  //                         Got to level 5
  ["--", "Level 10", "DISCRIPTION", "ach_lvl_Ten", "ASSET", "Playing", false],  //                         Got to level 10
  ["--", "Level 25", "DISCRIPTION", "ach_lvl_TwoFive", "ASSET", "Playing", false],  //                     Got to level 25
  ["--", "Level 50", "DISCRIPTION", "ach_lvl_Fifty", "ASSET", "Playing", false],  //                       Got to level 50
  ["--", "Level 100", "DISCRIPTION", "ach_lvl_OneHun", "ASSET", "Playing", false],  //                     Got to level 100
  ["--", "Level 250", "DISCRIPTION", "ach_lvl_TwoFiveHun", "ASSET", "Playing", false],  //                 Got to level 250
  ["--", "Level 500", "DISCRIPTION", "ach_lvl_FiveHun", "ASSET", "Playing", false],  //                    Got to level 500
  ["--", "Level 1000", "DISCRIPTION", "ach_lvl_OneT", "ASSET", "Playing", false], //                       Got to level 1000
  //Dumb
  ["--", "You Asked", "DISCRIPTION", "ach_dumb_youAsked", "ASSET", "Playing", false],  //                  Clicked on this achivment
  ["--", "More Than Fifty Fifty", "DISCRIPTION", "ach_dumb_plusFifty", "ASSET", "Playing", false],  //     Has more unlocked achievements than locked ones
  ["--", "Taking after Zharria", "DISCRIPTION", "ach_dumb_takingAfterZ", "ASSET", "Playing", false],  //   Has Zharria's second hand setup (Peper Spray + Holy Bamboo + Panda)
  ["--", "Taking after Olive", "DISCRIPTION", "ach_dumb_takingAfterO", "ASSET", "Playing", false],  //     Has Olive's second hand setup (Necromanserr Staff  + Necromancer's Encrusted Silk + Dog)
];

//ARMOR ACHIEVEMENTS
var ach_armors_CommonAll = false; //    Unlocked all common armors
var ach_armors_UnommonAll = false; //   Unlocked all uncommon armors
var ach_armors_RareAll = false; //      Unlocked all rare armors
var ach_armors_EpicAll = false; //      Unlocked all epic armors
var ach_armors_Mythic = false; //    Unlocked all mythic armors
var ach_armors_RelicFirst = false; //   Unlocked one relic

//SEASON ONE ACHIEVEMENTS
var ach_seasonOne_AllArmor//  Unlocked all season one armors

if (ach_lvl_Five == true) {
  let image = document.getElementById("levelOneId");
  image.src = "assets/ach/ach_startedGame.png"
}


////////////////////////////
///     6) ITEMS         ///
////////////////////////////
// "Customization Objects", "Gross Objects", "Tactical Objects", "Food Objects", "Stylish Objects", "Magical Objects", "Forging Objects", "Inventory Objects"

var commonItems = [
  ["--", "Pencil", "DISCRIPTION", true, 1, 1, "Common", "Customization Objects", 0], //            Colors the screen Gray     (Leaves LOTS patches of old color)
  ["--", "Item Sack", "DISCRIPTION", true, 1, 1, "Common", "Inventory Objects", 0], //                         + 1 Slot

];
var unsortedItems = [
  ["ID", "NAME", "DISCRIPTION", "USABLE", "USES", "STARTING USES", "RARITY", "COLLECTIONS", "AMOUNT"],
  //Screen changer ------------ {
  //Mid
  ["--", "Red Marker", "DISCRIPTION", true, 1, 1, "Common", "Customization Objects", 0], //        Colors the screen Red      (Leaves SOME patches of old color)
  ["--", "Orange Marker", "DISCRIPTION", true, 1, 1, "Common", "Customization Objects", 0], //     Colors the screen Orange   (Leaves SOME patches of old color)
  ["--", "Yellow Marker", "DISCRIPTION", true, 1, 1, "Common", "Customization Objects", 0], //     Colors the screen Yellow   (Leaves SOME patches of old color)
  ["--", "Green Marker", "DISCRIPTION", true, 1, 1, "Common", "Customization Objects", 0], //      Colors the screen Green    (Leaves SOME patches of old color)
  ["--", "Blue Marker", "DISCRIPTION", true, 1, 1, "Common", "Customization Objects", 0], //       Colors the screen Blue     (Leaves SOME patches of old color)
  ["--", "Purple Marker", "DISCRIPTION", true, 1, 1, "Common", "Customization Objects", 0], //     Colors the screen Purple   (Leaves SOME patches of old color)
  ["--", "Pink Marker", "DISCRIPTION", true, 1, 1, "Common", "Customization Objects", 0], //       Colors the screen Pink     (Leaves SOME patches of old color)
  ["--", "Black Marker", "DISCRIPTION", true, 1, 1, "Common", "Customization Objects", 0], //      Colors the screen Black    (Leaves SOME patches of old color)
  ["--", "Brown Marker", "DISCRIPTION", true, 1, 1, "Common", "Customization Objects", 0], //      Colors the screen Brown    (Leaves SOME patches of old color)
  ["--", "Gray Marker", "DISCRIPTION", true, 1, 1, "Common", "Customization Objects", 0], //       Colors the screen Gray     (Leaves SOME patches of old color)
  ["--", "White Marker", "DISCRIPTION", true, 1, 1, "Common", "Customization Objects", 0], //      Colors the screen White    (Leaves SOME patches of old color)
  //Good
  ["--", "Red Paint", "DISCRIPTION", true, 2, 2, "Common", "Customization Objects", 0], //         Colors the screen Red      (Leaves FEW patches of old color)
  ["--", "Orange Paint", "DISCRIPTION", true, 2, 2, "Common", "Customization Objects", 0], //      Colors the screen Orange   (Leaves FEW patches of old color)
  ["--", "Yellow Paint", "DISCRIPTION", true, 2, 2, "Common", "Customization Objects", 0], //      Colors the screen Yellow   (Leaves FEW patches of old color)
  ["--", "Green Paint", "DISCRIPTION", true, 2, 2, "Common", "Customization Objects", 0], //       Colors the screen Green    (Leaves FEW patches of old color)
  ["--", "Blue Paint", "DISCRIPTION", true, 2, 2, "Common", "Customization Objects", 0], //        Colors the screen Blue     (Leaves FEW patches of old color)
  ["--", "Purple Paint", "DISCRIPTION", true, 2, 2, "Common", "Customization Objects", 0], //      Colors the screen Purple   (Leaves FEW patches of old color)
  ["--", "Pink Paint", "DISCRIPTION", true, 2, 2, "Common", "Customization Objects", 0], //        Colors the screen Pink     (Leaves FEW patches of old color)
  ["--", "Black Paint", "DISCRIPTION", true, 2, 2, "Common", "Customization Objects", 0], //       Colors the screen Black    (Leaves FEW patches of old color)
  ["--", "Brown Paint", "DISCRIPTION", true, 2, 2, "Common", "Customization Objects", 0], //       Colors the screen Brown    (Leaves FEW patches of old color)
  ["--", "Gray Paint", "DISCRIPTION", true, 2, 2, "Common", "Customization Objects", 0], //        Colors the screen Gray     (Leaves FEW patches of old color)
  ["--", "White Paint", "DISCRIPTION", true, 2, 2, "Common", "Customization Objects", 0], //       Colors the screen White    (Leaves FEW patches of old color)
  // }
  //Jars ---------- {
  //Gross
  ["--", "Burp in a jar", "DISCRIPTION", true, 1, 1, "Common", "Gross Objects", 0], //                     Deals one health to all     (Battels & Users)
  ["--", "Barf In a jar", "DISCRIPTION", true, 1, 1, "Common", "Gross Objects", 0], //                     Deals five health to all    (Battels & Users)
  ["--", "Fart in a jar", "DISCRIPTION", true, 1, 1, "Common", "Gross Objects", 0], //                     Deals 10% health to all     (Battels & Users)
  ["--", "Poop in a jar", "DISCRIPTION", true, 1, 1, "Common", "Gross Objects", 0], //                     Deals 50% health to all     (Battels & Users)
  //Food
  ["--", "Smelly Cheese in a jar", "DISCRIPTION", true, 1, 1, "Common", "Food Objects", 0], //             Deals one health to enemies  (Battels)
  ["--", "Pickels In a jar", "DISCRIPTION", true, 1, 1, "Common", "Food Objects", 0], //                   Deals five health to enemies (Battels)
  ["--", "20 day old milkshake in a jar", "DISCRIPTION", true, 1, 1, "Common", "Gross Objects", 0], //     Deals 10% health to enemies  (Battels)
  ["--", "Tactical Gas in a jar", "DISCRIPTION", true, 1, 1, "Common", "Tactical Objects", 0], //          Deals 50% health to enemies  (Battels)
  // }
  
  //Lipsticks  ------- {
  //Basic
  ["--", "Basic Red Lipstick", "DISCRIPTION", true, 3, 3, "Common", "Stylish Objects", 0], //             + 3 Strenth     (User)
  ["--", "Basic Orange Lipstick", "DISCRIPTION", true, 3, 3, "Common", "Stylish Objects", 0], //          + 3 Health      (User)
  ["--", "Basic Yellow Lipstick", "DISCRIPTION", true, 3, 3, "Common", "Stylish Objects", 0], //          + 3 Sat         (User)
  ["--", "Basic Green Lipstick", "DISCRIPTION", true, 3, 3, "Common", "Stylish Objects", 0], //           + 3 Luck        (User)
  ["--", "Basic Blue Lipstick", "DISCRIPTION", true, 3, 3, "Common", "Stylish Objects", 0], //            + 3 Water       (User)
  ["--", "Basic Purple Lipstick", "DISCRIPTION", true, 3, 3, "Common", "Stylish Objects", 0], //          + 3 Stall       (User)
  ["--", "Basic Black Lipstick", "DISCRIPTION", true, 3, 3, "Common", "Stylish Objects", 0], //           + 3 Stealth     (User)
  //Deluxe lipstick
  ["--", "Deluxe Red Lipstick", "DISCRIPTION", true, 6, 6, "Common", "Stylish Objects", 0], //            + 5 Strenth     (User)
  ["--", "Deluxe Orange Lipstick", "DISCRIPTION", true, 6, 6, "Common", "Stylish Objects", 0], //         + 5 Health      (User)
  ["--", "Deluxe Yellow Lipstick", "DISCRIPTION", true, 6, 6, "Common", "Stylish Objects", 0], //         + 5 Sat         (User)
  ["--", "Deluxe Green Lipstick", "DISCRIPTION", true, 6, 6, "Common", "Stylish Objects", 0], //          + 5 Luck        (User)
  ["--", "Deluxe Blue Lipstick", "DISCRIPTION", true, 6, 6, "Common", "Stylish Objects", 0], //           + 5 Water       (User)
  ["--", "Deluxe Purple Lipstick", "DISCRIPTION", true, 6, 6, "Common", "Stylish Objects", 0], //         + 5 Stall       (User)
  ["--", "Deluxe Black Lipstick", "DISCRIPTION", true, 6, 6, "Common", "Stylish Objects", 0], //          + 5 Stealth     (User)
  // }
  
  //Poitions ------ { 
  ["--", "Potion Bottle ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //                The item used to make the "EVERY POTION IN THE GAME" 
  ["--", "Ranged Potion Bottle ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //         The item used to make the "EVERY RANGED POTION IN THE GAME"
  //items for potions
  ["--", "Bunch of Metal Twigs ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //                The item used to make the "Strenth" Potion
  //Drink
  ["--", "Strenth Potion", "DISCRIPTION", true, 3, 3, "Common", "Magical Objects", 0], //                 + 10 Strenth     (User)
  ["--", "Health Potion", "DISCRIPTION", true, 3, 3, "Common", "Magical Objects", 0], //                  + 10 Health      (User)
  ["--", "Saturation Potion", "DISCRIPTION", true, 3, 3, "Common", "Magical Objects", 0], //              + 10 Sat         (User)
  ["--", "Luck Potion", "DISCRIPTION", true, 3, 3, "Common", "Magical Objects", 0], //                    + 10 Luck        (User)
  ["--", "Stall Potion", "DISCRIPTION", true, 3, 3, "Common", "Magical Objects", 0], //                   + 10 Stall       (User)
  ["--", "Stealth Potion", "DISCRIPTION", true, 3, 3, "Common", "Magical Objects", 0], //                 + 10 Stealth     (User)
  //Splash
  ["--", "Weakness Splash Potion", "DISCRIPTION", true, 3, 3, "Common", "Magical Objects", 0], //         - 10 Strenth     (Battles)
  ["--", "Pain Splash Potion", "DISCRIPTION", true, 3, 3, "Common", "Magical Objects", 0], //             - 10 Health      (Battles)
  ["--", "Emptyness Splash Potion", "DISCRIPTION", true, 3, 3, "Common", "Magical Objects", 0], //        - 10 Sat         (Battles)
  ["--", "Anti-Stall Splash Potion", "DISCRIPTION", true, 3, 3, "Common", "Magical Objects", 0], //       - 10 Stall       (Battles)
  ["--", "Dryness Splash Potion", "DISCRIPTION", true, 3, 3, "Common", "Magical Objects", 0], //          - 10 Water       (Battles)
  // }

  //MANAGEMENT ITEMS  ------------ {
  ["--", "Large Item Sack", "DISCRIPTION", true, 1, 1, "Common", "Inventory Objects", 0], //                   + 4 Slots
  ["--", "XL Item Sack", "DISCRIPTION", true, 1, 1, "Common", "Inventory Objects", 0], //                      + 10 Slots
  ["--", "Super Item Sack", "DISCRIPTION", true, 1, 1, "Common", "Inventory Objects", 0], //                   + 30 Slots
  ["--", "Mega Item Sack", "DISCRIPTION", true, 1, 1, "Common", "Inventory Objects", 0], //                    + 70 Slots
  ["--", "Ancient\'s Item Sack", "DISCRIPTION", true, 1, 1, "Common", "Inventory Objects", 0], //              + 150 Slots
  //}
  
  //Recipes & Forge Stuff ------ {
  
  //Opposites
  ["--", "Scroll of Polar Opposites", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //             The recipe used to make the "Polar Opposite" Armor ---- Rhodochrosite + Mythril
  ["--", "Scroll of Energy Opposites", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //            The recipe used to make the "Energy Opposite" Armor --- Amber + Coral
  //Silk
  ["--", "Scroll of Amber Engravings", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //            The recipe used to make the "Amber Encrusted Silk" Armor
  ["--", "Scroll of Mythril Engravings", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //          The recipe used to make the "Mythril Encrusted Silk" Armor
  ["--", "Scroll of Rhodochrosite Engravings", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //    The recipe used to make the "Rhodochrosite Encrusted Silk" Armor
  ["--", "Scroll of Necro Engravings", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //            The recipe used to make the "Necromancer's Encrusted Silk" Armor
  ["--", "Scroll of Tsavorite Engravings", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //        The recipe used to make the "Tsavorite Encrusted Silk" Armor
  ["--", "Scroll of Coral Engravings", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //            The recipe used to make the "Coral Encrusted Silk" Armor
//mythics
  ["--", "Amber Gem ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //                            The gem used to make the "Amber Encrusted Silk" Armor
  ["--", "Mythril Gem ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //                          The gem used to make the "Mythril Encrusted Silk" Armor + to make "Gem of Polar Opposites"
  ["--", "Rhodochrosite Gem ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //                    The gem used to make the "Rhodochrosite Encrusted Silk" Armor + to make "Gem of Polar Opposites"
  ["--", "Necro Gem ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //                            The gem used to make the "Necromancer's Encrusted Silk" Armor
  ["--", "Tsavorite Gem ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //                        The gem used to make the "Tsavorite Encrusted Silk" Armor + to make "Gem of Energy Opposites"
  ["--", "Coral Gem ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //                            The gem used to make the "Coral Encrusted Silk" Armor + to make "Gem of Energy Opposites"
  ["--", "Gem of Polar Opposites ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //               The gem used to make the "Polar Opposite" Armor
  ["--", "Gem of Energy Opposites ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //              The gem used to make the "Energy Opposite" Armor
  //epics
  ["--", "Lab Kit ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //                              The item used to make the "Lab" Armor
  ["--", "Hospital Tools ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //                       The item used to make the "Surgeon's Scrubs" Armor
  ["--", "Elixir of Invisibility ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //               The item used to make the "Invisibility Armor" Armor
  ["--", "Dragon Hide ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //                          The item used to make the "Dragon Armor" Armor
  ["--", "Unicorn Horn ", "DISCRIPTION", false, 0, 0, "Common", "Forging Objects", 0], //                         The item used to make the "Unicorn Suit" Armor

  //dies and colorings
  
  //}
  
  


  
  //Tokens & Totems ---- {
  //Totems
  //Tokens
  // }

  //Attacks ----- {
  //Melee Specials
  //Specials Attacks
  //Ranged ---{ 
  //Classic
  //Explosives
  // }
  // }
];  





////////////////////////////
///    7) LOOT BOXES     ///
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


//////////////////////////////////
///    1.25) ARMOR UPDATES     ///
//////////////////////////////////

function updateOwnedHeadArmors() {
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
  //UNCOMMON
  } if (UncommonHeadArmorTypes[0][6] == true) {
    document.getElementById("FruitHat").classList.add('unlockedArmor');
    document.getElementById("FruitHat").classList.remove('lockedArmor');
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[1][6] == true) {
    document.getElementById("SafariHat").classList.add('unlockedArmor');
    document.getElementById("SafariHat").classList.remove('lockedArmor');
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[2][6] == true) {
    document.getElementById("RubberMask").classList.add('unlockedArmor');
    document.getElementById("RubberMask").classList.remove('lockedArmor');
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[3][6] == true) {
    document.getElementById("MudMask").classList.add('unlockedArmor');
    document.getElementById("MudMask").classList.remove('lockedArmor');
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[4][6] == true) {
    document.getElementById("TinHead").classList.add('unlockedArmor');
    document.getElementById("TinHead").classList.remove('lockedArmor');
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[5][6] == true) {
    document.getElementById("StoneHelmet").classList.add('unlockedArmor');
    document.getElementById("StoneHelmet").classList.remove('lockedArmor');
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[6][6] == true) {
    document.getElementById("GlassHelmet").classList.add('unlockedArmor');
    document.getElementById("GlassHelmet").classList.remove('lockedArmor');
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[7][6] == true) {
    document.getElementById("NickleHelmet").classList.add('unlockedArmor');
    document.getElementById("NickleHelmet").classList.remove('lockedArmor');
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[8][6] == true) {
    document.getElementById("ChainHelmet").classList.add('unlockedArmor');
    document.getElementById("ChainHelmet").classList.remove('lockedArmor');
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[9][6] == true) {
    document.getElementById("CopperHelmet").classList.add('unlockedArmor');
    document.getElementById("CopperHelmet").classList.remove('lockedArmor');
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[10][6] == true) {
    document.getElementById("BrassHelmet").classList.add('unlockedArmor');
    document.getElementById("BrassHelmet").classList.remove('lockedArmor');
    uncommonHeadOwned = true;
  } if (uncommonHeadOwned == true) {
    uncommonHead.style.display = "block";
    //RARE
  } if (RareHeadArmorTypes[0][6] == true) {
    document.getElementById("SteelHelmet").classList.add('unlockedArmor');
    document.getElementById("SteelHelmet").classList.remove('lockedArmor');
    rareHeadOwned = true;
  } if (RareHeadArmorTypes[1][6] == true) {
    document.getElementById("BronzeHelmet").classList.add('unlockedArmor');
    document.getElementById("BronzeHelmet").classList.remove('lockedArmor');
    rareHeadOwned = true;
  } if (RareHeadArmorTypes[2][6] == true) {
    document.getElementById("SilverHelmet").classList.add('unlockedArmor');
    document.getElementById("SilverHelmet").classList.remove('lockedArmor');
    rareHeadOwned = true;
  } if (RareHeadArmorTypes[3][6] == true) {
    document.getElementById("GoldHelmet").classList.add('unlockedArmor');
    document.getElementById("GoldHelmet").classList.remove('lockedArmor');
    rareHeadOwned = true;
  } if (RareHeadArmorTypes[4][6] == true) {
    document.getElementById("IronHelmet").classList.add('unlockedArmor');
    document.getElementById("IronHelmet").classList.remove('lockedArmor');
    rareHeadOwned = true;
  } if (RareHeadArmorTypes[5][6] == true) {
    document.getElementById("FeatheredHelmet").classList.add('unlockedArmor');
    document.getElementById("FeatheredHelmet").classList.remove('lockedArmor');
    rareHeadOwned = true;
  } if (RareHeadArmorTypes[6][6] == true) {
    document.getElementById("JungleVineHelmet").classList.add('unlockedArmor');
    document.getElementById("JungleVineHelmet").classList.remove('lockedArmor');
    rareHeadOwned = true;
  } if (rareHeadOwned == true) {
    rareHead.style.display = "block";
  }
}


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

function updateOwnedChestArmors() {
  if (CommonChestArmorTypes[1][6] == true) {
    document.getElementById("FigLeafBreastplate").classList.add('unlockedArmor');
    document.getElementById("FigLeafBreastplate").classList.remove('lockedArmor');
  } if (CommonChestArmorTypes[2][6] == true) {
    document.getElementById("Woodplate").classList.add('unlockedArmor');
    document.getElementById("Woodplate").classList.remove('lockedArmor');
  } if (CommonChestArmorTypes[3][6] == true) {
    document.getElementById("LeatherChestplate").classList.add('unlockedArmor');
    document.getElementById("LeatherChestplate").classList.remove('lockedArmor');
  } if (CommonChestArmorTypes[4][6] == true) {
    document.getElementById("PaintedArmor").classList.add('unlockedArmor');
    document.getElementById("PaintedArmor").classList.remove('lockedArmor');
  } if (CommonChestArmorTypes[5][6] == true) {
    document.getElementById("BasicExplorersChestplate").classList.add('unlockedArmor');
    document.getElementById("BasicExplorersChestplate").classList.remove('lockedArmor');
//UNCOMMON
  } if (UncommonChestArmorTypes[0][6] == true) {
    document.getElementById("CoconutShellBrestPlate").classList.add('unlockedArmor');
    document.getElementById("CoconutShellBrestPlate").classList.remove('lockedArmor');
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[1][6] == true) {
    document.getElementById("SafariVest").classList.add('unlockedArmor');
    document.getElementById("SafariVest").classList.remove('lockedArmor');
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[2][6] == true) {
    document.getElementById("RubberChestplate").classList.add('unlockedArmor');
    document.getElementById("RubberChestplate").classList.remove('lockedArmor');
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[3][6] == true) {
    document.getElementById("MudChestplate").classList.add('unlockedArmor');
    document.getElementById("MudChestplate").classList.remove('lockedArmor');
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[4][6] == true) {
    document.getElementById("TinChestplate").classList.add('unlockedArmor');
    document.getElementById("TinChestplate").classList.remove('lockedArmor');
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[5][6] == true) {
    document.getElementById("StoneChestplate").classList.add('unlockedArmor');
    document.getElementById("StoneChestplate").classList.remove('lockedArmor');
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[6][6] == true) {
    document.getElementById("GlassChestplate").classList.add('unlockedArmor');
    document.getElementById("GlassChestplate").classList.remove('lockedArmor');
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[7][6] == true) {
    document.getElementById("NickleChestplate").classList.add('unlockedArmor');
    document.getElementById("NickleChestplate").classList.remove('lockedArmor');
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[8][6] == true) {
    document.getElementById("ChainChestplate").classList.add('unlockedArmor');
    document.getElementById("ChainChestplate").classList.remove('lockedArmor');
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[9][6] == true) {
    document.getElementById("CopperChestplate").classList.add('unlockedArmor');
    document.getElementById("CopperChestplate").classList.remove('lockedArmor');
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[10][6] == true) {    
    document.getElementById("BrassChestplate").classList.add('unlockedArmor');
    document.getElementById("BrassChestplate").classList.remove('lockedArmor');
    uncommonChestOwned = true;
  } if (uncommonChestOwned == true) {
    uncommonChest.style.display = "block";
    
    //RARE
  } if (RareChestArmorTypes[0][6] == true) {
    document.getElementById("SteelChestplate").classList.add('unlockedArmor');
    document.getElementById("SteelChestplate").classList.remove('lockedArmor');
    rareChestOwned = true;
  } if (RareChestArmorTypes[1][6] == true) {
    document.getElementById("BronzeChestplate").classList.add('unlockedArmor');
    document.getElementById("BronzeChestplate").classList.remove('lockedArmor');
    rareChestOwned = true;
  } if (RareChestArmorTypes[2][6] == true) {
    document.getElementById("SilverChestplate").classList.add('unlockedArmor');
    document.getElementById("SilverChestplate").classList.remove('lockedArmor');
    rareChestOwned = true;
  } if (RareChestArmorTypes[3][6] == true) {
    document.getElementById("GoldChestplate").classList.add('unlockedArmor');
    document.getElementById("GoldChestplate").classList.remove('lockedArmor');
    rareChestOwned = true;
  } if (RareChestArmorTypes[4][6] == true) {
    document.getElementById("IronChestplate").classList.add('unlockedArmor');
    document.getElementById("IronChestplate").classList.remove('lockedArmor');
    rareChestOwned = true;
  } if (RareChestArmorTypes[5][6] == true) {
    document.getElementById("FeatheredChestplate").classList.add('unlockedArmor');
    document.getElementById("FeatheredChestplate").classList.remove('lockedArmor');
    rareChestOwned = true;
  } if (RareChestArmorTypes[6][6] == true) {
    document.getElementById("JungleVineChestplate").classList.add('unlockedArmor');
    document.getElementById("JungleVineChestplate").classList.remove('lockedArmor');
    rareChestOwned = true;
  } if (rareChestOwned == true) {
    rareChest.style.display = "block";
  }
}

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

function updateOwnedLegArmors() {
  if (CommonLegArmorTypes[1][6] == true) {
    document.getElementById("TheFigLeaf").classList.add('unlockedArmor');
    document.getElementById("TheFigLeaf").classList.remove('lockedArmor');
  } if (CommonLegArmorTypes[2][6] == true) {
    document.getElementById("WoodenLegPadding").classList.add('unlockedArmor');
    document.getElementById("WoodenLegPadding").classList.remove('lockedArmor');
  } if (CommonLegArmorTypes[3][6] == true) {
    document.getElementById("LeatherLeggings").classList.add('unlockedArmor');
    document.getElementById("LeatherLeggings").classList.remove('lockedArmor');
  } if (CommonLegArmorTypes[4][6] == true) {
    document.getElementById("PaintedOnLeggings").classList.add('unlockedArmor');
    document.getElementById("PaintedOnLeggings").classList.remove('lockedArmor');
  } if (CommonLegArmorTypes[5][6] == true) {
    document.getElementById("BasicExplorersLeggings").classList.add('unlockedArmor');
    document.getElementById("BasicExplorersLeggings").classList.remove('lockedArmor');
  //UNCOMMON
  } if (UncommonLegArmorTypes[0][6] == true) {
    document.getElementById("BananaLeavesSkirt").classList.add('unlockedArmor');
    document.getElementById("BananaLeavesSkirt").classList.remove('lockedArmor');
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[1][6] == true) {
    document.getElementById("SafariPants").classList.add('unlockedArmor');
    document.getElementById("SafariPants").classList.remove('lockedArmor');
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[2][6] == true) {
    document.getElementById("RubberLeggings").classList.add('unlockedArmor');
    document.getElementById("RubberLeggings").classList.remove('lockedArmor');
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[3][6] == true) {
    document.getElementById("MudLeggings").classList.add('unlockedArmor');
    document.getElementById("MudLeggings").classList.remove('lockedArmor');
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[4][6] == true) {
    document.getElementById("TinLeggings").classList.add('unlockedArmor');
    document.getElementById("TinLeggings").classList.remove('lockedArmor');
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[5][6] == true) {
    document.getElementById("StoneLeggings").classList.add('unlockedArmor');
    document.getElementById("StoneLeggings").classList.remove('lockedArmor');
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[6][6] == true) {
    document.getElementById("GlassLeggings").classList.add('unlockedArmor');
    document.getElementById("GlassLeggings").classList.remove('lockedArmor');
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[7][6] == true) {
    document.getElementById("NickleLeggings").classList.add('unlockedArmor');
    document.getElementById("NickleLeggings").classList.remove('lockedArmor');
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[8][6] == true) {
    document.getElementById("ChainLeggings").classList.add('unlockedArmor');
    document.getElementById("ChainLeggings").classList.remove('lockedArmor');
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[9][6] == true) {
    document.getElementById("CopperLeggings").classList.add('unlockedArmor');
    document.getElementById("CopperLeggings").classList.remove('lockedArmor');
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[10][6] == true) {
    document.getElementById("BrassLeggings").classList.add('unlockedArmor');
    document.getElementById("BrassLeggings").classList.remove('lockedArmor');
    uncommonLegOwned = true;
  } if (uncommonLegOwned == true) {
    uncommonLeg.style.display = "block";
    //RARE
  } if (RareLegArmorTypes[0][6] == true) {
    document.getElementById("SteelLeggings").classList.add('unlockedArmor');
    document.getElementById("SteelLeggings").classList.remove('lockedArmor');
    rareLegOwned = true;
  } if (RareLegArmorTypes[1][6] == true) {
    document.getElementById("BronzeLeggings").classList.add('unlockedArmor');
    document.getElementById("BronzeLeggings").classList.remove('lockedArmor');
    rareLegOwned = true;
  } if (RareLegArmorTypes[2][6] == true) {
    document.getElementById("SilverLegging").classList.add('unlockedArmor');
    document.getElementById("SilverLeggings").classList.remove('lockedArmor');
    rareLegOwned = true;
  } if (RareLegArmorTypes[3][6] == true) {
    document.getElementById("GoldLeggings").classList.add('unlockedArmor');
    document.getElementById("GoldLeggings").classList.remove('lockedArmor');
    rareLegOwned = true;
  } if (RareLegArmorTypes[4][6] == true) {
    document.getElementById("IronLeggings").classList.add('unlockedArmor');
    document.getElementById("IronLeggings").classList.remove('lockedArmor');
    rareLegOwned = true;
  } if (RareLegArmorTypes[5][6] == true) {
    document.getElementById("FeatheredLeggings").classList.add('unlockedArmor');
    document.getElementById("FeatheredLeggings").classList.remove('lockedArmor');
    rareLegOwned = true;
  } if (RareLegArmorTypes[6][6] == true) {
    document.getElementById("JungleVineLeggings").classList.add('unlockedArmor');
    document.getElementById("JungleVineLeggings").classList.remove('lockedArmor');
    rareLegOwned = true;
  } if (rareLegOwned == true) {
    rareLeg.style.display = "block";
  }
}


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

function updateOwnedBootArmors() {
  if (CommonBootArmorTypes[1][6] == true) {
    document.getElementById("FigLeafCovers").classList.add('unlockedArmor');
    document.getElementById("FigLeafCovers").classList.remove('lockedArmor');
  } if (CommonBootArmorTypes[2][6] == true) {
    document.getElementById("WoodSandals").classList.add('unlockedArmor');
    document.getElementById("WoodSandals").classList.remove('lockedArmor');
  } if (CommonBootArmorTypes[3][6] == true) {
    document.getElementById("LeatherBoots").classList.add('unlockedArmor');
    document.getElementById("LeatherBoots").classList.remove('lockedArmor');
  } if (CommonBootArmorTypes[4][6] == true) {
    document.getElementById("PaintedOnBoots").classList.add('unlockedArmor');
    document.getElementById("PaintedOnBoots").classList.remove('lockedArmor');
  } if (CommonBootArmorTypes[5][6] == true) {
    document.getElementById("BasicExplorersBoots").classList.add('unlockedArmor');
    document.getElementById("BasicExplorersBoots").classList.remove('lockedArmor'); 
//UNCOMMON
  } if (UncommonBootArmorTypes[0][6] == true) {
    document.getElementById("FruitPeelShoes").classList.add('unlockedArmor');
    document.getElementById("FruitPeelShoes").classList.remove('lockedArmor');
    uncommonBootOwned = true;
  } if (UncommonBootArmorTypes[1][6] == true) {
    document.getElementById("SafariBoots").classList.add('unlockedArmor');
    document.getElementById("SafariBoots").classList.remove('lockedArmor');
    uncommonBootOwned = true;
  } if (UncommonBootArmorTypes[2][6] == true) {
    document.getElementById("RubberBoots").classList.add('unlockedArmor');
    document.getElementById("RubberBoots").classList.remove('lockedArmor');
    uncommonBootOwned = true;
  } if (UncommonBootArmorTypes[3][6] == true) {
    document.getElementById("MudBoots").classList.add('unlockedArmor');
    document.getElementById("MudBoots").classList.remove('lockedArmor');
    uncommonBootOwned = true;
  } if (UncommonBootArmorTypes[4][6] == true) {
    document.getElementById("TinBoots").classList.add('unlockedArmor');
    document.getElementById("TinBoots").classList.remove('lockedArmor');
    uncommonBootOwned = true;
  } if (UncommonBootArmorTypes[5][6] == true) {
    document.getElementById("StoneBoots").classList.add('unlockedArmor');
    document.getElementById("StoneBoots").classList.remove('lockedArmor');
    uncommonBootOwned = true;
  } if (UncommonBootArmorTypes[6][6] == true) {
    document.getElementById("GlassBoots").classList.add('unlockedArmor');
    document.getElementById("GlassBoots").classList.remove('lockedArmor');
    uncommonBootOwned = true;
  } if (UncommonBootArmorTypes[7][6] == true) {
    document.getElementById("NickleBoots").classList.add('unlockedArmor');
    document.getElementById("NickleBoots").classList.remove('lockedArmor');
    uncommonBootOwned = true;
  } if (UncommonBootArmorTypes[8][6] == true) {
    document.getElementById("ChainBoots").classList.add('unlockedArmor');
    document.getElementById("ChainBoots").classList.remove('lockedArmor');
    uncommonBootOwned = true;
  } if (UncommonBootArmorTypes[9][6] == true) {
    document.getElementById("CopperBoots").classList.add('unlockedArmor');
    document.getElementById("CopperBoots").classList.remove('lockedArmor');
    uncommonBootOwned = true;
  } if (UncommonBootArmorTypes[10][6] == true) {
    document.getElementById("BrassBoots").classList.add('unlockedArmor');
    document.getElementById("BrassBoots").classList.remove('lockedArmor');
    uncommonBootOwned = true;
  } if (uncommonBootOwned == true) {
    uncommonBoot.style.display = "block";

    //RARE
  } if (RareBootArmorTypes[0][6] == true) {
    document.getElementById("SteelBoots").classList.add('unlockedArmor');
    document.getElementById("SteelBoots").classList.remove('lockedArmor');
    rareBootOwned = true;
  } if (RareBootArmorTypes[1][6] == true) {
    document.getElementById("BronzeBoots").classList.add('unlockedArmor');
    document.getElementById("BronzeBoots").classList.remove('lockedArmor');
    rareBootOwned = true;
  } if (RareBootArmorTypes[2][6] == true) {
    document.getElementById("SilverBoots").classList.add('unlockedArmor');
    document.getElementById("SilverBoots").classList.remove('lockedArmor');
    rareBootOwned = true;
  } if (RareBootArmorTypes[3][6] == true) {
    document.getElementById("GoldBoots").classList.add('unlockedArmor');
    document.getElementById("GoldBoots").classList.remove('lockedArmor');
    rareBootOwned = true;
  } if (RareBootArmorTypes[4][6] == true) {
    document.getElementById("IronBoots").classList.add('unlockedArmor');
    document.getElementById("IronBoots").classList.remove('lockedArmor');
    rareBootOwned = true;
  } if (RareBootArmorTypes[5][6] == true) {
    document.getElementById("FeatheredFootWings").classList.add('unlockedArmor');
    document.getElementById("FeatheredFootWings").classList.remove('lockedArmor');
    rareBootOwned = true;
  } if (RareBootArmorTypes[6][6] == true) {
    document.getElementById("JungleVineBoots").classList.add('unlockedArmor');
    document.getElementById("JungleVineBoots").classList.remove('lockedArmor');
    rareBootOwned = true;
  } if (rareBootOwned == true) {
    rareBoot.style.display = "block";
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

function updateBootDiscription() {
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
  if (document.getElementById("Shoes").selected == true) {bootSlot = CommonBootArmorTypes[0]; }
  if (document.getElementById("FigLeafCovers").selected == true) {bootSlot = CommonBootArmorTypes[1]; }
  if (document.getElementById("WoodSandals").selected == true) {bootSlot = CommonBootArmorTypes[2]; }
  if (document.getElementById("LeatherBoots").selected == true) {bootSlot = CommonBootArmorTypes[3]; }
  if (document.getElementById("PaintedOnBoots").selected == true) {bootSlot = CommonBootArmorTypes[4]; }
  if (document.getElementById("BasicExplorersBoots").selected == true) {bootSlot = CommonBootArmorTypes[5]; } 
  // UNCOMMON
  if (document.getElementById("FruitPeelShoes").selected == true) {bootSlot = UncommonBootArmorTypes[0]; }
  if (document.getElementById("SafariBoots").selected == true) {bootSlot = UncommonBootArmorTypes[1]; }
  if (document.getElementById("RubberBoots").selected == true) {bootSlot = UncommonBootArmorTypes[2]; }
  if (document.getElementById("MudBoots").selected == true) {bootSlot = UncommonBootArmorTypes[3]; }
  if (document.getElementById("TinBoots").selected == true) {bootSlot = UncommonBootArmorTypes[4]; }
  if (document.getElementById("StoneBoots").selected == true) {bootSlot = UncommonBootArmorTypes[5]; }
  if (document.getElementById("GlassBoots").selected == true) {bootSlot = UncommonBootArmorTypes[6]; }
  if (document.getElementById("NickleBoots").selected == true) {bootSlot = UncommonBootArmorTypes[7]; }
  if (document.getElementById("ChainBoots").selected == true) {bootSlot = UncommonBootArmorTypes[8]; }
  if (document.getElementById("CopperBoots").selected == true) {bootSlot = UncommonBootArmorTypes[9]; } 
  if (document.getElementById("BrassBoots").selected == true) {bootSlot = UncommonBootArmorTypes[10]; }
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

//1-100
function commonGearPrize() {
  prize = Math.floor(Math.random() * 99) + 1;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}
//100-300
function uncommonGearPrize() {
  prize = Math.floor(Math.random() * 200) + 100;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}
//500-1000
function rareGearPrize() {
  prize = Math.floor(Math.random() * 500) + 500;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}
//1000-5000
function epicGearPrize() {
  prize = Math.floor(Math.random() * 4000) + 1000;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}
//5000-10000
function mythicGearPrize() {
  prize = Math.floor(Math.random() * 5000) + 5000;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}
//10000-50000
function relicGearPrize() {
  prize = Math.floor(Math.random() * 40000) + 10000;
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

function toggleCreditsOff() {
    credits.style.display = "none";
    creditsToggleOff.style.display = "block";
    creditsToggleOn.style.display = "none";
}

function toggleCreditsOn() {
    credits.style.display = "block";
    creditsToggleOn.style.display = "block";
    creditsToggleOff.style.display = "none";
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


//story
function chooseItemsAndCrates() {
  //ITEMS
  //price is anywere between 50 - 100
  slotOnePrice = Math.floor(Math.random() * 50) + 50;
  slotOnePick = commonItems[Math.floor(Math.random() * commonItems.length)];
  //price is anywere between 250 - 500
  slotTwoPrice = Math.floor(Math.random() * 250) + 250;
  slotTwoPick = uncommonItems[Math.floor(Math.random() * uncommonItems.length)];
  //price is anywere between 500 - 1000
  slotThreePrice = Math.floor(Math.random() * 500) + 500;
  slotThreePick = rareItems[Math.floor(Math.random() * rareItems.length)];
  //price is anywere between 1000 - 2500
  slotFourPrice = Math.floor(Math.random() * 1000) + 1500;
  slotFourPick = epicItems[Math.floor(Math.random() * epicItems.length)];
  //price is anywere between 2500 - 5000
  slotFivePrice = Math.floor(Math.random() * 2500) + 2500;
  slotFivePick = mythicItems[Math.floor(Math.random() * mythicItems.length)];
  //price is anywere between 2500 - 5000
  slotSixPrice = Math.floor(Math.random() * 2500) + 2500;
  slotSixPick = seasonalItems[Math.floor(Math.random() * seasonalItems.length)];
  //CRATES
}

function inputStory() {
  storySlot.innerHTML = story
  choiceOne.innerHTML = opt1
  choiceTwo.innerHTML = opt2
  choiceThr.innerHTML = opt3
}


//RESEND FUNCTION
var funcs = [{ reSend: function(){ test(); }}, { reSend: function(){ test2(); }}];
funcs[0].reSend();

function loadStory() {
  if (storyLoadProg == "fail") {
    setupStoryStart();
  } else {
    dungeonSet(knShop);
  }
  dungeon = knShop
  story = knShop[]
  opt1
  opt2
  opt3
}

function choiceOnePicked() {
story = story[3];
  if (story[1] == "none") {
    postStory = story;
    loadStory();
  } else {
    story[1].reSend();
  }
 }
//story
//story[0] = name of choice/were u r at
//story[1] = resend
knShop = [
  ["The Store", "none", "blah blah blah.", 
  //opt 1 path (shop)
    ["Shop", "none", "You walk down to the shoping area and look at the aisles they are decoraed with cute design and trinkets. You peer inside them and see that they are packed with the latest tools, trinkets, and loot drops. You look at the signs above the aisle and see what each aisle holds. You know that you can get some good loot, but you also know that you can\'t sand there forever, you need to make a choice.",
     [
      ["Go to aisle 1, (Crates & Seasonal Drops)", {reSend: function(){crateShop(); }}, // "You walk over to the aisle and look at all the crates, seasonal drops, and loot boxes. They are all very expensive but ether way you will get something.",
      ],
      ["Go to aisle 2, (Weapons & Armors)",  {reSend: function(){weaponShop(); }}, // "You see the shelf racks setup with weapons of all raritys and colors. You look at the armors and see the exclusive drops.  You then look at the prices and you know the weapons are legitimate.",
      ],
      ["Go to aisle 3, (Rare Collectables & Items)",  {resend: function(){itemShop(); }}, // "Walking over to the aisle you smell what you think is cinnamon, and crystal salt. You walk into the aisle and look at all the items, there are so many to choose from; exlixers, gems, scrolls, powers even a few seasonal ones. Seeing the selecton gives you a hard choise. There is so much you could get.",
      ]
     ]
    ],
    //opt 2 path (talk (quest))
    ["Talk",
      [],
      [],
      []
    ],
    //op3 path (dungeon)
    ["Go to Dungeon", "none", "You walk over to the dungeon box and tap the box and it cranks to life. Gear inside churn and whirl, it goes quite. The stone door behind it shakes and then stops. The machine is ready to send you to a dungeon, small lights around slots glow reveal your dungeon options, pick one.",
      ["Random Dungeon (Basic Dungeon, Free)"
      ],
      ["Special Dungeon (Special Key Required, 100 Gears)"
      ],
      ["Seasonal Dungeon (Season Key Required + 500 Gears)"
      ]
    ]
  ]
];

