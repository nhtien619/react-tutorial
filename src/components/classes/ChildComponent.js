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

    handleDeleteJob = (id) => {
        console.log('job id: ', id);
        this.props.handleDeleteJob(id);
    }

    render() {
        let { jobs } = this.props;
        let { isShow } = this.state;
        //console.log('>> child: ', this.props)
        return (
            <>
                {
                    isShow === false ?
                        <div>
                            <button onClick={() => { this.handleShowHide(); }}>Show</button>
                        </div>
                        :
                        <>
                            <div className="jobs-list" style={{ textAlignLast: "justify" }}>
                                {
                                    jobs.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                <span>{item.title}</span>
                                                <span style={{ marginLeft: 10 }}>{item.salary}</span>
                                                <button
                                                    className="btn-default"
                                                    style={{ marginLeft: 10 }}
                                                    onClick={() => { this.handleDeleteJob(item.id); }}>
                                                    Delete
                                                </button>
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