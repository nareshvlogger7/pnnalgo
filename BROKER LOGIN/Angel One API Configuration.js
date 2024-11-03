const dbconfig = require('../dbconfig'); // Import dbconfig for database connection

async function getConfigData() {
  try {
    // Assuming you have a function getBrokerConfig in dbconfig to fetch details
    const configData = await dbconfig.getBrokerConfig(); 
    
    return {
      apiKey: configData.apiKey,
      clientCode: configData.clientCode,
      totpSecret: configData.totp,
      tradingPassword: configData.password,
    };
  } catch (error) {
    console.error("Error fetching configuration data:", error);
    throw error;
  }
}

module.exports = getConfigData;
