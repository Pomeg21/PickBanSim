import './App.css';
import {championList} from './Data.js'
import SearchBar from './components/searchbar.js';

function App() {

  return (
  <div className="application">
    <div className="Blue-Team">
      <div className="Blue-Team-Name">
        Blue Team Name
      </div>
    
    <div className="Blue-Team-Bans">

      <div className="Blue-Team-B">
        Ban 1
      </div>

      <div className="Blue-Team-B">
        Ban 2
      </div>

      <div className="Blue-Team-B">
        Ban 3
      </div>

      <div className="Blue-Team-B">
        Ban 4
      </div>

      <div className="Blue-Team-B">
        Ban 5
      </div>
    </div>

    <div className="Blue-Team-Picks">

      <div className="Blue-Team-P">
        Pick 1
      </div>

      <div className="Blue-Team-P">
        Pick 2
      </div>
        
      <div className="Blue-Team-P">
        Pick 3
      </div>

      <div className="Blue-Team-P">
        Pick 4 
      </div>

      <div className="Blue-Team-P">
        Pick 5 
      </div>
    </div>
    </div>
    <div>
    <div className="Timer">
      Blue Team is picking
    </div>

    <div className="Champion-Select">

    <div className="Champion-Search">
        <SearchBar />
    </div>
    
    {championList.map((item) => (

      <button>{item.portrait}</button>

    ))}

      <button className="Champion-Select-Button">
        Select
      </button>
    </div>
  </div>
    <div className="Red-Team">
      <div className="Red-Team-Name">
        Red Team Name
      </div>
    
    <div className="Red-Team-Bans">

      <div className="Red-Team-B">
        Ban 1
      </div>

      <div className="Red-Team-B">
        Ban 2
      </div>

      <div className="Red-Team-B">
        Ban 3
      </div>

      <div className="Red-Team-B">
        Ban 4
      </div>

      <div className="Red-Team-B">
        Ban 5
      </div>
    </div>

    <div className="Red-Team-Picks">

      <div className="Red-Team-P">
        Pick 1
      </div>

      <div className="Red-Team-P">
        Pick 2
      </div>
        
      <div className="Red-Team-P">
        Pick 3
      </div>

      <div className="Red-Team-P">
        Pick 4
      </div>
      <div className="Red-Team-P">
        Pick 5
      </div>
    </div> 
    
    </div>  
    
  </div>
  )
  }
  

export default App;
