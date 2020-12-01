import React,{Component} from 'react'

class Calculator extends Component {
    
    
    constructor(props){
        super(props)
        this.state = {
            num1: '',
            num2: '',
            sum: '',
            op: '+',
            operator : {
                '+' : (a, b) => a + b,
                '-' : (a, b) => a - b,
                '*' : (a, b) => a * b,
                '/' : (a, b) => a /b
            }
        
        }
    }
    
    setNum = (e, num) =>{
        this.setState({[num]: parseInt(e.target.value)})
    }
    addNums = (e) =>{
        this.setState({sum: this.state.operator[this.state.op](this.state.num1, this.state.num2)})
    }
    opSelect = (e) => {
        this.setState({op: e.target.value})
    }
    render(){
        return(
            <div className="container">
            <h1>Arithmetic with React!</h1>

            <div className="add">
                <input type="text" 
                    placeholder="enter num1"
                    value={this.state.num1}
                    onChange={(e)=> this.setNum(e, 'num1')}
                    />
                <select onChange={(e)=>this.opSelect(e)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="text" 
                    placeholder="enter num2"
                    value={this.state.num2}
                    onChange={(e)=> this.setNum(e, 'num2')}
                    />
                <button onClick={(e)=>this.addNums(e)}>=</button>
                <h3>{this.state.sum}</h3>
            </div>
            </div>
        )
    }
}

export default Calculator