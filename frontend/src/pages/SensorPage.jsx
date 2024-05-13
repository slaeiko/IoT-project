import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { IAPrediction } from '../components/IAPrediction'
import { IconsTemperature } from '../components/IconsTemperature'
import { Masterhead } from '../components/Masterhead'

export const SensorPage = () => {
  return (
    <>
        <Navbar/>
        <Masterhead/>
        <IconsTemperature/>
        <IAPrediction/>
        <Footer/>
    </>
  )
}
