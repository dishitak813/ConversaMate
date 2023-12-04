(()=>{var oe={4047:(e,o,i)=>{"use strict";i.r(o),i.d(o,{default:()=>B});var r=i(7537),d=i.n(r),p=i(3645),y=i.n(p),C=y()(d());C.push([e.id,`
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
`],sourceRoot:""}]);const B=C},895:(e,o,i)=>{"use strict";i.r(o),i.d(o,{default:()=>B});var r=i(7537),d=i.n(r),p=i(3645),y=i.n(p),C=y()(d());C.push([e.id,`form[data-v-13f4324c] {
    padding: 15px;
}
.section-header[data-v-13f4324c] {
    margin: 0px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
}
textarea[data-v-13f4324c] {
    max-width: 100%;
}
.config-item[data-v-13f4324c] {
    border-bottom: 1px solid var(--vscode-menubar-selectionBackground);
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 8px 0px;
}
.col2[data-v-13f4324c] {
    grid-column: 2;
}
.data-view[data-v-13f4324c] {
    display: none;
    border: dashed rgb(218, 31, 31) 1px;
    color: rgb(218, 31, 31);
}
.required[data-v-13f4324c] {
    color: red;
}
#form-title[data-v-13f4324c] {
    font-size: large;
    font-weight: bold;
}
.form-buttons[data-v-13f4324c] {
    margin-left: 20px;
}
.margin-bottom-16[data-v-13f4324c] {
    margin-bottom: 16px;
}
#target-type-selector[data-v-13f4324c] {
    margin-bottom: 15px;
    margin-left: 8px;
}
`,"",{version:3,sources:["webpack://./src/lambda/vue/configEditor/samInvoke.css"],names:[],mappings:"AAAA;IACI,aAAa;AACjB;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,eAAe;AACnB;AACA;IACI,kEAAkE;IAClE,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,mCAAmC;IACnC,uBAAuB;AAC3B;AACA;IACI,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,gBAAgB;AACpB",sourcesContent:[`form[data-v-13f4324c] {
    padding: 15px;
}
.section-header[data-v-13f4324c] {
    margin: 0px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
}
textarea[data-v-13f4324c] {
    max-width: 100%;
}
.config-item[data-v-13f4324c] {
    border-bottom: 1px solid var(--vscode-menubar-selectionBackground);
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 8px 0px;
}
.col2[data-v-13f4324c] {
    grid-column: 2;
}
.data-view[data-v-13f4324c] {
    display: none;
    border: dashed rgb(218, 31, 31) 1px;
    color: rgb(218, 31, 31);
}
.required[data-v-13f4324c] {
    color: red;
}
#form-title[data-v-13f4324c] {
    font-size: large;
    font-weight: bold;
}
.form-buttons[data-v-13f4324c] {
    margin-left: 20px;
}
.margin-bottom-16[data-v-13f4324c] {
    margin-bottom: 16px;
}
#target-type-selector[data-v-13f4324c] {
    margin-bottom: 15px;
    margin-left: 8px;
}
`],sourceRoot:""}]);const B=C},3645:e=>{"use strict";e.exports=function(o){var i=[];return i.toString=function(){return this.map(function(d){var p="",y=typeof d[5]<"u";return d[4]&&(p+="@supports (".concat(d[4],") {")),d[2]&&(p+="@media ".concat(d[2]," {")),y&&(p+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),p+=o(d),y&&(p+="}"),d[2]&&(p+="}"),d[4]&&(p+="}"),p}).join("")},i.i=function(d,p,y,C,B){typeof d=="string"&&(d=[[null,d,void 0]]);var T={};if(y)for(var M=0;M<this.length;M++){var D=this[M][0];D!=null&&(T[D]=!0)}for(var I=0;I<d.length;I++){var h=[].concat(d[I]);y&&T[h[0]]||(typeof B<"u"&&(typeof h[5]>"u"||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=B),p&&(h[2]&&(h[1]="@media ".concat(h[2]," {").concat(h[1],"}")),h[2]=p),C&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=C):h[4]="".concat(C)),i.push(h))}},i}},7537:e=>{"use strict";e.exports=function(o){var i=o[1],r=o[3];if(!r)return i;if(typeof btoa=="function"){var d=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),y="/*# ".concat(p," */");return[i].concat([y]).join(`
`)}return[i].join(`
`)}},3744:(e,o)=>{"use strict";var i;i={value:!0},o.Z=(r,d)=>{const p=r.__vccOpts||r;for(const[y,C]of d)p[y]=C;return p}},3469:(e,o,i)=>{var r=i(4047);r.__esModule&&(r=r.default),typeof r=="string"&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);var d=i(5346).Z,p=d("c17362a6",r,!1,{})},442:(e,o,i)=>{var r=i(895);r.__esModule&&(r=r.default),typeof r=="string"&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);var d=i(5346).Z,p=d("78b2c3dc",r,!1,{})},5346:(e,o,i)=>{"use strict";i.d(o,{Z:()=>F});function r(s,m){for(var u=[],c={},l=0;l<m.length;l++){var b=m[l],v=b[0],P=b[1],w=b[2],O=b[3],k={id:s+":"+l,css:P,media:w,sourceMap:O};c[v]?c[v].parts.push(k):u.push(c[v]={id:v,parts:[k]})}return u}var d=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p={},y=d&&(document.head||document.getElementsByTagName("head")[0]),C=null,B=0,T=!1,M=function(){},D=null,I="data-vue-ssr-id",h=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function F(s,m,u,c){T=u,D=c||{};var l=r(s,m);return J(l),function(v){for(var P=[],w=0;w<l.length;w++){var O=l[w],k=p[O.id];k.refs--,P.push(k)}v?(l=r(s,v),J(l)):l=[];for(var w=0;w<P.length;w++){var k=P[w];if(k.refs===0){for(var L=0;L<k.parts.length;L++)k.parts[L]();delete p[k.id]}}}}function J(s){for(var m=0;m<s.length;m++){var u=s[m],c=p[u.id];if(c){c.refs++;for(var l=0;l<c.parts.length;l++)c.parts[l](u.parts[l]);for(;l<u.parts.length;l++)c.parts.push(H(u.parts[l]));c.parts.length>u.parts.length&&(c.parts.length=u.parts.length)}else{for(var b=[],l=0;l<u.parts.length;l++)b.push(H(u.parts[l]));p[u.id]={id:u.id,refs:1,parts:b}}}}function $(){var s=document.createElement("style");return s.type="text/css",y.appendChild(s),s}function H(s){var m,u,c=document.querySelector("style["+I+'~="'+s.id+'"]');if(c){if(T)return M;c.parentNode.removeChild(c)}if(h){var l=B++;c=C||(C=$()),m=j.bind(null,c,l,!1),u=j.bind(null,c,l,!0)}else c=$(),m=K.bind(null,c),u=function(){c.parentNode.removeChild(c)};return m(s),function(v){if(v){if(v.css===s.css&&v.media===s.media&&v.sourceMap===s.sourceMap)return;m(s=v)}else u()}}var z=function(){var s=[];return function(m,u){return s[m]=u,s.filter(Boolean).join(`
`)}}();function j(s,m,u,c){var l=u?"":c.css;if(s.styleSheet)s.styleSheet.cssText=z(m,l);else{var b=document.createTextNode(l),v=s.childNodes;v[m]&&s.removeChild(v[m]),v.length?s.insertBefore(b,v[m]):s.appendChild(b)}}function K(s,m){var u=m.css,c=m.media,l=m.sourceMap;if(c&&s.setAttribute("media",c),D.ssrId&&s.setAttribute(I,m.id),l&&(u+=`
/*# sourceURL=`+l.sources[0]+" */",u+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),s.styleSheet)s.styleSheet.cssText=u;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(u))}}}},Z={};function N(e){var o=Z[e];if(o!==void 0)return o.exports;var i=Z[e]={id:e,exports:{}};return oe[e](i,i.exports,N),i.exports}N.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return N.d(o,{a:o}),o},N.d=(e,o)=>{for(var i in o)N.o(o,i)&&!N.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},N.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),N.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var R={};(()=>{"use strict";N.r(R);const e=Vue,o=t=>((0,e.pushScopeId)("data-v-13f4324c"),t=t(),(0,e.popScopeId)(),t),i={class:"invoke-lambda-form"},r=o(()=>(0,e.createElementVNode)("h1",null,"Edit SAM Debug Configuration",-1)),d={class:"container button-container",id:"invoke-button-container"},p=o(()=>(0,e.createElementVNode)("code",null,"type:aws-sam",-1)),y=o(()=>(0,e.createElementVNode)("strong",null,"Invoke",-1)),C=o(()=>(0,e.createElementVNode)("label",{for:"target-type-selector"},"Invoke Target Type",-1)),B=["value"],T={class:"data-view"},M={key:0,class:"target-code"},D={class:"config-item"},I=o(()=>(0,e.createElementVNode)("label",{for:"select-directory"},"Project Root",-1)),h={class:"data-view"},F={class:"config-item"},J=o(()=>(0,e.createElementVNode)("label",{for:"lambda-handler"},"Lambda Handler",-1)),$={class:"data-view"},H={class:"config-item"},z=o(()=>(0,e.createElementVNode)("label",{for:"runtime-selector"},"Runtime",-1)),j=o(()=>(0,e.createElementVNode)("option",{disabled:""},"Choose a runtime...",-1)),K=["value"],s={class:"data-view"},m={key:1,class:"target-template"},u=o(()=>(0,e.createElementVNode)("br",null,null,-1)),c={class:"config-item"},l=o(()=>(0,e.createElementVNode)("label",{for:"template-path"},"Template Path",-1)),b={class:"data-view"},v={class:"config-item"},P=o(()=>(0,e.createElementVNode)("label",{for:"logicalID"},"Resource (Logical Id)",-1)),w={class:"data-view"},O={class:"config-item"},k=o(()=>(0,e.createElementVNode)("label",{for:"runtime-selector"},"Runtime",-1)),L=o(()=>(0,e.createElementVNode)("option",{disabled:""},"Choose a runtime...",-1)),ie=["value"],se={class:"data-view"},re={key:2,class:"target-apigw"},le=o(()=>(0,e.createElementVNode)("br",null,null,-1)),de={class:"config-item"},ce=o(()=>(0,e.createElementVNode)("label",{for:"template-path"},"Template Path",-1)),pe={class:"data-view"},ue={class:"config-item"},me=o(()=>(0,e.createElementVNode)("label",{for:"logicalID"},"Resource (Logical Id)",-1)),he={class:"config-item"},ge=o(()=>(0,e.createElementVNode)("label",{for:"runtime-selector"},"Runtime",-1)),ve=o(()=>(0,e.createElementVNode)("option",{disabled:""},"Choose a runtime...",-1)),fe=["value"],Ae={class:"data-view"},_e={class:"config-item"},ye=o(()=>(0,e.createElementVNode)("label",{for:"path"},"Path",-1)),Ce={class:"config-item"},be=o(()=>(0,e.createElementVNode)("label",{for:"http-method-selector"},"HTTP Method",-1)),Ee=o(()=>(0,e.createElementVNode)("option",{disabled:""},"Choose an HTTP Method",-1)),Ve=["value"],Ne={class:"data-view"},ke={class:"config-item"},Be=o(()=>(0,e.createElementVNode)("label",{for:"query-string"},"Query String",-1)),we={class:"config-item"},Ie=o(()=>(0,e.createElementVNode)("label",{for:"headers"},"Headers",-1)),Se=["data-invalid"],Te={key:0,class:"input-validation col2"},Me={key:3},De=o(()=>(0,e.createElementVNode)("h3",null,"aws",-1)),Pe={class:"config-item"},Oe=o(()=>(0,e.createElementVNode)("label",{for:"awsConnection"},"Credentials:",-1)),Le={class:"config-item"},Ue=o(()=>(0,e.createElementVNode)("label",{for:"region"},"Region",-1)),Re=o(()=>(0,e.createElementVNode)("h3",null,"lambda",-1)),Je={class:"config-item"},$e=o(()=>(0,e.createElementVNode)("label",{for:""},"Environment Variables",-1)),He=["data-invalid"],je={key:0,class:"input-validation col2"},xe={class:"config-item"},We=o(()=>(0,e.createElementVNode)("label",{for:"memory"},"Memory (MB)",-1)),Fe={class:"config-item"},ze=o(()=>(0,e.createElementVNode)("label",{for:"timeoutSec"},"Timeout (s)",-1)),Ke=o(()=>(0,e.createElementVNode)("h3",null,"sam",-1)),Ze={class:"config-item"},qe=o(()=>(0,e.createElementVNode)("label",{for:"buildArguments"},"Build Arguments",-1)),Xe={class:"config-item"},Ge=o(()=>(0,e.createElementVNode)("label",{for:"containerBuild"},"Container Build",-1)),Ye={class:"config-item"},Qe=o(()=>(0,e.createElementVNode)("label",{for:"dockerNetwork"},"Docker Network",-1)),et={class:"config-item"},tt=o(()=>(0,e.createElementVNode)("label",{for:"localArguments"},"Local Arguments",-1)),at={class:"config-item"},nt=o(()=>(0,e.createElementVNode)("label",{for:"skipNewImageCheck"},"Skip New Image Check",-1)),ot={class:"config-item"},it=o(()=>(0,e.createElementVNode)("label",{for:"templateParameters"},"Template - Parameters",-1)),st=["data-invalid"],rt={key:0,class:"input-validation col2"},lt=o(()=>(0,e.createElementVNode)("h3",null,"api",-1)),dt={class:"config-item"},ct=o(()=>(0,e.createElementVNode)("label",{for:"querystring"},"Query String",-1)),pt={class:"config-item"},ut=o(()=>(0,e.createElementVNode)("label",{for:"stageVariables"},"Stage Variables",-1)),mt=["data-invalid"],ht={key:0,class:"input-validation col2"},gt={class:"config-item"},vt=o(()=>(0,e.createElementVNode)("label",{for:"clientCerificateId"},"Client Certificate ID",-1)),ft={class:"config-item"},At=o(()=>(0,e.createElementVNode)("label",{for:"apiPayload"},"API Payload",-1)),_t=["data-invalid"],yt={key:0,class:"input-validation col2"},Ct=o(()=>(0,e.createElementVNode)("br",null,null,-1)),bt={class:"data-view"},Et={key:0,class:"input-validation"};function Vt(t,a,f,g,_,E){const A=(0,e.resolveComponent)("settings-panel");return(0,e.openBlock)(),(0,e.createElementBlock)("form",i,[r,(0,e.createElementVNode)("div",d,[(0,e.createElementVNode)("button",{class:"",onClick:a[0]||(a[0]=(0,e.withModifiers)((...n)=>t.launch&&t.launch(...n),["prevent"]))},"Invoke"),(0,e.createElementVNode)("button",{class:"form-buttons",onClick:a[1]||(a[1]=(0,e.withModifiers)((...n)=>t.loadConfig&&t.loadConfig(...n),["prevent"]))},"Load Existing Config"),(0,e.createElementVNode)("button",{class:"form-buttons",onClick:a[2]||(a[2]=(0,e.withModifiers)((...n)=>t.save&&t.save(...n),["prevent"]))},"Save")]),(0,e.createElementVNode)("p",null,[(0,e.createElementVNode)("em",null,[(0,e.createTextVNode)(" Using this form you can create, edit, and run launch-configs of "),p,(0,e.createTextVNode)(". When you "),y,(0,e.createTextVNode)(" the launch config, "+(0,e.toDisplayString)(t.company)+" Toolkit calls SAM CLI and attaches the debugger to the code running in a local Docker container. ",1)])]),(0,e.createVNode)(A,{id:"config-panel",title:"Configuration",description:""},{default:(0,e.withCtx)(()=>[C,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"target-types",id:"target-type-selector","onUpdate:modelValue":a[3]||(a[3]=n=>t.launchConfig.invokeTarget.target=n)},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.targetTypes,(n,V)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:n.value,key:V},(0,e.toDisplayString)(n.name),9,B))),128))],512),[[e.vModelSelect,t.launchConfig.invokeTarget.target]]),(0,e.createElementVNode)("span",T,(0,e.toDisplayString)(t.launchConfig.invokeTarget.target),1),t.launchConfig.invokeTarget.target==="code"?((0,e.openBlock)(),(0,e.createElementBlock)("div",M,[(0,e.createElementVNode)("div",D,[I,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"select-directory",type:"text","onUpdate:modelValue":a[4]||(a[4]=n=>t.launchConfig.invokeTarget.projectRoot=n),placeholder:"Enter a directory"},null,512),[[e.vModelText,t.launchConfig.invokeTarget.projectRoot]]),(0,e.createElementVNode)("span",h,"the selected directory: "+(0,e.toDisplayString)(t.launchConfig.invokeTarget.projectRoot),1)]),(0,e.createElementVNode)("div",F,[J,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text",placeholder:"Enter the lambda handler",name:"lambda-handler",id:"lambda-handler","onUpdate:modelValue":a[5]||(a[5]=n=>t.launchConfig.invokeTarget.lambdaHandler=n)},null,512),[[e.vModelText,t.launchConfig.invokeTarget.lambdaHandler]]),(0,e.createElementVNode)("span",$,"lamda handler :"+(0,e.toDisplayString)(t.launchConfig.invokeTarget.lambdaHandler),1)]),(0,e.createElementVNode)("div",H,[z,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"runtimeType","onUpdate:modelValue":a[6]||(a[6]=n=>t.launchConfig.lambda.runtime=n)},[j,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.runtimes,(n,V)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:n,key:V},(0,e.toDisplayString)(n),9,K))),128))],512),[[e.vModelSelect,t.launchConfig.lambda.runtime]]),(0,e.createElementVNode)("span",s,"runtime in data: "+(0,e.toDisplayString)(t.launchConfig.lambda.runtime),1)])])):t.launchConfig.invokeTarget.target==="template"?((0,e.openBlock)(),(0,e.createElementBlock)("div",m,[(0,e.createElementVNode)("button",{class:"margin-bottom-16",onClick:a[7]||(a[7]=(0,e.withModifiers)((...n)=>t.loadResource&&t.loadResource(...n),["prevent"]))},"Load Resource"),u,(0,e.createElementVNode)("div",c,[l,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"template-path-button",type:"text","onUpdate:modelValue":a[8]||(a[8]=n=>t.launchConfig.invokeTarget.templatePath=n),placeholder:"Enter the template path..."},null,512),[[e.vModelText,t.launchConfig.invokeTarget.templatePath]]),(0,e.createElementVNode)("span",b,"Template path from data: "+(0,e.toDisplayString)(t.launchConfig.invokeTarget.templatePath),1)]),(0,e.createElementVNode)("div",v,[P,(0,e.withDirectives)((0,e.createElementVNode)("input",{name:"template-logical-id",id:"template-logical-id",type:"text",placeholder:"Enter a resource","onUpdate:modelValue":a[9]||(a[9]=n=>t.launchConfig.invokeTarget.logicalId=n)},null,512),[[e.vModelText,t.launchConfig.invokeTarget.logicalId]]),(0,e.createElementVNode)("span",w," Logical Id from data: "+(0,e.toDisplayString)(t.launchConfig.invokeTarget.logicalId),1)]),(0,e.createElementVNode)("div",O,[k,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"runtimeType","onUpdate:modelValue":a[10]||(a[10]=n=>t.launchConfig.lambda.runtime=n)},[L,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.runtimes,(n,V)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:n,key:V},(0,e.toDisplayString)(n),9,ie))),128))],512),[[e.vModelSelect,t.launchConfig.lambda.runtime]]),(0,e.createElementVNode)("span",se,"runtime in data: "+(0,e.toDisplayString)(t.launchConfig.lambda.runtime),1)])])):t.launchConfig.invokeTarget.target==="api"?((0,e.openBlock)(),(0,e.createElementBlock)("div",re,[(0,e.createElementVNode)("button",{onClick:a[11]||(a[11]=(0,e.withModifiers)((...n)=>t.loadResource&&t.loadResource(...n),["prevent"]))},"Load Resource"),le,(0,e.createElementVNode)("div",de,[ce,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"template-path-button",type:"text","onUpdate:modelValue":a[12]||(a[12]=n=>t.launchConfig.invokeTarget.templatePath=n),placeholder:"Enter the template path..."},null,512),[[e.vModelText,t.launchConfig.invokeTarget.templatePath]]),(0,e.createElementVNode)("span",pe,"Template path from data: "+(0,e.toDisplayString)(t.launchConfig.invokeTarget.templatePath),1)]),(0,e.createElementVNode)("div",ue,[me,(0,e.withDirectives)((0,e.createElementVNode)("input",{name:"template-logical-id",id:"template-logical-id",type:"text",placeholder:"Enter a resource","onUpdate:modelValue":a[13]||(a[13]=n=>t.launchConfig.invokeTarget.logicalId=n)},null,512),[[e.vModelText,t.launchConfig.invokeTarget.logicalId]])]),(0,e.createElementVNode)("div",he,[ge,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"runtimeType","onUpdate:modelValue":a[14]||(a[14]=n=>t.launchConfig.lambda.runtime=n)},[ve,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.runtimes,(n,V)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:n,key:V},(0,e.toDisplayString)(n),9,fe))),128))],512),[[e.vModelSelect,t.launchConfig.lambda.runtime]]),(0,e.createElementVNode)("span",Ae,"runtime in data: "+(0,e.toDisplayString)(t.launchConfig.lambda.runtime),1)]),(0,e.createElementVNode)("div",_e,[ye,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[15]||(a[15]=n=>t.launchConfig.api.path=n)},null,512),[[e.vModelText,t.launchConfig.api.path]])]),(0,e.createElementVNode)("div",Ce,[be,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"http-method","onUpdate:modelValue":a[16]||(a[16]=n=>t.launchConfig.api.httpMethod=n)},[Ee,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.httpMethods,(n,V)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:n.toLowerCase(),key:V},(0,e.toDisplayString)(n),9,Ve))),128))],512),[[e.vModelSelect,t.launchConfig.api.httpMethod]]),(0,e.createElementVNode)("span",Ne,(0,e.toDisplayString)(t.launchConfig.api.httpMethod),1)]),(0,e.createElementVNode)("div",ke,[Be,(0,e.withDirectives)((0,e.createElementVNode)("input",{name:"query-string",id:"query-string",type:"text",cols:"15",rows:"2",placeholder:"Enter a query","onUpdate:modelValue":a[17]||(a[17]=n=>t.launchConfig.api.querystring=n)},null,512),[[e.vModelText,t.launchConfig.api.querystring]])]),(0,e.createElementVNode)("div",we,[Ie,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[18]||(a[18]=n=>t.headers.value=n),placeholder:"Enter as valid JSON","data-invalid":!!t.headers.errorMsg},null,8,Se),[[e.vModelText,t.headers.value]]),t.headers.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",Te," Error parsing JSON: "+(0,e.toDisplayString)(t.headers.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)])])):((0,e.openBlock)(),(0,e.createElementBlock)("div",Me,"Select an Invoke Target"))]),_:1}),(0,e.createVNode)(A,{id:"more-fields-panel",title:"Additional Fields",description:"","start-collapsed":""},{default:(0,e.withCtx)(()=>[De,(0,e.createElementVNode)("div",Pe,[Oe,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[19]||(a[19]=n=>t.launchConfig.aws.credentials=n)},null,512),[[e.vModelText,t.launchConfig.aws.credentials]])]),(0,e.createElementVNode)("div",Le,[Ue,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[20]||(a[20]=n=>t.launchConfig.aws.region=n)},null,512),[[e.vModelText,t.launchConfig.aws.region]])]),Re,(0,e.createElementVNode)("div",Je,[$e,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text",placeholder:"Enter as valid JSON","onUpdate:modelValue":a[21]||(a[21]=n=>t.environmentVariables.value=n),"data-invalid":!!t.environmentVariables.errorMsg},null,8,He),[[e.vModelText,t.environmentVariables.value]]),t.environmentVariables.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",je," Error parsing JSON: "+(0,e.toDisplayString)(t.environmentVariables.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",xe,[We,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"number","onUpdate:modelValue":a[22]||(a[22]=n=>t.launchConfig.lambda.memoryMb=n)},null,512),[[e.vModelText,t.launchConfig.lambda.memoryMb,void 0,{number:!0}]])]),(0,e.createElementVNode)("div",Fe,[ze,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"number","onUpdate:modelValue":a[23]||(a[23]=n=>t.launchConfig.lambda.timeoutSec=n)},null,512),[[e.vModelText,t.launchConfig.lambda.timeoutSec,void 0,{number:!0}]])]),(0,e.createCommentVNode)(` <div class="config-item">
                <label for="pathMappings">Path Mappings</label>
                <input type="text" v-model="launchConfig.lambda.pathMappings" >
            </div> `),Ke,(0,e.createElementVNode)("div",Ze,[qe,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[24]||(a[24]=n=>t.launchConfig.sam.buildArguments=n),placeholder:"Enter as a comma separated list"},null,512),[[e.vModelText,t.launchConfig.sam.buildArguments]])]),(0,e.createElementVNode)("div",Xe,[Ge,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"checkbox",name:"containerBuild",id:"containerBuild","onUpdate:modelValue":a[25]||(a[25]=n=>t.containerBuild=n)},null,512),[[e.vModelCheckbox,t.containerBuild]])]),(0,e.createElementVNode)("div",Ye,[Qe,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[26]||(a[26]=n=>t.launchConfig.sam.dockerNetwork=n)},null,512),[[e.vModelText,t.launchConfig.sam.dockerNetwork]])]),(0,e.createElementVNode)("div",et,[tt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[27]||(a[27]=n=>t.launchConfig.sam.localArguments=n),placeholder:"Enter as a comma separated list"},null,512),[[e.vModelText,t.launchConfig.sam.localArguments]])]),(0,e.createElementVNode)("div",at,[nt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"checkbox",name:"skipNewImageCheck",id:"skipNewImageCheck","onUpdate:modelValue":a[28]||(a[28]=n=>t.skipNewImageCheck=n)},null,512),[[e.vModelCheckbox,t.skipNewImageCheck]])]),(0,e.createElementVNode)("div",ot,[it,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[29]||(a[29]=n=>t.parameters.value=n),"data-invalid":!!t.parameters.errorMsg},null,8,st),[[e.vModelText,t.parameters.value]]),t.parameters.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",rt," Error parsing JSON: "+(0,e.toDisplayString)(t.parameters.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)]),lt,(0,e.createElementVNode)("div",dt,[ct,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[30]||(a[30]=n=>t.launchConfig.api.querystring=n)},null,512),[[e.vModelText,t.launchConfig.api.querystring]])]),(0,e.createElementVNode)("div",pt,[ut,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[31]||(a[31]=n=>t.stageVariables.value=n),"data-invalid":!!t.stageVariables.errorMsg,placeholder:"Enter as valid JSON"},null,8,mt),[[e.vModelText,t.stageVariables.value]]),t.stageVariables.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",ht," Error parsing JSON: "+(0,e.toDisplayString)(t.stageVariables.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",gt,[vt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[32]||(a[32]=n=>t.launchConfig.api.clientCertificateId=n)},null,512),[[e.vModelText,t.launchConfig.api.clientCertificateId]])]),(0,e.createElementVNode)("div",ft,[At,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[33]||(a[33]=n=>t.apiPayload.value=n),placeholder:"Enter as valid JSON","data-invalid":!!t.apiPayload.errorMsg},null,8,_t),[[e.vModelText,t.apiPayload.value]]),t.apiPayload.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",yt," Error parsing JSON: "+(0,e.toDisplayString)(t.apiPayload.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)])]),_:1}),(0,e.createVNode)(A,{id:"payload-panel",title:"Payload",description:"","start-collapsed":""},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("button",{class:"margin-bottom-16",onClick:a[34]||(a[34]=(0,e.withModifiers)((...n)=>t.loadPayload&&t.loadPayload(...n),["prevent"]))},"Load Sample Payload"),Ct,(0,e.withDirectives)((0,e.createElementVNode)("textarea",{name:"lambda-payload",id:"lambda-payload",cols:"60",rows:"5","onUpdate:modelValue":a[35]||(a[35]=n=>t.payload.value=n)},null,512),[[e.vModelText,t.payload.value]]),(0,e.createElementVNode)("span",bt,"payload from data: "+(0,e.toDisplayString)(t.payload),1),t.payload.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",Et,"Error parsing JSON: "+(0,e.toDisplayString)(t.payload.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)]),_:1})])}const Ht=t=>(_pushScopeId("data-v-5e540a72"),t=t(),_popScopeId(),t),Nt=["id"],kt={class:"header"},Bt=["id"],wt=["for"],It={class:"preload-transition collapse-button icon icon-vscode-chevron-up",ref:"icon"},St={class:"settings-title"},Tt={class:"soft no-spacing mt-8"},Mt={ref:"subPane",class:"sub-pane"};function Dt(t,a,f,g,_,E){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:t.id,class:"settings-panel"},[(0,e.createElementVNode)("div",kt,[t.collapseable||t.startCollapsed?(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("input",{key:0,id:t.buttonId,style:{display:"none"},type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=A=>t.collapsed=A)},null,8,Bt)),[[e.vModelCheckbox,t.collapsed]]):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("label",{for:t.buttonId,class:"panel-header"},[(0,e.createElementVNode)("i",It,null,512),(0,e.createElementVNode)("span",St,(0,e.toDisplayString)(t.title),1)],8,wt),(0,e.createElementVNode)("p",Tt,(0,e.toDisplayString)(t.description),1)]),(0,e.createVNode)(e.Transition,{onEnter:t.updateHeight,onBeforeLeave:t.updateHeight,name:t.collapseable||t.startCollapsed?"collapse":"",persisted:""},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createElementVNode)("div",Mt,[(0,e.renderSlot)(t.$slots,"default",{},void 0,!0)],512),[[e.vShow,!t.collapsed]])]),_:3},8,["onEnter","onBeforeLeave","name"])],8,Nt)}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const x=new Set;window.addEventListener("remount",()=>x.clear());const G={created(){if(this.$data===void 0)return;const t=vscode.getState()??{};this.$options._count=(this.$options._count??0)+1;const a=this.id??`${this.name??`DEFAULT-${x.size}`}-${this.$options._count}`;if(this.$options._unid=a,x.has(a)){console.warn(`Component "${a}" already exists. State-saving functionality will be disabled.`);return}x.add(a);const f=t[a]??{};Object.keys(this.$data).forEach(g=>{this.$data[g]=f[g]??this.$data[g]}),Object.keys(this.$data).forEach(g=>{this.$watch(g,_=>{const E=vscode.getState()??{},A=Object.assign(E[a]??{},{[g]:_!==void 0?JSON.parse(JSON.stringify(_)):void 0});vscode.setState(Object.assign(E,{[a]:A}))},{deep:!0})})}};let Y=0;const Pt=(0,e.defineComponent)({name:"settings-panel",props:{id:String,startCollapsed:Boolean,collapseable:Boolean,title:String,description:String},data(){return Y+=1,{collapsed:this.$props.startCollapsed??!1,buttonId:`settings-panel-button-${Y}`,lastHeight:void 0}},mixins:[G],methods:{updateHeight(t){t.style&&(this.lastHeight=t.scrollHeight,t.style.setProperty("--max-height",`${this.lastHeight}px`))}},mounted(){this.subPane=this.$refs.subPane,this.lastHeight=this.collapsed?this.lastHeight:this.subPane?.scrollHeight??this.lastHeight,this.$nextTick(()=>{setTimeout(()=>{this.$refs.icon?.classList.remove("preload-transition")},100)})}});var xt=N(3469),Q=N(3744);const Ot=(0,Q.Z)(Pt,[["render",Dt],["__scopeId","data-v-5e540a72"]]);/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class W{static registerGlobalCommands(){const a=new Event("remount");window.addEventListener("message",f=>{const{command:g}=f.data;g==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(_=>this.removeListener(_)),window.dispatchEvent(a))})}static addListener(a){this.messageListeners.add(a),window.addEventListener("message",a)}static removeListener(a){this.messageListeners.delete(a),window.removeEventListener("message",a)}static sendRequest(a,f,g){const _=JSON.parse(JSON.stringify(g)),E=new Promise((A,n)=>{const V=Jt=>{const U=Jt.data;if(a===U.id)if(this.removeListener(V),window.clearTimeout(Rt),U.error===!0){const $t=JSON.parse(U.data);n(new Error($t.message))}else U.event?(typeof g[0]!="function"&&n(new Error(`Expected frontend event handler to be a function: ${f}`)),A(this.registerEventHandler(f,g[0]))):A(U.data)},Rt=setTimeout(()=>{this.removeListener(V),n(new Error(`Timed out while waiting for response: id: ${a}, command: ${f}`))},3e5);this.addListener(V)});return vscode.postMessage({id:a,command:f,data:_}),E}static registerEventHandler(a,f){const g=_=>{const E=_.data;if(E.command===a){if(!E.event)throw new Error(`Expected backend handler to be an event emitter: ${a}`);f(E.data)}};return this.addListener(g),{dispose:()=>this.removeListener(g)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(a,f)=>{if(typeof f!="string"){console.warn(`Tried to index webview client with non-string property: ${String(f)}`);return}if(f==="init"){const _=vscode.getState()??{};if(_.__once)return()=>Promise.resolve();vscode.setState(Object.assign(_,{__once:!0}))}const g=(this.counter++).toString();return(..._)=>this.sendRequest(g,f,_)}})}}W.counter=0,W.initialized=!1,W.messageListeners=new Set;/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const S=W.create();function ee(t){return{type:"aws-sam",request:"direct-invoke",name:"",aws:{credentials:"",region:"",...t?.aws?t.aws:{}},invokeTarget:{target:"template",templatePath:"",logicalId:"",lambdaHandler:"",projectRoot:"",...t?.invokeTarget},lambda:{runtime:t?.lambda?.runtime,memoryMb:void 0,timeoutSec:void 0,environmentVariables:{},...t?.lambda,payload:{json:t?.lambda?.payload?.json?t.lambda.payload.json:{},path:t?.lambda?.payload?.path?t.lambda.payload.path:""}},sam:{buildArguments:void 0,containerBuild:!1,dockerNetwork:"",localArguments:void 0,skipNewImageCheck:!1,...t?.sam?t.sam:{},template:{parameters:t?.sam?.template?.parameters?t.sam.template.parameters:{}}},api:{path:"",httpMethod:"get",clientCertificateId:"",querystring:"",headers:{},stageVariables:{},...t?.api?t.api:{},payload:{json:t?.api?.payload?.json?t.api.payload.json:{},path:t?.api?.payload?.path?t.api.payload.path:""}}}}function te(){return{containerBuild:!1,skipNewImageCheck:!1,launchConfig:ee(),payload:{value:"",errorMsg:""},apiPayload:{value:"",errorMsg:""},environmentVariables:{value:"",errorMsg:""},parameters:{value:"",errorMsg:""},headers:{value:"",errorMsg:""},stageVariables:{value:"",errorMsg:""}}}const Lt=(0,e.defineComponent)({name:"sam-invoke",components:{settingsPanel:Ot},created(){S.init().then(t=>this.parseConfig(t)),S.getRuntimes().then(t=>{this.runtimes=t}),S.getCompanyName().then(t=>{this.company=t})},mixins:[G],data(){return{...te(),msg:"Hello",company:"",targetTypes:[{name:"Code",value:"code"},{name:"Template",value:"template"},{name:"API Gateway (Template)",value:"api"}],runtimes:[],httpMethods:["GET","POST","PUT","DELETE","HEAD","OPTIONS","PATCH"]}},methods:{resetJsonErrors(){this.payload.errorMsg="",this.environmentVariables.errorMsg="",this.headers.errorMsg="",this.stageVariables.errorMsg=""},launch(){const t=this.formatConfig();t&&S.invokeLaunchConfig(t)},save(){const t=this.formatConfig();t&&S.saveLaunchConfig(t)},loadConfig(){S.loadSamLaunchConfig().then(t=>this.parseConfig(t))},parseConfig(t){if(!t)return;const a=this.company;this.clearForm(),this.launchConfig=ee(t),t.lambda?.payload&&(this.payload.value=JSON.stringify(t.lambda.payload.json,void 0,4)),t.lambda?.environmentVariables&&(this.environmentVariables.value=JSON.stringify(t.lambda?.environmentVariables)),t.sam?.template?.parameters&&(this.parameters.value=JSON.stringify(t.sam?.template?.parameters)),t.api?.headers&&(this.headers.value=JSON.stringify(t.api?.headers)),t.api?.stageVariables&&(this.stageVariables.value=JSON.stringify(t.api?.stageVariables)),this.containerBuild=t.sam?.containerBuild??!1,this.skipNewImageCheck=t.sam?.skipNewImageCheck??!1,this.msg=`Loaded config ${t}`,this.company=a},loadPayload(){this.resetJsonErrors(),S.getSamplePayload().then(t=>{!t||(this.payload.value=JSON.stringify(JSON.parse(t),void 0,4))})},loadResource(){this.resetJsonErrors(),S.getTemplate().then(t=>{!t||(this.launchConfig.invokeTarget.target="template",this.launchConfig.invokeTarget.logicalId=t.logicalId,this.launchConfig.invokeTarget.templatePath=t.template)})},formatFieldToStringArray(t){if(!t)return;const a=/\s*,\s*/g;return t.trim().split(a)},formatStringtoJSON(t){if(t.errorMsg="",t.value)try{return JSON.parse(t.value)}catch(a){throw t.errorMsg=a.message,a}},formatConfig(){this.resetJsonErrors();let t,a,f,g,_,E;try{t=this.formatStringtoJSON(this.payload),a=this.formatStringtoJSON(this.environmentVariables),f=this.formatStringtoJSON(this.headers),g=this.formatStringtoJSON(this.stageVariables),_=this.formatStringtoJSON(this.parameters),E=this.formatStringtoJSON(this.apiPayload)}catch{return}const A=JSON.parse(JSON.stringify(this.launchConfig));return{...A,lambda:{...A.lambda,payload:{...A.payload,json:t},environmentVariables:a},sam:{...A.sam,buildArguments:this.formatFieldToStringArray(A.sam?.buildArguments?.toString()),localArguments:this.formatFieldToStringArray(A.sam?.localArguments?.toString()),containerBuild:this.containerBuild,skipNewImageCheck:this.skipNewImageCheck,template:{parameters:_}},api:A.api?{...A.api,headers:f,stageVariables:g,payload:{json:E}}:void 0}},clearForm(){const t=te();Object.keys(t).forEach(a=>this.$data[a]=t[a])}}});var Ft=N(442);const Ut=(0,Q.Z)(Lt,[["render",Vt],["__scopeId","data-v-13f4324c"]]);/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const ae=()=>(0,e.createApp)(Ut),ne=ae();ne.mount("#vue-app"),window.addEventListener("remount",()=>{ne.unmount(),ae().mount("#vue-app")})})();var q=this;for(var X in R)q[X]=R[X];R.__esModule&&Object.defineProperty(q,"__esModule",{value:!0})})();

//# sourceMappingURL=index.js.map