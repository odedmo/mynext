import Footer from "../Footer"
import Navbar from "../Navbar"
import classes from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={classes.content}>
      <Navbar />
      { children }
      <Footer />
    </div>
  );
}
 
export default Layout;