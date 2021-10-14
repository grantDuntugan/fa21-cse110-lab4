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

13. - A. This outputs '32'. This is because a string came first, so + is seen as concatenation. 2 is converted into a string and we get '32'.
    - B. This outputs 1. This is because there is no string operator for -, so '3' is converted into an integer and 3-2 = 1.
    - C. This outputs 3. Null is converted into an integer for addition, and null turns into 0.
    - D. This outputs '3null'. Addition signals concatenation for strings, and because '3' is a string, null is converted into 'null' and it is concatenated.
    - E. This outputs 4. True is converted into 1 for addition and 1 + 3 = 4.
    - F. This outputs 0. False and null both convert into 0 and 0 + 0 = 0.
    - G. This outputs '3undefined'. Because '3' is a string, this signals concatenation, so undefined is converted into 'undefined' and the concatenation gives '3undefined'.
    - H. This outputs NaN. This is because there is no string operation with -, so undefined has to convert into an integer. But undefined converts to NaN whenever it tries to convert into an integer, so the total output is NaN.

14. - A. This outputs true. 1 is converted into '1' and '2' is greater than '1' in Unicode.
    - B. This outputs false. '2' is greater than '1' in Unicode so computation stops there.
    - C. This outputs true. '2' is converted to 2 and 2 == 2 is true.
    - D. This outputs false. Strict equality sees a string and integer and these aren't the same, so this is false.
    - E. This outputs false. True is converted to 1 and 1 == 2 is false.
    - F. This outputs true. Boolean(2) is true because 2 is not 0, and strict equality sees two booleans that are both true, so this is true.

15. _==_ is a regular equality check. When there are operands of different types, _==_ will convert them into numbers. _===_ on the other hand is a strict equality operator. It will check the types of the operands and if the types are different, it will return false.

16. Found in the part2-question16.js file.

17. The result is [2,4,6]. The function is called with arguments [1,2,3] and doSomething. A new array is created. On each element of the argument, callback is called with the element of the argument. Callback is the function doSomething, callback returns each element times 2. That number is pushed into the new array. The array is returned once the for loop is done.

18. Found in the part2-question18.js file.

19. This will print 1 4 3 2. 1 prints first because it is first. The 2 is then set on a delay for one second. The three has a delay of 0 seconds, but is waiting for the event cycle. 4 then prints, and then 3. Finally, 2 prints after the delay.
