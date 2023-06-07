import { Link } from "react-router-dom"

const Header = ()=> {

    return (
        <header>
            <h3>Sample</h3>
            <div>
                <Link to="/">sample1</Link>
                <Link to="/sample2">sample2</Link>
                <Link to="/">sample3</Link>
                <Link to="/">sample4</Link>

            </div>

        </header>
    )
}
export default Header;