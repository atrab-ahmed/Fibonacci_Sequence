def Fibonacci_Sequence(User_choice):
    Fibonacci_Sequence=[]
    if User_choice > 0:
        if User_choice == 1 :
            Fibonacci_Sequence.append(0)
        elif User_choice == 2 :
            Fibonacci_Sequence.extend([0,1])
        else:
            Fibonacci_Sequence.extend([0,1])
            while  User_choice > len(Fibonacci_Sequence):
                  Fibonacci_Sequence.append(Fibonacci_Sequence[-1]+Fibonacci_Sequence[-2])
        return Fibonacci_Sequence    
    else:
        return "The number most be more than zero"

User_choice=int(input("Enter the number: "))
print(Fibonacci_Sequence(User_choice))
