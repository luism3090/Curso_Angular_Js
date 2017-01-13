angular.module('miAp', []);

angular.module('miAp').factory('Fabrica', function() 
{
  var servicio = 
  {
    objeto: {
              mensaje: 'Saludos desde la Fabrica!'
            },
            msjInicial: function() 
            {
              servicio.objeto['mensaje'] = 'Saludos desde la Fabrica!';
            },
            msjNuevo: function(msj) 
            {
              servicio.objeto.mensaje = msj;
            }
  };
  return servicio;
});

angular.module('miAp').controller('ControladorUno', function($scope, Fabrica) 
{
  $scope.nuevo = function() 
  {
    Fabrica.msjNuevo($scope.nuevoMensaje);
  };

  $scope.dato = Fabrica.objeto;

});

angular.module('miAp').controller('ControladorDos', function ($scope, Fabrica) 
{
  $scope.nuevo = function() 
  {
    Fabrica.msjNuevo($scope.nuevoMensaje);
  };

  $scope.dato = Fabrica.objeto;
});

angular.module('miAp').controller('ControladorTres', function($scope, Fabrica) 
{
  $scope.resetear = function()
  {
    Fabrica.msjInicial();
  };
});