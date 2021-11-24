import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';

export default class WithCallbacks extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' , options : [] , timeout:null };
  }
  handleInputChange = (newValue) => {
    // inputValue = newValue.replace(/\W/g, '');
    //clearTimeout(this.state.timeout)
    //this.state.timeout=setTimeout(()=>{
      //if(newValue.length>0)
    this.props.request(this.setloadOptions,newValue);
    //},2000);
    return newValue;
  };

  filterColors = (inputValue) => {
    return this.state.options;
    return this.state.options.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(this.state.options);
    }, 1000);
  };

  setloadOptions = (options) => {
    this.setState({options:options})
  }

  componentDidMount() {
    this.props.request(this.setloadOptions)
  }

  handleChange=(selected)=>{
    if(this.props.setList){
      this.props.setList((list)=>[
        ...list,
        {...selected,options: selected.options1},
      ])
    }
    if(this.props.setData){
      this.props.setData(selected)
    }
    if(this.props.showModal){
      this.props.showModal(false)
    }
    if(this.props.onChange){
      this.props.onChange(this.props.name,selected);
    }
  }

  render() {
    return (
      <div>
        <AsyncSelect
          cacheOptions
          loadOptions={this.loadOptions}
          onInputChange={this.handleInputChange}
          onChange={this.handleChange}
          defaultOptions={this.state.options}
        />
      </div>
    );
  }
}
