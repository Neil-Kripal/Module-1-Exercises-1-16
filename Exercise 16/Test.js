// Sum Function
function sum(a,b)
{
    return a+b;
}

function multiply(a,b)
{
    a = 5;
    b = 10;
    var c = sum(a,b);

    return c * a * b;
}

function VerifyLoginFromThirdParty()
{
    // Get Validation Result from Google or Facebook
    var resultFromThirdParty =true;
    return resultFromThirdParty;

}

// Test Function
function TestSum()
{
    if(multiply(2,3)==750)
    {
        if(VerifyLoginFromThirdParty() == true)
        console.log("Test Passed")
    }
    else
    {
        console.log("Test Failed")
    }
}

// Call Function
TestSum();

