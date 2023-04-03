import './App.css';
import Header from './components/Header';
import Items from './components/Items';
/////////////////img////////////////////
import modelS from './img/Desktop-ModelS.jpeg' 
import model3 from './img/Desktop-Model3.jpeg'
import modelX from './img/Desktop-ModelX.jpeg'
import modelY from './img/Desktop-ModelY.jpeg'
import modelPanel from './img/Desktop-SolarPanels.jpeg'
import modelRoof from './img/Desktop-SolarRoof.jpeg'
import modelAcc from './img/Desktop-Accessories.jpg' 
function App() {
  return (
    <div> 
      <Header/>
      <div className="items-container" >
    <Items 
      title="Model 3"
      desc="Money-back"
      descLink=""
      backgroundImg={model3}
      leftbtn="CUSTEM ORDER"
      leftbtnLink=""
      rightbtn="LEARN MORE"
      rightbtnLink=""
      twobtn="true"
    />
    <Items 
      title="Model S"
      desc="Money-back"
      descLink=""
      backgroundImg={modelS}
      leftbtn="CUSTEM ORDER"
      leftbtnLink=""
      rightbtn="LEARN MORE"
      rightbtnLink=""
      twobtn="true"
    />
    <Items 
      title="Model X"
      desc="Money-back"
      descLink=""
      backgroundImg={modelX}
      leftbtn="CUSTEM ORDER"
      leftbtnLink=""
      rightbtn="LEARN MORE"
      rightbtnLink=""
      twobtn="true"
    />
    <Items 
      title="Model Y"
      desc="Money-back"
      descLink=""
      backgroundImg={modelY}
      leftbtn="CUSTEM ORDER"
      leftbtnLink=""
      rightbtn="LEARN MORE"
      rightbtnLink=""
      twobtn="true"
    />
    <Items 
      title="Model Panel"
      desc="Money-back"
      descLink=""
      backgroundImg={modelPanel}
      leftbtn="CUSTEM ORDER"
      leftbtnLink=""
      rightbtn="LEARN MORE"
      rightbtnLink=""
      twobtn="true"
    />
    <Items 
      title="Model Roof"
      desc="Money-back"
      descLink=""
      backgroundImg={modelRoof}
      leftbtn="CUSTEM ORDER"
      leftbtnLink=""
      rightbtn="LEARN MORE"
      rightbtnLink=""
      twobtn="true"
    />
    <Items 
      title="Model Accessories"
      desc="Money-back"
      descLink=""
      backgroundImg={modelAcc}
      leftbtn="CUSTEM ORDER"
      leftbtnLink=""
      rightbtn="LEARN MORE"
      rightbtnLink=""
      twobtn= 'false'
    />
     </div>
    </div>
  );
}

export default App;
