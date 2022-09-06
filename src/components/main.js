import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './main.css';
function Ui() {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.tvmaze.com/search/shows?q=all")
            .then((response) => setMyData(response.data))
            .catch((error) => console.log(error.message));

    }, []);
    return (
        <div className='container'style={{ width: '30rem' }} >
            {myData.map(data => (
                <Card style={{ width: '30rem' }} className="card mt-3">
                    <Card.Img variant="top" src={data.show.image.medium} />
                    <Card.Body>
                        <Card.Title>Show Name-{data.show.name}</Card.Title>
                        <Card.Text>
                            <Card.Title>language-{data.show.language}</Card.Title>
                        </Card.Text>
                    </Card.Body>
                    <Link to="/summary" className='summary' state={{ decription: data.show.summary,name: data.show.name }}>Summary</Link>
                </Card>
            ))
            }
        </div>
    );
}
export default Ui;