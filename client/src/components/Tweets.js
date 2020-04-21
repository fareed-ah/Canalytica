import React from 'react';
import {List, Divider, Link,ListItem,ListItemText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

const tweets = [
 "Item 1",
 "Item 2",
 "Item 3",
 "Item 4"
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Tweets() {
  const classes = useStyles();
   const tweetItems =  tweets.map((tweet) =>
   <div>
    <ListItem text>
        <ListItemText primary= {tweet} />
    </ListItem>
    <Divider />
    </div>
    );
  return (
    <React.Fragment>
      <Title>Recent Posts</Title>

      <List component="ul" aria-label="secondary mailbox folders">
      
        {tweetItems}
        
       
      </List>

      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Load more
        </Link>
      </div>
    </React.Fragment>
  );
}
