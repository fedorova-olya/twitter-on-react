import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

//class WhoAmI extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     years: 26
  //   }
  //   this.nextYear = this.nextYear.bind(this);
  // }
  // nextYear() {
  //   console.log(1);
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

//   state = {
//     years: 26
//   }

//   nextYear = () => {
//     console.log(1);
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }



//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <>
//         <h1>My name is {name}, surname - {surname}, years - {years}</h1>
//         <button onClick={this.nextYear}>++</button>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="Olya" surname="Fedorova" link="facebook.com" ></WhoAmI>
//       <WhoAmI name="Maks" surname="Cherpovodsky" link="facebook.com"></WhoAmI>
//       <WhoAmI name="Sonya" surname="Kosstoglodova" link="facebook.com"></WhoAmI>
//     </>

//   )
// }

ReactDOM.render(
  <App/>, document.getElementById('root')
);
