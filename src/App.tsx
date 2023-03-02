// import './App.css';
import 'antd/dist/reset.css'
import './components/styles/global.css'
import { createFirebaseData } from './state/firebase/actions/generalFirebaseActions'; 
import { MainLayout } from './components'
import { ReadAllFirebaseData } from './utils/ReadAllFirebaseData';

function App() {
  
  // This Function Call Only Once After Component Mount
  ReadAllFirebaseData()

  return (
    <div className="App">
      {/* Generate Dummy Data Button - To Using This button, you need to change display to inline-block or remove style */}
      <button type='button' onClick={createFirebaseData} style={{ display: 'none' }}>Create Data</button>
      {/* --------------------------------------------------------------------------------- */}

      <MainLayout />
    </div>
  );
}

export default App;
