import "./topbar.scss"
import {AccountBox,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar "+ (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Portfolio.</a>
          <div className="itemContainer">
            <AccountBox className="icon"/>
            <span>0416650379</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>zanlwine.htoo110@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
