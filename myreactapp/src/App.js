import React from 'react';
import { connect } from 'react-redux';
import { addGun, minGun, addGunAsync } from "./redux/index.redux";

@connect(
    state => ({num: state}),
    {addGun, minGun, addGunAsync}
)
class App extends React.Component {
    render() {
        return (
            <div>
                <div>现在有{this.props.num}把机关枪！</div>
                <button onClick={this.props.addGun}>增加</button>
                <button onClick={this.props.minGun}>减小</button>
                <button onClick={this.props.addGunAsync}>延迟增加</button>
            </div>
        );
    }
}

export default App;