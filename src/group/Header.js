import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h3>Sample</h3>
      <div>
        <Link to="/sample1">sample1</Link>
        <Link to="/sample2">sample2</Link>
        <Link to="/sample3">sample3</Link>
        <Link to="/sample4">sample4</Link>
        <Link to="/sample5">sample5</Link>
        <Link to="/sample6">sample6</Link>
        <Link to="/sample7">sample7</Link>
      </div>
    </header>
  );
};
export default Header;
