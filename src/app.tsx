import React, {Component} from 'react'
import {connect} from 'react-redux';

interface Props {};
interface State {};

export default class App extends Component<Props, State> {
  constructor(props){
	super(props);
  }
  
  render(){
	return (<div>Sup Yo</div>
	);
  }
}