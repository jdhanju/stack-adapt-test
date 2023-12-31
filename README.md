# StackAdapt Test

## Task 1

## Description
- The purpose of this application is to display a 12 Days of Christmas sale advertisement. The sale changes based on the user's current date.
- The application uses the Google Sheets API and retrieves data from a [csv file](https://docs.google.com/spreadsheets/d/1D4-ZYeQS7-hS_uOeJ62vRHsJODcnn1pEYBqJgsGfu_Q/edit#gid=1383889228) that contains information on the upcoming sale.

## How to run?
- A Google API key is required for this application to run. Here is [video](https://www.youtube.com/watch?v=nqlyLZxX0ys&ab_channel=DealsandTrainingbySan) on how you can create an API key, and enable the Google Sheets API.
- Once the key is ready open the project folder
- Open the file config.js
- Set the variable **GOOGLE_API_KEY** to your Google API Key
- Open the file **index.html** in a browser and the application will run

## How to test specific dates?
- The application is set to use the user's current date. Follow the steps below to test alternative dates.
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
- One way to improve performance of this application is by storing all fetched data in the browser's local storage. This way users won't have to wait as long for ads to load.
- The downside of this approach is that any updates to the CSV file won't show on the users end unless they clear their local storage.
- This problem can be avoided by adding a timestamp to local storage, and updating the data once a certain amount of time has passed by.
- Even though this solution is better it still doesn't offer instant updates, so I decided not to implement it.

## Desktop View 300x600px

![sc3](images/sc3.png)

## Mobile View 320x50px

![sc4](images/sc4.png)

## Start of Task 2

![sc5](images/sc5.png)

### Discussing the Ouput

- Currently, this code has no output. The anonymous function doesn't execute because there are no parentheses at the end of the function. Let's say the code looks like the screenshot below:

![sc6](images/sc6.png)

- Now that we have parentheses at the end of the anonymous function the output is **the second index is: 2**

### Feedback
Hello! Thank you for submitting your code for review! I tried to run the code you have provided, however, it seems like there is a minor bug, which is preventing the code from running. The anonymous function you have created won't run because it needs a pair of parentheses at the end of the function. Here is what it will look it once the issue is resolved:

```
(function(){
    var num = 1;
    if(arr[num] == 2){
        console.log("the second index is:", arr[num]);
    }
})();
```

After reviewing the code I wasn't quite sure of the exact purpose of it. If you could email me back, and explain the purpose of this snippet, and what it should do that would be fantastic! For now, I'm going to assume the purpose of this code is to check what is being stored inside of the 2nd index of array arr. It looks like you're using the variable num to store the index you would like to check. This is great because changing the value of num will allow you to look at other indices of array arr, without making any other code changes. One problem with the code is the if statement. It works for now, but if the values inside of array arr ever change then the if statement will never be true, which will cause the program to never print an output. Another issue with the if statement is the use of a double equal sign. It is better practice to use a triple-equal sign because it checks for type and value, whereas a double-equal sign only checks for value.

Even though the code above will work, I would like to share an alternative solution that is a little shorter. Since the objective of your code is to print the 2nd index of the array named arr we can remove all the code except for the console.log

```
console.log("the second index is:", arr[2]);
```

The code above is straight to the point, and fantastic for a quick test. However, if you find yourself checking the value of an array index fairly often I would recommend creating a reusable function:

```
function arrIndexValue(index){
    console.log(`The value of index ${index} is: ${arr[index]}`);
}
```

In the code above I have created a function called arrIndexValue that takes an array index number as a parameter. This will allow you to check the value of any index in the array arr. Also, this approach lets you have less repetitive code in the future if you find yourself checking the values of arr often.

I did remove a good chunk of code within the examples I have provided. Please let me know if it is vital to keep some of the code that was removed. If so I can go ahead, and adjust my examples accordingly.

Please feel free to reach out for any further comments or questions.

All the best,

Jaiveer Dhanju




