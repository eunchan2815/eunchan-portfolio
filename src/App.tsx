import Introduce from "./components/Introduce"
import Iphone from "./components/Iphone"
import Project from "./components/project"

function App() {
  return (
      <div className="flex justify-between p-30">
        <div>
          <Introduce/>
          <Project/>
        </div>
        <Iphone/>
      </div>
  )
}

export default App
