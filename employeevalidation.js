function formValidation()
{
    var uname = document.registration.usename;
    var umalesex = document.registration.malesex;
    var ufemalesex = document.registration.femalesex;
    if(allLetter(uname))
    {
        if(validsex(umalesex,ufemalesex)){

        }
    }
    return false;
}function allLetter(uname)
{
    var letters = /^[A-Za-Z]+$/;
    if(uname.value.match(letters)){
        return true;
    }
    else{
        alert('Username must have  alphabet characters only');
        uname.focus();
        return false;
    }function validsex(umalesex,ufemalesex){
        x=0;
        if(umalesex.checked){
            x++;
        }if(ufemalesex.checked){
            x++;
        }
        if(x==0)
        {
            alert('select Male/Female');
            umalesex.focus();
            return false;
        }
        else{
            alert('form successfully submited');
            window.location.reload()
            return true;
        }
    }
}