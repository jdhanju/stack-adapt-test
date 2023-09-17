//CSV url
//const CSV_URL = 'https://docs.google.com/spreadsheets/d/1D4-ZYeQS7-hS_uOeJ62vRHsJODcnn1pEYBqJgsGfu_Q/edit#gid=1383889228';

const API_KEY = GOOGLE_API_KEY;
const SPREADSHEET_ID = '1D4-ZYeQS7-hS_uOeJ62vRHsJODcnn1pEYBqJgsGfu_Q';

// Google Sheets API endpoint
const API_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/A1%3AZ100?key=${API_KEY}`;

//fetch CSV data
async function fetchCSV() {
    try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        console.log(data);
        //data.values is an array where each index is another array that represents a row from the CSV file
        return data.values;
    } catch (error) {
        console.error('Error fetching CSV:', error);
        return null;
    }
}


// Function to parse CSV data and update the banner
async function updateBanner() {
    const csvData = await fetchCSV();
    if (!csvData) return;

    // Get the current date
    //const currentDate = new Date();
    const currentDate = new Date("2023-01-03");

    // Find the index of the row that matches the current date
    let rowIndex = -1;
    for (let i = 1; i < csvData.length; i++) {
        const row = csvData[i];
        const saleDate = new Date(row[2]);

        if (currentDate.toDateString() === saleDate.toDateString()) {
            rowIndex = i;
            break;
        }
    }

    // If no matching date is found, display a default message
    if (rowIndex === -1) {
        document.getElementById('product-name').textContent = "No sale today";
        document.getElementById('product-image').src = "";
        console.log("in here");
        return;
    }

    // Get product details from the matching row
    const productDetails = csvData[rowIndex];
    const productName = productDetails[0];
    const productImageLink = productDetails[1];

    // Update the banner with the product details
    document.getElementById('product-name').textContent = productName;
    document.getElementById('product-image').src = productImageLink;
}

// Call the updateBanner function when the page loads
window.addEventListener('load', updateBanner);