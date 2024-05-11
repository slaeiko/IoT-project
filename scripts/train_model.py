import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import json

# Datos de ejemplo
data = {
    'Fecha': ['2024-01-01 08:00', '2024-01-01 09:00', '2024-01-01 10:00', '2024-01-01 11:00', '2024-01-01 12:00', '2024-01-01 13:00', '2024-01-01 14:00', '2024-01-01 15:00', '2024-01-01 16:00', '2024-01-01 17:00'],
    'Temperatura': [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    'Humedad': [60, 62, 64, 65, 67, 68, 70, 72, 73, 75]
}

df = pd.DataFrame(data)

# Dividir los datos en conjuntos de entrenamiento y prueba
X = df[['Temperatura']]  # Característica para predecir la humedad
y_temp = df['Temperatura']
y_hum = df['Humedad']
X_train, X_test, y_train_temp, y_test_temp, y_train_hum, y_test_hum = train_test_split(X, y_temp, y_hum, test_size=0.2, random_state=42)

# Entrenar el modelo para temperatura
model_temp = LinearRegression()
model_temp.fit(X_train, y_train_temp)

# Entrenar el modelo para humedad
model_hum = LinearRegression()
model_hum.fit(X_train, y_train_hum)

# Evaluar los modelos
y_pred_temp = model_temp.predict(X_test)
mse_temp = mean_squared_error(y_test_temp, y_pred_temp)
#print('Error cuadrático medio para temperatura:', mse_temp)

y_pred_hum = model_hum.predict(X_test)
mse_hum = mean_squared_error(y_test_hum, y_pred_hum)
#print('Error cuadrático medio para humedad:', mse_hum)

# Utilizar los modelos entrenados
new_data_temp = pd.DataFrame({'Temperatura': [30]})
predicted_temp = model_temp.predict(new_data_temp)
#print('Predicción de temperatura:', predicted_temp)

new_data_hum = pd.DataFrame({'Temperatura': [30]})
predicted_hum = model_hum.predict(new_data_hum)
#print('Predicción de humedad:', predicted_hum)

temperaturaPrediccion = int(predicted_temp[0])
humedadPrediccion = int(predicted_hum[0])

results = {
    'temperaturaPrediccion': temperaturaPrediccion,
    'humedadPrediccion': humedadPrediccion
}
print(json.dumps(results))