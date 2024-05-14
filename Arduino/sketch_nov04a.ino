//Leonardo Sebastian Loza Sandoval - 18300246 - 7A
//Practica 11 - Producto Integrador

#include <DHT.h>  //Libreria para el sensor de humedad y temperatura
#include <LiquidCrystal.h>

#define DHTPIN 6 
#define VENTILADOR 13
#define BOMBA 12
#define FOCO 11
#define DHTTYPE DHT11 //Definimos el tipo de sensor

//creamos un objeto tipo DHT para poder utilizar sus funciones
DHT dht(DHTPIN, DHTTYPE);

//Definimos los pines que se usarán del arduino (RS, E, D0, D1, D2, D3, D4, D5, D6, D7)
LiquidCrystal lcd(5, 4, 53, 52, 51, 50, 49, 48, 47, 46);

void setup() {
  for (int i = 11; i <= 13; i++) {
    pinMode(i, OUTPUT);
    digitalWrite(i, HIGH);
  }

  //Inicializamos el display y el sensor DHT11
  lcd.begin(16, 2);
  dht.begin();
}

void actuarTemperatura (int temperatura)
{
  lcd.setCursor(10,0);
  if(temperatura == 27)
  {
    digitalWrite(FOCO, HIGH);
    digitalWrite(VENTILADOR, HIGH);
    lcd.print("Ambien");
  }
  else if (temperatura > 27)
  {
    digitalWrite(VENTILADOR, LOW);
    lcd.print("Alta  ");
  }  
  else if (temperatura < 27){
    digitalWrite(FOCO, LOW);
    lcd.print("Baja  ");
  }  
}

void actuarHumedad (int humedad)
{
  lcd.setCursor(7, 1);
  if (humedad > 600)
  {
    digitalWrite(BOMBA, LOW);
    lcd.print("Riego:ON ");
  }
  else if (humedad < 600)
  {
    digitalWrite(BOMBA, LOW);
    lcd.print("Riego:OFF");
  }
}

void loop() {
  int humedadTierra = analogRead(A0);  //Lee humedad
  int temperatura = dht.readTemperature();  //Lee temperatura
  int humedad = dht.readHumidity();

  lcd.home();
  lcd.print("Temp: ");
  lcd.print(temperatura);
  lcd.print("C");

  actuarTemperatura(temperatura);

  lcd.setCursor(0, 1);
  lcd.print("H: ");
  lcd.print(humedad);  
  lcd.print("%");
  actuarHumedad(humedadTierra);

  delay(500);

}
