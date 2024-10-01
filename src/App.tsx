import { ThemeProvider } from "@/components/theme-provider"
import './index.css'
import 'react-vertical-timeline-component/style.min.css';
import Home from "./pages/Home.tsx"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  )
}

export default App
