///////////////////////////////////////////
///              VARIABLES              ///
///        1) Stats                     ///
///        2) BunBerries                ///
///        3) Armor                     ///
///        4) Weapons                   ///
///        5) Items                     ///
///        6) LootChest/Boxes           ///
///                                     ///
///////////////////////////////////////////

//////////////////////////// 
///       1) STATS       ///
////////////////////////////
//stats 

currentHeath = 10; //       Current amount of Heath
currentWater = 10; //       Current amount of Water
currentSat = 10; //         Current amount of Saturation
currentStrenth = 10; //     Current amount of Strenth
currentStealth = 10; //     Current amount of Stealth
currentLuck = 0; //         Current amount of Luck
currentProtection = 0; //   Current amount of Protection

maxHeath = 10; //           Max amount of Heath
maxWater = 15; //           Max amount of Water
maxSat = 15; //             Max amount of Saturation
gears = 0;


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
var totalBunBerries = 0; //      Total Number of Bun Berries
var totalEaten = 0; //           Total Number of Bun Berries Eaten
//BASIC BUN BERRIES
var luckBunBerries = 0; //           +3 Luck
var strenthBunBerries = 0; //        +5 Strength
var stealthBunBerries  = 0; //       +5 Stealth
var waterBunBerries = 0; //          +5 Water
var stelthBunBerrie = 0 //           +5 Steath
var maxSaturationBunBerries = 0; //  +10 Max Saturation
var saturationBunBerries = 0; //     +10 Saturation
var maxWaterBunBerries = 0; //       +10 Max Water
//HEATH BUN BERRIES
var lv1HeathHealBunBerries = 0; //   restores 5% of Heath
var lv2HeathHealBunBerries = 0; //   restores 10% of Heath
var lv3HeatHealhBunBerries = 0; //   restores 25% of Heath
var lv4HeathHealBunBerries = 0; //   restores 50% of Heath
var lv5HeathHealBunBerries = 0; //   restores 100% of Heath
//MAX HEATH BUN BERRIES
var lv1maxHeathBunBerries = 0; //    +10 max Heath 
var lv2macHeathBunBerries = 0; //    +100 max Heath
//SPECIAL BUN BERRIES
var shadowBunBerries = 0; //         +10 Stealth, +5 Heath, +3 Luck
var lavaBunBerries = 0; //           +10 Strength, +5 Stealth, +3 Heath
var aquaBunBerries = 0; //           +10 Water, +5 Strength, +3 Heath
var jesterBunBerries = 0; //         +10 Luck, +5 Steath, +3 Heath



////////////////////////////
///      3) ARMORS       ///
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
  ["7", "T-shirt", "0", "stop taking sheep wool please you look so ugly. Common, +0 Protection.", "false"],
  ["8", "Fig Leaf Breastplate", "1", "Stop murdering the trees you sicko . Common, +1 Protection.", "true"],
  ["9", "Woodplate", "1", "STOP MURDERING THE TREES IT ISN\'T GOOD FOR THEIR HEALTH!!!!!!!!!!!!, Common, +1 Protection.", "false"],
  ["10", "Leather Chestplate", "2", "Found some cow patties I see . Common +2 Protection.", "false"],
  ["11", "Painted on Armor", "2", "Wow look at you Picasso. Common +2 Protection.", "false"],
  ["12", "Basic Explorers Chestplate", "3", "Indiana Jones is nothing compared to you *sarcasm*. Common +3 Protection.", "false"]
];

var CommonLegArmorTypes = [
  ["13", "Jeans", "0", "You-- You-- You- --You\'r burning my eyes please someone help!!. Common, +0 Protection.", "true"],
  ["14", "The Fig Leaf", "1", "You look very, very, very, stupid. Common, +1 Protection.", "false"],
  ["15", "Wooden Leg Padding", "1", "you lunkhead now you can't move!!. Common, +1 Protection.", "false"],
  ["16", "Leather Leggings", "2", "cool very very cool you MURDERER OF HORSES!!!!. Common +2 Protection.", "false"],
  ["17", "Painted on Leggings", "2", " Look Michelangelo what are you painting?. Common +2 Protection", "false"],
  ["18", "Basic Explorers Leggings", "3", "How Many pockets Does it have?. Common +3 Protection.", "false"]
];
var CommonBootArmorTypes = [
  ["19", "Shoes", "0", "Why are they untied?. Common, +0 Protection.", "true"],
  ["20", "Fig Leaf Feet Covers", "1", "rocks can easily poke through and cause you pain. Common, +1 Protection.", "false"]
  ["21", "Wood Sandals", "1", "Forget to bring tweezers?. Common, +1 Protection.", "false"],
  ["22", "Leather Boots", "2", "Like Minecraft I assume. Common +2 Protection.", "false"],
  ["23", "Painted on Boots", "2", "Da Vinci who are you painting?. Common +2 Protection.", "false"],
  ["24", "Basic Explorers Boots", "3", "No they aren't air Jordans. Common +3 Protection.", "false"]
];






/////////////////////////////////////////////UNCOMMON/////////////////////////////////////////////


var UncommonHeadArmorTypes = [
  ["25", "Fruit Hat", "3", "Hungry? Don't eat it. Uncommon +3 Protection.", "false"],
  ["26", "Safari Hat", "3", "You look like a cheetah . Uncommon +3 Protection.", "false"],
  ["27", "Rubber Mask", "3", "I AM THOR! STRIKE ME LIGHTNING, YOU DO NO HARM. Uncommon +3 Protection.", "false"],
  ["28", "Mud Mask", "3", "It looks so much like poop, I mean that's what fertilizer is made of right? I got it from the ground so it must....\". Uncommon +3 Protection.", "false"],
  ["29", "Tin Head", "4", "Be the Tin Man from the Wizard of OZ Uncommon +4 Protection.", "false"],
  ["30", "Stone Helmet", "4", "Rocks, Stone, and Tuff! Don't move you're head or It will roll like a stone :\). Uncommon, +4 Protection.", "false"], 
  ["31", "Glass Helmet", "4", "Dang! you can see you're hair..... GET A FRIGGIN COMB LUNKHEAD! Uncommon +4 Protection.", "false"],
  ["32", "Nickle Helmet", "5", "Get the new nickel helmet  now being sold for 999.99! Uncommon +5 Protection.", "false"],
  ["33", "Chain Mail Helmet", "5", "You look so ancient. Uncommon +5 Protection.", "false"],
  ["34", "Copper Helmet", "5", "Don a torch and book and you can be the Statue of Liberty! Uncommon +5 Protection.", "false"],
  ["35", "Brass Helmet", "5", "You look so Ugly . Uncommon +5 Protection.", "false"]
];

var UncommonChestArmorTypes = [
  ["36", "CoconutShell Brest Plate", "3", "Wow, you look ready for the beach, just not the dungeons! Uncommon +3 Protection.", "false"],
  ["37", "Safari Vest", "3", "You look so dorky . Uncommon +3 Protection.", "false"],
  ["38", "Rubber Chestplate", "3", "I am Inevitable!! (Marvel fans please don't airstrike me). Uncommon +3 Protection.", "false"],
  ["39", "Mud Chestplate", "3", "\"You can grow plants so well, please miss the fact it is made of almost entirely poop\". Uncommon +3 Protection.", "false"],
  ["40", "Tin Chestplate", "4", "You look like one of those coke ads. Uncommon +4 Protection.", "false"],
  ["41", "Stone Chestplate", "4", "Try not to run too much, broken backs aren't fun . Uncommon, +4 Protection.", "false"],
  ["42", "Glass Chestplate", "4", "Why did you keep the same shirt on! Uncommon +4 Protection.", "false"],
  ["43", "Nickle Chestplate", "5", "Buy the new and more expensive chest piece for 1,233.99! Uncommon +5 Protection.", "false"],
  ["44", "Chain Mail Chestplate", "5", "Are you so old you think chainmail is for armor (eye roll). Uncommon +5 Protection.", "false"],
  ["45", "Copper Chestplate", "5", "Turn it green to make you look even more like the statue of liberty. Uncommon +5 Protection.", "false"],
  ["46", "Brass Chestplate", "5", "Turn it into a tuba please, please, please!! Uncommon +5 Protection.", "false"]
];
//Needs new descriptions
var UncommonLegArmorTypes = [
  ["36", "Banana Leaves Skirt", "3", "BANANA!!!!!!!!!!!!!!!!! Uncommon +3 Protection.", "false"],
  ["37", "Safari Pants", "3", "Bro you don't need 43 pants. Uncommon +3 Protection.", "false"],
  ["38", "Rubber Leggings", "3", "歌詞の意味: 私は海賊の王になるつもりだ. Uncommon +3 Protection.", "false"],
  ["39", "Mud Leggings", "3", "You really need more Fertilizer . Uncommon +3 Protection.", "false"],
  ["40", "Tin Leggings", "4", ". Uncommon +4 Protection.", "false"],
  ["41", "Stone Leggings", "4", "You have the one thing different from Minecraft. Uncommon, +4 Protection.", "false"],
  ["42", "Glass Leggings", "4", "Try not to fall or you are paying me like $1,252 for your medical bill. Uncommon +4 Protection.", "false"],
  ["43", "Nickle Leggings", "5", "Buy the even more costly nickel leggings for $13,232! Uncommon +5 Protection.", "false"],
  ["44", "Chain Mail Leggings", "5", "Chainmail Won't protect against my trash talk . Uncommon +5 Protection.", "false"],
  ["45", "Copper Leggings", "5", "Apologise to youre knees please . Uncommon +5 Protection.", "false"],
  ["46", "Brass Leggings", "5", "Make a clarinet to play to the monsters that try to kill you!! Uncommon +5 Protection.", "false"]
];

//Does not new descriptions
var UncommonBootArmorTypes = [
  ["36", "Fruit Peel Shoes", "3", "Try not to slip. Uncommon +3 Protection", "false"],
  ["37", "Safari Boots", "3", "Dress up as your favorite safari explores now with the new legging. Uncommon +3 Protection.", "false"],
  ["38", "Rubber Boots", "3", "Gomu Gomu No Gatling. Uncommon +3 Protection.", "false"],
  ["39", "Mud Boots", "3", "\"Armor made from dried mud from the mudbaths of the inner su--- you know what, I don't think you like to know...\". Uncommon +3 Protection.", "false"],
  ["40", "Tin Boots", "4", "Some boots made of tin. Uncommon +4 Protection", "false"],
  ["41", "Stone Boots", "4", "Boots made entirely of stone, it's heavy but it keeps you safe. Uncommon, +4 Protection.", "false"],
  ["42", "Glass Boots", "4", "You can see your feet under underneath, how cool! Uncommon +4 Protection.", "false"],
  ["43", "Nickle Boots", "5", "Nickle boots, maybe when you are done with it you can turn it into nickles! Uncommon +5 Protection.", "false"],
  ["44", "Chain Mail Boots", "5", "Tons of small iron rings \"Woven\" together to make this masterpiece. Uncommon +5 Protection.", "false"],
  ["45", "Copper Boots", "5", "Not to be confused with its alloys forms Bronze and Brass. Uncommon +5 Protection.", "false"],
  ["46", "Brass Boots", "5", "They also make Tobas out of thee very metal you are looking at. Uncommon +5 Protection.", "false"]
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
  ["18", "Steal", "3"],
  ["19", "Bronze", "4", ""],
  ["21", "Silver", "4", ""],
  ["20", "Gold", "4"],
  ["22", "Iron", "4", ""],
  ["23", "Fetherer", "4", ""],
  ["24", "Blessed Mud", "4", ""],
  ["25", "Jungle Vines", "4", ""]
];



/////////////////////////////////////////////EPIC/////////////////////////////////////////////
var EpicChestArmorTypes = [
  ["26", "Medevil Armor", "5"]
  ["27", "Costal", "4", ""],
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

function updateAllScreens() {
  updateVitals();
  updateMain();
  updateSlots();
  //Armors
  updateCommonHeadArmors();
  updateCommonChestArmors();
  updateUncommonHeadArmors();
  updateUncommonChestArmors();
  //
  
}

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

function updateCommonChestArmors() {
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

///////////////////////////////////////////
///      1.5) Description updates       ///
///////////////////////////////////////////
var HeadProtection = 0;

function updateDiscription() {
  if (document.getElementById("bedHead").selected == true) {
    HeadProtection = CommonHeadArmorTypes[0][2]
    HeadDescription.innerHTML = CommonHeadArmorTypes[1][3];
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
  } if (document.getElementById("SafariHat").selected == true) {
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
      RandomPullCommonChestArmor();
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
  





