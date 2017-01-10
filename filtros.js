function tableCustomers($scope)
{
	$scope.customers = 	[
							{ 
								nombre:"Luis",
								paterno:"Molina",
								materno:"Escobar",
								fecha_trabajo:new Date(),
								telefono:"78787834834",
								salario:50000,
								bono:1.23843
							},
							{ 
								nombre:"Jorge",
								paterno:"Molina",
								materno:"Escobar",
								fecha_trabajo:new Date(),
								telefono:"78787834834",
								salario:50000,
								bono:1.23843
							},
							{ 
								nombre:"Ana",
								paterno:"Molina",
								materno:"Escobar",
								fecha_trabajo:new Date(),
								telefono:"78787834834",
								salario:50000,
								bono:1.23843
							},
							{ 
								nombre:"Roberto",
								paterno:"Molina",
								materno:"Escobar",
								fecha_trabajo:new Date(),
								telefono:"78787834834",
								salario:50000,
								bono:1.23843
							},
							{ 
								nombre:"Steve",
								paterno:"Molina",
								materno:"Escobar",
								fecha_trabajo:new Date(),
								telefono:"78787834834",
								salario:50000,
								bono:1.23843
							}

						]


	count = 0;

	$scope.ordenar = function(orden)
	{
		
		if(count % 2 == 0)
		{
			
			$scope.ordenSeleccionado = orden;
			
		}
		else
		{
			
			$scope.ordenSeleccionado = "-"+orden;
		}

		count++;

	}

	

}

  
