import React from "react";

class ChildComponent extends React.Component {

    state = {
        isShow: false
    };

    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        let { name, age, jobs } = this.props;
        let { isShow } = this.state;
        console.log('>> child: ', this.props)
        return (
            <>
                <span>Child Component: {name} - Age: {age}</span>
                {
                    isShow === false ?
                        <div>
                            <button onClick={() => { this.handleShowHide(); }}>Show</button>
                        </div>
                        :
                        <>
                            <div className="jobs-list" style={{ textAlign: "left" }}>
                                {
                                    jobs.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <button onClick={() => { this.handleShowHide(); }}>Hide</button>
                            </div>
                        </>
                }
            </>
        )
    }
}


export default ChildComponent;