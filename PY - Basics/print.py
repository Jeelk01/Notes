# print
# function in Python that print data on the console
# It accepts one or more object saperated by comma
# all the objects are converted to string and then printed.

# to print a string ( string in an object) 
print("Hello World !")

print("My name is Jeel.")

# here we can see that after executing multiple print statement it print at a new line for each statement
# we can manipulate it also
# there is argument called end= that can modify it
# by default end="\n" ( new line charecter that's why it prints the new statement on new line)

print("Hey how are you...?" , end=" ")
# now we have set end to the space " ";
print("I'm fine, what about you...?") 
# we can see in the out put that both the print statement saperated by space rather then new line charecter wwe can add different charecter also.

# --------------------------------------------------
print("Hey how are you...?" , end="123")
print("I'm fine, what about you...?") 
# --------------------------------------------------
print("Hey how are you...?" , end="|||||")
print("I'm fine, what about you...?") 
# --------------------------------------------------
print("Hey how are you...?" , end="*****")
print("I'm fine, what about you...?") 
# --------------------------------------------------
print("Hey how are you...?" , end="______")
print("I'm fine, what about you...?") 
# --------------------------------------------------
print("Hey how are you...?" , end="AAAAA")
print("I'm fine, what about you...?")
# --------------------------------------------------
print("Hey how are you...?" , end="\t")
print("I'm fine, what about you...?")  


# in print function we can print multiple objects using one print statement also
print("Age : ",15)

print("Hello","My","Name","is","jeel")
# by default these objects are saperated by space we can manipulate it also.

# there is arguement calld sep=
print("Hello","My","Name","is","jeel",sep="|")
# All string objects are saperated by | instead of space


