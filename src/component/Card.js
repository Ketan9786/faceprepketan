import * as React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./Card.css";
import { useEffect, useState } from "react";
let i = 0;
const Card = () => {

    const [arrData, setArrData] = useState([]);
    
    const [name, setName] = useState("");
    const [img, setImg] = useState("");


    useEffect(() => {
        performapicall();
        performapicall();
        performapicall();
        performapicall();
        performapicall();
    }, []);


    const performapicall = () => {
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => {
                // console.log(data.results)
                // console.log(data.results[0].name.first+ " "+data.results[0].name.last)
                // console.log(data.results[0].picture.large);
                arrData.push(data.results[0]);

                setName(data.results[0].name.first + " " + data.results[0].name.last);
                setImg(data.results[0].picture.large);
                // setArrData(arrData.concat(data.results[0]));


            }).catch(error => {
                console.log("error", error);
            })

    }

    // if(arrData.length<3){
    //     performapicall();
    // }



    const fetchMoreData = () => {

        setTimeout(() => {
            performapicall();
            performapicall();
            performapicall();
            performapicall();
        }, 1000)
    }
    // console.log(arrData);


      
    return (
        <>
            <div className='card'>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="md">
                        <Box sx={{ borderRadius:'30px', backgroundImage: 'repeating-linear-gradient(rgb(68, 163, 192), rgb(212, 212, 107) 10%, rgb(21, 124, 119) 100%)', height: '100%' }} >

                            <InfiniteScroll dataLength={arrData.length} next={fetchMoreData} hasMore="true" loader={<p>Loading...</p>}>
                                {arrData.map((item, index) => {

                                    return (
                                        <>

                                            <div key={index + 1} className="card-item">

                                                <div className="font-size">{item.name.first + " " + item.name.last}</div>


                                                <img src={item.picture.medium} alt="BigCo Inc. logo" />
                                            </div>
                                        </>

                                    )
                                })}
                            </InfiniteScroll>


                        </Box>
                    </Container>
                </React.Fragment>
            </div>
        </>
    )
}

export default Card;