/* eslint-disable */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react/cjs/react.production.min';

function Home(props){
    const [products, setProducts] = useState([]);
    const [viewModal, setViewModal] = useState(false);
    const [viewData, setViewData] = useState({});
    const [userData, setUserData] = useState({});
    const [cartSize, setCartSize] = useState();
    const [cartClick, setCartClick] = useState(false);

    
    const dispatch = useDispatch();
    const cartVals = useSelector(state => state.cartVals);

    const server_url = global.config.server_url;
    
    useEffect(()=>{
        getProducts();
    },[]);
   
    const getProducts = async () => {
        let response = await axios.get(`${server_url}/products`);
        if(response instanceof Error){
            setProducts([])
        }
        else{
            setProducts(response.data)
        }
    }
    const addToCart = async (x) => {
        setCartClick(true);
        const payload = {
            userId : 'SRK003',
            cart : {
                pid : x,
                val : 1
            }
        }
        let response = await axios.post(`${server_url}/addcart`, payload);
        console.log(response.data)
        if(response.data){
            dispatch({type: 'Cart_Vals', payload : {size : cartVals.cartSize + 1}})
        }

    }

    return(
        <Fragment>
            <main role="main">

            <section className="jumbotron ">
                    
                    <div className="container text-center">
                    <h3 className="mytextcolor mb-5 mt-2 display-4">Available Products</h3>
                    <div className="row mt-0 ">
                    {
                        products.map((item, index) => {
                            return <Card className='col-md-3 m-2 p-3' key={index} style={{backgroundColor: "", border: '0',width: '13rem', height:'inherit'}}>
                                <Card.Img variant='top '  src={item.imageUrl} style={{ width : '10rem', height: '15rem'}} />
                                <Card.Body>
                                    <Card.Title className='lead mytextcolor'>{item.name}</Card.Title>
                                    <Card.Text>
                                        <span className='text-center text-primary'>{item.price}/-</span>
                                        
                                    </Card.Text>    
                                    <Button variant='outline-info me-3' onClick={()=>{setViewModal(true); setViewData(item)}}>view</Button>
                                    <Button variant='outline-success' onClick={()=>addToCart(item.pid)} >Buy</Button>
                                </Card.Body>    
                            </Card>
                        })
                    }
                    </div>
                </div>
                    </section>
            
            </main>
            <footer className='' style={{backgroundColor: 'lightsteelblue'}}>
                <div className='container'>
                    <span className=''>This site is an onlince e-commerce</span>
                </div>
            </footer>
        </Fragment>
    )
}

export default Home;