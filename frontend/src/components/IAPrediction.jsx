export const IAPrediction = () => {
    // TODO: Extraer datos de IA
    
    const temperaturaPrediccion = 30
    const humedadPrediccion = 54

    const mostrarPrediccion = () => {
        let prediccion = document.getElementById("prediccion");
        let boton = document.getElementById("mostrarBtn");

        if (prediccion.style.display === "none") {
            prediccion.style.display = "block";
            boton.textContent = "Ocultar predicción";
        } else {
            prediccion.style.display = "none";
            boton.textContent = "Mostrar predicción";
        }
    }

  return (
    // Images Showcases
    <section className="testimonials text-center bg-light">
        <div className="container">
            <h1 className="mb-5">¿Quieres ver la predicción con IA?</h1>
            <button className="btn btn-primary btn-lg" id="mostrarBtn" onClick={mostrarPrediccion}>Mostrar predicción</button>
            <div className="row">
                <section id="prediccion">
                    {/* Predicciones por la IA */}
                    <section className="features-icons bg-light text-center">
                        <div className="container">
                            <div className="row">
                                <div className="container">
                                    <h1 className="mt-5">Predicciones de Invernadero por Modelo de IA</h1>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">Predicción de temperatura</h5>
                                                    <p className="card-text display-4"><i className="bi bi-thermometer-sun"></i> {temperaturaPrediccion} °C</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">Predicción de humedad</h5>
                                                    <p className="card-text display-4"><i className="bi bi-moisture"></i> {humedadPrediccion} %</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </section>
  )
}
