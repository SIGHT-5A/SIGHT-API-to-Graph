import './App.css'
import BarChart from './components/Charts/BarChart'
import DoughNutChart from './components/Charts/DoughNutChart'
import LineChart from './components/Charts/LineChart'
import PieChart from './components/Charts/PieChart'

function App() {

  return (
    <>
      <div style={{ width: '100vw', display: 'flex', justifyContent: 'space-evenly' }}>
        <BarChart />
        <DoughNutChart />
      </div>
      <div style={{ width: '100vw', display: 'flex', justifyContent: 'space-evenly' }}>
        <LineChart />
        <PieChart />
      </div>
    </>
  )
}

export default App
