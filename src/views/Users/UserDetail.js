import React from "react";
import axios from "axios";
import NavigateHandler from "../../components/functions/NavigateHandler";
import { Button } from "react-bootstrap";



class UserDetail extends React.Component {
    state = {
        UserInfo: {}
    }

    async componentDidMount() {

        if (this.props.useParam) {

            let id = this.props.useParam.id;
            console.log(id);

            try {
                let res = await axios.get(`https://reqres.in/api/users/${id}`);
                this.setState({
                    UserInfo: res && res.data && res.data.data ? res.data.data : {}
                })

            } catch (error) {
                console.log(error)
            }
        }


    }

    goBackHandle = () => {
        if (this.props.navigate)
            this.props.navigate('/users');
    }


    render() {
        let { UserInfo } = this.state;
        let isEmptyObject = Object.keys(UserInfo).length === 0;
        console.log(UserInfo);
        return (
            <div>
                {
                    isEmptyObject === false &&
                    <>
                        <div>
                            <span>#{UserInfo.id} {UserInfo.first_name} - {UserInfo.last_name}</span><br />
                            <span>{UserInfo.email}</span>
                        </div>
                        <div className="mt-2">
                            <img src={UserInfo.avatar}></img>
                        </div>
                        <div className="mt-2">
                            <Button onClick={this.goBackHandle}>BACK</Button>
                        </div>
                    </>
                }
            </div>
        )
    }
}

export default NavigateHandler(UserDetail);