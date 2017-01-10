function MiListaDeTareas($scope)
{

	$scope.tareas = [
						{ 	
							actividad:"Tarea 1",
							hecha:true
						},
						{
							actividad:"Tarea 2",
							hecha:false
						}
					];

	 $scope.addworks = function()
	 {

	 	if($scope.textoNuevaActividad != undefined && $scope.textoNuevaActividad !="")
	 	{
	 		$scope.tareas.push(
	 						{
	 							actividad:$scope.textoNuevaActividad,
	 							hecha:false
	 						}
	 					   );

	 		$scope.textoNuevaActividad = "";

	 	}
	 	
	 }

	 $scope.tareasRestantes = function()
	 {
	 	var contador = 0;

	 	angular.forEach($scope.tareas,function(tarea)
	 	{
	 		if(tarea.hecha)
	 		{
	 			contador++;
	 		}
	 	});
	 		
	 	return contador;

	 }


	  $scope.eliminarTareas = function()
	 {
	 	
	 	var tareasViejas = $scope.tareas;
	 	$scope.tareas = [];
	 	angular.forEach(tareasViejas,function(tarea)
	 	{

	 		if(!tarea.hecha)
	 		{
	 			$scope.tareas.push(tarea);
	 		}
	 	});

	 }

}






