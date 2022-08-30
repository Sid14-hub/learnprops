import './App.css';
import Card from './Component/Cards';
import Content from './Component/content'

function App() {
  return (
    <div className='element'>
      <h1>A Dome Card Project</h1>
      {Content.map((val) => {
        return (<Card
          imgsrc = {val.imgsrc}
          name = { val.name }
          des = { val.description }
          btn = { val.btn }
        />
        );
      })}
    </div>
  );
}

export default App;
