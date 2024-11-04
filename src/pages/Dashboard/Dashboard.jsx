import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../Dashboard/Module.css'

export default function Dashboard() 
{
  return (
        <>
            <section className='page-not-found'>
                <Container>
                    <Row>
                        <div className='dashboard-header'>
                            <a href='#'><img src='' className='img-fluid' alt=''/></a>                            
                            <div className='dashboard-menu'>
                                <ul>
                                  <li><a href="#">logout</a></li>
                                </ul>  
                            </div>
                        </div>
                        <div className='dashboard-wrapper'>
                            <div className='sidebar'>

                            </div>
                            <div className='content'>
                                
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
  )
}
