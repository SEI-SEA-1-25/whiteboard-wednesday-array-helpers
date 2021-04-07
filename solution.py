#sum of negatives 

#write a function that takes in a list of numbers that gives you back a tuple or list with two items
#the sum of all the negative numbers in the list
# the count of all the positive numbers

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
def count_positives_sum_negatives(arr):
    number = 0
    neg_numbers = 0
    for num in arr:
        if num > 0: 
            number += 1
        else: 
            neg_numbers += num
    return [number, neg_numbers]

print(count_positives_sum_negatives(arr))
