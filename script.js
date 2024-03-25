
function calculateZakat() {
// obtain input values
var goldGram = parseFloat(document.getElementById('goldGram').value);
var silverGram = parseFloat(document.getElementById('silverGram').value);
var cash = parseFloat(document.getElementById('cash').value);

// Current rates of gold and silver (assumed rates)
var goldRate = 6700; // Assuming the rate is 6700 INR per gram
var silverRate = 75;  // Assuming the rate is 75 INR per gram 

// Calculate total assets
var totalGoldValue = goldGram * goldRate;
var totalSilverValue = silverGram * silverRate;
var totalCashValue = cash;
var totalAssets = totalGoldValue + totalSilverValue + totalCashValue;

// Subtract 25% from gold and silver
totalGoldValue *= 0.75;
totalSilverValue *= 0.75;

// Calculate Zakat amount
var totalZakatableAssets = totalGoldValue + totalSilverValue + totalCashValue;
var zakatAmount = totalZakatableAssets * 0.025;

// Display Zakat amount
document.getElementById('zakatAmount').innerText = "Your Zakat amount is: " + zakatAmount.toFixed(2) + " INR";
}