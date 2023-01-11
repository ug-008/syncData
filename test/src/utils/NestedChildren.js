import React from 'react'
import { SyncGroup } from '../SyncGroup'
import { SyncIgnore } from '../SyncIgnore'

function NestedChildren(children, __fn__) {
    return React.Children.map(
        children, 
        function(__c__) {
            const __not__= !React.isValidElement(__c__)
            
            if(__not__)
                return __c__
            else if(__c__.type == SyncGroup) {
                console.log('I am a group of data')
                return __fn__(__c__)
            }
            // if(__c__.props.children)
            //     __c__= React.cloneElement(
            //                 __c__,
            //                 {children: NestedChildren(__c__.props.children, __fn__)}
            //             )
                        
            else if(__c__.props['data-sync']) return __fn__(__c__)
            else
                return __c__               
        }
    )
}
export const nestedChildren = NestedChildren;