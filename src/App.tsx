import './App.css'
import Navbar from './components/Navbar'
import ChallengeView from './views/ChallengeView'

function App() {
  return (
    <div className='bg-(--neutral6) min-h-screen flex justify-center font-[Sora, serif]'>
      <div className='w-(--w-main) bg-(--neutral4) px-20 pt-4'>
        <Navbar />
        <ChallengeView />
      </div>
    </div>
  )
}

export default App
