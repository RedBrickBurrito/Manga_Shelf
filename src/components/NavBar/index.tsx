import "./index.css";
import * as React from "react";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import BookmarksIcon from '@mui/icons-material/Bookmarks';

/**
 * navigation bar elements
 * @returns NavigationBar UI elements
 */
const NavigationBar = () => {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navbar" position="static">
        <Toolbar variant="dense">
          <Link className="home-link" to="/home">
            <Typography className="header-text">
              Manga Shelf
            </Typography>
          </Link>
          <IconButton className="bookmars-btn"  onClick={()=>{
            history.push('/to-read-list');
          }}>
            <BookmarksIcon className="bookmars-icon"/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;