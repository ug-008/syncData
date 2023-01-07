import {
    nestedChildren,
    addChangeEvent,
    dispatchHandler
} from './utils'
import { SyncDataProps, defaultSyncProps } from './SyncDataProps'
import * as React from 'react'

function SyncData(props: SyncDataProps) {

    /**
     * Default values
     */
    var defaults: {[key: string]: any} = {
        data: {},
        validate: function() {
            props.validate?.(this.data)
        }
    }

    /**
     * Reducer
     */
    const [state, dispatch] = React.useReducer(dispatchHandler, defaults)

    /**
     * 
     * @param name Field name
     * @param value Field value
     */
    function updateSyncData(name: string, value: any) {
        state.data[name] = value;
        props.refData.current = state;
    }

    /**
     * Recursive map on react children
     */
    const __children__= nestedChildren(
                            props.children, 
                            function(__c__: any) {
                                __c__= addChangeEvent(__c__, updateSyncData)
                                return __c__
                            }
                        )

    return(
        <data>
            {__children__}
        </data>
    )

}

/**
 * Set default
 */
SyncData.defaultProps = defaultSyncProps

/**
 * Export SyncData
 */
export default SyncData