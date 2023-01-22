import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

declare module '@gravity-ui/nodekit' {
    interface AppConfig {}

    interface AppContextParams {}
}

const nodekit = new NodeKit({
    config: {
        appPort: 3033,
    },
});

// function sleep(time: number) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, time);
//     });
// }

const app = new ExpressKit(nodekit, {
    'GET /': (req, res) => {
        req.ctx.log('pre-request');
        res.send('Hello World');
        req.ctx.log('post-request');
    },
});

app.run();
