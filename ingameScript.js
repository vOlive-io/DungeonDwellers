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
  ["1", "Bead Head", "0", "The hair you woke up in. Common, +0 Protection.", true],
  ["2", "Fig Leaf Wreath", "1", "A fig wreath place atop your head. Common, +1 Protection.", false],
  ["3", "Wood-helmet", "1", "A poorly crafted helmet of wood that will protect you from minimal damage. Common, +1 Protection.", false],
  ["4", "Leather Bandana", "2", "Some leather from bunnies, it has some dried snot on it but hey, it works. Common +2 Protection.", false],
  ["5", "Painted on Helmet", "2", "It's not real, but they don't have to know that. Common +2 Protection.", false],
  ["6", "Explorers Helmet", "3", "A helmet made to prove that you are an explorer. Common +3 Protection.", false]
];

var CommonChestArmorTypes = [
  ["7", "T-shirt", "0", "A cute t-shirt made from cotton. Common, +0 Protection.", "false"],
  ["8", "Fig Leaf Breastplate", "1", "A breastplate made of fig leaves, to protect you from harm. Common, +1 Protection.", "true"]
  ["9", "Woodplate", "1", "A flat sheet of wood that will protect you from minimal damage. Common, +1 Protection.", "false"],
  ["10", "Leather Chestplate", "2", "Some leather from cows, its patchy, old and smells funky but its better than nothing. Common +2 Protection.", "false"],
  ["11", "Painted on Armor", "2", "It's not real, but they don't have to know that. Common +2 Protection.", "false"],
  ["12", "Basic Explorers Chestplate", "3", "A chest plate made to prove that you are an explorer. Common +3 Protection.", "false"]
];

var CommonLegArmorTypes = [
  ["13", "Jeans", "0", "Jeans from your house, they're not comfy but its better than being naked. Common, +0 Protection.", "true"],
  ["14", "The Fig Leaf", "1", "A fig leaf picked from the high selection of fig leaves. Common, +1 Protection.", "false"]
  ["15", "Wooden Leg Padding", "1", "A curved sheet of wood that you can put on your legs to help keep yourself safe. Common, +1 Protection.", "false"],
  ["16", "Leather Leggings", "2", "Some leather from horses formed into a nice set of leather jeans. Common +2 Protection.", "false"],
  ["17", "Painted on Leggings", "2", "It's not real, but they don't have to know that. Common +2 Protection", "false"],
  ["18", "Basic Explorers Leggings", "3", "A pair of leggings made to prove that you are an explorer. Common +3 Protection.", "false"]
];

var CommonBootArmorTypes = [
  ["19", "Shoes", "0", "A pair of black shoes, without lases. Common, +0 Protection.", "true"],
  ["20", "Fig Leaf Feet Covers", "1", "Large fig leaves wrapped around your feet. Common, +1 Protection.", "false"]
  ["21", "Wood Sandals", "1", "A flat sheet of wood tied to the bottoms of your feet to keep your feet safe. Common, +1 Protection.", "false"],
  ["22", "Leather Boots", "2", "Some leather from sheep made into a boot just for you. Common +2 Protection.", "false"],
  ["23", "Painted on Boots", "2", "It's not real, but they don't have to know that. Common +2 Protection.", "false"],
  ["24", "Basic Explorers Boots", "3", "A set of boots made to prove that you are an explorer. Common +3 Protection.", "false"]
];






/////////////////////////////////////////////UNCOMMON/////////////////////////////////////////////
var UncommonHeadArmorTypes = [
  ["25", "Fruit Hat", "3", "A tasty hat made from all types of fruits. Uncommon +3 Protection.", "false"],
  ["26", "Safari Hat", "3", "Keep the sun out of your face now with the new safari hat. Uncommon +3 Protection.", "false"],
  ["27", "Rubber Mask", "3", "I'm rubber you're glue whatever you swing onto me bounces off of me and hits you. Uncommon +3 Protection.", "false"],
  ["28", "Mud Mask", "3", "\"A facemask made from dried mud from the mudbaths of the inner su--- you know what, I don't think you like to know...\". Uncommon +3 Protection.", "false"],
  ["29", "Tin Head", "4", "A new head made of tin with great acoustics. Uncommon +4 Protection.", "false"],
  ["30", "Stone Helmet", "4", "Try not to move your head it hurts less that way. Uncommon, +4 Protection.", "false"], 
  ["31", "Glass Helmet", "4", "YOu can see your hair! Uncommon +4 Protection.", "false"],
  ["32", "Nickle Helmet", "5", "Nickle armor, maybe when you are done with it you can turn it into nickles! Uncommon +5 Protection.", "false"],
  ["33", "Chain Mail Helmet", "5", "Tons of small iron rings \"Woven\" together to make this masterpiece. Uncommon +5 Protection.", "false"]
  ["34", "Copper Helmet", "5", "Not to be confused with its alloys forms Bronze and Brass. Uncommon +5 Protection.", "false"],
  ["35", "Brass Helmet", "5", "They also make Tobas out of thee very metal you are looking at. Uncommon +5 Protection.", "false"]
];

var UncommonChestArmorTypes = [
  ["36", "CoconutShell Breast Plate", "3", "A cute breastplate made from fresh coconuts (Coconut juice not provided). Uncommon +3 Protection.", "false"],
  ["37", "Safari Vest", "3", "Dress up like your favorite safari heroes now with the new vest. Uncommon +3 Protection.", "false"],
  ["38", "Rubber Chestplate", "3", "I'm rubber you're glue whatever you swing onto me bounces off of me and hits you. Uncommon +3 Protection.", "false"],
  ["39", "Mud Chestplate", "3", "\"Armor made from dried mud from the mudbaths of the inner su--- you know what, I don't think you like to know...\". Uncommon +3 Protection.", "false"],
  ["40", "Tin Chestplate", "4", "A chest plate made of tin with great acoustics. Uncommon +4 Protection.", "false"],
  ["41", "Stone Chestplate", "4", "Armor made entirely of stone, it's heavy but it keeps you safe. Uncommon, +4 Protection.", "false"],
  ["42", "Glass Chestplate", "4", "You can see you clothing under underneath, how cool! Uncommon +4 Protection.", "false"],
  ["43", "Nickle Chestplate", "5", "Nickle armor, maybe when you are done with it you can turn it into nickles! Uncommon +5 Protection.", "false"],
  ["44", "Chain Mail Chestplate", "5", "Tons of small iron rings \"Woven\" together to make this masterpiece. Uncommon +5 Protection.", "false"]
  ["45", "Copper Chestplate", "5", "Not to be confused with its alloys forms Bronze and Brass. Uncommon +5 Protection.", "false"],
  ["46", "Brass Chestplate", "5", "They also make Tobas out of thee very metal you are looking at. Uncommon +5 Protection.", "false"]
];

var UncommonLegArmorTypes = [
  ["36", "Banana Leaves Skirt", "3", "A nice skirt made from fresh banana leaves (Bananas). Uncommon +3 Protection.", "false"],
  ["37", "Safari Pants", "3", "Dress up as your favorite safari explores now with the new legging. Uncommon +3 Protection.", "false"],
  ["38", "Rubber Leggings", "3", "I'm rubber you're glue whatever you swing onto me bounces off of me and hits you. Uncommon +3 Protection.", "false"],
  ["39", "Mud Leggings", "3", "\"Armor made from dried mud from the mudbaths of the inner su--- you know what, I don't think you like to know...\". Uncommon +3 Protection.", "false"],
  ["40", "Tin Leggings", "4", "A pair of stiff pants made of tin. Uncommon +4 Protection.", "false"],
  ["41", "Stone Leggings", "4", "Leggings made entirely of stone, it's heavy but it keeps you safe. Uncommon, +4 Protection.", "false"],
  ["42", "Glass Leggings", "4", "You can see you clothing under underneath, how cool! Uncommon +4 Protection.", "false"],
  ["43", "Nickle Leggings", "5", "Nickle leggings, maybe when you are done with it you can turn it into nickles! Uncommon +5 Protection.", "false"],
  ["44", "Chain Mail Leggings", "5", "Tons of small iron rings \"Woven\" together to make this masterpiece. Uncommon +5 Protection.", "false"]
  ["45", "Copper Leggings", "5", "Not to be confused with its alloys forms Bronze and Brass. Uncommon +5 Protection.", "false"],
  ["46", "Brass Leggings", "5", "They also make Tobas out of thee very metal you are looking at. Uncommon +5 Protection.", "false"]
];


var UncommonBootArmorTypes = [
  ["36", "Fruit Peel Shoes", "3", "\"Try not to slip\". Uncommon +3 Protection", "false"],
  ["37", "Safari Boots", "3", "Dress up as your favorite safari explores now with the new legging. Uncommon +3 Protection.", "false"],
  ["38", "Rubber Boots", "3", "I'm rubber you're glue whatever you swing onto me bounces off of me and hits you. Uncommon +3 Protection.", "false"],
  ["39", "Mud Boots", "3", "\"Armor made from dried mud from the mudbaths of the inner su--- you know what, I don't think you like to know...\". Uncommon +3 Protection.", "false"],
  ["40", "Tin Boots", "4", "Some boots made of tin. Uncommon +4 Protection", "false"],
  ["41", "Stone Boots", "4", "Boots made entirely of stone, it's heavy but it keeps you safe. Uncommon, +4 Protection.", "false"],
  ["42", "Glass Boots", "4", "You can see your feet under underneath, how cool! Uncommon +4 Protection.", "false"],
  ["43", "Nickle Boots", "5", "Nickle boots, maybe when you are done with it you can turn it into nickles! Uncommon +5 Protection.", "false"],
  ["44", "Chain Mail Boots", "5", "Tons of small iron rings \"Woven\" together to make this masterpiece. Uncommon +5 Protection.", "false"]
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
  ["31", "Diamond", "4", ""]
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
  updateStats();
}

function updateStats() {
  hpt.innerText = heath + "/" + maxHeath;
}

///////////////////////////////////////////
///     2) GEAR PRIZES & LOOT BOXES     ///
///////////////////////////////////////////


function commonLootBox() {
  if (trys > 100) {
    console.log("Sorry armor could not be found... Insted you will get a gear prize.")
    commonGearPrize();
  }
  else {
    drop = Math.floor(Math.random() * CommonHeadArmorTypes.length);
    owned = CommonHeadArmorTypes[drop] [4];
    if (owned == true) {
      console.log("Retring for new armor....")
      trys++;
      commonLootBox();
    }
    else {
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

function commonGearPrize() {
  prize = Math.floor(Math.random() * 50) + 1;
  gears = gears + prize;
  console.log("Reward granted, gear prize: " + prize)
  prize = 0;
}

/*
function StartGame() {
}


import { account} from "./appwrite.mjs"

const loginBtn = document.getElementById('login-btn')
const logoutBtn = document.getElementById('logout-btn')
const srofileScreen = document.getElementById('profile-screen')
const loginScreen = document.getElementById('login-screen')

async function handleLogin (){
  account.createOAuth2Session(
    'google', //app
    'https://volive-io.github.io/DungeonDwellers/',    //succses
    'https://volive-io.github.io/DungeonDwellers/fail',    //fail
  )
}


async function getUser (){
  try {

    const user = await account.get()
    renderProfileScreen(user)
  }catch(error) {
    renderLoginScreen()
  }
}

function renderLogingScreen (){
  profileScreen.classList.remove('hidden')
}

function renderProfileScreen (user){
  document.getElementById('user-name').textContent = user.name
  profileScreen.classList.remove('hidden')
}

async function handleLogout (){
  accont.deleteSession('current')
  profileScreen.classList.add('hidden')
  renderLoginScreen()
}
  
*/











