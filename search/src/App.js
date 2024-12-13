import './App.css';
import {useState} from 'react'
function App() {
  const [searchName,setsearchName] = useState('')
  const names = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hannah',
    'Ivy', 'Jack', 'Karen', 'Leo', 'Mona', 'Nina', 'Oscar', 'Paul', 'Quinn',
    'Rachel', 'Sam', 'Tom', 'Uma', 'Vera', 'Will', 'Xander', 'Yara', 'Zane'
  ];

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(searchName.toLowerCase())
  );

  function handleChange(e){
    e.preventDefault();
    setsearchName(e.target.value)
  }
  return (
    <div className="SearchDiv">
      <h3>Name will filter if the entered character exist in name</h3>
      <input type="text" placeholder="seacrh" value={searchName} className="SearchInput" onChange={handleChange}/>
      <table>
        {filteredNames.map((value)=>(
          <tr>
            <td>{value}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
