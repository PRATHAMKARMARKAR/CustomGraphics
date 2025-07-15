import React from 'react'
import Body from './components/Body'
import Headers from './components/pages/Header'
import ElementsPage from './components/pages/ElementsPage'
import Header1 from './components/Header1'
import OurServices from './components/pages/OurServices'
const App = () => {
    const heightNavbar = 20;
  const marginT = 30;
  return (
    <>
    <Body/>
    {/* <Headers/> */}
    {/* <Header1/> */}
    {/* <ElementsPage/> */}
    {/* <OurServices/> */}
     <Footer height={heightNavbar} margin={marginT} />
    </>
  )
}

export default App