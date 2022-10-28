import {FaTwitterSquare, FaFacebookSquare, FaInstagram} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"

const fontStyles = {fontSize: '24px', color: '#918E9B'}

export default function Footer () {
    return (
        <div className="footer-container">
            <FaTwitterSquare style={fontStyles}/>
            <FaFacebookSquare style={fontStyles}/>
            <FaInstagram style={fontStyles}/>
            <AiFillGithub style={fontStyles}/>
        </div>
    )
}