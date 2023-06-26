import React, { useState } from "react";
import { Stack } from "@mui/material";
import WarningIcon from '@mui/icons-material/Warning';
import Login from "./Login";
import Navbar from "./Navbar";
import Card from "./Card";
import "./Home.css"
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import {loading} from "./Login"

const Home = (props) => {

    const [datas,setDatas]=useState(true);
    const [data, setData] = useState(loading);

  
    const handleDataChange = (childData) => {
        setData(childData);
      };
    
  
    return (
        <>
            {data ?
                
                
                (<> <Navbar />
                    <Card /> </>):(
                    <>
                        <SnackbarProvider />
                        <div className="homeflex">
                            <Stack spacing={2} className="form">
                                <div className="warning"> <div><WarningIcon sx={{ fontSize: 40, color: "red" }} /></div>You must log in to continue....@#$#@#$....</div>
                                <Login loading={datas}  onDataChange={handleDataChange} />
                            </Stack>
                        </div>

                    </>
                )

            }

        </>
    )
    
};

export default Home;