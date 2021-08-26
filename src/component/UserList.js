import React ,{useEffect,useState}from 'react';
import {Card} from "react-bootstrap";
import axios from "axios";

 const UserList = () => {
     const[userList,setUserList]= useState([]);
     useEffect(() => {
         axios.get(`https://jsonplaceholder.typicode.com/users`)
         .then(result=>setUserList(result.data))
     },[])
    return (
        <div className ="user-card">
            {userList.map(user => 
            <Card 
            key= {user.id}
            style= {{maxwidth:'18rem'}}
            className = "mb-3"
            bg = {'dark'}
            text = {'white'}
            >
            <Card.Header>{user.company.name}</Card.Header>
            <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>{user.website}</Card.Text>
            <Card.Text>{user.email}</Card.Text>
            <Card.Text>{user.address.zipcode}</Card.Text>
            <Card.Text>{user.address.street}</Card.Text>
            </Card.Body>

            </Card> )}
            
        </div>

            
   
    )
}
export default UserList
