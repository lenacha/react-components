var App = () => (
  <div>
    <Cucumbers />
    <Kale />
  </div>
);

var Cucumbers = () => (
  <li>cucumber</li>
);

var Kale = () => (
  <li>kale</li>
);

var groceryItems = ['soju', 'beer', 'pork belly']

var GroceryList = () => (
  <ul>
    {groceryItems.map(item => <GroceryListItem item={item} />)}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      toggle: false
    };
  }

  makeBold() {
    this.setState ({
      toggle: !this.state.toggle 
    });
  }

  render(){
    var style={
      fontWeight: this.state.toggle ? 'bold' : 'normal'
    }
    return(
      <li style={style} onMouseEnter={this.makeBold.bind(this)} onMouseLeave={this.makeBold.bind(this)}>{this.props.item}</li>
    );
  }
};

ReactDOM.render(<GroceryList />, document.getElementById("app"))