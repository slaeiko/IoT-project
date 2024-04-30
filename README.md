# IoT-project

Aplicación de monitoreo de tempertura y humedadad para ambientes de producción controlados.

El hardware a utilizar será tentativamente un ESP32 o un Arduino Mega 2560 con módulo WiFi y un sensor DHT11 de temperatura y humedad. También se contempla el uso de un display LCD 16x2 para mostrar los datos directamente en el embebido.

Además de mostrar los datos en el display, estará conectado a una aplicación web para el monitoreo remoto que mostrará los niveles de humedad y temperatura y alertará en caso de salir fuera de los valores permitidos con la posibilidad de activar actuadores para intentar controlar los factores ambientales que producen las mediciones fuera de rango. 

Se tomarán valores así como patrones pasados en el comportamiento de las lecturas para intentar predecir futuros valores fuera de rango y tener tiempo de mitigar los riesgos.

El objetivo de este proyecto tiene un enfoque más "industrial" a baja escala en donde es necesario mantener muy controlado los factores ambientales, ya sea para la producción o manejo de materiales.
