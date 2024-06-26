// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav  from './components/NavTabs';
import Footer from './components/Footer' ; // Importing the Footer component

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer>
       <Footer/>
      </footer>
     
    </>
  );
}

export default App;
