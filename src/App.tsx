import Introduce from "./components/Introduce"
import Iphone from "./components/Iphone"

function App() {
  return (
    <div className="flex-row">
      <Introduce/>
      <div className="flex justify-end p-14">
        <Iphone/>
      </div>


    </div>
  )
}

export default App
