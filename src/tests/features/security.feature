Feature: Llamadas al servidor por herramientas externas

Peticion de usuario
    Given el usuario realiza llamadas al servidor desde una herramienta externa
    When la llamada se realiza usando cualquier tipo de token de acceso
    Then el servidor debe rechazar la solicitud