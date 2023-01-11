import {
    Default,
    nestedChildren,
    addChangeEvent,
    dispatchHandler,
    nativeInputElement
} from './utils'
import { SyncDataProps, defaultSyncProps } from './SyncDataProps'
import * as React from 'react'

function SyncData(props: SyncDataProps) {
    
    /**
     * Default values
     */
    var defaults: Default = {
        data: {},
        elMeta: {},
        validate: function() {
            props.validate?.(this.data)
        },
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
    function updateSyncData(name: string, value: any, group: boolean, add: boolean) {
        let __n__= value;
        if(group) {
            __n__= state.data[name]
            if(__n__!= null) {
                if(__n__ instanceof Array) {
                    if(add)
                        __n__.push(value)
                    else __n__= __n__.filter((n)=> n !== value)
                }
                else if(typeof __n__=== 'string') {
                    if(add)
                        __n__= [__n__, value]
                    else __n__= null
                }
                else __n__= value
            }
            else __n__= value
        }
        state.data[name] = __n__ !== '' ? __n__: null
        // dispatch({})
    }

    /**
     * Use effect
     */
    React.useEffect(()=>{props.refData.current = state}, [state])

    /**
     * Recursive map on react children
     */
    const __children__= nestedChildren(
                            props.children, 
                            function(__c__: any) {
                                let __k__= __c__.props['data-sync'],
                                    __e__= state.data[__k__]
                                console.log(__k__)
                                if(__e__=== undefined) 
                                    state.data[__k__] = null
                                    
                                switch(__c__.type) {
                                    case 'input':
                                        __c__= nativeInputElement(__c__, updateSyncData)
                                        break
                                    //default: __c__= addChangeEvent(__c__, updateSyncData);
                                }
                                
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