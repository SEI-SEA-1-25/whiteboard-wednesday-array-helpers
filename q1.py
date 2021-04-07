# give numbers in array
# in array +- integers
# amount of positive integers
# sum of all - integers
arr1 = [-10, 33, -9, 1]
#2 +'s, & - = -19


def this_is_a_fxn(array):
    #init setup
    sum_arr = 0
    count_arr = 0
    #loop through 
    for i in array:
        #if positive then...
        if i > 0:
            count_arr += 1
        #if neg then...
        if i < 0:
            sum_arr += i
    return [count_arr, sum_arr]

print(this_is_a_fxn(arr1))
            
    