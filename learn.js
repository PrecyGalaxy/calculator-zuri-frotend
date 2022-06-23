let operation = prompt("Enter operation:Opearands and operator","");
let eval_operation = eval(operation);

try{

    if (isNaN(eval_operation)) throw("Not a number");
    eval_operation = Number(eval_operation);
    alert(eval_operation);

}catch(errmessage){

    alert(errmessage);

}