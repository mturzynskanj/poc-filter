import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AST_Conditional } from 'terser';

{

  let condtion = ["AND", {
    key: "name",
    value: "Maria",
    comparator: '==='
  }, {
      key: "age",
      value: 49,
      comparator: '==='
    },
    {
      key: 'zip',
      value: '111',
      comparator: '==='
    },

    [
      "OR",
      {
        key: 'zip',
        value: '111',
        comparator: '==='
      },
      {
        key: 'county',
        value: 'bergen',
        comparator: '==='
      },
      {
        key: 'city',
        value: 'NewYork',
        comparator: '==='
      },

    ]
  ];


  let dataObj = {
    name: 'Maria',
    age: 49,
    zip: '112',
    county: 'bergen',
    city: 'FairLawn'
  }

  let count = 0
  const isMatch = (dataObj, condtion) => {
    count = count + 1;
    if (Array.isArray(condtion)) {
      debugger;
      if (condtion[0] === 'AND') {

        return condtion.slice(1).every(c => isMatch(dataObj, c))
      }

      return condtion.slice(1).some(c => isMatch(dataObj, c))
    }
    const { key, value, comparator } = condtion;

    if (comparator === '===') {
      console.log('wht is data[key]', dataObj[key])
      return dataObj[key] === value;
    }
    console.log('count is ', count);
  };
  console.log('test ', isMatch(dataObj, condtion));
}

class App extends Component {
  render() {
    return (
      <div className="App">
        test...
        {
          console.log('dupa....')
        }
      </div>
    );
  }
}

export default App;
