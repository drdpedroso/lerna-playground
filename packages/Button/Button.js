import React from 'React'

class Button extends React.Component {
    render () {
        return(
            <div>
                <style jsx>{`
                    p {
                        color: red;
                    }
                `}</style>
                <button>{this.props.text}</button>
            </div>
        )
    }
}

export default Button