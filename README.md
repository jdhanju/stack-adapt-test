# StackAdapt Test

## Task 1

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
- The given [csv file](https://docs.google.com/spreadsheets/d1D4-ZYeQS7-hS_uOeJ62vRHsJODcnn1pEYBqJgsGfu_Q/edit#gid=1383889228) has a incorrect URL on row 9.

![screenshot2](images/sc2.png)

## Improving Performance
- One way to improve the performance of this application is to store all fetched data into the browsers local storage. This way users won't have to wait as long for ads to load.
- The downside of this approach is that any updates to the csv file won't show on the users end unless they clear their local storage.
- This problem can be avoided by adding a timestamp to local storage, and updating the data once a certian amount of time has passed by.
- Even though this solution is better it still doesn't offer instant updates, so I deciced not to implement it.

## Desktop View 300x600px

![sc3](images/sc3.png)

## Mobile View 320x50px

![sc4](images/sc4.png)
