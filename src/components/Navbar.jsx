import Row from './Row'
import logo from '../assets/logo.png'
import Button from './Button'

function Navbar(){
    return(<div>
        <Row>
        <img src={logo} alt="logo" style={{width:"200px",marginRight:"270px"}}/>
        <Row>
            <div>Work</div>
            <div>Approach</div>
            <div>Culture</div>
            <div>Career</div>
            <div>Blog</div>
        </Row>
        <Button>Get in touch</Button>
        </Row>
        
    </div>)
}

export default Navbar ;