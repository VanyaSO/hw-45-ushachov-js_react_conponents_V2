function Props(props) {
    return(
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.text}</p>
                <p>-----------------------------------</p>
            </div>
        </div>
    );
}

export default Props;
