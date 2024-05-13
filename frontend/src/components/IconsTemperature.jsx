export const IconsTemperature = () => {
    const dataTemp = 25
    const dataHumedad = 50

  return (
    // Icons Grid
    <section className="features-icons bg-light text-center">
        <div className="container">
            <div className="row">
                <div className="container">
                    <h1 className="mt-5">Datos del Invernadero</h1>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Temperatura</h5>
                                    <p className="card-text display-4"><i className="bi bi-thermometer-sun"></i> {dataTemp} °C</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Humedad</h5>
                                    <p className="card-text display-4"><i className="bi bi-moisture"></i> {dataHumedad} %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
