import {NodeKit} from '@gravity-ui/nodekit';
import * as path from 'path';

const nodekit = new NodeKit({
    configsPath: path.resolve(__dirname, 'configs'),
    config: {foo: 42},
});

declare module '@gravity-ui/nodekit' {
    interface AppConfig {
        foo: number;
    }

    interface AppContextParams {
        apiEndpoint: string;
        what: boolean;
    }
}

async function main() {
    await nodekit.ctx.call('my call', (cx) => {
        cx.log('call started!');
        cx.setTag('great-success', true);

        cx.call('my subcall', (c) => {
            c.log('subcall started');
            c.log('subcall ended');
        });

        cx.log('call ended');
    });
}

main().catch((e) => nodekit.ctx.logError('something broke', e));
