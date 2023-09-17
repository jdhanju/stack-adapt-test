# StackAdapt Test

## Description
- The purpose of this application is to display a 12 Days of Christmas sale advertisement. The sale changes based on the users date.
- The application uses the Google Sheets API, and retrieves data from a [csv file](https://docs.google.com/spreadsheets/d/1D4-ZYeQS7-hS_uOeJ62vRHsJODcnn1pEYBqJgsGfu_Q/edit#gid=1383889228) that contains all information on the upcoming sale.

## How to run?
- A Google API key is required for this application to run. Here is [video](https://www.youtube.com/watch?v=nqlyLZxX0ys&ab_channel=DealsandTrainingbySan) on how you can create an API key, and enable the Google Sheets API.
- Once the key is ready open the project folder
- Open the file config.js
- Set the variable **GOOGLE_API_KEY** equal to your Google API Key
- Open the file **index.html** in a browser and the application will run

## How to test specific dates?
- Currently, the application is set to use the users current date. Follow the steps below to test alternative dates.
- Open the file **script.js**
- Scroll down to line 36
- Comment out the line
- Uncomment line 37
- Now you are able to modify the parameters inside of the Date object.
- Below is how the code should look if you want to test the date January 2, 2023

![screenshot1](images/sc1.png)

## Known Issues
- The given [csv file](https://docs.google.com/spreadsheets/d1D4-ZYeQS7-hS_uOeJ62vRHsJODcnn1pEYBqJgsGfu_Q/edit#gid=1383889228) has a incorrect URL.

![screenshot2](images/sc2.png)


