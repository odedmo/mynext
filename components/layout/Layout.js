import Footer from "../Footer"
import Navbar from "../Navbar"
import classes from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <content className={classes.content}>
      <Navbar />
      { children }
      <Footer />
    </content>
  );
}
 
export default Layout;