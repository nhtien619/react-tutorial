import React from "react";

class ChildComponent extends React.Component {



    render() {
        let { name, age, jobs } = this.props;

        console.log('>> child: ', this.props)
        return (
            <>
                <span>Child Component: {name} - Age: {age}</span>
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
            </>
        )

    }
}


export default ChildComponent;