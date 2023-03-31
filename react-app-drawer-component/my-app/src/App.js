import MyDrawer from './MyDrawer';
import './App.css';

function App() {
  const menuList = [{ number: 1, name: 'About' }, { number: 2, name: 'Get Started' }, { number: 3, name: 'Sign In' }]

  return (
   <div>
    <MyDrawer menuList={menuList} menuHeading="Menu"/>
   </div>
  );
}

export default App;
