import React from 'react'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PublicIcon from '@mui/icons-material/Public';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    alignItemsAndJustifyContent: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '25%',
    },
    container: {
        width: '100%',
        height: '100px',
    },
    icons: {
        fontSize:'3em',
    }
});
export default function Banner() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.alignItemsAndJustifyContent}>
                <EmojiPeopleIcon className={classes.icons} />
                <PublicIcon className={classes.icons} />
            </div>
        </div>
    )
}
