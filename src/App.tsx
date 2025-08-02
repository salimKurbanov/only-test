import TimeLine from "./components/timeline/TimeLine"
import useTimeLine from "./hooks/useTimeLine"

function App() {
  const hook = useTimeLine()

  return (
    <main>
      <div className="container">
        <TimeLine {...hook}/>
      </div>
    </main>
  )
} 

export default App