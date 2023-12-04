(()=>{var oe={4242:(e,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>C});var a=s(7537),i=s.n(a),d=s(3645),h=s.n(d),f=h()(i());f.push([e.id,`
#compute-grid[data-v-6c191c15] {
    display: grid;
    justify-content: left;
    grid-template-areas:
        'size vpc'
        'timeout volume';
    gap: 16px 24px;
}
#edit-compute-settings[data-v-6c191c15] {
    margin-top: 16px;
}
`,"",{version:3,sources:["webpack://./src/codecatalyst/vue/compute.vue"],names:[],mappings:";AA2JA;IACI,aAAa;IACb,qBAAqB;IACrB;;wBAEoB;IACpB,cAAc;AAClB;AACA;IACI,gBAAgB;AACpB",sourcesContent:[`<template>
    <div>
        <div id="compute-grid">
            <div id="size" style="grid-area: size">
                <div>
                    <span class="label-context soft">Compute</span>
                    <b>{{ instance.name }}</b
                    ><br />
                    {{ instance.specs }}
                </div>
                <button
                    type="button"
                    id="edit-size"
                    class="button-theme-secondary mt-8"
                    @click="$emit('editSettings', 'instanceType')"
                >
                    Edit Compute
                </button>
            </div>
            <div id="timeout" style="grid-area: timeout">
                <div>
                    <span class="label-context soft">Timeout</span>
                    <b>{{ timeout }}</b>
                </div>
                <button
                    type="button"
                    id="edit-timeout"
                    class="button-theme-secondary mt-8"
                    @click="$emit('editSettings', 'inactivityTimeoutMinutes')"
                >
                    Edit Timeout
                </button>
            </div>
            <div id="volume" style="grid-area: volume">
                <span class="label-context soft">Storage</span>
                <b>{{ storage }}</b>
                <p class="mt-0 mb-0" v-if="mode === 'update'">{{ readonlyText }}</p>
                <div v-else>
                    <button
                        type="button"
                        id="edit-storage"
                        class="button-theme-secondary mt-8"
                        @click="$emit('editSettings', 'persistentStorage')"
                    >
                        Edit Storage Size
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { WebviewClientFactory } from '../../webviews/client'
import saveData from '../../webviews/mixins/saveData'
import { createClass, createType } from '../../webviews/util'
import { DevEnvironmentSettings } from '../commands'
import { CodeCatalystConfigureWebview } from './configure/backend'
import { CodeCatalystCreateWebview } from './create/backend'

const client = WebviewClientFactory.create<CodeCatalystConfigureWebview | CodeCatalystCreateWebview>()

const DEFAULT_COMPUTE_SETTINGS = {
    inactivityTimeoutMinutes: 15,
    instanceType: 'dev.standard1.small',
    persistentStorage: { sizeInGiB: 16 },
}

export const VueModel = createClass(DEFAULT_COMPUTE_SETTINGS)

export default defineComponent({
    name: 'compute-panel',
    props: {
        modelValue: {
            type: createType(VueModel),
            default: new VueModel(),
        },
        mode: {
            type: String as PropType<'create' | 'update'>,
            default: 'update',
        },
    },
    data() {
        return {
            changed: {} as Record<keyof DevEnvironmentSettings, boolean>,
            readonlyText: "Can't be changed after creation.",
            descriptions: {} as Record<string, { name: string; specs: string } | undefined>,
            originalData: undefined as typeof this.modelValue | undefined,
        }
    },
    mixins: [saveData],
    created() {
        client.getAllInstanceDescriptions().then(desc => (this.descriptions = desc))
    },
    watch: {
        model(settings?: DevEnvironmentSettings) {
            if (settings === undefined || this.originalData === undefined) {
                return
            }

            for (const [k, v] of Object.entries(settings)) {
                // TODO: use deep compare instead of strict so storage size works
                this.changed[k as keyof DevEnvironmentSettings] =
                    this.originalData[k as keyof typeof this.originalData] !== v
            }
        },
        modelValue() {
            this.originalData ??= this.modelValue
        },
    },
    methods: {
        getNeedsRestartText(key: keyof DevEnvironmentSettings) {
            return this.mode === 'update' && this.changed[key] ? ' (needs restart)' : ''
        },
    },
    computed: {
        model() {
            return this.modelValue
        },
        instance() {
            const type = this.model.instanceType
            const desc = this.descriptions[type] ? { ...this.descriptions[type] } : { name: '', specs: '' }
            const suffix =
                this.getNeedsRestartText('instanceType') ||
                (type === DEFAULT_COMPUTE_SETTINGS.instanceType ? ' (default)' : '')

            desc.name = \`\${desc.name}\${suffix}\`

            return desc
        },
        timeout() {
            const time = this.model.inactivityTimeoutMinutes
            const timeDesc = \`\${time} minutes\`
            const suffix =
                this.getNeedsRestartText('inactivityTimeoutMinutes') ||
                (time === DEFAULT_COMPUTE_SETTINGS.inactivityTimeoutMinutes ? ' (default)' : '')

            return \`\${timeDesc}\${suffix}\`
        },
        storage() {
            const storage = this.model.persistentStorage.sizeInGiB
            const storageDesc = \`\${storage} GB\`
            const suffix = storage === DEFAULT_COMPUTE_SETTINGS.persistentStorage.sizeInGiB ? ' (default)' : ''

            return \`\${storageDesc}\${suffix}\`
        },
    },
    emits: {
        editSettings: (key: keyof DevEnvironmentSettings) => key !== undefined,
    },
})
<\/script>

<style scoped>
#compute-grid {
    display: grid;
    justify-content: left;
    grid-template-areas:
        'size vpc'
        'timeout volume';
    gap: 16px 24px;
}
#edit-compute-settings {
    margin-top: 16px;
}
</style>
`],sourceRoot:""}]);const C=f},397:(e,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>C});var a=s(7537),i=s.n(a),d=s(3645),h=s.n(d),f=h()(i());f.push([e.id,`
html[data-v-7b766e1c] {
    overflow-y: scroll;
}
body[data-v-7b766e1c] {
    padding-right: 12px;
}
#configure-header[data-v-7b766e1c] {
    padding: 16px 0 0 0;
    background-color: none;
    position: relative;
}
.notification[data-v-7b766e1c] {
    color: var(--vscode-notifications-foreground);
    background-color: var(--vscode-notifications-background);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 16px 0;
    padding: 12px;
    box-shadow: 2px 2px 8px #111111;
    position: sticky;
}
#notification-span[data-v-7b766e1c] {
    display: flex;
    justify-content: left;
    align-items: inherit;
    width: 100%;
    flex-grow: 0;
}
#restart-button[data-v-7b766e1c] {
    font-size: small;
    width: 100px;
    flex-grow: 1;
}
#info-notification-icon[data-v-7b766e1c] {
    color: var(--vscode-notificationsInfoIcon-foreground);
}
.slide-down-enter-active[data-v-7b766e1c] {
    transition: all 0.4s ease-in-out;
}
.slide-down-leave-active[data-v-7b766e1c] {
    transition: none;
}
.slide-down-enter-from[data-v-7b766e1c] {
    margin-bottom: -70px;
    transform: translateY(-70px);
    top: -70px;
}
.slide-down-enter-to[data-v-7b766e1c] {
    margin-bottom: 0px;
    top: 16px;
}
#restart-notification[data-v-7b766e1c] {
    z-index: 1;
    top: 16px;
}
`,"",{version:3,sources:["webpack://./src/codecatalyst/vue/configure/root.vue"],names:[],mappings:";AAkJA;IACI,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,6CAA6C;IAC7C,wDAAwD;IACxD,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,cAAc;IACd,aAAa;IACb,+BAA+B;IAC/B,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,oBAAoB;IACpB,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,qDAAqD;AACzD;AACA;IACI,gCAAgC;AACpC;AACA;IACI,gBAAgB;AACpB;AACA;IACI,oBAAoB;IACpB,4BAA4B;IAC5B,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,UAAU;IACV,SAAS;AACb",sourcesContent:[`<template>
    <div id="configure-header">
        <h2 style="display: inline">Settings for {{ devenvName }}</h2>
        <br />
    </div>
    <transition name="slide-down">
        <div id="restart-notification" class="notification" v-if="canRestart">
            <span id="notification-span">
                <span id="info-notification-icon" class="icon icon-lg icon-vscode-info mr-8"></span>
                <span>Restart your Dev Environment to update with changes.</span>
            </span>
            <button
                id="restart-button"
                type="button"
                class="button-theme-primary ml-16"
                :disabled="restarting"
                @click="restart()"
            >
                {{ restarting ? 'Restarting...' : 'Restart' }}
            </button>
        </div>
    </transition>
    <settings-panel id="summary-panel" title="Details">
        <summary-panel v-model="details" @edit-settings="editCompute"></summary-panel>
    </settings-panel>
    <settings-panel
        id="dev-file-panel"
        title="Devfile"
        description="Contains the definition to build your application libraries and toolchain. You can change the currently 
        configured definition file."
    >
        <devfile-panel :file-path="definitionFilePath"></devfile-panel>
    </settings-panel>

    <settings-panel
        id="compute-settings-panel"
        title="Dev Environment Configuration"
        description="All settings except Storage can be changed after creation."
    >
        <compute-panel v-model="compute" type="configure" @edit-settings="editCompute"></compute-panel>
    </settings-panel>
</template>

<script lang="ts">
import summaryPanel, { VueModel as DevEnvDetailsModel } from '../summary.vue'
import computePanel, { VueModel as ComputeModel } from '../compute.vue'
import settingsPanel from '../../../webviews/components/settingsPanel.vue'
import devfilePanel from '../devfile.vue'
import { defineComponent } from 'vue'
import { CodeCatalystConfigureWebview } from './backend'
import { WebviewClientFactory } from '../../../webviews/client'
import saveData from '../../../webviews/mixins/saveData'
import { Status } from '../../../shared/clients/devenvClient'
import { DevEnvironmentSettings } from '../../commands'

const client = WebviewClientFactory.create<CodeCatalystConfigureWebview>()

const model = {
    details: new DevEnvDetailsModel(),
    definitionFilePath: '',
    devenvUrl: '',
    devfileStatus: 'STABLE' as Status,
    compute: new ComputeModel(),
    restarting: false,
    needsRestart: false,
    branchUrl: '',
}

export default defineComponent({
    name: 'configure',
    components: {
        settingsPanel,
        devfilePanel,
        computePanel,
        summaryPanel,
    },
    mixins: [saveData],
    data() {
        return model
    },
    computed: {
        devenvName() {
            const alias = this.details.alias
            const branch = this.details.repositories[0]?.branchName

            return alias ?? branch ?? this.details.id
        },
        canRestart() {
            return (this.needsRestart || this.devfileStatus === 'CHANGED') && this.details.status === 'RUNNING'
        },

        // TODO(sijaden): add \`busy\` and then bind it to all components so they can disable things
    },
    created() {
        client.init().then(env => {
            this.details = env ? new DevEnvDetailsModel(env) : this.details
            this.compute = env ? new ComputeModel(env) : this.compute
        })

        client.onDidChangeDevfile(data => {
            this.devfileStatus = data.status ?? this.devfileStatus
        })

        if (!this.definitionFilePath) {
            client.getDevfileLocation().then(f => (this.definitionFilePath = f))
        }
    },
    methods: {
        async editCompute(key: keyof DevEnvironmentSettings) {
            const previous = this.compute[key as Exclude<typeof key, 'alias'>]
            const current = { ...this.compute, alias: this.details.alias }
            const resp = await client.editSetting(current, key)

            if (key !== 'alias') {
                this.needsRestart = this.needsRestart || previous !== resp[key]
                this.compute = new ComputeModel(resp)
            } else if (resp.alias) {
                this.details.alias = resp.alias
                await client.updateDevEnv(this.details, { alias: this.details.alias })
            }
        },
        async restart() {
            this.restarting = true
            try {
                if (this.devfileStatus === 'CHANGED' && !this.needsRestart) {
                    return await client.updateDevfile(this.definitionFilePath)
                }

                // SDK rejects extraneous fields
                const resp = await client.updateDevEnv(this.details, {
                    instanceType: this.compute.instanceType,
                    inactivityTimeoutMinutes: this.compute.inactivityTimeoutMinutes,
                    // persistentStorage: this.compute.persistentStorage,
                })

                this.restarting = !!resp
            } catch {
                this.restarting = false
                client.showLogsMessage('Unable to update the dev Environment. View the logs for more information')
            }
        },
    },
})
<\/script>

<style scoped>
html {
    overflow-y: scroll;
}
body {
    padding-right: 12px;
}
#configure-header {
    padding: 16px 0 0 0;
    background-color: none;
    position: relative;
}
.notification {
    color: var(--vscode-notifications-foreground);
    background-color: var(--vscode-notifications-background);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 16px 0;
    padding: 12px;
    box-shadow: 2px 2px 8px #111111;
    position: sticky;
}
#notification-span {
    display: flex;
    justify-content: left;
    align-items: inherit;
    width: 100%;
    flex-grow: 0;
}
#restart-button {
    font-size: small;
    width: 100px;
    flex-grow: 1;
}
#info-notification-icon {
    color: var(--vscode-notificationsInfoIcon-foreground);
}
.slide-down-enter-active {
    transition: all 0.4s ease-in-out;
}
.slide-down-leave-active {
    transition: none;
}
.slide-down-enter-from {
    margin-bottom: -70px;
    transform: translateY(-70px);
    top: -70px;
}
.slide-down-enter-to {
    margin-bottom: 0px;
    top: 16px;
}
#restart-notification {
    z-index: 1;
    top: 16px;
}
</style>
`],sourceRoot:""}]);const C=f},8069:(e,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>C});var a=s(7537),i=s.n(a),d=s(3645),h=s.n(d),f=h()(i());f.push([e.id,`
#summary-grid[data-v-1cf5742c] {
    display: grid;
    justify-content: left;
    grid-template-areas:
        'alias branch'
        'status project';
    gap: 16px 160px;
}
#edit-compute-settings[data-v-1cf5742c] {
    margin-top: 16px;
}

/* TODO: darker green for light-theme ??? */
#status[data-connected='true'][data-v-1cf5742c] {
    color: var(--vscode-testing-iconPassed);
}
#connected-icon[data-v-1cf5742c] {
    padding: 4px;
    vertical-align: -0.2em;
}
#stop-icon[data-v-1cf5742c] {
    color: var(--vscode-debugIcon-stopForeground);
    margin-right: 5px;
    vertical-align: -0.2em;
}
`,"",{version:3,sources:["webpack://./src/codecatalyst/vue/summary.vue"],names:[],mappings:";AAuIA;IACI,aAAa;IACb,qBAAqB;IACrB;;wBAEoB;IACpB,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;;AAEA,2CAA2C;AAC3C;IACI,uCAAuC;AAC3C;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;AAEA;IACI,6CAA6C;IAC7C,iBAAiB;IACjB,sBAAsB;AAC1B",sourcesContent:[`<template>
    <div>
        <div id="summary-grid">
            <div id="alias" style="grid-area: alias">
                <span class="label-context soft">Alias</span>
                <b class="mb-8" style="display: block" v-if="!!summary.alias">
                    {{ summary.alias }}
                </b>
                <button
                    id="edit-alias"
                    class="button-theme-secondary"
                    type="button"
                    :disabled="!isConnected"
                    @click="$emit('editSettings', 'alias')"
                >
                    {{ summary.alias ? 'Edit Alias' : 'Add Alias' }}
                </button>
            </div>
            <!--TODO: render something here if branch is missing-->
            <div id="branch" style="grid-area: branch" v-if="!!branchName">
                <span class="label-context soft">Branch</span>
                <b class="mb-8" style="display: block">{{ branchName }}</b>
                <button class="button-theme-secondary" @click="openBranch">
                    <!--TODO: support 3P links?-->
                    Open Branch in CodeCatalyst
                </button>
            </div>
            <div id="project" style="grid-area: project">
                <span class="label-context soft">Project</span>
                <b>{{ summary.project.name }}</b>
            </div>
            <div id="status" style="grid-area: status" :data-connected="isConnected">
                <span class="label-context soft">Status</span>
                <b>
                    <span id="connected-icon" class="icon icon-lg icon-vscode-pass" v-if="isConnected"></span>
                    <span v-html="isConnected ? 'Connected' : status"></span>
                </b>
            </div>
        </div>
        <button
            id="toggle-state"
            class="button-theme-secondary mt-8"
            type="button"
            :disabled="!isConnected"
            @click="stopDevEnv"
        >
            <span id="stop-icon" class="icon icon-lg icon-vscode-stop-circle"></span>Stop
        </button>
        <!--TODO: add generic 'delete thing' prompt then enable this-->
        <button
            id="delete-devenv"
            class="button-theme-secondary ml-8 mt-8"
            type="button"
            :disabled="!isConnected"
            @click="deleteDevEnv"
            v-show="false"
        >
            Delete Dev Environment
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { WebviewClientFactory } from '../../webviews/client'
import { createClass, createType } from '../../webviews/util'
import { CodeCatalystConfigureWebview } from './configure/backend'
import { DevEnvironment } from '../../shared/clients/codecatalystClient'

const client = WebviewClientFactory.create<CodeCatalystConfigureWebview>()

type PartialModel = Pick<DevEnvironment, 'alias' | 'org' | 'project' | 'repositories' | 'status' | 'id'>
export const VueModel = createClass<PartialModel>({
    org: { name: '' },
    project: { name: '' },
    repositories: [],
    status: '',
    id: '',
})

export default defineComponent({
    name: 'devenv-summary',
    props: {
        modelValue: {
            type: createType(VueModel),
            required: true,
        },
    },
    emits: {
        editSettings: (key: 'alias') => key !== undefined,
        'update:modelValue': (model: PartialModel) => model !== undefined,
    },
    computed: {
        status() {
            return this.summary.status.charAt(0).concat(this.summary.status.slice(1).toLowerCase())
        },
        isConnected() {
            return this.summary.status === 'RUNNING'
        },
        summary() {
            return this.modelValue
        },
        branchName() {
            return this.summary.repositories[0]?.branchName
        },
    },
    methods: {
        update<K extends keyof PartialModel>(key: K, value: PartialModel[K]) {
            this.$emit('update:modelValue', { ...this.modelValue, [key]: value })
        },
        // Need to move these two remote calls up into the root component.
        async stopDevEnv() {
            try {
                this.update('status', 'STOPPING')
                await client.stopDevEnv(this.summary)
            } catch {
                this.update('status', 'RUNNING')
            }
        },
        async deleteDevEnv() {
            try {
                this.update('status', 'DELETING')
                await client.deleteDevEnv(this.summary)
            } catch {
                this.update('status', 'RUNNING')
            }
        },
        async openBranch() {
            return client.openBranch()
        },
    },
})
<\/script>

<style scoped>
#summary-grid {
    display: grid;
    justify-content: left;
    grid-template-areas:
        'alias branch'
        'status project';
    gap: 16px 160px;
}
#edit-compute-settings {
    margin-top: 16px;
}

/* TODO: darker green for light-theme ??? */
#status[data-connected='true'] {
    color: var(--vscode-testing-iconPassed);
}

#connected-icon {
    padding: 4px;
    vertical-align: -0.2em;
}

#stop-icon {
    color: var(--vscode-debugIcon-stopForeground);
    margin-right: 5px;
    vertical-align: -0.2em;
}
</style>
`],sourceRoot:""}]);const C=f},4047:(e,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>C});var a=s(7537),i=s.n(a),d=s(3645),h=s.n(d),f=h()(i());f.push([e.id,`
.preload-transition[data-v-5e540a72] {
    transition: none !important;
}
.settings-title[data-v-5e540a72] {
    font-size: calc(1.1 * var(--vscode-font-size)); /* TODO: make this configurable */
    font-weight: bold;
    margin: 0;
    padding: 0;
}
.sub-pane[data-v-5e540a72] {
    transition: max-height 0.5s, padding 0.5s;
    padding: 1rem;
    overflow: hidden;
}
[data-v-5e540a72] .sub-pane div:first-child {
    margin-top: 0;
}
.collapse-leave-from[data-v-5e540a72] {
    max-height: var(--max-height);
}
.collapse-leave-active[data-v-5e540a72] {
    transition: max-height 0.5s, visibility 0.5s, padding 0.5s;
    visibility: hidden;
    padding: 0 1rem;
    max-height: 0;
}
.collapse-enter-active[data-v-5e540a72] {
    transition: max-height 0.5s, padding 0.5s;
    max-height: 0;
    padding: 0 1rem;
}
.collapse-enter-to[data-v-5e540a72] {
    max-height: var(--max-height);
    padding: 1rem;
}
.collapse-button[data-v-5e540a72] {
    display: none;
}
input[type='checkbox'] ~ label .collapse-button[data-v-5e540a72] {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: -4px 0 0 0;
    padding: 0;
    font-size: 2em;
    opacity: 0.8;
    color: var(--vscode-foreground);
    transition: transform 0.5s;
    transform: rotate(180deg);
    text-align: right;
}
input[type='checkbox']:checked ~ label .collapse-button[data-v-5e540a72] {
    transform: rotate(90deg);
}
.settings-panel[data-v-5e540a72] {
    background: var(--vscode-menu-background);
    margin: 16px 0;
}
.panel-header[data-v-5e540a72] {
    display: flex;
    align-items: center;
    width: 100%;
}
`,"",{version:3,sources:["webpack://./src/webviews/components/settingsPanel.vue"],names:[],mappings:";AA4FA;IACI,2BAA2B;AAC/B;AACA;IACI,8CAA8C,EAAE,iCAAiC;IACjF,iBAAiB;IACjB,SAAS;IACT,UAAU;AACd;AACA;IACI,yCAAyC;IACzC,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,0DAA0D;IAC1D,kBAAkB;IAClB,eAAe;IACf,aAAa;AACjB;AACA;IACI,yCAAyC;IACzC,aAAa;IACb,eAAe;AACnB;AACA;IACI,6BAA6B;IAC7B,aAAa;AACjB;AAEA;IACI,aAAa;AACjB;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,cAAc;IACd,YAAY;IACZ,+BAA+B;IAC/B,0BAA0B;IAC1B,yBAAyB;IACzB,iBAAiB;AACrB;AAEA;IACI,wBAAwB;AAC5B;AAEA;IACI,yCAAyC;IACzC,cAAc;AAClB;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf",sourcesContent:[`/*! * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. * SPDX-License-Identifier: Apache-2.0 */

<template>
    <div :id="id" class="settings-panel">
        <div class="header">
            <input
                v-bind:id="buttonId"
                style="display: none"
                type="checkbox"
                v-if="collapseable || startCollapsed"
                v-model="collapsed"
            />
            <label :for="buttonId" class="panel-header">
                <i class="preload-transition collapse-button icon icon-vscode-chevron-up" ref="icon"></i>
                <span class="settings-title">{{ title }}</span>
            </label>
            <p class="soft no-spacing mt-8">{{ description }}</p>
        </div>
        <transition
            @enter="updateHeight"
            @beforeLeave="updateHeight"
            :name="collapseable || startCollapsed ? 'collapse' : ''"
        >
            <div ref="subPane" v-show="!collapsed" class="sub-pane">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { WebviewApi } from 'vscode-webview'
import { defineComponent } from 'vue'
import saveData from '../mixins/saveData'

declare const vscode: WebviewApi<{ [key: string]: VueModel }>

let count = 0

interface VueModel {
    collapsed: boolean
    buttonId: string
    lastHeight?: number
    subPane?: HTMLElement
}

/**
 * Settings panel is header + body, which may be collapseable
 */
export default defineComponent({
    name: 'settings-panel',
    props: {
        id: String,
        startCollapsed: Boolean,
        collapseable: Boolean,
        title: String,
        description: String,
    },
    data() {
        count += 1
        return {
            collapsed: this.$props.startCollapsed ?? false,
            buttonId: \`settings-panel-button-\${count}\`,
            lastHeight: undefined,
        } as VueModel
    },
    mixins: [saveData],
    methods: {
        updateHeight(el: Element & { style?: CSSStyleDeclaration }) {
            if (el.style) {
                this.lastHeight = el.scrollHeight
                el.style.setProperty('--max-height', \`\${this.lastHeight}px\`)
            }
        },
    },
    mounted() {
        this.subPane = this.$refs.subPane as HTMLElement | undefined
        this.lastHeight = this.collapsed ? this.lastHeight : this.subPane?.scrollHeight ?? this.lastHeight

        // TODO: write 'initial-style' as a directive
        // it will force a style until the first render
        // or just use Vue's transition element, but this is pretty heavy
        this.$nextTick(() => {
            setTimeout(() => {
                ;(this.$refs.icon as HTMLElement | undefined)?.classList.remove('preload-transition')
            }, 100)
        })
    },
})
<\/script>

<style scoped>
.preload-transition {
    transition: none !important;
}
.settings-title {
    font-size: calc(1.1 * var(--vscode-font-size)); /* TODO: make this configurable */
    font-weight: bold;
    margin: 0;
    padding: 0;
}
.sub-pane {
    transition: max-height 0.5s, padding 0.5s;
    padding: 1rem;
    overflow: hidden;
}
:deep(.sub-pane div:first-child) {
    margin-top: 0;
}
.collapse-leave-from {
    max-height: var(--max-height);
}
.collapse-leave-active {
    transition: max-height 0.5s, visibility 0.5s, padding 0.5s;
    visibility: hidden;
    padding: 0 1rem;
    max-height: 0;
}
.collapse-enter-active {
    transition: max-height 0.5s, padding 0.5s;
    max-height: 0;
    padding: 0 1rem;
}
.collapse-enter-to {
    max-height: var(--max-height);
    padding: 1rem;
}

.collapse-button {
    display: none;
}

input[type='checkbox'] ~ label .collapse-button {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: -4px 0 0 0;
    padding: 0;
    font-size: 2em;
    opacity: 0.8;
    color: var(--vscode-foreground);
    transition: transform 0.5s;
    transform: rotate(180deg);
    text-align: right;
}

input[type='checkbox']:checked ~ label .collapse-button {
    transform: rotate(90deg);
}

.settings-panel {
    background: var(--vscode-menu-background);
    margin: 16px 0;
}

.panel-header {
    display: flex;
    align-items: center;
    width: 100%;
}
</style>
`],sourceRoot:""}]);const C=f},3645:e=>{"use strict";e.exports=function(o){var s=[];return s.toString=function(){return this.map(function(i){var d="",h=typeof i[5]<"u";return i[4]&&(d+="@supports (".concat(i[4],") {")),i[2]&&(d+="@media ".concat(i[2]," {")),h&&(d+="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {")),d+=o(i),h&&(d+="}"),i[2]&&(d+="}"),i[4]&&(d+="}"),d}).join("")},s.i=function(i,d,h,f,C){typeof i=="string"&&(i=[[null,i,void 0]]);var w={};if(h)for(var N=0;N<this.length;N++){var P=this[N][0];P!=null&&(w[P]=!0)}for(var T=0;T<i.length;T++){var v=[].concat(i[T]);h&&w[v[0]]||(typeof C<"u"&&(typeof v[5]>"u"||(v[1]="@layer".concat(v[5].length>0?" ".concat(v[5]):""," {").concat(v[1],"}")),v[5]=C),d&&(v[2]&&(v[1]="@media ".concat(v[2]," {").concat(v[1],"}")),v[2]=d),f&&(v[4]?(v[1]="@supports (".concat(v[4],") {").concat(v[1],"}"),v[4]=f):v[4]="".concat(f)),s.push(v))}},s}},7537:e=>{"use strict";e.exports=function(o){var s=o[1],a=o[3];if(!a)return s;if(typeof btoa=="function"){var i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),h="/*# ".concat(d," */");return[s].concat([h]).join(`
`)}return[s].join(`
`)}},3744:(e,o)=>{"use strict";var s;s={value:!0},o.Z=(a,i)=>{const d=a.__vccOpts||a;for(const[h,f]of i)d[h]=f;return d}},7087:(e,o,s)=>{var a=s(4242);a.__esModule&&(a=a.default),typeof a=="string"&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var i=s(5346).Z,d=i("c6664002",a,!1,{})},4702:(e,o,s)=>{var a=s(397);a.__esModule&&(a=a.default),typeof a=="string"&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var i=s(5346).Z,d=i("3656d537",a,!1,{})},2459:(e,o,s)=>{var a=s(8069);a.__esModule&&(a=a.default),typeof a=="string"&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var i=s(5346).Z,d=i("f193de7a",a,!1,{})},3469:(e,o,s)=>{var a=s(4047);a.__esModule&&(a=a.default),typeof a=="string"&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var i=s(5346).Z,d=i("c17362a6",a,!1,{})},5346:(e,o,s)=>{"use strict";s.d(o,{Z:()=>Z});function a(r,m){for(var p=[],c={},l=0;l<m.length;l++){var E=m[l],g=E[0],I=E[1],S=E[2],k=E[3],B={id:r+":"+l,css:I,media:S,sourceMap:k};c[g]?c[g].parts.push(B):p.push(c[g]={id:g,parts:[B]})}return p}var i=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},h=i&&(document.head||document.getElementsByTagName("head")[0]),f=null,C=0,w=!1,N=function(){},P=null,T="data-vue-ssr-id",v=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function Z(r,m,p,c){w=p,P=c||{};var l=a(r,m);return W(l),function(g){for(var I=[],S=0;S<l.length;S++){var k=l[S],B=d[k.id];B.refs--,I.push(B)}g?(l=a(r,g),W(l)):l=[];for(var S=0;S<I.length;S++){var B=I[S];if(B.refs===0){for(var V=0;V<B.parts.length;V++)B.parts[V]();delete d[B.id]}}}}function W(r){for(var m=0;m<r.length;m++){var p=r[m],c=d[p.id];if(c){c.refs++;for(var l=0;l<c.parts.length;l++)c.parts[l](p.parts[l]);for(;l<p.parts.length;l++)c.parts.push(H(p.parts[l]));c.parts.length>p.parts.length&&(c.parts.length=p.parts.length)}else{for(var E=[],l=0;l<p.parts.length;l++)E.push(H(p.parts[l]));d[p.id]={id:p.id,refs:1,parts:E}}}}function z(){var r=document.createElement("style");return r.type="text/css",h.appendChild(r),r}function H(r){var m,p,c=document.querySelector("style["+T+'~="'+r.id+'"]');if(c){if(w)return N;c.parentNode.removeChild(c)}if(v){var l=C++;c=f||(f=z()),m=F.bind(null,c,l,!1),p=F.bind(null,c,l,!0)}else c=z(),m=J.bind(null,c),p=function(){c.parentNode.removeChild(c)};return m(r),function(g){if(g){if(g.css===r.css&&g.media===r.media&&g.sourceMap===r.sourceMap)return;m(r=g)}else p()}}var X=function(){var r=[];return function(m,p){return r[m]=p,r.filter(Boolean).join(`
`)}}();function F(r,m,p,c){var l=p?"":c.css;if(r.styleSheet)r.styleSheet.cssText=X(m,l);else{var E=document.createTextNode(l),g=r.childNodes;g[m]&&r.removeChild(g[m]),g.length?r.insertBefore(E,g[m]):r.appendChild(E)}}function J(r,m){var p=m.css,c=m.media,l=m.sourceMap;if(c&&r.setAttribute("media",c),P.ssrId&&r.setAttribute(T,m.id),l&&(p+=`
/*# sourceURL=`+l.sources[0]+" */",p+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),r.styleSheet)r.styleSheet.cssText=p;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(p))}}}},ee={};function b(e){var o=ee[e];if(o!==void 0)return o.exports;var s=ee[e]={id:e,exports:{}};return oe[e](s,s.exports,b),s.exports}b.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return b.d(o,{a:o}),o},b.d=(e,o)=>{for(var s in o)b.o(o,s)&&!b.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})},b.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),b.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var j={};(()=>{"use strict";b.r(j);const e=Vue,o=t=>((0,e.pushScopeId)("data-v-7b766e1c"),t=t(),(0,e.popScopeId)(),t),s={id:"configure-header"},a={style:{display:"inline"}},i=o(()=>(0,e.createElementVNode)("br",null,null,-1)),d={key:0,id:"restart-notification",class:"notification"},h=o(()=>(0,e.createElementVNode)("span",{id:"notification-span"},[(0,e.createElementVNode)("span",{id:"info-notification-icon",class:"icon icon-lg icon-vscode-info mr-8"}),(0,e.createElementVNode)("span",null,"Restart your Dev Environment to update with changes.")],-1)),f=["disabled"];function C(t,n,u,_,y,D){const A=(0,e.resolveComponent)("summary-panel"),M=(0,e.resolveComponent)("settings-panel"),L=(0,e.resolveComponent)("devfile-panel"),q=(0,e.resolveComponent)("compute-panel");return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createElementVNode)("div",s,[(0,e.createElementVNode)("h2",a,"Settings for "+(0,e.toDisplayString)(t.devenvName),1),i]),(0,e.createVNode)(e.Transition,{name:"slide-down"},{default:(0,e.withCtx)(()=>[t.canRestart?((0,e.openBlock)(),(0,e.createElementBlock)("div",d,[h,(0,e.createElementVNode)("button",{id:"restart-button",type:"button",class:"button-theme-primary ml-16",disabled:t.restarting,onClick:n[0]||(n[0]=O=>t.restart())},(0,e.toDisplayString)(t.restarting?"Restarting...":"Restart"),9,f)])):(0,e.createCommentVNode)("v-if",!0)]),_:1}),(0,e.createVNode)(M,{id:"summary-panel",title:"Details"},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(A,{modelValue:t.details,"onUpdate:modelValue":n[1]||(n[1]=O=>t.details=O),onEditSettings:t.editCompute},null,8,["modelValue","onEditSettings"])]),_:1}),(0,e.createVNode)(M,{id:"dev-file-panel",title:"Devfile",description:`Contains the definition to build your application libraries and toolchain. You can change the currently 
        configured definition file.`},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(L,{"file-path":t.definitionFilePath},null,8,["file-path"])]),_:1}),(0,e.createVNode)(M,{id:"compute-settings-panel",title:"Dev Environment Configuration",description:"All settings except Storage can be changed after creation."},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(q,{modelValue:t.compute,"onUpdate:modelValue":n[2]||(n[2]=O=>t.compute=O),type:"configure",onEditSettings:t.editCompute},null,8,["modelValue","onEditSettings"])]),_:1})],64)}const w=t=>((0,e.pushScopeId)("data-v-1cf5742c"),t=t(),(0,e.popScopeId)(),t),N={id:"summary-grid"},P={id:"alias",style:{"grid-area":"alias"}},T=w(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Alias",-1)),v={key:0,class:"mb-8",style:{display:"block"}},Z=["disabled"],W={key:0,id:"branch",style:{"grid-area":"branch"}},z=w(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Branch",-1)),H={class:"mb-8",style:{display:"block"}},X={id:"project",style:{"grid-area":"project"}},F=w(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Project",-1)),J=["data-connected"],r=w(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Status",-1)),m={key:0,id:"connected-icon",class:"icon icon-lg icon-vscode-pass"},p=["innerHTML"],c=["disabled"],l=w(()=>(0,e.createElementVNode)("span",{id:"stop-icon",class:"icon icon-lg icon-vscode-stop-circle"},null,-1)),E=["disabled"];function g(t,n,u,_,y,D){return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.createElementVNode)("div",N,[(0,e.createElementVNode)("div",P,[T,t.summary.alias?((0,e.openBlock)(),(0,e.createElementBlock)("b",v,(0,e.toDisplayString)(t.summary.alias),1)):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("button",{id:"edit-alias",class:"button-theme-secondary",type:"button",disabled:!t.isConnected,onClick:n[0]||(n[0]=A=>t.$emit("editSettings","alias"))},(0,e.toDisplayString)(t.summary.alias?"Edit Alias":"Add Alias"),9,Z)]),(0,e.createCommentVNode)("TODO: render something here if branch is missing"),t.branchName?((0,e.openBlock)(),(0,e.createElementBlock)("div",W,[z,(0,e.createElementVNode)("b",H,(0,e.toDisplayString)(t.branchName),1),(0,e.createElementVNode)("button",{class:"button-theme-secondary",onClick:n[1]||(n[1]=(...A)=>t.openBranch&&t.openBranch(...A))},[(0,e.createCommentVNode)("TODO: support 3P links?"),(0,e.createTextVNode)(" Open Branch in CodeCatalyst ")])])):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("div",X,[F,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(t.summary.project.name),1)]),(0,e.createElementVNode)("div",{id:"status",style:{"grid-area":"status"},"data-connected":t.isConnected},[r,(0,e.createElementVNode)("b",null,[t.isConnected?((0,e.openBlock)(),(0,e.createElementBlock)("span",m)):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("span",{innerHTML:t.isConnected?"Connected":t.status},null,8,p)])],8,J)]),(0,e.createElementVNode)("button",{id:"toggle-state",class:"button-theme-secondary mt-8",type:"button",disabled:!t.isConnected,onClick:n[2]||(n[2]=(...A)=>t.stopDevEnv&&t.stopDevEnv(...A))},[l,(0,e.createTextVNode)("Stop ")],8,c),(0,e.createCommentVNode)("TODO: add generic 'delete thing' prompt then enable this"),(0,e.withDirectives)((0,e.createElementVNode)("button",{id:"delete-devenv",class:"button-theme-secondary ml-8 mt-8",type:"button",disabled:!t.isConnected,onClick:n[3]||(n[3]=(...A)=>t.deleteDevEnv&&t.deleteDevEnv(...A))}," Delete Dev Environment ",8,E),[[e.vShow,!1]])])}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class I{static registerGlobalCommands(){const n=new Event("remount");window.addEventListener("message",u=>{const{command:_}=u.data;_==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(y=>this.removeListener(y)),window.dispatchEvent(n))})}static addListener(n){this.messageListeners.add(n),window.addEventListener("message",n)}static removeListener(n){this.messageListeners.delete(n),window.removeEventListener("message",n)}static sendRequest(n,u,_){const y=JSON.parse(JSON.stringify(_)),D=new Promise((A,M)=>{const L=O=>{const U=O.data;if(n===U.id)if(this.removeListener(L),window.clearTimeout(q),U.error===!0){const ze=JSON.parse(U.data);M(new Error(ze.message))}else U.event?(typeof _[0]!="function"&&M(new Error(`Expected frontend event handler to be a function: ${u}`)),A(this.registerEventHandler(u,_[0]))):A(U.data)},q=setTimeout(()=>{this.removeListener(L),M(new Error(`Timed out while waiting for response: id: ${n}, command: ${u}`))},3e5);this.addListener(L)});return vscode.postMessage({id:n,command:u,data:y}),D}static registerEventHandler(n,u){const _=y=>{const D=y.data;if(D.command===n){if(!D.event)throw new Error(`Expected backend handler to be an event emitter: ${n}`);u(D.data)}};return this.addListener(_),{dispose:()=>this.removeListener(_)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(n,u)=>{if(typeof u!="string"){console.warn(`Tried to index webview client with non-string property: ${String(u)}`);return}if(u==="init"){const y=vscode.getState()??{};if(y.__once)return()=>Promise.resolve();vscode.setState(Object.assign(y,{__once:!0}))}const _=(this.counter++).toString();return(...y)=>this.sendRequest(_,u,y)}})}}I.counter=0,I.initialized=!1,I.messageListeners=new Set;/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function S(t){return class{constructor(n={}){Object.assign(this,t,n)}}}function k(t){return Object}const B=I.create(),V=S({org:{name:""},project:{name:""},repositories:[],status:"",id:""}),re=(0,e.defineComponent)({name:"devenv-summary",props:{modelValue:{type:k(V),required:!0}},emits:{editSettings:t=>t!==void 0,"update:modelValue":t=>t!==void 0},computed:{status(){return this.summary.status.charAt(0).concat(this.summary.status.slice(1).toLowerCase())},isConnected(){return this.summary.status==="RUNNING"},summary(){return this.modelValue},branchName(){return this.summary.repositories[0]?.branchName}},methods:{update(t,n){this.$emit("update:modelValue",{...this.modelValue,[t]:n})},async stopDevEnv(){try{this.update("status","STOPPING"),await B.stopDevEnv(this.summary)}catch{this.update("status","RUNNING")}},async deleteDevEnv(){try{this.update("status","DELETING"),await B.deleteDevEnv(this.summary)}catch{this.update("status","RUNNING")}},async openBranch(){return B.openBranch()}}});var He=b(2459),$=b(3744);const de=(0,$.Z)(re,[["render",g],["__scopeId","data-v-1cf5742c"]]),G=t=>((0,e.pushScopeId)("data-v-6c191c15"),t=t(),(0,e.popScopeId)(),t),le={id:"compute-grid"},ce={id:"size",style:{"grid-area":"size"}},pe=G(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Compute",-1)),ue=G(()=>(0,e.createElementVNode)("br",null,null,-1)),me={id:"timeout",style:{"grid-area":"timeout"}},_e=G(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Timeout",-1)),ve={id:"volume",style:{"grid-area":"volume"}},fe=G(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Storage",-1)),he={key:0,class:"mt-0 mb-0"},ge={key:1};function Ae(t,n,u,_,y,D){return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.createElementVNode)("div",le,[(0,e.createElementVNode)("div",ce,[(0,e.createElementVNode)("div",null,[pe,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(t.instance.name),1),ue,(0,e.createTextVNode)(" "+(0,e.toDisplayString)(t.instance.specs),1)]),(0,e.createElementVNode)("button",{type:"button",id:"edit-size",class:"button-theme-secondary mt-8",onClick:n[0]||(n[0]=A=>t.$emit("editSettings","instanceType"))}," Edit Compute ")]),(0,e.createElementVNode)("div",me,[(0,e.createElementVNode)("div",null,[_e,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(t.timeout),1)]),(0,e.createElementVNode)("button",{type:"button",id:"edit-timeout",class:"button-theme-secondary mt-8",onClick:n[1]||(n[1]=A=>t.$emit("editSettings","inactivityTimeoutMinutes"))}," Edit Timeout ")]),(0,e.createElementVNode)("div",ve,[fe,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(t.storage),1),t.mode==="update"?((0,e.openBlock)(),(0,e.createElementBlock)("p",he,(0,e.toDisplayString)(t.readonlyText),1)):((0,e.openBlock)(),(0,e.createElementBlock)("div",ge,[(0,e.createElementVNode)("button",{type:"button",id:"edit-storage",class:"button-theme-secondary mt-8",onClick:n[2]||(n[2]=A=>t.$emit("editSettings","persistentStorage"))}," Edit Storage Size ")]))])])])}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const K=new Set;window.addEventListener("remount",()=>K.clear());const Q={created(){if(this.$data===void 0)return;const t=vscode.getState()??{};this.$options._count=(this.$options._count??0)+1;const n=this.id??`${this.name??`DEFAULT-${K.size}`}-${this.$options._count}`;if(this.$options._unid=n,K.has(n)){console.warn(`Component "${n}" already exists. State-saving functionality will be disabled.`);return}K.add(n);const u=t[n]??{};Object.keys(this.$data).forEach(_=>{this.$data[_]=u[_]??this.$data[_]}),Object.keys(this.$data).forEach(_=>{this.$watch(_,y=>{const D=vscode.getState()??{},A=Object.assign(D[n]??{},{[_]:y!==void 0?JSON.parse(JSON.stringify(y)):void 0});vscode.setState(Object.assign(D,{[n]:A}))},{deep:!0})})}},ye=I.create(),Y={inactivityTimeoutMinutes:15,instanceType:"dev.standard1.small",persistentStorage:{sizeInGiB:16}},R=S(Y),Ce=(0,e.defineComponent)({name:"compute-panel",props:{modelValue:{type:k(R),default:new R},mode:{type:String,default:"update"}},data(){return{changed:{},readonlyText:"Can't be changed after creation.",descriptions:{},originalData:void 0}},mixins:[Q],created(){ye.getAllInstanceDescriptions().then(t=>this.descriptions=t)},watch:{model(t){if(!(t===void 0||this.originalData===void 0))for(const[n,u]of Object.entries(t))this.changed[n]=this.originalData[n]!==u},modelValue(){this.originalData??=this.modelValue}},methods:{getNeedsRestartText(t){return this.mode==="update"&&this.changed[t]?" (needs restart)":""}},computed:{model(){return this.modelValue},instance(){const t=this.model.instanceType,n=this.descriptions[t]?{...this.descriptions[t]}:{name:"",specs:""},u=this.getNeedsRestartText("instanceType")||(t===Y.instanceType?" (default)":"");return n.name=`${n.name}${u}`,n},timeout(){const t=this.model.inactivityTimeoutMinutes,n=`${t} minutes`,u=this.getNeedsRestartText("inactivityTimeoutMinutes")||(t===Y.inactivityTimeoutMinutes?" (default)":"");return`${n}${u}`},storage(){const t=this.model.persistentStorage.sizeInGiB,n=`${t} GB`,u=t===Y.persistentStorage.sizeInGiB?" (default)":"";return`${n}${u}`}},emits:{editSettings:t=>t!==void 0}});var Ke=b(7087);const be=(0,$.Z)(Ce,[["render",Ae],["__scopeId","data-v-6c191c15"]]),Ze=t=>(_pushScopeId("data-v-5e540a72"),t=t(),_popScopeId(),t),Ee=["id"],Be={class:"header"},Ie=["id"],De=["for"],Se={class:"preload-transition collapse-button icon icon-vscode-chevron-up",ref:"icon"},we={class:"settings-title"},Te={class:"soft no-spacing mt-8"},xe={ref:"subPane",class:"sub-pane"};function Ne(t,n,u,_,y,D){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:t.id,class:"settings-panel"},[(0,e.createElementVNode)("div",Be,[t.collapseable||t.startCollapsed?(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("input",{key:0,id:t.buttonId,style:{display:"none"},type:"checkbox","onUpdate:modelValue":n[0]||(n[0]=A=>t.collapsed=A)},null,8,Ie)),[[e.vModelCheckbox,t.collapsed]]):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("label",{for:t.buttonId,class:"panel-header"},[(0,e.createElementVNode)("i",Se,null,512),(0,e.createElementVNode)("span",we,(0,e.toDisplayString)(t.title),1)],8,De),(0,e.createElementVNode)("p",Te,(0,e.toDisplayString)(t.description),1)]),(0,e.createVNode)(e.Transition,{onEnter:t.updateHeight,onBeforeLeave:t.updateHeight,name:t.collapseable||t.startCollapsed?"collapse":"",persisted:""},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createElementVNode)("div",xe,[(0,e.renderSlot)(t.$slots,"default",{},void 0,!0)],512),[[e.vShow,!t.collapsed]])]),_:3},8,["onEnter","onBeforeLeave","name"])],8,Ee)}let se=0;const Pe=(0,e.defineComponent)({name:"settings-panel",props:{id:String,startCollapsed:Boolean,collapseable:Boolean,title:String,description:String},data(){return se+=1,{collapsed:this.$props.startCollapsed??!1,buttonId:`settings-panel-button-${se}`,lastHeight:void 0}},mixins:[Q],methods:{updateHeight(t){t.style&&(this.lastHeight=t.scrollHeight,t.style.setProperty("--max-height",`${this.lastHeight}px`))}},mounted(){this.subPane=this.$refs.subPane,this.lastHeight=this.collapsed?this.lastHeight:this.subPane?.scrollHeight??this.lastHeight,this.$nextTick(()=>{setTimeout(()=>{this.$refs.icon?.classList.remove("preload-transition")},100)})}});var Xe=b(3469);const Ve=(0,$.Z)(Pe,[["render",Ne],["__scopeId","data-v-5e540a72"]]),Me={id:"location"},ke=(0,e.createElementVNode)("span",{class:"label-context soft"},"Location:",-1);function Oe(t,n,u,_,y,D){return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createElementVNode)("div",Me,[ke,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(t.filePath),1)]),(0,e.createElementVNode)("button",{id:"preview-devfile",class:"button-theme-secondary no-wrap mt-8",type:"button",style:{"grid-area":"button"},onClick:n[0]||(n[0]=(...A)=>t.preview&&t.preview(...A))}," Open in Editor ")],64)}const $e=I.create(),Re=(0,e.defineComponent)({name:"devfile",props:{filePath:String},methods:{preview(){$e.openDevfile()}}}),Le=(0,$.Z)(Re,[["render",Oe]]),x=I.create(),Ue={details:new V,definitionFilePath:"",devenvUrl:"",devfileStatus:"STABLE",compute:new R,restarting:!1,needsRestart:!1,branchUrl:""},je=(0,e.defineComponent)({name:"configure",components:{settingsPanel:Ve,devfilePanel:Le,computePanel:be,summaryPanel:de},mixins:[Q],data(){return Ue},computed:{devenvName(){const t=this.details.alias,n=this.details.repositories[0]?.branchName;return t??n??this.details.id},canRestart(){return(this.needsRestart||this.devfileStatus==="CHANGED")&&this.details.status==="RUNNING"}},created(){x.init().then(t=>{this.details=t?new V(t):this.details,this.compute=t?new R(t):this.compute}),x.onDidChangeDevfile(t=>{this.devfileStatus=t.status??this.devfileStatus}),this.definitionFilePath||x.getDevfileLocation().then(t=>this.definitionFilePath=t)},methods:{async editCompute(t){const n=this.compute[t],u={...this.compute,alias:this.details.alias},_=await x.editSetting(u,t);t!=="alias"?(this.needsRestart=this.needsRestart||n!==_[t],this.compute=new R(_)):_.alias&&(this.details.alias=_.alias,await x.updateDevEnv(this.details,{alias:this.details.alias}))},async restart(){this.restarting=!0;try{if(this.devfileStatus==="CHANGED"&&!this.needsRestart)return await x.updateDevfile(this.definitionFilePath);const t=await x.updateDevEnv(this.details,{instanceType:this.compute.instanceType,inactivityTimeoutMinutes:this.compute.inactivityTimeoutMinutes});this.restarting=!!t}catch{this.restarting=!1,x.showLogsMessage("Unable to update the dev Environment. View the logs for more information")}}}});var qe=b(4702);const We=(0,$.Z)(je,[["render",C],["__scopeId","data-v-7b766e1c"]]);/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const ae=()=>(0,e.createApp)(We),ie=ae();ie.mount("#vue-app"),window.addEventListener("remount",()=>{ie.unmount(),ae().mount("#vue-app")})})();var te=this;for(var ne in j)te[ne]=j[ne];j.__esModule&&Object.defineProperty(te,"__esModule",{value:!0})})();

//# sourceMappingURL=index.js.map