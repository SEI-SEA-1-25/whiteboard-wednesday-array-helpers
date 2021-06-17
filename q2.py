

# create a fxn called unique_in_order
# pass in arr of either letters or numbers
# loops through and tells you what digits it contains
# HINT: don't worry about array type



# list_1 = ["AAAABBBCCDAABBB"]
# list_2 = ["ABBCcAD"]
# list_3 = [1,2,2,3,3]

# def unique_in_order(value):
#     #init set-up
#     result = []
#     temp = list(value)
#     #loop thru list
#     for i in temp:
#         #compare i to i+1
#         #if they're diff then push into results
#         if temp[i] != temp[i+1]:
#             result.append(i)
#             #move index to the right
#             i+1 = i
#         return result

def unique_in_order(value):
    temp = list(value)   #  == ['A','A','A','A', 'B', 'B', 'B', 'C', 'D', 'A', 'B', 'B', 'B']
    result = []                          # 'A',           'B'  'C'  'D'  'A'  
    result.append(temp[0])
    for i in range(1, len(temp)):
        if temp[i] != temp[i-1]:   # i =1  ->>>> B == A
            result.append(temp[i])
    print(result)
    return result

            
            
unique_in_order('AAAABBBCCDAABBB') # == ['A', 'B', 'C', 'D', 'A', 'B']
unique_in_order('ABBCcAD')         # == ['A', 'B', 'C', 'c', 'A', 'D']
unique_in_order([1,2,2,3,3])       # == [1,2,3]