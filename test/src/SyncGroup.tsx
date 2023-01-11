import * as React from 'react'

function SyncGroup(
    props: {
        children: any,
        singleChoice?: boolean,
        onChange?: Function,
        updateSyncData?: Function
    }) {

     
    return(<>{props.children}</>)
}

export {SyncGroup}