import React from 'react';

class Props extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="card">
                    <div className="card-body">
                        {this.props.title ? <h4>{this.props.title}</h4> : null}
                        {this.props.text ? <p>{this.props.text}</p> : null}
                        <p>-----------------------------------</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Props;
