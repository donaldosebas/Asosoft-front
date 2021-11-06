Feature: No se debe obtener información sensible del usuario

Scenario: El deportista ingresa sus credenciales
    Given el ingreso de su usuario y contraseña
    When se verifican los datos
    Then no se debe mostrar ningún "log" o mensaje con los datos ingresados.

Scenario: Interceptación de datos por un tercero
    Given el ingreso de usuario y contraseña
    When se presiona el botón "login" y se hace la petición al servidor
    And un tercero intercepta dicha petición
    Then el tercero no debe poder descifrar esta información

