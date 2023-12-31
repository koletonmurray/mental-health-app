import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Calendar from './pages/Calendar';
import ChatBot from './pages/ChatBot';
import Games from './pages/Games';
import Resources from './pages/Resources';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="App">
      <Layout>
      <ScrollToTopButton/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/activity' element={<Activities />}/>
          <Route path='/track' element={<Calendar /> }/>
          <Route path='/get-help' element={<ChatBot />}/>
          <Route path="/game" element={<Games />} />
          <Route path='/resources' element={<Resources />}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
