Feature: Seguimiento de las fallas del sistema

Scenario: El usuario tiene una falla durante el uso de la aplicación
    Given se replicó una falla inesperada durante el uso de la aplicación
    When se crea un registro de la falla
    Then el registro debe tener un formato adecuado para su análisis

Scenario: Identificación de actividades sospechosas o maliciosas
    Given se crean nuevas cuentas de usuario
    When se realizan las peticiones al servidor
    And se envían datos adicionales del contexto de ejecución
    Then se valida un contexto de usuario permitido


