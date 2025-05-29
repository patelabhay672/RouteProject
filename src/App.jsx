import { Toaster } from 'react-hot-toast';
import Mainroutes from './routes/Mainroutes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className=' py-10 px-[10%] text-white font-thin w-full min-h-screen bg-gray-800'>
       <Toaster position="top-right" reverseOrder={false} />
      <Navbar/>
     <Mainroutes/>

    </div>
  );
}

export default App;
