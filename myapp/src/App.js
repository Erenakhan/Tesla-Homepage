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
      desc="Leasing starting at $349/mo"
      descLink=""
      backgroundImg={model3}
      leftbtn="View Inventory"
      leftbtnLink=""
      rightbtn="Custom Order"
      rightbtnLink=""
      twobtn="true"
    />
    <Items 
      title="Model S"
      desc="Schedule a Demo Drive"
      descLink=""
      backgroundImg={modelS}
      leftbtn="View Inventory"
      leftbtnLink=""
      rightbtn="Custom Order"
      rightbtnLink=""
      twobtn="true"
    />
    <Items 
      title="Model X"
      desc="Schedule a Demo Drive"
      descLink=""
      backgroundImg={modelX}
      leftbtn="View Inventory"
      leftbtnLink=""
      rightbtn="Custom Order"
      rightbtnLink=""
      twobtn="true"
    />
    <Items 
      title="Model Y"
      desc="Schedule a Demo Drive"
      descLink=""
      backgroundImg={modelY}
      leftbtn="View Inventory"
      leftbtnLink=""
      rightbtn="Custom Order"
      rightbtnLink=""
      twobtn="true"
    />
    <Items 
      title="Model Panel"
      desc="Lowest Cost Solar Panels in America"
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
      desc="Produce Clean Energy From Your Roof"
      descLink=""
      backgroundImg={modelRoof}
      leftbtn="ORDER NOW"
      leftbtnLink=""
      rightbtn="LEARN MORE"
      rightbtnLink=""
      twobtn="true"
    />
    <Items 
      title="Model Accessories"
      desc=""
      descLink=""
      backgroundImg={modelAcc}
      leftbtn="SHOP NOW"
      leftbtnLink=""
      rightbtn="LEARN MORE"
      rightbtnLink=""
      twobtn = "false"
    />
     </div>
    </div>
  );
}

export default App;
