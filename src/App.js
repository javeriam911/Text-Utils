import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';

function App() {
  return <>
  
<Navbar title="Text utils" aboutext ="About TextUtils" home="Home" />
<div className="container my-3">
<Textforms heading="Enter the Text to Analyze"/>

</div>
  </>
}
export default App;
