{ 
    const a = 100;
    //a = 20; //нельзя изменить константу (без const a =)
    console.log(a); 
}


{
    //console.log(a) //a еще нет (из-за let)
    let a = 15;
    console.log(a); 
}

{
    console.log(a); //из-за var a уже создалось (undefined)
    var a;
    a = 10;
    console.log(a);
}