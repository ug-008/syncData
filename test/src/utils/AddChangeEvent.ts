import * as React from 'react';

interface ChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    exit: boolean
}

function AddChangeEvent(__c__: any, updateSyncData: Function) {

    /**
     * 
     */
    const [value, setValue] = React.useState(
        __c__.props.value || 
        __c__.props.defaultValue || 
        ''
    )

    /**
     * Use effect to hook changes
     */
    React.useEffect(()=> updateSyncData?.(__c__.props.name, value), [value])

    /**
     * Defined element properties
     */
    const defOnChangeProp = __c__.props.onChange

    /**
     * 
     */
    __c__= React.cloneElement(
        __c__, 
        {
            value: value, 
            onChange: (e: ChangeEvent)=> {
                if(!e.exit) {
                    e.exit = true
                    setValue(e.target.value)
                    defOnChangeProp?.(e)
                }
            }
        }
    )

    return __c__

}

export const addChangeEvent = AddChangeEvent