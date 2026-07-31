import Theme from './theme/Theme';

function Header() {
  return (
    <div className="flex justify-between">
      <h1 className="text-preset-heading">devfinder</h1>
      <Theme />
    </div>
  );
}

export default Header;