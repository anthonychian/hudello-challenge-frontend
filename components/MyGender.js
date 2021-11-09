import { React, useState, useRef } from 'react'
import Button from '@mui/material/Button';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    selectionContainer: {
        borderRadius: '20px',
        border: `2px solid rgb(56, 38, 255)`,
        height: '250px'
    },
    selection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30px'
    },
    iconContainer: {
        margin: '10px',
        borderRadius: '5px',
        border: `2px solid rgb(204, 204, 204)`,
        height: '100px',
        width: '100px',
        '&:hover': {
        cursor: 'pointer'
        },
    },
    header: {
        paddingTop: '5px',
        textAlign: 'center'
    },
    textIcon: {
        textAlign: 'center'
    },
    icons: {
        color: 'black',
        height: '100%',
        width: '100%',
    },
    reply: {
        textAlign: 'right'
    },
});

export default function MyGender(props) {

    const classes = useStyles()
    
    // reference to each icon container 
    const firstIcon = useRef(null);
    const secondIcon = useRef(null);
    const thirdIcon = useRef(null);

    // save state for current value of gender (empty initially)
    const [formGender, setFormGender] = useState('')

    // save state for icon selection status (false initially)
    const [selected, setSelected] = useState(false)

    // changes gender state according to which icon container is clicked
    // changes border color of the icon container
    // sets selected state to true
    function handleClick(first, second, third, text) {
        if (first.current.style.border === "" || first.current.style.border === `2px solid rgb(204, 204, 204)`) {
            first.current.style.border = `2px solid rgb(56, 38, 255)`
            second.current.style.border = `2px solid rgb(204, 204, 204)`
            third.current.style.border = `2px solid rgb(204, 204, 204)`
            setFormGender(text)
            if (!selected) setSelected(true)
        }
    }

    // sets gender submission status to true when submit button is pressed
    function handleSubmit() {
        if (selected) props.setSubmittedGender(true)
    }

    return (
        <div>
            {props.submittedBirthday && <section>
                {!props.submittedGender && <section className={classes.selectionContainer}>
                    <header className={classes.header}>Select one</header>
                    <div className={classes.selection}>
                        <div ref={firstIcon} className={classes.iconContainer} onClick={() => {handleClick(firstIcon, secondIcon, thirdIcon, "He/Him")}} >
                            <MaleIcon className={classes.icons} />
                            <p className={classes.textIcon}>He/Him</p>
                        </div>
                        
                        <div ref={secondIcon} className={classes.iconContainer} onClick={() => {handleClick(secondIcon, firstIcon, thirdIcon,"She/Her")}} >
                            <FemaleIcon className={classes.icons} />
                            <p className={classes.textIcon}>She/Her</p>
                        </div>
                        
                        <div ref={thirdIcon}  className={classes.iconContainer} onClick={() => {handleClick(thirdIcon, firstIcon, secondIcon, "They/Them")}} >
                            <EmojiEmotionsIcon className={classes.icons} />
                            <p className={classes.textIcon}>They/Them</p>
                        </div>
                        
                    </div>
                    {selected && <div className={classes.button}>
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button> 
                    </div>}
                </section>}
                {props.submittedGender && <section>
                    <p className={classes.reply}>{formGender} </p>
                </section>}
            </section>}
        </div>
    )
}
