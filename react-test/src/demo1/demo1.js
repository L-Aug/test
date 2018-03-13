import React from 'react';

class Demo1 extends React.Component {
    constructor(props) {
        super(props)
        this.element = <h1>Hello, world</h1>;
    }
    render() {
        return (
            <div>{this.element}</div>
        )
    }
}
export default Demo1