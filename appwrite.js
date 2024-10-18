// import Appwrite from 'appwrite';

// Define components
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const profileScreen = document.getElementById('profile-screen');
const loginScreen = document.getElementById('login-screen');
const username = document.getElementById('user-name');

// Initialize Appwrite client
const client = new Appwrite.Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')  // Appwrite API Endpoint
  .setProject('66ec18fc0015b7a013d5');          // Appwrite Project ID

// Account object to handle user sessions
const account = new Appwrite.Account(client);

// OAuth login (Google)
export async function loginWithGoogle() {
  try {
    await account.createOAuth2Session(
      'google',
      'http://localhost/',  // Success redirect URL
      'http://localhost/fail' // Failure redirect URL
    );

    // Directly check for user session after the login attempt
    const user = await getCurrentUser(); // Check if user is now logged in
    if (user) {
      // username.textContent = user.name;
      console.log('User logged in successfully:', user);
      renderProfileScreen(user); // Render the profile screen if login is successful
      // Check and log cookies or session storage
      console.log('Cookies:', document.cookie);
      console.log('Local Storage:', localStorage);
    } else {
      console.log('No user session found after login attempt.');
    }
  } catch (error) {
    console.error('Error during OAuth login:', error);
    alert('Login failed. Please check your credentials and try again.'); // User-friendly alert
  }
}

// Get the current user session
export async function getCurrentUser() {
  try {
    const user = await account.get(); // Check for active session
    console.log('User session found:', user);
    return user;
  } catch (error) {
    console.log('No user session found:', error);
    return null;
  }
}

// Logout function
export async function logout() {
  try {
    await account.deleteSession('current');
    console.log('Logged out successfully.');
    renderLoginScreen(); // Render login screen after logout
  } catch (error) {
    console.error('Logout failed:', error);
  }
}

// Handle login with Google OAuth
loginBtn.addEventListener('click', async () => {
  await loginWithGoogle();
});

// Handle logout
logoutBtn.addEventListener('click', async () => {
  await logout();
});

// Render login screen
function renderLoginScreen() {
  profileScreen.classList.add('hidden');
  loginScreen.classList.remove('hidden');
}

// Render profile screen with user info
function renderProfileScreen(user) {
  username.textContent = user.name; // Display user's name
  loginScreen.classList.add('hidden');
  profileScreen.classList.remove('hidden');
}

// Check if the user is already logged in
async function checkUserSession() {
  try {
    const user = await getCurrentUser();
    if (user) {
      console.log('User session active:', user);
      renderProfileScreen(user);
    } else {
      console.log('No active session. Rendering login screen.');
      renderLoginScreen();
    }
  } catch (error) {
    console.error('Error checking user session:', error);
    renderLoginScreen();
  }
}


// Run on page load
window.onload = async () => {
  console.log('Page loaded, checking session...');
  await checkUserSession();
};
