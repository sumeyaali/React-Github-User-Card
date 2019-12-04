import React from "react";
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Col
  } from 'reactstrap';


const FollowerCard = (props) => {
    return (

  <Col xs="12" s="6" md="4"> 
        <Card className="newCard">
            <CardImg width="20%" src={props.img} alt="person" />
                <CardBody>
                 <CardTitle>UserName:{props.login}</CardTitle>
                    <CardSubtitle>Github: {props.url}</CardSubtitle>              
                </CardBody>
      </Card>
    </Col>
      
    )
}



export default FollowerCard;

{/* <img src={props.img}/> 
 <h1>{props.login}</h1> 
 <p> {props.url}</p>  */}