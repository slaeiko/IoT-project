import { useEffect, useState } from "react"

export const IconsTemperature = () => {
    let segs = 0;
    let initialTemp = 25;
    let initialHumedad = 42;
    const [dataTemp, setDataTemp] = useState(initialTemp);
    const [dataHumedad, setDataHumedad] = useState(initialHumedad);

    const incrementSegs = () => {
        segs += 1;
        switch (segs) {
            case 5:
                initialHumedad--;
                setDataHumedad(initialHumedad)
                break;
            case 16:
                initialTemp++;
                setDataTemp(initialTemp);
                break;
            case 23:
                initialTemp++;
                setDataTemp(initialTemp);
                initialHumedad--;
                setDataHumedad(initialHumedad);
                break;
            case 51:
                initialTemp++;
                setDataTemp(initialTemp);
                initialHumedad++;
                setDataHumedad(initialHumedad);
                break;
            case 56:
                setDataTemp(initialTemp);
                initialHumedad = initialHumedad - 2;
                setDataHumedad(initialHumedad);
                break;
            case 59:
                initialTemp++;
                setDataTemp(initialTemp);
                initialHumedad++;
                setDataHumedad(initialHumedad);
                break;
            case 61:
                setDataTemp(initialTemp);
                initialHumedad = initialHumedad - 2;
                setDataHumedad(initialHumedad);
                break;
            case 64:
                initialTemp++;
                setDataTemp(initialTemp);
                initialHumedad--;
                setDataHumedad(initialHumedad);
                break;
            case 67:
                setDataTemp(initialTemp);
                initialHumedad--;
                setDataHumedad(initialHumedad);
                break;
            case 72:
                setDataTemp(initialTemp);
                initialHumedad--;
                setDataHumedad(initialHumedad);
                break;
            case 74:
                initialTemp++;
                setDataTemp(initialTemp);
                setDataHumedad(initialHumedad);
                break;
            default:
                break;
        }
    }

    const updateDatas = () => {
        // 1 Segundo
        const intervalID = setInterval(incrementSegs, 1000);
        
        const tiempoTotal = 75000; // 75000 milisegundos = 75 segundos
        setTimeout(() => {
        clearInterval(intervalID); // Detener el intervalo
            console.log("Se detuvo el tiempo");
        }, tiempoTotal);
    }

    useEffect(() => {
        updateDatas()
    }, [])
    

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
