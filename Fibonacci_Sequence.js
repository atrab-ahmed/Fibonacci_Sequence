function Fibonacci_Sequence( User_choice){
    var Fibonacci_Sequence=[]
    if (User_choice > 0)
    {
         if (User_choice == 1) {
             Fibonacci_Sequence.push(0)
         }
            
        else if ( User_choice == 2 ){
            Fibonacci_Sequence.push(0)
            Fibonacci_Sequence.push(1)
        }
           
        else{
            Fibonacci_Sequence.push(0,1)
            while (User_choice > Fibonacci_Sequence.length){
                new_num=Fibonacci_Sequence[(Fibonacci_Sequence.length)-1]+Fibonacci_Sequence[(Fibonacci_Sequence.length)-2]
                Fibonacci_Sequence.push(new_num) 
            }
        }
             return Fibonacci_Sequence  
    }
         
    else
       {
        return "The number most be more than zero"
    }
        
    
}

var User_choice=prompt("enter the number: ")
alert(Fibonacci_Sequence(User_choice))

