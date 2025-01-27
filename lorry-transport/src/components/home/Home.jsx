import './Home.css'
import lorry_logo from '../../assets/lorry_logo.png'
function Home() {
  return (
    <div>
        <div className="p-1">
        <div className="img-slide">
        <div className="img-sliders">
          <div className="images">
            <img src={lorry_logo} alt="" className="img1" />
          </div>
        </div>
      </div>
        </div>
        <div className="p-2">

        </div>
    </div>
  )
}

export default Home