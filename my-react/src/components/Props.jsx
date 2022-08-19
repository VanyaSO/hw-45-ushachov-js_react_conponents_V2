import React from 'react';

class Props extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.text}</p>
                        <p>-----------------------------------</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Props;
