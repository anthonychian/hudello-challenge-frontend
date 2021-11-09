import { React, useState } from 'react'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {
        width: '100%',
    },
    reply: {
        textAlign: 'right'
    },
    input: {
        padding: '20px 0 20px 0',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    inputContainer: {
        width: '100%',
    },
    icon: {
        paddingLeft: '10px',
        fontSize: '40px',
        cursor: 'pointer'
    },
    header: {
        paddingTop: '30px'
    }
});

export default function MyName(props) {
    const classes = useStyles()

    // save state for current value of name (empty initially)
    const [formName, setFormName] = useState('')

    // change name state when input is changed
    const handleInput = (e) => {
        setFormName(e.target.value)
    }

    // sets name submission status to true when submit button is pressed
    function handleSubmit() {
        if (formName !== null && formName !== '') props.setSubmittedName(true)
    }

    return (
        <section className={classes.main}>
            <header>
              Hudello
            </header>
            <p>Welcome to our frontend coding challenge. Let's start off by introducing ourselves. I'm Hudello bot.</p>
            <br/>
            <br/>
            <b> What is your name? </b>
            {!props.submittedName && <section className={classes.inputContainer}>
                <div className={classes.input}>
                    <TextField
                        fullWidth
                        label="Start typing here" 
                        value={formName}
                        id="fullWidth" 
                        onChange={handleInput}
                    />
                    <SendIcon className={classes.icon} onClick={handleSubmit}>Submit</SendIcon>
                </div>
                
            </section>}
            {props.submittedName && 
            <section>
                <p className={classes.reply}>{formName}</p>
                <header className={classes.header}>Hudello</header>
                <p>Nice to meet you <b>{formName}</b>!</p>
                <p>Since this is your first time meeting me, let's say my birthday is today, {new Date().toDateString()}.</p>
                <br/>
                <b> When's your birthday? </b>
            </section>}
        </section>
    )
}
