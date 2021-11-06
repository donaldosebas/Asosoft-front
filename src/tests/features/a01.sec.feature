Feature: El usuario solo puede acceder a la información permitida según su rol

Scenario: Alteración del estado de la aplicación
    Given el usuario manipula la aplicación para acceder a pantallas específicas
    When se carga una pantalla que no debería según su rol
    Then la aplicación no carga el contenido.

Scenario: Llamadas al servidor por herramientas externas
    Given el usuario realiza llamadas al servidor desde una herramienta externas
    When la llamada se realiza usando cualquier tipo de token de acceso
    Then el servidor debe rechazar la solicitud

