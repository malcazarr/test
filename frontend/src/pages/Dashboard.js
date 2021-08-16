import { Component } from "react";
import logo from '../logo.svg';
export class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state={
            data: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    renderTable(data){
        return (
        <div>
            <div><img src={logo} width="40px" alt=""/>List of Users</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => 
                            <tr key={user.idUser}>
                                <td>{user.idUser}</td>
                                <td>{user.fullName}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
    render() {
        let content = <p>Loading...</p>
        if (this.state.data.length !== 0){
                content = this.renderTable(this.state.data)
        }

        return(
            <div className="content">
                {content}
            </div>
        )
    }

     async getData(){
        const options = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000/',
                'referrerPolicy':'origin'
             }
        }
        const url = "http://localhost:8080/users";
        var myHeader =  new Headers(options);
        var myRequest = new Request(url,myHeader)
        const response = await fetch(myRequest)
        const data = await response.json()
        this.setState({data: data.Users})
        console.log(this.state)
    }
}