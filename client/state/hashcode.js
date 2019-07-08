/* global location */
import { Machine } from 'xstate';

import Router from '../utils/router';


export default Machine({
    id: 'hashcode',
    initial: 'init',
    states: {
        init: {
            invoke: {
                id: 'initHashCode',
                src: async () => {
                    console.log('initHashCode', location.hash)
                    if (location.hash) {

                        const code = location.hash.substr(1)
                        Router.push(`/code?text=${code}`)
                    }
                },
                onDone: {
                    target: 'signed_in'
                },
                onError: {
                    target: 'signed_out'
                }
            }
        }
    }
});