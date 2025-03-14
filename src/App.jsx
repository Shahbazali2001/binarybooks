
import AllRoutes from './routes/AllRoutes'
import { Header, Footer } from './components'

function App() {
  

  return (
    // Header and Footer 
    <div className='dark:bg-dark dark:text-light'>
     <Header />
     <AllRoutes />
     <Footer />
    </div>
  )
}

export default App 
