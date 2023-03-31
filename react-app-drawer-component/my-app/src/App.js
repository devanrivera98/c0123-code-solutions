import MyDrawer from './MyDrawer';
import { Bars } from './MyDrawer'
import './App.css';

function App() {
  const menuList = [{ number: 1, name: 'About' }, { number: 2, name: 'Get Started' }, { number: 3, name: 'Sign In' }]
  const menuHeading = 'Menu'

  return (
   <div>
    <MyDrawer menuList={menuList} menuHeading={menuHeading}/>
   </div>
  );
}

export default App;
