// var miApp = angular.module("miApp",[]);

// miApp.factory("fabrica",function()
// {
// 	var servicio = 
// 	{
// 		objeto: {
// 					mensaje:"Saludos desde la fábrica!";
// 				},
// 		msjInicial: function()
// 		{
// 			servicio.objeto["mensaje"] = "Saludos desde la fábrica!";
// 		},
// 		msjNuevo: function(msj)
// 		{
// 			servicio.objeto.mensaje = msj;
// 		}
// 	}

// 	return servicio;
// });

// function controladorUno($scope,fabrica)
// {
// 	$scope.nuevo = function()
// 	{
// 		fabrica.msjNuevo($scope.nuevoMensaje);
// 	};

// 	$scope.dato = fabrica.objeto;
// }

// function controladorDos($scope,fabrica)
// {
// 	$scope.nuevo = function()
// 	{
// 		fabrica.msjNuevo($scope.nuevoMensaje);
// 	};

// 	$scope.dato = fabrica.objeto;
// }

// function controladorTres($scope,fabrica)
// {
// 	$scope.resetear = function()
// 	{
// 		fabrica.msjInicial();
// 	};

// }


angular.module('miAp', []);

angular.module('miAp').factory('Fabrica', function() {
  var servicio = {
    objeto: {mensaje: 'Saludos desde la Fabrica!'},
    msjInicial: function() {
      servicio.objeto['mensaje'] = 'Saludos desde la Fabrica!';
    },
    msjNuevo: function(msj) {
      servicio.objeto.mensaje = msj;
    }
  };
  return servicio;
});

angular.module('miAp')
.controller('ControladorUno', function($scope, Fabrica) {
  $scope.nuevo = function() {
    Fabrica.msjNuevo($scope.nuevoMensaje);
  };

  $scope.dato = Fabrica.objeto;
});

angular.module('miAp')
.controller('ControladorDos', function ($scope, Fabrica) {
  $scope.nuevo = function() {
    Fabrica.msjNuevo($scope.nuevoMensaje);
  };

  $scope.dato = Fabrica.objeto;
});

angular.module('miAp')
.controller('ControladorTres', function($scope, Fabrica) {
  $scope.resetear = function() {
    Fabrica.msjInicial();
  };
});