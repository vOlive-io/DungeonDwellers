import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66ec18fc0015b7a013d5'); 

export const account = new Account(client);

export { ID } from 'appwrite';

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



