"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodekit_1 = require("@gravity-ui/nodekit");
const path = __importStar(require("path"));
const nodekit = new nodekit_1.NodeKit({
    configsPath: path.resolve(__dirname, 'configs'),
    config: { foo: 42 },
});
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
