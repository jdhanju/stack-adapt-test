//CSV url
//const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSvowAT52nYidFW0JXMK9itpl-oG-7jvLN7Kdq8eHNA0_z-M-RpTj0qOMUBM3Rzvq_3yRAK3lAEHF-H/pub?output=csv';

const API_KEY = GOOGLE_API_KEY;
const SPREADSHEET_ID = '1D4-ZYeQS7-hS_uOeJ62vRHsJODcnn1pEYBqJgsGfu_Q';

// Google Sheets API endpoint
const API_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/A1%3AZ100?key=${API_KEY}`;

//fetch CSV data
async function fetchCSV() {
    try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.text();
        console.log(data);
        //data.values returns only the 
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
}

// Call the updateBanner function when the page loads
window.addEventListener('load', updateBanner);