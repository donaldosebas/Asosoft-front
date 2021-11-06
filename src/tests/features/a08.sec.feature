Feature: Integridad del software de la aplicación

Scenario: El usuario una versión anterior de la aplicación
    Given el usuario tiene la aplicación instalada
    When se lanza una nueva versión de la aplicación
    And el usuario abre la aplicación
    Then se debe mostrar una recomendación para actualizar la aplicación


