(()=>{var J={5408:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>b});var i=n(7537),o=n.n(i),l=n(3645),C=n.n(l),B=C()(o());B.push([e.id,`
.generateSuggestionDiv {
    width: 100%;
    margin-right: 5%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}
.generateSuggestionHeaderDiv {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 15px;
}
.generateSuggestionHeader {
    font-family: Verdana;
    font-size: 24px;
    font-weight: 860;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}
.generateSuggestionDescription {
    font-family: Verdana;
    font-size: 14px;
    font-weight: 510;
    line-height: 21px;
    padding-top: 20px;
    letter-spacing: 0em;
    text-align: left;
}
.generateSuggestionLearnMore {
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    color: #0097fb;
}
.generateSuggestionTabRow {
    display: flex;
    flex-direction: row;
    height: 26px;
    gap: 10px;
    padding-left: 10px;
    padding-right: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    align-items: center;
    justify-content: space-between;
}
.generateSuggestionTabRowLabel {
    font-family: Verdana;
    font-size: 14px;
    font-weight: 350;
    line-height: 17px;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.generateSuggestionTabMachine {
    display: flex;
    flex-direction: row;
    padding-left: 10px;
}
.generateSuggestionTabMachineColorGroup1 {
    background-color: var(--vscode-editorWidget-background);
}
.generateSuggestionTabMachineText {
    padding-left: 5px;
    padding-right: 10px;
    padding-top: 4px;
    font-family: Verdana;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 350;
}
.tableDivSub {
    margin-top: 10px;
    border-collapse: collapse;
    width: 100%;
    border-radius: 8px;
    border: 1.12px solid #424750;
}
.col2 {
    border: 1px solid #555353;
    border-radius: 3px;
    width: fit-content;
    padding: 2px 10px;
    margin-right: 5px;
    color: #ffffff;
    background: linear-gradient(0deg, #3d3d3d, #3d3d3d), linear-gradient(0deg, #555353, #555353);
    font-family: Verdana;
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    justify-content: center;
    justify-items: center;
    align-items: center;
}
.tryExample {
    justify-content: end;
    height: fit-content;
    width: fit-content;
    padding: 6.7 12.3;
}
`,"",{version:3,sources:["webpack://./src/codewhisperer/vue/genSuggestionTab.vue"],names:[],mappings:";AAmHA;IACI,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,mBAAmB;AACvB;AACA;IACI,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,qBAAqB;IACrB,eAAe;IACf,cAAc;AAClB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,SAAS;IACT,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,uDAAuD;AAC3D;AACA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,4BAA4B;AAChC;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,4FAA4F;IAC5F,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;AACrB",sourcesContent:[`<!-- This Vue File provides Sandbox files for experimenting CodeWhisperer and generating code suggestions -->
<template>
    <div class="generateSuggestionDiv">
        <div class="generateSuggestionHeaderDiv">
            <div class="generateSuggestionHeader">Generate code suggestions with examples</div>
        </div>
        <!-- Tab -->
        <div>
            <div class="tableDivSub" v-for="(row, index) in tabs[activeTab].tableData" :key="index">
                <div v-for="(column, columnIndex) in [row.column1, row.column2, row.column3]" :key="columnIndex">
                    <div
                        :class="[
                            'generateSuggestionTabRow',
                            columnIndex % 2 === 1 ? 'generateSuggestionTabMachineColorGroup1' : '',
                        ]"
                    >
                        <div class="generateSuggestionTabRowLabel">
                            <template v-if="columnIndex === 0"> Generate code suggestions as you type </template>
                            <template v-else-if="columnIndex === 1">
                                Generate code suggestions manually using
                                <div class="generateSuggestionTabMachine">
                                    <div class="col2" v-if="osState === 'Mac'">Option</div>
                                    <div class="col2" v-else>Alt</div>
                                    <div class="generateSuggestionTabMachineText">+</div>
                                    <div class="col2">C</div>
                                </div>
                            </template>
                            <template v-else> Generate unit test cases </template>
                        </div>
                        <button class="tryExample" @click="onClick(column, tabs[activeTab].label)">Try example</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="generateSuggestionDescription">
            CodeWhisperer supports 15 programming languages, including TypeScript, JavaScript, Python, Java, and C#.
            <a
                class="generateSuggestionLearnMore"
                href="https://docs.aws.amazon.com/codewhisperer/latest/userguide/language-ide-support.html"
                @click="emitUiClick('codewhisperer_GenerateSuggestions_LearnMore')"
                >Learn more</a
            >
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { CodeWhispererWebview } from './backend'
import TelemetryClient from '../../codewhisperer/vue/telemetry.vue'
import { WebviewClientFactory } from '../../webviews/client'
import { CodewhispererLanguage, CodewhispererGettingStartedTask } from '../../shared/telemetry/telemetry'
const client = WebviewClientFactory.create<CodeWhispererWebview>()

export default defineComponent({
    name: 'GenerateSuggestionTab',
    components: {},
    extends: TelemetryClient,
    data() {
        return {
            activeTab: parseInt(sessionStorage.getItem('activeTab') || '0'),
            osState: '',
            tabs: [
                {
                    label: 'Python',
                    tableData: [
                        {
                            column1: [
                                'CodeWhisperer_generate_suggestion.py',
                                \`# TODO: place your cursor at the end of line 5 and press Enter to generate a suggestion.\${'\\n'}# Tip: press tab to accept the suggestion.\${'\\n'}\${'\\n'}fake_users = [\${'\\n'}    { "name": "User 1", "id": "user1", "city": "San Francisco", "state": "CA" },\`,
                            ],
                            column2: [
                                'CodeWhisperer_manual_invoke.py',
                                \`# TODO: Press either Option + C on MacOS or Alt + C on Windows on a new line.\${'\\n'}\${'\\n'}# Function to upload a file to an S3 bucket.\${'\\n'}\`,
                            ],
                            column3: [
                                'Generate_unit_tests.py',
                                \`# TODO: Ask CodeWhisperer to write unit tests.\${'\\n'}\${'\\n'}def sum(a, b):\${'\\n'}    """\${'\\n'}    Function to sum two numbers.\${'\\n'}\${'\\n'}    Args:\${'\\n'}    - a: First number.\${'\\n'}    - b: Second number.\${'\\n'}\${'\\n'}    Returns:\${'\\n'}    - Sum of the two numbers.\${'\\n'}    """\${'\\n'}    return a + b\${'\\n'}\${'\\n'}# Write a test case for the above function.\${'\\n'}\`,
                            ],
                        },
                    ],
                },
            ],
        }
    },
    mounted() {
        this.showOS()
    },
    methods: {
        onClick(names: string[], label: string) {
            let taskType: CodewhispererGettingStartedTask = 'autoTrigger'
            const fileName = names[0]
            if (fileName.startsWith('CodeWhisperer_generate_suggestion')) {
                taskType = 'autoTrigger'
            } else if (fileName.startsWith('CodeWhisperer_manual_invoke')) {
                taskType = 'manualTrigger'
            } else {
                taskType = 'unitTest'
            }
            const telemetryLabel: CodewhispererLanguage = 'python'

            client.emitTryExampleClick(telemetryLabel, taskType)
            client.openFile([names[0], names[1]])
        },
        async showOS() {
            this.osState = await client.getOSType()
        },
        activeTabFunction(index: number) {
            this.activeTab = index
            sessionStorage.setItem('activeTab', index.toString())
        },
    },
})
<\/script>
<style>
.generateSuggestionDiv {
    width: 100%;
    margin-right: 5%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}
.generateSuggestionHeaderDiv {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 15px;
}
.generateSuggestionHeader {
    font-family: Verdana;
    font-size: 24px;
    font-weight: 860;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}
.generateSuggestionDescription {
    font-family: Verdana;
    font-size: 14px;
    font-weight: 510;
    line-height: 21px;
    padding-top: 20px;
    letter-spacing: 0em;
    text-align: left;
}
.generateSuggestionLearnMore {
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    color: #0097fb;
}
.generateSuggestionTabRow {
    display: flex;
    flex-direction: row;
    height: 26px;
    gap: 10px;
    padding-left: 10px;
    padding-right: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    align-items: center;
    justify-content: space-between;
}
.generateSuggestionTabRowLabel {
    font-family: Verdana;
    font-size: 14px;
    font-weight: 350;
    line-height: 17px;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.generateSuggestionTabMachine {
    display: flex;
    flex-direction: row;
    padding-left: 10px;
}
.generateSuggestionTabMachineColorGroup1 {
    background-color: var(--vscode-editorWidget-background);
}
.generateSuggestionTabMachineText {
    padding-left: 5px;
    padding-right: 10px;
    padding-top: 4px;
    font-family: Verdana;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 350;
}
.tableDivSub {
    margin-top: 10px;
    border-collapse: collapse;
    width: 100%;
    border-radius: 8px;
    border: 1.12px solid #424750;
}

.col2 {
    border: 1px solid #555353;
    border-radius: 3px;
    width: fit-content;
    padding: 2px 10px;
    margin-right: 5px;
    color: #ffffff;
    background: linear-gradient(0deg, #3d3d3d, #3d3d3d), linear-gradient(0deg, #555353, #555353);
    font-family: Verdana;
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    justify-content: center;
    justify-items: center;
    align-items: center;
}
.tryExample {
    justify-content: end;
    height: fit-content;
    width: fit-content;
    padding: 6.7 12.3;
}
</style>
`],sourceRoot:""}]);const b=B},5069:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>b});var i=n(7537),o=n.n(i),l=n(3645),C=n.n(l),B=C()(o());B.push([e.id,`
.headerDiv {
    display: flex;
    flex-direction: column;
}
.banner {
    padding-left: 30px;
    padding-right: 30px;
    background-color: #0a4265;
    border-radius: 10px;
    display: flex;
    height: 48px;
    align-items: center;
    /* border: 1px solid #f5f5f5; */
}
.bannerDiv {
    display: flex;
    flex-direction: row;
    flex: 0.95;
    align-items: center;
    justify-content: left;
    gap: 20px;
}
.infoIcon {
    margin-top: 3px;
    justify-content: left;
}
.bannerDescription {
    color: #f5f5f5;
    font-family: Verdana;
    font-size: 14px;
    font-weight: 350;
    text-align: left;
    justify-content: left;
}
.closeBanner {
    cursor: pointer;
    color: #ffffff;
    align-items: center;
    flex: 0.05;
    text-align: right;
    padding-top: 5px;
}
.logoIcon {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 30px;
    padding-left: 60px;
    height: auto;
}
.titleDiv {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}
.titleHeader {
    font-family: Verdana;
    font-size: 24px;
    font-weight: 860;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
}
.titleSubHeader {
    font-family: Verdana;
    font-size: 14px;
    font-weight: 400;
    padding-top: 10px;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
}
.body {
    display: flex;
    flex-wrap: wrap-reverse;
    height: auto;
    justify-content: left;
    gap: 5%;
    justify-items: left;
    padding-left: 60px;
}
.bodySubDiv {
    display: flex;
    flex-direction: column;
    width: 860;
    height: auto;
    justify-items: start;
    align-items: start;
}
`,"",{version:3,sources:["webpack://./src/codewhisperer/vue/root.vue"],names:[],mappings:";AA8EA;IACI,aAAa;IACb,sBAAsB;AAC1B;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,+BAA+B;AACnC;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,mBAAmB;IACnB,qBAAqB;IACrB,SAAS;AACb;AACA;IACI,eAAe;IACf,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,UAAU;IACV,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,oBAAoB;AACxB;AACA;IACI,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,qBAAqB;IACrB,OAAO;IACP,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;AACtB",sourcesContent:[`<!-- This Vue File provides Header and body of Getting Started Page of CodeWhisperer-->
<template>
    <div>
        <!-- Header -->
        <div class="headerDiv">
            <!-- Logo + Title -->
            <div class="logoIcon">
                <!-- Icon -->
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.7667 29.1198L29.5872 29.751L25.5655 41.344L23.7449 40.7127L27.7667 29.1198ZM22.1624 32.1488L19.2018 35.1346L22.1037 38.1145L20.7216 39.4599L17.1606 35.8015C16.7943 35.4246 16.7972 34.8233 17.1673 34.4503L20.7939 30.7919L22.1624 32.1488ZM36.4828 34.4503C36.8529 34.8233 36.8558 35.4246 36.4896 35.8015L32.9266 39.4599L31.5455 38.1145L34.4474 35.1346L31.4877 32.1488L32.8562 30.7919L36.4828 34.4503ZM43.3987 38.3718L40.0757 40.0323C39.75 40.1962 39.5437 40.5296 39.5437 40.8949V46.6369L31.72 51.4518L27.9787 49.3152V44.3326H26.0512V49.3152L22.3099 51.4518L14.4862 46.6369V40.8939C14.4862 40.5287 14.2799 40.1952 13.9532 40.0323L10.6312 38.3708L10.6302 34.618L10.6312 30.4064L14.1064 27.758C14.3455 27.5758 14.4862 27.2925 14.4862 26.9918V21.6372L21.6507 17.4584L26.0512 19.915V26.0213H27.9787V19.915L32.3782 17.4584L39.5437 21.6372V26.9918C39.5437 27.2925 39.6835 27.5758 39.9225 27.758L43.3987 30.4054L43.3997 34.618L43.3987 38.3718ZM44.9465 29.1622L41.4712 26.5138V21.084C41.4712 20.7419 41.2891 20.4248 40.9932 20.2513L32.8745 15.5164C32.5796 15.3439 32.2153 15.341 31.9195 15.5068L27.0149 18.2458L22.1104 15.5068C21.8126 15.342 21.4493 15.3439 21.1553 15.5164L13.0367 20.2513C12.7398 20.4248 12.5587 20.7419 12.5587 21.084V26.5147L9.0824 29.1622C8.84339 29.3443 8.70365 29.6286 8.70365 29.9293L8.70268 34.618L8.70365 38.9664C8.70365 39.3317 8.90989 39.6651 9.23564 39.829L12.5587 41.4895V47.1757C12.5587 47.5101 12.7312 47.8204 13.0164 47.9958L21.7866 53.3938C22.0863 53.5769 22.4622 53.5837 22.7696 53.4092L27.0149 50.9844L31.2593 53.4092C31.4077 53.494 31.5725 53.5364 31.7373 53.5364C31.9127 53.5364 32.0872 53.4882 32.2433 53.3938L41.0125 47.9958C41.2977 47.8204 41.4712 47.5101 41.4712 47.1757V41.4905L44.7933 39.829C45.12 39.6661 45.3262 39.3327 45.3262 38.9674L45.3272 34.618L45.3262 29.9284C45.3262 29.6277 45.1855 29.3443 44.9465 29.1622ZM17.3774 5.30064C17.3774 6.09862 16.7298 6.74627 15.9318 6.74627C15.1328 6.74627 14.4862 6.09862 14.4862 5.30064C14.4862 4.50169 15.1328 3.85501 15.9318 3.85501C16.7298 3.85501 17.3774 4.50169 17.3774 5.30064ZM12.5587 5.30064C12.5587 6.09862 11.911 6.74627 11.113 6.74627C10.3141 6.74627 9.6674 6.09862 9.6674 5.30064C9.6674 4.50169 10.3141 3.85501 11.113 3.85501C11.911 3.85501 12.5587 4.50169 12.5587 5.30064ZM7.7399 5.30064C7.7399 6.09862 7.09225 6.74627 6.29427 6.74627C5.49532 6.74627 4.84864 6.09862 4.84864 5.30064C4.84864 4.50169 5.49532 3.85501 6.29427 3.85501C7.09225 3.85501 7.7399 4.50169 7.7399 5.30064ZM1.95738 8.67377L1.9622 2.01713C1.9622 1.97473 2.01232 1.9275 2.08363 1.9275H51.9511C52.0224 1.9275 52.0725 1.97473 52.0725 2.01713V8.67377H1.95738ZM51.9511 0H2.07881C0.951225 0 0.0318052 0.904 0.0298777 2.01521L7.60558e-07 37.4938C-0.00096223 38.6002 0.912675 39.5061 2.04316 39.5138L5.81239 39.5119V37.5863L2.07689 37.5873C2.00653 37.5873 1.95738 37.5401 1.95738 37.4977L1.97955 10.6013H52.0725V37.4871C52.0725 37.5401 52.0166 37.5854 51.9511 37.5854L48.2175 37.5863V39.5138L51.9511 39.5129C53.0806 39.5129 54 38.6041 54 37.4871V2.01713C54 0.904963 53.0806 0 51.9511 0Z"
                        fill="url(#paint0_linear_227_4962)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_227_4962"
                            x1="53.5957"
                            y1="-883.34"
                            x2="19.5336"
                            y2="-883.327"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#6EB1FF" />
                            <stop offset="1" stop-color="#DA8AF7" />
                        </linearGradient>
                    </defs>
                </svg>
                <!-- Text -->
                <div class="titleDiv">
                    <div class="titleHeader">Amazon CodeWhisperer</div>
                    <div class="titleSubHeader">Your AI-powered productivity tool for the IDE</div>
                </div>
            </div>
        </div>
        <!-- Body -->
        <div class="body">
            <!-- Functionality -->
            <div class="bodySubDiv">
                <GenerateSuggestionTab />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GenerateSuggestionTab from './genSuggestionTab.vue'

export default defineComponent({
    name: 'Getting_Started',
    components: {
        GenerateSuggestionTab,
    },
    data() {
        return {
            bannerVisible: true,
            active: parseInt(sessionStorage.getItem('active') || '0'),
        }
    },
    mounted() {
        /* 
                We use Session Storage here because we need to store the the first time signin user and Existing first time signin state globally. According to this we need to display the banner.
                This can be done by storing the state. We can not use local state for this. 
                Default the value of Key: Active is 0 after the DOM is mounted it is updated to 1.
            */
        sessionStorage.setItem('active', '1')
    },
    methods: {
        //Triggered only for the first time
        closeStatusBar() {
            this.bannerVisible = false
        },
    },
})
<\/script>
<style>
.headerDiv {
    display: flex;
    flex-direction: column;
}

.banner {
    padding-left: 30px;
    padding-right: 30px;
    background-color: #0a4265;
    border-radius: 10px;
    display: flex;
    height: 48px;
    align-items: center;
    /* border: 1px solid #f5f5f5; */
}
.bannerDiv {
    display: flex;
    flex-direction: row;
    flex: 0.95;
    align-items: center;
    justify-content: left;
    gap: 20px;
}
.infoIcon {
    margin-top: 3px;
    justify-content: left;
}
.bannerDescription {
    color: #f5f5f5;
    font-family: Verdana;
    font-size: 14px;
    font-weight: 350;
    text-align: left;
    justify-content: left;
}
.closeBanner {
    cursor: pointer;
    color: #ffffff;
    align-items: center;
    flex: 0.05;
    text-align: right;
    padding-top: 5px;
}
.logoIcon {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 30px;
    padding-left: 60px;
    height: auto;
}
.titleDiv {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}
.titleHeader {
    font-family: Verdana;
    font-size: 24px;
    font-weight: 860;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
}
.titleSubHeader {
    font-family: Verdana;
    font-size: 14px;
    font-weight: 400;
    padding-top: 10px;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
}
.body {
    display: flex;
    flex-wrap: wrap-reverse;
    height: auto;
    justify-content: left;
    gap: 5%;
    justify-items: left;
    padding-left: 60px;
}
.bodySubDiv {
    display: flex;
    flex-direction: column;
    width: 860;
    height: auto;
    justify-items: start;
    align-items: start;
}
</style>
`],sourceRoot:""}]);const b=B},3645:e=>{"use strict";e.exports=function(s){var n=[];return n.toString=function(){return this.map(function(o){var l="",C=typeof o[5]<"u";return o[4]&&(l+="@supports (".concat(o[4],") {")),o[2]&&(l+="@media ".concat(o[2]," {")),C&&(l+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),l+=s(o),C&&(l+="}"),o[2]&&(l+="}"),o[4]&&(l+="}"),l}).join("")},n.i=function(o,l,C,B,b){typeof o=="string"&&(o=[[null,o,void 0]]);var T={};if(C)for(var w=0;w<this.length;w++){var k=this[w][0];k!=null&&(T[k]=!0)}for(var L=0;L<o.length;L++){var A=[].concat(o[L]);C&&T[A[0]]||(typeof b<"u"&&(typeof A[5]>"u"||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=b),l&&(A[2]&&(A[1]="@media ".concat(A[2]," {").concat(A[1],"}")),A[2]=l),B&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=B):A[4]="".concat(B)),n.push(A))}},n}},7537:e=>{"use strict";e.exports=function(s){var n=s[1],i=s[3];if(!i)return n;if(typeof btoa=="function"){var o=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),C="/*# ".concat(l," */");return[n].concat([C]).join(`
`)}return[n].join(`
`)}},3744:(e,s)=>{"use strict";var n;n={value:!0},s.Z=(i,o)=>{const l=i.__vccOpts||i;for(const[C,B]of o)l[C]=B;return l}},6502:(e,s,n)=>{var i=n(5408);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var o=n(5346).Z,l=o("28bf0f3a",i,!1,{})},299:(e,s,n)=>{var i=n(5069);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var o=n(5346).Z,l=o("70d96c1a",i,!1,{})},5346:(e,s,n)=>{"use strict";n.d(s,{Z:()=>H});function i(t,c){for(var d=[],r={},a=0;a<c.length;a++){var v=c[a],g=v[0],V=v[1],y=v[2],O=v[3],_={id:t+":"+a,css:V,media:y,sourceMap:O};r[g]?r[g].parts.push(_):d.push(r[g]={id:g,parts:[_]})}return d}var o=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},C=o&&(document.head||document.getElementsByTagName("head")[0]),B=null,b=0,T=!1,w=function(){},k=null,L="data-vue-ssr-id",A=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function H(t,c,d,r){T=d,k=r||{};var a=i(t,c);return G(a),function(g){for(var V=[],y=0;y<a.length;y++){var O=a[y],_=l[O.id];_.refs--,V.push(_)}g?(a=i(t,g),G(a)):a=[];for(var y=0;y<V.length;y++){var _=V[y];if(_.refs===0){for(var M=0;M<_.parts.length;M++)_.parts[M]();delete l[_.id]}}}}function G(t){for(var c=0;c<t.length;c++){var d=t[c],r=l[d.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](d.parts[a]);for(;a<d.parts.length;a++)r.parts.push(F(d.parts[a]));r.parts.length>d.parts.length&&(r.parts.length=d.parts.length)}else{for(var v=[],a=0;a<d.parts.length;a++)v.push(F(d.parts[a]));l[d.id]={id:d.id,refs:1,parts:v}}}}function S(){var t=document.createElement("style");return t.type="text/css",C.appendChild(t),t}function F(t){var c,d,r=document.querySelector("style["+L+'~="'+t.id+'"]');if(r){if(T)return w;r.parentNode.removeChild(r)}if(A){var a=b++;r=B||(B=S()),c=R.bind(null,r,a,!1),d=R.bind(null,r,a,!0)}else r=S(),c=N.bind(null,r),d=function(){r.parentNode.removeChild(r)};return c(t),function(g){if(g){if(g.css===t.css&&g.media===t.media&&g.sourceMap===t.sourceMap)return;c(t=g)}else d()}}var Y=function(){var t=[];return function(c,d){return t[c]=d,t.filter(Boolean).join(`
`)}}();function R(t,c,d,r){var a=d?"":r.css;if(t.styleSheet)t.styleSheet.cssText=Y(c,a);else{var v=document.createTextNode(a),g=t.childNodes;g[c]&&t.removeChild(g[c]),g.length?t.insertBefore(v,g[c]):t.appendChild(v)}}function N(t,c){var d=c.css,r=c.media,a=c.sourceMap;if(r&&t.setAttribute("media",r),k.ssrId&&t.setAttribute(L,c.id),a&&(d+=`
/*# sourceURL=`+a.sources[0]+" */",d+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=d;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(d))}}}},U={};function x(e){var s=U[e];if(s!==void 0)return s.exports;var n=U[e]={id:e,exports:{}};return J[e](n,n.exports,x),n.exports}x.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return x.d(s,{a:s}),s},x.d=(e,s)=>{for(var n in s)x.o(s,n)&&!x.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})},x.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),x.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var P={};(()=>{"use strict";x.r(P);const e=Vue,s=(0,e.createStaticVNode)('<div class="headerDiv"><!-- Logo + Title --><div class="logoIcon"><!-- Icon --><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.7667 29.1198L29.5872 29.751L25.5655 41.344L23.7449 40.7127L27.7667 29.1198ZM22.1624 32.1488L19.2018 35.1346L22.1037 38.1145L20.7216 39.4599L17.1606 35.8015C16.7943 35.4246 16.7972 34.8233 17.1673 34.4503L20.7939 30.7919L22.1624 32.1488ZM36.4828 34.4503C36.8529 34.8233 36.8558 35.4246 36.4896 35.8015L32.9266 39.4599L31.5455 38.1145L34.4474 35.1346L31.4877 32.1488L32.8562 30.7919L36.4828 34.4503ZM43.3987 38.3718L40.0757 40.0323C39.75 40.1962 39.5437 40.5296 39.5437 40.8949V46.6369L31.72 51.4518L27.9787 49.3152V44.3326H26.0512V49.3152L22.3099 51.4518L14.4862 46.6369V40.8939C14.4862 40.5287 14.2799 40.1952 13.9532 40.0323L10.6312 38.3708L10.6302 34.618L10.6312 30.4064L14.1064 27.758C14.3455 27.5758 14.4862 27.2925 14.4862 26.9918V21.6372L21.6507 17.4584L26.0512 19.915V26.0213H27.9787V19.915L32.3782 17.4584L39.5437 21.6372V26.9918C39.5437 27.2925 39.6835 27.5758 39.9225 27.758L43.3987 30.4054L43.3997 34.618L43.3987 38.3718ZM44.9465 29.1622L41.4712 26.5138V21.084C41.4712 20.7419 41.2891 20.4248 40.9932 20.2513L32.8745 15.5164C32.5796 15.3439 32.2153 15.341 31.9195 15.5068L27.0149 18.2458L22.1104 15.5068C21.8126 15.342 21.4493 15.3439 21.1553 15.5164L13.0367 20.2513C12.7398 20.4248 12.5587 20.7419 12.5587 21.084V26.5147L9.0824 29.1622C8.84339 29.3443 8.70365 29.6286 8.70365 29.9293L8.70268 34.618L8.70365 38.9664C8.70365 39.3317 8.90989 39.6651 9.23564 39.829L12.5587 41.4895V47.1757C12.5587 47.5101 12.7312 47.8204 13.0164 47.9958L21.7866 53.3938C22.0863 53.5769 22.4622 53.5837 22.7696 53.4092L27.0149 50.9844L31.2593 53.4092C31.4077 53.494 31.5725 53.5364 31.7373 53.5364C31.9127 53.5364 32.0872 53.4882 32.2433 53.3938L41.0125 47.9958C41.2977 47.8204 41.4712 47.5101 41.4712 47.1757V41.4905L44.7933 39.829C45.12 39.6661 45.3262 39.3327 45.3262 38.9674L45.3272 34.618L45.3262 29.9284C45.3262 29.6277 45.1855 29.3443 44.9465 29.1622ZM17.3774 5.30064C17.3774 6.09862 16.7298 6.74627 15.9318 6.74627C15.1328 6.74627 14.4862 6.09862 14.4862 5.30064C14.4862 4.50169 15.1328 3.85501 15.9318 3.85501C16.7298 3.85501 17.3774 4.50169 17.3774 5.30064ZM12.5587 5.30064C12.5587 6.09862 11.911 6.74627 11.113 6.74627C10.3141 6.74627 9.6674 6.09862 9.6674 5.30064C9.6674 4.50169 10.3141 3.85501 11.113 3.85501C11.911 3.85501 12.5587 4.50169 12.5587 5.30064ZM7.7399 5.30064C7.7399 6.09862 7.09225 6.74627 6.29427 6.74627C5.49532 6.74627 4.84864 6.09862 4.84864 5.30064C4.84864 4.50169 5.49532 3.85501 6.29427 3.85501C7.09225 3.85501 7.7399 4.50169 7.7399 5.30064ZM1.95738 8.67377L1.9622 2.01713C1.9622 1.97473 2.01232 1.9275 2.08363 1.9275H51.9511C52.0224 1.9275 52.0725 1.97473 52.0725 2.01713V8.67377H1.95738ZM51.9511 0H2.07881C0.951225 0 0.0318052 0.904 0.0298777 2.01521L7.60558e-07 37.4938C-0.00096223 38.6002 0.912675 39.5061 2.04316 39.5138L5.81239 39.5119V37.5863L2.07689 37.5873C2.00653 37.5873 1.95738 37.5401 1.95738 37.4977L1.97955 10.6013H52.0725V37.4871C52.0725 37.5401 52.0166 37.5854 51.9511 37.5854L48.2175 37.5863V39.5138L51.9511 39.5129C53.0806 39.5129 54 38.6041 54 37.4871V2.01713C54 0.904963 53.0806 0 51.9511 0Z" fill="url(#paint0_linear_227_4962)"></path><defs><linearGradient id="paint0_linear_227_4962" x1="53.5957" y1="-883.34" x2="19.5336" y2="-883.327" gradientUnits="userSpaceOnUse"><stop stop-color="#6EB1FF"></stop><stop offset="1" stop-color="#DA8AF7"></stop></linearGradient></defs></svg><!-- Text --><div class="titleDiv"><div class="titleHeader">Amazon CodeWhisperer</div><div class="titleSubHeader">Your AI-powered productivity tool for the IDE</div></div></div></div>',1),n={class:"body"},i={class:"bodySubDiv"};function o(f,p,u,m,h,E){const I=(0,e.resolveComponent)("GenerateSuggestionTab");return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.createCommentVNode)(" Header "),s,(0,e.createCommentVNode)(" Body "),(0,e.createElementVNode)("div",n,[(0,e.createCommentVNode)(" Functionality "),(0,e.createElementVNode)("div",i,[(0,e.createVNode)(I)])])])}const l={class:"generateSuggestionDiv"},C=(0,e.createElementVNode)("div",{class:"generateSuggestionHeaderDiv"},[(0,e.createElementVNode)("div",{class:"generateSuggestionHeader"},"Generate code suggestions with examples")],-1),B={class:"generateSuggestionTabRowLabel"},b={class:"generateSuggestionTabMachine"},T={key:0,class:"col2"},w={key:1,class:"col2"},k=(0,e.createElementVNode)("div",{class:"generateSuggestionTabMachineText"},"+",-1),L=(0,e.createElementVNode)("div",{class:"col2"},"C",-1),A=["onClick"],H={class:"generateSuggestionDescription"};function G(f,p,u,m,h,E){return(0,e.openBlock)(),(0,e.createElementBlock)("div",l,[C,(0,e.createCommentVNode)(" Tab "),(0,e.createElementVNode)("div",null,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(f.tabs[f.activeTab].tableData,(I,$)=>((0,e.openBlock)(),(0,e.createElementBlock)("div",{class:"tableDivSub",key:$},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)([I.column1,I.column2,I.column3],(W,D)=>((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:D},[(0,e.createElementVNode)("div",{class:(0,e.normalizeClass)(["generateSuggestionTabRow",D%2===1?"generateSuggestionTabMachineColorGroup1":""])},[(0,e.createElementVNode)("div",B,[D===0?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:0},[(0,e.createTextVNode)(" Generate code suggestions as you type ")],64)):D===1?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:1},[(0,e.createTextVNode)(" Generate code suggestions manually using "),(0,e.createElementVNode)("div",b,[f.osState==="Mac"?((0,e.openBlock)(),(0,e.createElementBlock)("div",T,"Option")):((0,e.openBlock)(),(0,e.createElementBlock)("div",w,"Alt")),k,L])],64)):((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:2},[(0,e.createTextVNode)(" Generate unit test cases ")],64))]),(0,e.createElementVNode)("button",{class:"tryExample",onClick:K=>f.onClick(W,f.tabs[f.activeTab].label)},"Try example",8,A)],2)]))),128))]))),128))]),(0,e.createElementVNode)("div",H,[(0,e.createTextVNode)(" CodeWhisperer supports 15 programming languages, including TypeScript, JavaScript, Python, Java, and C#. "),(0,e.createElementVNode)("a",{class:"generateSuggestionLearnMore",href:"https://docs.aws.amazon.com/codewhisperer/latest/userguide/language-ide-support.html",onClick:p[0]||(p[0]=I=>f.emitUiClick("codewhisperer_GenerateSuggestions_LearnMore"))},"Learn more")])])}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class S{static registerGlobalCommands(){const p=new Event("remount");window.addEventListener("message",u=>{const{command:m}=u.data;m==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(h=>this.removeListener(h)),window.dispatchEvent(p))})}static addListener(p){this.messageListeners.add(p),window.addEventListener("message",p)}static removeListener(p){this.messageListeners.delete(p),window.removeEventListener("message",p)}static sendRequest(p,u,m){const h=JSON.parse(JSON.stringify(m)),E=new Promise((I,$)=>{const W=K=>{const j=K.data;if(p===j.id)if(this.removeListener(W),window.clearTimeout(D),j.error===!0){const q=JSON.parse(j.data);$(new Error(q.message))}else j.event?(typeof m[0]!="function"&&$(new Error(`Expected frontend event handler to be a function: ${u}`)),I(this.registerEventHandler(u,m[0]))):I(j.data)},D=setTimeout(()=>{this.removeListener(W),$(new Error(`Timed out while waiting for response: id: ${p}, command: ${u}`))},3e5);this.addListener(W)});return vscode.postMessage({id:p,command:u,data:h}),E}static registerEventHandler(p,u){const m=h=>{const E=h.data;if(E.command===p){if(!E.event)throw new Error(`Expected backend handler to be an event emitter: ${p}`);u(E.data)}};return this.addListener(m),{dispose:()=>this.removeListener(m)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(p,u)=>{if(typeof u!="string"){console.warn(`Tried to index webview client with non-string property: ${String(u)}`);return}if(u==="init"){const h=vscode.getState()??{};if(h.__once)return()=>Promise.resolve();vscode.setState(Object.assign(h,{__once:!0}))}const m=(this.counter++).toString();return(...h)=>this.sendRequest(m,u,h)}})}}S.counter=0,S.initialized=!1,S.messageListeners=new Set;const F=S.create(),N=(0,e.defineComponent)({name:"TelemetryClient",methods:{emitUiClick(f){F.emitUiClick(f)}}}),t=S.create(),c=(0,e.defineComponent)({name:"GenerateSuggestionTab",components:{},extends:N,data(){return{activeTab:parseInt(sessionStorage.getItem("activeTab")||"0"),osState:"",tabs:[{label:"Python",tableData:[{column1:["CodeWhisperer_generate_suggestion.py",`# TODO: place your cursor at the end of line 5 and press Enter to generate a suggestion.
# Tip: press tab to accept the suggestion.

fake_users = [
    { "name": "User 1", "id": "user1", "city": "San Francisco", "state": "CA" },`],column2:["CodeWhisperer_manual_invoke.py",`# TODO: Press either Option + C on MacOS or Alt + C on Windows on a new line.

# Function to upload a file to an S3 bucket.
`],column3:["Generate_unit_tests.py",`# TODO: Ask CodeWhisperer to write unit tests.

def sum(a, b):
    """
    Function to sum two numbers.

    Args:
    - a: First number.
    - b: Second number.

    Returns:
    - Sum of the two numbers.
    """
    return a + b

# Write a test case for the above function.
`]}]}]}},mounted(){this.showOS()},methods:{onClick(f,p){let u="autoTrigger";const m=f[0];m.startsWith("CodeWhisperer_generate_suggestion")?u="autoTrigger":m.startsWith("CodeWhisperer_manual_invoke")?u="manualTrigger":u="unitTest";const h="python";t.emitTryExampleClick(h,u),t.openFile([f[0],f[1]])},async showOS(){this.osState=await t.getOSType()},activeTabFunction(f){this.activeTab=f,sessionStorage.setItem("activeTab",f.toString())}}});var d=x(6502),r=x(3744);const v=(0,r.Z)(c,[["render",G]]),g=(0,e.defineComponent)({name:"Getting_Started",components:{GenerateSuggestionTab:v},data(){return{bannerVisible:!0,active:parseInt(sessionStorage.getItem("active")||"0")}},mounted(){sessionStorage.setItem("active","1")},methods:{closeStatusBar(){this.bannerVisible=!1}}});var V=x(299);const O=(0,r.Z)(g,[["render",o]]);/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 *
 * This module is run within the webview, and will mount the Vue app.
 */const _=()=>(0,e.createApp)(O),M=_();M.mount("#vue-app"),window.addEventListener("remount",()=>{M.unmount(),_().mount("#vue-app")})})();var z=this;for(var Z in P)z[Z]=P[Z];P.__esModule&&Object.defineProperty(z,"__esModule",{value:!0})})();

//# sourceMappingURL=index.js.map