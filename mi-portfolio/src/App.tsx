import { Routes, Route } from 'react-router-dom'
import Layout from '@components/layout/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout children={null} />}>
        {/* Rutas se agregarán aquí */}
      </Route>
    </Routes>
  )
}

export default App

/* La ruta en App.tsx usa importación relativa mientras que tienes configurado paths
El Layout.tsx exporta default pero lo importas con destructuring */
