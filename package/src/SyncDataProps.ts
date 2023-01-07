import * as React from 'react'

export interface SyncDataOptionalProps {
    cache?: boolean,
    children?: React.ReactNode,
    validate?: Function
}

export interface SyncDataProps extends SyncDataOptionalProps{
    refData: any
}

export const defaultSyncProps: SyncDataOptionalProps = {
    cache: false,
    validate: undefined
}