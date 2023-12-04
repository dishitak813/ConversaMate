(()=>{var yt={9052:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>h});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=_()(i());u.push([e.id,`
.pass-icon {
    color: #73c991;
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/authForms/formTitle.vue"],names:[],mappings:";AAoBA;IACI,cAAc;AAClB",sourcesContent:[`<!-- 
    This is a re-usable component for creating a dynamic title
    that changes depending on if the auth method is already connected.
 -->

<template>
    <div style="display: flex; gap: 1em; justify-content: center">
        <label class="auth-container-title"
            ><div class="pass-icon icon icon-vscode-pass-filled"></div>
            Connected to <slot></slot
        ></label>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
<\/script>

<style>
.pass-icon {
    color: #73c991;
}
</style>
`],sourceRoot:""}]);const h=u},4497:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>w});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=s(6727),h=s(3944),c=_()(i());c.i(u.Z),c.i(h.Z),c.push([e.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const w=c},3623:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>w});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=s(6727),h=s(3944),c=_()(i());c.i(u.Z),c.i(h.Z),c.push([e.id,`
#collapsible {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/authForms/manageCredentials.vue"],names:[],mappings:";AA2aA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB",sourcesContent:[`<template>
    <div class="auth-container">
        <div>
            <button v-on:click="toggleInputFormShown" :class="lowPriorityButton">
                <div :class="collapsibleClass" class="auth-container-icon"></div>
                {{ buttonText }}
            </button>

            <div v-show="isInputFormShown" class="auth-form-container">
                <div v-if="isConnected">
                    <button v-on:click="showResourceExplorer">Open Resource Explorer</button>
                </div>

                <div>
                    <label class="form-description-color input-description-small"
                        >Credentials will be added to the appropriate ~/.aws/ files.</label
                    >
                    <div v-on:click="editCredentialsFile()" class="text-link-color" style="cursor: pointer">
                        <div class="icon icon-vscode-edit text-link-color"></div>
                        Edit file directly
                    </div>
                </div>

                <div>
                    <label class="input-title">Profile Name</label>
                    <label class="form-description-color input-description-small"
                        >The identifier for these credentials</label
                    >
                    <input v-model="data.profileName" type="text" :data-invalid="!!errors.profileName" />
                    <div class="form-description-color input-description-small error-text">
                        {{ errors.profileName }}
                    </div>
                </div>

                <div>
                    <label class="input-title">Access Key</label>
                    <input v-model="data.aws_access_key_id" :data-invalid="!!errors.aws_access_key_id" type="text" />
                    <div class="form-description-color input-description-small error-text">
                        {{ errors.aws_access_key_id }}
                    </div>
                </div>

                <div>
                    <label class="input-title">Secret Key</label>
                    <input
                        v-model="data.aws_secret_access_key"
                        type="password"
                        :data-invalid="!!errors.aws_secret_access_key"
                    />
                    <div class="form-description-color input-description-small error-text">
                        {{ errors.aws_secret_access_key }}
                    </div>
                </div>

                <div>
                    <button v-on:click="submitData()" :disabled="!canSubmit">Add Profile</button>
                    <div class="form-description-color input-description-small error-text">{{ errors.submit }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue'
import BaseAuthForm, { ConnectionUpdateCause } from './baseAuth.vue'
import FormTitle from './formTitle.vue'
import { SectionName, StaticProfile } from '../../../credentials/types'
import { WebviewClientFactory } from '../../../../webviews/client'
import { AuthWebview } from '../show'
import { AuthForm } from './shared.vue'
import { AuthFormId } from './types'
import { CredentialSourceId, FeatureId } from '../../../../shared/telemetry/telemetry'
import { emptyFields, fieldHasError } from '../types'

const client = WebviewClientFactory.create<AuthWebview>()

export default defineComponent({
    name: 'CredentialsForm',
    extends: BaseAuthForm,
    components: { FormTitle },
    props: {
        state: {
            type: Object as PropType<CredentialsState>,
            required: true,
        },
        checkIfConnected: {
            type: Boolean,
            default: true,
            // In some scenarios we want to show the form and allow setup,
            // but not care about any current identity center auth connections
            // and if they are connected or not.
        },
    },
    data() {
        return {
            data: {
                ...this.state.data,
            } as CredentialsProfile,
            errors: {
                ...this.state.errors,
            } as CredentialsFormErrors,
            canSubmit: true,
            isConnected: false,

            /**
             * This is for the edge case when we use an accordion and
             * need to know if we should show the form
             */
            isInputFormShown: false,
            lowPriorityButton: 'low-priority-button',
            buttonText: '',
        }
    },
    async created() {
        if (!this.checkIfConnected && (await this.state.isAuthConnected())) {
            this.buttonText = 'Add an IAM Role Credential'
        } else {
            this.buttonText = 'Or, provide IAM Roles Credentials'
        }

        await this.updateConnectedStatus('created')
    },
    computed: {
        /** The appropriate accordion symbol (collapsed/uncollapsed) */
        collapsibleClass() {
            return this.isInputFormShown ? 'icon icon-vscode-chevron-down' : 'icon icon-vscode-chevron-right'
        },
    },
    methods: {
        toggleInputFormShown() {
            this.isInputFormShown = !this.isInputFormShown
        },
        async setNewValue(key: CredentialsDataKey, newVal: string) {
            if (newVal) {
                // Edge Case:
                // Since we allow subsequent credentials to be added,
                // we will automatically wipe the form values after success.
                // That triggers this function, but we only want to
                // indicate a new form interaction if the user adds text themselves.
                await this.state.startAuthFormInteraction()
            }

            await this.state.setData(key, newVal.trim())

            this.updateForm()
        },
        async updateConnectedStatus(cause?: ConnectionUpdateCause) {
            const actualIsConnected = await this.state.isAuthConnected()
            this.isConnected = this.checkIfConnected ? actualIsConnected : false
            this.emitAuthConnectionUpdated({ id: this.state.id, isConnected: actualIsConnected, cause })
        },
        async submitData() {
            this.state.startAuthFormInteraction()
            this.canSubmit = false // disable submit button

            const wasSuccessful = await this.state.submitData()
            if (wasSuccessful) {
                this.isInputFormShown = false
                await this.updateConnectedStatus('signIn')
            }

            this.updateForm()
            this.canSubmit = true // enable submit button
        },
        toggleShowForm() {
            this.isInputFormShown = !this.isInputFormShown
        },
        updateForm() {
            this.data = this.state.data
            this.errors = this.state.errors
        },
        editCredentialsFile() {
            client.editCredentialsFile()
            client.emitUiClick('auth_editCredentials')
        },
        showResourceExplorer() {
            client.showResourceExplorer()
        },
    },
    watch: {
        'data.profileName'(newVal) {
            this.setNewValue('profileName', newVal)
        },
        'data.aws_access_key_id'(newVal) {
            this.setNewValue('aws_access_key_id', newVal)
        },
        'data.aws_secret_access_key'(newVal) {
            this.setNewValue('aws_secret_access_key', newVal)
        },
    },
})

type CredentialsProfile = { profileName: SectionName } & StaticProfile
type CredentialsDataKey = keyof CredentialsProfile

type CredentialsFormErrors = {
    profileName: string
    aws_access_key_id: string
    aws_secret_access_key: string
    submit: string
}

/**
 * Manages the state of credentials data.
 */
export class CredentialsState implements AuthForm {
    #data: CredentialsData
    #errors: CredentialsErrors

    static #instance: CredentialsState

    static get instance(): CredentialsState {
        return (this.#instance ??= new CredentialsState())
    }

    private constructor() {
        this.#data = CredentialsData.instance
        this.#errors = CredentialsErrors.instance
    }

    async setData(key: CredentialsDataKey, value: string) {
        this.#data.setData(key, value)

        await this.#errors.updateErrorFormatting(this.data, key)
        // If an error under the submit button existed, we clear it out
        // since the form data has changed since last submission
        await this.#errors.setError('submit', '')
    }

    get data(): Readonly<CredentialsProfile> {
        return { ...this.#data.getData() }
    }

    get errors(): Readonly<CredentialsFormErrors> {
        return { ...this.#errors.getErrors() }
    }

    async isAuthConnected(): Promise<boolean> {
        return await client.isExplorerConnected('iam')
    }

    async isConnectionExists(): Promise<boolean> {
        return client.isCredentialExists()
    }

    get id(): AuthFormId {
        return 'credentials'
    }

    get featureType(): FeatureId {
        return 'awsExplorer'
    }

    get authType(): CredentialSourceId {
        return 'sharedCredentials'
    }

    /**
     * For Telemetry
     */
    startAuthFormInteraction() {
        return client.startAuthFormInteraction(this.featureType, this.authType)
    }

    /**
     * Attempts to submit the current data.
     *
     * If there are errors, they will be updated in the state.
     */
    async submitData(): Promise<boolean> {
        // 1. First verify the formatting of the user input
        const hasEmptyFields = this.#errors.updateErrorEmptyFields(this.data)
        const fieldsWithErrors = this.#errors.getFieldsWithErrors()
        if (fieldsWithErrors.length > 0) {
            client.failedAuthAttempt(this.id, {
                reason: hasEmptyFields ? emptyFields : fieldHasError,
                invalidInputFields: this.#errors.getFieldsWithErrors(),
            })
            return false
        }

        // 2. Pre-emptively verify the credentials actually work
        const error = await this.#errors.authenticateCredentials(this.data)
        if (error) {
            client.failedAuthAttempt(this.id, {
                reason: error.key,
                invalidInputFields: this.#errors.getFieldsWithErrors(),
            })
            return false
        }

        // 3. Finally submit/save the credentials
        const wasSuccess = await client.trySubmitCredentials(this.data.profileName, this.data)

        if (wasSuccess) {
            client.successfulAuthAttempt(this.id)
            this.reset()
        } else {
            this.#errors.setError('submit', 'Unexpected extension error. See logs.')
        }

        return wasSuccess
    }

    private reset() {
        this.#data.reset()
        this.#errors.reset()
    }
}

class CredentialsData {
    private data: CredentialsProfile

    setData(key: keyof CredentialsProfile, value: string) {
        this.data[key] = value
    }

    getData(): Readonly<CredentialsProfile> {
        return this.data
    }

    reset() {
        this.data = CredentialsData.defaultData
    }

    private static get defaultData(): CredentialsProfile {
        return {
            profileName: '',
            aws_access_key_id: '',
            aws_secret_access_key: '',
        }
    }

    static #instance: CredentialsData
    static get instance(): CredentialsData {
        return (this.#instance ??= new CredentialsData())
    }
    constructor() {
        this.data = CredentialsData.defaultData
    }
}

/** Manages the state of errors for Credentials */
class CredentialsErrors {
    private errors: CredentialsFormErrors

    getErrors(): Readonly<CredentialsFormErrors> {
        return this.errors
    }

    async setError(key: keyof CredentialsFormErrors, value: string) {
        this.errors[key] = value
        this.setInvalidInputFields()
    }

    reset() {
        this.errors = CredentialsErrors.noErrors
        this.setInvalidInputFields()
    }

    /** Updates the errors if required fields are empty */
    updateErrorEmptyFields(data: CredentialsProfile): boolean {
        const dataFieldKeys = Object.keys(data) as (keyof typeof data)[]
        const emptyFieldKeys = dataFieldKeys.filter(key => !data[key])

        emptyFieldKeys.forEach(fieldName => {
            this.setError(fieldName as keyof CredentialsProfile, 'Cannot be empty.')
        })

        return emptyFieldKeys.length > 0
    }

    /** Updates the error if the given field has a format error */
    async updateErrorFormatting(data: CredentialsProfile, key: CredentialsDataKey): Promise<void> {
        if (key === 'profileName') {
            const error = await client.getProfileNameError(data.profileName, false)
            this.setError(key, error ?? '')
            return
        }

        const result = await client.getCredentialFormatError(key, data[key])
        this.setError(key, result ?? '')
    }

    /** Authenticates the given data actually works */
    async authenticateCredentials(data: CredentialsProfile) {
        const error = await client.getAuthenticatedCredentialsError(data)

        if (error) {
            this.setError(error.key, error.error)
        }

        return error
    }

    /** All fields that currently have an error */
    getFieldsWithErrors(): (keyof CredentialsFormErrors)[] {
        const errorKeys = Object.keys(this.errors) as (keyof CredentialsFormErrors)[]
        return errorKeys.filter(key => this.errors[key])
    }

    private setInvalidInputFields() {
        client.setInvalidInputFields(this.getFieldsWithErrors())
    }

    private static get noErrors(): CredentialsFormErrors {
        return {
            aws_access_key_id: '',
            aws_secret_access_key: '',
            profileName: '',
            submit: '',
        }
    }

    static #instance: CredentialsErrors
    static get instance(): CredentialsErrors {
        return (this.#instance ??= new CredentialsErrors())
    }
    private constructor() {
        this.errors = CredentialsErrors.noErrors
    }
}
<\/script>
<style>
@import './sharedAuthForms.css';
@import '../shared.css';

#collapsible {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}
</style>
`],sourceRoot:""}]);const w=c},6138:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>w});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=s(6727),h=s(3944),c=_()(i());c.i(u.Z),c.i(h.Z),c.push([e.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const w=c},8006:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>w});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=s(3944),h=s(6727),c=_()(i());c.i(u.Z),c.i(h.Z),c.push([e.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const w=c},7541:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>w});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=s(2844),h=s(3944),c=_()(i());c.i(u.Z),c.i(h.Z),c.push([e.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const w=c},5262:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>w});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=s(2844),h=s(3944),c=_()(i());c.i(u.Z),c.i(h.Z),c.push([e.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const w=c},585:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>w});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=s(2844),h=s(3944),c=_()(i());c.i(u.Z),c.i(h.Z),c.push([e.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const w=c},4312:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>w});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=s(2844),h=s(3944),c=_()(i());c.i(u.Z),c.i(h.Z),c.push([e.id,`
`,"",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const w=c},9440:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>h});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=_()(i());u.push([e.id,`
.success-text div {
    color: white;
}
.success-text a {
    color: rgb(47, 111, 249);
}
.failure-text div {
    color: white;
}
.failure-text a {
    color: rgb(78 133 255);
}
.notification-container {
    border: var(--vscode-foreground);
    box-sizing: border-box;
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/notifications/notificationContainer.vue"],names:[],mappings:";AA+EA;IACI,YAAY;AAChB;AAEA;IACI,wBAAwB;AAC5B;AAEA;IACI,YAAY;AAChB;AAEA;IACI,sBAAsB;AAC1B;AAEA;IACI,gCAAgC;IAChC,sBAAsB;AAC1B",sourcesContent:[`<template>
    <div
        class="border-common notification-container"
        :class="textColorClass"
        :style="{
            width: '100%',
            'white-space': 'nowrap',
            display: 'flex',
            'flex-direction': 'row',
            'justify-content': 'space-between',
            'background-color': backgroundColor,
            'align-items': 'center',
            padding: '1%',
        }"
    >
        <div>
            <!-- To use named-slot: <template v-slot:message-slot></template> -->
            <slot name="message-slot"></slot>
        </div>

        <div
            v-on:click="emitCloseNotification(id)"
            :style="{ cursor: 'pointer' }"
            class="icon icon-lg icon-vscode-chrome-close"
        ></div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

type NotificationType = 'Success' | 'Failure'
export type NotificationId = string

const BackgroundColors: { [type in NotificationType]: string } = {
    Success: '#049410',
    Failure: '#b00202',
} as const

const TextColorClasses: { [type in NotificationType]: string } = {
    Success: 'success-text',
    Failure: 'failure-text',
} as const

/**
 * This is the container of a single message, this has no content in it.
 * You instantiate this component using VueJS "slots".
 */
export default defineComponent({
    name: 'NotificationContainer',
    emits: ['close-notification'],
    props: {
        type: {
            type: String as PropType<NotificationType>,
            required: true,
        },
    },
    data() {
        return {
            id: crypto.randomUUID() as NotificationId,
        }
    },
    computed: {
        backgroundColor(): string {
            return BackgroundColors[this.type]
        },
        textColorClass(): string {
            return TextColorClasses[this.type]
        },
    },
    methods: {
        emitCloseNotification(id: NotificationId) {
            this.$emit('close-notification', id)
        },
    },
})
<\/script>

<style>
.success-text div {
    color: white;
}

.success-text a {
    color: rgb(47, 111, 249);
}

.failure-text div {
    color: white;
}

.failure-text a {
    color: rgb(78 133 255);
}

.notification-container {
    border: var(--vscode-foreground);
    box-sizing: border-box;
}
</style>
`],sourceRoot:""}]);const h=u},9013:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>h});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=_()(i());u.push([e.id,`
#logo {
    fill: var(--vscode-button-foreground);
    padding-top: 0.2em;
}
body.vscode-dark #logo-text {
    fill: white;
}
body.vscode-light #logo-text {
    fill: #232f3e; /* squid ink */
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/root.vue"],names:[],mappings:";AAoMA;IACI,qCAAqC;IACrC,kBAAkB;AACtB;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa,EAAE,cAAc;AACjC",sourcesContent:[`<template>
    <!-- 
        HACK: Want to prefetch images but <link ref="prefetch"> does not work.
        We use <img> instead but hide it.
     -->
    <img
        v-show="false"
        src="https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/CC_dev_env.gif"
    />
    <img
        v-show="false"
        src="https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/awsExplorer.gif"
    />
    <img
        v-show="false"
        src="https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/codewhispererChat.gif"
    />

    <div :style="{ display: 'flex', flexDirection: 'column', gap: '1.2em', width: '100em' }">
        <!-- Logo + Title -->
        <div>
            <div style="display: flex; justify-content: left; align-items: center; gap: 0.5vw">
                <div id="logo" style="font-size: 3rem">
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="6rem"
                        :height="\`\${6 * 0.61}rem\`"
                        viewBox="0 0 50 30"
                    >
                        <path
                            id="logo-text"
                            d="M14.09,10.85a4.7,4.7,0,0,0,.19,1.48,7.73,7.73,0,0,0,.54,1.19.77.77,0,0,1,.12.38.64.64,0,0,1-.32.49l-1,.7a.83.83,0,0,1-.44.15.69.69,0,0,1-.49-.23,3.8,3.8,0,0,1-.6-.77q-.25-.42-.51-1a6.14,6.14,0,0,1-4.89,2.3,4.54,4.54,0,0,1-3.32-1.19,4.27,4.27,0,0,1-1.22-3.2A4.28,4.28,0,0,1,3.61,7.75,6.06,6.06,0,0,1,7.69,6.46a12.47,12.47,0,0,1,1.76.13q.92.13,1.91.36V5.73a3.65,3.65,0,0,0-.79-2.66A3.81,3.81,0,0,0,7.86,2.3a7.71,7.71,0,0,0-1.79.22,12.78,12.78,0,0,0-1.79.57,4.55,4.55,0,0,1-.58.22l-.26,0q-.35,0-.35-.52V2a1.09,1.09,0,0,1,.12-.58,1.2,1.2,0,0,1,.47-.35A10.88,10.88,0,0,1,5.77.32,10.19,10.19,0,0,1,8.36,0a6,6,0,0,1,4.35,1.35,5.49,5.49,0,0,1,1.38,4.09ZM7.34,13.38a5.36,5.36,0,0,0,1.72-.31A3.63,3.63,0,0,0,10.63,12,2.62,2.62,0,0,0,11.19,11a5.63,5.63,0,0,0,.16-1.44v-.7a14.35,14.35,0,0,0-1.53-.28,12.37,12.37,0,0,0-1.56-.1,3.84,3.84,0,0,0-2.47.67A2.34,2.34,0,0,0,5,11a2.35,2.35,0,0,0,.61,1.76A2.4,2.4,0,0,0,7.34,13.38Zm13.35,1.8a1,1,0,0,1-.64-.16,1.3,1.3,0,0,1-.35-.65L15.81,1.51a3,3,0,0,1-.15-.67.36.36,0,0,1,.41-.41H17.7a1,1,0,0,1,.65.16,1.4,1.4,0,0,1,.33.65l2.79,11,2.59-11A1.17,1.17,0,0,1,24.39.6a1.1,1.1,0,0,1,.67-.16H26.4a1.1,1.1,0,0,1,.67.16,1.17,1.17,0,0,1,.32.65L30,12.39,32.88,1.25A1.39,1.39,0,0,1,33.22.6a1,1,0,0,1,.65-.16h1.54a.36.36,0,0,1,.41.41,1.36,1.36,0,0,1,0,.26,3.64,3.64,0,0,1-.12.41l-4,12.86a1.3,1.3,0,0,1-.35.65,1,1,0,0,1-.64.16H29.25a1,1,0,0,1-.67-.17,1.26,1.26,0,0,1-.32-.67L25.67,3.64,23.11,14.34a1.26,1.26,0,0,1-.32.67,1,1,0,0,1-.67.17Zm21.36.44a11.28,11.28,0,0,1-2.56-.29,7.44,7.44,0,0,1-1.92-.67,1,1,0,0,1-.61-.93v-.84q0-.52.38-.52a.9.9,0,0,1,.31.06l.42.17a8.77,8.77,0,0,0,1.83.58,9.78,9.78,0,0,0,2,.2,4.48,4.48,0,0,0,2.43-.55,1.76,1.76,0,0,0,.86-1.57,1.61,1.61,0,0,0-.45-1.16A4.29,4.29,0,0,0,43,9.22l-2.41-.76A5.15,5.15,0,0,1,38,6.78a3.94,3.94,0,0,1-.83-2.41,3.7,3.7,0,0,1,.45-1.85,4.47,4.47,0,0,1,1.19-1.37A5.27,5.27,0,0,1,40.51.29,7.4,7.4,0,0,1,42.6,0a8.87,8.87,0,0,1,1.12.07q.57.07,1.08.19t.95.26a4.27,4.27,0,0,1,.7.29,1.59,1.59,0,0,1,.49.41.94.94,0,0,1,.15.55v.79q0,.52-.38.52a1.76,1.76,0,0,1-.64-.2,7.74,7.74,0,0,0-3.2-.64,4.37,4.37,0,0,0-2.21.47,1.6,1.6,0,0,0-.79,1.48,1.58,1.58,0,0,0,.49,1.18,4.94,4.94,0,0,0,1.83.92L44.55,7a5.08,5.08,0,0,1,2.57,1.6A3.76,3.76,0,0,1,47.9,11a4.21,4.21,0,0,1-.44,1.93,4.4,4.4,0,0,1-1.21,1.47,5.43,5.43,0,0,1-1.85.93A8.25,8.25,0,0,1,42.05,15.62Z"
                        />
                        <path
                            fill="#FF9900"
                            class="cls-1"
                            d="M45.19,23.81C39.72,27.85,31.78,30,25,30A36.64,36.64,0,0,1,.22,20.57c-.51-.46-.06-1.09.56-.74A49.78,49.78,0,0,0,25.53,26.4,49.23,49.23,0,0,0,44.4,22.53C45.32,22.14,46.1,23.14,45.19,23.81Z"
                        />
                        <path
                            fill="#FF9900"
                            class="cls-1"
                            d="M47.47,21.21c-.7-.9-4.63-.42-6.39-.21-.53.06-.62-.4-.14-.74,3.13-2.2,8.27-1.57,8.86-.83s-.16,5.89-3.09,8.35c-.45.38-.88.18-.68-.32C46.69,25.8,48.17,22.11,47.47,21.21Z"
                        />
                    </svg>
                </div>
                <div>
                    <div style="font-size: 1.8rem; font-weight: bold">AWS Toolkit for VS Code</div>
                    <div style="font-size: 1rem; font-weight: bold">
                        <a href="https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/welcome.html"
                            >Documentation</a
                        >
                        | <a href="https://github.com/aws/aws-toolkit-vscode">Join us on Github</a> |
                        <a v-on:click="openFeedbackForm" style="cursor: pointer">Share Feedback</a>
                    </div>
                </div>
            </div>

            <!-- Status Bars -->
            <div
                v-if="notifications.model.showSuccessfulConnection || notifications.model.showFoundCredentials"
                style="display: flex; flex-direction: column; gap: 1vw"
            >
                <!-- 
                    TODO figure out a better mechanism to dynamically create notifications instead
                    of fixed messages and just toggling them on/off.
                -->
                <ConnectedNotification
                    v-if="notifications.model.showSuccessfulConnection"
                    :args="{ authName: notifications.model.authName }"
                >
                </ConnectedNotification>
                <CredentialsNotification v-if="notifications.model.showFoundCredentials"></CredentialsNotification>
            </div>
        </div>
        <div>
            <div style="font-size: 1.6rem; font-weight: bold">Sign in to Get Started</div>
            <hr style="margin: 1em 0 1em 0; border-color: var(--vscode-textBlockQuote-border)" />
            <div style="display: flex; flex-direction: row; justify-content: space-between; gap: 1em">
                <CodeWhispererContent
                    :state="serviceItemsAuthStatus['codewhisperer']"
                    :is-active="panelActivityState.isActive['codewhisperer']"
                ></CodeWhispererContent>
                <AwsExplorerContent
                    :state="serviceItemsAuthStatus['awsExplorer']"
                    :is-active="panelActivityState.isActive['awsExplorer']"
                ></AwsExplorerContent>
                <CodeCatalystContent
                    :state="serviceItemsAuthStatus['codecatalyst']"
                    :is-active="panelActivityState.isActive['codecatalyst']"
                ></CodeCatalystContent>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { serviceItemsAuthStatus } from './featurePanel/shared.vue'
import { AuthWebview } from './show'
import { WebviewClientFactory } from '../../../webviews/client'
import { ServiceItemId } from './types'
import { AuthFormId } from './authForms/types'
import { ConnectionUpdateArgs } from './authForms/baseAuth.vue'
import ConnectedNotification from './notifications/connectedNotification.vue'
import CredentialsNotification, { showFoundExistingCredentials } from './notifications/credentialsNotification.vue'
import { Notifications } from './notifications/notifications.vue'
import AwsExplorerContent from './featurePanel/awsExplorerContent.vue'
import CodeCatalystContent from './featurePanel/codeCatalystContent.vue'
import CodeWhispererContent from './featurePanel/codeWhispererContent.vue'
import { PanelActivityState } from './featurePanel/baseServiceItemContent.vue'

const client = WebviewClientFactory.create<AuthWebview>()

const panelActivityState = PanelActivityState.instance

export default defineComponent({
    components: {
        ConnectedNotification,
        CredentialsNotification,
        AwsExplorerContent,
        CodeCatalystContent,
        CodeWhispererContent,
    },
    name: 'AuthRoot',
    data() {
        return {
            serviceItemsAuthStatus: serviceItemsAuthStatus,
            notifications: Notifications.instance,
            panelActivityState: panelActivityState,
        }
    },
    async created() {
        // Sets size that all uses of \`em\` and \`rem\` in CSS are relative to
        this.setRelativeSize()

        // TODO: Due to design constraints, we determine the existing Auths in the frontend code
        //       since we have all the classes that figure this out in vue. If eventually we are able
        //       to we should look to move those in to the backend, have the frontend contact the code there
        //       and then we can avoid this mess of needing to send the initial existing auths to the backend.
        await this.getAllExistingAuths().then(existingAuths => client.setAuthsInitial(existingAuths))

        await showFoundExistingCredentials(this.notifications)
    },
    mounted() {
        panelActivityState.setupInitialActivePanel()
    },
    computed: {},
    methods: {
        onAuthConnectionUpdated(id: ServiceItemId, args: ConnectionUpdateArgs) {
            if (args.cause === 'created') {
                // When the auth update is caused by a creation of the auth form
                // there is nothing to update externally since the state hasn't changed.
                return
            }
            if (args.isConnected && args.cause === 'signIn') {
                // On a successful sign in the state of the current content window
                // can change. This forces a rerendering of it to have it load the latest state.
            }
        },
        /** Returns all the Auths that currently exist */
        async getAllExistingAuths(): Promise<AuthFormId[]> {
            // gather all auth state instances
            const allFeatureStates = Object.keys(this.serviceItemsAuthStatus).map(key => {
                const id: ServiceItemId = key as keyof typeof this.serviceItemsAuthStatus
                return this.serviceItemsAuthStatus[id]
            })

            // find all auths that currently exist
            const existingAuths: AuthFormId[] = []
            for (const featureState of allFeatureStates) {
                for (const authForm of featureState.getAuthForms()) {
                    if (await authForm.isConnectionExists()) {
                        existingAuths.push(authForm.id)
                    }
                }
            }
            return existingAuths
        },
        openFeedbackForm() {
            client.openFeedbackForm()
        },
        /**
         * IMPORTANT: This is the root of all sizing (em, rem)
         * Here we set the size that all references of rem and em
         * are relative to
         */
        setRelativeSize() {
            document.documentElement.style.fontSize = '14px'
        },
    },
})
<\/script>

<style>
#logo {
    fill: var(--vscode-button-foreground);
    padding-top: 0.2em;
}
body.vscode-dark #logo-text {
    fill: white;
}
body.vscode-light #logo-text {
    fill: #232f3e; /* squid ink */
}
</style>
`],sourceRoot:""}]);const h=u},6727:(e,a,s)=>{"use strict";s.d(a,{Z:()=>h});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=_()(i());u.push([e.id,`.auth-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--vscode-button-foreground);

    gap: 0.6em;
}

.disabled-form {
    pointer-events: none;
    filter: grayscale(100%);
    opacity: 0.6;
}

/* The immediate children of the auth-container */
.auth-container > * {
    display: flex;
    flex-direction: column;
}

.auth-form-container {
    display: flex;
    flex-direction: column;

    background-color: var(--vscode-quickInput-background);

    text-align: left;

    padding: 1em;

    gap: 0.6em;

    border-radius: 0.5rem;
}

.auth-form-container > * {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
}

.auth-container-title {
    font-size: 1.2rem;
    font-weight: bold;
}

.input-title {
    font-size: 1rem;
}

.form-description-color {
    color: var(--vscode-descriptionForeground);
}

.input-description-small {
    font-size: 0.8rem;
}

.error-text {
    color: #f14c4c;
    font-size: 0.8rem;
}

input[data-invalid='true'] {
    /* Using important since base.css overrides these errors */
    /* TODO: If I can get base.css to be resolved before this the important is not needed */
    border: 1px solid !important;
    border-color: #f14c4c !important;
}

/* When an input box is clicked and has invalid data*/
input[data-invalid='true']:focus {
    /* Ensures the border stays red even when selected */
    outline: none !important;
}

.auth-container input {
    font-size: 1rem;
    padding: 0.5em;
}

/* Remove underline from anchor elements */
a {
    text-decoration: none;
}

.auth-container-icon {
    color: var(--vscode-button-foreground);
}

.low-priority-button {
    background-color: var(--vscode-textSeparator-foreground);
    border-color: var(--vscode-textSeparator-foreground);
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/authForms/sharedAuthForms.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,sCAAsC;;IAEtC,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB,uBAAuB;IACvB,YAAY;AAChB;;AAEA,iDAAiD;AACjD;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,qDAAqD;;IAErD,gBAAgB;;IAEhB,YAAY;;IAEZ,UAAU;;IAEV,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,0DAA0D;IAC1D,uFAAuF;IACvF,4BAA4B;IAC5B,gCAAgC;AACpC;;AAEA,qDAAqD;AACrD;IACI,oDAAoD;IACpD,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA,0CAA0C;AAC1C;IACI,qBAAqB;AACzB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,wDAAwD;IACxD,oDAAoD;AACxD",sourcesContent:[`.auth-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--vscode-button-foreground);

    gap: 0.6em;
}

.disabled-form {
    pointer-events: none;
    filter: grayscale(100%);
    opacity: 0.6;
}

/* The immediate children of the auth-container */
.auth-container > * {
    display: flex;
    flex-direction: column;
}

.auth-form-container {
    display: flex;
    flex-direction: column;

    background-color: var(--vscode-quickInput-background);

    text-align: left;

    padding: 1em;

    gap: 0.6em;

    border-radius: 0.5rem;
}

.auth-form-container > * {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
}

.auth-container-title {
    font-size: 1.2rem;
    font-weight: bold;
}

.input-title {
    font-size: 1rem;
}

.form-description-color {
    color: var(--vscode-descriptionForeground);
}

.input-description-small {
    font-size: 0.8rem;
}

.error-text {
    color: #f14c4c;
    font-size: 0.8rem;
}

input[data-invalid='true'] {
    /* Using important since base.css overrides these errors */
    /* TODO: If I can get base.css to be resolved before this the important is not needed */
    border: 1px solid !important;
    border-color: #f14c4c !important;
}

/* When an input box is clicked and has invalid data*/
input[data-invalid='true']:focus {
    /* Ensures the border stays red even when selected */
    outline: none !important;
}

.auth-container input {
    font-size: 1rem;
    padding: 0.5em;
}

/* Remove underline from anchor elements */
a {
    text-decoration: none;
}

.auth-container-icon {
    color: var(--vscode-button-foreground);
}

.low-priority-button {
    background-color: var(--vscode-textSeparator-foreground);
    border-color: var(--vscode-textSeparator-foreground);
}
`],sourceRoot:""}]);const h=u},2844:(e,a,s)=>{"use strict";s.d(a,{Z:()=>h});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=_()(i());u.push([e.id,`.feature-panel-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-color: var(--vscode-descriptionForeground);
    box-sizing: border-box;
    height: fit-content;
    gap: 1.2em;
    width: 33%;
    padding: 1.5em;
}

.feature-panel-selected {
    border-color: var(--vscode-focusBorder);
}

.feature-panel-container-upper {
    display: flex;
    flex-direction: column;
    gap: 1.2em;

    /* 
     * This must be the height of the tallest feature panel.
     * This ensures all the borders of the feature panels are the same height.
     */
    min-height: 24em;
}

.feature-panel-image {
    border-radius: 1em;

    max-height: 15em;
    margin: 0 auto;
}

.feature-panel-container-title {
    display: inline;
    font-size: 1.7rem;
    font-weight: bold;
}

.feature-panel-container-description {
    font-size: 1rem;
}

.feature-panel-container hr {
    background-color: var(--vscode-descriptionForeground);
    width: 100%;
}

.feature-panel-auth-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
    /* display: flex;
    flex-direction: column;
    align-items: left;
    gap: 1.2rem; */
}

.feature-panel-auth-container button {
    padding: 0.4em;
    border-radius: 0.5rem;
    align-items: center;
}

.collapsible-title {
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: left;
    user-select: none;
}

.collapsible-description {
    font-weight: bold;
    font-size: 0.8rem;
    user-select: none;
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/featurePanel/baseServiceItemContent.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,iDAAiD;IACjD,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;;IAEV;;;MAGE;IACF,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;;IAElB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qDAAqD;IACrD,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,uBAAuB;IACvB,gBAAgB;IAChB,mBAAmB;IACnB;;;kBAGc;AAClB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;AACrB",sourcesContent:[`.feature-panel-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-color: var(--vscode-descriptionForeground);
    box-sizing: border-box;
    height: fit-content;
    gap: 1.2em;
    width: 33%;
    padding: 1.5em;
}

.feature-panel-selected {
    border-color: var(--vscode-focusBorder);
}

.feature-panel-container-upper {
    display: flex;
    flex-direction: column;
    gap: 1.2em;

    /* 
     * This must be the height of the tallest feature panel.
     * This ensures all the borders of the feature panels are the same height.
     */
    min-height: 24em;
}

.feature-panel-image {
    border-radius: 1em;

    max-height: 15em;
    margin: 0 auto;
}

.feature-panel-container-title {
    display: inline;
    font-size: 1.7rem;
    font-weight: bold;
}

.feature-panel-container-description {
    font-size: 1rem;
}

.feature-panel-container hr {
    background-color: var(--vscode-descriptionForeground);
    width: 100%;
}

.feature-panel-auth-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
    /* display: flex;
    flex-direction: column;
    align-items: left;
    gap: 1.2rem; */
}

.feature-panel-auth-container button {
    padding: 0.4em;
    border-radius: 0.5rem;
    align-items: center;
}

.collapsible-title {
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: left;
    user-select: none;
}

.collapsible-description {
    font-weight: bold;
    font-size: 0.8rem;
    user-select: none;
}
`],sourceRoot:""}]);const h=u},3944:(e,a,s)=>{"use strict";s.d(a,{Z:()=>h});var o=s(7537),i=s.n(o),d=s(3645),_=s.n(d),u=_()(i());u.push([e.id,`/* Shared */

button,
.border-common {
    border-style: solid;
    border-width: 0.2rem;
    border-radius: 1rem;
    border-color: transparent;
    font-size: 1rem;
    padding: 1em;
}

/*  */
.container-background {
    background-color: var(--vscode-sideBar-background);
}

.main-text-color {
    color: var(--vscode-foreground);
}

.text-link-color {
    color: var(--vscode-textLink-foreground);
}

body div,
body h1,
body h2,
body h3 {
    color: var(--vscode-foreground);
}
`,"",{version:3,sources:["webpack://./src/auth/ui/vue/shared.css"],names:[],mappings:"AAAA,WAAW;;AAEX;;IAEI,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,YAAY;AAChB;;AAEA,KAAK;AACL;IACI,kDAAkD;AACtD;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;;;;IAII,+BAA+B;AACnC",sourcesContent:[`/* Shared */

button,
.border-common {
    border-style: solid;
    border-width: 0.2rem;
    border-radius: 1rem;
    border-color: transparent;
    font-size: 1rem;
    padding: 1em;
}

/*  */
.container-background {
    background-color: var(--vscode-sideBar-background);
}

.main-text-color {
    color: var(--vscode-foreground);
}

.text-link-color {
    color: var(--vscode-textLink-foreground);
}

body div,
body h1,
body h2,
body h3 {
    color: var(--vscode-foreground);
}
`],sourceRoot:""}]);const h=u},3645:e=>{"use strict";e.exports=function(a){var s=[];return s.toString=function(){return this.map(function(i){var d="",_=typeof i[5]<"u";return i[4]&&(d+="@supports (".concat(i[4],") {")),i[2]&&(d+="@media ".concat(i[2]," {")),_&&(d+="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {")),d+=a(i),_&&(d+="}"),i[2]&&(d+="}"),i[4]&&(d+="}"),d}).join("")},s.i=function(i,d,_,u,h){typeof i=="string"&&(i=[[null,i,void 0]]);var c={};if(_)for(var w=0;w<this.length;w++){var K=this[w][0];K!=null&&(c[K]=!0)}for(var L=0;L<i.length;L++){var y=[].concat(i[L]);_&&c[y[0]]||(typeof h<"u"&&(typeof y[5]>"u"||(y[1]="@layer".concat(y[5].length>0?" ".concat(y[5]):""," {").concat(y[1],"}")),y[5]=h),d&&(y[2]&&(y[1]="@media ".concat(y[2]," {").concat(y[1],"}")),y[2]=d),u&&(y[4]?(y[1]="@supports (".concat(y[4],") {").concat(y[1],"}"),y[4]=u):y[4]="".concat(u)),s.push(y))}},s}},7537:e=>{"use strict";e.exports=function(a){var s=a[1],o=a[3];if(!o)return s;if(typeof btoa=="function"){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),_="/*# ".concat(d," */");return[s].concat([_]).join(`
`)}return[s].join(`
`)}},3744:(e,a)=>{"use strict";var s;s={value:!0},a.Z=(o,i)=>{const d=o.__vccOpts||o;for(const[_,u]of i)d[_]=u;return d}},4647:(e,a,s)=>{var o=s(9052);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(5346).Z,d=i("5d4a1f9e",o,!1,{})},4900:(e,a,s)=>{var o=s(4497);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(5346).Z,d=i("7f0fb496",o,!1,{})},1290:(e,a,s)=>{var o=s(3623);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(5346).Z,d=i("4f2090e1",o,!1,{})},9535:(e,a,s)=>{var o=s(6138);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(5346).Z,d=i("c0f7ad90",o,!1,{})},8431:(e,a,s)=>{var o=s(8006);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(5346).Z,d=i("1e8e896f",o,!1,{})},7656:(e,a,s)=>{var o=s(7541);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(5346).Z,d=i("a3c00e42",o,!1,{})},6902:(e,a,s)=>{var o=s(5262);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(5346).Z,d=i("2c3dae98",o,!1,{})},5459:(e,a,s)=>{var o=s(585);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(5346).Z,d=i("63d66083",o,!1,{})},6386:(e,a,s)=>{var o=s(4312);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(5346).Z,d=i("5b92d88c",o,!1,{})},6043:(e,a,s)=>{var o=s(9440);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(5346).Z,d=i("73c0273b",o,!1,{})},8728:(e,a,s)=>{var o=s(9013);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(5346).Z,d=i("20ba87b8",o,!1,{})},5346:(e,a,s)=>{"use strict";s.d(a,{Z:()=>ge});function o(p,A){for(var v=[],f={},m=0;m<A.length;m++){var F=A[m],S=F[0],j=F[1],R=F[2],G=F[3],W={id:p+":"+m,css:j,media:R,sourceMap:G};f[S]?f[S].parts.push(W):v.push(f[S]={id:S,parts:[W]})}return v}var i=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},_=i&&(document.head||document.getElementsByTagName("head")[0]),u=null,h=0,c=!1,w=function(){},K=null,L="data-vue-ssr-id",y=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function ge(p,A,v,f){c=v,K=f||{};var m=o(p,A);return oe(m),function(S){for(var j=[],R=0;R<m.length;R++){var G=m[R],W=d[G.id];W.refs--,j.push(W)}S?(m=o(p,S),oe(m)):m=[];for(var R=0;R<j.length;R++){var W=j[R];if(W.refs===0){for(var Q=0;Q<W.parts.length;Q++)W.parts[Q]();delete d[W.id]}}}}function oe(p){for(var A=0;A<p.length;A++){var v=p[A],f=d[v.id];if(f){f.refs++;for(var m=0;m<f.parts.length;m++)f.parts[m](v.parts[m]);for(;m<v.parts.length;m++)f.parts.push(ie(v.parts[m]));f.parts.length>v.parts.length&&(f.parts.length=v.parts.length)}else{for(var F=[],m=0;m<v.parts.length;m++)F.push(ie(v.parts[m]));d[v.id]={id:v.id,refs:1,parts:F}}}}function re(){var p=document.createElement("style");return p.type="text/css",_.appendChild(p),p}function ie(p){var A,v,f=document.querySelector("style["+L+'~="'+p.id+'"]');if(f){if(c)return w;f.parentNode.removeChild(f)}if(y){var m=h++;f=u||(u=re()),A=ae.bind(null,f,m,!1),v=ae.bind(null,f,m,!0)}else f=re(),A=Ie.bind(null,f),v=function(){f.parentNode.removeChild(f)};return A(p),function(S){if(S){if(S.css===p.css&&S.media===p.media&&S.sourceMap===p.sourceMap)return;A(p=S)}else v()}}var Ee=function(){var p=[];return function(A,v){return p[A]=v,p.filter(Boolean).join(`
`)}}();function ae(p,A,v,f){var m=v?"":f.css;if(p.styleSheet)p.styleSheet.cssText=Ee(A,m);else{var F=document.createTextNode(m),S=p.childNodes;S[A]&&p.removeChild(S[A]),S.length?p.insertBefore(F,S[A]):p.appendChild(F)}}function Ie(p,A){var v=A.css,f=A.media,m=A.sourceMap;if(f&&p.setAttribute("media",f),K.ssrId&&p.setAttribute(L,A.id),m&&(v+=`
/*# sourceURL=`+m.sources[0]+" */",v+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(m))))+" */"),p.styleSheet)p.styleSheet.cssText=v;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(v))}}}},Oe={};function B(e){var a=Oe[e];if(a!==void 0)return a.exports;var s=Oe[e]={id:e,exports:{}};return yt[e](s,s.exports,B),s.exports}B.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return B.d(a,{a}),a},B.d=(e,a)=>{for(var s in a)B.o(a,s)&&!B.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})},B.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),B.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var se={};(()=>{"use strict";B.r(se);const e=Vue,a={src:"https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/CC_dev_env.gif"},s={src:"https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/awsExplorer.gif"},o={src:"https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/codewhispererChat.gif"},i={style:{display:"flex",flexDirection:"column",gap:"1.2em",width:"100em"}},d={style:{display:"flex","justify-content":"left","align-items":"center",gap:"0.5vw"}},_={id:"logo",style:{"font-size":"3rem"}},u={id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"6rem",height:`${6*.61}rem`,viewBox:"0 0 50 30"},K=[(0,e.createElementVNode)("path",{id:"logo-text",d:"M14.09,10.85a4.7,4.7,0,0,0,.19,1.48,7.73,7.73,0,0,0,.54,1.19.77.77,0,0,1,.12.38.64.64,0,0,1-.32.49l-1,.7a.83.83,0,0,1-.44.15.69.69,0,0,1-.49-.23,3.8,3.8,0,0,1-.6-.77q-.25-.42-.51-1a6.14,6.14,0,0,1-4.89,2.3,4.54,4.54,0,0,1-3.32-1.19,4.27,4.27,0,0,1-1.22-3.2A4.28,4.28,0,0,1,3.61,7.75,6.06,6.06,0,0,1,7.69,6.46a12.47,12.47,0,0,1,1.76.13q.92.13,1.91.36V5.73a3.65,3.65,0,0,0-.79-2.66A3.81,3.81,0,0,0,7.86,2.3a7.71,7.71,0,0,0-1.79.22,12.78,12.78,0,0,0-1.79.57,4.55,4.55,0,0,1-.58.22l-.26,0q-.35,0-.35-.52V2a1.09,1.09,0,0,1,.12-.58,1.2,1.2,0,0,1,.47-.35A10.88,10.88,0,0,1,5.77.32,10.19,10.19,0,0,1,8.36,0a6,6,0,0,1,4.35,1.35,5.49,5.49,0,0,1,1.38,4.09ZM7.34,13.38a5.36,5.36,0,0,0,1.72-.31A3.63,3.63,0,0,0,10.63,12,2.62,2.62,0,0,0,11.19,11a5.63,5.63,0,0,0,.16-1.44v-.7a14.35,14.35,0,0,0-1.53-.28,12.37,12.37,0,0,0-1.56-.1,3.84,3.84,0,0,0-2.47.67A2.34,2.34,0,0,0,5,11a2.35,2.35,0,0,0,.61,1.76A2.4,2.4,0,0,0,7.34,13.38Zm13.35,1.8a1,1,0,0,1-.64-.16,1.3,1.3,0,0,1-.35-.65L15.81,1.51a3,3,0,0,1-.15-.67.36.36,0,0,1,.41-.41H17.7a1,1,0,0,1,.65.16,1.4,1.4,0,0,1,.33.65l2.79,11,2.59-11A1.17,1.17,0,0,1,24.39.6a1.1,1.1,0,0,1,.67-.16H26.4a1.1,1.1,0,0,1,.67.16,1.17,1.17,0,0,1,.32.65L30,12.39,32.88,1.25A1.39,1.39,0,0,1,33.22.6a1,1,0,0,1,.65-.16h1.54a.36.36,0,0,1,.41.41,1.36,1.36,0,0,1,0,.26,3.64,3.64,0,0,1-.12.41l-4,12.86a1.3,1.3,0,0,1-.35.65,1,1,0,0,1-.64.16H29.25a1,1,0,0,1-.67-.17,1.26,1.26,0,0,1-.32-.67L25.67,3.64,23.11,14.34a1.26,1.26,0,0,1-.32.67,1,1,0,0,1-.67.17Zm21.36.44a11.28,11.28,0,0,1-2.56-.29,7.44,7.44,0,0,1-1.92-.67,1,1,0,0,1-.61-.93v-.84q0-.52.38-.52a.9.9,0,0,1,.31.06l.42.17a8.77,8.77,0,0,0,1.83.58,9.78,9.78,0,0,0,2,.2,4.48,4.48,0,0,0,2.43-.55,1.76,1.76,0,0,0,.86-1.57,1.61,1.61,0,0,0-.45-1.16A4.29,4.29,0,0,0,43,9.22l-2.41-.76A5.15,5.15,0,0,1,38,6.78a3.94,3.94,0,0,1-.83-2.41,3.7,3.7,0,0,1,.45-1.85,4.47,4.47,0,0,1,1.19-1.37A5.27,5.27,0,0,1,40.51.29,7.4,7.4,0,0,1,42.6,0a8.87,8.87,0,0,1,1.12.07q.57.07,1.08.19t.95.26a4.27,4.27,0,0,1,.7.29,1.59,1.59,0,0,1,.49.41.94.94,0,0,1,.15.55v.79q0,.52-.38.52a1.76,1.76,0,0,1-.64-.2,7.74,7.74,0,0,0-3.2-.64,4.37,4.37,0,0,0-2.21.47,1.6,1.6,0,0,0-.79,1.48,1.58,1.58,0,0,0,.49,1.18,4.94,4.94,0,0,0,1.83.92L44.55,7a5.08,5.08,0,0,1,2.57,1.6A3.76,3.76,0,0,1,47.9,11a4.21,4.21,0,0,1-.44,1.93,4.4,4.4,0,0,1-1.21,1.47,5.43,5.43,0,0,1-1.85.93A8.25,8.25,0,0,1,42.05,15.62Z"},null,-1),(0,e.createElementVNode)("path",{fill:"#FF9900",class:"cls-1",d:"M45.19,23.81C39.72,27.85,31.78,30,25,30A36.64,36.64,0,0,1,.22,20.57c-.51-.46-.06-1.09.56-.74A49.78,49.78,0,0,0,25.53,26.4,49.23,49.23,0,0,0,44.4,22.53C45.32,22.14,46.1,23.14,45.19,23.81Z"},null,-1),(0,e.createElementVNode)("path",{fill:"#FF9900",class:"cls-1",d:"M47.47,21.21c-.7-.9-4.63-.42-6.39-.21-.53.06-.62-.4-.14-.74,3.13-2.2,8.27-1.57,8.86-.83s-.16,5.89-3.09,8.35c-.45.38-.88.18-.68-.32C46.69,25.8,48.17,22.11,47.47,21.21Z"},null,-1)],L=(0,e.createElementVNode)("div",{style:{"font-size":"1.8rem","font-weight":"bold"}},"AWS Toolkit for VS Code",-1),y={style:{"font-size":"1rem","font-weight":"bold"}},ge=(0,e.createElementVNode)("a",{href:"https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/welcome.html"},"Documentation",-1),oe=(0,e.createElementVNode)("a",{href:"https://github.com/aws/aws-toolkit-vscode"},"Join us on Github",-1),re={key:0,style:{display:"flex","flex-direction":"column",gap:"1vw"}},ie=(0,e.createElementVNode)("div",{style:{"font-size":"1.6rem","font-weight":"bold"}},"Sign in to Get Started",-1),Ee=(0,e.createElementVNode)("hr",{style:{margin:"1em 0 1em 0","border-color":"var(--vscode-textBlockQuote-border)"}},null,-1),ae={style:{display:"flex","flex-direction":"row","justify-content":"space-between",gap:"1em"}};function Ie(t,n,r,l,g,x){const C=(0,e.resolveComponent)("ConnectedNotification"),E=(0,e.resolveComponent)("CredentialsNotification"),M=(0,e.resolveComponent)("CodeWhispererContent"),H=(0,e.resolveComponent)("AwsExplorerContent"),Pe=(0,e.resolveComponent)("CodeCatalystContent");return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createCommentVNode)(` 
        HACK: Want to prefetch images but <link ref="prefetch"> does not work.
        We use <img> instead but hide it.
     `),(0,e.withDirectives)((0,e.createElementVNode)("img",a,null,512),[[e.vShow,!1]]),(0,e.withDirectives)((0,e.createElementVNode)("img",s,null,512),[[e.vShow,!1]]),(0,e.withDirectives)((0,e.createElementVNode)("img",o,null,512),[[e.vShow,!1]]),(0,e.createElementVNode)("div",i,[(0,e.createCommentVNode)(" Logo + Title "),(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("div",d,[(0,e.createElementVNode)("div",_,[((0,e.openBlock)(),(0,e.createElementBlock)("svg",u,K))]),(0,e.createElementVNode)("div",null,[L,(0,e.createElementVNode)("div",y,[ge,(0,e.createTextVNode)(" | "),oe,(0,e.createTextVNode)(" | "),(0,e.createElementVNode)("a",{onClick:n[0]||(n[0]=(...$)=>t.openFeedbackForm&&t.openFeedbackForm(...$)),style:{cursor:"pointer"}},"Share Feedback")])])]),(0,e.createCommentVNode)(" Status Bars "),t.notifications.model.showSuccessfulConnection||t.notifications.model.showFoundCredentials?((0,e.openBlock)(),(0,e.createElementBlock)("div",re,[(0,e.createCommentVNode)(` 
                    TODO figure out a better mechanism to dynamically create notifications instead
                    of fixed messages and just toggling them on/off.
                `),t.notifications.model.showSuccessfulConnection?((0,e.openBlock)(),(0,e.createBlock)(C,{key:0,args:{authName:t.notifications.model.authName}},null,8,["args"])):(0,e.createCommentVNode)("v-if",!0),t.notifications.model.showFoundCredentials?((0,e.openBlock)(),(0,e.createBlock)(E,{key:1})):(0,e.createCommentVNode)("v-if",!0)])):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",null,[ie,Ee,(0,e.createElementVNode)("div",ae,[(0,e.createVNode)(M,{state:t.serviceItemsAuthStatus.codewhisperer,"is-active":t.panelActivityState.isActive.codewhisperer},null,8,["state","is-active"]),(0,e.createVNode)(H,{state:t.serviceItemsAuthStatus.awsExplorer,"is-active":t.panelActivityState.isActive.awsExplorer},null,8,["state","is-active"]),(0,e.createVNode)(Pe,{state:t.serviceItemsAuthStatus.codecatalyst,"is-active":t.panelActivityState.isActive.codecatalyst},null,8,["state","is-active"])])])])],64)}const p=["id"],A={class:"feature-panel-container-upper"},v=(0,e.createElementVNode)("div",{class:"feature-panel-container-title"},"AWS Explorer",-1),f=(0,e.createElementVNode)("img",{class:"feature-panel-image",src:"https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/awsExplorer.gif",alt:"AWS Explorer example GIF"},null,-1),m={class:"feature-panel-container-description"},F=(0,e.createElementVNode)("hr",null,null,-1),S={key:2};function j(t,n,r,l,g,x){const C=(0,e.resolveComponent)("ExplorerAggregateForm"),E=(0,e.resolveComponent)("IdentityCenterForm"),M=(0,e.resolveComponent)("CredentialsForm");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:t.panelId,class:(0,e.normalizeClass)(["feature-panel-container border-common",t.isActive?"feature-panel-selected":""])},[(0,e.createElementVNode)("div",A,[v,f,(0,e.createElementVNode)("div",m,[(0,e.createTextVNode)(" Work with S3, CloudWatch, and more. "),(0,e.createElementVNode)("a",{href:"https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/toolkit-navigation.html",onClick:n[0]||(n[0]=H=>t.emitUiClick("auth_learnMoreAWSResources"))},"Learn more.")])]),F,t.removeAuthForms?(0,e.createCommentVNode)("v-if",!0):(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:t.authFormContainerKey,class:"feature-panel-auth-container"},[t.connectedAuth?((0,e.openBlock)(),(0,e.createBlock)(C,{key:0,identityCenterState:t.identityCenterFormState,credentialsState:t.credentialsFormState},null,8,["identityCenterState","credentialsState"])):(0,e.createCommentVNode)("v-if",!0),(0,e.createCommentVNode)(' @auth-connection-updated="onAuthConnectionUpdated" '),t.connectedAuth?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:1,onClick:n[1]||(n[1]=H=>t.showExplorer())},"Open Resource Explorer")):(0,e.createCommentVNode)("v-if",!0),(0,e.createVNode)(E,{state:t.identityCenterFormState,onAuthConnectionUpdated:t.onAuthConnectionUpdated,checkIfConnected:!1,"is-low-priority":!!t.connectedAuth},null,8,["state","onAuthConnectionUpdated","is-low-priority"]),(0,e.createVNode)(M,{state:t.credentialsFormState,onAuthConnectionUpdated:t.onAuthConnectionUpdated,"is-low-priority":!0},null,8,["state","onAuthConnectionUpdated"]),t.connectedAuth?(0,e.createCommentVNode)("v-if",!0):((0,e.openBlock)(),(0,e.createElementBlock)("div",S,[(0,e.createTextVNode)(" Don't have an AWS account? "),(0,e.createElementVNode)("a",{href:"https://aws.amazon.com/free/",onClick:n[2]||(n[2]=H=>t.emitUiClick("auth_signUpForFree"))},"Sign up for free.")]))])),[[e.vShow,t.canShowAuthForms]])],10,p)}const R={class:"auth-container"},G={class:"auth-form-container"},W={key:0},Q=(0,e.createElementVNode)("label",{class:"form-description-color input-description-small"},"Credentials will be added to the appropriate ~/.aws/ files.",-1),gt=(0,e.createElementVNode)("div",{class:"icon icon-vscode-edit text-link-color"},null,-1),Et=(0,e.createElementVNode)("label",{class:"input-title"},"Profile Name",-1),It=(0,e.createElementVNode)("label",{class:"form-description-color input-description-small"},"The identifier for these credentials",-1),wt=["data-invalid"],Bt={class:"form-description-color input-description-small error-text"},St=(0,e.createElementVNode)("label",{class:"input-title"},"Access Key",-1),xt=["data-invalid"],bt={class:"form-description-color input-description-small error-text"},Ft=(0,e.createElementVNode)("label",{class:"input-title"},"Secret Key",-1),Nt=["data-invalid"],Dt={class:"form-description-color input-description-small error-text"},Tt=["disabled"],kt={class:"form-description-color input-description-small error-text"};function Pt(t,n,r,l,g,x){return(0,e.openBlock)(),(0,e.createElementBlock)("div",R,[(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("button",{onClick:n[0]||(n[0]=(...C)=>t.toggleInputFormShown&&t.toggleInputFormShown(...C)),class:(0,e.normalizeClass)(t.lowPriorityButton)},[(0,e.createElementVNode)("div",{class:(0,e.normalizeClass)([t.collapsibleClass,"auth-container-icon"])},null,2),(0,e.createTextVNode)(" "+(0,e.toDisplayString)(t.buttonText),1)],2),(0,e.withDirectives)((0,e.createElementVNode)("div",G,[t.isConnected?((0,e.openBlock)(),(0,e.createElementBlock)("div",W,[(0,e.createElementVNode)("button",{onClick:n[1]||(n[1]=(...C)=>t.showResourceExplorer&&t.showResourceExplorer(...C))},"Open Resource Explorer")])):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("div",null,[Q,(0,e.createElementVNode)("div",{onClick:n[2]||(n[2]=C=>t.editCredentialsFile()),class:"text-link-color",style:{cursor:"pointer"}},[gt,(0,e.createTextVNode)(" Edit file directly ")])]),(0,e.createElementVNode)("div",null,[Et,It,(0,e.withDirectives)((0,e.createElementVNode)("input",{"onUpdate:modelValue":n[3]||(n[3]=C=>t.data.profileName=C),type:"text","data-invalid":!!t.errors.profileName},null,8,wt),[[e.vModelText,t.data.profileName]]),(0,e.createElementVNode)("div",Bt,(0,e.toDisplayString)(t.errors.profileName),1)]),(0,e.createElementVNode)("div",null,[St,(0,e.withDirectives)((0,e.createElementVNode)("input",{"onUpdate:modelValue":n[4]||(n[4]=C=>t.data.aws_access_key_id=C),"data-invalid":!!t.errors.aws_access_key_id,type:"text"},null,8,xt),[[e.vModelText,t.data.aws_access_key_id]]),(0,e.createElementVNode)("div",bt,(0,e.toDisplayString)(t.errors.aws_access_key_id),1)]),(0,e.createElementVNode)("div",null,[Ft,(0,e.withDirectives)((0,e.createElementVNode)("input",{"onUpdate:modelValue":n[5]||(n[5]=C=>t.data.aws_secret_access_key=C),type:"password","data-invalid":!!t.errors.aws_secret_access_key},null,8,Nt),[[e.vModelText,t.data.aws_secret_access_key]]),(0,e.createElementVNode)("div",Dt,(0,e.toDisplayString)(t.errors.aws_secret_access_key),1)]),(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("button",{onClick:n[6]||(n[6]=C=>t.submitData()),disabled:!t.canSubmit},"Add Profile",8,Tt),(0,e.createElementVNode)("div",kt,(0,e.toDisplayString)(t.errors.submit),1)])],512),[[e.vShow,t.isInputFormShown]])])])}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class N{static registerGlobalCommands(){const n=new Event("remount");window.addEventListener("message",r=>{const{command:l}=r.data;l==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(g=>this.removeListener(g)),window.dispatchEvent(n))})}static addListener(n){this.messageListeners.add(n),window.addEventListener("message",n)}static removeListener(n){this.messageListeners.delete(n),window.removeEventListener("message",n)}static sendRequest(n,r,l){const g=JSON.parse(JSON.stringify(l)),x=new Promise((C,E)=>{const M=Pe=>{const $=Pe.data;if(n===$.id)if(this.removeListener(M),window.clearTimeout(H),$.error===!0){const vs=JSON.parse($.data);E(new Error(vs.message))}else $.event?(typeof l[0]!="function"&&E(new Error(`Expected frontend event handler to be a function: ${r}`)),C(this.registerEventHandler(r,l[0]))):C($.data)},H=setTimeout(()=>{this.removeListener(M),E(new Error(`Timed out while waiting for response: id: ${n}, command: ${r}`))},3e5);this.addListener(M)});return vscode.postMessage({id:n,command:r,data:g}),x}static registerEventHandler(n,r){const l=g=>{const x=g.data;if(x.command===n){if(!x.event)throw new Error(`Expected backend handler to be an event emitter: ${n}`);r(x.data)}};return this.addListener(l),{dispose:()=>this.removeListener(l)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(n,r)=>{if(typeof r!="string"){console.warn(`Tried to index webview client with non-string property: ${String(r)}`);return}if(r==="init"){const g=vscode.getState()??{};if(g.__once)return()=>Promise.resolve();vscode.setState(Object.assign(g,{__once:!0}))}const l=(this.counter++).toString();return(...g)=>this.sendRequest(l,r,g)}})}}N.counter=0,N.initialized=!1,N.messageListeners=new Set;const Ot=N.create(),Ue=(0,e.defineComponent)({name:"TelemetryClient",methods:{emitUiClick(t){Ot.emitUiClick(t)}}});/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function gs(t){return t.startsWith("builderId")}const Ve={credentials:"IAM Credentials",builderIdCodeCatalyst:"CodeCatalyst with AWS Builder ID",builderIdCodeWhisperer:"Amazon Q + CodeWhisperer with AWS Builder ID",identityCenterCodeCatalyst:"CodeCatalyst with IAM Identity Center",identityCenterCodeWhisperer:"Amazon Q + CodeWhisperer with IAM Identity Center",identityCenterExplorer:"AWS Explorer with IAM Identity Center",aggregateExplorer:""};var Re=(t,n,r)=>{if(!n.has(t))throw TypeError("Cannot "+r)},Mt=(t,n,r)=>(Re(t,n,"read from private field"),r?r.call(t):n.get(t)),Wt=(t,n,r)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,r)},Ut=(t,n,r,l)=>(Re(t,n,"write to private field"),l?l.call(t,r):n.set(t,r),r),de;const Es=()=>{},Le=class{constructor(){this.model=(0,e.reactive)({showSuccessfulConnection:!1,authName:"",showFoundCredentials:!1})}static get instance(){return Mt(this,de)??Ut(this,de,new Le)}showSuccessNotification(t){t.isConnected&&t.cause==="signIn"&&(this.model.authName=Ve[t.id],this.model.showSuccessfulConnection=!0)}clearSuccessNotification(){this.model.showSuccessfulConnection=!1}showCredentialsNotification(t){this.model.authName=Ve[t],this.model.showFoundCredentials=!0}clearCredentialsNotification(){this.model.showFoundCredentials=!1}};let Y=Le;de=new WeakMap,Wt(Y,de,void 0);const Is=null,ws=null,le=(0,e.defineComponent)({emits:["auth-connection-updated"],extends:Ue,methods:{emitAuthConnectionUpdated(t){Y.instance.showSuccessNotification(t),this.$emit("auth-connection-updated",t)}}}),Vt={style:{display:"flex",gap:"1em","justify-content":"center"}},Rt={class:"auth-container-title"},Lt=(0,e.createElementVNode)("div",{class:"pass-icon icon icon-vscode-pass-filled"},null,-1);function Kt(t,n,r,l,g,x){return(0,e.openBlock)(),(0,e.createElementBlock)("div",Vt,[(0,e.createElementVNode)("label",Rt,[Lt,(0,e.createTextVNode)(" Connected to "),(0,e.renderSlot)(t.$slots,"default")])])}const jt=(0,e.defineComponent)({});var xs=B(4647),P=B(3744);const ce=(0,P.Z)(jt,[["render",Kt]]);/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const Fs="userCancelled",Ke="emptyFields",je="fieldHasError";function Ns(t){return typeof t=="string"&&(t==="awsExplorer"||t==="codewhisperer"||t==="codecatalyst")}const Ds={builderIdCodeCatalyst:{featureType:"codecatalyst",authType:"awsId"},builderIdCodeWhisperer:{featureType:"codewhisperer",authType:"awsId"},credentials:{featureType:"awsExplorer",authType:"sharedCredentials"},identityCenterCodeWhisperer:{featureType:"codewhisperer",authType:"iamIdentityCenter"},identityCenterCodeCatalyst:{featureType:"codecatalyst",authType:"iamIdentityCenter"},identityCenterExplorer:{featureType:"awsExplorer",authType:"iamIdentityCenter"},aggregateExplorer:{featureType:"awsExplorer",authType:"other"}};var $e=(t,n,r)=>{if(!n.has(t))throw TypeError("Cannot "+r)},b=(t,n,r)=>($e(t,n,"read from private field"),r?r.call(t):n.get(t)),J=(t,n,r)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,r)},q=(t,n,r,l)=>($e(t,n,"write to private field"),l?l.call(t,r):n.set(t,r),r),z,O,ue,_e,pe;const D=N.create(),$t=(0,e.defineComponent)({name:"CredentialsForm",extends:le,components:{FormTitle:ce},props:{state:{type:Object,required:!0},checkIfConnected:{type:Boolean,default:!0}},data(){return{data:{...this.state.data},errors:{...this.state.errors},canSubmit:!0,isConnected:!1,isInputFormShown:!1,lowPriorityButton:"low-priority-button",buttonText:""}},async created(){!this.checkIfConnected&&await this.state.isAuthConnected()?this.buttonText="Add an IAM Role Credential":this.buttonText="Or, provide IAM Roles Credentials",await this.updateConnectedStatus("created")},computed:{collapsibleClass(){return this.isInputFormShown?"icon icon-vscode-chevron-down":"icon icon-vscode-chevron-right"}},methods:{toggleInputFormShown(){this.isInputFormShown=!this.isInputFormShown},async setNewValue(t,n){n&&await this.state.startAuthFormInteraction(),await this.state.setData(t,n.trim()),this.updateForm()},async updateConnectedStatus(t){const n=await this.state.isAuthConnected();this.isConnected=this.checkIfConnected?n:!1,this.emitAuthConnectionUpdated({id:this.state.id,isConnected:n,cause:t})},async submitData(){this.state.startAuthFormInteraction(),this.canSubmit=!1,await this.state.submitData()&&(this.isInputFormShown=!1,await this.updateConnectedStatus("signIn")),this.updateForm(),this.canSubmit=!0},toggleShowForm(){this.isInputFormShown=!this.isInputFormShown},updateForm(){this.data=this.state.data,this.errors=this.state.errors},editCredentialsFile(){D.editCredentialsFile(),D.emitUiClick("auth_editCredentials")},showResourceExplorer(){D.showResourceExplorer()}},watch:{"data.profileName"(t){this.setNewValue("profileName",t)},"data.aws_access_key_id"(t){this.setNewValue("aws_access_key_id",t)},"data.aws_secret_access_key"(t){this.setNewValue("aws_secret_access_key",t)}}}),ze=class{constructor(){J(this,z,void 0),J(this,O,void 0),q(this,z,Xe.instance),q(this,O,He.instance)}static get instance(){return b(this,ue)??q(this,ue,new ze)}async setData(t,n){b(this,z).setData(t,n),await b(this,O).updateErrorFormatting(this.data,t),await b(this,O).setError("submit","")}get data(){return{...b(this,z).getData()}}get errors(){return{...b(this,O).getErrors()}}async isAuthConnected(){return await D.isExplorerConnected("iam")}async isConnectionExists(){return D.isCredentialExists()}get id(){return"credentials"}get featureType(){return"awsExplorer"}get authType(){return"sharedCredentials"}startAuthFormInteraction(){return D.startAuthFormInteraction(this.featureType,this.authType)}async submitData(){const t=b(this,O).updateErrorEmptyFields(this.data);if(b(this,O).getFieldsWithErrors().length>0)return D.failedAuthAttempt(this.id,{reason:t?Ke:je,invalidInputFields:b(this,O).getFieldsWithErrors()}),!1;const r=await b(this,O).authenticateCredentials(this.data);if(r)return D.failedAuthAttempt(this.id,{reason:r.key,invalidInputFields:b(this,O).getFieldsWithErrors()}),!1;const l=await D.trySubmitCredentials(this.data.profileName,this.data);return l?(D.successfulAuthAttempt(this.id),this.reset()):b(this,O).setError("submit","Unexpected extension error. See logs."),l}reset(){b(this,z).reset(),b(this,O).reset()}};let Ze=ze;z=new WeakMap,O=new WeakMap,ue=new WeakMap,J(Ze,ue,void 0);const me=class{setData(t,n){this.data[t]=n}getData(){return this.data}reset(){this.data=me.defaultData}static get defaultData(){return{profileName:"",aws_access_key_id:"",aws_secret_access_key:""}}static get instance(){return b(this,_e)??q(this,_e,new me)}constructor(){this.data=me.defaultData}};let Xe=me;_e=new WeakMap,J(Xe,_e,void 0);const he=class{getErrors(){return this.errors}async setError(t,n){this.errors[t]=n,this.setInvalidInputFields()}reset(){this.errors=he.noErrors,this.setInvalidInputFields()}updateErrorEmptyFields(t){const r=Object.keys(t).filter(l=>!t[l]);return r.forEach(l=>{this.setError(l,"Cannot be empty.")}),r.length>0}async updateErrorFormatting(t,n){if(n==="profileName"){const l=await D.getProfileNameError(t.profileName,!1);this.setError(n,l??"");return}const r=await D.getCredentialFormatError(n,t[n]);this.setError(n,r??"")}async authenticateCredentials(t){const n=await D.getAuthenticatedCredentialsError(t);return n&&this.setError(n.key,n.error),n}getFieldsWithErrors(){return Object.keys(this.errors).filter(n=>this.errors[n])}setInvalidInputFields(){D.setInvalidInputFields(this.getFieldsWithErrors())}static get noErrors(){return{aws_access_key_id:"",aws_secret_access_key:"",profileName:"",submit:""}}static get instance(){return b(this,pe)??q(this,pe,new he)}constructor(){this.errors=he.noErrors}};let He=he;pe=new WeakMap,J(He,pe,void 0);var Ts=B(1290);const zt=(0,P.Z)($t,[["render",Pt]]),Zt={class:"auth-container"},Xt={key:0},Ht={key:0,class:"auth-form-container"},Gt=(0,e.createElementVNode)("label",{class:"input-title"},"Start URL",-1),Qt=(0,e.createElementVNode)("label",{class:"form-description-color input-description-small"},"URL for your organization, provided by an admin or help desk.",-1),Yt=["data-invalid"],Jt={class:"form-description-color input-description-small error-text"},qt=(0,e.createElementVNode)("label",{class:"input-title"},"Region",-1),en=(0,e.createElementVNode)("label",{class:"form-description-color input-description-small"},"AWS Region that hosts Identity directory",-1),tn=(0,e.createElementVNode)("div",{class:"icon icon-lg icon-vscode-edit text-link-color"},null,-1),nn={class:"text-link-color",style:{width:"100%"}},sn={class:"form-description-color input-description-small error-text"},on={class:"form-description-color input-description-small error-text"},rn={key:1,disabled:""};function an(t,n,r,l,g,x){const C=(0,e.resolveComponent)("FormTitle");return(0,e.openBlock)(),(0,e.createElementBlock)("div",Zt,[t.stage==="START"?((0,e.openBlock)(),(0,e.createElementBlock)("div",Xt,[(0,e.createElementVNode)("button",{onClick:n[0]||(n[0]=(...E)=>t.toggleInputFormShown&&t.toggleInputFormShown(...E)),class:(0,e.normalizeClass)(t.isLowPriority?t.lowPriorityButton:"")},[(0,e.createElementVNode)("div",{class:(0,e.normalizeClass)([t.collapsibleClass,"auth-container-icon"])},null,2),(0,e.createTextVNode)(" "+(0,e.toDisplayString)(t.buttonText),1)],2),t.isInputFormShown?((0,e.openBlock)(),(0,e.createElementBlock)("div",Ht,[(0,e.createElementVNode)("div",null,[Gt,Qt,(0,e.withDirectives)((0,e.createElementVNode)("input",{"onUpdate:modelValue":n[1]||(n[1]=E=>t.data.startUrl=E),type:"text","data-invalid":!!t.errors.startUrl},null,8,Yt),[[e.vModelText,t.data.startUrl]]),(0,e.createElementVNode)("div",Jt,(0,e.toDisplayString)(t.errors.startUrl),1)]),(0,e.createElementVNode)("div",null,[qt,en,(0,e.createElementVNode)("div",{onClick:n[2]||(n[2]=E=>t.selectRegion()),style:{display:"flex","flex-direction":"row",gap:"2%",cursor:"pointer"}},[tn,(0,e.createElementVNode)("div",nn,(0,e.toDisplayString)(t.data.region?t.data.region:"Select a region..."),1)]),(0,e.createElementVNode)("div",sn,(0,e.toDisplayString)(t.errors.region),1)]),(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("button",{onClick:n[3]||(n[3]=E=>t.signin())},"Sign in"),(0,e.createElementVNode)("div",on,(0,e.toDisplayString)(t.errors.submit),1)])])):(0,e.createCommentVNode)("v-if",!0)])):(0,e.createCommentVNode)("v-if",!0),t.stage==="WAITING_ON_USER"?((0,e.openBlock)(),(0,e.createElementBlock)("button",rn,"Follow instructions...")):(0,e.createCommentVNode)("v-if",!0),t.stage==="CONNECTED"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:2},[(0,e.createVNode)(C,null,{default:(0,e.withCtx)(()=>[(0,e.createTextVNode)("IAM Identity Center")]),_:1}),(0,e.createElementVNode)("div",{onClick:n[4]||(n[4]=E=>t.signout()),class:"text-link-color",style:{cursor:"pointer"}},"Sign out")],64)):(0,e.createCommentVNode)("v-if",!0)])}var Ge=(t,n,r)=>{if(!n.has(t))throw TypeError("Cannot "+r)},U=(t,n,r)=>(Ge(t,n,"read from private field"),r?r.call(t):n.get(t)),Qe=(t,n,r)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,r)},Ye=(t,n,r,l)=>(Ge(t,n,"write to private field"),l?l.call(t,r):n.set(t,r),r),T,Ce;const I=N.create(),dn=(0,e.defineComponent)({name:"IdentityCenterForm",extends:le,components:{FormTitle:ce},props:{state:{type:Object,required:!0},checkIfConnected:{type:Boolean,default:!0},allowExistingStartUrl:{type:Boolean,default:!1},isLowPriority:{type:Boolean,default:!0}},data(){return{data:{...this.state.data},errors:{...this.state.errors},isConnected:!1,stage:"START",authName:this.state.name,isInputFormShown:!1,lowPriorityButton:"low-priority-button",buttonText:""}},async created(){this.data=this.state.data,await this.emitUpdate("created")},computed:{collapsibleClass(){return this.isInputFormShown?"icon icon-vscode-chevron-down":"icon icon-vscode-chevron-right"}},methods:{setNewValue(t,n){this.state.setValue(t,n,this.allowExistingStartUrl),this.errors=this.state.errors},async signin(){await this.state.startIdentityCenterSetup(()=>{this.stage="WAITING_ON_USER"})?await this.emitUpdate("signIn"):this.updateForm()},async updateForm(){this.stage=await this.state.stage(),this.data=this.state.data,this.errors=this.state.errors,this.isConnected=await this.state.isAuthConnected(),this.isConnected&&!this.checkIfConnected?this.buttonText="Add an IAM Identity Center profile":this.buttonText="Sign in with IAM Identity Center (SSO)"},async emitUpdate(t){await this.updateForm(),this.emitAuthConnectionUpdated({id:this.state.id,isConnected:this.isConnected,cause:t})},async selectRegion(){this.errors.submit="";const t=await this.state.selectRegion();t&&(this.data.region=t.id)},async signout(){await this.state.signout(),this.emitUpdate("signOut")},showView(){this.state.showView()},toggleInputFormShown(){this.isInputFormShown=!this.isInputFormShown}},watch:{"data.startUrl"(t){this.setNewValue("startUrl",t)},"data.region"(t){this.setNewValue("region",t)}}}),we=class{constructor(){this._stage="START",Qe(this,T,void 0),this._data=we.initialData,Ye(this,T,Je.instance)}async setValue(t,n,r){this._data[t]=n,U(this,T).setError("submit",""),t==="startUrl"&&(n&&await this.startAuthFormInteraction(),U(this,T).setError(t,await U(this,T).getStartUrlError(n,r))),t==="region"&&n&&(this._data.region=n,U(this,T).setError("region",""))}get data(){return{...this._data}}get errors(){return U(this,T).getErrors()}get authType(){return"iamIdentityCenter"}async startIdentityCenterSetup(t){await this.startAuthFormInteraction();const n=U(this,T).updateEmptyFieldErrors(this.data),r=U(this,T).getFieldsWithErrors().filter(g=>g!=="submit");if(r.length>0)return I.failedAuthAttempt(this.id,{reason:n?Ke:je,invalidInputFields:r}),!1;t();const l=await this._startIdentityCenterSetup();return l?(U(this,T).setError("submit",l.text),I.failedAuthAttempt(this.id,{reason:l.id,invalidInputFields:U(this,T).getFieldsWithErrors()})):(I.successfulAuthAttempt(this.id),this.reset()),l===void 0}async stage(){const t=await this.isAuthConnected();return this._stage=t?"CONNECTED":"START",this._stage}async selectRegion(){return await this.startAuthFormInteraction(),U(this,T).setError("submit",""),I.getIdentityCenterRegion()}startAuthFormInteraction(){return I.startAuthFormInteraction(this.featureType,this.authType)}reset(){this._data=we.initialData,U(this,T).reset()}static get initialData(){return{startUrl:"",region:""}}showView(){I.emitUiClick(this.uiClickOpenId),this._showView()}async signout(){return I.emitUiClick(this.uiClickSignout),this._signout()}};let Be=we;T=new WeakMap;class ln extends Be{get id(){return"identityCenterCodeWhisperer"}get name(){return"CodeWhisperer"}get uiClickOpenId(){return"auth_openCodeWhisperer"}get uiClickSignout(){return"auth_codewhisperer_signoutIdentityCenter"}get featureType(){return"codewhisperer"}async _startIdentityCenterSetup(){return I.startCWIdentityCenterSetup(this.data.startUrl,this.data.region)}async isAuthConnected(){return I.isCodeWhispererIdentityCenterConnected()}isConnectionExists(){return I.isCodeWhispererIdCExists()}async _showView(){return I.showCodeWhispererView()}_signout(){return I.signoutCWIdentityCenter()}}class cn extends Be{get id(){return"identityCenterCodeCatalyst"}get name(){return"CodeCatalyst"}get uiClickOpenId(){return"auth_openCodeCatalyst"}get uiClickSignout(){return"auth_codecatalyst_signoutIdentityCenter"}get featureType(){return"codecatalyst"}async _startIdentityCenterSetup(){return I.startCodeCatalystIdentityCenterSetup(this.data.startUrl,this.data.region)}async isAuthConnected(){return I.isCodeCatalystIdentityCenterConnected()}isConnectionExists(){return I.isCodeCatalystIdCExists()}_showView(){return I.showCodeCatalystNode()}_signout(){return I.signoutCodeCatalystIdentityCenter()}}class un extends Be{get id(){return"identityCenterExplorer"}get name(){return"Resource Explorer"}get uiClickOpenId(){return"auth_openAWSExplorer"}get uiClickSignout(){return"auth_explorer_signoutIdentityCenter"}get featureType(){return"awsExplorer"}async stage(){return"START"}async _startIdentityCenterSetup(){return I.createIdentityCenterConnection(this.data.startUrl,this.data.region)}async isAuthConnected(){return await I.isExplorerConnected("idc")}isConnectionExists(){return I.isIdentityCenterExists()}async _showView(){return I.showResourceExplorer()}_signout(){throw new Error('Explorer Identity Center should not use "signout functionality')}}const fe=class{getErrors(){return{...this.errors}}setError(t,n){this.errors[t]=n,this.setInvalidInputFields()}reset(){this.errors=fe.defaultErrors,this.setInvalidInputFields()}updateEmptyFieldErrors(t){const r=Object.keys(t).filter(l=>!t[l]);return r.forEach(l=>{this.setError(l,"Cannot be empty.")}),r.length>0}async getStartUrlError(t,n){return await I.getSsoUrlError(t,n)??""}getFieldsWithErrors(){return Object.keys(this.errors).filter(n=>this.errors[n])}setInvalidInputFields(){I.setInvalidInputFields(this.getFieldsWithErrors())}static get defaultErrors(){return{startUrl:"",region:"",submit:""}}static get instance(){return U(this,Ce)??Ye(this,Ce,new fe)}constructor(){this.errors=fe.defaultErrors}};let Je=fe;Ce=new WeakMap,Qe(Je,Ce,void 0);var Ps=B(8431);const Se=(0,P.Z)(dn,[["render",an]]),_n={class:"feature-panel-container border-common"};function pn(t,n,r,l,g,x){return(0,e.openBlock)(),(0,e.createElementBlock)("div",_n,"Must Be Implemented")}var qe=(t,n,r)=>{if(!n.has(t))throw TypeError("Cannot "+r)},mn=(t,n,r)=>(qe(t,n,"read from private field"),r?r.call(t):n.get(t)),hn=(t,n,r)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,r)},Cn=(t,n,r,l)=>(qe(t,n,"write to private field"),l?l.call(t,r):n.set(t,r),r),ve;const et=N.create(),fn=(0,e.defineComponent)({name:"BaseServiceItemContent",extends:Ue,props:{state:{type:Object,required:!0},isActive:{type:Boolean,required:!0}},data(){return{authFormContainerKey:0}},methods:{refreshAuthFormContainer(){this.authFormContainerKey++}}}),tt=class{constructor(){this.isActive=(0,e.reactive)({awsExplorer:!1,codecatalyst:!1,codewhisperer:!1})}static get instance(){return mn(this,ve)??Cn(this,ve,new tt)}registerPanel(t,n){document.getElementById(t)?.addEventListener("click",()=>{this.setActivePanel(n)})}async setupInitialActivePanel(){const t=await et.getInitialService();!t||(this.setActivePanel(t),et.onDidSelectService(n=>{this.setActivePanel(n)}))}setActivePanel(t){Object.keys(this.isActive).forEach(n=>this.isActive[n]=!1),this.isActive[t]=!0}};let ee=tt;ve=new WeakMap,hn(ee,ve,void 0);var Ms=B(6902);const xe=(0,P.Z)(fn,[["render",pn]]),vn={key:0,class:"auth-container-section"},An={class:"form-description-color input-description-small error-text"},yn={key:1,class:"auth-container-section"},gn=[(0,e.createElementVNode)("button",{disabled:""},"Follow instructions...",-1)],En={class:"auth-container-section"};function In(t,n,r,l,g,x){const C=(0,e.resolveComponent)("FormTitle");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{class:(0,e.normalizeClass)([[t.disabled?"disabled-form":""],"auth-container"])},[t.stage==="START"?((0,e.openBlock)(),(0,e.createElementBlock)("div",vn,[(0,e.createElementVNode)("button",{onClick:n[0]||(n[0]=E=>t.startSignIn())},(0,e.toDisplayString)(t.submitButtonText),1),(0,e.createElementVNode)("div",An,(0,e.toDisplayString)(t.error),1)])):(0,e.createCommentVNode)("v-if",!0),t.stage==="WAITING_ON_USER"?((0,e.openBlock)(),(0,e.createElementBlock)("div",yn,gn)):(0,e.createCommentVNode)("v-if",!0),t.stage==="CONNECTED"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:2},[(0,e.createVNode)(C,null,{default:(0,e.withCtx)(()=>[(0,e.createTextVNode)("AWS Builder ID")]),_:1}),(0,e.createElementVNode)("div",En,[(0,e.createElementVNode)("div",{onClick:n[1]||(n[1]=E=>t.signout()),class:"text-link-color",style:{cursor:"pointer"}},"Sign out")])],64)):(0,e.createCommentVNode)("v-if",!0)],2)}var nt=(t,n,r)=>{if(!n.has(t))throw TypeError("Cannot "+r)},be=(t,n,r)=>(nt(t,n,"read from private field"),r?r.call(t):n.get(t)),Fe=(t,n,r)=>{if(n.has(t))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(t):n.set(t,r)},te=(t,n,r,l)=>(nt(t,n,"write to private field"),l?l.call(t,r):n.set(t,r),r),Z,Ae,ye;const k=N.create(),wn=(0,e.defineComponent)({name:"CredentialsForm",extends:le,components:{FormTitle:ce},props:{state:{type:Object,required:!0},disabled:{type:Boolean,default:!1}},data(){return{stage:"START",isConnected:!1,builderIdCode:"",name:this.state.name,error:"",signUpUrl:this.state.getSignUpUrl(),submitButtonText:"",description:this.state.getDescription()}},async created(){await this.emitUpdate("created")},methods:{async startSignIn(){await this.state.startAuthFormInteraction(),this.stage="WAITING_ON_USER",await this.state.startBuilderIdSetup()?await this.emitUpdate("signIn"):await this.updateForm()},async updateForm(){this.error=this.state.error,this.stage=await this.state.stage(),this.submitButtonText=await this.state.getSubmitButtonText(),this.isConnected=await this.state.isAuthConnected()},async emitUpdate(t){await this.updateForm(),this.emitAuthConnectionUpdated({id:this.state.id,isConnected:this.isConnected,cause:t})},async signout(){await this.state.signout(),this.emitUpdate("signOut")},showNodeInView(){this.state.showNodeInView()}}});class st{constructor(){this._stage="START",Fe(this,Z,"")}async startBuilderIdSetup(){te(this,Z,"");const n=await this._startBuilderIdSetup();return n?(te(this,Z,n.text),k.failedAuthAttempt(this.id,{reason:n.id})):(te(this,Z,""),k.successfulAuthAttempt(this.id)),n===void 0}async stage(){const n=await this.isAuthConnected();return this._stage=n?"CONNECTED":"START",this._stage}async signout(){await k.signoutBuilderId(),k.emitUiClick(this.uiClickSignout)}get authType(){return"awsId"}get error(){return be(this,Z)}async getSubmitButtonText(){return await this.anyBuilderIdConnected()?`Connect AWS Builder ID with ${this.name}`:"Use for free with AWS Builder ID"}async anyBuilderIdConnected(){return(await Promise.all([Ne.instance.isAuthConnected(),De.instance.isAuthConnected()])).some(r=>r)}getSignUpUrl(){return"https://docs.aws.amazon.com/signin/latest/userguide/sign-in-aws_builder_id.html"}getDescription(){return"With AWS Builder ID, sign in for free without an AWS account."}startAuthFormInteraction(){return k.startAuthFormInteraction(this.featureType,this.authType)}showNodeInView(){this._showNodeInView(),k.emitUiClick(this.uiClickOpenId)}}Z=new WeakMap;const ot=class extends st{get name(){return"CodeWhisperer"}get id(){return"builderIdCodeWhisperer"}get uiClickOpenId(){return"auth_openCodeWhisperer"}get uiClickSignout(){return"auth_codewhisperer_signoutBuilderId"}get featureType(){return"codewhisperer"}isAuthConnected(){return k.isCodeWhispererBuilderIdConnected()}isConnectionExists(){return k.hasBuilderId("codewhisperer")}_startBuilderIdSetup(){return k.startCodeWhispererBuilderIdSetup()}_showNodeInView(){return k.showCodeWhispererView()}getSignUpUrl(){return"https://docs.aws.amazon.com/codewhisperer/latest/userguide/whisper-setup-indv-devs.html"}constructor(){super()}static get instance(){return be(this,Ae)??te(this,Ae,new ot)}};let Ne=ot;Ae=new WeakMap,Fe(Ne,Ae,void 0);const rt=class extends st{get name(){return"CodeCatalyst"}get id(){return"builderIdCodeCatalyst"}get uiClickOpenId(){return"auth_openCodeCatalyst"}get uiClickSignout(){return"auth_codecatalyst_signoutBuilderId"}get featureType(){return"codecatalyst"}isAuthConnected(){return k.isCodeCatalystBuilderIdConnected()}isConnectionExists(){return k.hasBuilderId("codecatalyst")}_startBuilderIdSetup(){return k.startCodeCatalystBuilderIdSetup()}_showNodeInView(){return k.showCodeCatalystNode()}getDescription(){return"You must have an existing CodeCatalyst Space connected to your AWS Builder ID."}getSignUpUrl(){return"https://aws.amazon.com/codecatalyst/"}constructor(){super()}static get instance(){return be(this,ye)??te(this,ye,new rt)}};let De=rt;ye=new WeakMap,Fe(De,ye,void 0);var Vs=B(4900);const it=(0,P.Z)(wn,[["render",In]]),Ls={credentials:"credentials",builderIdCodeWhisperer:"builderIdCodeWhisperer",builderIdCodeCatalyst:"builderIdCodeCatalyst",identityCenterCodeWhisperer:"identityCenterCodeWhisperer",identityCenterCodeCatalyst:"identityCenterCodeCatalyst",identityCenterExplorer:"identityCenterExplorer",aggregateExplorer:"aggregateExplorer"},Bn={credentials:Ze.instance,builderIdCodeWhisperer:Ne.instance,builderIdCodeCatalyst:De.instance,identityCenterCodeWhisperer:new ln,identityCenterCodeCatalyst:new cn,identityCenterExplorer:new un};class Te{async getConnectedAuth(){for(const n of this.getAuthForms())if(await n.isAuthConnected())return n.id}async hasConnectedAuth(){return!!await this.getConnectedAuth()}}const V=Bn,Sn={class:"auth-container"};function xn(t,n,r,l,g,x){const C=(0,e.resolveComponent)("FormTitle");return(0,e.openBlock)(),(0,e.createElementBlock)("div",Sn,[t.isConnected?((0,e.openBlock)(),(0,e.createBlock)(C,{key:0},{default:(0,e.withCtx)(()=>[(0,e.createTextVNode)((0,e.toDisplayString)(t.connectionName),1)]),_:1})):(0,e.createCommentVNode)("v-if",!0)])}const bn=(0,e.defineComponent)({name:"ExplorerAggregateForm",extends:le,components:{FormTitle:ce},props:{identityCenterState:{type:Object,required:!0},credentialsState:{type:Object,required:!0}},data(){return{isConnected:!1,connectionName:""}},async created(){this.isConnected=await this.credentialsState.isAuthConnected()||await this.identityCenterState.isAuthConnected(),await this.updateConnectionName(),this.emitAuthConnectionUpdated({id:"aggregateExplorer",isConnected:this.isConnected,cause:"created"})},methods:{async updateConnectionName(){const t=await this.getCurrentConnection();t===void 0?this.connectionName="":this.connectionName=t==="credentials"?"IAM Credentials":"IAM Identity Center"},async getCurrentConnection(){if(!!this.isConnected)return await this.credentialsState.isAuthConnected()?"credentials":"identityCenterExplorer"}}});var $s=B(9535);const Fn=(0,P.Z)(bn,[["render",xn]]),at=N.create();function dt(){return{isLoaded:{credentials:!1,identityCenterExplorer:!1},isCredentialsShown:!1,isIdentityCenterShown:!1,panelId:"explorer-panel",connectedAuth:void 0,removeAuthForms:!1}}const Nn=(0,e.defineComponent)({name:"AwsExplorerContent",components:{CredentialsForm:zt,IdentityCenterForm:Se,ExplorerAggregateForm:Fn},extends:xe,data(){return dt()},async created(){at.onDidConnectionChangeExplorer(()=>{this.refreshPanel()})},mounted(){ee.instance.registerPanel(this.$data.panelId,"awsExplorer")},computed:{credentialsFormState(){return V.credentials},identityCenterFormState(){return V.identityCenterExplorer},canShowAuthForms(){return this.connectedAuth?!0:!(Object.values(this.isLoaded).filter(n=>!n).length>0)}},methods:{async refreshPanel(){Object.assign(this.$data,dt()),this.refreshAuthFormContainer()},async onAuthConnectionUpdated(t){if(t.cause==="signOut"){this.removeAuthForms=!0;return}t.isConnected&&(this.connectedAuth=t.id),this.isLoaded[t.id]=!0},showExplorer(){at.showResourceExplorer()}}});class Dn extends Te{getAuthForms(){return[V.credentials,V.identityCenterExplorer]}}var Zs=B(7656);const lt=(0,P.Z)(Nn,[["render",j]]),Tn=["id"],kn={class:"feature-panel-container-upper"},Pn=(0,e.createElementVNode)("div",{class:"feature-panel-container-title"},"Amazon Q + CodeWhisperer",-1),On=(0,e.createElementVNode)("img",{class:"feature-panel-image",src:"https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/codewhispererChat.gif",alt:"CodeWhisperer Chat example GIF"},null,-1),Mn={class:"feature-panel-container-description"},Wn=(0,e.createElementVNode)("br",null,null,-1),Un=(0,e.createElementVNode)("br",null,null,-1),Vn=(0,e.createElementVNode)("hr",null,null,-1);function Rn(t,n,r,l,g,x){const C=(0,e.resolveComponent)("BuilderIdForm"),E=(0,e.resolveComponent)("IdentityCenterForm");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:t.panelId,class:(0,e.normalizeClass)(["feature-panel-container border-common",t.isActive?"feature-panel-selected":""])},[(0,e.createElementVNode)("div",kn,[Pn,On,(0,e.createElementVNode)("div",Mn,[(0,e.createTextVNode)(" Build, maintain, and transform applications using generative AI. "),Wn,Un,(0,e.createTextVNode)(" Learn more about "),(0,e.createElementVNode)("a",{href:"https://aws.amazon.com/q/",onClick:n[0]||(n[0]=M=>t.emitUiClick("auth_learnMoreAmazonQ"))}," Amazon Q"),(0,e.createTextVNode)(" and "),(0,e.createElementVNode)("a",{href:"https://aws.amazon.com/codewhisperer/",onClick:n[1]||(n[1]=M=>t.emitUiClick("auth_learnMoreCodeWhisperer"))}," CodeWhisperer"),(0,e.createTextVNode)(". ")])]),Vn,t.removeAuthForms?(0,e.createCommentVNode)("v-if",!0):(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("div",{class:"feature-panel-auth-container",key:t.authFormContainerKey},[t.connectedAuth===void 0||t.connectedAuth==="builderIdCodeWhisperer"?((0,e.openBlock)(),(0,e.createBlock)(C,{key:0,state:t.builderIdState,onAuthConnectionUpdated:t.onAuthConnectionUpdated},null,8,["state","onAuthConnectionUpdated"])):(0,e.createCommentVNode)("v-if",!0),t.connectedAuth===void 0||t.connectedAuth==="identityCenterCodeWhisperer"?((0,e.openBlock)(),(0,e.createBlock)(E,{key:1,state:t.identityCenterState,"allow-existing-start-url":!0,onAuthConnectionUpdated:t.onAuthConnectionUpdated},null,8,["state","onAuthConnectionUpdated"])):(0,e.createCommentVNode)("v-if",!0),t.connectedAuth?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:2,onClick:n[2]||(n[2]=M=>t.showAmazonQChat())},"Open Amazon Q chat")):(0,e.createCommentVNode)("v-if",!0),t.connectedAuth?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:3,onClick:n[3]||(n[3]=M=>t.showCodeWhispererView())},"Open CodeWhisperer in Toolkit")):(0,e.createCommentVNode)("v-if",!0)])),[[e.vShow,t.canShowAuthForms]])],10,Tn)}const X=N.create();function ct(){return{isLoaded:{builderIdCodeWhisperer:!1,identityCenterCodeWhisperer:!1},panelId:"codewhisperer-panel",isIdentityCenterShown:!0,connectedAuth:void 0,removeAuthForms:!1}}const Ln=(0,e.defineComponent)({name:"CodeWhispererContent",components:{BuilderIdForm:it,IdentityCenterForm:Se},extends:xe,data(){return ct()},created(){X.onDidConnectionChangeCodeWhisperer(()=>{this.refreshPanel()})},mounted(){ee.instance.registerPanel(this.$data.panelId,"codewhisperer")},computed:{builderIdState(){return V.builderIdCodeWhisperer},identityCenterState(){return V.identityCenterCodeWhisperer},collapsibleClass(){return this.isIdentityCenterShown?"icon icon-vscode-chevron-down":"icon icon-vscode-chevron-right"},canShowAuthForms(){return this.connectedAuth?!0:!(Object.values(this.isLoaded).filter(n=>!n).length>0)}},methods:{async refreshPanel(){Object.assign(this.$data,ct()),this.refreshAuthFormContainer()},async onAuthConnectionUpdated(t){if(t.cause==="signOut"){this.removeAuthForms=!0;return}t.isConnected&&(this.connectedAuth=t.id),this.isLoaded[t.id]=!0},uiClick(t){X.emitUiClick(t)},showCodeWhispererView(){X.showCodeWhispererView(),X.emitUiClick("auth_openCodeWhisperer")},showAmazonQChat(){X.showAmazonQChat(),X.emitUiClick("auth_amazonQChat")}}});class Kn extends Te{getAuthForms(){return[V.builderIdCodeWhisperer,V.identityCenterCodeWhisperer]}}var Hs=B(6386);const ut=(0,P.Z)(Ln,[["render",Rn]]),jn=["id"],$n={class:"feature-panel-container-upper"},zn=(0,e.createElementVNode)("div",{class:"feature-panel-container-title"},"Amazon CodeCatalyst",-1),Zn=(0,e.createElementVNode)("img",{class:"feature-panel-image",src:"https://github.com/aws/aws-toolkit-vscode/raw/HEAD/docs/marketplace/vscode/CC_dev_env.gif",alt:"CodeCatalyst example GIF"},null,-1),Xn={class:"feature-panel-container-description"},Hn=(0,e.createElementVNode)("hr",null,null,-1);function Gn(t,n,r,l,g,x){const C=(0,e.resolveComponent)("BuilderIdForm"),E=(0,e.resolveComponent)("IdentityCenterForm");return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:t.panelId,class:(0,e.normalizeClass)(["feature-panel-container border-common",t.isActive?"feature-panel-selected":""])},[(0,e.createElementVNode)("div",$n,[zn,Zn,(0,e.createElementVNode)("div",Xn,[(0,e.createTextVNode)(" Spend more time coding and less time managing development environments. "),(0,e.createElementVNode)("a",{href:"https://aws.amazon.com/codecatalyst/",onClick:n[0]||(n[0]=M=>t.emitUiClick("auth_learnMoreCodeCatalyst"))},"Learn more.")])]),Hn,t.removeAuthForms?(0,e.createCommentVNode)("v-if",!0):(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("div",{class:"feature-panel-auth-container",key:t.authFormContainerKey},[t.connectedAuth===void 0||t.connectedAuth==="builderIdCodeCatalyst"?((0,e.openBlock)(),(0,e.createBlock)(C,{key:0,state:t.builderIdState,onAuthConnectionUpdated:t.onAuthConnectionUpdated},null,8,["state","onAuthConnectionUpdated"])):(0,e.createCommentVNode)("v-if",!0),t.connectedAuth===void 0||t.connectedAuth==="identityCenterCodeCatalyst"?((0,e.openBlock)(),(0,e.createBlock)(E,{key:1,state:t.identityCenterState,"allow-existing-start-url":!0,onAuthConnectionUpdated:t.onAuthConnectionUpdated},null,8,["state","onAuthConnectionUpdated"])):(0,e.createCommentVNode)("v-if",!0),t.connectedAuth?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:2,onClick:n[1]||(n[1]=M=>t.showCodeCatalystNode())},"Open CodeCatalyst in Toolkit")):(0,e.createCommentVNode)("v-if",!0)])),[[e.vShow,t.canShowAuthForms]])],10,jn)}const ke=N.create();function _t(){return{isLoaded:{builderIdCodeCatalyst:!1,identityCenterCodeCatalyst:!1},panelId:"codecatalyst-panel",connectedAuth:void 0,removeAuthForms:!1}}const Qn=(0,e.defineComponent)({name:"CodeCatalystContent",components:{BuilderIdForm:it,IdentityCenterForm:Se},extends:xe,data(){return _t()},created(){ke.onDidConnectionChangeCodeCatalyst(()=>{this.refreshPanel()})},mounted(){ee.instance.registerPanel(this.$data.panelId,"codecatalyst")},computed:{builderIdState(){return V.builderIdCodeCatalyst},identityCenterState(){return V.identityCenterCodeCatalyst},canShowAuthForms(){return this.connectedAuth?!0:!(Object.values(this.isLoaded).filter(n=>!n).length>0)}},methods:{async refreshPanel(){Object.assign(this.$data,_t()),this.refreshAuthFormContainer()},async onAuthConnectionUpdated(t){if(t.cause==="signOut"){this.removeAuthForms=!0;return}t.isConnected&&(this.connectedAuth=t.id),this.isLoaded[t.id]=!0},showCodeCatalystNode(){ke.showCodeCatalystNode(),ke.emitUiClick("auth_openCodeCatalyst")}}});class Yn extends Te{getAuthForms(){return[V.builderIdCodeCatalyst,V.identityCenterCodeCatalyst]}}var Qs=B(5459);const pt=(0,P.Z)(Qn,[["render",Gn]]),Js={awsExplorer:lt,codecatalyst:pt,codewhisperer:ut},Jn={awsExplorer:new Dn,codecatalyst:new Yn,codewhisperer:new Kn},qs=null,eo=null,to=null,qn={style:{display:"flex","flex-direction":"row"}},es={style:{"font-weight":"bold"}};function ts(t,n,r,l,g,x){const C=(0,e.resolveComponent)("NotificationContainer");return(0,e.openBlock)(),(0,e.createBlock)(C,{type:"Success",onCloseNotification:n[1]||(n[1]=E=>t.closeMessage())},{"message-slot":(0,e.withCtx)(()=>[(0,e.createElementVNode)("div",qn,[(0,e.createTextVNode)(" Connected to\xA0"),(0,e.createElementVNode)("span",es,(0,e.toDisplayString)(t.args.authName),1),(0,e.createTextVNode)("! See connections in the\xA0"),(0,e.createElementVNode)("a",{onClick:n[0]||(n[0]=E=>t.showConnectionQuickPick()),style:{cursor:"pointer"}},"Toolkit panel"),(0,e.createTextVNode)(". ")])]),_:1})}function ns(t,n,r,l,g,x){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{class:(0,e.normalizeClass)(["border-common notification-container",t.textColorClass]),style:(0,e.normalizeStyle)({width:"100%","white-space":"nowrap",display:"flex","flex-direction":"row","justify-content":"space-between","background-color":t.backgroundColor,"align-items":"center",padding:"1%"})},[(0,e.createElementVNode)("div",null,[(0,e.createCommentVNode)(" To use named-slot: <template v-slot:message-slot></template> "),(0,e.renderSlot)(t.$slots,"message-slot")]),(0,e.createElementVNode)("div",{onClick:n[0]||(n[0]=C=>t.emitCloseNotification(t.id)),style:{cursor:"pointer"},class:"icon icon-lg icon-vscode-chrome-close"})],6)}const ss={Success:"#049410",Failure:"#b00202"},os={Success:"success-text",Failure:"failure-text"},rs=(0,e.defineComponent)({name:"NotificationContainer",emits:["close-notification"],props:{type:{type:String,required:!0}},data(){return{id:crypto.randomUUID()}},computed:{backgroundColor(){return ss[this.type]},textColorClass(){return os[this.type]}},methods:{emitCloseNotification(t){this.$emit("close-notification",t)}}});var no=B(6043);const mt=(0,P.Z)(rs,[["render",ns]]),is=(0,e.defineComponent)({name:"BaseNotification",props:{args:{type:Object,required:!1}},methods:{getComponentId(){console.error(`Auth: Component ${this.$options.name} did not implement 'getComponentId()'`)}}}),ht=N.create(),as=Y.instance,ds=(0,e.defineComponent)({name:"ConnectedNotification",components:{NotificationContainer:mt},extends:is,props:{args:{type:Object,required:!0}},methods:{showConnectionQuickPick(){ht.showConnectionQuickPick(),ht.emitUiClick("auth_openConnectionSelector")},getComponentId(){return"ConnectedNotification"},closeMessage(){as.clearSuccessNotification()}}}),ls=(0,P.Z)(ds,[["render",ts]]),cs={style:{display:"flex","flex-direction":"row"}};function us(t,n,r,l,g,x){const C=(0,e.resolveComponent)("NotificationContainer");return(0,e.openBlock)(),(0,e.createBlock)(C,{type:"Success",onCloseNotification:n[1]||(n[1]=E=>t.closeMessage())},{"message-slot":(0,e.withCtx)(()=>[(0,e.createElementVNode)("div",cs,[(0,e.createTextVNode)(" IAM Credentials detected, select one in the\xA0"),(0,e.createElementVNode)("a",{onClick:n[0]||(n[0]=E=>t.showConnectionQuickPick()),style:{cursor:"pointer"}},"Toolkit panel"),(0,e.createTextVNode)("\xA0to enable the AWS Explorer. ")])]),_:1})}const ne=N.create(),_s=Y.instance,ps=(0,e.defineComponent)({name:"CredentialsNotification",components:{NotificationContainer:mt},emits:["close-notification"],methods:{showConnectionQuickPick(){ne.showConnectionQuickPick(),ne.emitUiClick("auth_openConnectionSelector")},closeMessage(){_s.clearCredentialsNotification()}}});async function ms(t){const n=await ne.isExtensionFirstUse(),r=await ne.isCredentialConnected(),l=await ne.isCredentialExists();n&&(r||l)?t.model.showFoundCredentials=!0:t.model.showFoundCredentials=!1}const hs=(0,P.Z)(ps,[["render",us]]),Ct=N.create(),ft=ee.instance,Cs=(0,e.defineComponent)({components:{ConnectedNotification:ls,CredentialsNotification:hs,AwsExplorerContent:lt,CodeCatalystContent:pt,CodeWhispererContent:ut},name:"AuthRoot",data(){return{serviceItemsAuthStatus:Jn,notifications:Y.instance,panelActivityState:ft}},async created(){this.setRelativeSize(),await this.getAllExistingAuths().then(t=>Ct.setAuthsInitial(t)),await ms(this.notifications)},mounted(){ft.setupInitialActivePanel()},computed:{},methods:{onAuthConnectionUpdated(t,n){n.cause!=="created"&&n.isConnected&&n.cause},async getAllExistingAuths(){const t=Object.keys(this.serviceItemsAuthStatus).map(r=>{const l=r;return this.serviceItemsAuthStatus[l]}),n=[];for(const r of t)for(const l of r.getAuthForms())await l.isConnectionExists()&&n.push(l.id);return n},openFeedbackForm(){Ct.openFeedbackForm()},setRelativeSize(){document.documentElement.style.fontSize="14px"}}});var lo=B(8728);const fs=(0,P.Z)(Cs,[["render",Ie]]);/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 *
 * This module is run within the webview, and will mount the Vue app.
 */const vt=()=>(0,e.createApp)(fs),At=vt();At.mount("#vue-app"),window.addEventListener("remount",()=>{At.unmount(),vt().mount("#vue-app")})})();var Me=this;for(var We in se)Me[We]=se[We];se.__esModule&&Object.defineProperty(Me,"__esModule",{value:!0})})();

//# sourceMappingURL=index.js.map