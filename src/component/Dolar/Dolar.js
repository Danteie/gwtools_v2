import React, { Component } from "react";




class Dolar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fact: ''
        };
      }



    componentDidMount() {
        fetch("https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR" ,{
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
                    fact: result.exchange_rate
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
            <div className="ba br2 pa2 ma2 mt4 bg-c">
                <h2 className="center">DOLAR$</h2>
                <hr/>
                <h2 className="center f2 tc">{this.state.fact}</h2>    
            </div>
       )
    }
  }

export default Dolar;
