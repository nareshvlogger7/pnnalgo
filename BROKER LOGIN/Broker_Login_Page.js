const { SmartAPI } = require('smartapi-javascript');
const getConfigData = require('../ BROKER LOGIN/Angel One API Configuration.js'); // Import the async function to get config data

// Initialize SmartAPI instance
let smart_api;

// Function to initialize SmartAPI instance
const initializeSmartAPI = async () => {
    const configData = await getConfigData(); // Fetch configuration from the database

    smart_api = new SmartAPI({
        api_key: configData.apiKey,
        // Optional: Include if you have valid tokens
        // access_token: configData.accessToken,
        // refresh_token: configData.refreshToken
    });
};

// Handle login process using SmartAPI
const handleLogin = async (username, password) => {
    try {
        await initializeSmartAPI(); // Ensure SmartAPI is initialized before login

        // Generate session using SmartAPI
        const sessionData = await smart_api.generateSession(
            username,  // Use username from parameters instead of config
            password,  // Use password from parameters instead of config
            (await getConfigData()).totpSecret
        );
        
        // Get user profile after successful login
        const profileData = await smart_api.getProfile();
        
        console.log('Login successful:', sessionData);
        console.log('Profile data:', profileData);
        
        return {
            sessionData,
            profileData
        };
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

module.exports = {
    initializeSmartAPI, // Optionally export the function to initialize
    handleLogin
};
