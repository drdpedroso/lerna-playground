import React from 'react'

class Sample extends React.Component {
    render () {
        return (
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