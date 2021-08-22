Feature: Login a la aplicación

Scenario: Ingreso a la aplicación por medio de administrador
    Given un administrador ingresa
    When el administrador envie los datos
    Then obtener token de ingreso
