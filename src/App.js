import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';
  const [counter, setCounter] = useState(0)

  const handleClick = () =>{
    setReverse((reverse) => !reverse);
  };
  const handleIncrement = () =>{
    setCounter((c) => c +1)
  };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className={`App-logo ${reverseClass}`} alt="logo"/>
                <p>
                <button type='button' onClick={handleClick}>
                    Reverse {reverseClass}
                </button>
                </p>
                <p>
                <button type='button' onClick={handleIncrement}>
                    Counter {counter}
                </button>
                </p>
            </header>
        </div>
    );
}
export default App;

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       reverse: false,
//     }
//   }

//   handleClick = () => {
//     const {reverse} = this.state;
//     this.setState({reverse: !reverse})

//   };

//   render(){
//     const {reverse} = this.state;
//     const reverseClass = reverse ? 'reverse' : '';
//     return(
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//         <button type='button'
//         onClick={this.handleClick}>
//         Reverse {reverseClass}
//         </button>
//       </header>
//     </div>
//   );
// }
// }


