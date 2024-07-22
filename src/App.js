import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(object=> object.json())
    .then(users=> this.setState(
      {monsters:users})
    )
  }

  render(){

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      

      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeHolder={"search monster"}
        handleChange={e=>this.setState({searchField:e.target.value})}
        />
        <CardList monsters = {filteredMonsters}/>  
      </div>
    );
  }
  
}

export default App;
