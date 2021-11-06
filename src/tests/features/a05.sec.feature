Feature: Mantener datos sensibles fuera de la configuración

Scenario: El usuario intenta obtener información detallada de la aplicación
    Given un usuario que puede ver "logs" de la aplicación por medio de herramientas
    When se replica un error
    And la aplicación o el servidor manejan el error
    Then no se debe mostrar información detallada de los componentes internos

Scenario: El usuario indaga en los archivos de la aplicación
    Given el usuario obtiene acceso a archivos de la aplicación por medio de data mining
    When se ve un archivo de configuración
    Then no se deben exponer datos como llaves, contraseñas o tokens.

