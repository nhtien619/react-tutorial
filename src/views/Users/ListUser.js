import React from "react";
import axios from "axios";
import { Button, Stack } from "react-bootstrap";
import '../Users/ListUser.scss';
import NavigateHandler from "../../components/functions/NavigateHandler";

class ListUser extends React.Component {

    state = {
        listUsers: [],
        pageData: {
            currentPage: 1
        }
    }

    async componentDidMount() {
        await this.LoadData();

        //console.log(this.state.listUsers);
    }

    LoadData = async () => {
        let page = this.state.pageData;
        let currentData = this.state.listUsers;
        let res = await axios.get(`https://reqres.in/api/users?page=${page.currentPage}`);

        let dataRes = res && res.data && res.data.data ? res.data.data : [];
        if (dataRes && dataRes.length > 0) {
            if (page.currentPage > 1) {
                dataRes.map((item, index) => {
                    currentData.push(item);
                })


            }
            else currentData = dataRes;
        }

        console.log(currentData);

        this.setState({
            listUsers: currentData//res && res.data && res.data.data ? res.data.data : []
        })

    }


    showInfoUser = (data) => {
        console.log(data.id);

        if (this.props.navigate) {
            this.props.navigate(`/users/${data.id}`);
        }
    }

    loadmoreHandle = async () => {

        let page = this.state.pageData;
        page.currentPage += 1;
        console.log(page);
        this.setState({
            pageData: page
        })

        await this.LoadData();
    }



    render() {
        let { listUsers } = this.state;

        return (<div className="list-user-container">
            <div className="user-title">USER MANAGMENT</div>
            <div className="list-user-content">
                <Stack direction="horizontal" gap={3} className="user-content">
                    {
                        listUsers && listUsers.length > 0 ?
                            listUsers.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        <Stack direction="horizontal" gap={2}>
                                            <div className="user-image">
                                                <img src={item.avatar}></img>
                                            </div>
                                            <div className="user-info">
                                                <div>
                                                    <span>{item.first_name} {item.last_name}</span>
                                                    <br />
                                                    <span>{item.email}</span>
                                                </div>
                                                <div className="user-button">
                                                    <Button onClick={() => { this.showInfoUser(item); }}>Info</Button>
                                                </div>
                                            </div>
                                        </Stack>
                                    </div>
                                )
                            }) : <div>No data found</div>
                    }
                </Stack>

            </div>
            <div className="user-loadmore">
                {
                    listUsers && listUsers.length > 0 ?
                        <Button onClick={() => { this.loadmoreHandle(); }}>Load more</Button>
                        : <></>
                }
            </div>


        </div>);
    }
}

export default NavigateHandler(ListUser);