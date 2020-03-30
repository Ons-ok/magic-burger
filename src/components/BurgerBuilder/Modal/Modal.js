import React from 'react'
import classes from './Modal.module.css'


const modal = (props) => {







    return (
        <div>
            <div className={props.shouldShow ? classes.Backdrop : null}>


            </div>


            <div className={classes.Modal}
                //       style={{ opacity: props.shouldShow ? 1 : 0 }}
                style={{ transform: props.shouldShow ? 'translateY(0)' : 'translateY(-100vh)' }}

            >

                {props.children}
            </div>
        </div>
    )


}

export default modal