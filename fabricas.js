var miAp = angular.module('miAp',[]);

miAp.factory('Dato',function()
{
	return {mensaje:"Saludos desde la fabrica"};
});

function ControladorUno($scope,Dato)
{
	$scope.dato = Dato
}

function ControladorDos($scope,Dato)
{
	$scope.dato = Dato
}