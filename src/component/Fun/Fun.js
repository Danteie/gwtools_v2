import React, { Component } from "react";




class Fun extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fact: ''
        };
      }



    componentDidMount() {
        fetch("https://api.api-ninjas.com/v1/facts?limit=1" ,{
          method: 'GET',
          headers: {
              'X-API-KEY': 'Mmt4TTxeUpX7ZL5UGJ5XHQ==bH9tWqtPIhiHEUQx',
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }})
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                fact: result[0].fact
              });
  
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }


    render() {
       return(
            <footer className="w100" >
                <h2 className="center">FUN FACT</h2>
                <h2 className="center f2 tc">{this.state.fact}</h2>
            </footer>
       )
    }
  }

export default Fun;
