////////////////////////////////
///       BOOT-UP GAME       ///
////////////////////////////////
document.getElementById("body").addEventListener("load", startUp);
function startUp() {
  callSavedData_cookies();
  if (allowCookies == true) {
    setInterval(makeSavedData_cookies, 250);
  } else {
    askCookies();
  }
  //basic inv
  setInterval(updateVitals, 250);
  setInterval(updateMain, 250);
  setInterval(updateSlots, 250);
  //Armors
  setInterval(updateCommonHeadArmors, 250);
  setInterval(updateCommonChestArmors, 250);
  setInterval(updateCommonLegArmors, 250);
  //needs boots
  setInterval(updateUncommonHeadArmors, 250);
  setInterval(updateUncommonChestArmors, 250);
  setInterval(updateUncommonLegArmors, 250);
  //needs boots
  //Armor Descriptions
  setInterval(updateHeadDiscription, 250);
  setInterval(updateChestDiscription, 250);
  setInterval(updateLegDiscription, 250);
  setInterval(updateHeadDiscription, 250);
}


////////////////////////////////
///     NEW USER SET UP      ///
////////////////////////////////
function testNew() {
  if (user == false) {
    setRandomName()
  }
}

const adjectives = ['Silly', 'Funny', 'Smart', 'Weird', 'Cool', 'Difficult', 'Dumb', 'Short', 'Tall', 'Expensive', 'Interesting', 'Ugly', 'Pretty'];
const animals = ['Dog', 'Cat', 'Panda', 'Pig', 'Cow', 'Parot', 'Snake', 'Eel', 'Pangolin', 'Giraffe', 'Monster', 'Crocodile', 'Hipo'];

function setRandomName() {
  adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  ani = animals[Math.floor(Math.random() * animals.length)];
  num = Math.floor(Math.random() * 999) + 1;
  username = (adj + ani + num)
  console.log(username)
  alert("Hello! We do not have accounts set up yet, sorry for the inconvenience. Becuase of this yu will be known as " + username + "!")
  user = true;    
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
  //il do this soon
}
  
//stats 
var level = 0; //               The level of the player
var xp = 0; //                  The amount of XP the player has
var xpTop = 100; //             The about of XP needed for the player to level up
var xpBoost = 1; //             The about of XP you get from raw XP
var xpBoostOn = false; //       If the player has an XP booster on

var user = false;
var username;
var atTag = "@guest";
var allowCookies = false;

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





////////////////////////////
////  2) BUN BERRIES     ///
////////////////////////////
//TOTALS
var totalBunBerriesEver = 0; //  Total Number of Bun Berries Even Owned (Owned + Eaten)
var totalBunBerries = 0; //      Total Number of Bun Berries Owned
var totalEaten = 0; //           Total Number of Bun Berries Eaten
//BASIC BUN BERRIES
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
var ach_dumb_youAsked = false; //       Clicked on that achivement
var ach_dumb_plusFifty = false; //      Has more unlocked achievements then locked ones

//SEASON ONE ACHIEVEMENTS
var ach_seasonOne_AllArmor = false; //  Unlocked all season one armors



////////////////////////////
///      4) ARMORS       ///
////////////////////////////

/////////////////////////////////////////////COMMON/////////////////////////////////////////////

var CommonHeadArmorTypes = [
  ["1", "Bead Head", "0", "Get a Comb lunkhead, +0 Protection.", true],
  ["2", "Fig Leaf Wreath", "1", "Wow a leaf you look very cool *sarcasm*. Common, +1 Protection.", false],
  ["3", "Wood Helmet", "1", "Knock on wood. Common, +1 Protection.", false],
  ["4", "Leather Bandana", "2", "You look like someone trick or treating with a bracelet around their head. Common +2 Protection.", false],
  ["5", "Painted on Helmet", "2", "Did Vincent van Goh paint it on it looks so pretty *sarcasm*. Common +2 Protection.", false],
  ["6", "Explorers Helmet", "3", "dum dum dum du dum dum dum da dum dum dum du dum. Common +3 Protection.", false]
];

var CommonChestArmorTypes = [
  ["7", "T-shirt", "0", "stop taking sheep wool please you look so ugly. Common, +0 Protection.", true],
  ["8", "Fig Leaf Breastplate", "1", "Stop murdering the trees you sicko . Common, +1 Protection.", true],
  ["9", "Woodplate", "1", "STOP MURDERING THE TREES IT ISN\'T GOOD FOR THEIR HEALTH!!!!!!!!!!!!, Common, +1 Protection.", false],
  ["10", "Leather Chestplate", "2", "Found some cow patties I see . Common +2 Protection.", false],
  ["11", "Painted on Armor", "2", "Wow look at you Picasso. Common +2 Protection.", false],
  ["12", "Basic Explorers Chestplate", "3", "Indiana Jones is nothing compared to you *sarcasm*. Common +3 Protection.", false]
];

var CommonLegArmorTypes = [
  ["13", "Jeans", "0", "You-- You-- You- --You\'r burning my eyes please someone help!!. Common, +0 Protection.", true],
  ["14", "The Fig Leaf", "1", "You look very, very, very, stupid. Common, +1 Protection.", false],
  ["15", "Wooden Leg Padding", "1", "you lunkhead now you can't move!!. Common, +1 Protection.", false],
  ["16", "Leather Leggings", "2", "cool very very cool you MURDERER OF HORSES!!!!. Common +2 Protection.", false],
  ["17", "Painted on Leggings", "2", " Look Michelangelo what are you painting?. Common +2 Protection", false],
  ["18", "Basic Explorers Leggings", "3", "How Many pockets Does it have?. Common +3 Protection.", false]
];
var CommonBootArmorTypes = [
  ["19", "Shoes", "0", "Why are they untied?. Common, +0 Protection.", true],
  ["20", "Fig Leaf Feet Covers", "1", "rocks can easily poke through and cause you pain. Common, +1 Protection.", true],
  ["21", "Wood Sandals", "1", "Forget to bring tweezers?. Common, +1 Protection.", false],
  ["22", "Leather Boots", "2", "Like Minecraft I assume. Common +2 Protection.", false],
  ["23", "Painted on Boots", "2", "Da Vinci who are you painting?. Common +2 Protection.", false],
  ["24", "Basic Explorers Boots", "3", "No they aren't air Jordans. Common +3 Protection.", false]
];






/////////////////////////////////////////////UNCOMMON/////////////////////////////////////////////


var UncommonHeadArmorTypes = [
  ["25", "Fruit Hat", "3", "Hungry? Don't eat it. Uncommon +3 Protection.", false],
  ["26", "Safari Hat", "3", "You look like a cheetah . Uncommon +3 Protection.", false],
  ["27", "Rubber Mask", "3", "I AM THOR! STRIKE ME LIGHTNING, YOU DO NO HARM. Uncommon +3 Protection.", false],
  ["28", "Mud Mask", "3", "It looks so much like poop, I mean that's what fertilizer is made of right? I got it from the ground so it must....\". Uncommon +3 Protection.", false],
  ["29", "Tin Head", "4", "Be the Tin Man from the Wizard of OZ Uncommon +4 Protection.", false],
  ["30", "Stone Helmet", "4", "Rocks, Stone, and Tuff! Don't move you're head or It will roll like a stone :\). Uncommon, +4 Protection.", false], 
  ["31", "Glass Helmet", "4", "Dang! you can see you're hair..... GET A FRIGGIN COMB LUNKHEAD! Uncommon +4 Protection.", false],
  ["32", "Nickle Helmet", "5", "Get the new nickel helmet  now being sold for 999.99! Uncommon +5 Protection.", false],
  ["33", "Chain Mail Helmet", "5", "You look so ancient. Uncommon +5 Protection.", false],
  ["34", "Copper Helmet", "5", "Don a torch and book and you can be the Statue of Liberty! Uncommon +5 Protection.", false],
  ["35", "Brass Helmet", "5", "You look so shiny . Uncommon +5 Protection.", false]
];

var UncommonChestArmorTypes = [
  ["36", "CoconutShell Brest Plate", "3", "Wow, you look ready for the beach, just not the dungeons! Uncommon +3 Protection.", false],
  ["37", "Safari Vest", "3", "You look so dorky . Uncommon +3 Protection.", false],
  ["38", "Rubber Chestplate", "3", "I am Inevitable!! (Marvel fans please don't airstrike me). Uncommon +3 Protection.", false],
  ["39", "Mud Chestplate", "3", "\"You can grow plants so well, please miss the fact it is made of almost entirely poop\". Uncommon +3 Protection.", false],
  ["40", "Tin Chestplate", "4", "You look like one of those coke ads. Uncommon +4 Protection.", false],
  ["41", "Stone Chestplate", "4", "Try not to run too much, broken backs aren't fun . Uncommon, +4 Protection.", false],
  ["42", "Glass Chestplate", "4", "Why did you keep the same shirt on! Uncommon +4 Protection.", false],
  ["43", "Nickle Chestplate", "5", "Buy the new and more expensive chest piece for 1,233.99! Uncommon +5 Protection.", false],
  ["44", "Chain Mail Chestplate", "5", "Are you so old you think chainmail is for armor (eye roll). Uncommon +5 Protection.", false],
  ["45", "Copper Chestplate", "5", "Turn it green to make you look even more like the statue of liberty. Uncommon +5 Protection.", false],
  ["46", "Brass Chestplate", "5", "Turn it into a tuba please, please, please!! Uncommon +5 Protection.", false]
];
//Needs new descriptions
var UncommonLegArmorTypes = [
  ["36", "Banana Leaves Skirt", "3", "BANANA!!!!!!!!!!!!!!!!! Uncommon +3 Protection.", false],
  ["37", "Safari Pants", "3", "Bro you don't need 43 pants. Uncommon +3 Protection.", false],
  ["38", "Rubber Leggings", "3", "私は海賊の王になるつもりだ. Uncommon +3 Protection.", false],
  ["39", "Mud Leggings", "3", "You need more Fertilizer . Uncommon +3 Protection.", false],
  ["40", "Tin Leggings", "4", "dang you're knees are poking out. Uncommon +4 Protection.", false],
  ["41", "Stone Leggings", "4", "You have the one thing different from Minecraft. Uncommon, +4 Protection.", false],
  ["42", "Glass Leggings", "4", "Try not to fall or you are paying me like $1,252 for your medical bill. Uncommon +4 Protection.", false],
  ["43", "Nickle Leggings", "5", "Buy the even more costly nickel leggings for $13,232! Uncommon +5 Protection.", false],
  ["44", "Chain Mail Leggings", "5", "Chainmail Won't protect against my trash talk . Uncommon +5 Protection.", false],
  ["45", "Copper Leggings", "5", "Apologise to your knees please . Uncommon +5 Protection.", false],
  ["46", "Brass Leggings", "5", "Make a clarinet to play to the monsters that try to kill you!! Uncommon +5 Protection.", false]
];

//Does not new descriptions
var UncommonBootArmorTypes = [
  ["36", "Fruit Peel Shoes", "3", "Try not to slip. Uncommon +3 Protection", false],
  ["37", "Safari Boots", "3", "Caked with dirt and sand from wandering in the safari. Uncommon +3 Protection.", false],
  ["38", "Rubber Boots", "3", "Gomu Gomu No Gatling. Uncommon +3 Protection.", false],
  ["39", "Mud Boots", "3", "Now these are real crappy boots literally!! Uncommon +3 Protection.", false],
  ["40", "Tin Boots", "4", "Your toes are bleeding.... Uncommon +4 Protection", false],
  ["41", "Stone Boots", "4", "fee fie foe fum, I can hear you from like 2 miles away. Uncommon, +4 Protection.", false],
  ["42", "Glass Boots", "4", "You can see your feet under underneath, how cool! Uncommon +4 Protection.", false],
  ["43", "Nickle Boots", "5", "Buy NOW! Please, I'm poor! Uncommon +5 Protection.", false],
  ["44", "Chain Mail Boots", "5", "Why are you doing this to you're poor feet. Uncommon +5 Protection.", false],
  ["45", "Copper Boots", "5", "No more moving your ankle... Uncommon +5 Protection.", false],
  ["46", "Brass Boots", "5", "Play the clarinet, not the brass boot!  Uncommon +5 Protection.", false]
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





/////////////////////////////////////////////RARE/////////////////////////////////////////////
var RareChestArmorTypes = [
  ["18", "Steal", "3", "Description", false],
  ["19", "Bronze", "4", "Description", false],
  ["21", "Silver", "4", "Description", false],
  ["20", "Gold", "4", "Description", false],
  ["22", "Iron", "4", "Description", false],
  ["23", "Fetherer", "4", "Description", false],
  ["24", "Blessed Mud", "4", "Description", false],
  ["25", "Jungle Vines", "4", "Description", false]
];



/////////////////////////////////////////////EPIC/////////////////////////////////////////////
var EpicChestArmorTypes = [
  ["26", "Medevil Armor", "5", "Description", false]
  ["27", "CoralArmor", "4", "Description", false],
  ["28", "Snake Skin", "4", ""],
  ["29", "Cooled magma", "4", ""],
  ["30", "Holy Bamboo", "4", ""],
  ["31", "Diamond", "4", ""],
  ["31", "Emerald", "4", ""]
];



/////////////////////////////////////////////MYTHIC/////////////////////////////////////////////
var MythicChestArmorTypes = [
  ["32", "Gold encrusted Silk", "4", ""],
  ["33", "Dragon Skin", "4", ""],
  ["27", "Rhodochrosite", "4", ""],
  ["34", "Mythrill", "4", ""],
];



/////////////////////////////////////////////RELIC/////////////////////////////////////////////
var RelicChestArmorTypes = [
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
///   6) LOOT BOXS       ///
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
///              8) Cookies                                   ///
///                                                           ///
/////////////////////////////////////////////////////////////////

///////////////////////////////////////////
///             1) UPDATES              ///
///////////////////////////////////////////


function updateVitals() {
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
  //il do this soon
}

function updateCommonHeadArmors() {
  if (CommonHeadArmorTypes[1][4] == true) {
    FigWreath.style.display = "block";
  } if (CommonHeadArmorTypes[2][4] == true) {
    WoodHelmet.style.display = "block";
  } if (CommonHeadArmorTypes[3][4] == true) {
    LeatherBandana.style.display = "block";
  } if (CommonHeadArmorTypes[4][4] == true) {
    PaintHelmet.style.display = "block";
  } if (CommonHeadArmorTypes[5][4] == true) {
    BasicExplorersHelmet.style.display = "block";
  }
}

function updateCommonLegArmors() {
  if (CommonChestArmorTypes[1][4] == true) {
    FigLeafBreastplate.style.display = "block";
  } if (CommonChestArmorTypes[2][4] == true) {
    Woodplate.style.display = "block";
  } if (CommonChestArmorTypes[3][4] == true) {
    LeatherChestplate.style.display = "block";
  } if (CommonChestArmorTypes[4][4] == true) {
    PaintedArmor.style.display = "block";
  } if (CommonChestArmorTypes[5][4] == true) {
    BasicExplorersChestplate.style.display = "block";
  }
}

function updateCommonLegArmors() {
  if (CommonLegArmorTypes[1][4] == true) {
    TheFigLeaf.style.display = "block";
  } if (CommonLegArmorTypes[2][4] == true) {
    WoodenLegPadding.style.display = "block";
  } if (CommonLegArmorTypes[3][4] == true) {
    LeatherLeggings.style.display = "block";
  } if (CommonLegArmorTypes[4][4] == true) {
    PaintedOnLeggings.style.display = "block";
  } if (CommonLegArmorTypes[5][4] == true) {
    BasicExplorersLeggings.style.display = "block";
  }
}

function updateUncommonHeadArmors() {
  if (UncommonHeadArmorTypes[0][4] == true) {
    FruitHat.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[1][4] == true) {
    SafariHat.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[2][4] == true) {
    RubberMask.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[3][4] == true) {
    MudMask.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[4][4] == true) {
    TinHead.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[5][4] == true) {
    StoneHelmet.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[6][4] == true) {
    GlassHelmet.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[7][4] == true) {
    NickleHelmet.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[8][4] == true) {
    ChainHelmet.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[9][4] == true) {
    CopperHelmet.style.display = "block";
    uncommonHeadOwned = true;
  } if (UncommonHeadArmorTypes[10][4] == true) {
    BrassHelmet.style.display = "block";
    uncommonHeadOwned = true;
  } if (uncommonHeadOwned == true) {
    uncommonHead.style.display = "block";
  }
}

function updateUncommonChestArmors() {
  if (UncommonChestArmorTypes[0][4] == true) {
    CoconutShellBrestPlate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[1][4] == true) {
    SafariVest.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[2][4] == true) {
    RubberChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[3][4] == true) {
    MudChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[4][4] == true) {
    TinChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[5][4] == true) {
    StoneChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[6][4] == true) {
    GlassChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[7][4] == true) {
    NickleChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[8][4] == true) {
    ChainChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[9][4] == true) {
    CopperChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (UncommonChestArmorTypes[10][4] == true) {
    BrassChestplate.style.display = "block";
    uncommonChestOwned = true;
  } if (uncommonChestOwned == true) {
    uncommonChest.style.display = "block";
  }
}

function updateUncommonLegArmors() {
  if (UncommonLegArmorTypes[0][4] == true) {
    BananaLeavesSkirt.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[1][4] == true) {
    SafariPants.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[2][4] == true) {
    RubberLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[3][4] == true) {
    MudLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[4][4] == true) {
    TinLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[5][4] == true) {
    StoneLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[6][4] == true) {
    GlassLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[7][4] == true) {
    NickleLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[8][4] == true) {
    ChainLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[9][4] == true) {
    CopperLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (UncommonLegArmorTypes[10][4] == true) {
    BrassLeggings.style.display = "block";
    uncommonLegOwned = true;
  } if (uncommonLegOwned == true) {
    uncommonLEg.style.display = "block";
  }
}


///////////////////////////////////////////
///      1.5) Description updates       ///
///////////////////////////////////////////
var HeadProtection = 0;
var ChestProtection = 0;
var LegProtection = 0;

function updateHeadDiscription() {
  if (document.getElementById("bedHead").selected == true) {
    HeadProtection = CommonHeadArmorTypes[0][2]
    HeadDescription.innerHTML = CommonHeadArmorTypes[0][3];
  } if (document.getElementById("FigWreath").selected == true) {
    HeadProtection = CommonHeadArmorTypes[1][2]
    HeadDescription.innerHTML = CommonHeadArmorTypes[1][3];
  } if (document.getElementById("WoodHelmet").selected == true) {
    HeadProtection = CommonHeadArmorTypes[2][2]
    HeadDescription.innerHTML = CommonHeadArmorTypes[2][3];
  } if (document.getElementById("LeatherBandana").selected == true) {
    HeadProtection = CommonHeadArmorTypes[3][2]
    HeadDescription.innerHTML = CommonHeadArmorTypes[3][3];
  } if (document.getElementById("PaintHelmet").selected == true) {
    HeadProtection = CommonHeadArmorTypes[4][2]
    HeadDescription.innerHTML = CommonHeadArmorTypes[4][3];
  } if (document.getElementById("BasicExplorersHelmet").selected == true) {
    HeadProtection = CommonHeadArmorTypes[5][2]
    HeadDescription.innerHTML = CommonHeadArmorTypes[5][3];
  } 
  // UNCOMMON
  if (document.getElementById("FruitHat").selected == true) {
    HeadProtection = UncommonHeadArmorTypes[0][2]
    HeadDescription.innerHTML = UncommonHeadArmorTypes[0][3];
  } if (document.getElementById("SafariHat").selected == true) {
    HeadProtection = UncommonHeadArmorTypes[1][2]
    HeadDescription.innerHTML = UncommonHeadArmorTypes[1][3];
  } if (document.getElementById("RubberMask").selected == true) {
    HeadProtection = UncommonHeadArmorTypes[2][2]
    HeadDescription.innerHTML = UncommonHeadArmorTypes[2][3];
  } if (document.getElementById("MudMask").selected == true) {
    HeadProtection = UncommonHeadArmorTypes[3][2]
    HeadDescription.innerHTML = UncommonHeadArmorTypes[3][3];
  } if (document.getElementById("TinHead").selected == true) {
    HeadProtection = UncommonHeadArmorTypes[4][2]
    HeadDescription.innerHTML = UncommonHeadArmorTypes[4][3];
  } if (document.getElementById("StoneHelmet").selected == true) {
    HeadProtection = UncommonHeadArmorTypes[5][2]
    HeadDescription.innerHTML = UncommonHeadArmorTypes[5][3];
  } if (document.getElementById("GlassHelmet").selected == true) {
    HeadProtection = UncommonHeadArmorTypes[6][2]
    HeadDescription.innerHTML = UncommonHeadArmorTypes[6][3];
  } if (document.getElementById("NickleHelmet").selected == true) {
    HeadProtection = UncommonHeadArmorTypes[7][2]
    HeadDescription.innerHTML = UncommonHeadArmorTypes[7][3];
  } if (document.getElementById("ChainHelmet").selected == true) {
    HeadProtection = UncommonHeadArmorTypes[8][2]
    HeadDescription.innerHTML = UncommonHeadArmorTypes[8][3];
  } if (document.getElementById("CopperHelmet").selected == true) {
    HeadProtection = UncommonHeadArmorTypes[9][2]
    HeadDescription.innerHTML = UncommonHeadArmorTypes[9][3];
  } if (document.getElementById("BrassHelmet").selected == true) {
    HeadProtection = UncommonHeadArmorTypes[10][2]
    HeadDescription.innerHTML = UncommonHeadArmorTypes[10][3];
  }
}

function updateChestDiscription() {
  if (document.getElementById("Shirt").selected == true) {
    ChestProtection = CommonChestArmorTypes[0][2]
    ChestDescription.innerHTML = CommonChestArmorTypes[0][3];
  } if (document.getElementById("FigLeafBreastplate").selected == true) {
    ChestProtection = CommonChestArmorTypes[1][2]
    ChestDescription.innerHTML = CommonChestArmorTypes[1][3];
  } if (document.getElementById("Woodplate").selected == true) {
    ChestProtection = CommonChestArmorTypes[2][2]
    ChestDescription.innerHTML = CommonChestArmorTypes[2][3];
  } if (document.getElementById("LeatherChestplate").selected == true) {
    ChestProtection = CommonChestArmorTypes[3][2]
    ChestDescription.innerHTML = CommonChestArmorTypes[3][3];
  } if (document.getElementById("PaintedArmor").selected == true) {
    ChestProtection = CommonChestArmorTypes[4][2]
    ChestDescription.innerHTML = CommonChestArmorTypes[4][3];
  } if (document.getElementById("BasicExplorersChestplate").selected == true) {
    ChestProtection = CommonChestArmorTypes[5][2]
    ChestDescription.innerHTML = CommonChestArmorTypes[5][3];
  } 
  // UNCOMMON
  if (document.getElementById("CoconutShellBrestPlate").selected == true) {
    ChestProtection = UncommonChestArmorTypes[0][2]
    ChestDescription.innerHTML = UncommonChestArmorTypes[0][3];
  } if (document.getElementById("SafariVest").selected == true) {
    ChestProtection = UncommonChestArmorTypes[1][2]
    ChestDescription.innerHTML = UncommonChestArmorTypes[1][3];
  } if (document.getElementById("RubberChestplate").selected == true) {
    ChestProtection = UncommonChestArmorTypes[2][2]
    ChestDescription.innerHTML = UncommonChestArmorTypes[2][3];
  } if (document.getElementById("MudChestplate").selected == true) {
    ChestProtection = UncommonChestArmorTypes[3][2]
    ChestDescription.innerHTML = UncommonChestArmorTypes[3][3];
  } if (document.getElementById("TinChestplate").selected == true) {
    ChestProtection = UncommonChestArmorTypes[4][2]
    ChestDescription.innerHTML = UncommonChestArmorTypes[4][3];
  } if (document.getElementById("StoneChestplate").selected == true) {
    ChestProtection = UncommonChestArmorTypes[5][2]
    ChestDescription.innerHTML = UncommonChestArmorTypes[5][3];
  } if (document.getElementById("GlassChestplate").selected == true) {
    ChestProtection = UncommonChestArmorTypes[6][2]
    ChestDescription.innerHTML = UncommonChestArmorTypes[6][3];
  } if (document.getElementById("NickleChestplate").selected == true) {
    ChestProtection = UncommonChestArmorTypes[7][2]
    ChestDescription.innerHTML = UncommonChestArmorTypes[7][3];
  } if (document.getElementById("ChainChestplate").selected == true) {
    ChestProtection = UncommonChestArmorTypes[8][2]
    ChestDescription.innerHTML = UncommonChestArmorTypes[8][3];
  } if (document.getElementById("CopperChestplate").selected == true) {
    ChestProtection = UncommonChestArmorTypes[9][2]
    ChestDescription.innerHTML = UncommonChestArmorTypes[9][3];
  } if (document.getElementById("BrassChestplate").selected == true) {
    ChestProtection = UncommonChestArmorTypes[10][2]
    ChestDescription.innerHTML = UncommonChestArmorTypes[10][3];
  }
}

function updateLegDiscription() {
  if (document.getElementById("Jeans").selected == true) {
    LegProtection = CommonLegArmorTypes[0][2]
    LegDescription.innerHTML = CommonLegArmorTypes[0][3];
  } if (document.getElementById("TheFigLeaf").selected == true) {
    LegProtection = CommonLegArmorTypes[1][2]
    LegDescription.innerHTML = CommonLegArmorTypes[1][3];
  } if (document.getElementById("WoodenLegPadding").selected == true) {
    LegProtection = CommonLegArmorTypes[2][2]
    LegDescription.innerHTML = CommonLegArmorTypes[2][3];
  } if (document.getElementById("LeatherLeggings").selected == true) {
    LegProtection = CommonLegArmorTypes[3][2]
    LegDescription.innerHTML = CommonLegArmorTypes[3][3];
  } if (document.getElementById("PaintedOnLeggings").selected == true) {
    LegProtection = CommonLegArmorTypes[4][2]
    LegDescription.innerHTML = CommonLegArmorTypes[4][3];
  } if (document.getElementById("BasicExplorersLeggings").selected == true) {
    LegProtection = CommonLegArmorTypes[5][2]
    LegDescription.innerHTML = CommonLegArmorTypes[5][3];
  } 
  // UNCOMMON
  if (document.getElementById("BananaLeavesSkirt").selected == true) {
    LegProtection = UncommonLegArmorTypes[0][2]
    LegDescription.innerHTML = UncommonLegArmorTypes[0][3];
  } if (document.getElementById("SafariPants").selected == true) {
    LegProtection = UncommonLegArmorTypes[1][2]
    LegDescription.innerHTML = UncommonLegArmorTypes[1][3];
  } if (document.getElementById("RubberLeggings").selected == true) {
    LegProtection = UncommonLegArmorTypes[2][2]
    LegDescription.innerHTML = UncommonLegArmorTypes[2][3];
  } if (document.getElementById("MudLeggings").selected == true) {
    LegProtection = UncommonLegArmorTypes[3][2]
    LegDescription.innerHTML = UncommonLegArmorTypes[3][3];
  } if (document.getElementById("TinLeggings").selected == true) {
    LegProtection = UncommonLegArmorTypes[4][2]
    LegDescription.innerHTML = UncommonLegArmorTypes[4][3];
  } if (document.getElementById("StoneLeggings").selected == true) {
    LegProtection = UncommonLegArmorTypes[5][2]
    LegDescription.innerHTML = UncommonLegArmorTypes[5][3];
  } if (document.getElementById("GlassLeggings").selected == true) {
    LegProtection = UncommonLegArmorTypes[6][2]
    LegDescription.innerHTML = UncommonLegArmorTypes[6][3];
  } if (document.getElementById("NickleLeggings").selected == true) {
    LegProtection = UncommonLegArmorTypes[7][2]
    LegDescription.innerHTML = UncommonLegArmorTypes[7][3];
  } if (document.getElementById("ChainLeggings").selected == true) {
    LegProtection = UncommonLegArmorTypes[8][2]
    LegDescription.innerHTML = UncommonLegArmorTypes[8][3];
  } if (document.getElementById("CopperLeggings").selected == true) {
    LegProtection = UncommonLegArmorTypes[9][2]
    LegDescription.innerHTML = UncommonLegArmorTypes[9][3];
  } if (document.getElementById("BrassLeggings").selected == true) {
    LegProtection = UncommonLegArmorTypes[10][2]
    LegDescription.innerHTML = UncommonLegArmorTypes[10][3];
  }
}

///////////////////////////////////////////
///     2) GEAR PRIZES & LOOT BOXES     ///
///////////////////////////////////////////


function RandomPullCommonHeadArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (1-50)")
    commonGearPrize();
  } else {
    drop = Math.floor(Math.random() * CommonHeadArmorTypes.length);
    owned = CommonHeadArmorTypes[drop] [4];
    if (owned == true) {
      console.log("Retring for new armor....")
      trys++;
      RandomPullCommonHeadArmor();
    } else { 
      id = CommonHeadArmorTypes[drop] [0];
      name = CommonHeadArmorTypes[drop] [1];
      protection = CommonHeadArmorTypes[drop] [2];
      description = CommonHeadArmorTypes[drop] [3];
      CommonHeadArmorTypes[drop] [4] = true;
      trys = 0;
      console.log("You got " + name + ", " + description + " ID: " + id);
    }
  }  
}

function RandomPullCommonChestArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (1-50)")
    commonGearPrize();
  } else {
    drop = Math.floor(Math.random() * CommonChestArmorTypes.length);
    owned = CommonChestArmorTypes[drop] [4];
    if (owned == true) {
      console.log("Retring for new armor....")
      trys++;
      RandomPullCommonChestArmor();
    } else {
      id = CommonChestArmorTypes[drop] [0];
      name = CommonChestArmorTypes[drop] [1];
      protection = CommonChestArmorTypes[drop] [2];
      description = CommonChestArmorTypes[drop] [3];
      CommonChestArmorTypes[drop] [4] = true;
      trys = 0;
      console.log("You got " + name + ", " + description + " ID: " + id);
    }
  }  
}

function RandomPullCommonLegArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (1-50)")
    commonGearPrize();
  } else {
    drop = Math.floor(Math.random() * CommonLegArmorTypes.length);
    owned = CommonLegArmorTypes[drop] [4];
    if (owned == true) {
      console.log("Retring for new armor....")
      trys++;
      RandomPullCommonLegArmor();
    } else {
      id = CommonLegArmorTypes[drop] [0];
      name = CommonLegArmorTypes[drop] [1];
      protection = CommonLegArmorTypes[drop] [2];
      description = CommonLegArmorTypes[drop] [3];
      CommonLegArmorTypes[drop] [4] = true;
      trys = 0;
      console.log("You got " + name + ", " + description + " ID: " + id);
    }
  }  
}

function RandomPullCommonBootArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (1-50)")
    commonGearPrize();
  } else {
    drop = Math.floor(Math.random() * CommonBootArmorTypes.length);
    owned = CommonBootArmorTypes[drop] [4];
    if (owned == true) {
      console.log("Retring for new armor....")
      trys++;
      RandomPullCommonBootArmor();
    } else {
      id = CommonBootArmorTypes[drop] [0];
      name = CommonBootArmorTypes[drop] [1];
      protection = CommonBootArmorTypes[drop] [2];
      description = CommonBootArmorTypes[drop] [3];
      CommonBootArmorTypes[drop] [4] = true;
      trys = 0;
      console.log("You got " + name + ", " + description + " ID: " + id);
    }
  }  
}

function RandomPullUncommonHeadArmor() {
 if (trys > 100) {
  console.log("Sorry armor could not be found... Instead you will get a gear prize.(50-100)")
  uncommonGearPrize();
 } else {
  drop = Math.floor(Math.random() * UncommonHeadArmorTypes.length);
  owned = UncommonHeadArmorTypes[drop] [4];
  if (owned == true) {
   console.log("Retring for new armor....")
   trys++;
   RandomPullUncommonHeadArmor();
  } else {
   id = UncommonHeadArmorTypes[drop] [0];
   name = UncommonHeadArmorTypes[drop] [1];
   protection = UncommonHeadArmorTypes[drop] [2];
   description = UncommonHeadArmorTypes[drop] [3];
   UncommonHeadArmorTypes[drop] [4] = true;
   trys = 0;
   uncommonOwned = true;
   console.log("You got " + name + ", " + description + " ID: " + id);
    }
  }  
}

function RandomPullUncommonChestArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (50-100)")
    commonGearPrize();
  } else {
    drop = Math.floor(Math.random() * UncommonChestArmorTypes.length);
    owned = UncommonChestArmorTypes[drop] [4];
    if (owned == true) {
      console.log("Retring for new armor....")
      trys++;
      RandomPullUncommonChestArmor();
    } else {
      id = UncommonChestArmorTypes[drop] [0];
      name = UncommonChestArmorTypes[drop] [1];
      protection = UncommonChestArmorTypes[drop] [2];
      description = UncommonChestArmorTypes[drop] [3];
      UncommonChestArmorTypes[drop] [4] = true;
      trys = 0;
      console.log("You got " + name + ", " + description + " ID: " + id);
    }
  }  
}

function RandomPullUncommonLegArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (50-100)")
    commonGearPrize();
  } else {
    drop = Math.floor(Math.random() * UncommonLegArmorTypes.length);
    owned = UncommonLegArmorTypes[drop] [4];
    if (owned == true) {
      console.log("Retring for new armor....")
      trys++;
      RandomPullUncommonLegArmor();
    } else {
      id = UncommonLegArmorTypes[drop] [0];
      name = UncommonLegArmorTypes[drop] [1];
      protection = UncommonLegArmorTypes[drop] [2];
      description = UncommonLegArmorTypes[drop] [3];
      UncommonLegArmorTypes[drop] [4] = true;
      trys = 0;
      console.log("You got " + name + ", " + description + " ID: " + id);
    }
  }  
}

function RandomPullUncommonBootArmor() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Instead you will get a gear prize. (50-100)")
    commonGearPrize();
  } else {
    drop = Math.floor(Math.random() * UncommonBootArmorTypes.length);
    owned = UncommonBootArmorTypes[drop] [4];
    if (owned == true) {
      console.log("Retring for new armor....")
      trys++;
      RandomPullUncommonBootArmor();
    } else {
      id = UncommonBootArmorTypes[drop] [0];
      name = UncommonBootArmorTypes[drop] [1];
      protection = UncommonBootArmorTypes[drop] [2];
      description = UncommonBootArmorTypes[drop] [3];
      UncommonBootArmorTypes[drop] [4] = true;
      trys = 0;
      console.log("You got " + name + ", " + description + " ID: " + id);
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
  


///////////////////////////////////////////
///             8) COOKIES              ///
///////////////////////////////////////////


function askCookies() {
  awn = promt("Do you want cookies (il type more here later). type no for no, anything else is yes");
  if (awn == "no") {
    alert("Bummer");
    allowCookies = false;
  } else {
    allowCookies = true;
    setInterval(makeSavedData_cookies, 250);
    alert("Good for you");
  }
}

function makeSavedData_cookies() {
  if allowCookies == true {
    const data = {
      //Cookies Cookies
      allowCookies: allowCookies,
      //User Cookies
      user: user,
      username: username,
      atTag: atTag,
      //Ach cookies
      //Total Ach
      ach_total: ach_total,
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

callSavedData_cookies() {
  const savedData = JSON.parse(localStorage.getItem('savedData'));
  if (savedData) {
    //Cookies Cookies
    allowCookies = saveData.allowCookies || false;
    //User Cookies
    user = savedData.user || false;
    username = savedData.username || "guest";
    atTag = savedData.atTag || "@guest";
    //Ach Cookies
    //Total Ach
    ach_total = savedData.ach_total || "false";
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
    //Season 1 Ach
    ach_seasonOne_AllArmor = savedData.ach_seasonOne_AllArmor || false;


  }
};
