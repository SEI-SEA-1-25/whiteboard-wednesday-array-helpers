#implement a function unique_order that will take an argument either a string or an array
#returns a list of elements without any elements with the same values next to each other
#but preserving the original order



def unique_order(iterable)
    element_list = []

    for letter in iterable:
        element_list[0] 