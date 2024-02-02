
function storeUserInfo(key) {
    const userInput = prompt(`Enter your ${key}:`);
    localStorage.setItem(key, JSON.stringify(userInput));
}

function displayUserInfo(key, elementId) {
    const storedInfo = JSON.parse(localStorage.getItem(key));
    document.getElementById(elementId).textContent = storedInfo;
}

storeUserInfo("firstName");
storeUserInfo("lastName");
storeUserInfo("country");
storeUserInfo("phoneNumber");
storeUserInfo("state");
storeUserInfo("city");
storeUserInfo("village");


displayUserInfo("firstName", "first-name");
displayUserInfo("lastName", "last-name");
displayUserInfo("country", "country");
displayUserInfo("phoneNumber", "phone-number");
displayUserInfo("state", "state");
displayUserInfo("city", "city");
displayUserInfo("village", "village");
