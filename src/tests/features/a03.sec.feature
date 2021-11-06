Feature: No se manejan ejecutables (scripts) desde entradas del usuario.

Scenario: El usuario ingresa texto malintencionado para manipular la base de datos
    Given se ingrsa un script de SQL en un campo de texto
    When se envía la solicitud al servidor
    Then el input debe estar sanitizado para no permitir dichos caracteres

