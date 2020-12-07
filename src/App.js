import './App.css';
import Profile from './profile/Profile'

function App() {
  const handleName  = name => alert(name);
  const styleObject = {color: 'grey', textAlign: 'center'}
  return (
    <div className="App" style={styleObject}>
        <Profile fullName='Houssem Bacha' bio='I am learning React props' profession='Student' handleName={handleName}>
          <img className='Photo' src="/FB.jpg" alt='MyImage' />
        </Profile>
    </div>
  );
}

export default App;
