async function brokerLogin() {
    // Show loading spinner
    document.getElementById("loading").style.display = "block";

    try {
        await import('./Broker_Login_Page.js')
            .then(module => module.handleLogin())
            .catch(err => console.error("Failed to load Broker Login Page:", err));
    } finally {
        // Hide loading spinner
        document.getElementById("loading").style.display = "none";
    }
}

function redirectToProfile() {
    window.location.href = "file:///C:/Users/JEYASHREE%20NARESH/Desktop/pnn_algo/PROFILE/Profile_page.html";
}

function redirectToTradeBook() {
    window.location.href = "file:///C:/Users/JEYASHREE%20NARESH/Desktop/pnn_algo/TRADE BOOK/Trade_Page.html";
}         

function redirectTostartTrade() {
    window.location.href = "file:///C:/Users/JEYASHREE%20NARESH/Desktop/pnn_algo/START TRADE/Start_Trade.html";
}

function redirectTostartbrokerlogin() {
    window.location.href = "file:///C:/Users/JEYASHREE%20NARESH/Desktop/pnn_algo/BROKER LOGIN/Broker_Login_Page.html";
}
