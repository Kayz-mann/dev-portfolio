import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    marginTop: '50vh',
    fontSize: '300px',
    size: '125rem',
    color: '#000',
    
    
    '& > * + *': {
      marginLeft: theme.spacing(2),
      fontSize: '400px',
    },
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className="loader" />
    </div>
  );
}