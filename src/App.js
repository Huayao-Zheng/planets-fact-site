import './App.css';
import data from './data.json';

function App() {
    console.log(data);
    return (
        <>
            {data.map((planet, idx) => (
                <div key={idx}>{planet.name}</div>
            ))}
        </>
    );
}

export default App;
