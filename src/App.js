import myimg from './imageInSrc.jpg';
import './App.css';
import './style.css';
function App() {
  return (
  <>
<div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">Majdi Hajjem</h1>

<br />

<img src={myimg} alt="image" />

<br />

<img src="/imageInPublic.jpg" alt="fleur"/>

</div>

<video width="320" height="240" controls>

<source src='/gmc.mp4' type="video/mp4" ></source>

</video>
</>
  );
}

export default App;
