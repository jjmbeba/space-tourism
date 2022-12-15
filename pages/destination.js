import { useSelector } from "react-redux"
import Destination from "../components/Destination"
import SideMenu from "../components/SideMenu"

const destination = () => {
  const menuState = useSelector((state) => state.menu)
  return (
  <>
  <Destination/>
  {menuState && <SideMenu/>}
  </>
  )
}

export default destination