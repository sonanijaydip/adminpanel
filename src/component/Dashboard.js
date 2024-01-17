import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap'
import Sidebar from './Sidebar';
// import Header from './Header';


const Dashboard = () => {
    return (
        <>  
        <Sidebar/>
        {/* <Header/> */}
        <div className='dashcol'>
            <div className='d-flex dashpad space m-3'>
                <h4>Dashboard</h4>
                <p>home / Dashboard v1</p>
            </div>
            <div className='dashpad d-flex gap-3 pr-2 m-3 '>
                <Card style={{ width: '14.5rem' }}  className='cardcol1 cardtxtcol'>
                    <Card.Body className='main-card'>
                        
                        <Card.Title className='text-start m-2'><h2 className='fontwe'>150</h2></Card.Title>
                        <Card.Text className='text-start m-2'>
                           New orders
                        </Card.Text>
                        <Card.Link>More info</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '14.5rem' }} className='cardcol2 cardtxtcol'>
                    <Card.Body className='main-card1'>
                        <Card.Title className='text-start m-2'><h2 className='fontwe'>53%</h2></Card.Title>
                        <Card.Text className='text-start m-2'>
                            Bounce Rate
                        </Card.Text>
                        <Card.Link href="#">More info</Card.Link>
                        
                    </Card.Body>
                </Card>

                <Card style={{ width: '14.5rem' }} className='cardcol3'>
                    <Card.Body className='main-card2'>
                        <Card.Title className='text-start m-2'><h2 className='fontwe'>44</h2></Card.Title>
                        <Card.Text className='text-start m-2'>
                            User Registrations 
                        </Card.Text>
                        <Card.Link href="#">More info</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '14.5rem' }} className='cardcol4 cardtxtcol'>
                    <Card.Body className='main-card3'>
                        <Card.Title className='text-start m-2'><h2 className='fontwe'>65</h2></Card.Title>
                        <Card.Text className='text-start m-2'>
                            Unique Visitors 
                        </Card.Text>
                        <Card.Link href="#">More info</Card.Link>
                        
                    </Card.Body>
                </Card>
            </div>
            </div>

        </>
    )
}

export default Dashboard
