/*
the exception handling is used to handle the abnormal code execution.
this can be achieved by using try , catch, finally.
there is only throw keyword in js.
*/

class Ageexception extends Exception
{
       Ageexception(abc)
      {
        super(abc);
      }
}

let age=45;

try{
 if(age<60)
 throw new Ageexception("the age is not valid !");
}
catch(Exception){
    console.log(e);

}
finally
{
 console.log("the code is executed here !");
}


function demo(v)
{
    if(v<21)

    {
        throw new Ageexception ("the age is not valid");
    }
}



