Feature: Resguardar la información del usuario en los flujos

Scenario: El usaurio intenta recuperar la contraseña de una cuenta que no le pertenece
    Given se ingresa a la opción "Olvidé mi contraseña" para cualquier cuenta
    When la cuenta existe
    Then se pide un código de verificación enviado al correo ingresado.


