import TimeLine from "./components/timeline/TimeLine"
import useTimeLine from "./hooks/useTimeLine"

function App() {
  const hook = useTimeLine()

  return (
    <main className="container">
        <TimeLine {...hook}/>
    </main>
  )
} 

export default App