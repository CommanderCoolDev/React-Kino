import React from 'react';

// don't change the Component name "App"
export default class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        email: '',
        isAgreeWithTerms: false,
    };
  }
    handleChange = (event) => {
this.setState({[event.target.name]: event.target.value})
    }
     validateEmail = () => {
        if ( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
  {
    alert('invalid email')
        } 
     }
     handleCheckboxChange = (event) => {
    this.setState({[event.target.name]: event.target.checked})
     }
  handleSubmit = () => {
    if (!this.state.isAgreeWithTerms) {
      alert('you should accept all agreements')
      return
    }
    alert('thank you for your subscription')
  }
  
  render() {
    
    // TODO: implement component
    const { email, isAgreeWithTerms } = this.state;

    

        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
              value={email}
              onChange={this.handleChange}
              onBlur={this.validateEmail}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                checked={isAgreeWithTerms}
                onChange={this.handleCheckboxChange}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.handleSubmit}>Send</button>
            </div>
        );
  }
}
// class App extends React.Component {
//   state = {
//     posts: [
//      {id:'abc1', name: 'JS Basis'},
//      {id:'abc2', name: 'JS Advanced'},
//      {id:'abc3', name: 'React JS'}
//    ]
//   }
//   removePost = (id) => {
//     this.setState({posts: this.state.posts.filter(post => post.id !== id)})
//     // console.log('App.jsx setState update')
//   }

 
//   render() {
//      const { posts } = this.state
//     return (
//       <Posts posts={posts} removePost={ this.remove}/>
//         );
//     }
// }
// class App extends React.Component {
//   state = {
//     posts: [
//      {id:'abc1', name: 'JS Basis'},
//      {id:'abc2', name: 'JS Advanced'},
//      {id:'abc3', name: 'React JS'}
//    ]
//  }

//     render() {
//         return (
//             <div className="App">
//             {this.state.posts.map(post => (<h2 key ={post.id}>{post.name}</h2>))}
//             </div>
//         );
//     }
// }
// class App extends React.Component {
//     state = {
//         count: 0,
//         isCounting: false,
//     };
//   handleStart = () => {this.timerId = setInterval(() => {
//     this.setState((prevState) => ({ count: prevState.count + 1, isCounting: true }),)
//   }, 1000)}
  
//   handleStop = () => {
//     clearInterval(this.timerId);
//     this.setState({isCounting: false})
//   }
//   handleReset = () => {
//     this.setState({ count: 0, isCounting: false });
//      clearInterval(this.timerId);
 
//   }
//   componentDidMount() {
//     let data = localStorage.getItem('count')
  
//     if (data) {
//        this.setState({ count: +data })
//        console.log(data)
//     }
   
    
//   }
  

//   componentDidUpdate() {
//     localStorage.setItem('count', `${this.state.count}`)
      
//     }

//   componentWillUnmount() {
//     clearInterval(this.timerId);
    
//     }

//     render() {
//         return (
//             <div className="App">
//                 <h1>React Timer</h1>
//                 <h3>{this.state.count}</h3>
//                 {!this.state.isCounting ? (
//                     <button onClick={this.handleStart}>Start</button>
//                 ) : (
//                     <button onClick={this.handleStop}>Stop</button>
//                 )}
//                 <button onClick={this.handleReset}>Reset</button>
//             </div>
//         );
//     }
// }
// class App extends React.Component {
 
//     state = {
//       posts: 0,
//       loading: true,
//       comments: []
      
//     }
  
  
// //fetch posts
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => this.setState({ posts: data, loading: false }))
    
//     this.timerId = setInterval(() => {
//        fetch('https://jsonplaceholder.typicode.com/comments').then(response=> response.json()).then(data => this.setState({comments: data, }))
//     }, 5000)
//     console.log(`mount`)
//   }
//   componentDidUpdate() {
    
//     console.log(`update`)
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerId);

//     console.log(`unmount`)
//   }
//   render() {
//   return (
//     <div className="App">
//       {this.state.loading ? <h3>Loading...</h3> : <h3>{this.state.posts.length} was loaded</h3>}
//     </div>
//   );
//   }

// }
// class App extends React.Component {
 
//     state = {
//       count: 0,
      
//     }
  
//   //s4et4ik s  + - knopkoy
//   plusClick = () => {
//     this.setState((prevState)=>({count:prevState.count +1}))
  
    
//   }
//   minusClick = () => {
//     this.setState((prevState)=>({count:prevState.count -1}))
  
    
//   }
//   consoleClick = () => {
//     console.log(this.state.count)
//   }
//   render() {
//   return (
//     <div className="App">
//       Hello
//       <button onClick={this.plusClick}>+</button>
//       <button onClick={this.consoleClick}>{this.state.count}</button>
      
//       <button onClick = {this.minusClick}>-</button>
//     </div>
//   );
//   }

// }
// class App extends React.Component {
 
//     state = {
//       count: 0,
      
//     }
  
//   //s4et4ik s vizovom funcii
//   handleClick = () => {
//     this.setState((prevState)=>({count:prevState.count +1}),()=>{console.log(`setState complete`)})
//     // this.setState((prevState)=>({count:prevState.count +1}))
//     // this.setState((prevState)=>({count:prevState.count +1}))
//     console.log(`from handle click`)
//   }
//   render() {
//   return (
//     <div className="App">
//       Hello
//       <button onClick = {this.handleClick}>{this.state.count}</button>
//     </div>
//   );
//   }

// }
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       someKey: false
//     }
//   }
//   //s4et4ik
//   handleClick = () => {
//     this.setState({count:this.state.count +1})
//   }
//   render() {
//   return (
//     <div className="App">
//       Hello
//       <button onClick = {this.handleClick}>{this.state.count}</button>
//     </div>
//   );
//   }

// }

// export default App;
