import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>({
    root: {
        margin: theme.spacing(3,0,2),
        textAlign: 'center',
        fontSize: 40,
        color: '#333',
        fontWeight: 600
    }
}))

export const Header = () => {
    const styles =  useStyles()
    return (
        <div>
            <Typography className={styles.root} component='h1' variant='h5'>The Ultimate Form</Typography>
        </div>
    )
}
