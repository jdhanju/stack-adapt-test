//CSV url
const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSvowAT52nYidFW0JXMK9itpl-oG-7jvLN7Kdq8eHNA0_z-M-RpTj0qOMUBM3Rzvq_3yRAK3lAEHF-H/pub?output=csv';

//fetch CSV data
async function fetchCSV() {
    try {
        const response = await fetch(CSV_URL);
        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching CSV:', error);
        return null;
    }
}

fetchCSV();