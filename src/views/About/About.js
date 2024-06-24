import React from "react";
import Button from 'react-bootstrap/Button';
import NavigateHandler from "../../components/functions/NavigateHandler";


class About extends React.Component {

    handleback = () => {
        this.props.navigate('/');
    }

    render() {

        console.log(this.props);

        return (
            <div>
                <label>ABOUT PAGE</label>
                <Button onClick={this.handleback}>
                    BACK TO HOME
                </Button>
            </div>
        )
    }
}

export default NavigateHandler(About);