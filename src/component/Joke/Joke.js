import React, { Component } from "react";




class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
          joke: ''
        };
      }



    componentDidMount() {
        fetch("https://api.api-ninjas.com/v1/jokes?limit=1" ,{
          method: 'GET',
          headers: {
              'X-API-KEY': 'Mmt4TTxeUpX7ZL5UGJ5XHQ==bH9tWqtPIhiHEUQx',
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }})
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              this.setState({
                joke: result[0].joke
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
            <footer className="ba br2 pa1 ma2 mt4 bg-c w100">
                <h2 className="center">JOKE</h2>
                <hr/>
                <h2 className="center f2 tc">{this.state.joke}</h2>
            </footer>
       )
    }
  }

export default Joke;
