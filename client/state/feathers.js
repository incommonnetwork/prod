import feathers from '@feathersjs/feathers';
import auth from '@feathersjs/authentication-client';
import rest from '@feathersjs/rest-client';

let app = null;

async function init(req) {
    const app = feathers();
    // eslint-disable-line no-undef
    const fetch = req ? require('node-fetch') : fetch;
    const api = req ? `http://localhost${process.env.NODE_ENV === 'production' ? '' : ':3030'}` : undefined;
    const restClient = rest(api);
    app.configure(restClient.fetch(fetch));
    const authConfig = { storage: req ? undefined : localStorage }; // eslint-disable-line no-undef
    app.configure(auth(authConfig));


    return app;
}

export default async (req) => {
    if (!app) {
        app = await init(req);
    }
    return app;
};