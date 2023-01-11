import * as React from 'react'
import { ChangeEvent } from './ChangeEvent'

class nativeInputEl {
    readonly __el__: any
    readonly updateSyncData: Function
    readonly __type__: string|undefined

    constructor(__el__: any, updateSyncData: Function) {
        this.__el__= __el__
        this.updateSyncData = updateSyncData;
        this.__type__= __el__.props.type
        switch(this.__type__) {
            case 'radio': 
                break
            case 'checkbox':
                break
        }
    }

    changeEvent(e: ChangeEvent) {
        this.updateSyncData(e.target.name, e.target.value)
    }


}


function nativeInputElement(__c__: any, updateSyncData: Function) {
    /**
     * Input type
     */
    var __type__= __c__.props.type
    /**
     * 
     */
    var [__s__, setChecked]= React.useState<boolean|string>()

    /**
     * 
     */
    const [__v__, setValue]= React.useState<string>()
    
    /**
     * onChange Event
     */
    const cbChangeEvent = (e: ChangeEvent)=> {
        let __v__= e.target.value,
            __s__= e.target.checked
        if(__v__) {
            updateSyncData(e.target.name, __v__, true, __s__)
        }
        else {
            updateSyncData(e.target.name, __s__, true)
        }
    }

    /**
     * onChange Event
     */
    const changeEvent = (e: ChangeEvent)=> {
        updateSyncData(e.target.name, e.target.value)
    }

    /**
     * 
     */
    switch(__type__) {
        case 'radio':
            __s__= __c__.props.checked||__c__.props.defaultChecked||false
            if(__s__) 
                updateSyncData(__c__.props.name, __c__.props.value)
            __c__= React.cloneElement(
                        __c__, 
                        {value:__c__.props.value, onChange: changeEvent}
                   )
            break
        case 'checkbox':
            __s__= __c__.props.checked||__c__.props.defaultChecked||false
            if(__s__) 
                updateSyncData(__c__.props.name, __c__.props.value||__s__, true, __s__)
            __c__= React.cloneElement(
                        __c__, 
                        {value:__c__.props.value, onChange: cbChangeEvent}
                   )
            break
        default: 
            __s__= __c__.props.value||__c__.props.defaultValue
            if(__s__) 
                updateSyncData(__c__.props.name, __c__.props.value)
            else if(__type__==='color')
                __s__= '#000000'
            else __s__= ''
            __c__= React.cloneElement(
                        __c__, 
                        {value:__s__, onChange: cbChangeEvent}
                   )
    }

    return __c__;

}

export {nativeInputElement}