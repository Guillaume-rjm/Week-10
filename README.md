# Week-10 - Assignment 10

I had to scale down the matrix to only show a few indicators from the OECD page, instead of adding some scoring based on the results of each value.
The matrix may still contain a column with variations of unemployment from one year to another, based on the inputs obtained for the different years with the API.

To Do List:
-Getting the data from the API is successfully done, but the data obtained doesn't really display in their own row yet. The reason is, the array created from the values obtained via the API seem to be a single object containing 43 different single arrays (instead of a single array containing 43 values). I will have to find a way how to merge all of those into one single array, so I can distribute the values in the table properly.
So far, when using a for loop function to distribute the array into the html table, each array of value has only one item (0), so the loop takes a single letter is distributed into a single cell...instead of a country name or value, distributed into a single cell.
-Getting the rest of the API data (rates for 2016 at least, not sure 2018 has been released yet) - this should be quite easy to do, as the logic should be exactly similar to what I've done for the year 2017.
-Adding calculations to the variations row. This could be tricky, as I'm not sure how to input calculations in html, when there is no table already created (all the rows are getting added, as the API return the values from the OECD site).
-Sorting data: I still don't have my array working, so I can't quite sort the data yet.
-Formatting the table better, and html page.
