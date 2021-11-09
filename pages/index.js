import { React, useState } from 'react'
import MyName from '../components/MyName'
import MyBirthday from '../components/MyBirthday'
import MyGender from '../components/MyGender'
import Banner from '../components/Banner'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {  
      height: '100vh',
      width: '100vw', 
      minWidth: '300px',
      fontSize: '14px'
    },
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: '0',
    },
    body: {
        height: '700px',
        padding: '20px',
        borderRadius: '10px',
        border: `2px solid rgb(204, 204, 204)`,
        top: '100px',
        position: 'relative'
    },
    alignItemsAndJustifyContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
export default function Home() {
  const classes = useStyles()
  
  // save states for name, birthday, and submission status (false initially)
  const [submittedName, setSubmittedName] = useState(false)
  const [submittedBirthday, setSubmittedBirthday] = useState(false)
  const [submittedGender, setSubmittedGender] = useState(false)

  return (
    <section className={classes.main}>
      <div className={classes.container}>
          <section className={classes.body}>
            <MyName 
              submittedName={submittedName} 
              setSubmittedName={setSubmittedName}
            />
            <MyBirthday 
              submittedName={submittedName} 
              submittedBirthday={submittedBirthday}
              setSubmittedBirthday={setSubmittedBirthday}
            />
            <MyGender 
              submittedBirthday={submittedBirthday}
              submittedGender={submittedGender}
              setSubmittedGender={setSubmittedGender}
            />
          </section>
      </div>
      <Banner />
    </section>
  )
}
