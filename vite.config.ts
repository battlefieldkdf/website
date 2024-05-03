import * as fs from 'fs/promises';
import * as child_process from 'child_process';
import { defineConfig, UserConfig } from 'vite';
import path from 'path';

import BasicSSLPlugin from '@vitejs/plugin-basic-ssl';
import VuePlugin from '@vitejs/plugin-vue';
import VuetifyPlugin from 'vite-plugin-vuetify';

const getPackageJSONVersion = async () => {
    const buf = await fs.readFile(path.join(__dirname, 'package.json'));
    const data = JSON.parse(buf.toString());
    return data.version ?? '0.0.0.0-UNKNOWN';
};

const getGitRef = async () => {
    try {
        const gitRef = child_process.execSync('git rev-parse HEAD').toString().trim().slice(0, 6);
        console.info(`gitref from CLI: ${gitRef}`);
        return gitRef;
    } catch (exc) {
        console.warn(`failed to get gitref from cli`, exc);
    }

    // Other methods of getting it?

    console.error('failed to get gitref');
    return 'commit-unknown';
};

const vuetifyDefaultThemes = async () => {
    const { createVuetify: getVuetify } = await import('./battlefieldkdf/styles/vuetify-loader');
    const vuetifyInstance = await getVuetify(true);
    return vuetifyInstance.theme.themes.value;
};

const buildConfig: () => Promise<UserConfig> = async () => ({
    appType: 'spa',
    root: '.',
    publicDir: path.join(__dirname, 'static'),

    resolve: {
        alias: {
            '@battlefieldkdf': '/battlefieldkdf',
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.css'],
    },

    define: {
        __VERSION__: JSON.stringify(await getPackageJSONVersion()),
        __GITREF__: JSON.stringify(await getGitRef()),
        __DEFAULT_THEMES__: JSON.stringify(await vuetifyDefaultThemes()),
    },

    css: {
        devSourcemap: true,
    },

    build: {
        outDir: './build',
        manifest: true,
        target: 'esnext',
    },

    server: {
        port: 8443,
        hmr: true,
    },

    plugins: [BasicSSLPlugin(), VuePlugin(), VuetifyPlugin()],
});

export default defineConfig(async () => buildConfig());
