import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import { light } from './styles/Theme'
import { Navigation, Footer, ScrollToTop } from './components'
import { Home, About, RoadMap, Showcase, Team, FAQ } from './containers'
function App() {

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <RoadMap />
        <Showcase />
        <Team />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  )
}

export default App
