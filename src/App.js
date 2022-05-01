import TimeCard from './components/TimeCard';
import './style.css'
import kimmy from './asset/time-tracking-dashboard-main/time-tracking-dashboard-main/images/image-jeremy.png'
const App =() => {
    return(
        <div className = "App">

            <main>
                <div className="time-card profile">
                    <div className="user">
                        <div className="image">
                            <img src={kimmy} alt="" />

                        </div>
                        <div className="details">
                            <p>Report for</p>
                            <h2>Kimmy Lulaby</h2>
                        </div>
                    </div>
                    <div className="tabs">
                        <button>Daily</button>
                        <button className="active">Weekly</button>
                        <button>Monthly</button>
                    </div>

            </div>

          <TimeCard xName="work"/>
          <TimeCard xName="play"/>
          <TimeCard xName="study"/>
          <TimeCard xName="exercise"/>
          <TimeCard xName="social"/>
          <TimeCard xName="selfcare"/>
        
        </main>
    </div>
           
        
    )
}

export default App