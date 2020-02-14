import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
  'id' : 1,
  'image': 'https://placeimg.com/64/64/1',
  'name':'윤태호',
  'birthday':'94020555',
  'gender' : '남자',
  'job' : '백수'
}
,
{
  'id' : 2,
  'image': 'https://placeimg.com/64/64/2',
  'name':'윤태호2',
  'birthday':'94020555',
  'gender' : '남자',
  'job' : '백수'
}
,
{
  'id' : 3,
  'image': 'https://placeimg.com/64/64/3',
  'name':'윤태호3',
  'birthday':'94020555',
  'gender' : '남자',
  'job' : '백수'
}


]


class App extends Component {
  render(){
    return (
    <div>
      {
          customers.map(c=>{
            return(
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
          })
      }
    </div>
    );
  }
}

export default App;
