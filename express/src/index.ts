import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

declare module '@gravity-ui/nodekit' {
    interface AppConfig {}

    interface AppContextParams {}
}

const nodekit = new NodeKit({
    config: {
        appPort: 3033,

        appBeforeAuthMiddleware: [
            (req, _, next) => {
                req.ctx.log('before auth one');
                next();
            },
            (req, _, next) => {
                req.ctx.log('before auth two');
                next();
            },
        ],

        appAfterAuthMiddleware: [
            (req, _, next) => {
                req.ctx.log('before auth one');
                next();
            },
            (req, _, next) => {
                req.ctx.log('before auth two');
                next();
            },
        ],

        appAuthHandler: (req, _, next) => {
            req.ctx.log('AUTH METHOD!');
            next();
        },
    },
});

function sleep(time: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

const app = new ExpressKit(nodekit, {
    'GET /': {
        handler: (req, res) => {
            req.ctx.log('pre-controller');
            res.send(`Hello World! Auth policy is: "${req.routeInfo.authPolicy}"`);
            req.ctx.log('post-controller');
        },
        authHandler: (req, _, next) => {
            req.ctx.log('auth method override', {authPolicy: req.routeInfo.authPolicy});
            next();
        },
        beforeAuth: [
            async (req, _, next) => {
                await sleep(100);
                req.ctx.log('before auth (route)');
                next();
            },
        ],
        afterAuth: [
            (req, _, next) => {
                req.ctx.log('after auth (route)');
                next();
            },
        ],
    },
});

app.run();
