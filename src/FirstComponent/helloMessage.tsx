import * as React from 'react';
import { IMyData } from '../MyData';

 interface IBookListState {
     authorName: string,
     bookList: string[],
     answerList: string,
     point:number

 }


export class Hello extends React.Component <  IMyData, IBookListState  > {
    

     constructor(props:IMyData){
         super(props);
         this.state ={
             answerList : this.props.answer,
             authorName: this.props.name,
             bookList : this.props.message,
             point:0
        }
       // this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this,);
     }

    public handleCorrectAnswer(item : string){
        if(this.props.answer === item.toString()){
        // tslint:disable-next-line:no-console
        console.log('Inside'); 

            this.setState({
                point: this.state.point+1,
            })
        }
        // tslint:disable-next-line:no-console
        console.log(this.state.point);
        this.props.trigger(this.state.point);
        

    }

    public componentWillReceiveProps(nextProps:IMyData){
    
        if(nextProps.message !== this.props.message) {
        
            this.setState({
                authorName: nextProps.name,
                bookList: nextProps.message 
            });
        }
    }

    // public componentWillMount(){
    // }
    // public componentDidMount() {
    //     }
    // public componentWillUpdate() {
    // }


    public render(){
            return(
            <div className='container-fluid'>
                <p> Hello From Component</p>
                <div className='row'>
                    <div className='col-md-4'>
                        {this.state.authorName}
                    </div>
                     <div className='col-md-6'>
                        <ul>
                            { this.state.bookList.map((item, index) => {
                                return(<li key={index}>
                                        <div className='row'>
                                            <div className='col-md-10'>
                                                {item}
                                            </div>
                                            <div className='col-md-2'>
                                                <button onClick={ this.handleCorrectAnswer.bind(this,item) } > Select </button>
                                            </div>
                                        </div>
                                    </li>);
                            })}

                        </ul> 
                       
                     </div>
                </div>
            </div>
        );
    }
}