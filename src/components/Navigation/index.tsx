import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/logos/logo4.png'
import styles from './navigation.module.css';

const Navigation = () => {
    return (
        <Navbar className={styles.customNavbar} expand="lg">
        <Navbar.Brand href="/" className={styles.navTitle}>
          <img src={logo} alt="logo" className={styles.navbarLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={styles.basicNavbarNav} />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.customNavbarCollapse}>
          <Nav className={`${styles.mlAuto} ${styles.CustomNav}`}>
            <Nav.Link className={styles.navLink} href="/">
              Home
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="/land-acknowledgement">
              Land Acknowledgment
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="/search">
              Search
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="/learn-more">
              Learn More
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigation