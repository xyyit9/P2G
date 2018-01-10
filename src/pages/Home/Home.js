import React, {Component} from 'react';
import {Button} from 'antd';

export default class Home extends Component {
   constructor(props){
   	super(props),
   	this.state={
   		count:0
   	}
   }
   _handleClick(){
   	this.setState({
   		count: ++this.state.count
   	});
    }
    render() {
        return (
            <div>
                <Button type="primary">primary</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                this is home~<br/>
                当前计数：{this.state.count}<br/>
                <button onClick={() => this._handleClick()}>自增</button>
            </div>
        )
   }
}