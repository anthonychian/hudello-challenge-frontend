import { React, useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    alignItemsAndJustifyContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reply: {
        textAlign: 'right'
    },
    input: {
        padding: '20px 0 20px 0'
    },
    header: {
        paddingTop: '30px'
    }
});

export default function MyBirthday(props) {
    const classes = useStyles()

    // save state for current value of birthday (today's date initially)
    const [formBirthday, setFormBirthday] = useState(new Date());

    // sets birthday submission status to true when submit button is pressed
    function handleSubmit() {
        if (formBirthday.toDateString() !== "Invalid Date") {
            props.setSubmittedBirthday(true)
        }
    }

    return (
        <div>
            {props.submittedName && <div>
                {!props.submittedBirthday && <section>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                            <DatePicker
                                openTo="year"
                                views={['year', 'month', 'day']}
                                value={formBirthday}
                                onChange={(newValue) => {
                                    setFormBirthday(newValue);
                                  }}
                                renderInput={(params) => 
                                <TextField {...params} helperText={null} className={classes.input}/>}
                            />
                        </Stack>
                    </LocalizationProvider>
                    <div className={classes.alignItemsAndJustifyContent}>
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </div>
                </section>}
                {props.submittedBirthday && <section>
                    <p className={classes.reply}>{formBirthday.toDateString()}</p>
                    <header className={classes.header}>Hudello</header>
                    <p>
                        Now that I know you a little better;
                        <b> what are your pronous?</b>
                    </p>
                </section>}
            </div>}
        </div>
    );
}
