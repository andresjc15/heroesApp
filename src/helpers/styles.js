import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      overflow: 'hidden',
      position: 'sticky'
    },
    navText: {
      marginRight: theme.spacing(2),
      color: 'gray',
      '&:hover': {
        color: 'darkgray',
        textDecoration: 'none'
    },
        textDecoration: 'none'
      
    },
    title: {
      flexGrow: 1,
      display: 'flex',
      userSelect: 'none'
    },
  }));