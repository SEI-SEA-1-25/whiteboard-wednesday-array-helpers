
# Create a function that squares every number passed into it and then sums those squares together.
# For example, for [1, 2, 2] it should return 9, because 1^2 + 2^2 + 2^2 = 9.


def squarer(arr):
    summed = 0
    squared_arr = []
    for i in arr:
        squared_arr.append(i**2)
        
    print(squared_arr)
    for j in squared_arr:
        summed += j        

    print(summed)
    return summed 
     

squarer([2,5,6])