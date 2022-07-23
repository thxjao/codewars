# In this little assignment you are given a string of 
# space separated numbers, and have to return 
# the highest and lowest number.

def high_and_low(numbers):
    splited_numbers = numbers.split();
    
    higher_number = int(splited_numbers[0])
    lower_number = int(splited_numbers[0])
    
    for x in splited_numbers:
        if int(x) > higher_number:
            higher_number = int(x)
        if int(x) < lower_number:
            lower_number = int(x)
    
    return ' '.join([str(higher_number), str(lower_number)])