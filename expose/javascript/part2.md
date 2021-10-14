# Part 2

1. This prints 2. This is because _i_ is declared with var and the prices length is 3, so the repeated i++ statement will get _i_ to 3.

2. This prints 150. This is because the last price in the loop gives 300 _ (1 - 0.5) = 300 _ .5 = 150.

3. This prints 150. This is because discountedPrice is 150, so we get 150 \* 100 / 100 which is just 150.

4. This will return the array [50, 100, 150]. This is because 50, 100, and 150 are pushed into the discounted array in that order after the discountedPrice and finalPrice calculations, and then the discounted array is returned.

5. This will cause an error because _i_ is not defined. This is because _i_ was defined with _let_ in the for loop, and the console.log() is outside of the for loop.

6. This will cause an error because _discountedPrice_ is not defined. This is because _discountedPrice_ was defined with _let_ in the for loop, and the console.log() is outside of the for loop.

7. This will print 150. This is because finalPrice was defined outside of the for loop and inside the same scope as the console.log() statement. It gains the value of 150 during the for loop.

8. This will return the same array as in part 4, which is [50, 100, 150]. This is because _discounted_ is created in the same scope as the return statement.

9. This will cause an error because _i_ is not defined. This is because _i_ was defined with _let_ in the for loop, and the console.log() is outside of the for loop.

10. This prints 3. This is because the prices array has a length of 3. This variable isn't changed during the program.

11. This returns the array [50, 100, 150]. Nothing was really changed that affected the return value. The removed finalPrice was only multiplying then dividing 100, which didn't do anything. There are also no errors.

12. - A. student.name
    - B. student['Grad Year']
    - C. student.greeting();
    - D. student['Favorite Teacher'].name
    - E. student.courseLoad[0]
