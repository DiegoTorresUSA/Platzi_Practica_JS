//recorremos el arreglo el salario
const salariosCol = colombia.map({
     function(personita){
         personita.salary;
     }
 });

//ordenamos el nuevo arreglo
const salariosColSorted = salariosCol.sort({
    function (antiguo, nuevo){
        return antiguo - nuevo;
    }
});
