Feature: Seguridad al ingresar en el login de la aplicación

Scenario: Seguridad de la contraseña
    Given se está creando un nuevo usuario
    When se ingresó una contraseña
    Then se verifica que la contraseña cumpla con requisitos de enforzamiento.

Scenario: Cantidad de intentos fallidos
    Given se está logueando con un usuario existente
    When se ingresa una contraseña incorrecta
    And se presiona el botón "Entrar"
    And se falla el intento por credenciales fallidas
    And se vuelve a intentar por 2 ocasiones más
    And los tres intentos fueron fallidos
    Then se debe de restringir el ingreso por 30 segundos


