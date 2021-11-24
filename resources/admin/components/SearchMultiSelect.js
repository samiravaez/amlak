import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';

export default class WithCallbacks extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' , options : [] , timeout:null , value: this.props.value };
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
    this.onChange(this.props.value ? this.props.value : []);
  }

  handleChange=(selected)=>{
    this.setState((prev)=>({...prev,value:selected}))

    this.onChange(selected);
  }
  onChange = (selected) =>{
    if(this.props.onChange){
      let ids=[];
      selected && selected.map((item)=>{
        ids.push(item.id)
      })
      this.props.onChange(this.props.name,ids);
    }
  }

  render() {
    return (
      <div>
        <AsyncSelect
          cacheOptions
          isMulti
          loadOptions={this.loadOptions}
          onInputChange={this.handleInputChange}
          onChange={this.handleChange}
          defaultOptions={this.state.options}
          value={this.state.value}
        />
      </div>
    );
  }
}
