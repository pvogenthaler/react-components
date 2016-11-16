
var FoodList = (props) => (
  <ul>
    {props.food.map(foodItem => 
      <FoodListItem foodItem={foodItem} />
      )}
  </ul>
);


class FoodListItem extends React.Component {
  constructor(props){
    super(props);
    this.click= this.click.bind(this);
    this.state = {
      done: false
    };
  }
  click() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={() => this.click()}>{this.props.foodItem}</li>
    );
  }
}

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <FoodList food={['Cucumbers', 'Kale', 'Tomatoes']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));