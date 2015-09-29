Q4
Given two integers x and y, we can calculate all combinations of x and y when given an upper and lower bound for their values. For example, using 2 and 4 as the lower and upper bounds for x and y gives us the following pairs of x and y: {2,2} {2,3} {2,4} {3,2} {3,3} {3,4} {4,2} {4,3} {4,4} .
𝑦 For each of these pairs, we can calculate 𝑥 .
22 =4,23 =8,24 =16,32 =9,33 =27, 34 =81,42 =16,43 =64,44 =1024 Removing duplicate values, we get:
4, 8, 9, 16, 27, 64, 81, 1024
This is 8 distinct terms.
Write a program that, when given two integer bounds as input, outputs the number of distinct values of 𝑥𝑦.
You may expect each pair of bounds on a single line, separated by a space. The input may contain multiple lines.

Example input:
24

Example output
8