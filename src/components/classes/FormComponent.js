import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class FormComponent extends React.Component {
    state = {
        jobs: [
            { id: Math.floor(Math.random() * 1000), title: "Officer", salary: 1000 },
            { id: Math.floor(Math.random() * 1000), title: "Doctor", salary: 1200 },
            { id: Math.floor(Math.random() * 1000), title: "Guard", salary: 600 },
        ]
    }

    currentJobs = this.state.jobs;

    // add new job
    addNewjob = (job) => {
        console.log('add job: ', job)
        let currentJobs = this.state.jobs;
        currentJobs.push(job);
        this.setState({
            //jobs: [...this.state.jobs, job]
            jobs: currentJobs
        })

    }

    // delete job
    handleDeleteJob = (id) => {
        let currentJobs = this.state.jobs;
        currentJobs = currentJobs.filter(x => x.id !== id)
        this.setState({
            jobs: currentJobs
        })
    }

    render() {

        return (
            <>
                <AddComponent addNewjob={this.addNewjob} />

                <ChildComponent
                    jobs={this.state.jobs}
                    handleDeleteJob={this.handleDeleteJob} />
            </>
        )
    }
}

export default FormComponent;