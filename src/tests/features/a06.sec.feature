Feature: Prevenir el uso de componentes obsoletos o vulnerables

Scenario: Instalación de dependencias de la aplicación
    Given se definieron dependencias a la aplicación
    When se instalan las dependencias de la aplicación
    Then se verifican updates y vulnerabilidades de las dependencias utilizadas.

