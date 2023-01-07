import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import TestApp from './test.app';
/* import SyncData from '@__ugo__/syncdata' */

ReactDom.createRoot(document.getElementById('root')!)
        .render(
            <React.StrictMode>
                <TestApp />
            </React.StrictMode>
        );