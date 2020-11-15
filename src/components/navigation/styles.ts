import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles({
    appBar: {
        borderRadius: 5,
        background: '#fff',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)'
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
})