import './App.css';
import image from './img2/imageInSrc.jpg';


   function App() {
    return (
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Akel Hosni</h1>
          <br />
          <img  src={image} />
          <br />
          <img src={'/img/imageInPublic.jpg'} />
        </div>
        <video width={320} height={240} controls>
          <source src="2 Minute Timer.mp4" />
        </video>
      </div>
    );
  }

  export default App ;


