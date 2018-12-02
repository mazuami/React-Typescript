import * as React from 'react';
import { Hello } from 'src/FirstComponent/helloMessage';
import { IMyData } from 'src/MyData';
import { Score } from 'src/ScoreComponent/scoreComponent';
import './App.css';
import logo from './logo.svg';

interface IMyState {
  counter: number,
  item: {
    name: string,
    message: string[],
    answer: string,
  }
  finalScore: number,
};

// interface IMyDataInstance {
//   name: string;
//   message: string[];
//   answer: string;

// }


class App extends React.Component < {}, IMyState > {
 
 public mydataInstance = [
  {
    'name' :'Rabindra Nath Tagore',
    // tslint:disable-next-line:object-literal-sort-keys
    'message' :['Book1','Book2','Book3','Book4'],
    'answer' : 'Book3'
    
  },
  {
    'name' :'Ruskin Bond',
    // tslint:disable-next-line:object-literal-sort-keys
    'message' :['Book5','Book6','Book7','Book8'],
    'answer' : 'Book7'
  },
  {
    'name' :'R K Narayan',
    // tslint:disable-next-line:object-literal-sort-keys
    'message' :['Book9','Book10','Book11','Book12'],
    'answer' : 'Book11'
  },
  {
     'name' :'Jim Corbet',
     // tslint:disable-next-line:object-literal-sort-keys
     'message' :['Book13','Book14','Book15','Book16'],
     'answer' : 'Book15'
  },
  {
    'name' :'Mark Twain',
    // tslint:disable-next-line:object-literal-sort-keys
    'message' :['Book17','Book18','Book19','Book20'],
    'answer' : 'Book18'
  },
  {
    'name' :'Ernets Hemmingway',
    // tslint:disable-next-line:object-literal-sort-keys
    'message' :['Book21','Book22','Book23','Book24'],
    'answer' : 'Book22'
  },
  {
    'name' :'Ruyard Kipling',
    // tslint:disable-next-line:object-literal-sort-keys
    'message' :['Book25','Book26','Book27','Book28'],
    'answer' : 'Book25'
  }
  ];

  // private  finalScore : number ;

  constructor(props:IMyData) {
    super(props);
    this.state = {
      counter: 0,
      finalScore: 0,
      item: {
        name: 'Rabindra Nath Tagore',
        // tslint:disable-next-line:object-literal-sort-keys
        message: ['Book1','Book2','Book3','Book4'],
        answer: 'Book3',
               
      },
      
      }
      
      this.handleClick=this.handleClick.bind(this);
      // this.updateFinalScore=this.updateFinalScore.bind(this,finalScore);
  }  

  public handleClick() {
    if( this.state.counter < 7 ){
      this.setState(state => (
        {
        counter: state.counter + 1,
        item : this.mydataInstance[state.counter + 1]
        }
        ));
    }
    else {
      this.setState(state => (
        {
        counter: 0,
        item : this.mydataInstance[state.counter]
        }
        ));
    }

  }

  public updateFinalScore(){
    // tslint:disable-next-line:no-console
    console.log('This is too good ' + this.state.finalScore);
    // this.setState({
    //   finalScore: score
    // })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
         { this.state.counter < 7 ?
           <div>
            <Hello name={this.state.item.name}  
                   message={this.state.item.message} 
                   answer={this.state.item.answer} 
                   trigger={this.updateFinalScore.bind(this,this.state.finalScore)} />
           <button onClick ={this.handleClick}>Next</button>
           </div>
            :
           <div> 
           <h1> Your quiz is complete </h1>
           <Score {...this.state.finalScore }/>
           </div>
          }
       </div>
    );
  }
}

export default App;
