(()=>{var te={4242:(e,i,s)=>{"use strict";s.r(i),s.d(i,{default:()=>b});var a=s(7537),o=s.n(a),l=s(3645),f=s.n(l),_=f()(o());_.push([e.id,`
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
`],sourceRoot:""}]);const b=_},2392:(e,i,s)=>{"use strict";s.r(i),s.d(i,{default:()=>b});var a=s(7537),o=s.n(a),l=s(3645),f=s.n(l),_=f()(o());_.push([e.id,`
html {
    overflow-y: scroll;
}
body {
    padding-right: 12px;
    max-width: 700px;
}
`,"",{version:3,sources:["webpack://./src/codecatalyst/vue/create/root.vue"],names:[],mappings:";AAuHA;IACI,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,gBAAgB;AACpB",sourcesContent:[`<template>
    <div id="configure-header">
        <h1>Create a CodeCatalyst Dev Environment</h1>
        <!--TODO: add link-->
        <span style="font-size: 0.95em">
            Create an on-demand AWS instance to work on your code in the cloud.
            <a href="https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/codecatalyst-devenvironment.html">
                Learn more about CodeCatalyst Dev Environments.
            </a>
        </span>
    </div>

    <settings-panel id="source-panel" title="Source Code">
        <source-panel v-model="source"></source-panel>
    </settings-panel>
    <settings-panel
        id="alias-panel"
        title="Alias"
        description="Enter an alias to identify the Dev Environment. (Optional but recommended)"
    >
        <label class="options-label soft mb-8" style="display: block" for="alias-input">Alias</label>
        <input id="alias-input" type="text" v-model="alias" />
    </settings-panel>

    <settings-panel
        id="configuration-panel"
        title="Dev Environment Configuration"
        description="All settings except Storage can be changed in settings after creation."
    >
        <compute-panel v-model="compute" mode="create" @edit-settings="editCompute"></compute-panel>
    </settings-panel>

    <div id="submit-buttons" class="mb-16">
        <button class="button-theme-secondary" @click="cancel" :disabled="creating">Cancel</button>

        <button @click="submit" :disabled="!canCreate">
            {{ creating ? 'Creating...' : 'Create Dev Environment' }}
        </button>
    </div>
</template>

<script lang="ts">
import computePanel, { VueModel as ComputeModel } from '../compute.vue'
import sourcePanel, { isValidSource, VueModel as SourceModel } from './source.vue'
import settingsPanel from '../../../webviews/components/settingsPanel.vue'
import { defineComponent } from 'vue'
import { CodeCatalystCreateWebview } from './backend'
import { WebviewClientFactory } from '../../../webviews/client'
import saveData from '../../../webviews/mixins/saveData'
import { DevEnvironmentSettings } from '../../commands'

const client = WebviewClientFactory.create<CodeCatalystCreateWebview>()

const model = {
    source: new SourceModel(),
    compute: new ComputeModel(),
    creating: false,
    alias: '',
}

export default defineComponent({
    name: 'create',
    components: {
        settingsPanel,
        computePanel,
        sourcePanel,
    },
    mixins: [saveData],
    data() {
        return model
    },
    computed: {
        canCreate() {
            return !this.creating && isValidSource(this.source)
        },
    },
    created() {},
    watch: {
        'source.selectedProject'() {
            this.compute = new ComputeModel()
        },
    },
    methods: {
        async editCompute(key: keyof DevEnvironmentSettings) {
            const current = { ...this.compute, alias: this.alias }
            const resp = await client.editSetting(current, key, this.source.selectedProject?.org)

            if (key !== 'alias') {
                this.compute = new ComputeModel(resp)
            } else if (resp.alias !== undefined) {
                this.alias = resp.alias
            }
        },
        async submit() {
            if (!this.canCreate || !isValidSource(this.source)) {
                return
            }

            this.creating = true
            try {
                const settings = { ...this.compute, alias: this.alias }
                await client.submit(settings, this.source)
                client.close()
            } catch (err) {
                if (!(err as Error).message.match(/cancelled/i)) {
                    client.showLogsMessage(\`Failed to create Dev Environment: \${(err as Error).message}\`)
                }
            } finally {
                this.creating = false
            }
        },
        cancel() {
            client.close()
        },
    },
})
<\/script>

<style>
html {
    overflow-y: scroll;
}
body {
    padding-right: 12px;
    max-width: 700px;
}
</style>

<style scoped>
#configure-header {
    padding: 16px 0 0 0;
    background-color: var(--vscode-editor-background);
    z-index: 1;
    position: relative;
}
#alias-input {
    min-width: 300px;
}
#submit-buttons {
    display: flex;
    justify-content: end;
    column-gap: 16px;
}
</style>
`],sourceRoot:""}]);const b=_},7047:(e,i,s)=>{"use strict";s.r(i),s.d(i,{default:()=>b});var a=s(7537),o=s.n(a),l=s(3645),f=s.n(l),_=f()(o());_.push([e.id,`
#configure-header[data-v-3bb2cf6f] {
    padding: 16px 0 0 0;
    background-color: var(--vscode-editor-background);
    z-index: 1;
    position: relative;
}
#alias-input[data-v-3bb2cf6f] {
    min-width: 300px;
}
#submit-buttons[data-v-3bb2cf6f] {
    display: flex;
    justify-content: end;
    column-gap: 16px;
}
`,"",{version:3,sources:["webpack://./src/codecatalyst/vue/create/root.vue"],names:[],mappings:";AAiIA;IACI,mBAAmB;IACnB,iDAAiD;IACjD,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,oBAAoB;IACpB,gBAAgB;AACpB",sourcesContent:[`<template>
    <div id="configure-header">
        <h1>Create a CodeCatalyst Dev Environment</h1>
        <!--TODO: add link-->
        <span style="font-size: 0.95em">
            Create an on-demand AWS instance to work on your code in the cloud.
            <a href="https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/codecatalyst-devenvironment.html">
                Learn more about CodeCatalyst Dev Environments.
            </a>
        </span>
    </div>

    <settings-panel id="source-panel" title="Source Code">
        <source-panel v-model="source"></source-panel>
    </settings-panel>
    <settings-panel
        id="alias-panel"
        title="Alias"
        description="Enter an alias to identify the Dev Environment. (Optional but recommended)"
    >
        <label class="options-label soft mb-8" style="display: block" for="alias-input">Alias</label>
        <input id="alias-input" type="text" v-model="alias" />
    </settings-panel>

    <settings-panel
        id="configuration-panel"
        title="Dev Environment Configuration"
        description="All settings except Storage can be changed in settings after creation."
    >
        <compute-panel v-model="compute" mode="create" @edit-settings="editCompute"></compute-panel>
    </settings-panel>

    <div id="submit-buttons" class="mb-16">
        <button class="button-theme-secondary" @click="cancel" :disabled="creating">Cancel</button>

        <button @click="submit" :disabled="!canCreate">
            {{ creating ? 'Creating...' : 'Create Dev Environment' }}
        </button>
    </div>
</template>

<script lang="ts">
import computePanel, { VueModel as ComputeModel } from '../compute.vue'
import sourcePanel, { isValidSource, VueModel as SourceModel } from './source.vue'
import settingsPanel from '../../../webviews/components/settingsPanel.vue'
import { defineComponent } from 'vue'
import { CodeCatalystCreateWebview } from './backend'
import { WebviewClientFactory } from '../../../webviews/client'
import saveData from '../../../webviews/mixins/saveData'
import { DevEnvironmentSettings } from '../../commands'

const client = WebviewClientFactory.create<CodeCatalystCreateWebview>()

const model = {
    source: new SourceModel(),
    compute: new ComputeModel(),
    creating: false,
    alias: '',
}

export default defineComponent({
    name: 'create',
    components: {
        settingsPanel,
        computePanel,
        sourcePanel,
    },
    mixins: [saveData],
    data() {
        return model
    },
    computed: {
        canCreate() {
            return !this.creating && isValidSource(this.source)
        },
    },
    created() {},
    watch: {
        'source.selectedProject'() {
            this.compute = new ComputeModel()
        },
    },
    methods: {
        async editCompute(key: keyof DevEnvironmentSettings) {
            const current = { ...this.compute, alias: this.alias }
            const resp = await client.editSetting(current, key, this.source.selectedProject?.org)

            if (key !== 'alias') {
                this.compute = new ComputeModel(resp)
            } else if (resp.alias !== undefined) {
                this.alias = resp.alias
            }
        },
        async submit() {
            if (!this.canCreate || !isValidSource(this.source)) {
                return
            }

            this.creating = true
            try {
                const settings = { ...this.compute, alias: this.alias }
                await client.submit(settings, this.source)
                client.close()
            } catch (err) {
                if (!(err as Error).message.match(/cancelled/i)) {
                    client.showLogsMessage(\`Failed to create Dev Environment: \${(err as Error).message}\`)
                }
            } finally {
                this.creating = false
            }
        },
        cancel() {
            client.close()
        },
    },
})
<\/script>

<style>
html {
    overflow-y: scroll;
}
body {
    padding-right: 12px;
    max-width: 700px;
}
</style>

<style scoped>
#configure-header {
    padding: 16px 0 0 0;
    background-color: var(--vscode-editor-background);
    z-index: 1;
    position: relative;
}
#alias-input {
    min-width: 300px;
}
#submit-buttons {
    display: flex;
    justify-content: end;
    column-gap: 16px;
}
</style>
`],sourceRoot:""}]);const b=_},4555:(e,i,s)=>{"use strict";s.r(i),s.d(i,{default:()=>b});var a=s(7537),o=s.n(a),l=s(3645),f=s.n(l),_=f()(o());_.push([e.id,`
.picker {
    min-width: 300px;
    width: 100%;
    box-sizing: border-box;
}
.source-pickers {
    margin-top: 16px;
    display: flex;
    flex-flow: wrap;
    column-gap: 16px;
}
.modes {
    display: flex;
    column-gap: 16px;
}
.flex-sizing {
    flex: 1;
}
.mode-container {
    display: flex;
    flex: 1;
    border: 1px solid gray;
    padding: 8px;
    max-width: calc((1 / 3 * 100%) - (2 / 3 * 32px));
    align-items: center;
}
.config-item {
    display: inline;
    margin-left: 8px;
}
.mode-container[data-disabled='false'] {
    border: 1px solid var(--vscode-focusBorder);
}
body.vscode-dark .mode-container[data-disabled='true'] .config-item {
    filter: brightness(0.8);
}
body.vscode-light .mode-container[data-disabled='true'] .config-item {
    filter: brightness(1.2);
}
#repository-url {
    min-width: 300px;
}
#branch-input {
    min-width: 300px;
    width: 100%;
    box-sizing: border-box;
}
.project-button {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    font-weight: bold;
}
.edit-icon {
    color: #0078d7;
}
`,"",{version:3,sources:["webpack://./src/codecatalyst/vue/create/source.vue"],names:[],mappings:";AAwRA;IACI,gBAAgB;IAChB,WAAW;IACX,sBAAsB;AAC1B;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,gBAAgB;AACpB;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;AAEA;IACI,OAAO;AACX;AAEA;IACI,aAAa;IACb,OAAO;IACP,sBAAsB;IACtB,YAAY;IACZ,gDAAgD;IAChD,mBAAmB;AACvB;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;AAEA;IACI,2CAA2C;AAC/C;AAEA;IACI,uBAAuB;AAC3B;AAEA;IACI,uBAAuB;AAC3B;AAEA;IACI,gBAAgB;AACpB;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,sBAAsB;AAC1B;AAEA;IACI,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;IAChB,iBAAiB;AACrB;AAEA;IACI,cAAc;AAClB",sourcesContent:[`<template>
    <div class="modes mb-16">
        <label class="mode-container" :data-disabled="model.type !== 'linked'">
            <input class="radio" type="radio" name="mode" id="from-code-catalyst" v-model="model.type" value="linked" />
            <span class="ml-8 option-label" style="padding: 0px">Use an existing CodeCatalyst repository</span>
        </label>

        <label class="mode-container" :data-disabled="model.type !== 'none'">
            <input class="radio" type="radio" name="mode" id="from-none" v-model="model.type" value="none" />
            <span class="ml-8 option-label" style="padding: 0px">Create an empty Dev Environment</span>
        </label>
    </div>

    <div class="source-pickers" v-if="model.type === 'linked'">
        <div class="modes flex-sizing mt-16">
            <span class="flex-sizing mt-8">
                <label class="option-label soft">Space</label>
                <button class="project-button" @click="quickPickSpace()">
                    {{ selectedSpaceName }}
                    <span class="icon icon-lg icon-vscode-edit edit-icon"></span>
                </button>
            </span>

            <span class="flex-sizing mt-8">
                <label class="option-label soft">Project</label>
                <button class="project-button" @click="quickPickProject()" :disabled="!isSpaceSelected">
                    {{ selectedProjectName }}
                    <span class="icon icon-lg icon-vscode-edit edit-icon"></span>
                </button>
            </span>
        </div>

        <div class="modes flex-sizing mt-16">
            <!-- Existing branch -->
            <span class="flex-sizing">
                <label class="options-label soft mb-8" style="display: block" for="branch-picker">Branch</label>
                <select
                    id="branch-picker"
                    class="picker"
                    :disabled="!model.selectedProject"
                    v-model="model.selectedBranch"
                    @input="update"
                >
                    <option disabled :value="undefined">{{ branchPlaceholder }}</option>
                    <option v-for="branch in availableBranches" :key="branch.id" :value="branch">
                        {{ branchName(branch) }}
                    </option>
                </select>
            </span>

            <!-- New Branch -->
            <span class="flex-sizing">
                <label class="options-label soft mb-8" style="display: block" for="branch-input"
                    >Create Branch - Optional for CodeCatalyst Repos</label
                >
                <input
                    id="branch-input"
                    type="text"
                    :placeholder="newBranchNamePlaceholder"
                    :disabled="!newBranchNameAllowed"
                    v-model="model.newBranch"
                    @input="update"
                />

                <div class="input-validation" v-if="branchError">{{ branchError }}</div>
            </span>
        </div>
    </div>

    <div class="source-pickers" v-if="model.type === 'none'">
        <div class="modes flex-sizing mt-16">
            <span class="flex-sizing mt-8">
                <label class="option-label soft">Space</label>
                <button class="project-button" @click="quickPickSpace()">
                    {{ selectedSpaceName }}
                    <span class="icon icon-lg icon-vscode-edit edit-icon"></span>
                </button>
            </span>

            <span class="flex-sizing mt-8">
                <label class="option-label soft">Project</label>
                <button class="project-button" @click="quickPickProject()" :disabled="!isSpaceSelected">
                    {{ selectedProjectName }}
                    <span class="icon icon-lg icon-vscode-edit edit-icon"></span>
                </button>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CodeCatalystBranch, CodeCatalystProject } from '../../../shared/clients/codecatalystClient'
import { WebviewClientFactory } from '../../../webviews/client'
import { createClass, createType } from '../../../webviews/util'
import { CodeCatalystCreateWebview, SourceResponse } from './backend'

const client = WebviewClientFactory.create<CodeCatalystCreateWebview>()

type SourceModel = Partial<SourceResponse & { branchError: string }>

export function isValidSource(source: SourceModel): source is SourceResponse {
    if (source.type === 'linked') {
        return !!source.selectedProject && !!source.selectedBranch && !source.branchError
    } else if (source.type === 'none') {
        return !!source.selectedProject
    }

    return false
}

export const VueModel = createClass<SourceModel>({ type: 'linked' })

export default defineComponent({
    name: 'source-code',
    props: {
        modelValue: {
            type: createType(VueModel),
            default: new VueModel(),
        },
    },
    data() {
        return {
            projects: [] as CodeCatalystProject[],
            branches: {} as Record<string, CodeCatalystBranch[] | undefined>,
            loadingProjects: false,
            loadingBranches: {} as Record<string, boolean | undefined>,
            newBranchNameAllowed: false,
            newBranchNamePlaceholder: 'Select branch first...',
        }
    },
    async created() {
        this.loadingProjects = true
    },
    watch: {
        async 'model.selectedProject'(project?: CodeCatalystProject) {
            this.useFirstBranch()

            if (project && !this.branches[project.name]) {
                this.loadingBranches[project.name] = true
                this.branches[project.name] ??= await client.getBranches(project).finally(() => {
                    this.loadingBranches[project.name] = false
                })
                this.useFirstBranch()
            }
        },
        async 'model.selectedBranch'(branch?: CodeCatalystBranch) {
            if (this.model.type !== 'linked' || branch === undefined) {
                this.newBranchNameAllowed = false
                this.newBranchNamePlaceholder = ''
                return
            }

            // Disable user input for new branch name while calculating
            this.newBranchNameAllowed = false
            this.newBranchNamePlaceholder = 'Loading...'

            // Clear the existing new branch value so user does not see it
            const previousNewBranch = this.model.newBranch
            this.$emit('update:modelValue', { ...this.model, newBranch: undefined })

            // Only want to allow users to set a branch name if first party repo
            const isThirdPartyRepo = await client.isThirdPartyRepo({
                spaceName: branch.org.name,
                projectName: branch.project.name,
                sourceRepositoryName: branch.repo.name,
            })
            if (isThirdPartyRepo) {
                this.newBranchNamePlaceholder = 'Not Applicable for Linked Repo'
                this.newBranchNameAllowed = false
                // Clear the new branch in case one was already selected
                this.$emit('update:modelValue', { ...this.model, newBranch: undefined })
            } else {
                // First Party
                this.newBranchNamePlaceholder = 'branch-name'
                this.newBranchNameAllowed = true
                // Since this can have a new branch, set this back to what it previously was
                this.$emit('update:modelValue', { ...this.model, newBranch: previousNewBranch })
            }
        },
    },
    computed: {
        model() {
            return this.modelValue
        },
        loading() {
            if (this.model.type !== 'linked' || !this.model.selectedProject) {
                return false
            }

            return this.loadingBranches[this.model.selectedProject.name] ?? false
        },
        branchPlaceholder() {
            if (this.loading) {
                return 'Loading...'
            }

            return (this.availableBranches?.length ?? 0) === 0 ? 'No branches found' : 'Select a branch'
        },
        availableBranches() {
            if (this.model.type !== 'linked' || !this.model.selectedProject) {
                return []
            }

            return this.branches[this.model.selectedProject.name]
        },
        branchError() {
            if (this.model.type !== 'linked' || !this.model.newBranch) {
                return
            }

            const branch = this.model.newBranch
            if (!!branch && this.availableBranches?.find(b => b.name === \`refs/heads/\${branch}\`) !== undefined) {
                return 'Branch already exists'
            }
        },
        isSpaceSelected() {
            return !!this.model.selectedSpace
        },
        isProjectSelected() {
            return !!this.model.selectedProject
        },
        selectedSpaceName() {
            if (this.model.selectedSpace === undefined) {
                return 'Not Selected'
            }
            return this.model.selectedSpace.name
        },
        selectedProjectName() {
            if (this.model.selectedProject === undefined) {
                return 'Not Selected'
            }
            return this.model.selectedProject.name
        },
    },
    methods: {
        update() {
            this.model.branchError = this.branchError
            this.$emit('update:modelValue', this.model)
        },
        branchName(branch: CodeCatalystBranch) {
            return \`\${branch.repo.name} / \${branch.name.replace('refs/heads/', '')}\`
        },
        useFirstBranch() {
            if (this.model.type !== 'linked') {
                return
            }

            Object.assign<typeof this.model, Partial<SourceModel>>(this.model, {
                selectedBranch: this.availableBranches?.[0],
            })
            this.update()
        },
        async quickPickSpace() {
            const space = await client.quickPickSpace()
            if (space === undefined) {
                return
            }
            this.$emit('update:modelValue', { ...this.modelValue, selectedSpace: space, selectedProject: undefined })
        },
        async quickPickProject() {
            const selectedSpace = this.modelValue.selectedSpace
            if (selectedSpace === undefined) {
                return
            }

            const project = await client.quickPickProject(selectedSpace.name)
            if (project === undefined) {
                return
            }
            this.$emit('update:modelValue', { ...this.modelValue, selectedProject: project })
        },
    },
    emits: {
        'update:modelValue': (value: InstanceType<typeof VueModel>) => true,
    },
})
<\/script>

<style scope>
.picker {
    min-width: 300px;
    width: 100%;
    box-sizing: border-box;
}

.source-pickers {
    margin-top: 16px;
    display: flex;
    flex-flow: wrap;
    column-gap: 16px;
}

.modes {
    display: flex;
    column-gap: 16px;
}

.flex-sizing {
    flex: 1;
}

.mode-container {
    display: flex;
    flex: 1;
    border: 1px solid gray;
    padding: 8px;
    max-width: calc((1 / 3 * 100%) - (2 / 3 * 32px));
    align-items: center;
}

.config-item {
    display: inline;
    margin-left: 8px;
}

.mode-container[data-disabled='false'] {
    border: 1px solid var(--vscode-focusBorder);
}

body.vscode-dark .mode-container[data-disabled='true'] .config-item {
    filter: brightness(0.8);
}

body.vscode-light .mode-container[data-disabled='true'] .config-item {
    filter: brightness(1.2);
}

#repository-url {
    min-width: 300px;
}

#branch-input {
    min-width: 300px;
    width: 100%;
    box-sizing: border-box;
}

.project-button {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    font-weight: bold;
}

.edit-icon {
    color: #0078d7;
}
</style>
`],sourceRoot:""}]);const b=_},4047:(e,i,s)=>{"use strict";s.r(i),s.d(i,{default:()=>b});var a=s(7537),o=s.n(a),l=s(3645),f=s.n(l),_=f()(o());_.push([e.id,`
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
`],sourceRoot:""}]);const b=_},3645:e=>{"use strict";e.exports=function(i){var s=[];return s.toString=function(){return this.map(function(o){var l="",f=typeof o[5]<"u";return o[4]&&(l+="@supports (".concat(o[4],") {")),o[2]&&(l+="@media ".concat(o[2]," {")),f&&(l+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),l+=i(o),f&&(l+="}"),o[2]&&(l+="}"),o[4]&&(l+="}"),l}).join("")},s.i=function(o,l,f,_,b){typeof o=="string"&&(o=[[null,o,void 0]]);var D={};if(f)for(var N=0;N<this.length;N++){var V=this[N][0];V!=null&&(D[V]=!0)}for(var k=0;k<o.length;k++){var v=[].concat(o[k]);f&&D[v[0]]||(typeof b<"u"&&(typeof v[5]>"u"||(v[1]="@layer".concat(v[5].length>0?" ".concat(v[5]):""," {").concat(v[1],"}")),v[5]=b),l&&(v[2]&&(v[1]="@media ".concat(v[2]," {").concat(v[1],"}")),v[2]=l),_&&(v[4]?(v[1]="@supports (".concat(v[4],") {").concat(v[1],"}"),v[4]=_):v[4]="".concat(_)),s.push(v))}},s}},7537:e=>{"use strict";e.exports=function(i){var s=i[1],a=i[3];if(!a)return s;if(typeof btoa=="function"){var o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),f="/*# ".concat(l," */");return[s].concat([f]).join(`
`)}return[s].join(`
`)}},3744:(e,i)=>{"use strict";var s;s={value:!0},i.Z=(a,o)=>{const l=a.__vccOpts||a;for(const[f,_]of o)l[f]=_;return l}},7087:(e,i,s)=>{var a=s(4242);a.__esModule&&(a=a.default),typeof a=="string"&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=s(5346).Z,l=o("c6664002",a,!1,{})},111:(e,i,s)=>{var a=s(2392);a.__esModule&&(a=a.default),typeof a=="string"&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=s(5346).Z,l=o("806c332a",a,!1,{})},3419:(e,i,s)=>{var a=s(7047);a.__esModule&&(a=a.default),typeof a=="string"&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=s(5346).Z,l=o("4a45cc7e",a,!1,{})},7133:(e,i,s)=>{var a=s(4555);a.__esModule&&(a=a.default),typeof a=="string"&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=s(5346).Z,l=o("5cebe1be",a,!1,{})},3469:(e,i,s)=>{var a=s(4047);a.__esModule&&(a=a.default),typeof a=="string"&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var o=s(5346).Z,l=o("c17362a6",a,!1,{})},5346:(e,i,s)=>{"use strict";s.d(i,{Z:()=>K});function a(r,h){for(var c=[],p={},d=0;d<h.length;d++){var E=h[d],g=E[0],S=E[1],P=E[2],W=E[3],B={id:r+":"+d,css:S,media:P,sourceMap:W};p[g]?p[g].parts.push(B):c.push(p[g]={id:g,parts:[B]})}return c}var o=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},f=o&&(document.head||document.getElementsByTagName("head")[0]),_=null,b=0,D=!1,N=function(){},V=null,k="data-vue-ssr-id",v=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function K(r,h,c,p){D=c,V=p||{};var d=a(r,h);return L(d),function(g){for(var S=[],P=0;P<d.length;P++){var W=d[P],B=l[W.id];B.refs--,S.push(B)}g?(d=a(r,g),L(d)):d=[];for(var P=0;P<S.length;P++){var B=S[P];if(B.refs===0){for(var F=0;F<B.parts.length;F++)B.parts[F]();delete l[B.id]}}}}function L(r){for(var h=0;h<r.length;h++){var c=r[h],p=l[c.id];if(p){p.refs++;for(var d=0;d<p.parts.length;d++)p.parts[d](c.parts[d]);for(;d<c.parts.length;d++)p.parts.push(z(c.parts[d]));p.parts.length>c.parts.length&&(p.parts.length=c.parts.length)}else{for(var E=[],d=0;d<c.parts.length;d++)E.push(z(c.parts[d]));l[c.id]={id:c.id,refs:1,parts:E}}}}function R(){var r=document.createElement("style");return r.type="text/css",f.appendChild(r),r}function z(r){var h,c,p=document.querySelector("style["+k+'~="'+r.id+'"]');if(p){if(D)return N;p.parentNode.removeChild(p)}if(v){var d=b++;p=_||(_=R()),h=U.bind(null,p,d,!1),c=U.bind(null,p,d,!0)}else p=R(),h=I.bind(null,p),c=function(){p.parentNode.removeChild(p)};return h(r),function(g){if(g){if(g.css===r.css&&g.media===r.media&&g.sourceMap===r.sourceMap)return;h(r=g)}else c()}}var G=function(){var r=[];return function(h,c){return r[h]=c,r.filter(Boolean).join(`
`)}}();function U(r,h,c,p){var d=c?"":p.css;if(r.styleSheet)r.styleSheet.cssText=G(h,d);else{var E=document.createTextNode(d),g=r.childNodes;g[h]&&r.removeChild(g[h]),g.length?r.insertBefore(E,g[h]):r.appendChild(E)}}function I(r,h){var c=h.css,p=h.media,d=h.sourceMap;if(p&&r.setAttribute("media",p),V.ssrId&&r.setAttribute(k,h.id),d&&(c+=`
/*# sourceURL=`+d.sources[0]+" */",c+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(d))))+" */"),r.styleSheet)r.styleSheet.cssText=c;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(c))}}}},Z={};function C(e){var i=Z[e];if(i!==void 0)return i.exports;var s=Z[e]={id:e,exports:{}};return te[e](s,s.exports,C),s.exports}C.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return C.d(i,{a:i}),i},C.d=(e,i)=>{for(var s in i)C.o(i,s)&&!C.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},C.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),C.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var $={};(()=>{"use strict";C.r($);const e=Vue,i=n=>((0,e.pushScopeId)("data-v-3bb2cf6f"),n=n(),(0,e.popScopeId)(),n),s=i(()=>(0,e.createElementVNode)("div",{id:"configure-header"},[(0,e.createElementVNode)("h1",null,"Create a CodeCatalyst Dev Environment"),(0,e.createCommentVNode)("TODO: add link"),(0,e.createElementVNode)("span",{style:{"font-size":"0.95em"}},[(0,e.createTextVNode)(" Create an on-demand AWS instance to work on your code in the cloud. "),(0,e.createElementVNode)("a",{href:"https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/codecatalyst-devenvironment.html"}," Learn more about CodeCatalyst Dev Environments. ")])],-1)),a=i(()=>(0,e.createElementVNode)("label",{class:"options-label soft mb-8",style:{display:"block"},for:"alias-input"},"Alias",-1)),o={id:"submit-buttons",class:"mb-16"},l=["disabled"],f=["disabled"];function _(n,t,u,A,y,w){const m=(0,e.resolveComponent)("source-panel"),T=(0,e.resolveComponent)("settings-panel"),j=(0,e.resolveComponent)("compute-panel");return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[s,(0,e.createVNode)(T,{id:"source-panel",title:"Source Code"},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(m,{modelValue:n.source,"onUpdate:modelValue":t[0]||(t[0]=x=>n.source=x)},null,8,["modelValue"])]),_:1}),(0,e.createVNode)(T,{id:"alias-panel",title:"Alias",description:"Enter an alias to identify the Dev Environment. (Optional but recommended)"},{default:(0,e.withCtx)(()=>[a,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"alias-input",type:"text","onUpdate:modelValue":t[1]||(t[1]=x=>n.alias=x)},null,512),[[e.vModelText,n.alias]])]),_:1}),(0,e.createVNode)(T,{id:"configuration-panel",title:"Dev Environment Configuration",description:"All settings except Storage can be changed in settings after creation."},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(j,{modelValue:n.compute,"onUpdate:modelValue":t[2]||(t[2]=x=>n.compute=x),mode:"create",onEditSettings:n.editCompute},null,8,["modelValue","onEditSettings"])]),_:1}),(0,e.createElementVNode)("div",o,[(0,e.createElementVNode)("button",{class:"button-theme-secondary",onClick:t[3]||(t[3]=(...x)=>n.cancel&&n.cancel(...x)),disabled:n.creating},"Cancel",8,l),(0,e.createElementVNode)("button",{onClick:t[4]||(t[4]=(...x)=>n.submit&&n.submit(...x)),disabled:!n.canCreate},(0,e.toDisplayString)(n.creating?"Creating...":"Create Dev Environment"),9,f)])],64)}const b=n=>((0,e.pushScopeId)("data-v-6c191c15"),n=n(),(0,e.popScopeId)(),n),D={id:"compute-grid"},N={id:"size",style:{"grid-area":"size"}},V=b(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Compute",-1)),k=b(()=>(0,e.createElementVNode)("br",null,null,-1)),v={id:"timeout",style:{"grid-area":"timeout"}},K=b(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Timeout",-1)),L={id:"volume",style:{"grid-area":"volume"}},R=b(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Storage",-1)),z={key:0,class:"mt-0 mb-0"},G={key:1};function U(n,t,u,A,y,w){return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.createElementVNode)("div",D,[(0,e.createElementVNode)("div",N,[(0,e.createElementVNode)("div",null,[V,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(n.instance.name),1),k,(0,e.createTextVNode)(" "+(0,e.toDisplayString)(n.instance.specs),1)]),(0,e.createElementVNode)("button",{type:"button",id:"edit-size",class:"button-theme-secondary mt-8",onClick:t[0]||(t[0]=m=>n.$emit("editSettings","instanceType"))}," Edit Compute ")]),(0,e.createElementVNode)("div",v,[(0,e.createElementVNode)("div",null,[K,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(n.timeout),1)]),(0,e.createElementVNode)("button",{type:"button",id:"edit-timeout",class:"button-theme-secondary mt-8",onClick:t[1]||(t[1]=m=>n.$emit("editSettings","inactivityTimeoutMinutes"))}," Edit Timeout ")]),(0,e.createElementVNode)("div",L,[R,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(n.storage),1),n.mode==="update"?((0,e.openBlock)(),(0,e.createElementBlock)("p",z,(0,e.toDisplayString)(n.readonlyText),1)):((0,e.openBlock)(),(0,e.createElementBlock)("div",G,[(0,e.createElementVNode)("button",{type:"button",id:"edit-storage",class:"button-theme-secondary mt-8",onClick:t[2]||(t[2]=m=>n.$emit("editSettings","persistentStorage"))}," Edit Storage Size ")]))])])])}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class I{static registerGlobalCommands(){const t=new Event("remount");window.addEventListener("message",u=>{const{command:A}=u.data;A==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(y=>this.removeListener(y)),window.dispatchEvent(t))})}static addListener(t){this.messageListeners.add(t),window.addEventListener("message",t)}static removeListener(t){this.messageListeners.delete(t),window.removeEventListener("message",t)}static sendRequest(t,u,A){const y=JSON.parse(JSON.stringify(A)),w=new Promise((m,T)=>{const j=en=>{const O=en.data;if(t===O.id)if(this.removeListener(j),window.clearTimeout(x),O.error===!0){const nn=JSON.parse(O.data);T(new Error(nn.message))}else O.event?(typeof A[0]!="function"&&T(new Error(`Expected frontend event handler to be a function: ${u}`)),m(this.registerEventHandler(u,A[0]))):m(O.data)},x=setTimeout(()=>{this.removeListener(j),T(new Error(`Timed out while waiting for response: id: ${t}, command: ${u}`))},3e5);this.addListener(j)});return vscode.postMessage({id:t,command:u,data:y}),w}static registerEventHandler(t,u){const A=y=>{const w=y.data;if(w.command===t){if(!w.event)throw new Error(`Expected backend handler to be an event emitter: ${t}`);u(w.data)}};return this.addListener(A),{dispose:()=>this.removeListener(A)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(t,u)=>{if(typeof u!="string"){console.warn(`Tried to index webview client with non-string property: ${String(u)}`);return}if(u==="init"){const y=vscode.getState()??{};if(y.__once)return()=>Promise.resolve();vscode.setState(Object.assign(y,{__once:!0}))}const A=(this.counter++).toString();return(...y)=>this.sendRequest(A,u,y)}})}}I.counter=0,I.initialized=!1,I.messageListeners=new Set;/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const r=new Set;window.addEventListener("remount",()=>r.clear());const c={created(){if(this.$data===void 0)return;const n=vscode.getState()??{};this.$options._count=(this.$options._count??0)+1;const t=this.id??`${this.name??`DEFAULT-${r.size}`}-${this.$options._count}`;if(this.$options._unid=t,r.has(t)){console.warn(`Component "${t}" already exists. State-saving functionality will be disabled.`);return}r.add(t);const u=n[t]??{};Object.keys(this.$data).forEach(A=>{this.$data[A]=u[A]??this.$data[A]}),Object.keys(this.$data).forEach(A=>{this.$watch(A,y=>{const w=vscode.getState()??{},m=Object.assign(w[t]??{},{[A]:y!==void 0?JSON.parse(JSON.stringify(y)):void 0});vscode.setState(Object.assign(w,{[t]:m}))},{deep:!0})})}};/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function p(n){return class{constructor(t={}){Object.assign(this,n,t)}}}function d(n){return Object}const E=I.create(),g={inactivityTimeoutMinutes:15,instanceType:"dev.standard1.small",persistentStorage:{sizeInGiB:16}},S=p(g),P=(0,e.defineComponent)({name:"compute-panel",props:{modelValue:{type:d(S),default:new S},mode:{type:String,default:"update"}},data(){return{changed:{},readonlyText:"Can't be changed after creation.",descriptions:{},originalData:void 0}},mixins:[c],created(){E.getAllInstanceDescriptions().then(n=>this.descriptions=n)},watch:{model(n){if(!(n===void 0||this.originalData===void 0))for(const[t,u]of Object.entries(n))this.changed[t]=this.originalData[t]!==u},modelValue(){this.originalData??=this.modelValue}},methods:{getNeedsRestartText(n){return this.mode==="update"&&this.changed[n]?" (needs restart)":""}},computed:{model(){return this.modelValue},instance(){const n=this.model.instanceType,t=this.descriptions[n]?{...this.descriptions[n]}:{name:"",specs:""},u=this.getNeedsRestartText("instanceType")||(n===g.instanceType?" (default)":"");return t.name=`${t.name}${u}`,t},timeout(){const n=this.model.inactivityTimeoutMinutes,t=`${n} minutes`,u=this.getNeedsRestartText("inactivityTimeoutMinutes")||(n===g.inactivityTimeoutMinutes?" (default)":"");return`${t}${u}`},storage(){const n=this.model.persistentStorage.sizeInGiB,t=`${n} GB`,u=n===g.persistentStorage.sizeInGiB?" (default)":"";return`${t}${u}`}},emits:{editSettings:n=>n!==void 0}});var W=C(7087),B=C(3744);const se=(0,B.Z)(P,[["render",U],["__scopeId","data-v-6c191c15"]]),ae={class:"modes mb-16"},oe=["data-disabled"],ie=(0,e.createElementVNode)("span",{class:"ml-8 option-label",style:{padding:"0px"}},"Use an existing CodeCatalyst repository",-1),re=["data-disabled"],le=(0,e.createElementVNode)("span",{class:"ml-8 option-label",style:{padding:"0px"}},"Create an empty Dev Environment",-1),de={key:0,class:"source-pickers"},ce={class:"modes flex-sizing mt-16"},pe={class:"flex-sizing mt-8"},ue=(0,e.createElementVNode)("label",{class:"option-label soft"},"Space",-1),me=(0,e.createElementVNode)("span",{class:"icon icon-lg icon-vscode-edit edit-icon"},null,-1),he={class:"flex-sizing mt-8"},_e=(0,e.createElementVNode)("label",{class:"option-label soft"},"Project",-1),ve=["disabled"],fe=(0,e.createElementVNode)("span",{class:"icon icon-lg icon-vscode-edit edit-icon"},null,-1),ge={class:"modes flex-sizing mt-16"},Ae={class:"flex-sizing"},be=(0,e.createElementVNode)("label",{class:"options-label soft mb-8",style:{display:"block"},for:"branch-picker"},"Branch",-1),ye=["disabled"],Ce={disabled:"",value:void 0},Be=["value"],Ee={class:"flex-sizing"},we=(0,e.createElementVNode)("label",{class:"options-label soft mb-8",style:{display:"block"},for:"branch-input"},"Create Branch - Optional for CodeCatalyst Repos",-1),Se=["placeholder","disabled"],Pe={key:0,class:"input-validation"},xe={key:1,class:"source-pickers"},ke={class:"modes flex-sizing mt-16"},Ie={class:"flex-sizing mt-8"},De=(0,e.createElementVNode)("label",{class:"option-label soft"},"Space",-1),Ne=(0,e.createElementVNode)("span",{class:"icon icon-lg icon-vscode-edit edit-icon"},null,-1),Ve={class:"flex-sizing mt-8"},Te=(0,e.createElementVNode)("label",{class:"option-label soft"},"Project",-1),Me=["disabled"],je=(0,e.createElementVNode)("span",{class:"icon icon-lg icon-vscode-edit edit-icon"},null,-1);function Oe(n,t,u,A,y,w){return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createElementVNode)("div",ae,[(0,e.createElementVNode)("label",{class:"mode-container","data-disabled":n.model.type!=="linked"},[(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"radio",type:"radio",name:"mode",id:"from-code-catalyst","onUpdate:modelValue":t[0]||(t[0]=m=>n.model.type=m),value:"linked"},null,512),[[e.vModelRadio,n.model.type]]),ie],8,oe),(0,e.createElementVNode)("label",{class:"mode-container","data-disabled":n.model.type!=="none"},[(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"radio",type:"radio",name:"mode",id:"from-none","onUpdate:modelValue":t[1]||(t[1]=m=>n.model.type=m),value:"none"},null,512),[[e.vModelRadio,n.model.type]]),le],8,re)]),n.model.type==="linked"?((0,e.openBlock)(),(0,e.createElementBlock)("div",de,[(0,e.createElementVNode)("div",ce,[(0,e.createElementVNode)("span",pe,[ue,(0,e.createElementVNode)("button",{class:"project-button",onClick:t[2]||(t[2]=m=>n.quickPickSpace())},[(0,e.createTextVNode)((0,e.toDisplayString)(n.selectedSpaceName)+" ",1),me])]),(0,e.createElementVNode)("span",he,[_e,(0,e.createElementVNode)("button",{class:"project-button",onClick:t[3]||(t[3]=m=>n.quickPickProject()),disabled:!n.isSpaceSelected},[(0,e.createTextVNode)((0,e.toDisplayString)(n.selectedProjectName)+" ",1),fe],8,ve)])]),(0,e.createElementVNode)("div",ge,[(0,e.createCommentVNode)(" Existing branch "),(0,e.createElementVNode)("span",Ae,[be,(0,e.withDirectives)((0,e.createElementVNode)("select",{id:"branch-picker",class:"picker",disabled:!n.model.selectedProject,"onUpdate:modelValue":t[4]||(t[4]=m=>n.model.selectedBranch=m),onInput:t[5]||(t[5]=(...m)=>n.update&&n.update(...m))},[(0,e.createElementVNode)("option",Ce,(0,e.toDisplayString)(n.branchPlaceholder),1),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n.availableBranches,m=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{key:m.id,value:m},(0,e.toDisplayString)(n.branchName(m)),9,Be))),128))],40,ye),[[e.vModelSelect,n.model.selectedBranch]])]),(0,e.createCommentVNode)(" New Branch "),(0,e.createElementVNode)("span",Ee,[we,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"branch-input",type:"text",placeholder:n.newBranchNamePlaceholder,disabled:!n.newBranchNameAllowed,"onUpdate:modelValue":t[6]||(t[6]=m=>n.model.newBranch=m),onInput:t[7]||(t[7]=(...m)=>n.update&&n.update(...m))},null,40,Se),[[e.vModelText,n.model.newBranch]]),n.branchError?((0,e.openBlock)(),(0,e.createElementBlock)("div",Pe,(0,e.toDisplayString)(n.branchError),1)):(0,e.createCommentVNode)("v-if",!0)])])])):(0,e.createCommentVNode)("v-if",!0),n.model.type==="none"?((0,e.openBlock)(),(0,e.createElementBlock)("div",xe,[(0,e.createElementVNode)("div",ke,[(0,e.createElementVNode)("span",Ie,[De,(0,e.createElementVNode)("button",{class:"project-button",onClick:t[8]||(t[8]=m=>n.quickPickSpace())},[(0,e.createTextVNode)((0,e.toDisplayString)(n.selectedSpaceName)+" ",1),Ne])]),(0,e.createElementVNode)("span",Ve,[Te,(0,e.createElementVNode)("button",{class:"project-button",onClick:t[9]||(t[9]=m=>n.quickPickProject()),disabled:!n.isSpaceSelected},[(0,e.createTextVNode)((0,e.toDisplayString)(n.selectedProjectName)+" ",1),je],8,Me)])])])):(0,e.createCommentVNode)("v-if",!0)],64)}const H=I.create();function Q(n){return n.type==="linked"?!!n.selectedProject&&!!n.selectedBranch&&!n.branchError:n.type==="none"?!!n.selectedProject:!1}const X=p({type:"linked"}),$e=(0,e.defineComponent)({name:"source-code",props:{modelValue:{type:d(X),default:new X}},data(){return{projects:[],branches:{},loadingProjects:!1,loadingBranches:{},newBranchNameAllowed:!1,newBranchNamePlaceholder:"Select branch first..."}},async created(){this.loadingProjects=!0},watch:{async"model.selectedProject"(n){this.useFirstBranch(),n&&!this.branches[n.name]&&(this.loadingBranches[n.name]=!0,this.branches[n.name]??=await H.getBranches(n).finally(()=>{this.loadingBranches[n.name]=!1}),this.useFirstBranch())},async"model.selectedBranch"(n){if(this.model.type!=="linked"||n===void 0){this.newBranchNameAllowed=!1,this.newBranchNamePlaceholder="";return}this.newBranchNameAllowed=!1,this.newBranchNamePlaceholder="Loading...";const t=this.model.newBranch;this.$emit("update:modelValue",{...this.model,newBranch:void 0}),await H.isThirdPartyRepo({spaceName:n.org.name,projectName:n.project.name,sourceRepositoryName:n.repo.name})?(this.newBranchNamePlaceholder="Not Applicable for Linked Repo",this.newBranchNameAllowed=!1,this.$emit("update:modelValue",{...this.model,newBranch:void 0})):(this.newBranchNamePlaceholder="branch-name",this.newBranchNameAllowed=!0,this.$emit("update:modelValue",{...this.model,newBranch:t}))}},computed:{model(){return this.modelValue},loading(){return this.model.type!=="linked"||!this.model.selectedProject?!1:this.loadingBranches[this.model.selectedProject.name]??!1},branchPlaceholder(){return this.loading?"Loading...":(this.availableBranches?.length??0)===0?"No branches found":"Select a branch"},availableBranches(){return this.model.type!=="linked"||!this.model.selectedProject?[]:this.branches[this.model.selectedProject.name]},branchError(){if(this.model.type!=="linked"||!this.model.newBranch)return;const n=this.model.newBranch;if(!!n&&this.availableBranches?.find(t=>t.name===`refs/heads/${n}`)!==void 0)return"Branch already exists"},isSpaceSelected(){return!!this.model.selectedSpace},isProjectSelected(){return!!this.model.selectedProject},selectedSpaceName(){return this.model.selectedSpace===void 0?"Not Selected":this.model.selectedSpace.name},selectedProjectName(){return this.model.selectedProject===void 0?"Not Selected":this.model.selectedProject.name}},methods:{update(){this.model.branchError=this.branchError,this.$emit("update:modelValue",this.model)},branchName(n){return`${n.repo.name} / ${n.name.replace("refs/heads/","")}`},useFirstBranch(){this.model.type==="linked"&&(Object.assign(this.model,{selectedBranch:this.availableBranches?.[0]}),this.update())},async quickPickSpace(){const n=await H.quickPickSpace();n!==void 0&&this.$emit("update:modelValue",{...this.modelValue,selectedSpace:n,selectedProject:void 0})},async quickPickProject(){const n=this.modelValue.selectedSpace;if(n===void 0)return;const t=await H.quickPickProject(n.name);t!==void 0&&this.$emit("update:modelValue",{...this.modelValue,selectedProject:t})}},emits:{"update:modelValue":n=>!0}});var tn=C(7133);const Le=(0,B.Z)($e,[["render",Oe]]),an=n=>(_pushScopeId("data-v-5e540a72"),n=n(),_popScopeId(),n),Re=["id"],ze={class:"header"},Ue=["id"],We=["for"],Fe={class:"preload-transition collapse-button icon icon-vscode-chevron-up",ref:"icon"},He={class:"settings-title"},Ke={class:"soft no-spacing mt-8"},Ge={ref:"subPane",class:"sub-pane"};function Xe(n,t,u,A,y,w){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:n.id,class:"settings-panel"},[(0,e.createElementVNode)("div",ze,[n.collapseable||n.startCollapsed?(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("input",{key:0,id:n.buttonId,style:{display:"none"},type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=m=>n.collapsed=m)},null,8,Ue)),[[e.vModelCheckbox,n.collapsed]]):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("label",{for:n.buttonId,class:"panel-header"},[(0,e.createElementVNode)("i",Fe,null,512),(0,e.createElementVNode)("span",He,(0,e.toDisplayString)(n.title),1)],8,We),(0,e.createElementVNode)("p",Ke,(0,e.toDisplayString)(n.description),1)]),(0,e.createVNode)(e.Transition,{onEnter:n.updateHeight,onBeforeLeave:n.updateHeight,name:n.collapseable||n.startCollapsed?"collapse":"",persisted:""},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createElementVNode)("div",Ge,[(0,e.renderSlot)(n.$slots,"default",{},void 0,!0)],512),[[e.vShow,!n.collapsed]])]),_:3},8,["onEnter","onBeforeLeave","name"])],8,Re)}let q=0;const Ze=(0,e.defineComponent)({name:"settings-panel",props:{id:String,startCollapsed:Boolean,collapseable:Boolean,title:String,description:String},data(){return q+=1,{collapsed:this.$props.startCollapsed??!1,buttonId:`settings-panel-button-${q}`,lastHeight:void 0}},mixins:[c],methods:{updateHeight(n){n.style&&(this.lastHeight=n.scrollHeight,n.style.setProperty("--max-height",`${this.lastHeight}px`))}},mounted(){this.subPane=this.$refs.subPane,this.lastHeight=this.collapsed?this.lastHeight:this.subPane?.scrollHeight??this.lastHeight,this.$nextTick(()=>{setTimeout(()=>{this.$refs.icon?.classList.remove("preload-transition")},100)})}});var on=C(3469);const Je=(0,B.Z)(Ze,[["render",Xe],["__scopeId","data-v-5e540a72"]]),M=I.create(),Ye={source:new X,compute:new S,creating:!1,alias:""},Qe=(0,e.defineComponent)({name:"create",components:{settingsPanel:Je,computePanel:se,sourcePanel:Le},mixins:[c],data(){return Ye},computed:{canCreate(){return!this.creating&&Q(this.source)}},created(){},watch:{"source.selectedProject"(){this.compute=new S}},methods:{async editCompute(n){const t={...this.compute,alias:this.alias},u=await M.editSetting(t,n,this.source.selectedProject?.org);n!=="alias"?this.compute=new S(u):u.alias!==void 0&&(this.alias=u.alias)},async submit(){if(!(!this.canCreate||!Q(this.source))){this.creating=!0;try{const n={...this.compute,alias:this.alias};await M.submit(n,this.source),M.close()}catch(n){n.message.match(/cancelled/i)||M.showLogsMessage(`Failed to create Dev Environment: ${n.message}`)}finally{this.creating=!1}}},cancel(){M.close()}}});var ln=C(111),dn=C(3419);const qe=(0,B.Z)(Qe,[["render",_],["__scopeId","data-v-3bb2cf6f"]]);/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const ee=()=>(0,e.createApp)(qe),ne=ee();ne.mount("#vue-app"),window.addEventListener("remount",()=>{ne.unmount(),ee().mount("#vue-app")})})();var J=this;for(var Y in $)J[Y]=$[Y];$.__esModule&&Object.defineProperty(J,"__esModule",{value:!0})})();

//# sourceMappingURL=index.js.map