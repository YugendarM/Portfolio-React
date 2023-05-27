import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar';
import Header from './components/Header.js';
import About from './components/About';
import ProjectsCollection from './components/ProjectsCollection';
import ServiceCollection from './components/ServiceCollection';
import HireMe from './components/HireMe';
import Footer from './components/Footer';



function App() {
  return (
   <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    
    <Navbar/>
    <Header/>
    <About/>
    <ProjectsCollection/>
    <ServiceCollection/>
    <HireMe/>
    <Footer/>
   </>
  );
}

export default App;
