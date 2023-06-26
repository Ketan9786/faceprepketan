import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  "./Navbar.css"
import { Button } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { loading } from './Login';
export default function Navbar(props) {
  
  const [age, setAge] = React.useState('');
  const navigate = useNavigate();

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  }

    const handelClick = ()=>{
      enqueueSnackbar("LOGGED OUT SUCCESSFULLY", { variant: "success" });
    
      setTimeout(()=>{
        navigate('/');
    },500)

    }
  
  return (
    <div>  
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ bgcolor:'rgb(120, 180,193)'}}>
        <Toolbar className='classFlex'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            <div >
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label" sx={{color:'white'}}>All</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChangeSelect}
          autoWidth
          label="Age"
          sx={{color:'white'}}
          variant="standard"  
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} >Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22} >Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
          </Typography>
       
              <SearchIcon />
          <Button className="button"
                                variant="outline"
                                onClick={handelClick}> Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <SnackbarProvider /></div>
  );
}