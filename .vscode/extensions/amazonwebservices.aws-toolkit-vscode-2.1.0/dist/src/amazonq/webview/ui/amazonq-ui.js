var Be=Object.defineProperty;var Ue=(pe,he,ae)=>he in pe?Be(pe,he,{enumerable:!0,configurable:!0,writable:!0,value:ae}):pe[he]=ae;var se=(pe,he,ae)=>(Ue(pe,typeof he!="symbol"?he+"":he,ae),ae),Pe=(pe,he,ae)=>{if(!he.has(pe))throw TypeError("Cannot "+ae)};var Te=(pe,he,ae)=>{if(he.has(pe))throw TypeError("Cannot add the same private member more than once");he instanceof WeakSet?he.add(pe):he.set(pe,ae)};var Ie=(pe,he,ae)=>(Pe(pe,he,"access private method"),ae);(()=>{var pe={5399:Z=>{/*! For license information please see main.js.LICENSE.txt */(function(X,J){Z.exports=J()})(self,()=>(()=>{var X={9137:(r,t,e)=>{"use strict";e.d(t,{Z:()=>y});var a=e(7537),p=e.n(a),c=e(3645),i=e.n(c)()(p());i.push([r.id,':root{--mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;font-size:var(--vscode-font-size, 13px);font-family:var(--mynah-font-family, "system-ui");--mynah-max-width: 2560px;--mynah-sizing-base: 0.25rem;--mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);--mynah-sizing-1: var(--mynah-sizing-base);--mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);--mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);--mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);--mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);--mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);--mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);--mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);--mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);--mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);--mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);--mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);--mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);--mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);--mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);--mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);--mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);--mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);--mynah-button-border-width: 1px;--mynah-border-width: 1px;--mynah-color-text-default: var(--vscode-foreground);--mynah-color-text-strong: var(--vscode-input-foreground);--mynah-color-text-weak: var(--vscode-disabledForeground);--mynah-color-text-link: var(--vscode-textLink-foreground);--mynah-color-text-input: var(--vscode-input-foreground);--mynah-color-bg: var(--vscode-sideBar-background);--mynah-color-bg-alt: var(--vscode-editorPane-background, var(--mynah-color-bg));--mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));--mynah-color-light: rgba(0, 0, 0, 0.05);--mynah-color-deep: var(--vscode-checkbox-background);--mynah-color-deep-reverse: var(--vscode-checkbox-foreground);--mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));--mynah-color-input-bg: var(--vscode-input-background);--mynah-color-highlight: rgba(255, 179, 0, 0.25);--mynah-color-highlight-text: #886411;--mynah-color-context-must-contain: #c7ebce;--mynah-color-context-should-contain: var(--vscode-sideBar-background);--mynah-color-context-must-not-contain: #f3cac7;--mynah-color-context-reverse: rgba(0, 0, 0, 0.5);--mynah-color-context-filter: 0.975;--mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);--mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);--mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);--mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);--mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);--mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);--mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);--mynah-color-syntax-code: var(--vscode-terminal-ansiBlue);--mynah-syntax-code-font-family: var(--vscode-editor-font-family);--mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));--mynah-color-status-info: var(--vscode-editorInfo-foreground);--mynah-color-status-success: var(--vscode-terminal-ansiGreen);--mynah-color-status-warning: var(--vscode-editorWarning-foreground);--mynah-color-status-error: var(--vscode-editorError-foreground);--mynah-color-button: var(--vscode-button-background);--mynah-color-button-reverse: var(--vscode-button-foreground);--mynah-color-alternate: var(--vscode-button-secondaryBackground);--mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);--mynah-color-code-bg: rgba(0, 0, 0, 0.25);--mynah-color-code-text: var(--vscode-textPreformat-foreground);--mynah-color-main: var(--vscode-button-background);--mynah-color-main-reverse: var(--vscode-button-foreground);--mynah-card-bg: var(--vscode-editor-background);--mynah-shadow-generic: none;--mynah-shadow-card: none;--mynah-shadow-card-more: none;--mynah-shadow-card-active: none;--mynah-shadow-feedback-form: none;--mynah-shadow-overlay: 0 -5px 25px 20px var(--mynah-color-bg);--mynah-font-size-xxsmall: 0.75rem;--mynah-font-size-xsmall: 0.85rem;--mynah-font-size-small: 0.95rem;--mynah-font-size-medium: 1rem;--mynah-font-size-large: 1.125rem;--mynah-font-size-xlarge: 1.175rem;--mynah-card-radius: var(--mynah-sizing-2);--mynah-button-radius: var(--mynah-sizing-1);--mynah-bottom-panel-transition: all 750ms cubic-bezier(0.25, 1, 0, 1);--mynah-xx-short-transition: all 100ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-short-transition: all 500ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition-transform: transform 500ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-long-transition: all 620ms cubic-bezier(0.35, 1, 0.15, 1);--mynah-pretty-long-transition: all 700ms cubic-bezier(0.25, 1, 0, 1);--mynah-very-long-transition: all 1500ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition: all 450ms cubic-bezier(0.85, 0.15, 0, 1);--mynah-short-transition-rev: all 480ms cubic-bezier(0.35, 1, 0, 1);--mynah-short-transition-rev-opacity: opacity 650ms cubic-bezier(0.35, 1, 0, 1);--mynah-short-transition-reflection: all 900ms cubic-bezier(0.25, 1, 0, 1), opacity 750ms 400ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition-turbo: all 500ms cubic-bezier(0.25, 1, 0, 1);--mynah-short-transition-turbo-bounce: all 600ms cubic-bezier(0.25, 1, 0, 1), transform 700ms cubic-bezier(0.25, 4, 0, 1);--mynah-short-transition-bounce: all 750ms cubic-bezier(0.25, 1, 0, 1), transform 1000ms cubic-bezier(0.15, 1.25, 0, 1);--mynah-text-flow-transition: all 700ms cubic-bezier(0.35, 1.2, 0, 1), transform 700ms cubic-bezier(0.2, 1.05, 0, 1);--mynah-mask-image: linear-gradient( to bottom, black var(--mynah-sizing-8), black calc(100% - var(--mynah-sizing-14)), transparent );--mynah-mask-image-rev: linear-gradient(to bottom, transparent 0%, transparent 80%, black 100%);--mynah-mask-image-main: linear-gradient( to bottom, transparent, black var(--mynah-sizing-6), black calc(100% - var(--mynah-sizing-6)), transparent );--mynah-mask-image-main-rev: linear-gradient(to bottom, black, transparent calc(100% - 2px), transparent);--mynah-mask-image-skeleton: linear-gradient( to bottom, black var(--mynah-sizing-8), black calc(50% - var(--mynah-sizing-14)), transparent );--mynah-policy-group-filter: saturate(0.5) brightness(0.85)}@keyframes horizontal-roll{0%{background-position:0% bottom}100%{background-position:-200% bottom}}@keyframes bounce{from{transform:translate3d(0, 0, 0)}to{transform:translate3d(0, calc(-1 * var(--mynah-sizing-2)), 0)}}@keyframes spinner-spin{to{transform:rotate(360deg)}}@keyframes typewriter{0%{visibility:hidden;opacity:0}1%{visibility:visible;opacity:0}100%{opacity:1;visibility:visible}}@keyframes typewriter-visibility-only{to{visibility:visible}}#mynah-wrapper{display:flex;flex-flow:column nowrap;margin:0 auto;width:100%;max-width:var(--mynah-max-width);box-sizing:border-box;height:100%;position:relative;overflow:hidden;justify-content:stretch;align-items:stretch}#mynah-wrapper>.mynah-ui-tab-contents-wrapper{flex:1;position:relative}button.mynah-button{border:none;min-width:var(--mynah-sizing-8);height:var(--mynah-sizing-8);border-radius:var(--mynah-button-radius);background-color:var(--mynah-color-button);color:var(--mynah-color-button-reverse);box-shadow:var(--mynah-shadow-generic);cursor:pointer;transition:var(--mynah-very-short-transition);display:inline-flex;justify-content:center;align-items:center;outline:none;overflow:hidden;position:relative;transform:translate3d(0, 0, 0) scale(1.00001);padding:0;filter:brightness(0.9);opacity:.85}button.mynah-button.mynah-bottom-block-close-button{position:absolute;align-self:flex-end;transform:translate3d(var(--mynah-sizing-2), calc(-100% - var(--mynah-sizing-6)), 0px);background-color:var(--mynah-card-bg);color:var(--mynah-color-text-default);box-shadow:var(--mynah-shadow-feedback-form)}button.mynah-button[disabled=disabled]{opacity:.25 !important;pointer-events:none}button.mynah-button.mynah-button-secondary{background-color:transparent;color:inherit;box-shadow:none;opacity:.75;height:var(--mynah-sizing-6)}button.mynah-button.mynah-button-secondary:focus-visible,button.mynah-button.mynah-button-secondary:hover{opacity:1}button.mynah-button.mynah-button-secondary:active{box-shadow:none}button.mynah-button:focus-visible,button.mynah-button:hover{filter:brightness(1);opacity:1}button.mynah-button:active{filter:brightness(0.9);opacity:.85}button.mynah-button.mynah-icon-button{width:var(--mynah-sizing-10);height:var(--mynah-sizing-10)}button.mynah-button>.mynah-mutating-next-icon{width:var(--mynah-sizing-6);height:var(--mynah-sizing-6);transform:translate3d(0, 0, 0) rotateZ(0deg);transition:var(--mynah-short-transition-turbo);transform-origin:center center;display:inline-flex;flex-flow:row nowrap;box-sizing:border-box;overflow:hidden;justify-content:center;align-items:center}button.mynah-button>.mynah-mutating-next-icon>i{font-size:var(--mynah-font-size-xlarge)}button.mynah-button>.mynah-mutating-next-icon>i:nth-child(2){display:none}button.mynah-button>.mynah-search-history-icon{width:var(--mynah-sizing-6);height:var(--mynah-sizing-6);transform:translate3d(0, 0, 0) rotateZ(0deg);transition:var(--mynah-short-transition-turbo);transform-origin:center center;display:inline-flex;flex-flow:row nowrap;box-sizing:border-box;overflow:hidden;justify-content:center;align-items:center}button.mynah-button>.mynah-search-history-icon>i{font-size:2rem}button.mynah-button>.mynah-search-history-icon>i:nth-child(2){display:none}button.mynah-button.mynah-button-wait{background-color:var(--mynah-color-light);color:var(--mynah-color-text-default);box-shadow:0 5px 10px -10px var(--mynah-color-light);pointer-events:none}button.mynah-button.mynah-button-wait>.mynah-mutating-next-icon>i:first-child{display:none}button.mynah-button.mynah-button-wait>.mynah-mutating-next-icon>i:nth-child(2){display:block}button.mynah-button>span{white-space:nowrap;font-size:var(--mynah-font-size-medium);max-width:35vw;transition:var(--mynah-very-long-transition);overflow:hidden;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;padding-left:var(--mynah-sizing-3);padding-right:var(--mynah-sizing-3)}button.mynah-button>i+span{padding-left:var(--mynah-sizing-base)}.mynah-toggle-container{flex-flow:row nowrap;max-width:100%;overflow:hidden;align-items:center;position:relative;background:var(--mynah-color-context-should-contain);color:var(--mynah-color-context-reverse);justify-content:flex-start;overflow-y:hidden;overflow-x:auto;display:flex}.mynah-toggle-container>span{overflow:hidden;height:100%;min-width:var(--mynah-sizing-8);max-width:calc(3*var(--mynah-sizing-15));flex-shrink:0}.mynah-toggle-container>span>.mynah-toggle-option{display:none}.mynah-toggle-container>span>.mynah-toggle-option:not(:first-child)+.mynah-toggle-option-label{margin-left:calc(-1*var(--mynah-sizing-1))}.mynah-toggle-container>span>.mynah-toggle-option:not(:checked)+.mynah-toggle-option-label.indication:after{content:"";position:absolute;top:50%;margin-top:calc(-1*var(--mynah-sizing-half));left:var(--mynah-sizing-2);height:var(--mynah-sizing-1);width:var(--mynah-sizing-1);background-color:var(--mynah-color-status-success);border-radius:var(--mynah-sizing-1);border:1px solid var(--mynah-color-text-weak);opacity:.75}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label{cursor:pointer;pointer-events:all;position:relative;z-index:100;padding:0 var(--mynah-sizing-3) 0 var(--mynah-sizing-5);height:100%;box-sizing:border-box;display:inline-flex;overflow:hidden;justify-content:stretch;align-items:center;color:var(--mynah-color-text-weak);border-right:1px solid var(--mynah-color-border-default);border-top:1px solid transparent;background-color:var(--mynah-color-bg);opacity:.75;max-width:100%}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label,.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label *{user-select:none}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label>span{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:block}.mynah-toggle-container>span>.mynah-toggle-option+.mynah-toggle-option-label>.mynah-toggle-close-button{margin-left:var(--mynah-sizing-3);font-size:var(--mynah-font-size-xsmall);min-width:1em}.mynah-toggle-container>span>.mynah-toggle-option:checked+.mynah-toggle-option-label{border-top-color:var(--mynah-color-button);color:var(--mynah-color-text-default);opacity:1;background-color:var(--mynah-color-tab-active)}.mynah-toggle-container>span>.mynah-toggle-option[disabled=disabled]{pointer-events:none !important}.mynah-toggle-container>span>.mynah-toggle-option[disabled=disabled]+.mynah-toggle-option-label{pointer-events:none !important;opacity:.25}.mynah-toggle-container.mynah-toggle-direction-vertical{flex-flow:column nowrap;gap:var(--mynah-sizing-3)}.mynah-toggle-disabled-tooltip-container{max-width:30vw;display:inline-block;padding:var(--mynah-sizing-3);font-size:80%;opacity:.85}.mynah-ui-icon{font-style:normal;font-weight:normal;display:inline-flex;width:1em;height:1em;font-variant:normal;text-transform:none;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-position:center center;mask-position:center center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;color:inherit;background-color:currentColor}.mynah-ui-icon>span{display:none}.mynah-nav-tabs-wrapper{border-top:var(--mynah-button-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-color-bg);display:flex;align-items:center;overflow:hidden;box-shadow:var(--mynah-shadow-generic);z-index:100;min-height:var(--mynah-sizing-10);max-height:var(--mynah-sizing-10);position:relative}.mynah-nav-tabs-wrapper:after{content:"";position:absolute;left:0;right:0;bottom:0;width:auto;height:var(--mynah-button-border-width);background-color:var(--mynah-color-border-default)}.mynah-nav-tabs-wrapper>.mynah-toggle-container{height:100%;background:none;box-sizing:border-box}.mynah-nav-tabs-wrapper>.mynah-toggle-container>span{white-space:nowrap}.mynah-nav-tabs-wrapper:empty{display:none}.mynah-nav-tabs-wrapper.mynah-nav-tabs-loading,.mynah-nav-tabs-wrapper.mynah-nav-tabs-loading *{pointer-events:none}.mynah-nav-tabs-max-reached-overlay{min-width:max(20vw,100px);max-width:90vw}.mynah-card{text-decoration:none;outline:none;position:relative;transition:var(--mynah-short-transition-rev);box-sizing:border-box;display:flex;flex-flow:column nowrap;gap:var(--mynah-sizing-3);transform:translate3d(0, 0, 0);flex:auto 0 0;width:100%;overflow:hidden;border-radius:var(--mynah-card-radius)}.mynah-card.padding-none{padding:0}.mynah-card.padding-small{padding:var(--mynah-sizing-1)}.mynah-card.padding-medium{padding:var(--mynah-sizing-3)}.mynah-card.padding-large{padding:var(--mynah-sizing-5)}.mynah-card.background{background-color:var(--mynah-card-bg)}.mynah-card.border{border:var(--mynah-border-width) solid var(--mynah-color-border-default)}.mynah-card>*{z-index:10;position:relative}.mynah-card>.mynah-source-link-header{display:flex;justify-content:space-between;align-items:center;opacity:1;gap:var(--mynah-sizing-2);transition:var(--mynah-very-short-transition)}.mynah-card>.mynah-source-link-header>.mynah-source-thumbnail{font-style:normal;font-weight:normal;display:none;width:var(--mynah-sizing-8);height:var(--mynah-sizing-8);font-variant:normal;text-transform:none;border:var(--mynah-border-width) solid var(--mynah-color-border-default);border-radius:100%;background-size:85%;background-clip:content-box;background-position:center center;background-repeat:no-repeat;align-self:flex-start;box-sizing:border-box;background-color:var(--mynah-card-bg);position:relative;overflow:hidden}.mynah-card>.mynah-source-link-header>.mynah-source-thumbnail:after{content:"";pointer-events:none;box-sizing:border-box;position:absolute;top:0;left:0;right:0;bottom:0;width:auto;height:auto;border:2px solid var(--mynah-card-bg);border-radius:100%}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper{flex:1 1 0;display:flex;flex-flow:column nowrap;align-items:flex-start;gap:var(--mynah-sizing-half);max-width:100%;overflow:hidden;cursor:pointer}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper:hover>.mynah-source-link-title>.mynah-source-link-expand-icon{opacity:.75;align-self:baseline}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-title{font-size:var(--mynah-font-size-medium);font-weight:500;color:var(--mynah-color-text-strong);width:100%;display:inline-flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:var(--mynah-sizing-2);white-space:normal;text-overflow:ellipsis;text-decoration:none;outline:none;overflow:hidden}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-title>.mynah-source-link-expand-icon{transition:var(--mynah-short-transition-rev);opacity:0;color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall);display:inline;padding:var(--mynah-sizing-1)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url{font-size:var(--mynah-font-size-xsmall);font-weight:300;color:var(--mynah-color-text-link);white-space:nowrap;text-overflow:ellipsis;text-decoration:none;outline:none;overflow:hidden;max-width:100%;position:relative;padding-bottom:var(--mynah-sizing-1);display:inline-block;transition:var(--mynah-short-transition-rev)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url:after{content:"";position:relative;display:block;bottom:0;left:0;width:100%;height:1px;border-radius:var(--mynah-sizing-half);background-color:currentColor;transform:translate3d(-30%, 0, 0);transition:var(--mynah-short-transition-rev);opacity:0}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url:hover:after{transform:translate3d(0, 0, 0);opacity:1}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:not(:last-child):after{content:">";margin-left:var(--mynah-sizing-1);margin-right:var(--mynah-sizing-1)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:nth-child(3)~span:not(:last-child){display:none}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:last-child{font-weight:bold}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-source-link-url>span:nth-child(3):not(:last-child):after{content:"> ... >"}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block{display:flex;flex-flow:row wrap;align-items:center;justify-content:flex-start;gap:var(--mynah-sizing-1);margin-bottom:var(--mynah-sizing-half)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block:empty{display:none}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item{display:inline-flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;gap:var(--mynah-sizing-1);padding:calc(var(--mynah-sizing-half)*3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);border-radius:var(--mynah-button-radius);opacity:.75}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item>.mynah-icon{opacity:.5;font-size:var(--mynah-font-size-medium);color:var(--mynah-color-text-weak)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item>.mynah-title-meta-block-item-text{font-size:var(--mynah-font-size-xxsmall);color:var(--mynah-color-text-weak)}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item>.mynah-title-meta-block-item-text::first-letter{text-transform:capitalize}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item.approved-answer{border-color:green;position:relative}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item.approved-answer:before{content:"";border-radius:var(--mynah-button-radius);position:absolute;top:0;left:0;right:0;bottom:0;background-color:green;opacity:.04}.mynah-card>.mynah-source-link-header>.mynah-source-link-title-wrapper>.mynah-title-meta-block>.mynah-title-meta-block-item.approved-answer>.mynah-icon{opacity:1;color:green;border-radius:var(--mynah-button-radius);width:var(--mynah-sizing-3);height:var(--mynah-sizing-3)}.mynah-card>.mynah-card-votes-wrapper{align-items:center;gap:var(--mynah-sizing-2);display:flex;align-items:center;justify-content:flex-end;border-top:1px solid var(--mynah-color-border-default);padding-top:var(--mynah-sizing-3);font-size:var(--mynah-font-size-small)}.mynah-card>.mynah-card-votes-wrapper>span.mynah-feedback-thanks{overflow:hidden}.mynah-card>.mynah-card-votes-wrapper>.mynah-button>span{padding:0;font-size:var(--mynah-font-size-small);color:var(--mynah-color-text-link)}.mynah-card>.mynah-card-votes-wrapper>.mynah-vote-text{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-small)}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote{position:relative;overflow:visible;display:inline-flex;align-items:center;box-sizing:border-box;gap:var(--mynah-sizing-3)}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-radio{display:none}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label{z-index:10;cursor:pointer;font-size:var(--mynah-font-size-small);transition:var(--mynah-short-transition);width:var(--mynah-sizing-5);height:var(--mynah-sizing-5);display:inline-flex;justify-content:center;align-items:center;color:var(--mynah-color-text-weak);opacity:.5}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label>*{pointer-events:none}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-label>i{height:calc(var(--mynah-sizing-6) + var(--mynah-sizing-half))}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-up-radio:checked~.mynah-vote-up{color:var(--mynah-color-text-default);opacity:1}.mynah-card>.mynah-card-votes-wrapper>.mynah-card-vote>.mynah-vote-down-radio:checked~.mynah-vote-down{color:var(--mynah-color-text-default);opacity:1}.mynah-card-body{flex:1;overflow:hidden;position:relative;display:block}.mynah-card-body a{pointer-events:bounding-box;color:var(--mynah-color-text-link)}.mynah-card-body>*:not(pre){font-size:var(--mynah-font-size-medium)}.mynah-card-body span[start][end]{display:none}.mynah-card-body>p:first-child,.mynah-card-body>p:first-child h1:first-child,.mynah-card-body>p:first-child h2:first-child,.mynah-card-body>p:first-child h3:first-child,.mynah-card-body>p:first-child h4:first-child,.mynah-card-body>p:first-child h5:first-child{margin-top:0}.mynah-card-body>p:first-child:last-of-type,.mynah-card-body>p p:first-child{margin:0}.mynah-card-body>*:not(div):not(pre),.mynah-card-body>div>*:not(div):not(pre){margin-block-start:.75em;margin-block-end:.75em;padding-bottom:1px !important;user-select:text}.mynah-card-body>*:not(div):not(pre):first-child,.mynah-card-body>div>*:not(div):not(pre):first-child{margin-block-start:0}.mynah-card-body>*:not(div):not(pre):empty,.mynah-card-body>div>*:not(div):not(pre):empty{display:none}.mynah-card-body>p:last-of-type,.mynah-card-body>div>p:last-of-type{margin-block-end:0}.mynah-card-body mark[reference-tracker],.mynah-card-body>div mark[reference-tracker]{background-color:var(--mynah-color-highlight);color:inherit;cursor:help}.mynah-card-body .amzn-mynah-search-result-highlight,.mynah-card-body>div .amzn-mynah-search-result-highlight{background-color:var(--mynah-color-highlight);color:var(--mynah-color-highlight-text)}.mynah-card-body .amzn-mynah-search-result-ellipsis,.mynah-card-body>div .amzn-mynah-search-result-ellipsis{display:inline-block;position:relative;padding-left:var(--mynah-sizing-2);margin-top:var(--mynah-sizing-1);margin-bottom:var(--mynah-sizing-1);font-size:calc(1em + var(--mynah-sizing-1)) !important;user-select:none;cursor:default;height:var(--mynah-sizing-7)}.mynah-card-body .amzn-mynah-search-result-ellipsis:before,.mynah-card-body>div .amzn-mynah-search-result-ellipsis:before{pointer-events:none;content:"";width:calc(1em + var(--mynah-sizing-2));height:calc(1em + var(--mynah-sizing-2));position:absolute;left:0;top:0;background-color:currentColor;opacity:.1;border-radius:var(--mynah-sizing-1)}#mynah-feedback-form-wrapper{display:flex;flex-flow:column nowrap;position:absolute;bottom:0;left:var(--mynah-sizing-2);right:var(--mynah-sizing-2);width:auto;box-sizing:border-box;z-index:9999999;opacity:0;transform:translate3d(0, 5vh, 0);transition:var(--mynah-bottom-panel-transition);overflow:visible}#mynah-feedback-form-wrapper:before{transition:all 400ms cubic-bezier(0.25, 0, 0, 1);content:"";position:absolute;right:calc(-1*var(--mynah-sizing-2));bottom:0;left:0;width:100vw;height:100vh;background-color:#000;opacity:0;pointer-events:none;transform:translate3d(0, 0, 0) scale(2);transform-origin:center center;z-index:-1}#mynah-feedback-form-wrapper>.mynah-bottom-block-close-button{transform:translate3d(calc(-1 * var(--mynah-sizing-1)), calc(-100% - var(--mynah-sizing-3)), 0px)}#mynah-feedback-form-wrapper+#mynah-wrapper{transition:var(--mynah-bottom-panel-transition)}#mynah-feedback-form-wrapper:not(.mynah-feedback-form-show),#mynah-feedback-form-wrapper:not(.mynah-feedback-form-show) *{pointer-events:none !important}#mynah-feedback-form-wrapper.mynah-feedback-form-show{opacity:1;transform:translate3d(0, 0, 0)}#mynah-feedback-form-wrapper.mynah-feedback-form-show:before{opacity:.15}#mynah-feedback-form-wrapper.mynah-feedback-form-show+#mynah-wrapper{transform:translate3d(0, 0px, 0) scale(0.95);transform-origin:top center;opacity:.25}#mynah-feedback-form-wrapper.mynah-feedback-form-show+#mynah-wrapper,#mynah-feedback-form-wrapper.mynah-feedback-form-show+#mynah-wrapper *{pointer-events:none !important}.mynah-feedback-form{pointer-events:all;box-sizing:border-box;transition:var(--mynah-short-transition-rev);transform:translate3d(0, 0, 0);display:flex;flex-flow:column;gap:var(--mynah-sizing-4);align-items:stretch;transform-origin:right bottom;z-index:10;position:relative;border:var(--mynah-button-border-width) solid var(--mynah-color-border-default);border-top-right-radius:var(--mynah-card-radius);border-top-left-radius:var(--mynah-card-radius);border-bottom:none;box-shadow:0px -25px 20px -25px rgba(0,0,0,.15);background-color:var(--mynah-color-bg);padding:var(--mynah-sizing-4)}.mynah-feedback-form>.mynah-feedback-form-header{display:flex;box-sizing:border-box;align-items:center;margin-bottom:var(--mynah-sizing-4)}.mynah-feedback-form>.mynah-feedback-form-header>h4{flex:1;margin:0}.mynah-feedback-form>.mynah-feedback-form-comment{background-color:transparent;padding:var(--mynah-sizing-3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);resize:none;width:100%;height:100px;max-height:25vh;border-radius:var(--mynah-sizing-2);font-size:var(--mynah-font-size-small);outline:none;color:var(--mynah-color-text-input);background-color:var(--mynah-card-bg);box-sizing:border-box;font-family:inherit}.mynah-feedback-form>.mynah-feedback-form-select-wrapper{position:relative;display:flex;box-sizing:border-box;padding:var(--mynah-sizing-3);justify-content:flex-end;align-items:center}.mynah-feedback-form>.mynah-feedback-form-select-wrapper>.mynah-feedback-form-select{position:absolute;width:100%;left:0;color:var(--mynah-color-text-default);border-radius:var(--mynah-card-radius);padding:var(--mynah-sizing-3);border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg);-webkit-appearance:none;appearance:none;text-indent:1px;text-overflow:clip;outline:none}.mynah-feedback-form>.mynah-feedback-form-select-wrapper>.mynah-feedback-form-select-handle{color:var(--mynah-color-text-weak);pointer-events:none}.mynah-feedback-form>.mynah-feedback-form-buttons-container{display:flex;justify-content:flex-end;align-items:center;gap:var(--mynah-sizing-1);box-sizing:border-box}.mynah-overlay{position:fixed;left:0;top:0;width:100%;height:100%;overflow:hidden;box-sizing:border-box;pointer-events:none;z-index:1000000}.mynah-overlay.mynah-overlay-dim-outside:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-bg);transition:var(--mynah-short-transition-rev-opacity);opacity:.45}.mynah-overlay>.mynah-overlay-container{--overlayLeftPos: 0;--overlayTopPos: 0;--overlayInnerHorizontalOrigin: left;--overlayInnerVerticalOrigin: top;position:absolute;display:block;overflow:visible;border-radius:var(--mynah-card-radius);transform:translate3d(var(--overlayLeftPos), var(--overlayTopPos), 0)}.mynah-overlay>.mynah-overlay-container .mynah-card,.mynah-overlay>.mynah-overlay-container .mynah-card *{pointer-events:none !important}.mynah-overlay>.mynah-overlay-container .mynah-card .mynah-syntax-highlighter-copy-buttons,.mynah-overlay>.mynah-overlay-container .mynah-card * .mynah-syntax-highlighter-copy-buttons{display:none}.mynah-overlay>.mynah-overlay-container .mynah-card .mynah-syntax-highlighter-copy-buttons~*:last-child,.mynah-overlay>.mynah-overlay-container .mynah-card * .mynah-syntax-highlighter-copy-buttons~*:last-child{margin-bottom:0 !important}.mynah-overlay>.mynah-overlay-container.background:before{content:"";background-color:transparent;transition:var(--mynah-short-transition-rev);position:absolute;top:0;left:0;right:0;bottom:0;width:auto;height:auto;pointer-events:none;box-sizing:border-box;opacity:0;border:var(--mynah-button-border-width) solid var(--mynah-color-border-default);z-index:100;box-shadow:var(--mynah-shadow-overlay);transform-origin:left bottom;border-radius:inherit}.mynah-overlay>.mynah-overlay-container.background:after{content:"";position:absolute;width:var(--mynah-sizing-8);height:var(--mynah-sizing-8);left:0;top:0;opacity:0;border:var(--mynah-sizing-4);background-color:var(--mynah-card-bg);border-radius:inherit;transition:var(--mynah-short-transition-rev);transition-delay:20ms}.mynah-overlay>.mynah-overlay-container.horizontal-direction-to-left,.mynah-overlay>.mynah-overlay-container.horizontal-direction-from-end-to-left{--overlayLeftPos: -100%;--overlayInnerHorizontalOrigin: right}.mynah-overlay>.mynah-overlay-container.horizontal-direction-to-left:before,.mynah-overlay>.mynah-overlay-container.horizontal-direction-from-end-to-left:before{transform-origin:right center}.mynah-overlay>.mynah-overlay-container.horizontal-direction-to-left:after,.mynah-overlay>.mynah-overlay-container.horizontal-direction-from-end-to-left:after{left:calc(100% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container.horizontal-direction-at-center{--overlayInnerHorizontalOrigin: center;--overlayLeftPos: -50%}.mynah-overlay>.mynah-overlay-container.horizontal-direction-at-center:after{left:calc(50% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container.vertical-direction-to-top,.mynah-overlay>.mynah-overlay-container.vertical-direction-from-end-to-top{--overlayTopPos: -100%;--overlayInnerVerticalOrigin: bottom}.mynah-overlay>.mynah-overlay-container.vertical-direction-to-top:after,.mynah-overlay>.mynah-overlay-container.vertical-direction-from-end-to-top:after{top:calc(100% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container.vertical-direction-at-center{--overlayInnerVerticalOrigin: center;--overlayTopPos: -50%}.mynah-overlay>.mynah-overlay-container.vertical-direction-at-center:after{top:calc(50% - var(--mynah-sizing-4))}.mynah-overlay>.mynah-overlay-container>.mynah-overlay-inner-container{display:inline-block;overflow:hidden;z-index:10;position:relative;transform:translate3d(0, 0, 0) scale(0.85);transform-origin:var(--overlayInnerHorizontalOrigin) var(--overlayInnerVerticalOrigin);transition:var(--mynah-short-transition-rev);width:100%}.mynah-overlay>.mynah-overlay-container:before{transform:translate3d(0, 0, 0) scale(0.85);transition:var(--mynah-short-transition-rev)}.mynah-overlay>.mynah-overlay-container>.mynah-overlay-inner-container,.mynah-overlay>.mynah-overlay-container:before{opacity:0;transition-delay:0ms}.mynah-overlay:not(.mynah-overlay-open),.mynah-overlay:not(.mynah-overlay-open) *{pointer-events:none !important}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container>.mynah-overlay-inner-container{transform:translate3d(0, 0, 0) scale(1)}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container:before{transform:translate3d(0, 0, 0) scale(1);transition-delay:50ms;opacity:1}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container>.mynah-overlay-inner-container{transition-delay:20ms}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container>.mynah-overlay-inner-container{opacity:1}.mynah-overlay.mynah-overlay-open>.mynah-overlay-container:after{transition-delay:0ms;left:0;top:0;width:100%;height:100%;opacity:1}.mynah-overlay.mynah-overlay-open.mynah-overlay-close-on-outside-click{pointer-events:all}.mynah-notification{display:inline-flex;flex-flow:row nowrap;align-items:flex-start;justify-content:flex-start;gap:var(--mynah-sizing-3);padding:var(--mynah-sizing-5);overflow:hidden;position:relative}.mynah-notification.mynah-notification-clickable{pointer-events:all;cursor:pointer}.mynah-notification>.mynah-ui-icon{font-size:var(--mynah-sizing-6)}.mynah-notification>.mynah-ui-icon-ok-circled{color:var(--mynah-color-status-success)}.mynah-notification>.mynah-ui-icon-info{color:var(--mynah-color-status-info)}.mynah-notification>.mynah-ui-icon-warning{color:var(--mynah-color-status-warning)}.mynah-notification>.mynah-ui-icon-error{color:var(--mynah-color-status-error)}.mynah-notification>.mynah-notification-container{flex:1;max-width:50vw;min-width:200px;display:inline-flex;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;gap:var(--mynah-sizing-3);overflow:hidden;position:relative}.mynah-notification>.mynah-notification-container>.mynah-notification-title{margin:0}.mynah-notification>.mynah-notification-container>.mynah-notification-title:empty{display:none}.mynah-notification>.mynah-notification-container>.mynah-notification-content{font-size:var(--mynah-font-size-small);display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:flex-start;gap:var(--mynah-sizing-2)}.mynah-notification>.mynah-notification-container>.mynah-notification-content>.mynah-button{align-self:stretch;background-color:var(--mynah-color-alternate);color:var(--mynah-color-alternate-reverse)}.mynah-syntax-highlighter{display:flex;flex-flow:column nowrap;box-sizing:border-box;overflow:hidden;margin:var(--mynah-sizing-1) 0;background-color:var(--mynah-card-bg);max-width:100%;border:var(--mynah-border-width) solid var(--mynah-color-border-default);position:relative;border-radius:var(--mynah-card-radius);line-height:normal;color:var(--mynah-color-text-default)}.mynah-syntax-highlighter+*:not(:empty){margin-top:var(--mynah-sizing-2)}.mynah-syntax-highlighter:before,.mynah-syntax-highlighter>.line-numbers-rows:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-syntax-bg);opacity:.2;pointer-events:none;user-select:none}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons{display:flex;align-items:center;justify-content:flex-end;padding:var(--mynah-sizing-half);padding-left:var(--mynah-sizing-3);order:256000;box-sizing:border-box;margin:0;margin-block:0 !important;position:relative;border-top:1px solid var(--mynah-color-border-default)}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-border-default);opacity:.25}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons>.mynah-syntax-highlighter-language{flex:1;font-size:var(--mynah-font-size-xsmall);display:inline-block;opacity:.65;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons .mynah-button{min-width:var(--mynah-sizing-6);height:calc(var(--mynah-sizing-6) + var(--mynah-sizing-half))}.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons .mynah-button *{font-size:var(--mynah-font-size-xsmall);color:var(--mynah-color-text-strong)}.mynah-syntax-highlighter.mynah-inline-code{display:inline-flex;max-width:100%;line-height:normal;padding:0 !important;margin:0;margin-block-start:0;margin-block-end:0;overflow:visible;border:none;color:var(--mynah-color-syntax-attr);margin-left:2px;margin-right:2px;padding-bottom:1px !important;margin-bottom:-1px;background-color:transparent !important}.mynah-syntax-highlighter.mynah-inline-code>pre{padding:0}.mynah-syntax-highlighter.mynah-inline-code:after{content:"";position:absolute;box-sizing:border-box;top:0;height:100%;left:-2px;width:calc(100% + 4px);border-radius:calc(var(--mynah-card-radius)/2);border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg);z-index:-1}.mynah-syntax-highlighter.mynah-inline-code:before{left:-2px;width:calc(100% + 4px);border-radius:calc(var(--mynah-card-radius)/2);box-sizing:border-box}.mynah-syntax-highlighter>pre{padding:var(--mynah-sizing-2);margin:0;overflow-x:auto;overflow-y:hidden;position:relative}.mynah-syntax-highlighter>pre *,.mynah-syntax-highlighter>pre{font-size:var(--mynah-syntax-code-font-size) !important;font-family:var(--mynah-syntax-code-font-family) !important}.mynah-syntax-highlighter>pre>code{color:var(--mynah-color-syntax-code);filter:brightness(0.95);white-space:pre}.mynah-syntax-highlighter>pre>code,.mynah-syntax-highlighter>pre{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;tab-size:4;hyphens:none}.mynah-syntax-highlighter>pre>code::selection,.mynah-syntax-highlighter>pre::selection{text-shadow:none;background:#b3d4fc}.mynah-syntax-highlighter>pre .token.comment,.mynah-syntax-highlighter>pre .token.prolog,.mynah-syntax-highlighter>pre .token.doctype,.mynah-syntax-highlighter>pre .token.cdata{color:var(--mynah-color-syntax-comment)}.mynah-syntax-highlighter>pre .token.punctuation{color:currentColor}.mynah-syntax-highlighter>pre .token.namespace{opacity:.7}.mynah-syntax-highlighter>pre .token.property,.mynah-syntax-highlighter>pre .token.tag,.mynah-syntax-highlighter>pre .token.boolean,.mynah-syntax-highlighter>pre .token.number,.mynah-syntax-highlighter>pre .token.constant,.mynah-syntax-highlighter>pre .token.symbol,.mynah-syntax-highlighter>pre .token.deleted{color:var(--mynah-color-syntax-property)}.mynah-syntax-highlighter>pre .token.selector,.mynah-syntax-highlighter>pre .token.attr-name,.mynah-syntax-highlighter>pre .token.string,.mynah-syntax-highlighter>pre .token.char,.mynah-syntax-highlighter>pre .token.builtin,.mynah-syntax-highlighter>pre .token.inserted{color:var(--mynah-color-syntax-attr)}.mynah-syntax-highlighter>pre .token.operator,.mynah-syntax-highlighter>pre .token.entity,.mynah-syntax-highlighter>pre .token.url,.mynah-syntax-highlighter>pre .language-css .token.string,.mynah-syntax-highlighter>pre .style .token.string{color:var(--mynah-color-syntax-operator)}.mynah-syntax-highlighter>pre .token.atrule,.mynah-syntax-highlighter>pre .token.attr-value,.mynah-syntax-highlighter>pre .token.class-name,.mynah-syntax-highlighter>pre .token.keyword{color:var(--mynah-color-syntax-attr-value)}.mynah-syntax-highlighter>pre .token.function{color:var(--mynah-color-syntax-function);font-weight:500}.mynah-syntax-highlighter>pre .token.regex,.mynah-syntax-highlighter>pre .token.important,.mynah-syntax-highlighter>pre .token.variable{color:var(--mynah-color-syntax-variable);font-weight:500}.mynah-syntax-highlighter>pre .token.important,.mynah-syntax-highlighter>pre .token.bold{font-weight:bold}.mynah-syntax-highlighter>pre .token.italic{font-style:italic}.mynah-syntax-highlighter>pre .token.entity{cursor:help}.mynah-syntax-highlighter>pre.line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber;position:relative}.mynah-syntax-highlighter>.line-numbers-rows{position:absolute;background-color:inherit;top:var(--mynah-sizing-2);font-size:100%;left:0;width:var(--mynah-sizing-12);overflow:hidden;text-overflow:clip;letter-spacing:-1px;border-right:1px solid var(--mynah-color-border-default)}.mynah-syntax-highlighter>.line-numbers-rows>span,.mynah-syntax-highlighter>.line-numbers-rows{pointer-events:none;user-select:none}.mynah-syntax-highlighter>.line-numbers-rows>span{display:block;color:var(--mynah-color-border-default);padding-right:.8em;text-align:right}.mynah-ui-syntax-highlighter-highlight-tooltip{max-width:80vw;min-width:10vw;max-height:80vh;background-color:var(--mynah-card-bg);border-radius:var(--mynah-card-radius);border:var(--mynah-border-width) solid var(--mynah-color-border-default);padding:var(--mynah-sizing-5)}.mynah-ui-syntax-highlighter-highlight-tooltip .mynah-card-body>p:first-child:last-of-type,.mynah-ui-syntax-highlighter-highlight-tooltip .mynah-card-body>p p:first-child{margin:0}.mynah-chat-prompt-overlay-buttons-container{display:inline-flex;flex-flow:column nowrap;gap:var(--mynah-sizing-2);justify-content:flex-start;align-items:flex-start}.mynah-chat-wrapper{transition:var(--mynah-bottom-panel-transition);position:absolute;top:0;right:0;bottom:0;left:0;width:auto;height:auto;flex-flow:column nowrap;overflow:hidden;justify-content:space-around;align-items:stretch;display:none}.mynah-chat-wrapper>div[class^=mynah-chat]{width:100%;max-width:100%;box-sizing:border-box;padding-left:var(--mynah-sizing-4);padding-right:var(--mynah-sizing-4)}.mynah-chat-wrapper:after{transition:all 400ms cubic-bezier(0.25, 0, 0, 1);content:"";position:absolute;top:0;right:0;bottom:0;left:0;width:auto;height:auto;background-color:#000;z-index:1000;opacity:0;pointer-events:none;transform:translate3d(0, 0, 0) scale(2);transform-origin:center center}.mynah-chat-wrapper>.mynah-chat-items-container{display:flex;flex:1 1 0%;overflow-x:hidden;overflow-y:auto;flex-flow:column-reverse nowrap;align-items:flex-start;padding:var(--mynah-sizing-4);gap:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card{display:inline-flex;flex-flow:column nowrap;position:relative;max-width:90%;transition:var(--mynah-text-flow-transition);transform:translate3d(0, min(50%, 25vh), 0) scale(0.95, 1.25);opacity:0;transform-origin:center bottom;gap:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.reveal{opacity:1;transform:translate3d(0, 0, 0) scale(1, 1)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-no-content{display:none !important}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream.typewriter-animating:before{content:"";pointer-events:none;position:absolute;overflow:hidden;border-bottom-right-radius:var(--mynah-card-radius);bottom:0;left:var(--mynah-border-width);right:var(--mynah-border-width);width:auto;height:var(--mynah-sizing-2);box-sizing:border-box;z-index:10;background-image:linear-gradient(90deg, var(--mynah-color-button) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, var(--mynah-color-button) 100%);background-position:0% bottom;background-size:200% var(--mynah-sizing-half);background-repeat:repeat-x;animation:horizontal-roll 1250ms linear infinite both}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream .typewriter-part{visibility:hidden}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card{max-width:100%;width:100%;padding:var(--mynah-sizing-3) 0 var(--mynah-sizing-3) 0;border-top:1px solid var(--mynah-color-border-default);margin-top:var(--mynah-sizing-3);padding-bottom:0}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title{font-size:var(--mynah-font-size-large)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>span.invisible{display:none}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-code-result{min-width:70%}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-card-icon-wrapper{background-color:var(--mynah-color-alternate);color:var(--mynah-color-alternate-reverse);padding:var(--mynah-sizing-2);border-radius:100%}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner{overflow:visible;z-index:10000;gap:var(--mynah-sizing-2);justify-content:flex-start;align-items:center;transition:var(--mynah-very-short-transition)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span{position:relative;display:inline-block;width:var(--mynah-sizing-5);height:var(--mynah-sizing-5);border:var(--mynah-sizing-half) solid rgba(0,0,0,0);border-radius:50%;border-top-color:var(--mynah-color-button);animation:spinner-spin 1s ease-in-out infinite;transform-origin:center center;overflow:visible}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>span:before{position:absolute;content:"";top:calc(-1*var(--mynah-sizing-half));left:calc(-1*var(--mynah-sizing-half));right:calc(-1*var(--mynah-sizing-half));bottom:calc(-1*var(--mynah-sizing-half));width:auto;height:auto;aspect-ratio:1;border:var(--mynah-sizing-half) solid var(--mynah-color-button);border-radius:50%;opacity:.15;box-sizing:border-box}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-chat-items-spinner>div{opacity:1}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body{padding-left:0}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>.mynah-syntax-highlighter{filter:contrast(1.15) brightness(0.85)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>h1:first-child,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>h2:first-child,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>h3:first-child,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>div>h4:first-child{margin-top:0}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content{margin-top:var(--mynah-sizing-3);padding-top:var(--mynah-sizing-4);border-top:var(--mynah-button-border-width) solid var(--mynah-color-border-default)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-title{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall);margin:0}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card>.mynah-card-body>.mynah-chat-item-card-related-content .mynah-source-link-title{font-size:var(--mynah-font-size-small);font-weight:400}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-card :hover::before{box-shadow:var(--mynah-shadow-card) !important}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question{display:inline-flex;flex-flow:column nowrap;position:relative;gap:var(--mynah-sizing-2)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-text{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall);font-style:italic}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper{display:inline-flex;flex-flow:row wrap;max-width:100%;gap:var(--mynah-sizing-2)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper>.mynah-chat-item-followup-question-option{padding:var(--mynah-sizing-2);color:var(--mynah-color-text-default);border:var(--mynah-border-width) solid currentColor;border-radius:var(--mynah-card-radius);cursor:pointer;font-size:var(--mynah-font-size-xsmall);max-width:100%;overflow:hidden;display:inline-flex;gap:var(--mynah-sizing-2);align-items:center;user-select:none}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper>.mynah-chat-item-followup-question-option *{pointer-events:none}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper>.mynah-chat-item-followup-question-option-disabled{opacity:.5 !important;cursor:default !important}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper>.mynah-chat-item-followup-question-option:not(:hover){opacity:.75}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper>.mynah-chat-item-followup-question-option-status-success{color:var(--mynah-color-status-success)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper>.mynah-chat-item-followup-question-option-status-error{color:var(--mynah-color-status-error)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper>.mynah-chat-item-followup-question-option-status-warning{color:var(--mynah-color-status-warning)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card>.mynah-chat-item-followup-question>.mynah-chat-item-followup-question-options-wrapper>.mynah-chat-item-followup-question-option-status-info{color:var(--mynah-color-status-info)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content{display:flex;flex-flow:column nowrap;gap:var(--mynah-sizing-2);overflow:hidden;position:relative}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item{max-width:100%}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card{padding:0}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item .amzn-mynah-search-result-highlight{background-color:inherit;color:inherit}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:not(:nth-of-type(1)){display:none}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(1){margin-bottom:calc(-1*var(--mynah-sizing-4));pointer-events:none;position:relative;-webkit-mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-12)), transparent 100%);-webkit-mask-size:100% 100%;mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-12)), transparent 100%);mask-size:100% 100%;-webkit-mask-image:linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content:not(.expanded)>.mynah-chat-item-card-related-content-item:nth-of-type(2)~.mynah-chat-item-card-related-content-show-more{display:flex}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more{display:none;max-width:80%;z-index:10000;margin-block-start:0;margin-block-end:0;align-self:center;height:var(--mynah-sizing-8);filter:none}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>span,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card .mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-show-more>i{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--mynah-font-size-xsmall)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt{align-self:flex-end}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-chat-item-card-icon-wrapper{align-self:flex-end}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-followup-question,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-followup-question,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content{align-items:flex-end}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons{display:none}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card{box-shadow:0px 0px 5px -5px var(--mynah-color-button);padding:var(--mynah-sizing-4);background-color:var(--mynah-color-button);border-bottom-right-radius:0;border:none}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card>.mynah-card-body,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt .mynah-chat-item-card-related-content>.mynah-card>.mynah-card-body,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-prompt>.mynah-card>.mynah-card-body{color:var(--mynah-color-button-reverse)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-system-prompt>.mynah-card{background-color:var(--mynah-color-status-warning)}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-empty:empty{display:none}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream.mynah-chat-item-empty.stream-ended{display:none}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-card,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-card{border-bottom-left-radius:0;max-height:100%;flex:1}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-icon-wrapper,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-icon-wrapper,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-icon-wrapper{align-self:flex-start}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact{opacity:1}.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-ai-prompt>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header,.mynah-chat-wrapper>.mynah-chat-items-container .mynah-chat-item-card.mynah-chat-item-answer-stream>.mynah-chat-item-card-related-content>.mynah-chat-item-card-related-content-item>.mynah-card-compact>.mynah-source-link-header{opacity:1}.mynah-chat-wrapper.loading>.mynah-chat-items-container{padding-bottom:var(--mynah-sizing-14)}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child>.mynah-card{min-width:100px;min-height:var(--mynah-sizing-14)}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child>.mynah-card>.mynah-card-votes-wrapper{display:none}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child.mynah-chat-item-empty .mynah-chat-items-spinner{display:inline-flex}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child.mynah-chat-item-empty .mynah-chat-items-spinner>span{flex:0 0 auto}.mynah-chat-wrapper.loading>.mynah-chat-items-container>.mynah-chat-item-card.mynah-chat-item-answer-stream:first-child:not(.mynah-chat-item-empty):before{content:"";pointer-events:none;position:absolute;overflow:hidden;border-bottom-right-radius:var(--mynah-card-radius);bottom:0;left:var(--mynah-border-width);right:var(--mynah-border-width);width:auto;height:var(--mynah-sizing-2);box-sizing:border-box;z-index:10;background-image:linear-gradient(90deg, var(--mynah-color-button) 0%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, var(--mynah-color-button) 100%);background-position:0% bottom;background-size:200% var(--mynah-sizing-half);background-repeat:repeat-x;animation:horizontal-roll 1250ms linear infinite both}.mynah-chat-wrapper.loading>.mynah-chat-overflowing-intermediate-block{display:flex;flex-flow:column nowrap;max-height:0;overflow:visible;justify-content:flex-end}.mynah-chat-wrapper.loading>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button{display:inline-flex}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block{display:flex;flex-flow:column nowrap;max-height:0;overflow:visible;justify-content:flex-end;align-items:center;border-bottom:1px solid var(--mynah-color-border-default)}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block.hidden *{display:none}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button{margin-bottom:var(--mynah-sizing-2);display:none;min-height:var(--mynah-sizing-8);background-color:var(--mynah-card-bg);padding-left:var(--mynah-sizing-2)}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button:active{box-shadow:none;filter:none}.mynah-chat-wrapper>.mynah-chat-overflowing-intermediate-block>.mynah-chat-stop-chat-response-button *{color:var(--mynah-color-text-weak);font-size:var(--mynah-font-size-xsmall)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper{display:block;padding:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt{display:flex;flex-flow:column nowrap;overflow:hidden;box-sizing:border-box;border:var(--mynah-border-width) solid var(--mynah-color-border-default);background-color:var(--mynah-card-bg);border-radius:var(--mynah-card-radius);padding:var(--mynah-sizing-4)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper{display:flex;flex-flow:row nowrap;overflow:hidden;box-sizing:border-box;gap:var(--mynah-sizing-1);align-items:flex-start;position:relative;color:var(--mynah-color-text-weak)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-command-wrapper{align-self:flex-start;display:inline-flex;align-items:center;position:relative;gap:var(--mynah-sizing-1);box-sizing:border-box}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-command-wrapper.hidden{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-command-wrapper>.mynah-chat-prompt-input-command-text{user-select:none;cursor:pointer;font-family:var(--mynah-font-family);font-size:var(--mynah-font-size-large);color:var(--mynah-color-text-input);font-weight:bold}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper{display:block;width:100%;position:relative;align-self:center}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input{font-family:var(--mynah-font-family);border:none;resize:none;background-color:rgba(0,0,0,0);font-size:var(--mynah-font-size-large);color:var(--mynah-color-text-input);outline:none;width:100%;max-height:20vh;min-height:1.5rem}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input::placeholder{color:var(--mynah-color-text-weak)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input:not(.mynah-chat-prompt-input-sizer){position:absolute;height:100%;top:0;left:0;padding:0}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper>.mynah-chat-prompt-input-sizer{display:block;width:100%;opacity:0;visibility:hidden;pointer-events:none;overflow:hidden;white-space:pre-wrap;word-break:break-word}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button{background-color:transparent;width:auto;min-width:0;height:auto;padding-top:1px}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button i{font-size:calc(2*var(--mynah-font-size-xsmall));color:var(--mynah-color-button);height:var(--mynah-sizing-6);padding-left:0}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper.no-text~.mynah-chat-prompt-button:not([disabled]),.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button[disabled]{pointer-events:none;opacity:.25}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper.no-text~.mynah-chat-prompt-button:not([disabled]) i,.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-input-wrapper>.mynah-chat-prompt-input-inner-wrapper~.mynah-chat-prompt-button[disabled] i{color:var(--mynah-color-text-weak)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper:empty{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item{position:relative;display:inline-block;max-width:250px;cursor:pointer}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;border-radius:var(--mynah-card-radius);opacity:0;transition:var(--mynah-short-transition-rev);z-index:8000;background-color:var(--mynah-color-alternate)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-chat-attachment-delete-icon{color:var(--mynah-color-alternate-reverse);opacity:0;transition:var(--mynah-short-transition-rev);position:absolute;left:50%;top:50%;width:30px;height:30px;margin-left:-15px;margin-top:-15px;z-index:9000}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-chat-attachment-delete-icon>i{width:30px;height:30px}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item:hover:after{opacity:.75}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item:hover>.mynah-chat-attachment-delete-icon{opacity:1}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-card{pointer-events:none !important}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-card *{pointer-events:none !important}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt>.mynah-chat-prompt-attachment-wrapper>.mynah-chat-attachment-item>.mynah-card>.mynah-card-body{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper.input-has-focus>.mynah-chat-prompt{border:var(--mynah-border-width) solid var(--mynah-color-button)}.mynah-chat-wrapper>.mynah-chat-prompt-wrapper>.mynah-chat-prompt-chars-indicator{width:100%;font-size:var(--mynah-font-size-xsmall);padding-top:var(--mynah-sizing-2);opacity:.5;display:flex;align-items:center;justify-content:flex-end;font-style:italic}.mynah-chat-wrapper>.mynah-chat-prompt-input-info{display:flex;flex-flow:row nowrap;box-sizing:border-box;overflow:hidden;padding:0 var(--mynah-sizing-4) var(--mynah-sizing-4) var(--mynah-sizing-4);margin-top:calc(-1*var(--mynah-sizing-2))}.mynah-chat-wrapper>.mynah-chat-prompt-input-info,.mynah-chat-wrapper>.mynah-chat-prompt-input-info *{font-size:var(--mynah-font-size-xsmall)}.mynah-chat-wrapper>.mynah-chat-prompt-input-info:empty{display:none}.mynah-chat-wrapper>.mynah-chat-prompt-input-info>*{margin:0;margin-block-start:0;margin-block-end:0;margin-top:0;margin-bottom:0}.mynah-chat-command-selector{display:flex;box-sizing:border-box;background-color:var(--mynah-card-bg);border-radius:var(--mynah-card-radius);width:100%;pointer-events:all;flex-flow:column nowrap;align-items:stretch;justify-content:flex-start}.mynah-chat-command-selector>.mynah-chat-command-selector-group{display:flex;box-sizing:border-box;width:100%;flex-flow:column nowrap;align-items:stretch;justify-content:flex-start;padding:var(--mynah-sizing-2)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-group-title{margin:0;color:var(--mynah-color-text-weak);opacity:.75;padding:var(--mynah-sizing-2) var(--mynah-sizing-3)}.mynah-chat-command-selector>.mynah-chat-command-selector-group:not(:last-child){border-bottom:1px solid var(--mynah-color-border-default)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command{display:flex;box-sizing:border-box;width:100%;flex-flow:column nowrap;align-items:flex-start;justify-content:flex-start;overflow:hidden;cursor:pointer;padding:var(--mynah-sizing-2) var(--mynah-sizing-3);color:var(--mynah-color-text-default);border-radius:var(--mynah-card-radius);transition:var(--mynah-short-transition-rev);gap:var(--mynah-sizing-1)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command{background-color:var(--mynah-color-button)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command:hover *,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command,.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command.target-command *{color:var(--mynah-color-button-reverse)}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command>.mynah-chat-command-selector-command-name{font-family:var(--mynah-font-family);font-size:var(--mynah-font-size-large);font-weight:bold;flex:0 1 0%}.mynah-chat-command-selector>.mynah-chat-command-selector-group>.mynah-chat-command-selector-command>.mynah-chat-command-selector-command-description{font-size:var(--mynah-font-size-small);opacity:.75;flex:1 0 100%}.mynah-chat-item-tree-view-wrapper{margin:0;margin-block-end:0 !important;margin-block-start:0 !important}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container{background-color:var(--mynah-card-bg);color:var(--mynah-color-text-default);margin-block-start:0 !important;margin-block-end:0 !important;position:relative;border-radius:var(--mynah-card-radius);border:var(--mynah-border-width) solid var(--mynah-color-border-default)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-wrapper-title{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;position:relative;padding:var(--mynah-sizing-3);gap:var(--mynah-sizing-3);border-bottom:var(--mynah-border-width) solid var(--mynah-color-border-default)}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-wrapper-title>h4{margin:0}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view-wrapper-title:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background-color:var(--mynah-color-border-default);opacity:.25;pointer-events:none}.mynah-chat-item-tree-view-wrapper>.mynah-chat-item-tree-view-wrapper-container>.mynah-chat-item-tree-view{padding:var(--mynah-sizing-3);overflow:hidden;box-sizing:border-box;width:100%;overflow-y:hidden;overflow-x:auto}.mynah-chat-item-tree-view-wrapper-label{border-top-left-radius:var(--mynah-card-radius);border-top-right-radius:var(--mynah-card-radius);background-color:var(--mynah-color-alternate);margin-bottom:0px;padding:var(--mynah-sizing-4)}.mynah-chat-item-tree-view-wrapper-feedback-label{padding-left:var(--mynah-sizing-4)}.mynah-chat-item-tree-view-wrapper-feedback-div{float:right}.mynah-chat-item-tree-view-wrapper-feedback-div button:first-child{margin-right:var(--mynah-sizing-2)}.mynah-chat-item-tree-view-license{color:var(--mynah-color-text-weak)}.mynah-chat-item-tree-view-license:before{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background-color:var(--mynah-color-button);opacity:.07;pointer-events:none}.mynah-chat-item-tree-view-license ul{margin:0;padding-left:var(--mynah-sizing-8)}.mynah-chat-item-tree-view-license ul>li:not(:first-child){margin-top:var(--mynah-sizing-2)}.mynah-chat-item-tree-view-license ul>li .mynah-card-body p{margin:0}.mynah-chat-item-tree-view-license .mynah-chat-item-tree-view-license-dropdown-button>span{max-width:unset}.outer-container{display:flex}.outer-container:not(:empty){margin-top:var(--mynah-sizing-3)}.snippet-card-container.vertical-overflow pre{position:relative;-webkit-mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-16)), transparent 100%);-webkit-mask-size:100% 100%;mask-image:linear-gradient(to bottom, black 30%, black calc(100% - var(--mynah-sizing-16)), transparent 100%);mask-size:100% 100%}.snippet-card-container{box-sizing:border-box;max-width:100%;max-height:calc(2*var(--mynah-sizing-12))}.snippet-card-container>.mynah-button{position:absolute;background-color:var(--mynah-card-bg) !important;width:var(--mynah-sizing-7) !important;min-width:var(--mynah-sizing-7) !important;max-width:var(--mynah-sizing-7) !important;height:var(--mynah-sizing-7) !important;border-radius:100%;right:calc(-1*var(--mynah-sizing-2));top:calc(-1*var(--mynah-sizing-2));border:var(--mynah-border-width) solid var(--mynah-color-border-default);opacity:1 !important;filter:brightness(0.95)}.snippet-card-container:not(:hover)>.mynah-button{display:none}.snippet-card-container>.mynah-card-body>.mynah-syntax-highlighter{border:none}.snippet-card-container>.mynah-card-body>.mynah-syntax-highlighter pre{text-overflow:ellipsis}.mynah-prompt-input-snippet-attachment-overlay{max-width:90vw;max-height:70vh}.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body>.mynah-syntax-highlighter{max-height:calc(70vh - var(--mynah-sizing-12)) !important}.snippet-card-container,.mynah-prompt-input-snippet-attachment-overlay{position:relative;overflow:visible;width:100%;box-sizing:border-box}.snippet-card-container>.mynah-card-body,.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body{max-height:100%}.snippet-card-container>.mynah-card-body>.mynah-syntax-highlighter,.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body>.mynah-syntax-highlighter{user-select:none;pointer-events:none;margin:0;max-height:100%;overflow:hidden}.snippet-card-container>.mynah-card-body>.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons,.mynah-prompt-input-snippet-attachment-overlay>.mynah-card-body>.mynah-syntax-highlighter>.mynah-syntax-highlighter-copy-buttons{display:none}.snippet-card-container pre,.mynah-prompt-input-snippet-attachment-overlay pre{text-overflow:ellipsis}.mynah-collapsible-content-wrapper{display:block;box-sizing:border-box;width:100%;overflow:hidden;position:relative}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox{display:none}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label{box-sizing:border-box;display:flex;flex-flow:column nowrap;overflow:hidden;align-items:flex-start;justify-content:stretch;padding:var(--mynah-sizing-2);gap:var(--mynah-sizing-2)}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label>.mynah-collapsible-content-label-title-wrapper{gap:var(--mynah-sizing-2);display:flex;flex-flow:row nowrap;box-sizing:border-box;width:100%;overflow:hidden;justify-content:flex-start;align-items:flex-start;pointer-events:all;cursor:pointer;user-select:none}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label>.mynah-collapsible-content-label-title-wrapper>.mynah-collapsible-content-label-title-text{flex:1;overflow:hidden}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox+.mynah-collapsible-content-label>.mynah-collapsible-content-label-content-wrapper{overflow:hidden;box-sizing:border-box;width:100%}.mynah-collapsible-content-wrapper>.mynah-collapsible-content-checkbox:checked+.mynah-collapsible-content-label>.mynah-collapsible-content-label-content-wrapper{display:none}body,html{background-color:var(--mynah-color-bg);color:var(--mynah-color-text-default);height:100%;width:100%;overflow:hidden;margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-weight:600}::-webkit-scrollbar{width:2px;height:2px;opacity:.25}::-webkit-scrollbar:horizontal{width:0px;height:0px}*:focus{outline:none}',"",{version:3,sources:["webpack://./src/styles/_variables.scss","webpack://./src/styles/_animations.scss","webpack://./src/styles/components/_main-container.scss","webpack://./src/styles/components/_button.scss","webpack://./src/styles/components/_toggle.scss","webpack://./src/styles/components/_icon.scss","webpack://./src/styles/components/_nav-tabs.scss","webpack://./src/styles/components/card/_card.scss","webpack://./src/styles/components/_source-link-header.scss","webpack://./src/styles/components/_votes-wrapper.scss","webpack://./src/styles/components/card/_card-body.scss","webpack://./src/styles/components/_feedback-form.scss","webpack://./src/styles/components/_overlay.scss","webpack://./src/styles/components/_notification.scss","webpack://./src/styles/components/_syntax-highlighter.scss","webpack://./src/styles/components/chat/_chat-wrapper.scss","webpack://./src/styles/components/chat/_chat-items-container.scss","webpack://./src/styles/components/chat/_chat-items-bottom-animator.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/components/chat/_chat-overflowing-intermediate-block.scss","webpack://./src/styles/components/chat/_chat-prompt-wrapper.scss","webpack://./src/styles/components/chat/_chat-command-selector.scss","webpack://./src/styles/components/chat/_chat-item-tree-view.scss","webpack://./src/styles/components/chat/_chat-prompt-code-snippet.scss","webpack://./src/styles/components/_collapsible-content.scss","webpack://./src/styles/styles.scss"],names:[],mappings:"AAAA,MACI,sMAAA,CAEA,uCAAA,CACA,iDAAA,CACA,yBAAA,CACA,4BAAA,CACA,uDAAA,CACA,0CAAA,CACA,oDAAA,CACA,oDAAA,CACA,oDAAA,CACA,oDAAA,CACA,oDAAA,CACA,oDAAA,CACA,oDAAA,CACA,oDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,sDAAA,CACA,gCAAA,CACA,yBAAA,CAEA,oDAAA,CACA,yDAAA,CACA,yDAAA,CACA,0DAAA,CACA,wDAAA,CAEA,kDAAA,CACA,gFAAA,CACA,mHAAA,CACA,wCAAA,CAEA,qDAAA,CACA,6DAAA,CACA,sGAAA,CACA,sDAAA,CAEA,gDAAA,CACA,qCAAA,CAEA,2CAAA,CACA,sEAAA,CACA,+CAAA,CACA,iDAAA,CACA,mCAAA,CAEA,8DAAA,CACA,sEAAA,CACA,qFAAA,CACA,sEAAA,CACA,2EAAA,CACA,oEAAA,CACA,8DAAA,CACA,yEAAA,CACA,0DAAA,CACA,iEAAA,CACA,4FAAA,CAEA,8DAAA,CACA,8DAAA,CACA,oEAAA,CACA,gEAAA,CAEA,qDAAA,CACA,6DAAA,CAEA,iEAAA,CACA,yEAAA,CAEA,0CAAA,CACA,+DAAA,CAEA,mDAAA,CACA,2DAAA,CAEA,gDAAA,CAEA,4BAAA,CACA,yBAAA,CACA,8BAAA,CACA,gCAAA,CACA,kCAAA,CACA,8DAAA,CAEA,kCAAA,CACA,iCAAA,CACA,gCAAA,CACA,8BAAA,CACA,iCAAA,CACA,kCAAA,CAEA,0CAAA,CACA,4CAAA,CAEA,sEAAA,CACA,kEAAA,CACA,oEAAA,CACA,kFAAA,CACA,iEAAA,CACA,qEAAA,CACA,oEAAA,CACA,kEAAA,CACA,mEAAA,CACA,+EAAA,CACA,2HAAA,CAEA,qEAAA,CACA,yHAAA,CAEA,uHAAA,CAEA,oHAAA,CAGA,qIAAA,CAMA,+FAAA,CACA,sJAAA,CAOA,yGAAA,CAEA,6IAAA,CAOA,2DAAA,CCjJJ,2BACI,GACI,6BAAA,CAEJ,KACI,gCAAA,CAAA,CAIR,kBACI,KACI,8BAAA,CAEJ,GACI,6DAAA,CAAA,CAIR,wBACI,GACI,wBAAA,CAAA,CAIR,sBACI,GACI,iBAAA,CACA,SAAA,CAEJ,GACI,kBAAA,CACA,SAAA,CAEJ,KACI,SAAA,CACA,kBAAA,CAAA,CAGR,sCACI,GACI,kBAAA,CAAA,CCtCR,eACI,YAAA,CACA,uBAAA,CACA,aAAA,CACA,UAAA,CACA,gCAAA,CACA,qBAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,uBAAA,CACA,mBAAA,CAEA,8CACI,MAAA,CACA,iBAAA,CCjBR,oBACI,WAAA,CACA,+BAAA,CACA,4BAAA,CACA,wCAAA,CACA,0CAAA,CACA,uCAAA,CACA,sCAAA,CACA,cAAA,CACA,6CAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CACA,YAAA,CACA,eAAA,CACA,iBAAA,CACA,6CAAA,CACA,SAAA,CACA,sBAAA,CACA,WAAA,CACA,oDACI,iBAAA,CACA,mBAAA,CACA,sFAAA,CACA,qCAAA,CACA,qCAAA,CACA,4CAAA,CAEJ,uCACI,sBAAA,CACA,mBAAA,CAEJ,2CACI,4BAAA,CACA,aAAA,CACA,eAAA,CACA,WAAA,CACA,4BAAA,CACA,0GAEI,SAAA,CAEJ,kDACI,eAAA,CAGR,4DAEI,oBAAA,CACA,SAAA,CAEJ,2BACI,sBAAA,CACA,WAAA,CAEJ,sCACI,4BAAA,CACA,6BAAA,CAEJ,8CACI,2BAAA,CACA,4BAAA,CACA,4CAAA,CACA,8CAAA,CACA,8BAAA,CACA,mBAAA,CACA,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,gDACI,uCAAA,CACA,6DACI,YAAA,CAIZ,+CACI,2BAAA,CACA,4BAAA,CACA,4CAAA,CACA,8CAAA,CACA,8BAAA,CACA,mBAAA,CACA,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,iDACI,cAAA,CACA,8DACI,YAAA,CAIZ,sCACI,yCAAA,CACA,qCAAA,CACA,oDAAA,CACA,mBAAA,CAEI,8EACI,YAAA,CAEJ,+EACI,aAAA,CAIZ,yBACI,kBAAA,CACA,uCAAA,CACA,cAAA,CACA,4CAAA,CACA,eAAA,CACA,qBAAA,CACA,eAAA,CACA,sBAAA,CACA,kCAAA,CACA,mCAAA,CAEJ,2BACI,qCAAA,CC5HR,wBACI,oBAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,oDAAA,CACA,wCAAA,CACA,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,YAAA,CACA,6BACI,eAAA,CACA,WAAA,CACA,+BAAA,CACA,wCAAA,CACA,aAAA,CACA,kDACI,YAAA,CACA,+FACI,0CAAA,CAGA,4GACI,UAAA,CACA,iBAAA,CACA,OAAA,CACA,4CAAA,CACA,0BAAA,CACA,4BAAA,CACA,2BAAA,CACA,kDAAA,CACA,mCAAA,CACA,6CAAA,CACA,WAAA,CAGR,6EACI,cAAA,CACA,kBAAA,CACA,iBAAA,CACA,WAAA,CACA,uDAAA,CACA,WAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CACA,uBAAA,CACA,kBAAA,CACA,kCAAA,CACA,wDAAA,CACA,gCAAA,CACA,sCAAA,CACA,WAAA,CACA,cAAA,CACA,4JAEI,gBAAA,CAEJ,kFACI,sBAAA,CACA,eAAA,CACA,kBAAA,CACA,cAAA,CACA,aAAA,CAEJ,wGACI,iCAAA,CACA,uCAAA,CACA,aAAA,CAGR,qFACI,0CAAA,CACA,qCAAA,CACA,SAAA,CACA,8CAAA,CAEJ,qEACI,8BAAA,CACA,gGACI,8BAAA,CACA,WAAA,CAMhB,wDACI,uBAAA,CACA,yBAAA,CAIR,yCACI,cAAA,CACA,oBAAA,CACA,6BAAA,CACA,aAAA,CACA,WAAA,CCpGJ,eACI,iBAAA,CACA,kBAAA,CACA,mBAAA,CACA,SAAA,CACA,UAAA,CACA,mBAAA,CACA,mBAAA,CACA,sBAAA,CACA,cAAA,CACA,mCAAA,CACA,2BAAA,CACA,6BAAA,CACA,qBAAA,CACA,aAAA,CACA,6BAAA,CACA,oBACI,YAAA,CCjBR,wBACI,mFAAA,CACA,sCAAA,CACA,YAAA,CACA,kBAAA,CACA,eAAA,CACA,sCAAA,CACA,WAAA,CACA,iCAAA,CACA,iCAAA,CACA,iBAAA,CACA,8BACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,uCAAA,CACA,kDAAA,CAGJ,gDACI,WAAA,CACA,eAAA,CACA,qBAAA,CACA,qDACI,kBAAA,CAGR,8BACI,YAAA,CAGJ,gGAEI,mBAAA,CAIR,oCACI,yBAAA,CACA,cAAA,CC1CJ,YACI,oBAAA,CACA,YAAA,CACA,iBAAA,CACA,4CAAA,CACA,qBAAA,CACA,YAAA,CACA,uBAAA,CACA,yBAAA,CACA,8BAAA,CACA,aAAA,CACA,UAAA,CACA,eAAA,CACA,sCAAA,CAGI,yBACI,SAAA,CAEJ,0BACI,6BAAA,CAEJ,2BACI,6BAAA,CAEJ,0BACI,6BAAA,CAGR,uBACI,qCAAA,CAEJ,mBACI,wEAAA,CAGJ,cACI,UAAA,CACA,iBAAA,CCtCR,sCACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,SAAA,CACA,yBAAA,CACA,6CAAA,CACA,8DACI,iBAAA,CACA,kBAAA,CACA,YAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,mBAAA,CACA,wEAAA,CACA,kBAAA,CACA,mBAAA,CACA,2BAAA,CACA,iCAAA,CACA,2BAAA,CACA,qBAAA,CACA,qBAAA,CACA,qCAAA,CACA,iBAAA,CACA,eAAA,CACA,oEACI,UAAA,CACA,mBAAA,CACA,qBAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,qCAAA,CACA,kBAAA,CAGR,uEACI,UAAA,CACA,YAAA,CACA,uBAAA,CACA,sBAAA,CACA,4BAAA,CACA,cAAA,CACA,eAAA,CACA,cAAA,CACA,qIACI,WAAA,CACA,mBAAA,CAEJ,gGACI,uCAAA,CACA,eAAA,CACA,oCAAA,CACA,UAAA,CACA,mBAAA,CACA,oBAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,kBAAA,CACA,sBAAA,CACA,oBAAA,CACA,YAAA,CACA,eAAA,CACA,+HACI,4CAAA,CACA,SAAA,CACA,kCAAA,CACA,uCAAA,CACA,cAAA,CACA,6BAAA,CAGR,8FACI,uCAAA,CACA,eAAA,CACA,kCAAA,CACA,kBAAA,CACA,sBAAA,CACA,oBAAA,CACA,YAAA,CACA,eAAA,CACA,cAAA,CACA,iBAAA,CACA,oCAAA,CACA,oBAAA,CACA,4CAAA,CACA,oGACI,UAAA,CACA,iBAAA,CACA,aAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,UAAA,CACA,sCAAA,CACA,6BAAA,CACA,iCAAA,CACA,4CAAA,CACA,SAAA,CAGA,0GACI,8BAAA,CACA,SAAA,CAIJ,0HACI,WAAA,CACA,iCAAA,CACA,kCAAA,CAEJ,sIACI,YAAA,CAEJ,8GACI,gBAAA,CAEJ,uIACI,iBAAA,CAIZ,+FACI,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,sCAAA,CACA,qGACI,YAAA,CAEJ,4HACI,mBAAA,CACA,oBAAA,CACA,kBAAA,CACA,0BAAA,CACA,yBAAA,CACA,wCAAA,CACA,wEAAA,CACA,wCAAA,CACA,WAAA,CACA,wIACI,UAAA,CACA,uCAAA,CACA,kCAAA,CAEJ,8JACI,wCAAA,CACA,kCAAA,CACA,4KACI,yBAAA,CAGR,4IACI,kBAAA,CACA,iBAAA,CACA,mJACI,UAAA,CACA,wCAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,sBAAA,CACA,WAAA,CAEJ,wJACI,SAAA,CACA,WAAA,CACA,wCAAA,CACA,2BAAA,CACA,4BAAA,CCpLxB,sCACI,kBAAA,CACA,yBAAA,CACA,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,sDAAA,CACA,iCAAA,CACA,sCAAA,CACA,iEACI,eAAA,CAEJ,yDACI,SAAA,CACA,sCAAA,CACA,kCAAA,CAEJ,uDACI,kCAAA,CACA,sCAAA,CAEJ,uDACI,iBAAA,CACA,gBAAA,CACA,mBAAA,CACA,kBAAA,CACA,qBAAA,CACA,yBAAA,CACA,yEACI,YAAA,CAEJ,yEACI,UAAA,CACA,cAAA,CACA,sCAAA,CACA,wCAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CACA,kBAAA,CACA,kCAAA,CACA,UAAA,CACA,2EACI,mBAAA,CAEJ,2EACI,6DAAA,CAIJ,mGACI,qCAAA,CACA,SAAA,CAIJ,uGACI,qCAAA,CACA,SAAA,CC3DhB,iBACI,MAAA,CACA,eAAA,CACA,iBAAA,CACA,aAAA,CAEA,mBACI,2BAAA,CACA,kCAAA,CAGJ,4BACI,uCAAA,CAEJ,kCACI,YAAA,CAGA,qQAMI,YAAA,CAGR,6EAEI,QAAA,CAIA,8EACI,wBAAA,CACA,sBAAA,CACA,6BAAA,CAIA,gBAAA,CAHA,sGACI,oBAAA,CAGJ,0FACI,YAAA,CAGR,oEACI,kBAAA,CAEJ,sFACI,6CAAA,CACA,aAAA,CACA,WAAA,CAEJ,8GACI,6CAAA,CACA,uCAAA,CAEJ,4GACI,oBAAA,CACA,iBAAA,CACA,kCAAA,CACA,gCAAA,CACA,mCAAA,CACA,sDAAA,CACA,gBAAA,CACA,cAAA,CACA,4BAAA,CAEA,0HACI,mBAAA,CACA,UAAA,CACA,uCAAA,CACA,wCAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,6BAAA,CACA,UAAA,CACA,mCAAA,CC9EhB,6BACI,YAAA,CACA,uBAAA,CACA,iBAAA,CACA,QAAA,CACA,0BAAA,CACA,2BAAA,CACA,UAAA,CACA,qBAAA,CACA,eAAA,CACA,SAAA,CACA,gCAAA,CACA,+CAAA,CACA,gBAAA,CACA,oCACI,gDAAA,CACA,UAAA,CACA,iBAAA,CACA,oCAAA,CACA,QAAA,CACA,MAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,SAAA,CACA,mBAAA,CACA,uCAAA,CACA,8BAAA,CACA,UAAA,CAEJ,8DACI,iGAAA,CAEJ,4CACI,+CAAA,CAGA,0HAEI,8BAAA,CAGR,sDACI,SAAA,CACA,8BAAA,CACA,6DACI,WAAA,CAEJ,qEACI,4CAAA,CACA,2BAAA,CACA,WAAA,CACA,4IAEI,8BAAA,CAMhB,qBACI,kBAAA,CACA,qBAAA,CACA,4CAAA,CACA,8BAAA,CACA,YAAA,CACA,gBAAA,CACA,yBAAA,CACA,mBAAA,CACA,6BAAA,CACA,UAAA,CACA,iBAAA,CACA,+EAAA,CACA,gDAAA,CACA,+CAAA,CACA,kBAAA,CACA,+CAAA,CACA,sCAAA,CACA,6BAAA,CAEA,iDACI,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,mCAAA,CACA,oDACI,MAAA,CACA,QAAA,CAIR,kDACI,4BAAA,CACA,6BAAA,CACA,wEAAA,CACA,WAAA,CACA,UAAA,CACA,YAAA,CACA,eAAA,CACA,mCAAA,CACA,sCAAA,CACA,YAAA,CACA,mCAAA,CACA,qCAAA,CACA,qBAAA,CACA,mBAAA,CAGJ,yDACI,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,wBAAA,CACA,kBAAA,CACA,qFACI,iBAAA,CACA,UAAA,CACA,MAAA,CACA,qCAAA,CACA,sCAAA,CACA,6BAAA,CACA,wEAAA,CACA,qCAAA,CACA,uBAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CACA,YAAA,CAEJ,4FACI,kCAAA,CACA,mBAAA,CAIR,4DACI,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,yBAAA,CACA,qBAAA,CC7IR,eACI,cAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,qBAAA,CACA,mBAAA,CACA,eAAA,CAEI,gDACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,sCAAA,CACA,oDAAA,CACA,WAAA,CAGR,wCACI,mBAAA,CACA,kBAAA,CACA,oCAAA,CACA,iCAAA,CACA,iBAAA,CACA,aAAA,CACA,gBAAA,CACA,sCAAA,CA8GA,qEAAA,CA5GA,0GAEI,8BAAA,CACA,wLACI,YAAA,CACA,kNACI,0BAAA,CAMR,0DACI,UAAA,CACA,4BAAA,CACA,4CAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,qBAAA,CACA,SAAA,CACA,+EAAA,CACA,WAAA,CACA,sCAAA,CACA,4BAAA,CACA,qBAAA,CAGJ,yDACI,UAAA,CACA,iBAAA,CACA,2BAAA,CACA,4BAAA,CACA,MAAA,CACA,KAAA,CACA,SAAA,CACA,4BAAA,CACA,qCAAA,CACA,qBAAA,CACA,4CAAA,CACA,qBAAA,CAKJ,mJAEI,uBAAA,CACA,qCAAA,CACA,iKACI,6BAAA,CAEJ,+JACI,uCAAA,CAGR,uEACI,sCAAA,CACA,sBAAA,CACA,6EACI,sCAAA,CAKR,6IAEI,sBAAA,CACA,oCAAA,CACA,yJACI,sCAAA,CAGR,qEACI,oCAAA,CACA,qBAAA,CACA,2EACI,qCAAA,CAKZ,uEACI,oBAAA,CACA,eAAA,CACA,UAAA,CACA,iBAAA,CACA,0CAAA,CACA,sFAAA,CACA,4CAAA,CACA,UAAA,CAGJ,+CACI,0CAAA,CACA,4CAAA,CAEJ,sHAEI,SAAA,CACA,oBAAA,CAMJ,kFAEI,8BAAA,CAMA,0FACI,uCAAA,CAEJ,kEACI,uCAAA,CACA,qBAAA,CACA,SAAA,CAEJ,0FACI,qBAAA,CAEJ,0FACI,SAAA,CAEJ,iEACI,oBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CAGR,uEACI,kBAAA,CChLZ,oBACI,mBAAA,CACA,oBAAA,CACA,sBAAA,CACA,0BAAA,CACA,yBAAA,CACA,6BAAA,CACA,eAAA,CACA,iBAAA,CACA,iDACI,kBAAA,CACA,cAAA,CAEJ,mCACI,+BAAA,CAEI,8CACI,uCAAA,CAEJ,wCACI,oCAAA,CAEJ,2CACI,uCAAA,CAEJ,yCACI,qCAAA,CAIZ,kDACI,MAAA,CACA,cAAA,CACA,eAAA,CACA,mBAAA,CACA,uBAAA,CACA,sBAAA,CACA,0BAAA,CACA,yBAAA,CACA,eAAA,CACA,iBAAA,CACA,4EACI,QAAA,CACA,kFACI,YAAA,CAGR,8EACI,sCAAA,CACA,YAAA,CACA,uBAAA,CACA,0BAAA,CACA,sBAAA,CACA,yBAAA,CACA,4FACI,kBAAA,CACA,6CAAA,CACA,0CAAA,CCzDhB,0BACI,YAAA,CACA,uBAAA,CACA,qBAAA,CACA,eAAA,CACA,8BAAA,CACA,qCAAA,CACA,cAAA,CAIA,wEAAA,CACA,iBAAA,CACA,sCAAA,CACA,kBAAA,CACA,qCAAA,CAPA,wCACI,gCAAA,CAOJ,qFAEI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,6CAAA,CACA,UAAA,CACA,mBAAA,CACA,gBAAA,CAEJ,iEACI,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,gCAAA,CACA,kCAAA,CACA,YAAA,CACA,qBAAA,CACA,QAAA,CACA,yBAAA,CACA,iBAAA,CACA,sDAAA,CACA,wEACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,kDAAA,CACA,WAAA,CAEJ,oGACI,MAAA,CACA,uCAAA,CACA,oBAAA,CACA,WAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CAEJ,+EACI,+BAAA,CACA,6DAAA,CACA,iFACI,uCAAA,CACA,oCAAA,CAIZ,4CACI,mBAAA,CACA,cAAA,CACA,kBAAA,CACA,oBAAA,CACA,QAAA,CACA,oBAAA,CACA,kBAAA,CACA,gBAAA,CACA,WAAA,CACA,oCAAA,CACA,eAAA,CACA,gBAAA,CACA,6BAAA,CACA,kBAAA,CACA,uCAAA,CACA,gDACI,SAAA,CAEJ,kDACI,UAAA,CACA,iBAAA,CACA,qBAAA,CACA,KAAA,CACA,WAAA,CACA,SAAA,CACA,sBAAA,CACA,8CAAA,CACA,wEAAA,CACA,qCAAA,CACA,UAAA,CAEJ,mDACI,SAAA,CACA,sBAAA,CACA,8CAAA,CACA,qBAAA,CAGR,8BACI,6BAAA,CACA,QAAA,CACA,eAAA,CACA,iBAAA,CACA,iBAAA,CAEA,8DAEI,uDAAA,CACA,2DAAA,CAEJ,mCACI,oCAAA,CACA,uBAAA,CACA,eAAA,CAGJ,iEAEI,eAAA,CACA,eAAA,CACA,mBAAA,CACA,iBAAA,CACA,gBAAA,CACA,UAAA,CACA,YAAA,CAEJ,uFAEI,gBAAA,CACA,kBAAA,CAGJ,iLAII,uCAAA,CAGJ,iDACI,kBAAA,CAGJ,+CACI,UAAA,CAGJ,uTAOI,wCAAA,CAGJ,8QAMI,oCAAA,CAGJ,gPAKI,wCAAA,CAGJ,yLAII,0CAAA,CAGJ,8CACI,wCAAA,CACA,eAAA,CAGJ,wIAGI,wCAAA,CACA,eAAA,CAGJ,yFAEI,gBAAA,CAEJ,4CACI,iBAAA,CAGJ,4CACI,WAAA,CAGJ,2CACI,iBAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CAGR,6CACI,iBAAA,CACA,wBAAA,CAMA,yBAAA,CACA,cAAA,CACA,MAAA,CACA,4BAAA,CACA,eAAA,CACA,kBAAA,CACA,mBAAA,CACA,wDAAA,CAZA,+FAEI,mBAAA,CACA,gBAAA,CAWJ,kDACI,aAAA,CACA,uCAAA,CACA,kBAAA,CACA,gBAAA,CAKZ,+CACI,cAAA,CACA,cAAA,CACA,eAAA,CACA,qCAAA,CACA,sCAAA,CACA,wEAAA,CACA,6BAAA,CAEI,2KAEI,QAAA,CCnQZ,6CACI,mBAAA,CACA,uBAAA,CACA,yBAAA,CACA,0BAAA,CACA,sBAAA,CAEJ,oBACI,+CAAA,CACA,iBAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,uBAAA,CACA,eAAA,CACA,4BAAA,CACA,mBAAA,CACA,YAAA,CACA,2CACI,UAAA,CACA,cAAA,CACA,qBAAA,CACA,kCAAA,CACA,mCAAA,CAEJ,0BACI,gDAAA,CACA,UAAA,CACA,iBAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,YAAA,CACA,SAAA,CACA,mBAAA,CACA,uCAAA,CACA,8BAAA,CC3CR,gDACI,YAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,+BAAA,CACA,sBAAA,CACA,6BAAA,CACA,yBAAA,CACA,sEACI,mBAAA,CACA,uBAAA,CACA,iBAAA,CACA,aAAA,CACA,4CAAA,CACA,6DAAA,CACA,SAAA,CACA,8BAAA,CACA,yBAAA,CACA,6EACI,SAAA,CACA,0CAAA,CAEJ,iGACI,uBAAA,CCxBZ,gIACI,UAAA,CACA,mBAAA,CACA,iBAAA,CACA,eAAA,CACA,mDAAA,CACA,QAAA,CACA,8BAAA,CACA,+BAAA,CACA,UAAA,CACA,4BAAA,CACA,qBAAA,CACA,UAAA,CACA,6JAAA,CAOA,6BAAA,CACA,6CAAA,CACA,0BAAA,CACA,qDAAA,CDQQ,qHACI,iBAAA,CAIR,4FACI,cAAA,CACA,UAAA,CACA,uDAAA,CACA,sDAAA,CACA,gCAAA,CACA,gBAAA,CACA,8KACI,sCAAA,CAIR,qFACI,YAAA,CAGJ,kGACI,aAAA,CAEJ,yGACI,6CAAA,CACA,0CAAA,CACA,6BAAA,CACA,kBAAA,CAGA,4GACI,gBAAA,CACA,aAAA,CACA,yBAAA,CACA,0BAAA,CACA,kBAAA,CACA,6CAAA,CACA,iHACI,iBAAA,CACA,oBAAA,CACA,2BAAA,CACA,4BAAA,CACA,mDAAA,CACA,iBAAA,CACA,0CAAA,CACA,8CAAA,CACA,8BAAA,CACA,gBAAA,CACA,wHACI,iBAAA,CACA,UAAA,CACA,qCAAA,CACA,sCAAA,CACA,uCAAA,CACA,wCAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CACA,+DAAA,CACA,iBAAA,CACA,WAAA,CACA,qBAAA,CAGR,gHACI,SAAA,CAGR,mGA4BI,cAAA,CA1BI,iIACI,sCAAA,CAMA,wdACI,YAAA,CAIZ,yIACI,gCAAA,CACA,iCAAA,CACA,mFAAA,CACA,qLACI,kCAAA,CACA,uCAAA,CACA,QAAA,CAEJ,kKACI,sCAAA,CACA,eAAA,CAKZ,iGACI,8CAAA,CAIR,yGACI,mBAAA,CACA,uBAAA,CACA,iBAAA,CACA,yBAAA,CACA,iJACI,kCAAA,CACA,uCAAA,CACA,iBAAA,CAEJ,4JACI,mBAAA,CACA,kBAAA,CACA,cAAA,CACA,yBAAA,CACA,sMACI,6BAAA,CACA,qCAAA,CACA,mDAAA,CACA,sCAAA,CACA,cAAA,CACA,uCAAA,CACA,cAAA,CACA,eAAA,CACA,mBAAA,CACA,yBAAA,CACA,kBAAA,CACA,gBAAA,CACA,wMACI,mBAAA,CAEJ,+MACI,qBAAA,CACA,yBAAA,CAEJ,kNACI,WAAA,CAGA,qNACI,uCAAA,CAEJ,mNACI,qCAAA,CAEJ,qNACI,uCAAA,CAEJ,kNACI,oCAAA,CAOpB,4GACI,YAAA,CACA,uBAAA,CACA,yBAAA,CACA,eAAA,CACA,iBAAA,CACA,uJACI,cAAA,CACA,mKACI,SAAA,CAEJ,2LACI,wBAAA,CACA,aAAA,CAUA,2LACI,YAAA,CAEJ,qLACI,4CAAA,CACA,mBAAA,CE5KpB,iBAAA,CAOA,qHANY,CAOZ,2BAAA,CACA,6GARY,CASZ,mBAAA,CFoKoB,wFAAA,CAGA,qOACI,YAAA,CAMhB,4JACI,YAAA,CACA,aAAA,CACA,aAAA,CACA,oBAAA,CACA,kBAAA,CACA,iBAAA,CACA,4BAAA,CACA,WAAA,CACA,+TAEI,eAAA,CACA,sBAAA,CACA,kBAAA,CACA,uCAAA,CAIZ,iMAEI,mBAAA,CACA,uQACI,mBAAA,CAEJ,ohBAEI,oBAAA,CAIA,mUACI,YAAA,CAIR,8fAEI,qDAAA,CACA,6BAAA,CACA,0CAAA,CACA,4BAAA,CACA,WAAA,CACA,gkCAEI,uCAAA,CAKR,gHACI,kDAAA,CAIR,kGACI,YAAA,CAEJ,uIACI,YAAA,CAIA,yNACI,2BAAA,CACA,eAAA,CACA,MAAA,CAMJ,0YACI,qBAAA,CAGA,glBACI,SAAA,CACA,8pBACI,SAAA,CASpB,wDACI,qCAAA,CAGQ,oIACI,eAAA,CACA,iCAAA,CACA,8JACI,YAAA,CAIJ,wKACI,mBAAA,CACA,6KAEI,aAAA,CC9U5B,2JACI,UAAA,CACA,mBAAA,CACA,iBAAA,CACA,eAAA,CACA,mDAAA,CACA,QAAA,CACA,8BAAA,CACA,+BAAA,CACA,UAAA,CACA,4BAAA,CACA,qBAAA,CACA,UAAA,CACA,6JAAA,CAOA,6BAAA,CACA,6CAAA,CACA,0BAAA,CACA,qDAAA,CEtBA,uEACI,YAAA,CACA,uBAAA,CACA,YAAA,CACA,gBAAA,CACA,wBAAA,CACA,6GACI,mBAAA,CAIZ,+DACI,YAAA,CACA,uBAAA,CACA,YAAA,CACA,gBAAA,CACA,wBAAA,CACA,kBAAA,CACA,yDAAA,CACA,wEACI,YAAA,CAEJ,qGACI,mCAAA,CACA,YAAA,CACA,gCAAA,CACA,qCAAA,CACA,kCAAA,CACA,4GACI,eAAA,CACA,WAAA,CAEJ,uGACI,kCAAA,CACA,uCAAA,CCnCZ,+CACI,aAAA,CACA,6BAAA,CAEA,kEACI,YAAA,CACA,uBAAA,CACA,eAAA,CACA,qBAAA,CACA,wEAAA,CACA,qCAAA,CACA,sCAAA,CACA,6BAAA,CAEA,mGACI,YAAA,CACA,oBAAA,CACA,eAAA,CACA,qBAAA,CACA,yBAAA,CACA,sBAAA,CACA,iBAAA,CACA,kCAAA,CACA,4IACI,qBAAA,CACA,mBAAA,CACA,kBAAA,CACA,iBAAA,CACA,yBAAA,CACA,qBAAA,CACA,mJACI,YAAA,CAEJ,kLACI,gBAAA,CACA,cAAA,CACA,oCAAA,CACA,sCAAA,CACA,mCAAA,CACA,gBAAA,CAGR,0IACI,aAAA,CACA,UAAA,CACA,iBAAA,CACA,iBAAA,CACA,mKACI,oCAAA,CACA,WAAA,CACA,WAAA,CACA,8BAAA,CACA,sCAAA,CACA,mCAAA,CACA,YAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,gLACI,kCAAA,CAEJ,uMACI,iBAAA,CACA,WAAA,CACA,KAAA,CACA,MAAA,CACA,SAAA,CAGR,yKACI,aAAA,CACA,UAAA,CACA,SAAA,CACA,iBAAA,CACA,mBAAA,CACA,eAAA,CACA,oBAAA,CACA,qBAAA,CAEJ,oKACI,4BAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,eAAA,CACA,sKACI,+CAAA,CACA,+BAAA,CACA,4BAAA,CACA,cAAA,CAGR,0WAEI,mBAAA,CACA,WAAA,CACA,8WACI,kCAAA,CAMZ,8GACI,YAAA,CAEJ,oIACI,iBAAA,CACA,oBAAA,CACA,eAAA,CACA,cAAA,CACA,0IACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,sCAAA,CACA,SAAA,CACA,4CAAA,CACA,YAAA,CACA,6CAAA,CAEJ,uKACI,0CAAA,CACA,SAAA,CACA,4CAAA,CACA,iBAAA,CACA,QAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,gBAAA,CACA,YAAA,CACA,yKACI,UAAA,CACA,WAAA,CAIJ,gJACI,WAAA,CAEJ,6KACI,SAAA,CAGR,gJACI,8BAAA,CACA,kJACI,8BAAA,CAEJ,iKACI,YAAA,CAMpB,kFACI,gEAAA,CAGJ,kFACI,UAAA,CACA,uCAAA,CACA,iCAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CAIR,kDACI,YAAA,CACA,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,2EAAA,CACA,yCAAA,CACA,sGAEI,uCAAA,CAEJ,wDACI,YAAA,CAEJ,oDACI,QAAA,CACA,oBAAA,CACA,kBAAA,CACA,YAAA,CACA,eAAA,CCpMR,6BACI,YAAA,CACA,qBAAA,CACA,qCAAA,CACA,sCAAA,CACA,UAAA,CACA,kBAAA,CACA,uBAAA,CACA,mBAAA,CACA,0BAAA,CACA,gEACI,YAAA,CACA,qBAAA,CACA,UAAA,CACA,uBAAA,CACA,mBAAA,CACA,0BAAA,CACA,6BAAA,CACA,yGACI,QAAA,CACA,kCAAA,CACA,WAAA,CACA,mDAAA,CAGJ,iFACI,yDAAA,CAGJ,qGACI,YAAA,CACA,qBAAA,CACA,UAAA,CACA,uBAAA,CACA,sBAAA,CACA,0BAAA,CACA,eAAA,CACA,cAAA,CACA,mDAAA,CACA,qCAAA,CACA,sCAAA,CACA,4CAAA,CACA,yBAAA,CACA,+NAEI,0CAAA,CACA,kcAEI,uCAAA,CAGR,+IACI,oCAAA,CACA,sCAAA,CACA,gBAAA,CACA,WAAA,CAEJ,sJACI,sCAAA,CACA,WAAA,CACA,aAAA,CC5DhB,mCACI,QAAA,CACA,6BAAA,CACA,+BAAA,CACA,gFACI,qCAAA,CACA,qCAAA,CACA,+BAAA,CACA,6BAAA,CACA,iBAAA,CACA,sCAAA,CACA,wEAAA,CACA,yHACI,YAAA,CACA,oBAAA,CACA,0BAAA,CACA,kBAAA,CACA,iBAAA,CACA,6BAAA,CACA,yBAAA,CACA,+EAAA,CACA,4HACI,QAAA,CAGJ,gIACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,kDAAA,CACA,WAAA,CACA,mBAAA,CAGR,2GACI,6BAAA,CACA,eAAA,CACA,qBAAA,CACA,UAAA,CACA,iBAAA,CACA,eAAA,CAKZ,yCACI,+CAAA,CACA,gDAAA,CACA,6CAAA,CACA,iBAAA,CACA,6BAAA,CAGJ,kDACI,kCAAA,CAGJ,gDACI,WAAA,CAEA,mEACI,kCAAA,CAIR,mCAaI,kCAAA,CAZA,0CACI,UAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,KAAA,CACA,QAAA,CACA,0CAAA,CACA,WAAA,CACA,mBAAA,CAKJ,sCACI,QAAA,CACA,kCAAA,CAEI,2DACI,gCAAA,CAEJ,4DACI,QAAA,CAKZ,2FACI,eAAA,CCjGR,iBACE,YAAA,CACA,6BACE,gCAAA,CAKF,8CLuCE,iBAAA,CAOA,qHANY,CAOZ,2BAAA,CACA,6GARY,CASZ,mBAAA,CK3CJ,wBACE,qBAAA,CACA,cAAA,CACA,yCAAA,CACA,sCACE,iBAAA,CACA,gDAAA,CACA,sCAAA,CACA,0CAAA,CACA,0CAAA,CACA,uCAAA,CACA,kBAAA,CACA,oCAAA,CACA,kCAAA,CACA,wEAAA,CACA,oBAAA,CACA,uBAAA,CAGA,kDACE,YAAA,CAGJ,mEACE,WAAA,CACA,uEACE,sBAAA,CAKN,+CACE,cAAA,CACA,eAAA,CAEE,0FACE,yDAAA,CAIN,uEAEE,iBAAA,CACA,gBAAA,CACA,UAAA,CACA,qBAAA,CACA,yGACE,eAAA,CACA,6JACE,gBAAA,CACA,mBAAA,CACA,QAAA,CACA,eAAA,CACA,eAAA,CACA,2OACE,YAAA,CAIN,+EACE,sBAAA,CC1EJ,mCACI,aAAA,CACA,qBAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,uEACI,YAAA,CACA,wGACI,qBAAA,CACA,YAAA,CACA,uBAAA,CACA,eAAA,CACA,sBAAA,CACA,uBAAA,CACA,6BAAA,CACA,yBAAA,CACA,uJACI,yBAAA,CACA,YAAA,CACA,oBAAA,CACA,qBAAA,CACA,UAAA,CACA,eAAA,CACA,0BAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,mMACI,MAAA,CACA,eAAA,CAGR,yJACI,eAAA,CACA,qBAAA,CACA,UAAA,CAKJ,iKACI,YAAA,CCvBhB,UAEI,sCAAA,CACA,qCAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CAGJ,kBAMI,eAAA,CAGJ,oBACI,SAAA,CACA,UAAA,CACA,WAAA,CACA,+BACI,SAAA,CACA,UAAA,CAIR,QACI,YAAA",sourcesContent:[`:root {
    --mynah-font-family: var(--vscode-font-family), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Amazon Ember", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: var(--vscode-font-size, 13px);
    font-family: var(--mynah-font-family, "system-ui");
    --mynah-max-width: 2560px;
    --mynah-sizing-base: 0.25rem;
    --mynah-sizing-half: calc(var(--mynah-sizing-base) / 2);
    --mynah-sizing-1: var(--mynah-sizing-base);
    --mynah-sizing-2: calc(var(--mynah-sizing-base) * 2);
    --mynah-sizing-3: calc(var(--mynah-sizing-base) * 3);
    --mynah-sizing-4: calc(var(--mynah-sizing-base) * 4);
    --mynah-sizing-5: calc(var(--mynah-sizing-base) * 5);
    --mynah-sizing-6: calc(var(--mynah-sizing-base) * 6);
    --mynah-sizing-7: calc(var(--mynah-sizing-base) * 7);
    --mynah-sizing-8: calc(var(--mynah-sizing-base) * 8);
    --mynah-sizing-9: calc(var(--mynah-sizing-base) * 9);
    --mynah-sizing-10: calc(var(--mynah-sizing-base) * 10);
    --mynah-sizing-11: calc(var(--mynah-sizing-base) * 11);
    --mynah-sizing-12: calc(var(--mynah-sizing-base) * 12);
    --mynah-sizing-13: calc(var(--mynah-sizing-base) * 13);
    --mynah-sizing-14: calc(var(--mynah-sizing-base) * 14);
    --mynah-sizing-15: calc(var(--mynah-sizing-base) * 15);
    --mynah-sizing-16: calc(var(--mynah-sizing-base) * 16);
    --mynah-sizing-17: calc(var(--mynah-sizing-base) * 17);
    --mynah-sizing-18: calc(var(--mynah-sizing-base) * 18);
    --mynah-button-border-width: 1px;
    --mynah-border-width: 1px;

    --mynah-color-text-default: var(--vscode-foreground);
    --mynah-color-text-strong: var(--vscode-input-foreground);
    --mynah-color-text-weak: var(--vscode-disabledForeground);
    --mynah-color-text-link: var(--vscode-textLink-foreground);
    --mynah-color-text-input: var(--vscode-input-foreground);

    --mynah-color-bg: var(--vscode-sideBar-background);
    --mynah-color-bg-alt: var(--vscode-editorPane-background, var(--mynah-color-bg));
    --mynah-color-tab-active: var(--vscode-tab-activeBackground, var(--vscode-editor-background, var(--mynah-card-bg)));
    --mynah-color-light: rgba(0, 0, 0, 0.05);

    --mynah-color-deep: var(--vscode-checkbox-background);
    --mynah-color-deep-reverse: var(--vscode-checkbox-foreground);
    --mynah-color-border-default: var(--vscode-panel-border, var(--vscode-tab-border, rgba(0, 0, 0, 0.1)));
    --mynah-color-input-bg: var(--vscode-input-background);

    --mynah-color-highlight: rgba(255, 179, 0, 0.25);
    --mynah-color-highlight-text: #886411;

    --mynah-color-context-must-contain: #c7ebce;
    --mynah-color-context-should-contain: var(--vscode-sideBar-background);
    --mynah-color-context-must-not-contain: #f3cac7;
    --mynah-color-context-reverse: rgba(0, 0, 0, 0.5);
    --mynah-color-context-filter: 0.975;

    --mynah-color-syntax-bg: var(--vscode-terminal-dropBackground);
    --mynah-color-syntax-variable: var(--vscode-debugTokenExpression-name);
    --mynah-color-syntax-function: var(--vscode-gitDecoration-modifiedResourceForeground);
    --mynah-color-syntax-operator: var(--vscode-debugTokenExpression-name);
    --mynah-color-syntax-attr-value: var(--vscode-debugIcon-stepBackForeground);
    --mynah-color-syntax-attr: var(--vscode-debugTokenExpression-string);
    --mynah-color-syntax-property: var(--vscode-terminal-ansiCyan);
    --mynah-color-syntax-comment: var(--vscode-debugConsole-sourceForeground);
    --mynah-color-syntax-code: var(--vscode-terminal-ansiBlue);
    --mynah-syntax-code-font-family: var(--vscode-editor-font-family);
    --mynah-syntax-code-font-size: var(--vscode-editor-font-size, var(--mynah-font-size-medium));

    --mynah-color-status-info: var(--vscode-editorInfo-foreground);
    --mynah-color-status-success: var(--vscode-terminal-ansiGreen);
    --mynah-color-status-warning: var(--vscode-editorWarning-foreground);
    --mynah-color-status-error: var(--vscode-editorError-foreground);

    --mynah-color-button: var(--vscode-button-background);
    --mynah-color-button-reverse: var(--vscode-button-foreground);

    --mynah-color-alternate: var(--vscode-button-secondaryBackground);
    --mynah-color-alternate-reverse: var(--vscode-button-secondaryForeground);

    --mynah-color-code-bg: rgba(0, 0, 0, 0.25);
    --mynah-color-code-text: var(--vscode-textPreformat-foreground);

    --mynah-color-main: var(--vscode-button-background);
    --mynah-color-main-reverse: var(--vscode-button-foreground);

    --mynah-card-bg: var(--vscode-editor-background);

    --mynah-shadow-generic: none; //0 5px 10px -10px rgba(0, 0, 0, 0.25);
    --mynah-shadow-card: none; //0 10px 20px -15px rgba(0, 0, 0, 0.25);
    --mynah-shadow-card-more: none; //0 10px 20px -10px rgba(0, 0, 0, 0.5);
    --mynah-shadow-card-active: none; //0 10px 20px -10px rgba(0, 0, 0, 0.5);
    --mynah-shadow-feedback-form: none; //0 0px 40px 0px var(--mynah-color-bg);
    --mynah-shadow-overlay: 0 -5px 25px 20px var(--mynah-color-bg);

    --mynah-font-size-xxsmall: 0.75rem;
    --mynah-font-size-xsmall: 0.85rem;
    --mynah-font-size-small: 0.95rem;
    --mynah-font-size-medium: 1rem;
    --mynah-font-size-large: 1.125rem;
    --mynah-font-size-xlarge: 1.175rem;

    --mynah-card-radius: var(--mynah-sizing-2);
    --mynah-button-radius: var(--mynah-sizing-1);

    --mynah-bottom-panel-transition: all 750ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-xx-short-transition: all 100ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-short-transition: all 500ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition-transform: transform 500ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-long-transition: all 620ms cubic-bezier(0.35, 1, 0.15, 1);
    --mynah-pretty-long-transition: all 700ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-very-long-transition: all 1500ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition: all 450ms cubic-bezier(0.85, 0.15, 0, 1);
    --mynah-short-transition-rev: all 480ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-short-transition-rev-opacity: opacity 650ms cubic-bezier(0.35, 1, 0, 1);
    --mynah-short-transition-reflection: all 900ms cubic-bezier(0.25, 1, 0, 1),
        opacity 750ms 400ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition-turbo: all 500ms cubic-bezier(0.25, 1, 0, 1);
    --mynah-short-transition-turbo-bounce: all 600ms cubic-bezier(0.25, 1, 0, 1),
        transform 700ms cubic-bezier(0.25, 4, 0, 1);
    --mynah-short-transition-bounce: all 750ms cubic-bezier(0.25, 1, 0, 1),
        transform 1000ms cubic-bezier(0.15, 1.25, 0, 1);
    --mynah-text-flow-transition: all 700ms cubic-bezier(0.35, 1.2, 0, 1),
        transform 700ms cubic-bezier(0.2, 1.05, 0, 1);

    --mynah-mask-image: linear-gradient(
        to bottom,
        black var(--mynah-sizing-8),
        black calc(100% - var(--mynah-sizing-14)),
        transparent
    );
    --mynah-mask-image-rev: linear-gradient(to bottom, transparent 0%, transparent 80%, black 100%);
    --mynah-mask-image-main: linear-gradient(
        to bottom,
        transparent,
        black var(--mynah-sizing-6),
        black calc(100% - var(--mynah-sizing-6)),
        transparent
    );
    --mynah-mask-image-main-rev: linear-gradient(to bottom, black, transparent calc(100% - 2px), transparent);

    --mynah-mask-image-skeleton: linear-gradient(
        to bottom,
        black var(--mynah-sizing-8),
        black calc(50% - var(--mynah-sizing-14)),
        transparent
    );

    --mynah-policy-group-filter: saturate(0.5) brightness(0.85);
}
`,`@keyframes horizontal-roll {
    0% {
        background-position: 0% bottom;
    }
    100% {
        background-position: -200% bottom;
    }
}

@keyframes bounce {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(0, calc(-1 * var(--mynah-sizing-2)), 0);
    }
}

@keyframes spinner-spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes typewriter {
    0% {
        visibility: hidden;
        opacity: 0;
    }
    1% {
        visibility: visible;
        opacity: 0;
    }
    100% {
        opacity: 1;
        visibility: visible;
    }
}
@keyframes typewriter-visibility-only {
    to {
        visibility: visible;
    }
}
`,`$smoothbezier: cubic-bezier(0.25, 0, 0, 1);
$smoothduration: 400ms;
#mynah-wrapper {
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    width: 100%;
    max-width: var(--mynah-max-width);
    box-sizing: border-box;
    height: 100%;
    position: relative;
    overflow: hidden;
    justify-content: stretch;
    align-items: stretch;

    > .mynah-ui-tab-contents-wrapper {
        flex: 1;
        position: relative;
    }
}
`,`button.mynah-button {
    border: none;
    min-width: var(--mynah-sizing-8);
    height: var(--mynah-sizing-8);
    border-radius: var(--mynah-button-radius);
    background-color: var(--mynah-color-button);
    color: var(--mynah-color-button-reverse);
    box-shadow: var(--mynah-shadow-generic);
    cursor: pointer;
    transition: var(--mynah-very-short-transition);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    overflow: hidden;
    position: relative;
    transform: translate3d(0, 0, 0) scale(1.00001);
    padding: 0;
    filter: brightness(0.9);
    opacity: 0.85;
    &.mynah-bottom-block-close-button {
        position: absolute;
        align-self: flex-end;
        transform: translate3d(var(--mynah-sizing-2), calc(-100% - var(--mynah-sizing-6)), 0px);
        background-color: var(--mynah-card-bg);
        color: var(--mynah-color-text-default);
        box-shadow: var(--mynah-shadow-feedback-form);
    }
    &[disabled="disabled"] {
        opacity: 0.25 !important;
        pointer-events: none;
    }
    &.mynah-button-secondary {
        background-color: transparent;
        color: inherit;
        box-shadow: none;
        opacity: 0.75;
        height: var(--mynah-sizing-6);
        &:focus-visible,
        &:hover {
            opacity: 1;
        }
        &:active {
            box-shadow: none;
        }
    }
    &:focus-visible,
    &:hover {
        filter: brightness(1);
        opacity: 1;
    }
    &:active {
        filter: brightness(0.9);
        opacity: 0.85;
    }
    &.mynah-icon-button {
        width: var(--mynah-sizing-10);
        height: var(--mynah-sizing-10);
    }
    > .mynah-mutating-next-icon {
        width: var(--mynah-sizing-6);
        height: var(--mynah-sizing-6);
        transform: translate3d(0, 0, 0) rotateZ(0deg);
        transition: var(--mynah-short-transition-turbo);
        transform-origin: center center;
        display: inline-flex;
        flex-flow: row nowrap;
        box-sizing: border-box;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        > i {
            font-size: var(--mynah-font-size-xlarge);
            &:nth-child(2) {
                display: none;
            }
        }
    }
    > .mynah-search-history-icon {
        width: var(--mynah-sizing-6);
        height: var(--mynah-sizing-6);
        transform: translate3d(0, 0, 0) rotateZ(0deg);
        transition: var(--mynah-short-transition-turbo);
        transform-origin: center center;
        display: inline-flex;
        flex-flow: row nowrap;
        box-sizing: border-box;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        > i {
            font-size: 2rem;
            &:nth-child(2) {
                display: none;
            }
        }
    }
    &.mynah-button-wait {
        background-color: var(--mynah-color-light);
        color: var(--mynah-color-text-default);
        box-shadow: 0 5px 10px -10px var(--mynah-color-light);
        pointer-events: none;
        > .mynah-mutating-next-icon > i {
            &:first-child {
                display: none;
            }
            &:nth-child(2) {
                display: block;
            }
        }
    }
    > span {
        white-space: nowrap;
        font-size: var(--mynah-font-size-medium);
        max-width: 35vw;
        transition: var(--mynah-very-long-transition);
        overflow: hidden;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: var(--mynah-sizing-3);
        padding-right: var(--mynah-sizing-3);
    }
    > i + span {
        padding-left: var(--mynah-sizing-base);
    }
}
`,`.mynah-toggle-container {
    flex-flow: row nowrap;
    max-width: 100%;
    overflow: hidden;
    align-items: center;
    position: relative;
    background: var(--mynah-color-context-should-contain);
    color: var(--mynah-color-context-reverse);
    justify-content: flex-start;
    overflow-y: hidden;
    overflow-x: auto;
    display: flex;
    > span {
        overflow: hidden;
        height: 100%;
        min-width: var(--mynah-sizing-8);
        max-width: calc(3 * var(--mynah-sizing-15));
        flex-shrink: 0;
        > .mynah-toggle-option {
            display: none;
            &:not(:first-child) + .mynah-toggle-option-label {
                margin-left: calc(-1 * var(--mynah-sizing-1));
            }
            &:not(:checked) + .mynah-toggle-option-label {
                &.indication:after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    margin-top: calc(-1 * var(--mynah-sizing-half));
                    left: var(--mynah-sizing-2);
                    height: var(--mynah-sizing-1);
                    width: var(--mynah-sizing-1);
                    background-color: var(--mynah-color-status-success);
                    border-radius: var(--mynah-sizing-1);
                    border: 1px solid var(--mynah-color-text-weak);
                    opacity: 0.75;
                }
            }
            & + .mynah-toggle-option-label {
                cursor: pointer;
                pointer-events: all;
                position: relative;
                z-index: 100;
                padding: 0 var(--mynah-sizing-3) 0 var(--mynah-sizing-5);
                height: 100%;
                box-sizing: border-box;
                display: inline-flex;
                overflow: hidden;
                justify-content: stretch;
                align-items: center;
                color: var(--mynah-color-text-weak);
                border-right: 1px solid var(--mynah-color-border-default);
                border-top: 1px solid transparent;
                background-color: var(--mynah-color-bg);
                opacity: 0.75;
                max-width: 100%;
                &,
                & * {
                    user-select: none;
                }
                > span {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    max-width: 100%;
                    display: block;
                }
                > .mynah-toggle-close-button {
                    margin-left: var(--mynah-sizing-3);
                    font-size: var(--mynah-font-size-xsmall);
                    min-width: 1em;
                }
            }
            &:checked + .mynah-toggle-option-label {
                border-top-color: var(--mynah-color-button);
                color: var(--mynah-color-text-default);
                opacity: 1;
                background-color: var(--mynah-color-tab-active);
            }
            &[disabled="disabled"] {
                pointer-events: none !important;
                & + .mynah-toggle-option-label {
                    pointer-events: none !important;
                    opacity: 0.25;
                }
            }
        }
    }

    &.mynah-toggle-direction-vertical {
        flex-flow: column nowrap;
        gap: var(--mynah-sizing-3);
    }
}

.mynah-toggle-disabled-tooltip-container {
    max-width: 30vw;
    display: inline-block;
    padding: var(--mynah-sizing-3);
    font-size: 80%;
    opacity: 0.85;
}
`,`.mynah-ui-icon {
    font-style: normal;
    font-weight: normal;
    display: inline-flex;
    width: 1em;
    height: 1em;
    font-variant: normal;
    text-transform: none;
    -webkit-mask-size: 100%;
    mask-size: 100%;
    -webkit-mask-position: center center;
    mask-position: center center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    color: inherit;
    background-color: currentColor;
    > span {
        display: none;
    }
}
`,`.mynah-nav-tabs-wrapper {
    border-top: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
    background-color: var(--mynah-color-bg);
    display: flex;
    align-items: center;
    overflow: hidden;
    box-shadow: var(--mynah-shadow-generic);
    z-index: 100;
    min-height: var(--mynah-sizing-10);
    max-height: var(--mynah-sizing-10);
    position: relative;
    &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: auto;
        height: var(--mynah-button-border-width);
        background-color: var(--mynah-color-border-default);
    }

    > .mynah-toggle-container {
        height: 100%;
        background: none;
        box-sizing: border-box;
        > span {
            white-space: nowrap;
        }
    }
    &:empty {
        display: none;
    }

    &.mynah-nav-tabs-loading,
    &.mynah-nav-tabs-loading * {
        pointer-events: none;
    }
}

.mynah-nav-tabs-max-reached-overlay {
    min-width: max(20vw, 100px);
    max-width: 90vw;
}
`,`.mynah-card {
    text-decoration: none;
    outline: none;
    position: relative;
    transition: var(--mynah-short-transition-rev);
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    gap: var(--mynah-sizing-3);
    transform: translate3d(0, 0, 0);
    flex: auto 0 0;
    width: 100%;
    overflow: hidden;
    border-radius: var(--mynah-card-radius);

    &.padding {
        &-none {
            padding: 0;
        }
        &-small {
            padding: var(--mynah-sizing-1);
        }
        &-medium {
            padding: var(--mynah-sizing-3);
        }
        &-large {
            padding: var(--mynah-sizing-5);
        }
    }
    &.background {
        background-color: var(--mynah-card-bg);
    }
    &.border {
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    }

    > * {
        z-index: 10;
        position: relative;
    }

    @import '../source-link-header';
    @import '../votes-wrapper';
}

@import 'card-body';
`,`> .mynah-source-link-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 1;
    gap: var(--mynah-sizing-2);
    transition: var(--mynah-very-short-transition);
    > .mynah-source-thumbnail {
        font-style: normal;
        font-weight: normal;
        display: none;
        width: var(--mynah-sizing-8);
        height: var(--mynah-sizing-8);
        font-variant: normal;
        text-transform: none;
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        border-radius: 100%;
        background-size: 85%;
        background-clip: content-box;
        background-position: center center;
        background-repeat: no-repeat;
        align-self: flex-start;
        box-sizing: border-box;
        background-color: var(--mynah-card-bg);
        position: relative;
        overflow: hidden;
        &:after {
            content: "";
            pointer-events: none;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: auto;
            height: auto;
            border: 2px solid var(--mynah-card-bg);
            border-radius: 100%;
        }
    }
    > .mynah-source-link-title-wrapper {
        flex: 1 1 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        gap: var(--mynah-sizing-half);
        max-width: 100%;
        overflow: hidden;
        cursor: pointer;
        &:hover > .mynah-source-link-title > .mynah-source-link-expand-icon {
            opacity: 0.75;
            align-self: baseline;
        }
        > .mynah-source-link-title {
            font-size: var(--mynah-font-size-medium);
            font-weight: 500;
            color: var(--mynah-color-text-strong);
            width: 100%;
            display: inline-flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: flex-start;
            gap: var(--mynah-sizing-2);
            white-space: normal;
            text-overflow: ellipsis;
            text-decoration: none;
            outline: none;
            overflow: hidden;
            > .mynah-source-link-expand-icon {
                transition: var(--mynah-short-transition-rev);
                opacity: 0;
                color: var(--mynah-color-text-weak);
                font-size: var(--mynah-font-size-xsmall);
                display: inline;
                padding: var(--mynah-sizing-1);
            }
        }
        > .mynah-source-link-url {
            font-size: var(--mynah-font-size-xsmall);
            font-weight: 300;
            color: var(--mynah-color-text-link);
            white-space: nowrap;
            text-overflow: ellipsis;
            text-decoration: none;
            outline: none;
            overflow: hidden;
            max-width: 100%;
            position: relative;
            padding-bottom: var(--mynah-sizing-1);
            display: inline-block;
            transition: var(--mynah-short-transition-rev);
            &:after {
                content: "";
                position: relative;
                display: block;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                border-radius: var(--mynah-sizing-half);
                background-color: currentColor;
                transform: translate3d(-30%, 0, 0);
                transition: var(--mynah-short-transition-rev);
                opacity: 0;
            }
            &:hover {
                &:after {
                    transform: translate3d(0, 0, 0);
                    opacity: 1;
                }
            }
            > span {
                &:not(:last-child):after {
                    content: ">";
                    margin-left: var(--mynah-sizing-1);
                    margin-right: var(--mynah-sizing-1);
                }
                &:nth-child(3) ~ span:not(:last-child) {
                    display: none;
                }
                &:last-child {
                    font-weight: bold;
                }
                &:nth-child(3):not(:last-child):after {
                    content: "> ... >";
                }
            }
        }
        > .mynah-title-meta-block {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: flex-start;
            gap: var(--mynah-sizing-1);
            margin-bottom: var(--mynah-sizing-half);
            &:empty {
                display: none;
            }
            > .mynah-title-meta-block-item {
                display: inline-flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: flex-start;
                gap: var(--mynah-sizing-1);
                padding: calc(var(--mynah-sizing-half) * 3);
                border: var(--mynah-border-width) solid var(--mynah-color-border-default);
                border-radius: var(--mynah-button-radius);
                opacity: 0.75;
                > .mynah-icon {
                    opacity: 0.5;
                    font-size: var(--mynah-font-size-medium);
                    color: var(--mynah-color-text-weak);
                }
                > .mynah-title-meta-block-item-text {
                    font-size: var(--mynah-font-size-xxsmall);
                    color: var(--mynah-color-text-weak);
                    &::first-letter {
                        text-transform: capitalize;
                    }
                }
                &.approved-answer {
                    border-color: green;
                    position: relative;
                    &:before {
                        content: "";
                        border-radius: var(--mynah-button-radius);
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: green;
                        opacity: 0.04;
                    }
                    > .mynah-icon {
                        opacity: 1;
                        color: green;
                        border-radius: var(--mynah-button-radius);
                        width: var(--mynah-sizing-3);
                        height: var(--mynah-sizing-3);
                    }
                }
            }
        }
    }
}
`,`> .mynah-card-votes-wrapper {
    align-items: center;
    gap: var(--mynah-sizing-2);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid var(--mynah-color-border-default);
    padding-top: var(--mynah-sizing-3);
    font-size: var(--mynah-font-size-small);
    > span.mynah-feedback-thanks {
        overflow: hidden;
    }
    > .mynah-button > span {
        padding: 0;
        font-size: var(--mynah-font-size-small);
        color: var(--mynah-color-text-link);
    }
    > .mynah-vote-text {
        color: var(--mynah-color-text-weak);
        font-size: var(--mynah-font-size-small);
    }
    > .mynah-card-vote {
        position: relative;
        overflow: visible;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        gap: var(--mynah-sizing-3);
        > .mynah-vote-radio {
            display: none;
        }
        > .mynah-vote-label {
            z-index: 10;
            cursor: pointer;
            font-size: var(--mynah-font-size-small);
            transition: var(--mynah-short-transition);
            width: var(--mynah-sizing-5);
            height: var(--mynah-sizing-5);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: var(--mynah-color-text-weak);
            opacity: 0.5;
            > * {
                pointer-events: none;
            }
            > i {
                height: calc(var(--mynah-sizing-6) + var(--mynah-sizing-half));
            }
        }
        > .mynah-vote-up-radio:checked {
            & ~ .mynah-vote-up {
                color: var(--mynah-color-text-default);
                opacity: 1;
            }
        }
        > .mynah-vote-down-radio:checked {
            & ~ .mynah-vote-down {
                color: var(--mynah-color-text-default);
                opacity: 1;
            }
        }
    }
}
`,`.mynah-card-body {
    flex: 1;
    overflow: hidden;
    position: relative;
    display: block;

    a {
        pointer-events: bounding-box;
        color: var(--mynah-color-text-link);
    }

    > *:not(pre) {
        font-size: var(--mynah-font-size-medium);
    }
    span[start][end] {
        display: none;
    }
    > p:first-child {
        &,
        & h1:first-child,
        & h2:first-child,
        & h3:first-child,
        & h4:first-child,
        & h5:first-child {
            margin-top: 0;
        }
    }
    > p:first-child:last-of-type,
    > p p:first-child {
        margin: 0;
    }
    &,
    & > div {
        > *:not(div):not(pre) {
            margin-block-start: 0.75em;
            margin-block-end: 0.75em;
            padding-bottom: 1px !important;
            &:first-child {
                margin-block-start: 0;
            }
            user-select: text;
            &:empty {
                display: none;
            }
        }
        > p:last-of-type {
            margin-block-end: 0;
        }
        mark[reference-tracker] {
            background-color: var(--mynah-color-highlight);
            color: inherit;
            cursor: help;
        }
        .amzn-mynah-search-result-highlight {
            background-color: var(--mynah-color-highlight);
            color: var(--mynah-color-highlight-text);
        }
        .amzn-mynah-search-result-ellipsis {
            display: inline-block;
            position: relative;
            padding-left: var(--mynah-sizing-2);
            margin-top: var(--mynah-sizing-1);
            margin-bottom: var(--mynah-sizing-1);
            font-size: calc(1em + var(--mynah-sizing-1)) !important;
            user-select: none;
            cursor: default;
            height: var(--mynah-sizing-7);

            &:before {
                pointer-events: none;
                content: "";
                width: calc(1em + var(--mynah-sizing-2));
                height: calc(1em + var(--mynah-sizing-2));
                position: absolute;
                left: 0;
                top: 0;
                background-color: currentColor;
                opacity: 0.1;
                border-radius: var(--mynah-sizing-1);
            }
        }
    }
}
`,`#mynah-feedback-form-wrapper {
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    bottom: 0;
    left: var(--mynah-sizing-2);
    right: var(--mynah-sizing-2);
    width: auto;
    box-sizing: border-box;
    z-index: 9999999;
    opacity: 0;
    transform: translate3d(0, 5vh, 0);
    transition: var(--mynah-bottom-panel-transition);
    overflow: visible;
    &:before {
        transition: all 400ms cubic-bezier(0.25, 0, 0, 1);
        content: "";
        position: absolute;
        right: calc(-1 * var(--mynah-sizing-2));
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0;
        pointer-events: none;
        transform: translate3d(0, 0, 0) scale(2);
        transform-origin: center center;
        z-index: -1;
    }
    > .mynah-bottom-block-close-button {
        transform: translate3d(calc(-1 * var(--mynah-sizing-1)), calc(-100% - var(--mynah-sizing-3)), 0px);
    }
    & + #mynah-wrapper {
        transition: var(--mynah-bottom-panel-transition);
    }
    &:not(.mynah-feedback-form-show) {
        &,
        & * {
            pointer-events: none !important;
        }
    }
    &.mynah-feedback-form-show {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        &:before {
            opacity: 0.15;
        }
        & + #mynah-wrapper {
            transform: translate3d(0, 0px, 0) scale(0.95);
            transform-origin: top center;
            opacity: 0.25;
            &,
            & * {
                pointer-events: none !important;
            }
        }
    }
}

.mynah-feedback-form {
    pointer-events: all;
    box-sizing: border-box;
    transition: var(--mynah-short-transition-rev);
    transform: translate3d(0, 0, 0);
    display: flex;
    flex-flow: column;
    gap: var(--mynah-sizing-4);
    align-items: stretch;
    transform-origin: right bottom;
    z-index: 10;
    position: relative;
    border: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
    border-top-right-radius: var(--mynah-card-radius);
    border-top-left-radius: var(--mynah-card-radius);
    border-bottom: none;
    box-shadow: 0px -25px 20px -25px rgba(0, 0, 0, 0.15);
    background-color: var(--mynah-color-bg);
    padding: var(--mynah-sizing-4);

    > .mynah-feedback-form-header {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        margin-bottom: var(--mynah-sizing-4);
        > h4 {
            flex: 1;
            margin: 0;
        }
    }

    > .mynah-feedback-form-comment {
        background-color: transparent;
        padding: var(--mynah-sizing-3);
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        resize: none;
        width: 100%;
        height: 100px;
        max-height: 25vh;
        border-radius: var(--mynah-sizing-2);
        font-size: var(--mynah-font-size-small);
        outline: none;
        color: var(--mynah-color-text-input);
        background-color: var(--mynah-card-bg);
        box-sizing: border-box;
        font-family: inherit;
    }

    > .mynah-feedback-form-select-wrapper {
        position: relative;
        display: flex;
        box-sizing: border-box;
        padding: var(--mynah-sizing-3);
        justify-content: flex-end;
        align-items: center;
        > .mynah-feedback-form-select {
            position: absolute;
            width: 100%;
            left: 0;
            color: var(--mynah-color-text-default);
            border-radius: var(--mynah-card-radius);
            padding: var(--mynah-sizing-3);
            border: var(--mynah-border-width) solid var(--mynah-color-border-default);
            background-color: var(--mynah-card-bg);
            -webkit-appearance: none;
            appearance: none;
            text-indent: 1px;
            text-overflow: clip;
            outline: none;
        }
        > .mynah-feedback-form-select-handle {
            color: var(--mynah-color-text-weak);
            pointer-events: none;
        }
    }

    > .mynah-feedback-form-buttons-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: var(--mynah-sizing-1);
        box-sizing: border-box;
    }
}
`,`.mynah-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 1000000;
    &.mynah-overlay-dim-outside {
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--mynah-color-bg);
            transition: var(--mynah-short-transition-rev-opacity);
            opacity: 0.45;
        }
    }
    > .mynah-overlay-container {
        --overlayLeftPos: 0;
        --overlayTopPos: 0;
        --overlayInnerHorizontalOrigin: left;
        --overlayInnerVerticalOrigin: top;
        position: absolute;
        display: block;
        overflow: visible;
        border-radius: var(--mynah-card-radius);

        .mynah-card,
        .mynah-card * {
            pointer-events: none !important;
            .mynah-syntax-highlighter-copy-buttons {
                display: none;
                & ~ *:last-child {
                    margin-bottom: 0 !important;
                }
            }
        }

        &.background {
            &:before {
                content: "";
                background-color: transparent;
                transition: var(--mynah-short-transition-rev);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: auto;
                height: auto;
                pointer-events: none;
                box-sizing: border-box;
                opacity: 0;
                border: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
                z-index: 100;
                box-shadow: var(--mynah-shadow-overlay);
                transform-origin: left bottom;
                border-radius: inherit;
            }

            &:after {
                content: "";
                position: absolute;
                width: var(--mynah-sizing-8);
                height: var(--mynah-sizing-8);
                left: 0;
                top: 0;
                opacity: 0;
                border: var(--mynah-sizing-4);
                background-color: var(--mynah-card-bg);
                border-radius: inherit;
                transition: var(--mynah-short-transition-rev);
                transition-delay: 20ms;
            }
        }

        &.horizontal-direction {
            &-to-left,
            &-from-end-to-left {
                --overlayLeftPos: -100%;
                --overlayInnerHorizontalOrigin: right;
                &:before{
                    transform-origin: right center;
                }
                &:after {
                    left: calc(100% - var(--mynah-sizing-4));
                }
            }
            &-at-center {
                --overlayInnerHorizontalOrigin: center;
                --overlayLeftPos: -50%;
                &:after {
                    left: calc(50% - var(--mynah-sizing-4));
                }
            }
        }
        &.vertical-direction {
            &-to-top,
            &-from-end-to-top {
                --overlayTopPos: -100%;
                --overlayInnerVerticalOrigin: bottom;
                &:after {
                    top: calc(100% - var(--mynah-sizing-4));
                }
            }
            &-at-center {
                --overlayInnerVerticalOrigin: center;
                --overlayTopPos: -50%;
                &:after {
                    top: calc(50% - var(--mynah-sizing-4));
                }
            }
        }

        > .mynah-overlay-inner-container {
            display: inline-block;
            overflow: hidden;
            z-index: 10;
            position: relative;
            transform: translate3d(0, 0, 0) scale(0.85);
            transform-origin: var(--overlayInnerHorizontalOrigin) var(--overlayInnerVerticalOrigin);
            transition: var(--mynah-short-transition-rev);
            width: 100%;
            // box-shadow: var(--mynah-shadow-overlay);
        }
        &:before {
            transform: translate3d(0, 0, 0) scale(0.85);
            transition: var(--mynah-short-transition-rev);
        }
        > .mynah-overlay-inner-container,
        &:before {
            opacity: 0;
            transition-delay: 0ms;
        }

        transform: translate3d(var(--overlayLeftPos), var(--overlayTopPos), 0);
    }
    &:not(.mynah-overlay-open) {
        &,
        & * {
            pointer-events: none !important;
        }
    }

    &.mynah-overlay-open {
        > .mynah-overlay-container {
            > .mynah-overlay-inner-container {
                transform: translate3d(0, 0, 0) scale(1);
            }
            &:before {
                transform: translate3d(0, 0, 0) scale(1);
                transition-delay: 50ms;
                opacity: 1;
            }
            > .mynah-overlay-inner-container {
                transition-delay: 20ms;
            }
            > .mynah-overlay-inner-container {
                opacity: 1;
            }
            &:after {
                transition-delay: 0ms;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                opacity: 1;
            }
        }
        &.mynah-overlay-close-on-outside-click {
            pointer-events: all;
        }
    }
}
`,`.mynah-notification {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--mynah-sizing-3);
    padding: var(--mynah-sizing-5);
    overflow: hidden;
    position: relative;
    &.mynah-notification-clickable {
        pointer-events: all;
        cursor: pointer;
    }
    > .mynah-ui-icon {
        font-size: var(--mynah-sizing-6);
        &- {
            &ok-circled {
                color: var(--mynah-color-status-success);
            }
            &info {
                color: var(--mynah-color-status-info);
            }
            &warning {
                color: var(--mynah-color-status-warning);
            }
            &error {
                color: var(--mynah-color-status-error);
            }
        }
    }
    > .mynah-notification-container {
        flex: 1;
        max-width: 50vw;
        min-width: 200px;
        display: inline-flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--mynah-sizing-3);
        overflow: hidden;
        position: relative;
        > .mynah-notification-title {
            margin: 0;
            &:empty {
                display: none;
            }
        }
        > .mynah-notification-content {
            font-size: var(--mynah-font-size-small);
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: flex-start;
            gap: var(--mynah-sizing-2);
            > .mynah-button {
                align-self: stretch;
                background-color: var(--mynah-color-alternate);
                color: var(--mynah-color-alternate-reverse);
            }
        }
    }
}
`,`.mynah-syntax-highlighter {
    display: flex;
    flex-flow: column nowrap;
    box-sizing: border-box;
    overflow: hidden;
    margin: var(--mynah-sizing-1) 0;
    background-color: var(--mynah-card-bg);
    max-width: 100%;
    & + *:not(:empty) {
        margin-top: var(--mynah-sizing-2);
    }
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    position: relative;
    border-radius: var(--mynah-card-radius);
    line-height: normal;
    color: var(--mynah-color-text-default);
    &:before,
    & > .line-numbers-rows:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--mynah-color-syntax-bg);
        opacity: 0.2;
        pointer-events: none;
        user-select: none;
    }
    > .mynah-syntax-highlighter-copy-buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: var(--mynah-sizing-half);
        padding-left: var(--mynah-sizing-3);
        order: 256000;
        box-sizing: border-box;
        margin: 0;
        margin-block: 0 !important;
        position: relative;
        border-top: 1px solid var(--mynah-color-border-default);
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: var(--mynah-color-border-default);
            opacity: 0.25;
        }
        > .mynah-syntax-highlighter-language {
            flex: 1;
            font-size: var(--mynah-font-size-xsmall);
            display: inline-block;
            opacity: 0.65;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .mynah-button {
            min-width: var(--mynah-sizing-6);
            height: calc(var(--mynah-sizing-6) + var(--mynah-sizing-half));
            * {
                font-size: var(--mynah-font-size-xsmall);
                color: var(--mynah-color-text-strong);
            }
        }
    }
    &.mynah-inline-code {
        display: inline-flex;
        max-width: 100%;
        line-height: normal;
        padding: 0 !important;
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        overflow: visible;
        border: none;
        color: var(--mynah-color-syntax-attr);
        margin-left: 2px;
        margin-right: 2px;
        padding-bottom: 1px !important;
        margin-bottom: -1px;
        background-color: transparent !important;
        > pre {
            padding: 0;
        }
        &:after {
            content: "";
            position: absolute;
            box-sizing: border-box;
            top: 0;
            height: 100%;
            left: -2px;
            width: calc(100% + 4px);
            border-radius: calc(var(--mynah-card-radius) / 2);
            border: var(--mynah-border-width) solid var(--mynah-color-border-default);
            background-color: var(--mynah-card-bg);
            z-index: -1;
        }
        &:before {
            left: -2px;
            width: calc(100% + 4px);
            border-radius: calc(var(--mynah-card-radius) / 2);
            box-sizing: border-box;
        }
    }
    > pre {
        padding: var(--mynah-sizing-2);
        margin: 0;
        overflow-x: auto;
        overflow-y: hidden;
        position: relative;

        *,
        & {
            font-size: var(--mynah-syntax-code-font-size) !important;
            font-family: var(--mynah-syntax-code-font-family) !important;
        }
        > code {
            color: var(--mynah-color-syntax-code);
            filter: brightness(0.95);
            white-space: pre;
        }

        > code,
        & {
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            tab-size: 4;
            hyphens: none;
        }
        > code::selection,
        &::selection {
            text-shadow: none;
            background: #b3d4fc;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
            color: var(--mynah-color-syntax-comment);
        }

        .token.punctuation {
            color: currentColor;
        }

        .token.namespace {
            opacity: 0.7;
        }

        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol,
        .token.deleted {
            color: var(--mynah-color-syntax-property);
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
            color: var(--mynah-color-syntax-attr);
        }

        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
            color: var(--mynah-color-syntax-operator);
        }

        .token.atrule,
        .token.attr-value,
        .token.class-name,
        .token.keyword {
            color: var(--mynah-color-syntax-attr-value);
        }

        .token.function {
            color: var(--mynah-color-syntax-function);
            font-weight: 500;
        }
        
        .token.regex,
        .token.important,
        .token.variable {
            color: var(--mynah-color-syntax-variable);
            font-weight: 500;
        }

        .token.important,
        .token.bold {
            font-weight: bold;
        }
        .token.italic {
            font-style: italic;
        }

        .token.entity {
            cursor: help;
        }

        &.line-numbers {
            position: relative;
            padding-left: 3.8em;
            counter-reset: linenumber;
            position: relative;
        }
    }
    > .line-numbers-rows {
        position: absolute;
        background-color: inherit;
        > span,
        & {
            pointer-events: none;
            user-select: none;
        }
        top: var(--mynah-sizing-2);
        font-size: 100%;
        left: 0;
        width: var(--mynah-sizing-12);
        overflow: hidden;
        text-overflow: clip;
        letter-spacing: -1px;
        border-right: 1px solid var(--mynah-color-border-default);

        > span {
            display: block;
            color: var(--mynah-color-border-default);
            padding-right: 0.8em;
            text-align: right;
        }
    }
}

.mynah-ui-syntax-highlighter-highlight-tooltip {
    max-width: 80vw;
    min-width: 10vw;
    max-height: 80vh;
    background-color: var(--mynah-card-bg);
    border-radius: var(--mynah-card-radius);
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    padding: var(--mynah-sizing-5);
    .mynah-card-body {
        > p:first-child:last-of-type,
        > p p:first-child {
            margin: 0;
        }
    }
}
`,`.mynah-chat-prompt-overlay-buttons-container {
    display: inline-flex;
    flex-flow: column nowrap;
    gap: var(--mynah-sizing-2);
    justify-content: flex-start;
    align-items: flex-start;
}
.mynah-chat-wrapper {
    transition: var(--mynah-bottom-panel-transition);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: auto;
    flex-flow: column nowrap;
    overflow: hidden;
    justify-content: space-around;
    align-items: stretch;
    display: none;
    > div[class^="mynah-chat"] {
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        padding-left: var(--mynah-sizing-4);
        padding-right: var(--mynah-sizing-4);
    }
    &:after {
        transition: all $smoothduration $smoothbezier;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: auto;
        height: auto;
        background-color: black;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transform: translate3d(0, 0, 0) scale(2);
        transform-origin: center center;
    }

    @import "chat-items-container";
    @import "chat-overflowing-intermediate-block";
    @import "chat-prompt-wrapper";
}

@import 'chat-command-selector';
@import "chat-item-tree-view";
@import "chat-prompt-code-snippet";
`,`> .mynah-chat-items-container {
    display: flex;
    flex: 1 1 0%;
    overflow-x: hidden;
    overflow-y: auto;
    flex-flow: column-reverse nowrap;
    align-items: flex-start;
    padding: var(--mynah-sizing-4);
    gap: var(--mynah-sizing-4);
    .mynah-chat-item-card {
        display: inline-flex;
        flex-flow: column nowrap;
        position: relative;
        max-width: 90%;
        transition: var(--mynah-text-flow-transition);
        transform: translate3d(0, min(50%, 25vh), 0) scale(0.95, 1.25);
        opacity: 0;
        transform-origin: center bottom;
        gap: var(--mynah-sizing-4);
        &.reveal {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1, 1);
        }
        &.mynah-chat-item-no-content {
            display: none !important;
        }

        &.mynah-chat-item-answer-stream {
            &.typewriter-animating {
                @import "chat-items-bottom-animator";
            }
            .typewriter-part {
                visibility: hidden;
            }
        }

        .mynah-chat-item-card {
            max-width: 100%;
            width: 100%;
            padding: var(--mynah-sizing-3) 0 var(--mynah-sizing-3) 0;
            border-top: 1px solid var(--mynah-color-border-default);
            margin-top: var(--mynah-sizing-3);
            padding-bottom: 0;
            .mynah-chat-item-card-related-content > .mynah-chat-item-card-related-content-title {
                font-size: var(--mynah-font-size-large);
            }
        }

        > span.invisible {
            display: none;
        }

        &.mynah-chat-item-code-result {
            min-width: 70%;
        }
        > .mynah-chat-item-card-icon-wrapper {
            background-color: var(--mynah-color-alternate);
            color: var(--mynah-color-alternate-reverse);
            padding: var(--mynah-sizing-2);
            border-radius: 100%;
        }
        > .mynah-card {
            > .mynah-chat-items-spinner {
                overflow: visible;
                z-index: 10000;
                gap: var(--mynah-sizing-2);
                justify-content: flex-start;
                align-items: center;
                transition: var(--mynah-very-short-transition);
                > span {
                    position: relative;
                    display: inline-block;
                    width: var(--mynah-sizing-5);
                    height: var(--mynah-sizing-5);
                    border: var(--mynah-sizing-half) solid rgba(0, 0, 0, 0);
                    border-radius: 50%;
                    border-top-color: var(--mynah-color-button);
                    animation: spinner-spin 1s ease-in-out infinite;
                    transform-origin: center center;
                    overflow: visible;
                    &:before {
                        position: absolute;
                        content: "";
                        top: calc(-1 * var(--mynah-sizing-half));
                        left: calc(-1 * var(--mynah-sizing-half));
                        right: calc(-1 * var(--mynah-sizing-half));
                        bottom: calc(-1 * var(--mynah-sizing-half));
                        width: auto;
                        height: auto;
                        aspect-ratio: 1; // Just to make sure that the spinner is a circle
                        border: var(--mynah-sizing-half) solid var(--mynah-color-button);
                        border-radius: 50%;
                        opacity: 0.15;
                        box-sizing: border-box;
                    }
                }
                > div {
                    opacity: 1;
                }
            }
            > .mynah-card-body {
                & > div {
                    > .mynah-syntax-highlighter {
                        filter: contrast(1.15) brightness(0.85);
                    }
                    > h1,
                    > h2,
                    > h3,
                    > h4 {
                        &:first-child {
                            margin-top: 0;
                        }
                    }
                }
                > .mynah-chat-item-card-related-content {
                    margin-top: var(--mynah-sizing-3);
                    padding-top: var(--mynah-sizing-4);
                    border-top: var(--mynah-button-border-width) solid var(--mynah-color-border-default);
                    > .mynah-chat-item-card-related-content-title {
                        color: var(--mynah-color-text-weak);
                        font-size: var(--mynah-font-size-xsmall);
                        margin: 0;
                    }
                    .mynah-source-link-title {
                        font-size: var(--mynah-font-size-small);
                        font-weight: 400;
                    }
                }
                padding-left: 0;
            }
            :hover::before {
                box-shadow: var(--mynah-shadow-card) !important;
            }
        }

        > .mynah-chat-item-followup-question {
            display: inline-flex;
            flex-flow: column nowrap;
            position: relative;
            gap: var(--mynah-sizing-2);
            > .mynah-chat-item-followup-question-text {
                color: var(--mynah-color-text-weak);
                font-size: var(--mynah-font-size-xsmall);
                font-style: italic;
            }
            > .mynah-chat-item-followup-question-options-wrapper {
                display: inline-flex;
                flex-flow: row wrap;
                max-width: 100%;
                gap: var(--mynah-sizing-2);
                > .mynah-chat-item-followup-question-option {
                    padding: var(--mynah-sizing-2);
                    color: var(--mynah-color-text-default);
                    border: var(--mynah-border-width) solid currentColor;
                    border-radius: var(--mynah-card-radius);
                    cursor: pointer;
                    font-size: var(--mynah-font-size-xsmall);
                    max-width: 100%;
                    overflow: hidden;
                    display: inline-flex;
                    gap: var(--mynah-sizing-2);
                    align-items: center;
                    user-select: none;
                    * {
                        pointer-events: none;
                    }
                    &-disabled {
                        opacity: 0.5 !important;
                        cursor: default !important;
                    }
                    &:not(:hover) {
                        opacity: 0.75;
                    }
                    &-status {
                        &-success {
                            color: var(--mynah-color-status-success);
                        }
                        &-error {
                            color: var(--mynah-color-status-error);
                        }
                        &-warning {
                            color: var(--mynah-color-status-warning);
                        }
                        &-info {
                            color: var(--mynah-color-status-info);
                        }
                    }
                }
            }
        }

        .mynah-chat-item-card-related-content {
            display: flex;
            flex-flow: column nowrap;
            gap: var(--mynah-sizing-2);
            overflow: hidden;
            position: relative;
            > .mynah-chat-item-card-related-content-item {
                max-width: 100%;
                > .mynah-card {
                    padding: 0;
                }
                .amzn-mynah-search-result-highlight {
                    background-color: inherit;
                    color: inherit;
                }
            }
            &:not(.expanded) {
                > .mynah-chat-item-card-related-content-item {
                    $maxItems: 1;
                    $selector: "&";
                    @for $i from 1 through $maxItems {
                        $selector: #{$selector} + ":not(:nth-of-type(" + #{$i} + "))";
                    }
                    #{$selector} {
                        display: none;
                    }
                    &:nth-of-type(#{$maxItems}) {
                        margin-bottom: calc(-1 * var(--mynah-sizing-4));
                        pointer-events: none;
                        @include list-fader-bottom(var(--mynah-sizing-12));
                        -webkit-mask-image: linear-gradient(to top, transparent var(--mynah-sizing-1), black 70%);
                    }
                    &:nth-of-type(#{$maxItems + 1}) {
                        & ~ .mynah-chat-item-card-related-content-show-more {
                            display: flex;
                        }
                    }
                }
            }

            > .mynah-chat-item-card-related-content-show-more {
                display: none;
                max-width: 80%;
                z-index: 10000;
                margin-block-start: 0;
                margin-block-end: 0;
                align-self: center;
                height: var(--mynah-sizing-8);
                filter: none;
                > span,
                > i {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: var(--mynah-font-size-xsmall);
                }
            }
        }
        &.mynah-chat-item-system-prompt,
        &.mynah-chat-item-prompt {
            align-self: flex-end;
            > .mynah-chat-item-card-icon-wrapper {
                align-self: flex-end;
            }
            .mynah-chat-item-followup-question,
            .mynah-chat-item-card-related-content {
                align-items: flex-end;
            }

            .mynah-syntax-highlighter {
                > .mynah-syntax-highlighter-copy-buttons {
                    display: none;
                }
            }

            .mynah-chat-item-card-related-content > .mynah-card,
            > .mynah-card {
                box-shadow: 0px 0px 5px -5px var(--mynah-color-button);
                padding: var(--mynah-sizing-4);
                background-color: var(--mynah-color-button);
                border-bottom-right-radius: 0;
                border: none;
                &,
                > .mynah-card-body {
                    color: var(--mynah-color-button-reverse);
                }
            }
        }
        &.mynah-chat-item-system-prompt {
            > .mynah-card {
                background-color: var(--mynah-color-status-warning);
            }
        }

        &.mynah-chat-item-empty:empty {
            display: none;
        }
        &.mynah-chat-item-answer-stream.mynah-chat-item-empty.stream-ended {
            display: none;
        }
        &.mynah-chat-item-answer,
        &.mynah-chat-item-answer-stream {
            > .mynah-card {
                border-bottom-left-radius: 0;
                max-height: 100%;
                flex: 1;
            }
        }
        &.mynah-chat-item-ai-prompt,
        &.mynah-chat-item-answer,
        &.mynah-chat-item-answer-stream {
            > .mynah-chat-item-card-icon-wrapper {
                align-self: flex-start;
            }
            > .mynah-chat-item-card-related-content {
                > .mynah-chat-item-card-related-content-item > .mynah-card-compact {
                    opacity: 1;
                    > .mynah-source-link-header {
                        opacity: 1;
                    }
                }
            }
        }
    }
}

&.loading {
    > .mynah-chat-items-container {
        padding-bottom: var(--mynah-sizing-14);
        > .mynah-chat-item-card.mynah-chat-item-answer-stream {
            &:first-child {
                > .mynah-card {
                    min-width: 100px;
                    min-height: var(--mynah-sizing-14);
                    > .mynah-card-votes-wrapper {
                        display: none;
                    }
                }
                &.mynah-chat-item-empty {
                    .mynah-chat-items-spinner {
                        display: inline-flex;
                        > span {
                            // Spinner's size should remain the same
                            flex: 0 0 auto;
                        }
                    }
                }
                &:not(.mynah-chat-item-empty) {
                    @import "chat-items-bottom-animator";
                }
            }
        }
    }
}
`,`&:before {
    content: "";
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    border-bottom-right-radius: var(--mynah-card-radius);
    bottom: 0; // calc(var(--mynah-sizing-6) + var(--mynah-border-width));
    left: var(--mynah-border-width);
    right: var(--mynah-border-width);
    width: auto;
    height: var(--mynah-sizing-2);
    box-sizing: border-box;
    z-index: 10;
    background-image: linear-gradient(
        90deg,
        var(--mynah-color-button) 0%,
        rgba(255, 255, 255, 0) 25%,
        rgba(255, 255, 255, 0) 50%,
        var(--mynah-color-button) 100%
    );
    background-position: 0% bottom;
    background-size: 200% var(--mynah-sizing-half);
    background-repeat: repeat-x;
    animation: horizontal-roll 1250ms linear infinite both;
}`,`@mixin background-shadow {
    overflow: visible;
    &:before {
        content: "";
        background-color: transparent;
        transition: var(--mynah-short-transition-rev);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        box-shadow: var(--mynah-shadow-card);
        pointer-events: none;
        filter: brightness(50%) saturate(250%) contrast(250%);
        opacity: 0.4;
    }
}

@mixin lighten-darken {
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: brightness(var(--mynah-color-context-filter));
    }
}

@mixin list-fader {
    position: relative;
    $listFader: linear-gradient(
        to bottom,
        transparent 0%,
        black var(--mynah-sizing-6),
        black calc(100% - var(--mynah-sizing-6)),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}

@mixin list-fader-bottom($height: var(--mynah-sizing-6)) {
    position: relative;
    $listFader: linear-gradient(
        to bottom,
        black 30%,
        black calc(100% - $height),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}
@mixin list-fader-right($height: var(--mynah-sizing-6)) {
    position: relative;
    $listFader: linear-gradient(
        to right,
        black 30%,
        black calc(100% - $height),
        transparent 100%
    );
    -webkit-mask-image: $listFader;
    -webkit-mask-size: 100% 100%;
    mask-image: $listFader;
    mask-size: 100% 100%;
}

@mixin context-pill-group-background {
    &:after,
    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        border-radius: calc(var(--mynah-button-radius) * 3 / 2);
        border: var(--mynah-border-width) solid transparent;
    }
    &:after {
        background-color: var(--mynah-card-bg);
        z-index: 1;
    }
}

@mixin chatMode {
    &[mode="chat"] {
        @content;
    }
}
`,`&.loading {
    > .mynah-chat-overflowing-intermediate-block {
        display: flex;
        flex-flow: column nowrap;
        max-height: 0;
        overflow: visible;
        justify-content: flex-end;
        > .mynah-chat-stop-chat-response-button {
            display: inline-flex;
        }
    }
}
> .mynah-chat-overflowing-intermediate-block {
    display: flex;
    flex-flow: column nowrap;
    max-height: 0;
    overflow: visible;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid var(--mynah-color-border-default);
    &.hidden * {
        display: none;
    }
    > .mynah-chat-stop-chat-response-button {
        margin-bottom: var(--mynah-sizing-2);
        display: none;
        min-height: var(--mynah-sizing-8);
        background-color: var(--mynah-card-bg);
        padding-left: var(--mynah-sizing-2);
        &:active {
            box-shadow: none;
            filter: none;
        }
        * {
            color: var(--mynah-color-text-weak);
            font-size: var(--mynah-font-size-xsmall);
        }
    }
}
`,`> .mynah-chat-prompt-wrapper {
    display: block;
    padding: var(--mynah-sizing-4);

    > .mynah-chat-prompt {
        display: flex;
        flex-flow: column nowrap;
        overflow: hidden;
        box-sizing: border-box;
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        background-color: var(--mynah-card-bg);
        border-radius: var(--mynah-card-radius);
        padding: var(--mynah-sizing-4);

        > .mynah-chat-prompt-input-wrapper {
            display: flex;
            flex-flow: row nowrap;
            overflow: hidden;
            box-sizing: border-box;
            gap: var(--mynah-sizing-1);
            align-items: flex-start;
            position: relative;
            color: var(--mynah-color-text-weak);
            > .mynah-chat-prompt-input-command-wrapper {
                align-self: flex-start;
                display: inline-flex;
                align-items: center;
                position: relative;
                gap: var(--mynah-sizing-1);
                box-sizing: border-box;
                &.hidden {
                    display: none;
                }
                > .mynah-chat-prompt-input-command-text {
                    user-select: none;
                    cursor: pointer;
                    font-family: var(--mynah-font-family);
                    font-size: var(--mynah-font-size-large);
                    color: var(--mynah-color-text-input);
                    font-weight: bold;
                }
            }
            > .mynah-chat-prompt-input-inner-wrapper {
                display: block;
                width: 100%;
                position: relative;
                align-self: center;
                > .mynah-chat-prompt-input {
                    font-family: var(--mynah-font-family);
                    border: none;
                    resize: none;
                    background-color: rgba(0, 0, 0, 0);
                    font-size: var(--mynah-font-size-large);
                    color: var(--mynah-color-text-input);
                    outline: none;
                    width: 100%;
                    max-height: 20vh;
                    min-height: 1.5rem;
                    &::placeholder {
                        color: var(--mynah-color-text-weak);
                    }
                    &:not(.mynah-chat-prompt-input-sizer) {
                        position: absolute;
                        height: 100%;
                        top: 0;
                        left: 0;
                        padding: 0;
                    }
                }
                > .mynah-chat-prompt-input-sizer {
                    display: block;
                    width: 100%;
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                    overflow: hidden;
                    white-space: pre-wrap;
                    word-break: break-word;
                }
                & ~ .mynah-chat-prompt-button {
                    background-color: transparent;
                    width: auto;
                    min-width: 0;
                    height: auto;
                    padding-top: 1px;
                    i {
                        font-size: calc(2 * var(--mynah-font-size-xsmall));
                        color: var(--mynah-color-button);
                        height: var(--mynah-sizing-6);
                        padding-left: 0;
                    }
                }
                &.no-text ~ .mynah-chat-prompt-button:not([disabled]),
                & ~ .mynah-chat-prompt-button[disabled] {
                    pointer-events: none;
                    opacity: 0.25;
                    i {
                        color: var(--mynah-color-text-weak);
                    }
                }
            }
        }
        > .mynah-chat-prompt-attachment-wrapper {
            &:empty {
                display: none;
            }
            > .mynah-chat-attachment-item {
                position: relative;
                display: inline-block;
                max-width: 250px;
                cursor: pointer;
                &:after {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: var(--mynah-card-radius);
                    opacity: 0;
                    transition: var(--mynah-short-transition-rev);
                    z-index: 8000;
                    background-color: var(--mynah-color-alternate);
                }
                > .mynah-chat-attachment-delete-icon {
                    color: var(--mynah-color-alternate-reverse);
                    opacity: 0;
                    transition: var(--mynah-short-transition-rev);
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 30px;
                    height: 30px;
                    margin-left: -15px;
                    margin-top: -15px;
                    z-index: 9000;
                    > i {
                        width: 30px;
                        height: 30px;
                    }
                }
                &:hover {
                    &:after {
                        opacity: 0.75;
                    }
                    > .mynah-chat-attachment-delete-icon {
                        opacity: 1;
                    }
                }
                > .mynah-card {
                    pointer-events: none !important;
                    * {
                        pointer-events: none !important;
                    }
                    > .mynah-card-body {
                        display: none;
                    }
                }
            }
        }
    }
    &.input-has-focus > .mynah-chat-prompt {
        border: var(--mynah-border-width) solid var(--mynah-color-button);
    }

    > .mynah-chat-prompt-chars-indicator {
        width: 100%;
        font-size: var(--mynah-font-size-xsmall);
        padding-top: var(--mynah-sizing-2);
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-style: italic;
    }
}

> .mynah-chat-prompt-input-info {
    display: flex;
    flex-flow: row nowrap;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 var(--mynah-sizing-4) var(--mynah-sizing-4) var(--mynah-sizing-4);
    margin-top: calc(-1 * var(--mynah-sizing-2));
    &,
    & * {
        font-size: var(--mynah-font-size-xsmall);
    }
    &:empty {
        display: none;
    }
    > * {
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-top: 0;
        margin-bottom: 0;
    }
}
`,`.mynah-chat-command-selector {
    display: flex;
    box-sizing: border-box;
    background-color: var(--mynah-card-bg);
    border-radius: var(--mynah-card-radius);
    width: 100%;
    pointer-events: all;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: flex-start;
    > .mynah-chat-command-selector-group {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        flex-flow: column nowrap;
        align-items: stretch;
        justify-content: flex-start;
        padding: var(--mynah-sizing-2);
        > .mynah-chat-command-selector-group-title {
            margin: 0;
            color: var(--mynah-color-text-weak);
            opacity: 0.75;
            padding: var(--mynah-sizing-2) var(--mynah-sizing-3);
        }

        &:not(:last-child) {
            border-bottom: 1px solid var(--mynah-color-border-default);
        }

        > .mynah-chat-command-selector-command {
            display: flex;
            box-sizing: border-box;
            width: 100%;
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-content: flex-start;
            overflow: hidden;
            cursor: pointer;
            padding: var(--mynah-sizing-2) var(--mynah-sizing-3);
            color: var(--mynah-color-text-default);
            border-radius: var(--mynah-card-radius);
            transition: var(--mynah-short-transition-rev);
            gap: var(--mynah-sizing-1);
            &:hover,
            &.target-command {
                background-color: var(--mynah-color-button);
                &,
                & * {
                    color: var(--mynah-color-button-reverse);
                }
            }
            > .mynah-chat-command-selector-command-name {
                font-family: var(--mynah-font-family);
                font-size: var(--mynah-font-size-large);
                font-weight: bold;
                flex: 0 1 0%;
            }
            > .mynah-chat-command-selector-command-description {
                font-size: var(--mynah-font-size-small);
                opacity: 0.75;
                flex: 1 0 100%;
            }
        }
    }
}
`,`.mynah-chat-item-tree-view-wrapper {
    margin: 0;
    margin-block-end: 0 !important;
    margin-block-start: 0 !important;
    > .mynah-chat-item-tree-view-wrapper-container {
        background-color: var(--mynah-card-bg);
        color: var(--mynah-color-text-default);
        margin-block-start: 0 !important;
        margin-block-end: 0 !important;
        position: relative;
        border-radius: var(--mynah-card-radius);
        border: var(--mynah-border-width) solid var(--mynah-color-border-default);
        > .mynah-chat-item-tree-view-wrapper-title {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            padding: var(--mynah-sizing-3);
            gap: var(--mynah-sizing-3);
            border-bottom: var(--mynah-border-width) solid var(--mynah-color-border-default);
            > h4 {
                margin: 0;
            }

            &:before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: var(--mynah-color-border-default);
                opacity: 0.25;
                pointer-events: none;
            }
        }
        > .mynah-chat-item-tree-view {
            padding: var(--mynah-sizing-3);
            overflow: hidden;
            box-sizing: border-box;
            width: 100%;
            overflow-y: hidden;
            overflow-x: auto;
        }
    }
}

.mynah-chat-item-tree-view-wrapper-label {
    border-top-left-radius: var(--mynah-card-radius);
    border-top-right-radius: var(--mynah-card-radius);
    background-color: var(--mynah-color-alternate);
    margin-bottom: 0px;
    padding: var(--mynah-sizing-4);
}

.mynah-chat-item-tree-view-wrapper-feedback-label {
    padding-left: var(--mynah-sizing-4);
}

.mynah-chat-item-tree-view-wrapper-feedback-div {
    float: right;

    button:first-child {
        margin-right: var(--mynah-sizing-2);
    }
}

.mynah-chat-item-tree-view-license {
    &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: var(--mynah-color-button);
        opacity: 0.07;
        pointer-events: none;
    }

    color: var(--mynah-color-text-weak);

    ul {
        margin: 0;
        padding-left: var(--mynah-sizing-8);
        > li {
            &:not(:first-child) {
                margin-top: var(--mynah-sizing-2);
            }
            .mynah-card-body p {
                margin: 0;
            }
        }
    }

    .mynah-chat-item-tree-view-license-dropdown-button > span {
        max-width: unset;
    }
}
`,`.outer-container {
  display: flex;
  &:not(:empty) {
    margin-top: var(--mynah-sizing-3);
  }
}

.snippet-card-container.vertical-overflow {
  & pre {
    // Show fading effect at the bottom when overflowing
    @include list-fader-bottom(var(--mynah-sizing-16));
  }
}

.snippet-card-container {
  box-sizing: border-box;
  max-width: 100%;
  max-height: calc(2 * var(--mynah-sizing-12));
  > .mynah-button {
    position: absolute;
    background-color: var(--mynah-card-bg) !important;
    width: var(--mynah-sizing-7) !important;
    min-width: var(--mynah-sizing-7) !important;
    max-width: var(--mynah-sizing-7) !important;
    height: var(--mynah-sizing-7) !important;
    border-radius: 100%;
    right: calc(-1 * var(--mynah-sizing-2));
    top: calc(-1 * var(--mynah-sizing-2));
    border: var(--mynah-border-width) solid var(--mynah-color-border-default);
    opacity: 1 !important;
    filter: brightness(0.95);
  }
  &:not(:hover) {
    > .mynah-button {
      display: none;
    }
  }
  > .mynah-card-body > .mynah-syntax-highlighter {
    border: none;
    & pre {
      text-overflow: ellipsis;
    }
  }
}

.mynah-prompt-input-snippet-attachment-overlay {
  max-width: 90vw;
  max-height: 70vh;
  > .mynah-card-body {
    > .mynah-syntax-highlighter {
      max-height: calc(70vh - var(--mynah-sizing-12)) !important;
    }
  }
}
.snippet-card-container,
.mynah-prompt-input-snippet-attachment-overlay {
  position: relative;
  overflow: visible;
  width: 100%;
  box-sizing: border-box;
  > .mynah-card-body {
    max-height: 100%;
    > .mynah-syntax-highlighter {
      user-select: none;
      pointer-events: none;
      margin: 0;
      max-height: 100%;
      overflow: hidden;
      > .mynah-syntax-highlighter-copy-buttons {
        display: none;
      }
    }
  }
  & pre {
    text-overflow: ellipsis;
  }
}
`,`.mynah-collapsible-content-wrapper {
    display: block;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    position: relative;
    > .mynah-collapsible-content-checkbox {
        display: none;
        & + .mynah-collapsible-content-label {
            box-sizing: border-box;
            display: flex;
            flex-flow: column nowrap;
            overflow: hidden;
            align-items: flex-start;
            justify-content: stretch;
            padding: var(--mynah-sizing-2);
            gap: var(--mynah-sizing-2);
            > .mynah-collapsible-content-label-title-wrapper {
                gap: var(--mynah-sizing-2);
                display: flex;
                flex-flow: row nowrap;
                box-sizing: border-box;
                width: 100%;
                overflow: hidden;
                justify-content: flex-start;
                align-items: flex-start;
                pointer-events: all;
                cursor: pointer;
                user-select: none;
                > .mynah-collapsible-content-label-title-text {
                    flex: 1;
                    overflow: hidden;
                }
            }
            > .mynah-collapsible-content-label-content-wrapper {
                overflow: hidden;
                box-sizing: border-box;
                width: 100%;
            }
        }

        &:checked + .mynah-collapsible-content-label {
            > .mynah-collapsible-content-label-content-wrapper {
                display: none;
            }
        }
    }
}
`,`@import "mixins";
@import "variables";
@import "animations";
@import "dark";
@import "favicons";

// Components
@import "./components/main-container";
@import "./components/button";
@import "./components/toggle";
@import "./components/icon";
@import "./components/nav-tabs";
@import "./components/card/card";
@import "./components/feedback-form";
@import "./components/overlay";
@import "./components/notification";
@import "./components/syntax-highlighter";
@import "./components/chat/chat-wrapper";
@import "./components/collapsible-content";

body,
html {
    background-color: var(--mynah-color-bg);
    color: var(--mynah-color-text-default);
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 600;
}

::-webkit-scrollbar {
    width: 2px;
    height: 2px;
    opacity: 0.25;
    &:horizontal {
        width: 0px;
        height: 0px;
    }
}

*:focus {
    outline: none;
}
`],sourceRoot:""}]);const y=i},3645:r=>{"use strict";r.exports=function(t){var e=[];return e.toString=function(){return this.map(function(a){var p="",c=a[5]!==void 0;return a[4]&&(p+="@supports (".concat(a[4],") {")),a[2]&&(p+="@media ".concat(a[2]," {")),c&&(p+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),p+=t(a),c&&(p+="}"),a[2]&&(p+="}"),a[4]&&(p+="}"),p}).join("")},e.i=function(a,p,c,i,y){typeof a=="string"&&(a=[[null,a,void 0]]);var n={};if(c)for(var o=0;o<this.length;o++){var d=this[o][0];d!=null&&(n[d]=!0)}for(var u=0;u<a.length;u++){var C=[].concat(a[u]);c&&n[C[0]]||(y!==void 0&&(C[5]===void 0||(C[1]="@layer".concat(C[5].length>0?" ".concat(C[5]):""," {").concat(C[1],"}")),C[5]=y),p&&(C[2]&&(C[1]="@media ".concat(C[2]," {").concat(C[1],"}")),C[2]=p),i&&(C[4]?(C[1]="@supports (".concat(C[4],") {").concat(C[1],"}"),C[4]=i):C[4]="".concat(i)),e.push(C))}},e}},7537:r=>{"use strict";r.exports=function(t){var e=t[1],a=t[3];if(!a)return e;if(typeof btoa=="function"){var p=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p),i="/*# ".concat(c," */"),y=a.sources.map(function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")});return[e].concat(y).concat([i]).join(`
`)}return[e].join(`
`)}},5573:r=>{"use strict";var t=/["'&<>]/;r.exports=function(e){var a,p=""+e,c=t.exec(p);if(!c)return p;var i="",y=0,n=0;for(y=c.index;y<p.length;y++){switch(p.charCodeAt(y)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 39:a="&#39;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}n!==y&&(i+=p.substring(n,y)),n=y+1,i+=a}return n!==y?i+p.substring(n,y):i}},7013:()=>{(function(r){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",e={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:e,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};r.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:e}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},e.inside=r.languages.bash;for(var p=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],c=a.variable[1].inside,i=0;i<p.length;i++)c[p[i]]=r.languages.bash[p[i]];r.languages.sh=r.languages.bash,r.languages.shell=r.languages.bash})(Prism)},6551:()=>{Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}}),Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete Prism.languages.c.boolean},8080:()=>{Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}},3229:()=>{(function(r){function t(ie,le){return ie.replace(/<<(\d+)>>/g,function(q,we){return"(?:"+le[+we]+")"})}function e(ie,le,q){return RegExp(t(ie,le),q||"")}function a(ie,le){for(var q=0;q<le;q++)ie=ie.replace(/<<self>>/g,function(){return"(?:"+ie+")"});return ie.replace(/<<self>>/g,"[^\\s\\S]")}var p="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",c="class enum interface record struct",i="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",y="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function n(ie){return"\\b(?:"+ie.trim().replace(/ /g,"|")+")\\b"}var o=n(c),d=RegExp(n(p+" "+c+" "+i+" "+y)),u=n(c+" "+i+" "+y),C=n(p+" "+c+" "+y),D=a("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),v=a("\\((?:[^()]|<<self>>)*\\)",2),m="@?\\b[A-Za-z_]\\w*\\b",I=t("<<0>>(?:\\s*<<1>>)?",[m,D]),E=t("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[u,I]),x="\\[\\s*(?:,\\s*)*\\]",M=t("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[E,x]),k=t("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[D,v,x]),j=t("\\(<<0>>+(?:,<<0>>+)+\\)",[k]),L=t("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[j,E,x]),U={keyword:d,punctuation:/[<>()?,.:[\]]/},B=`'(?:[^\r
'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'`,W=`"(?:\\\\.|[^\\\\"\r
])*"`;r.languages.csharp=r.languages.extend("clike",{string:[{pattern:e("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:e("(^|[^@$\\\\])<<0>>",[W]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[E]),lookbehind:!0,inside:U},{pattern:e("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[m,L]),lookbehind:!0,inside:U},{pattern:e("(\\busing\\s+)<<0>>(?=\\s*=)",[m]),lookbehind:!0},{pattern:e("(\\b<<0>>\\s+)<<1>>",[o,I]),lookbehind:!0,inside:U},{pattern:e("(\\bcatch\\s*\\(\\s*)<<0>>",[E]),lookbehind:!0,inside:U},{pattern:e("(\\bwhere\\s+)<<0>>",[m]),lookbehind:!0},{pattern:e("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[M]),lookbehind:!0,inside:U},{pattern:e("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[L,C,m]),inside:U}],keyword:d,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),r.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),r.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e("([(,]\\s*)<<0>>(?=\\s*:)",[m]),lookbehind:!0,alias:"punctuation"}}),r.languages.insertBefore("csharp","class-name",{namespace:{pattern:e("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[m]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[v]),lookbehind:!0,alias:"class-name",inside:U},"return-type":{pattern:e("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[L,E]),inside:U,alias:"class-name"},"constructor-invocation":{pattern:e("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[L]),lookbehind:!0,inside:U,alias:"class-name"},"generic-method":{pattern:e("<<0>>\\s*<<1>>(?=\\s*\\()",[m,D]),inside:{function:e("^<<0>>",[m]),generic:{pattern:RegExp(D),alias:"class-name",inside:U}}},"type-list":{pattern:e("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[o,I,m,L,d.source,v,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:e("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[I,v]),lookbehind:!0,greedy:!0,inside:r.languages.csharp},keyword:d,"class-name":{pattern:RegExp(L),greedy:!0,inside:U},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var Q=W+"|"+B,z=t(`/(?![*/])|//[^\r
]*[\r
]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>`,[Q]),O=a(t(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[z]),2),ne="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",f=t("<<0>>(?:\\s*\\(<<1>>*\\))?",[E,O]);r.languages.insertBefore("csharp","class-name",{attribute:{pattern:e("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[ne,f]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e("^<<0>>(?=\\s*:)",[ne]),alias:"keyword"},"attribute-arguments":{pattern:e("\\(<<0>>*\\)",[O]),inside:r.languages.csharp},"class-name":{pattern:RegExp(E),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var A=`:[^}\r
]+`,w=a(t(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[z]),2),S=t("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[w,A]),H=a(t(`[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`,[Q]),2),te=t("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[H,A]);function ce(ie,le){return{interpolation:{pattern:e("((?:^|[^{])(?:\\{\\{)*)<<0>>",[ie]),lookbehind:!0,inside:{"format-string":{pattern:e("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[le,A]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:r.languages.csharp}}},string:/[\s\S]+/}}r.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[S]),lookbehind:!0,greedy:!0,inside:ce(S,w)},{pattern:e('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[te]),lookbehind:!0,greedy:!0,inside:ce(te,H)}],char:{pattern:RegExp(B),greedy:!0}}),r.languages.dotnet=r.languages.cs=r.languages.csharp})(Prism)},2247:()=>{(function(r){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+t.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var e=r.languages.markup;e&&(e.tag.addInlined("style","css"),e.tag.addAttribute("style","css"))})(Prism)},7706:()=>{var r,t,e,a;r=Prism,t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,e="(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",a={pattern:RegExp("(^|[^\\w.])"+e+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}},r.languages.java=r.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[a,{pattern:RegExp("(^|[^\\w.])"+e+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"),lookbehind:!0,inside:a.inside},{pattern:RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)"+e+"[A-Z]\\w*\\b"),lookbehind:!0,inside:a.inside}],keyword:t,function:[r.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),r.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),r.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":a,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp("(\\bimport\\s+)"+e+"(?:[A-Z]\\w*|\\*)(?=\\s*;)"),lookbehind:!0,inside:{namespace:a.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp("(\\bimport\\s+static\\s+)"+e+"(?:\\w+|\\*)(?=\\s*;)"),lookbehind:!0,alias:"static",inside:{namespace:a.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})},235:()=>{Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript},8674:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},1233:()=>{(function(r){var t=r.util.clone(r.languages.javascript),e="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function a(i,y){return i=i.replace(/<S>/g,function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"}).replace(/<BRACES>/g,function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"}).replace(/<SPREAD>/g,function(){return e}),RegExp(i,y)}e=a(e).source,r.languages.jsx=r.languages.extend("markup",t),r.languages.jsx.tag.pattern=a(`</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>`),r.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,r.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,r.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,r.languages.jsx.tag.inside.comment=t.comment,r.languages.insertBefore("inside","attr-name",{spread:{pattern:a("<SPREAD>"),inside:r.languages.jsx}},r.languages.jsx.tag),r.languages.insertBefore("inside","special-attr",{script:{pattern:a("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:r.languages.jsx}}},r.languages.jsx.tag);var p=function(i){return i?typeof i=="string"?i:typeof i.content=="string"?i.content:i.content.map(p).join(""):""},c=function(i){for(var y=[],n=0;n<i.length;n++){var o=i[n],d=!1;if(typeof o!="string"&&(o.type==="tag"&&o.content[0]&&o.content[0].type==="tag"?o.content[0].content[0].content==="</"?y.length>0&&y[y.length-1].tagName===p(o.content[0].content[1])&&y.pop():o.content[o.content.length-1].content==="/>"||y.push({tagName:p(o.content[0].content[1]),openedBraces:0}):y.length>0&&o.type==="punctuation"&&o.content==="{"?y[y.length-1].openedBraces++:y.length>0&&y[y.length-1].openedBraces>0&&o.type==="punctuation"&&o.content==="}"?y[y.length-1].openedBraces--:d=!0),(d||typeof o=="string")&&y.length>0&&y[y.length-1].openedBraces===0){var u=p(o);n<i.length-1&&(typeof i[n+1]=="string"||i[n+1].type==="plain-text")&&(u+=p(i[n+1]),i.splice(n+1,1)),n>0&&(typeof i[n-1]=="string"||i[n-1].type==="plain-text")&&(u=p(i[n-1])+u,i.splice(n-1,1),n--),i[n]=new r.Token("plain-text",u,null,u)}o.content&&typeof o.content!="string"&&c(o.content)}};r.hooks.add("after-tokenize",function(i){i.language!=="jsx"&&i.language!=="tsx"||c(i.tokens)})})(Prism)},4006:()=>{Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}})},3047:()=>{Prism.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/}},47:()=>{(function(r){function t(n){return n=n.replace(/<inner>/g,function(){return`(?:\\\\.|[^\\\\
\r]|(?:
|\r
?)(?![\r
]))`}),RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:"+n+")")}var e="(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",a=`\\|?__(?:\\|__)+\\|?(?:(?:
|\r
?)|(?![^]))`.replace(/__/g,function(){return e}),p=`\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?(?:
|\r
?)`;r.languages.markdown=r.languages.extend("markup",{}),r.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:r.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+a+p+"(?:"+a+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+a+p+")(?:"+a+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(e),inside:r.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+a+")"+p+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+a+"$"),inside:{"table-header":{pattern:RegExp(e),alias:"important",inside:r.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:t("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:t("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:t("(~~?)(?:(?!~)<inner>)+\\2"),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:t('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[	 ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ 	]?\\[(?:(?!\\])<inner>)+\\])'),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(n){["url","bold","italic","strike","code-snippet"].forEach(function(o){n!==o&&(r.languages.markdown[n].inside.content.inside[o]=r.languages.markdown[o])})}),r.hooks.add("after-tokenize",function(n){n.language!=="markdown"&&n.language!=="md"||function o(d){if(d&&typeof d!="string")for(var u=0,C=d.length;u<C;u++){var D=d[u];if(D.type==="code"){var v=D.content[1],m=D.content[3];if(v&&m&&v.type==="code-language"&&m.type==="code-block"&&typeof v.content=="string"){var I=v.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),E="language-"+(I=(/[a-z][\w-]*/i.exec(I)||[""])[0].toLowerCase());m.alias?typeof m.alias=="string"?m.alias=[m.alias,E]:m.alias.push(E):m.alias=[E]}}else o(D.content)}}(n.tokens)}),r.hooks.add("wrap",function(n){if(n.type==="code-block"){for(var o="",d=0,u=n.classes.length;d<u;d++){var C=n.classes[d],D=/language-(.+)/.exec(C);if(D){o=D[1];break}}var v=r.languages[o];if(v)n.content=r.highlight(n.content.replace(c,"").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(I,E){var x;return(E=E.toLowerCase())[0]==="#"?(x=E[1]==="x"?parseInt(E.slice(2),16):Number(E.slice(1)),y(x)):i[E]||I}),v,o);else if(o&&o!=="none"&&r.plugins.autoloader){var m="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random());n.attributes.id=m,r.plugins.autoloader.loadLanguages(o,function(){var I=document.getElementById(m);I&&(I.innerHTML=r.highlight(I.textContent,r.languages[o],o))})}}});var c=RegExp(r.languages.markup.tag.pattern.source,"gi"),i={amp:"&",lt:"<",gt:">",quot:'"'},y=String.fromCodePoint||String.fromCharCode;r.languages.md=r.languages.markdown})(Prism)},4060:()=>{Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(r,t){var e={};e["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},e.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:e}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var p={};p[r]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(r,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+r+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml},5584:()=>{var r,t;r=Prism,t="(?:"+["$eq","$gt","$gte","$in","$lt","$lte","$ne","$nin","$and","$not","$nor","$or","$exists","$type","$expr","$jsonSchema","$mod","$regex","$text","$where","$geoIntersects","$geoWithin","$near","$nearSphere","$all","$elemMatch","$size","$bitsAllClear","$bitsAllSet","$bitsAnyClear","$bitsAnySet","$comment","$elemMatch","$meta","$slice","$currentDate","$inc","$min","$max","$mul","$rename","$set","$setOnInsert","$unset","$addToSet","$pop","$pull","$push","$pullAll","$each","$position","$slice","$sort","$bit","$addFields","$bucket","$bucketAuto","$collStats","$count","$currentOp","$facet","$geoNear","$graphLookup","$group","$indexStats","$limit","$listLocalSessions","$listSessions","$lookup","$match","$merge","$out","$planCacheStats","$project","$redact","$replaceRoot","$replaceWith","$sample","$set","$skip","$sort","$sortByCount","$unionWith","$unset","$unwind","$setWindowFields","$abs","$accumulator","$acos","$acosh","$add","$addToSet","$allElementsTrue","$and","$anyElementTrue","$arrayElemAt","$arrayToObject","$asin","$asinh","$atan","$atan2","$atanh","$avg","$binarySize","$bsonSize","$ceil","$cmp","$concat","$concatArrays","$cond","$convert","$cos","$dateFromParts","$dateToParts","$dateFromString","$dateToString","$dayOfMonth","$dayOfWeek","$dayOfYear","$degreesToRadians","$divide","$eq","$exp","$filter","$first","$floor","$function","$gt","$gte","$hour","$ifNull","$in","$indexOfArray","$indexOfBytes","$indexOfCP","$isArray","$isNumber","$isoDayOfWeek","$isoWeek","$isoWeekYear","$last","$last","$let","$literal","$ln","$log","$log10","$lt","$lte","$ltrim","$map","$max","$mergeObjects","$meta","$min","$millisecond","$minute","$mod","$month","$multiply","$ne","$not","$objectToArray","$or","$pow","$push","$radiansToDegrees","$range","$reduce","$regexFind","$regexFindAll","$regexMatch","$replaceOne","$replaceAll","$reverseArray","$round","$rtrim","$second","$setDifference","$setEquals","$setIntersection","$setIsSubset","$setUnion","$size","$sin","$slice","$split","$sqrt","$stdDevPop","$stdDevSamp","$strcasecmp","$strLenBytes","$strLenCP","$substr","$substrBytes","$substrCP","$subtract","$sum","$switch","$tan","$toBool","$toDate","$toDecimal","$toDouble","$toInt","$toLong","$toObjectId","$toString","$toLower","$toUpper","$trim","$trunc","$type","$week","$year","$zip","$count","$dateAdd","$dateDiff","$dateSubtract","$dateTrunc","$getField","$rand","$sampleRate","$setField","$unsetField","$comment","$explain","$hint","$max","$maxTimeMS","$min","$orderby","$query","$returnKey","$showDiskLoc","$natural"].map(function(e){return e.replace("$","\\$")}).join("|")+")\\b",r.languages.mongodb=r.languages.extend("javascript",{}),r.languages.insertBefore("mongodb","string",{property:{pattern:/(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,greedy:!0,inside:{keyword:RegExp(`^(['"])?`+t+"(?:\\1)?$")}}}),r.languages.mongodb.string.inside={url:{pattern:/https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,greedy:!0},entity:{pattern:/\b(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d\d?|2[0-4]\d|25[0-5])\b/,greedy:!0}},r.languages.insertBefore("mongodb","constant",{builtin:{pattern:RegExp("\\b(?:"+["ObjectId","Code","BinData","DBRef","Timestamp","NumberLong","NumberDecimal","MaxKey","MinKey","RegExp","ISODate","UUID"].join("|")+")\\b"),alias:"keyword"}})},1637:()=>{Prism.languages.objectivec=Prism.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete Prism.languages.objectivec["class-name"],Prism.languages.objc=Prism.languages.objectivec},9208:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},4297:()=>{var r,t,e,a,p,c;r=Prism,t={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},a="(?:[^\\\\-]|"+(e=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source+")",p=RegExp(a+"-"+a),c={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"},r.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:p,inside:{escape:e,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":t,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:e}},"special-escape":t,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":c}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:e,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":c}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}},7239:()=>{Prism.languages.scala=Prism.languages.extend("java",{"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/<-|=>|\b(?:abstract|case|catch|class|def|derives|do|else|enum|extends|extension|final|finally|for|forSome|given|if|implicit|import|infix|inline|lazy|match|new|null|object|opaque|open|override|package|private|protected|return|sealed|self|super|this|throw|trait|transparent|try|type|using|val|var|while|with|yield)\b/,number:/\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,builtin:/\b(?:Any|AnyRef|AnyVal|Boolean|Byte|Char|Double|Float|Int|Long|Nothing|Short|String|Unit)\b/,symbol:/'[^\d\s\\]\w*/}),Prism.languages.insertBefore("scala","triple-quoted-string",{"string-interpolation":{pattern:/\b[a-z]\w*(?:"""(?:[^$]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*?"""|"(?:[^$"\r\n]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*")/i,greedy:!0,inside:{id:{pattern:/^\w+/,greedy:!0,alias:"function"},escape:{pattern:/\\\$"|\$[$"]/,greedy:!0,alias:"symbol"},interpolation:{pattern:/\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,greedy:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:Prism.languages.scala}}},string:/[\s\S]+/}}}),delete Prism.languages.scala["class-name"],delete Prism.languages.scala.function,delete Prism.languages.scala.constant},9578:()=>{Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss},4833:()=>{(function(r){var t=r.util.clone(r.languages.typescript);r.languages.tsx=r.languages.extend("jsx",t),delete r.languages.tsx.parameter,delete r.languages.tsx["literal-property"];var e=r.languages.tsx.tag;e.pattern=RegExp("(^|[^\\w$]|(?=</))(?:"+e.pattern.source+")",e.pattern.flags),e.lookbehind=!0})(Prism)},6456:()=>{(function(r){r.languages.typescript=r.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),r.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete r.languages.typescript.parameter,delete r.languages.typescript["literal-property"];var t=r.languages.extend("typescript",{});delete t["class-name"],r.languages.typescript["class-name"].inside=t,r.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),r.languages.ts=r.languages.typescript})(Prism)},9883:()=>{(function(r){function t(c,i){r.languages[c]&&r.languages.insertBefore(c,"comment",{"doc-comment":i})}var e=r.languages.markup.tag,a={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:e}},p={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:e}};t("csharp",a),t("fsharp",a),t("vbnet",p)})(Prism)},6488:()=>{typeof Prism<"u"&&typeof document<"u"&&document.createRange&&(Prism.plugins.KeepMarkup=!0,Prism.hooks.add("before-highlight",function(r){if(r.element.children.length&&Prism.util.isActive(r.element,"keep-markup",!0)){var t=Prism.util.isActive(r.element,"drop-tokens",!1),e=0,a=[];c(r.element),a.length&&(r.keepMarkup=a)}function p(i){if(function(n){return!t||n.nodeName.toLowerCase()!=="span"||!n.classList.contains("token")}(i)){var y={element:i,posOpen:e};a.push(y),c(i),y.posClose=e}else c(i)}function c(i){for(var y=0,n=i.childNodes.length;y<n;y++){var o=i.childNodes[y];o.nodeType===1?p(o):o.nodeType===3&&(e+=o.data.length)}}}),Prism.hooks.add("after-highlight",function(r){if(r.keepMarkup&&r.keepMarkup.length){var t=function(e,a){for(var p=0,c=e.childNodes.length;p<c;p++){var i=e.childNodes[p];if(i.nodeType===1){if(!t(i,a))return!1}else i.nodeType===3&&(!a.nodeStart&&a.pos+i.data.length>a.node.posOpen&&(a.nodeStart=i,a.nodeStartPos=a.node.posOpen-a.pos),a.nodeStart&&a.pos+i.data.length>=a.node.posClose&&(a.nodeEnd=i,a.nodeEndPos=a.node.posClose-a.pos),a.pos+=i.data.length);if(a.nodeStart&&a.nodeEnd){var y=document.createRange();return y.setStart(a.nodeStart,a.nodeStartPos),y.setEnd(a.nodeEnd,a.nodeEndPos),a.node.element.innerHTML="",a.node.element.appendChild(y.extractContents()),y.insertNode(a.node.element),y.detach(),!1}}return!0};r.keepMarkup.forEach(function(e){t(r.element,{node:e,pos:0})}),r.highlightedCode=r.element.innerHTML}}))},8759:()=>{(function(){if(typeof Prism<"u"&&typeof document<"u"){var r="line-numbers",t=/\n(?!$)/g,e=Prism.plugins.lineNumbers={getLine:function(c,i){if(c.tagName==="PRE"&&c.classList.contains(r)){var y=c.querySelector(".line-numbers-rows");if(y){var n=parseInt(c.getAttribute("data-start"),10)||1,o=n+(y.children.length-1);i<n&&(i=n),i>o&&(i=o);var d=i-n;return y.children[d]}}},resize:function(c){p([c])},assumeViewportIndependence:!0},a=void 0;window.addEventListener("resize",function(){e.assumeViewportIndependence&&a===window.innerWidth||(a=window.innerWidth,p(Array.prototype.slice.call(document.querySelectorAll("pre."+r))))}),Prism.hooks.add("complete",function(c){if(c.code){var i=c.element,y=i.parentNode;if(y&&/pre/i.test(y.nodeName)&&!i.querySelector(".line-numbers-rows")&&Prism.util.isActive(i,r)){i.classList.remove(r),y.classList.add(r);var n,o=c.code.match(t),d=o?o.length+1:1,u=new Array(d+1).join("<span></span>");(n=document.createElement("span")).setAttribute("aria-hidden","true"),n.className="line-numbers-rows",n.innerHTML=u,y.hasAttribute("data-start")&&(y.style.counterReset="linenumber "+(parseInt(y.getAttribute("data-start"),10)-1)),c.element.appendChild(n),p([y]),Prism.hooks.run("line-numbers",c)}}}),Prism.hooks.add("line-numbers",function(c){c.plugins=c.plugins||{},c.plugins.lineNumbers=!0})}function p(c){if((c=c.filter(function(y){var n,o=(n=y,n?window.getComputedStyle?getComputedStyle(n):n.currentStyle||null:null)["white-space"];return o==="pre-wrap"||o==="pre-line"})).length!=0){var i=c.map(function(y){var n=y.querySelector("code"),o=y.querySelector(".line-numbers-rows");if(n&&o){var d=y.querySelector(".line-numbers-sizer"),u=n.textContent.split(t);d||((d=document.createElement("span")).className="line-numbers-sizer",n.appendChild(d)),d.innerHTML="0",d.style.display="block";var C=d.getBoundingClientRect().height;return d.innerHTML="",{element:y,lines:u,lineHeights:[],oneLinerHeight:C,sizer:d}}}).filter(Boolean);i.forEach(function(y){var n=y.sizer,o=y.lines,d=y.lineHeights,u=y.oneLinerHeight;d[o.length-1]=void 0,o.forEach(function(C,D){if(C&&C.length>1){var v=n.appendChild(document.createElement("span"));v.style.display="block",v.textContent=C}else d[D]=u})}),i.forEach(function(y){for(var n=y.sizer,o=y.lineHeights,d=0,u=0;u<o.length;u++)o[u]===void 0&&(o[u]=n.children[d++].getBoundingClientRect().height)}),i.forEach(function(y){var n=y.sizer,o=y.element.querySelector(".line-numbers-rows");n.style.display="none",n.innerHTML="",y.lineHeights.forEach(function(d,u){o.children[u].style.height=d+"px"})})}}})()},5660:(r,t,e)=>{var a=function(p){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,y={},n={manual:p.Prism&&p.Prism.manual,disableWorkerMessageHandler:p.Prism&&p.Prism.disableWorkerMessageHandler,util:{encode:function x(M){return M instanceof o?new o(M.type,x(M.content),M.alias):Array.isArray(M)?M.map(x):M.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(x){return Object.prototype.toString.call(x).slice(8,-1)},objId:function(x){return x.__id||Object.defineProperty(x,"__id",{value:++i}),x.__id},clone:function x(M,k){var j,L;switch(k=k||{},n.util.type(M)){case"Object":if(L=n.util.objId(M),k[L])return k[L];for(var U in j={},k[L]=j,M)M.hasOwnProperty(U)&&(j[U]=x(M[U],k));return j;case"Array":return L=n.util.objId(M),k[L]?k[L]:(j=[],k[L]=j,M.forEach(function(B,W){j[W]=x(B,k)}),j);default:return M}},getLanguage:function(x){for(;x;){var M=c.exec(x.className);if(M)return M[1].toLowerCase();x=x.parentElement}return"none"},setLanguage:function(x,M){x.className=x.className.replace(RegExp(c,"gi"),""),x.classList.add("language-"+M)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(j){var x=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(j.stack)||[])[1];if(x){var M=document.getElementsByTagName("script");for(var k in M)if(M[k].src==x)return M[k]}return null}},isActive:function(x,M,k){for(var j="no-"+M;x;){var L=x.classList;if(L.contains(M))return!0;if(L.contains(j))return!1;x=x.parentElement}return!!k}},languages:{plain:y,plaintext:y,text:y,txt:y,extend:function(x,M){var k=n.util.clone(n.languages[x]);for(var j in M)k[j]=M[j];return k},insertBefore:function(x,M,k,j){var L=(j=j||n.languages)[x],U={};for(var B in L)if(L.hasOwnProperty(B)){if(B==M)for(var W in k)k.hasOwnProperty(W)&&(U[W]=k[W]);k.hasOwnProperty(B)||(U[B]=L[B])}var Q=j[x];return j[x]=U,n.languages.DFS(n.languages,function(z,O){O===Q&&z!=x&&(this[z]=U)}),U},DFS:function x(M,k,j,L){L=L||{};var U=n.util.objId;for(var B in M)if(M.hasOwnProperty(B)){k.call(M,B,M[B],j||B);var W=M[B],Q=n.util.type(W);Q!=="Object"||L[U(W)]?Q!=="Array"||L[U(W)]||(L[U(W)]=!0,x(W,k,B,L)):(L[U(W)]=!0,x(W,k,null,L))}}},plugins:{},highlightAll:function(x,M){n.highlightAllUnder(document,x,M)},highlightAllUnder:function(x,M,k){var j={callback:k,container:x,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",j),j.elements=Array.prototype.slice.apply(j.container.querySelectorAll(j.selector)),n.hooks.run("before-all-elements-highlight",j);for(var L,U=0;L=j.elements[U++];)n.highlightElement(L,M===!0,j.callback)},highlightElement:function(x,M,k){var j=n.util.getLanguage(x),L=n.languages[j];n.util.setLanguage(x,j);var U=x.parentElement;U&&U.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(U,j);var B={element:x,language:j,grammar:L,code:x.textContent};function W(z){B.highlightedCode=z,n.hooks.run("before-insert",B),B.element.innerHTML=B.highlightedCode,n.hooks.run("after-highlight",B),n.hooks.run("complete",B),k&&k.call(B.element)}if(n.hooks.run("before-sanity-check",B),(U=B.element.parentElement)&&U.nodeName.toLowerCase()==="pre"&&!U.hasAttribute("tabindex")&&U.setAttribute("tabindex","0"),!B.code)return n.hooks.run("complete",B),void(k&&k.call(B.element));if(n.hooks.run("before-highlight",B),B.grammar)if(M&&p.Worker){var Q=new Worker(n.filename);Q.onmessage=function(z){W(z.data)},Q.postMessage(JSON.stringify({language:B.language,code:B.code,immediateClose:!0}))}else W(n.highlight(B.code,B.grammar,B.language));else W(n.util.encode(B.code))},highlight:function(x,M,k){var j={code:x,grammar:M,language:k};if(n.hooks.run("before-tokenize",j),!j.grammar)throw new Error('The language "'+j.language+'" has no grammar.');return j.tokens=n.tokenize(j.code,j.grammar),n.hooks.run("after-tokenize",j),o.stringify(n.util.encode(j.tokens),j.language)},tokenize:function(x,M){var k=M.rest;if(k){for(var j in k)M[j]=k[j];delete M.rest}var L=new C;return D(L,L.head,x),u(x,L,M,L.head,0),function(U){for(var B=[],W=U.head.next;W!==U.tail;)B.push(W.value),W=W.next;return B}(L)},hooks:{all:{},add:function(x,M){var k=n.hooks.all;k[x]=k[x]||[],k[x].push(M)},run:function(x,M){var k=n.hooks.all[x];if(k&&k.length)for(var j,L=0;j=k[L++];)j(M)}},Token:o};function o(x,M,k,j){this.type=x,this.content=M,this.alias=k,this.length=0|(j||"").length}function d(x,M,k,j){x.lastIndex=M;var L=x.exec(k);if(L&&j&&L[1]){var U=L[1].length;L.index+=U,L[0]=L[0].slice(U)}return L}function u(x,M,k,j,L,U){for(var B in k)if(k.hasOwnProperty(B)&&k[B]){var W=k[B];W=Array.isArray(W)?W:[W];for(var Q=0;Q<W.length;++Q){if(U&&U.cause==B+","+Q)return;var z=W[Q],O=z.inside,ne=!!z.lookbehind,f=!!z.greedy,A=z.alias;if(f&&!z.pattern.global){var w=z.pattern.toString().match(/[imsuy]*$/)[0];z.pattern=RegExp(z.pattern.source,w+"g")}for(var S=z.pattern||z,H=j.next,te=L;H!==M.tail&&!(U&&te>=U.reach);te+=H.value.length,H=H.next){var ce=H.value;if(M.length>x.length)return;if(!(ce instanceof o)){var ie,le=1;if(f){if(!(ie=d(S,te,x,ne))||ie.index>=x.length)break;var q=ie.index,we=ie.index+ie[0].length,me=te;for(me+=H.value.length;q>=me;)me+=(H=H.next).value.length;if(te=me-=H.value.length,H.value instanceof o)continue;for(var _=H;_!==M.tail&&(me<we||typeof _.value=="string");_=_.next)le++,me+=_.value.length;le--,ce=x.slice(te,me),ie.index-=te}else if(!(ie=d(S,0,ce,ne)))continue;q=ie.index;var F=ie[0],re=ce.slice(0,q),Ae=ce.slice(q+F.length),be=te+ce.length;U&&be>U.reach&&(U.reach=be);var Ce=H.prev;if(re&&(Ce=D(M,Ce,re),te+=re.length),v(M,Ce,le),H=D(M,Ce,new o(B,O?n.tokenize(F,O):F,A,F)),Ae&&D(M,H,Ae),le>1){var ye={cause:B+","+Q,reach:be};u(x,M,k,H.prev,te,ye),U&&ye.reach>U.reach&&(U.reach=ye.reach)}}}}}}function C(){var x={value:null,prev:null,next:null},M={value:null,prev:x,next:null};x.next=M,this.head=x,this.tail=M,this.length=0}function D(x,M,k){var j=M.next,L={value:k,prev:M,next:j};return M.next=L,j.prev=L,x.length++,L}function v(x,M,k){for(var j=M.next,L=0;L<k&&j!==x.tail;L++)j=j.next;M.next=j,j.prev=M,x.length-=L}if(p.Prism=n,o.stringify=function x(M,k){if(typeof M=="string")return M;if(Array.isArray(M)){var j="";return M.forEach(function(Q){j+=x(Q,k)}),j}var L={type:M.type,content:x(M.content,k),tag:"span",classes:["token",M.type],attributes:{},language:k},U=M.alias;U&&(Array.isArray(U)?Array.prototype.push.apply(L.classes,U):L.classes.push(U)),n.hooks.run("wrap",L);var B="";for(var W in L.attributes)B+=" "+W+'="'+(L.attributes[W]||"").replace(/"/g,"&quot;")+'"';return"<"+L.tag+' class="'+L.classes.join(" ")+'"'+B+">"+L.content+"</"+L.tag+">"},!p.document)return p.addEventListener&&(n.disableWorkerMessageHandler||p.addEventListener("message",function(x){var M=JSON.parse(x.data),k=M.language,j=M.code,L=M.immediateClose;p.postMessage(n.highlight(j,n.languages[k],k)),L&&p.close()},!1)),n;var m=n.util.currentScript();function I(){n.manual||n.highlightAll()}if(m&&(n.filename=m.src,m.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){var E=document.readyState;E==="loading"||E==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",I):window.requestAnimationFrame?window.requestAnimationFrame(I):window.setTimeout(I,16)}return n}(typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{});r.exports&&(r.exports=a),e.g!==void 0&&(e.g.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(p){p.type==="entity"&&(p.attributes.title=p.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(p,c){var i={};i["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[c]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var y={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};y["language-"+c]={pattern:/[\s\S]+/,inside:a.languages[c]};var n={};n[p]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:y},a.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(p,c){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+p+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:a.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(p){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;p.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+c.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},p.languages.css.atrule.inside.rest=p.languages.css;var i=p.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(a!==void 0&&typeof document<"u"){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var p={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},c="data-src-status",i="loading",y="loaded",n="pre[data-src]:not(["+c+'="'+y+'"]):not(['+c+'="'+i+'"])';a.hooks.add("before-highlightall",function(d){d.selector+=", "+n}),a.hooks.add("before-sanity-check",function(d){var u=d.element;if(u.matches(n)){d.code="",u.setAttribute(c,i);var C=u.appendChild(document.createElement("CODE"));C.textContent="Loading\u2026";var D=u.getAttribute("data-src"),v=d.language;if(v==="none"){var m=(/\.(\w+)$/.exec(D)||[,"none"])[1];v=p[m]||m}a.util.setLanguage(C,v),a.util.setLanguage(u,v);var I=a.plugins.autoloader;I&&I.loadLanguages(v),function(E,x,M){var k=new XMLHttpRequest;k.open("GET",E,!0),k.onreadystatechange=function(){k.readyState==4&&(k.status<400&&k.responseText?function(j){u.setAttribute(c,y);var L=function(Q){var z=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(Q||"");if(z){var O=Number(z[1]),ne=z[2],f=z[3];return ne?f?[O,Number(f)]:[O,void 0]:[O,O]}}(u.getAttribute("data-range"));if(L){var U=j.split(/\r\n?|\n/g),B=L[0],W=L[1]==null?U.length:L[1];B<0&&(B+=U.length),B=Math.max(0,Math.min(B-1,U.length)),W<0&&(W+=U.length),W=Math.max(0,Math.min(W,U.length)),j=U.slice(B,W).join(`
`),u.hasAttribute("data-start")||u.setAttribute("data-start",String(B+1))}C.textContent=j,a.highlightElement(C)}(k.responseText):k.status>=400?M("\u2716 Error "+k.status+" while fetching file: "+k.statusText):M("\u2716 Error: File does not exist or is empty"))},k.send(null)}(D,0,function(E){u.setAttribute(c,"failed"),C.textContent=E})}}),a.plugins.fileHighlight={highlight:function(d){for(var u,C=(d||document).querySelectorAll(n),D=0;u=C[D++];)a.highlightElement(u)}};var o=!1;a.fileHighlight=function(){o||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),o=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}}()},9967:(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>E});var a=e(3379),p=e.n(a),c=e(7795),i=e.n(c),y=e(569),n=e.n(y),o=e(3565),d=e.n(o),u=e(9216),C=e.n(u),D=e(4589),v=e.n(D),m=e(9137),I={};I.styleTagTransform=v(),I.setAttributes=d(),I.insert=n().bind(null,"head"),I.domAPI=i(),I.insertStyleElement=C(),p()(m.Z,I);const E=m.Z&&m.Z.locals?m.Z.locals:void 0},3379:r=>{"use strict";var t=[];function e(c){for(var i=-1,y=0;y<t.length;y++)if(t[y].identifier===c){i=y;break}return i}function a(c,i){for(var y={},n=[],o=0;o<c.length;o++){var d=c[o],u=i.base?d[0]+i.base:d[0],C=y[u]||0,D="".concat(u," ").concat(C);y[u]=C+1;var v=e(D),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(v!==-1)t[v].references++,t[v].updater(m);else{var I=p(m,i);i.byIndex=o,t.splice(o,0,{identifier:D,updater:I,references:1})}n.push(D)}return n}function p(c,i){var y=i.domAPI(i);return y.update(c),function(n){if(n){if(n.css===c.css&&n.media===c.media&&n.sourceMap===c.sourceMap&&n.supports===c.supports&&n.layer===c.layer)return;y.update(c=n)}else y.remove()}}r.exports=function(c,i){var y=a(c=c||[],i=i||{});return function(n){n=n||[];for(var o=0;o<y.length;o++){var d=e(y[o]);t[d].references--}for(var u=a(n,i),C=0;C<y.length;C++){var D=e(y[C]);t[D].references===0&&(t[D].updater(),t.splice(D,1))}y=u}}},569:r=>{"use strict";var t={};r.exports=function(e,a){var p=function(c){if(t[c]===void 0){var i=document.querySelector(c);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch{i=null}t[c]=i}return t[c]}(e);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(a)}},9216:r=>{"use strict";r.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(r,t,e)=>{"use strict";r.exports=function(a){var p=e.nc;p&&a.setAttribute("nonce",p)}},7795:r=>{"use strict";r.exports=function(t){var e=t.insertStyleElement(t);return{update:function(a){(function(p,c,i){var y="";i.supports&&(y+="@supports (".concat(i.supports,") {")),i.media&&(y+="@media ".concat(i.media," {"));var n=i.layer!==void 0;n&&(y+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),y+=i.css,n&&(y+="}"),i.media&&(y+="}"),i.supports&&(y+="}");var o=i.sourceMap;o&&typeof btoa<"u"&&(y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),c.styleTagTransform(y,p,c.options)})(e,t,a)},remove:function(){(function(a){if(a.parentNode===null)return!1;a.parentNode.removeChild(a)})(e)}}}},4589:r=>{"use strict";r.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},6981:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQ3MV80MzEzKSI+IDxwYXRoIGQ9Ik02IDExLjI1QzguODk5NSAxMS4yNSAxMS4yNSA4Ljg5OTUgMTEuMjUgNkMxMS4yNSAzLjEwMDUxIDguODk5NSAwLjc1IDYgMC43NUMzLjEwMDUxIDAuNzUgMC43NSAzLjEwMDUxIDAuNzUgNkMwLjc1IDguODk5NSAzLjEwMDUxIDExLjI1IDYgMTEuMjVaIiBzdHJva2U9IiM5QkE3QjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4gPHBhdGggZD0iTTguMjUgNkgzLjc1IiBzdHJva2U9IiM5QkE3QjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQ3MV80MzEzIj4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},7111:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iY2FsZW5kYXIiPiA8cGF0aCBkPSJNMjAsM2gtMXYyYzAsMS4xMDQtMC44OTYsMi0yLDJzLTItMC44OTYtMi0yVjNIOXYyYzAsMS4xMDQtMC44OTYsMi0yLDJTNSw2LjEwNCw1LDVWM0g0QzIuODk1LDMsMiwzLjg5NSwyLDV2MTR2MSBjMCwxLjEwNSwwLjg5NSwyLDIsMmgxNmMxLjEwNSwwLDItMC44OTUsMi0ydi0xVjVDMjIsMy44OTUsMjEuMTA1LDMsMjAsM3ogTTcsMTguNUM3LDE4Ljc3NSw2Ljc3NSwxOSw2LjUsMTloLTEgQzUuMjI1LDE5LDUsMTguNzc1LDUsMTguNXYtMUM1LDE3LjIyNSw1LjIyNSwxNyw1LjUsMTdoMUM2Ljc3NSwxNyw3LDE3LjIyNSw3LDE3LjVWMTguNXogTTcsMTQuNUM3LDE0Ljc3NSw2Ljc3NSwxNSw2LjUsMTVoLTEgQzUuMjI1LDE1LDUsMTQuNzc1LDUsMTQuNXYtMUM1LDEzLjIyNSw1LjIyNSwxMyw1LjUsMTNoMUM2Ljc3NSwxMyw3LDEzLjIyNSw3LDEzLjVWMTQuNXogTTcsMTAuNUM3LDEwLjc3NSw2Ljc3NSwxMSw2LjUsMTFoLTEgQzUuMjI1LDExLDUsMTAuNzc1LDUsMTAuNXYtMUM1LDkuMjI1LDUuMjI1LDksNS41LDloMUM2Ljc3NSw5LDcsOS4yMjUsNyw5LjVWMTAuNXogTTExLDE4LjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMSBDOS4yMjUsMTksOSwxOC43NzUsOSwxOC41di0xQzksMTcuMjI1LDkuMjI1LDE3LDkuNSwxN2gxYzAuMjc1LDAsMC41LDAuMjI1LDAuNSwwLjVWMTguNXogTTExLDE0LjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMSBDOS4yMjUsMTUsOSwxNC43NzUsOSwxNC41di0xQzksMTMuMjI1LDkuMjI1LDEzLDkuNSwxM2gxYzAuMjc1LDAsMC41LDAuMjI1LDAuNSwwLjVWMTQuNXogTTExLDEwLjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMSBDOS4yMjUsMTEsOSwxMC43NzUsOSwxMC41di0xQzksOS4yMjUsOS4yMjUsOSw5LjUsOWgxQzEwLjc3NSw5LDExLDkuMjI1LDExLDkuNVYxMC41eiBNMTUsMTguNWMwLDAuMjc1LTAuMjI1LDAuNS0wLjUsMC41aC0xIGMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMWMwLTAuMjc1LDAuMjI1LTAuNSwwLjUtMC41aDFjMC4yNzUsMCwwLjUsMC4yMjUsMC41LDAuNVYxOC41eiBNMTUsMTQuNWMwLDAuMjc1LTAuMjI1LDAuNS0wLjUsMC41IGgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMWMwLTAuMjc1LDAuMjI1LTAuNSwwLjUtMC41aDFjMC4yNzUsMCwwLjUsMC4yMjUsMC41LDAuNVYxNC41eiBNMTUsMTAuNSBjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMUMxMyw5LjIyNSwxMy4yMjUsOSwxMy41LDloMUMxNC43NzUsOSwxNSw5LjIyNSwxNSw5LjVWMTAuNXogTTE5LDE4LjUgYzAsMC4yNzUtMC4yMjUsMC41LTAuNSwwLjVoLTFjLTAuMjc1LDAtMC41LTAuMjI1LTAuNS0wLjV2LTFjMC0wLjI3NSwwLjIyNS0wLjUsMC41LTAuNWgxYzAuMjc1LDAsMC41LDAuMjI1LDAuNSwwLjVWMTguNXogTTE5LDE0LjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMWMwLTAuMjc1LDAuMjI1LTAuNSwwLjUtMC41aDFjMC4yNzUsMCwwLjUsMC4yMjUsMC41LDAuNSBWMTQuNXogTTE5LDEwLjVjMCwwLjI3NS0wLjIyNSwwLjUtMC41LDAuNWgtMWMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNXYtMUMxNyw5LjIyNSwxNy4yMjUsOSwxNy41LDloMUMxOC43NzUsOSwxOSw5LjIyNSwxOSw5LjUgVjEwLjV6IE02LDVWMmMwLTAuNTUyLDAuNDQ4LTEsMS0xczEsMC40NDgsMSwxdjNjMCwwLjU1Mi0wLjQ0OCwxLTEsMVM2LDUuNTUyLDYsNXogTTE2LDVWMmMwLTAuNTUyLDAuNDQ3LTEsMS0xczEsMC40NDgsMSwxdjMgYzAsMC41NTItMC40NDcsMS0xLDFTMTYsNS41NTIsMTYsNXoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},1925:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+IDxnIGlkPSJjYW5jZWwiPiA8cGF0aCBkPSJNMTkuMDcxLDE3LjY1N0wxMy40MTQsMTJsNS42NTctNS42NTdjMC4zOS0wLjM5LDAuMzktMS4wMjQsMC0xLjQxNHMtMS4wMjQtMC4zOS0xLjQxNCwwTDEyLDEwLjU4Nkw2LjM0Myw0LjkyOSBjLTAuMzktMC4zOS0xLjAyNC0wLjM5LTEuNDE0LDBzLTAuMzksMS4wMjQsMCwxLjQxNEwxMC41ODYsMTJsLTUuNjU3LDUuNjU3Yy0wLjM5MSwwLjM5MS0wLjM5LDEuMDI0LDAsMS40MTRzMS4wMjMsMC4zOTEsMS40MTQsMCBMMTIsMTMuNDE0bDUuNjU3LDUuNjU3YzAuMzksMC4zOSwxLjAyNCwwLjM5LDEuNDE0LDBTMTkuNDYyLDE4LjA0NywxOS4wNzEsMTcuNjU3eiIvPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4="},880:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic21zIj4gPHBhdGggZD0iTTE4LjQ4MSwxMGgtMS45NDdjLTIuMTg4LDAtNC4xNDIsMS42MDItNC40NzksMy44NDhDMTEuNjMsMTYuNjc4LDEzLjY5OCwxOSwxNi4zNDcsMTloMS4xSDE4IGMwLjI2NCwwLjQwOSwwLjQ3NCwxLjA0MiwwLjQ3NCwxLjU3MWMwLDAuMjY1LTAuMDM5LDAuNjExLTAuMTE0LDAuOTM5Yy0wLjA3NSwwLjMyOSwwLjI1MiwwLjYwNCwwLjUzNiwwLjQ0MSBjMS45NjgtMS4xMzIsNC4wNDctNC4zMTcsNC4xMDMtNy4yNTlDMjMuMDQ4LDEyLjExMiwyMC45NjUsMTAsMTguNDgxLDEweiIvPiA8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjU7IiBkPSJNMTYuOTIxLDcuNDUxQzE2LjQzMSw0LjI2OSwxMy41ODgsMiwxMC40MDYsMkg3LjU3M0MzLjk2LDIsMC45Myw0Ljk5MiwxLjAwMSw4LjY0OCBjMC4wODIsNC4xNjgsMy4xMDUsOC42NzksNS45NjgsMTAuMjgzYzAuNDE0LDAuMjMyLDAuODg5LTAuMTU5LDAuNzgtMC42MjRjLTAuMTA5LTAuNDY2LTAuMTY2LTAuOTU1LTAuMTY2LTEuMzMxIGMwLTAuNzUsMC4wMzMtMS4zOTYsMC40MTctMS45NzZoMC44MDRoMS42YzAuMjA2LDAsMC40MS0wLjAxNSwwLjYxMi0wLjAzNWMtMC4wMjktMC40MTctMC4wMTUtMC44NDEsMC4wNDktMS4yNjYgQzExLjQ2NywxMS4wMiwxMy44MTgsOSwxNi41MzMsOWgwLjQzM0MxNy4wMTIsOC40OTYsMTcuMDAyLDcuOTc4LDE2LjkyMSw3LjQ1MXoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},4339:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzY0KSI+IDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS44MTA2NiA2LjAwMDA2TDMuOTA1MzMgMy45MDUzOEwyLjg0NDY3IDIuODQ0NzNMMC4yMTk2NyA1LjQ2OTczQy0wLjA3MzIyMzMgNS43NjI2MiAtMC4wNzMyMjMzIDYuMjM3NDkgMC4yMTk2NyA2LjUzMDM4TDIuODQ0NjcgOS4xNTU0TDMuOTA1MzMgOC4wOTQ3NUwxLjgxMDY2IDYuMDAwMDZaTTQuMTU5NTggOC40ODg0Mkw2LjQ1NDU4IDIuOTM4NEw3Ljg0MDcyIDMuNTExNkw1LjU0NTc0IDkuMDYxNTdMNC4xNTk1OCA4LjQ4ODQyWk0xMS43ODAzIDUuNDY5NzNMOS4xNTUzMiAyLjg0NDczTDguMDk0NjcgMy45MDUzOEwxMC4xODkzIDYuMDAwMDZMOC4wOTQ2NyA4LjA5NDc1TDkuMTU1MzIgOS4xNTU0TDExLjc4MDMgNi41MzAzOEMxMi4wNzMyIDYuMjM3NDkgMTIuMDczMiA1Ljc2MjYyIDExLjc4MDMgNS40Njk3M1oiIGZpbGw9IndoaXRlIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNl8yMzY0Ij4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},2666:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4OV80Mjk4OSkiPiA8cGF0aCBkPSJNNy41IDQuNUgxLjVWMTAuNUg3LjVWNC41WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8cGF0aCBkPSJNMy43NSA0LjVWMS41SDEwLjVWOC4yNUg3LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4gPC9nPiA8ZGVmcz4gPGNsaXBQYXRoIGlkPSJjbGlwMF8xODlfNDI5ODkiPiA8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIiAvPiA8L2NsaXBQYXRoPiA8L2RlZnM+IDwvc3ZnPiA="},5070:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDIuMjVDMCAxLjgzNTc5IDAuMzM1Nzg2IDEuNSAwLjc1IDEuNUgxMS4yNUMxMS42NjQyIDEuNSAxMiAxLjgzNTc5IDEyIDIuMjVWNC41SDEwLjVWM0gxLjVWOC4yNUg0LjVWOS43NUgwLjc1QzAuMzM1Nzg2IDkuNzUgMCA5LjQxNDIzIDAgOVYyLjI1Wk05Ljc1IDcuNUgxMlY5SDkuNzVWMTEuMjVIOC4yNVY5SDZWNy41SDguMjVWNS4yNUg5Ljc1VjcuNVoiIGZpbGw9IndoaXRlIiAvPiA8L3N2Zz4g"},6829:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTExLjcwNjcgMy4yNjY2N0wxMi4wMjY3IDQuMDEzMzNWMTIuOTczM0wxMS4wMTMzIDEzLjk4NjdIMkwwLjk4NjY2NyAxMi45NzMzVjAuOTczMzMzTDIgMC4wMTMzMzMzSDguMDI2NjdMOC43MiAwLjI4TDExLjcwNjcgMy4yNjY2N1pNMTEuMDEzMyAxMi45NzMzVjQuOTczMzNINy4wMTMzM1YwLjk3MzMzM0gyVjEyLjk3MzNIMTEuMDEzM1pNOC4wMjY2NyA0LjAxMzMzSDExLjAxMzNMOC4wMjY2NyAwLjk3MzMzM1Y0LjAxMzMzWiIgZmlsbD0iI0M1QzVDNSIvPiA8L3N2Zz4g"},4983:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjc1IDMuODU2NjZMMS43MTMzNSAyLjg5MzMxTDYgNy4xNzk0M0wxMC4yODY3IDIuODkzMzFMMTEuMjUgMy44NTY2Nkw2IDkuMTA2NjZMMC43NSAzLjg1NjY2WiIgZmlsbD0iI0QxRDVEQiIgLz4gPC9zdmc+IA=="},5227:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4gPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTEyIDEzLjc1QzEyLjk2NjUgMTMuNzUgMTMuNzUgMTIuOTY2NSAxMy43NSAxMkMxMy43NSAxMS4wMzM1IDEyLjk2NjUgMTAuMjUgMTIgMTAuMjVDMTEuMDMzNSAxMC4yNSAxMC4yNSAxMS4wMzM1IDEwLjI1IDEyQzEwLjI1IDEyLjk2NjUgMTEuMDMzNSAxMy43NSAxMiAxMy43NVoiIGZpbGw9IiMwMDAwMDAiLz4gPHBhdGggZD0iTTEyIDYuNzVDMTIuOTY2NSA2Ljc1IDEzLjc1IDUuOTY2NSAxMy43NSA1QzEzLjc1IDQuMDMzNSAxMi45NjY1IDMuMjUgMTIgMy4yNUMxMS4wMzM1IDMuMjUgMTAuMjUgNC4wMzM1IDEwLjI1IDVDMTAuMjUgNS45NjY1IDExLjAzMzUgNi43NSAxMiA2Ljc1WiIgZmlsbD0iIzAwMDAwMCIvPiA8cGF0aCBkPSJNMTIgMjAuNzVDMTIuOTY2NSAyMC43NSAxMy43NSAxOS45NjY1IDEzLjc1IDE5QzEzLjc1IDE4LjAzMzUgMTIuOTY2NSAxNy4yNSAxMiAxNy4yNUMxMS4wMzM1IDE3LjI1IDEwLjI1IDE4LjAzMzUgMTAuMjUgMTlDMTAuMjUgMTkuOTY2NSAxMS4wMzM1IDIwLjc1IDEyIDIwLjc1WiIgZmlsbD0iIzAwMDAwMCIvPiA8L3N2Zz4="},5548:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjQ0Nzk5IDAuMTA2NjkxQzEuMDc4ODYgLTAuMDc3OTk5OSAwLjYzNDE5MiAtMC4wMTY5MjYxIDAuMzI4NTI4IDAuMjYwNDQ0QzAuMDIyODY0NCAwLjUzNzgxMyAtMC4wODA5OCAwLjk3NDQ4MiAwLjA2NzEwMDEgMS4zNTk3NkwyLjYyMTIyIDguMDA1MDVMMC4wNjcyODQ3IDE0LjYzOTdDLTAuMDgwOTg2OSAxNS4wMjQ5IDAuMDIyNjE2OCAxNS40NjE2IDAuMzI4MTEgMTUuNzM5MUMwLjYzMzYwNCAxNi4wMTY2IDEuMDc4MjIgMTYuMDc4IDEuNDQ3NDQgMTUuODkzNUwxNS40NDY0IDguODk5OTFDMTUuNzg1MyA4LjczMDYzIDE1Ljk5OTQgOC4zODQ0MiAxNS45OTk1IDguMDA1NjRDMTUuOTk5NiA3LjYyNjg1IDE1Ljc4NTcgNy4yODA1MiAxNS40NDcgNy4xMTEwM0wxLjQ0Nzk5IDAuMTA2NjkxWk00LjM3OTYxIDcuMDA1MzNMMi44NTkwMyAzLjA0OTA3TDEwLjc2NjEgNy4wMDUzM0g0LjM3OTYxWk00LjM3OTIzIDkuMDA1MzNMMi44NTk5NCAxMi45NTIyTDEwLjc2MDIgOS4wMDUzM0g0LjM3OTIzWiIgZmlsbD0iIzA5NzJEMyIgLz4gPC9zdmc+IA=="},5430:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iZXJyb3JfaW5saW5lIj4gPHBhdGggZD0iTTEyLDFDNS45MiwxLDEsNS45MiwxLDEyYzAsNi4wOCw0LjkyLDExLDExLDExczExLTQuOTIsMTEtMTFDMjMsNS45MiwxOC4wOCwxLDEyLDF6IE0xMiwxOGMtMC41NSwwLTEtMC40NS0xLTFzMC40NS0xLDEtMSBzMSwwLjQ1LDEsMVMxMi41NSwxOCwxMiwxOHogTTEzLDEzLjg3NkMxMywxNC40OTUsMTIuNTUsMTUsMTIsMTVzLTEtMC41MDUtMS0xLjEyNFY3LjEyNEMxMSw2LjUwNSwxMS40NSw2LDEyLDZzMSwwLjUwNSwxLDEuMTI0IFYxMy44NzZ6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},4784:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzYzKSI+IDxwYXRoIGQ9Ik03LjUgMS41SDEwLjVWNC41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgLz4gPHBhdGggZD0iTTQuNSA3LjVMMTAuNSAxLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNMTAuNSA2Ljc4NlYxMC41SDEuNVYxLjVINS4yNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNl8yMzYzIj4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},2591:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icmVkZXllIj4gPHBhdGggc3R5bGU9Im9wYWNpdHk6MC41OyIgZD0iTTE1LDEyYy0xLjEwNSwwLTItMC44OTUtMi0yYzAtMC42NCwwLjMwNi0xLjIwMiwwLjc3My0xLjU2OUMxMy4yMzYsOC4xNjQsMTIuNjQsOCwxMiw4IGMtMi4yMDksMC00LDEuNzkxLTQsNGMwLDIuMjA5LDEuNzkxLDQsNCw0czQtMS43OTEsNC00YzAtMC4wOS0wLjAyMS0wLjE3NC0wLjAyNi0wLjI2M0MxNS42ODQsMTEuOSwxNS4zNTUsMTIsMTUsMTJ6Ii8+IDxwYXRoIGQ9Ik0yMi44NDIsMTEuNDZDMjIuNjUyLDExLjE2LDE4LjAwMSw0LDEyLDRTMS4zNDgsMTEuMTYsMS4xNTgsMTEuNDZjLTAuMjEsMC4zMy0wLjIxLDAuNzUsMCwxLjA4IEMxLjM0OCwxMi44NCw1Ljk5OSwyMCwxMiwyMHMxMC42NTItNy4xNiwxMC44NDItNy40NkMyMy4wNTMsMTIuMjEsMjMuMDUzLDExLjc5LDIyLjg0MiwxMS40NnogTTEyLDE3IGMtMi43NjIsMC01LjAwMS0yLjIzOS01LjAwMS01UzkuMjM4LDcsMTIsN3M1LjAwMSwyLjIzOSw1LjAwMSw1UzE0Ljc2MiwxNywxMiwxN3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},8166:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iaW5mb3JtYXRpb24iPiA8cGF0aCBkPSJNMTIsMUM1LjkyNSwxLDEsNS45MjUsMSwxMnM0LjkyNSwxMSwxMSwxMXMxMS00LjkyNSwxMS0xMVMxOC4wNzUsMSwxMiwxeiBNMTQsMTdjMCwxLjEwNS0wLjg5NSwyLTIsMnMtMi0wLjg5NS0yLTJ2LTUgYzAtMS4xMDUsMC44OTUtMiwyLTJzMiwwLjg5NSwyLDJWMTd6IE0xMiw4Yy0xLjEwNSwwLTItMC44OTUtMi0yYzAtMS4xMDUsMC44OTUtMiwyLTJzMiwwLjg5NSwyLDJDMTQsNy4xMDUsMTMuMTA1LDgsMTIsOHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},5355:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iY2FyZXRfbGVmdCI+IDxwYXRoIGQ9Ik0xNCwxOGMtMC4yNTYsMC0wLjUxMi0wLjA5OC0wLjcwNy0wLjI5M2wtNS01Yy0wLjM5MS0wLjM5MS0wLjM5MS0xLjAyMywwLTEuNDE0bDUtNWMwLjM5MS0wLjM5MSwxLjAyMy0wLjM5MSwxLjQxNCwwIHMwLjM5MSwxLjAyMywwLDEuNDE0TDEwLjQxNCwxMmw0LjI5Myw0LjI5M2MwLjM5MSwwLjM5MSwwLjM5MSwxLjAyMywwLDEuNDE0QzE0LjUxMiwxNy45MDIsMTQuMjU2LDE4LDE0LDE4eiIvPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4g"},9124:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibGlnaHQiPiA8cGF0aCBkPSJNNy4xMDYsMTNoOS43ODlDMTguMTkyLDExLjcyOSwxOSw5Ljk2LDE5LDhjMC0zLjg2Ni0zLjEzNC03LTctN1M1LDQuMTM0LDUsOEM1LDkuOTYsNS44MDgsMTEuNzI5LDcuMTA2LDEzeiIvPiA8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjU7IiBkPSJNMTQsMjFoMXYxYzAsMC41NTMtMC40NDcsMS0xLDFoLTRjLTAuNTUyLDAtMS0wLjQ0Ny0xLTF2LTFoMUgxNHogTTcsMTRjMCwwLDEsMS41LDEsM2MwLDEsMCwyLDEsM2g2IGMxLTEsMS0yLDEtM2MwLTEuNSwxLTMsMS0zSDd6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},4743:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iaHlwZXJsaW5rIj4gPHBhdGggZD0iTTE2LjUsNWgtNGMtMi4xMywwLTMuOTgsMS4yMi00Ljg5LDNoMi40NWMwLjYzLTAuNjIsMS40OS0xLDIuNDQtMWg0YzEuOTMsMCwzLjUsMS41NywzLjUsMy41UzE4LjQzLDE0LDE2LjUsMTRoLTQgYy0xLjM5LDAtMi42LTAuODItMy4xNS0ySDcuMjFjMC42NSwyLjMsMi43OCw0LDUuMjksNGg0YzMuMDMsMCw1LjUtMi40Nyw1LjUtNS41QzIyLDcuNDcsMTkuNTMsNSwxNi41LDV6IE0xMS41LDE4aC00IEM1LjU3LDE4LDQsMTYuNDMsNCwxNC41UzUuNTcsMTEsNy41LDExaDRjMS4zOSwwLDIuNiwwLjgyLDMuMTUsMmgyLjE0Yy0wLjY1LTIuMy0yLjc4LTQtNS4yOS00aC00QzQuNDcsOSwyLDExLjQ3LDIsMTQuNSBDMiwxNy41Myw0LjQ3LDIwLDcuNSwyMGg0YzIuMTMsMCwzLjk4LTEuMjIsNC44OS0zaC0yLjQ1QzEzLjMxLDE3LjYyLDEyLjQ1LDE4LDExLjUsMTh6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},487:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iYW5ub3VuY2VyIj4gPHBhdGggZD0iTTIwLjg5OSwxOS4zOTRsLTYuNDktMTUuMDk1bC0xMS4xNCwxMS4xNGw4LjUzMSwzLjY1M2wtMS42NjksMS44MjFjLTAuMTA2LDAuMTE3LTAuMTUyLDAuMjc2LTAuMTIzLDAuNDMyIGMwLjAzLDAuMTU1LDAuMTMxLDAuMjg3LDAuMjcyLDAuMzU2bDIuNTcxLDEuMjVjMC4wNywwLjAzNCwwLjE0NSwwLjA1LDAuMjE5LDAuMDVjMC4xMzcsMCwwLjI3Mi0wLjA1NywwLjM2OS0wLjE2M2wyLTIuMTg3IGwyLjk0MiwxLjI2TDIwLjg5OSwxOS4zOTR6Ii8+IDxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNTsiIGQ9Ik05LjUsNkM5LjMzOSw2LDkuMTgsNS45MjIsOS4wODQsNS43NzdsLTItM2MtMC4xNTMtMC4yMy0wLjA5MS0wLjU0LDAuMTM5LTAuNjkzIHMwLjU0MS0wLjA5MiwwLjY5MywwLjEzOWwyLDNjMC4xNTMsMC4yMywwLjA5MSwwLjU0LTAuMTM5LDAuNjkzQzkuNjkyLDUuOTczLDkuNTk2LDYsOS41LDZ6IE00LjkxNiwxMC43NzcgYzAuMTUzLTAuMjMsMC4wOTEtMC41NC0wLjEzOS0wLjY5M2wtMy0yQzEuNTQ1LDcuOTMsMS4yMzYsNy45OTMsMS4wODQsOC4yMjNjLTAuMTUzLDAuMjMtMC4wOTEsMC41NCwwLjEzOSwwLjY5M2wzLDIgQzQuMzA4LDEwLjk3Myw0LjQwNCwxMSw0LjUsMTFDNC42NjEsMTEsNC44MiwxMC45MjIsNC45MTYsMTAuNzc3eiBNNi44NTQsNy44NTRjMC4xOTUtMC4xOTUsMC4xOTUtMC41MTIsMC0wLjcwN2wtNC00IGMtMC4xOTUtMC4xOTUtMC41MTItMC4xOTUtMC43MDcsMHMtMC4xOTUsMC41MTIsMCwwLjcwN2w0LDRDNi4yNDQsNy45NTEsNi4zNzIsOCw2LjUsOFM2Ljc1Niw3Ljk1MSw2Ljg1NCw3Ljg1NHogTTE4Ljg1NCwyMi44NTQgbDMtM2MwLjE5NS0wLjE5NSwwLjE5NS0wLjUxMiwwLTAuNzA3cy0wLjUxMi0wLjE5NS0wLjcwNywwbC0zLDNjLTAuMTk1LDAuMTk1LTAuMTk1LDAuNTEyLDAsMC43MDcgQzE4LjI0NCwyMi45NTEsMTguMzcyLDIzLDE4LjUsMjNTMTguNzU2LDIyLjk1MSwxOC44NTQsMjIuODU0eiBNMi44NTQsMTUuODU0bDEyLTEyYzAuMTk1LTAuMTk1LDAuMTk1LTAuNTEyLDAtMC43MDcgcy0wLjUxMi0wLjE5NS0wLjcwNywwbC0xMiwxMmMtMC4xOTUsMC4xOTUtMC4xOTUsMC41MTIsMCwwLjcwN0MyLjI0NCwxNS45NTEsMi4zNzIsMTYsMi41LDE2UzIuNzU2LDE1Ljk1MSwyLjg1NCwxNS44NTR6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},7701:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibWVudSI+IDxwYXRoIGQ9Ik0yMSw4SDNDMi40NDgsOCwyLDcuNTUyLDIsN3MwLjQ0OC0xLDEtMWgxOGMwLjU1MywwLDEsMC40NDgsMSwxUzIxLjU1Myw4LDIxLDh6IE0yMiwxMmMwLTAuNTUyLTAuNDQ3LTEtMS0xSDMgYy0wLjU1MiwwLTEsMC40NDgtMSwxczAuNDQ4LDEsMSwxaDE4QzIxLjU1MywxMywyMiwxMi41NTIsMjIsMTJ6IE0yMiwxN2MwLTAuNTUzLTAuNDQ3LTEtMS0xSDNjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDEgaDE4QzIxLjU1MywxOCwyMiwxNy41NTMsMjIsMTd6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},5654:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icmVtb3ZlIj4gPHBhdGggZD0iTTIxLDEzSDNjLTAuNTUyLDAtMS0wLjQ0OC0xLTFzMC40NDgtMSwxLTFoMThjMC41NTIsMCwxLDAuNDQ4LDEsMVMyMS41NTIsMTMsMjEsMTN6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},6541:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBDcmVhdGVkIHdpdGggSW5rc2NhcGUgKGh0dHA6Ly93d3cuaW5rc2NhcGUub3JnLykgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiBpZD0ic3ZnNDEiIHdpZHRoPSIyMi45NDU4MThtbSIgaGVpZ2h0PSIyNS45MjU4NDRtbSIgdmlld0JveD0iMCAwIDg2LjcyNDM1IDk3Ljk4NzQ0MyIgc29kaXBvZGk6ZG9jbmFtZT0iTXluYWhJY29uV2hpdGUuc3ZnIiBpbmtzY2FwZTp2ZXJzaW9uPSIxLjEgKGM0ZThmOWUsIDIwMjEtMDUtMjQpIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPiA8c29kaXBvZGk6bmFtZWR2aWV3IGlkPSJuYW1lZHZpZXc2IiBwYWdlY29sb3I9IiNmZmZmZmYiIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxLjAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiIHNob3dncmlkPSJmYWxzZSIgdW5pdHM9Im1tIiBmaXQtbWFyZ2luLXRvcD0iMCIgZml0LW1hcmdpbi1sZWZ0PSIwIiBmaXQtbWFyZ2luLXJpZ2h0PSIwIiBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgaW5rc2NhcGU6em9vbT0iMi4yNTAwMDAxIiBpbmtzY2FwZTpjeD0iNTQuODg4ODg3IiBpbmtzY2FwZTpjeT0iODMuMzMzMzMxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyOTYiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDMiIGlua3NjYXBlOndpbmRvdy14PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMjMiIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9Imc0NyIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIiAvPiA8ZGVmcyBpZD0iZGVmczQ1IiAvPiA8ZyBpZD0iZzQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEwLjU3MjU3LC04OS4zNDQxMzUpIj4gPHBhdGggaWQ9InBhdGgxMTkiIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuNjY2NjY3IiBkPSJtIDEzMi4zMDczLDE3NS42OTcyOCBjIC0xMC45OTE5LC02LjM5MTk2IC0yMC41NDgzLC0xMS43MTUyNiAtMjEuMDE0NzMsLTEyLjM1MzE0IC0xLC0xIC0wLjY2NjY2LC03LjEyMzE5IC0wLjY2NjY2LC0yNS4wOTAyNSAwLC0yMy40NDI5MiAwLjAwNCwtMjMuNTA2MTkgMS41LC0yNS4xMzk0NSAyLjI2NjQxLC0yLjQ3Mzk5IDM5LjY3MSwtMjMuNzcwMzA1IDQxLjc0OTg2LC0yMy43NzAzMDUgMi4wMDU4LDAgNDAuMzc5NDQsMjEuOTA4MTk1IDQyLjI2ODgxLDI0LjEzMjAwNSAxLjAyNzg2LDEuMjA5ODEgMS4xNTU3OCwyLjcxNDY4IDEuMTUyMjgsOS45NzEwOCBsIC0wLjAwNCw4Ljg5NjkyIGMgLTIuNDU5NDIsMS40Mzk5NCAtNS42MzMwNCwyLjY5MjU5IC03Ljk2NjE3LDQuMDM4NjQgLTAuMzcxOCwtMC4xNTMyNyAtMC4wNjg3LC0xLjAzODYzIC0wLjA1NDQsLTguODI2NTQgMC4wMjA2LC0xMS4yMTIxIDAuMDIwNiwtOS4yMTIxIC0xLjUxODY4LC0xMC4zMTg3NiAtMS41MjExNCwtMS4wOTM2NSAtMzIuNTE5MzMsLTE4LjU2MDAwOCAtMzMuODQ0MTYsLTE4LjU2MDAwOCAtMS4yNTIzNSwwIC0zMS4wNDUyOSwxNi45Njg1NjggLTMzLjExNjU5LDE4Ljg2MTU0OCAtMS40OTAxOCwxLjM2MTg5IC0xLjUsMS40OTg2NiAtMS41LDIwLjg4NzQgdiAxOS41MTY1MyBsIDIuMTY2NjcsMS42MDIyOSBjIDEuMTkxNjcsMC44ODEyNyA4LjQ4MzAzLDUuMjQ2NTQgMTYuMjAzMDMsOS43MDA2IDEwLjI1NTM0LDUuOTE2ODQgMTQuNjMzNjgsOC4wOTgzIDE2LjI1MzgxLDguMDk4MyAxLjYxNjk0LDAgNi4yMTA5MywtMi4yODA3NCAxNi45NjM2NCwtOC40MjE4IDguMTEwNCwtNC42MzE5OCAxNS4xODIwNCwtOS40ODY3MyAxNi4xNzAwNSwtMTAuMTg5NDUgMi4xNjY2NiwtMS41NDEwMyAyLjI0MjgsLTAuNzIyNDkgMi4yNDI4LC02LjIxODg5IHYgLTguMTY5ODYgYyAzLjM5NTIxLC0xLjg4NTk2IDYuMzcxNzgsLTMuMjg2OCA4LC00IDAsMiA3LjFlLTQsNS41ODU5OCAtMC4xMjA3OSwxMS43MDYxNSAtMC4yMDg5OCwxMC41MjY1NSAtMC4yNDA1LDEwLjcyNzI5IC0xLjg3OTIxLDExLjk2NjA3IC00LjAzMzQ2LDMuMDQ5MDggLTQwLjEwNzk0LDIzLjMyNjU0IC00MS40Nzg3NywyMy4zMTUyMSAtMC44MzY2NywtMC4wMDcgLTEwLjUxNDYsLTUuMjQyMzQgLTIxLjUwNjUsLTExLjYzNDI5IHogbSA2Ljk4NTI3LC0xMy4yNDU3NCAtMTMsLTcuNTI2NCAtMC4xODE3LC0xMi4xMjM4MyBjIC0wLjEyOTU3LC04LjY0NDk4IDAuMDMzNSwtMTIuMTIzODQgMC41Njg0MSwtMTIuMTIzODQgMC40MTI1NywwIDIuMjE5MDMsMC44MjUgNC4wMTQzNiwxLjgzMzMzIGwgMy4yNjQyNSwxLjgzMzM0IDYuNmUtNCw3LjM5NjY3IGMgMy40ZS00LDQuMzMwODQgMC4xMzU4NSw3LjQ3NDA5IDAuMzM0MDIsOC42MDMzMyA0LDIgNC4wMTIxMiwxLjk3OTEzIDkuMDUzODUsNC45MDE3MiAxMS4xODMwNiw2LjQ4MjYgOS42NTg0MSw2LjQ4MyAyMC45MjkyNCwtMC4wMDUgbCA5LjY2MzA1LC01LjU2MzA2IDAuMDEwMywtMTEuNTE3MTIgMC4wMTAzLC0xMS41MTcxMiAtMS44MzMzMywwLjk1NzQzIGMgLTEuMDA4MzQsMC41MjY1OSAtNS4yODMzNCwyLjkzMjY5IC05LjUsNS4zNDY4OSAtNC4yMTY2NywyLjQxNDIgLTguMTMyNDUsNC4zOTEwNiAtOC43MDE3NCw0LjM5MzAyIC0xLjEyNjk5LDAuMDA0IC0yMi44ODM1MiwtMTIuMTQ0MjIgLTI0LjgyMjk0LC0xMy44NjAyOCAtMC42NTUyNSwtMC41Nzk3OCAtMC44MDg3MywtMS4xMzY0OCAtMSwtMi4wMDI3NyAwLjI3ODA4LC0xLjM3ODY4IDIxLjE5MTI3LC0xMi4xMzM3MSAyNS43ODkyNSwtMTQuODAwMDUgMS40MDIwMiwwLjY2NjM0IDEyLjA2ODc2LDYuNTQyNDggMTIuMDY4NzYsNi41NDI0OCAtMi4zNzA1NywxLjcyOTcgLTQuNjY4MjcsMy4zNjg0MiAtNi42NjY3NCw1LjEyMzg2IC00LC0yIC0zLjQ4NzYzLC0xLjY5OTg0IC01LjQ2MTM1LC0yLjY0MTA0IC0zLjE3MjI4LDEuOTQzMTcgLTQuNTM4NjUsMi42NDEwNCAtOS44NzE5MSw2LjA0Nzg0IDIuMzMzMjYsMS41OTMyIDcuMzMzMjYsNC41OTMyIDkuOTUwNTcsNS41OTM1MyAyLjM4MjY5LC0xLjAwMDMzIDIuMzgyNjksLTEuMDAwMzMgMTAuNzgzNTYsLTUuMDg5OTYgOS45NzI5MiwtNC44NTQ5MiA4Ljg3NjYsLTUuNTIyNTcgMTQuNTc3MDYsLTEuOTI0MDIgbCAyLjcxMjA0LDEuNzEyMDMgLTAuMTc4MjgsMTYuMzg1NDEgLTAuNTExNjksMTUuOTE2MjEgLTEyLjY2NjU5LDguMDMxOTcgYyAtNi45ODU4LDQuNDI5NzUgLTEzLjMzMzQxLDYuOTY4MDMgLTE0LjY2NjY3LDcuNTgyNDYgLTEuNjY2NzQsLTAuNjE0NDMgLTcuMzQyMTEsLTMuMjY2MTIgLTE0LjY2NjY3LC03LjUwNjcgeiIgLz4gPC9nPiA8L3N2Zz4g"},6283:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzYwKSI+IDxwYXRoIGQ9Ik02IDEuNjI1QzMuMzc1IDEuNjI1IDMuMzc1IDUuMTI1IDMuMzc1IDUuMTI1TDAuNzUgOC4yNUgxMS4yNUw4LjYyNSA1LjEyNUM4LjYyNSA1LjEyNSA4LjYyNSAxLjYyNSA2IDEuNjI1WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8cGF0aCBkPSJNNC4yNSA4LjYyNVY5LjVDNC4yNSA5Ljk2NDEzIDQuNDM0MzcgMTAuNDA5MiA0Ljc2MjU2IDEwLjczNzRDNS4wOTA3NSAxMS4wNjU2IDUuNTM1ODcgMTEuMjUgNiAxMS4yNUM2LjQ2NDEzIDExLjI1IDYuOTA5MjQgMTEuMDY1NiA3LjIzNzQzIDEwLjczNzRDNy41NjU2MiAxMC40MDkyIDcuNzUgOS45NjQxMyA3Ljc1IDkuNVY4LjYyNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPiA8cGF0aCBkPSJNNiAwLjc1VjEuNjI1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4gPC9nPiA8ZGVmcz4gPGNsaXBQYXRoIGlkPSJjbGlwMF80MjZfMjM2MCI+IDxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiIC8+IDwvY2xpcFBhdGg+IDwvZGVmcz4gPC9zdmc+IA=="},5957:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibGlzdF9jaGVjayI+IDxwYXRoIGQ9Ik0xMiwyM0M1LjkzNSwyMywxLDE4LjA2NSwxLDEyUzUuOTM1LDEsMTIsMWMxLjgzNywwLDMuNjU3LDAuNDYzLDUuMjYzLDEuMzM5YzAuNDg0LDAuMjY1LDAuNjYzLDAuODcyLDAuMzk4LDEuMzU3IHMtMC44NzIsMC42NjQtMS4zNTcsMC4zOTlDMTQuOTkyLDMuMzc4LDEzLjUwNCwzLDEyLDNjLTQuOTYyLDAtOSw0LjAzOC05LDljMCw0Ljk2Myw0LjAzOCw5LDksOWM0Ljk2MywwLDktNC4wMzcsOS05IGMwLTAuNTMzLTAuMDUyLTEuMDcxLTAuMTU3LTEuNjQ0Yy0wLjEwMS0wLjU0MywwLjI1OS0xLjA2NSwwLjgwMi0xLjE2NWMwLjU1Mi0wLjA5OSwxLjA2NCwwLjI2LDEuMTY1LDAuODAyIEMyMi45MzgsMTAuNjg4LDIzLDExLjM0NCwyMywxMkMyMywxOC4wNjUsMTguMDY1LDIzLDEyLDIzeiBNMTEuNzA3LDE1LjcwN2w5LTljMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNCBzLTEuMDIzLTAuMzkxLTEuNDE0LDBMMTEsMTMuNTg2bC0zLjI5My0zLjI5M2MtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQsMHMtMC4zOTEsMS4wMjMsMCwxLjQxNGw0LDQgQzEwLjQ4OCwxNS45MDIsMTAuNzQ0LDE2LDExLDE2UzExLjUxMiwxNS45MDIsMTEuNzA3LDE1LjcwN3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},3522:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjY1ODMgNS41NzAyTDAuNzUgNi40Nzg1TDQuMjI3MzUgOS45NTU4NUwxMS4yNSAyLjkzMzJMMTAuMzQxNyAyLjAyNDlMNC4yMjczNSA4LjEzOTI1TDEuNjU4MyA1LjU3MDJaIiBmaWxsPSJ3aGl0ZSIgLz4gPC9zdmc+IA=="},8728:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icGF1c2UiPiA8cGF0aCBkPSJNOSwyMkg2Yy0wLjU1LDAtMS0wLjQ1LTEtMVYzYzAtMC41NSwwLjQ1LTEsMS0xaDNjMC41NSwwLDEsMC40NSwxLDF2MThDMTAsMjEuNTUsOS41NSwyMiw5LDIyeiBNMTksMjFWMyBjMC0wLjU1LTAuNDUtMS0xLTFoLTNjLTAuNTUsMC0xLDAuNDUtMSwxdjE4YzAsMC41NSwwLjQ1LDEsMSwxaDNDMTguNTUsMjIsMTksMjEuNTUsMTksMjF6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},1783:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icGxheSI+IDxwYXRoIGQ9Ik0yMS41NDksMTEuMjA4TDcuMzI4LDIuMTNDNy4wNTIsMS45NTUsNi43MTUsMS45NTcsNi40NDEsMi4xMzZDNi4xNjgsMi4zMTUsNiwyLjY0NCw2LDN2MTggYzAsMC4zNTQsMC4xNjcsMC42ODMsMC40MzksMC44NjJDNi41NzgsMjEuOTU0LDYuNzMzLDIyLDYuODg5LDIyYzAuMTQ5LDAsMC4yOTgtMC4wNDIsMC40MzMtMC4xMjdsMTQuMjIzLTguOTIyIGMwLjI4LTAuMTc2LDAuNDU1LTAuNTA5LDAuNDU2LTAuODdDMjIuMDAxLDExLjcyLDIxLjgyOSwxMS4zODYsMjEuNTQ5LDExLjIwOHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},1033:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iYWRkIj4gPHBhdGggZD0iTTIxLDExaC04VjNjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2OEgzYy0wLjU1MiwwLTEsMC40NDgtMSwxczAuNDQ4LDEsMSwxaDh2OGMwLDAuNTUzLDAuNDQ4LDEsMSwxczEtMC40NDcsMS0xIHYtOGg4YzAuNTUyLDAsMS0wLjQ0OCwxLTFTMjEuNTUyLDExLDIxLDExeiIvPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4g"},723:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDEwLjUwMDJDOC40ODUyOCAxMC41MDAyIDEwLjUgOC40ODU0NyAxMC41IDYuMDAwMTlIMTJDMTIgOS4zMTM4OSA5LjMxMzcxIDEyLjAwMDIgNiAxMi4wMDAyQzIuNjg2MjkgMTIuMDAwMiAwIDkuMzEzODkgMCA2LjAwMDE5QzAgMi42ODY0OCAyLjY4NjI5IDAuMDAwMTg1NTIyIDUuOTkzNjYgMC4wMDAyMTIzMzZDNy43NDc3NCAtMC4wMTQ2MjA3IDkuMzg1MiAwLjc0ODUgMTAuNSAyLjAzMTc4VjAuMDAwMTg1NTIySDEyVjQuNTAwMTlINy41VjMuMDAwMTlIOS4zNTQwN0M4LjUyMjU5IDIuMDUyMjQgNy4zMDYxMiAxLjQ4OTE2IDYgMS41MDAxOUMzLjUxNDcyIDEuNTAwMTkgMS41IDMuNTE0OSAxLjUgNi4wMDAxOUMxLjUgOC40ODU0NyAzLjUxNDcyIDEwLjUwMDIgNiAxMC41MDAyWiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},7016:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzQyNl8yMzYyKSI+IDxwYXRoIGQ9Ik02Ljc1IDEuNUgxMC41VjUuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNNS4yNSAxLjVIMS41VjUuMjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNNS4yNSAxMC41SDEuNVY2Ljc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgLz4gPHBhdGggZD0iTTYuNzUgMTAuNUgxMC41VjYuNzUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNMS41IDEuNUwxMC41IDEwLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8cGF0aCBkPSJNMTAuNSAxLjVMMS41IDEwLjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiAvPiA8L2c+IDxkZWZzPiA8Y2xpcFBhdGggaWQ9ImNsaXAwXzQyNl8yMzYyIj4gPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIgLz4gPC9jbGlwUGF0aD4gPC9kZWZzPiA8L3N2Zz4g"},6147:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ibWluaW1pemVfeDQwX21pcnJvcmVkIj4gPHBhdGggZD0iTTQuMDI0LDE0LjM0N2MtMC4wNTcsMC4xNzktMC4wMSwwLjM3NCwwLjEyMywwLjUwNmwxLjc5MywxLjc5M2wtMy42NDgsMy42NDhjLTAuMzg5LDAuMzg5LTAuMzg5LDEuMDI1LDAsMS40MTQgYzAuMzg5LDAuMzg5LDEuMDI1LDAuMzg5LDEuNDE0LDBsMy42NDgtMy42NDhsMS43OTMsMS43OTNjMC4xMzIsMC4xMzIsMC4zMjgsMC4xOCwwLjUwNiwwLjEyM2MwLjE3OC0wLjA1NywwLjMxLTAuMjA5LDAuMzQtMC4zOTQgbDEtNmMwLjAyNS0wLjE1OC0wLjAyNS0wLjMyMS0wLjE0LTAuNDM2Yy0wLjExNC0wLjExNC0wLjI3Ny0wLjE2NS0wLjQzNi0wLjE0bC02LDFDNC4yMzMsMTQuMDM3LDQuMDgxLDE0LjE2OSw0LjAyNCwxNC4zNDd6IE0xNC4zNDcsNC4wMjRjMC4xNzktMC4wNTcsMC4zNzQtMC4wMSwwLjUwNiwwLjEyM2wxLjc5MywxLjc5M2wzLjY0OC0zLjY0OGMwLjM4OS0wLjM4OSwxLjAyNS0wLjM4OSwxLjQxNCwwIGMwLjM4OSwwLjM4OSwwLjM4OSwxLjAyNSwwLDEuNDE0TDE4LjA2LDcuMzU0bDEuNzkzLDEuNzkzYzAuMTMyLDAuMTMyLDAuMTgsMC4zMjgsMC4xMjMsMC41MDZjLTAuMDU3LDAuMTc4LTAuMjA5LDAuMzEtMC4zOTQsMC4zNCBsLTYsMWMtMC4xNTgsMC4wMjUtMC4zMjEtMC4wMjUtMC40MzYtMC4xNGMtMC4xMTQtMC4xMTQtMC4xNjUtMC4yNzctMC4xNC0wLjQzNmwxLTZDMTQuMDM3LDQuMjMzLDE0LjE2OSw0LjA4MSwxNC4zNDcsNC4wMjR6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},9448:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjk2OTk0IDcuMDYwNUw1LjAzMDQ0IDZMNC4wNjA2OSA1LjAzMDI1SDcuMjE4OTRDOC42MjUxOSA1LjAzMDI1IDkuMDAwMTkgNi40NDQ3NSA5LjAwMDE5IDcuMjgwMjVDOS4wMDAxOSA3Ljg5NiA4LjgyNDY5IDguNDgzMjUgOC41MTcxOSA4Ljg5Mjc1QzguMjAwNjkgOS4zMTU3NSA3Ljc2MzQ0IDkuNTMwMjUgNy4yMTg5NCA5LjUzMDI1SDMuMDAwMTlWMTEuMDMwMkg3LjIxODk0QzguMjMyMTkgMTEuMDMwMiA5LjExODY5IDEwLjU5MDcgOS43MTcxOSA5Ljc5Mjc1QzEwLjIyMTkgOS4xMiAxMC41MDAyIDguMjI3NSAxMC41MDAyIDcuMjgwMjVDMTAuNTAwMiA1LjQxNjUgOS4zNzI5NCAzLjUzMDI1IDcuMjE4OTQgMy41MzAyNUg0LjA2MDY5TDUuMDMwNDQgMi41NjA1TDMuOTY5OTQgMS41TDEuNzE5OTQgMy43NUMxLjQyNjY5IDQuMDQzMjUgMS40MjY2OSA0LjUxNzI1IDEuNzE5OTQgNC44MTA1TDMuOTY5OTQgNy4wNjA1WiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},1140:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjEwODAiIHZpZXdCb3g9IjAgMCAxMDgwIDEwODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZGVzYz5DcmVhdGVkIHdpdGggRmFicmljLmpzIDUuMi40PC9kZXNjPiA8ZGVmcz4gPC9kZWZzPiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDU0MCA1NDApIiBpZD0iZGJkNzU1MWEtNWNhNy00YzVmLWFlOTgtNzE4OGI0YjNlZGViIiA+IDxyZWN0IHN0eWxlPSJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1kYXNob2Zmc2V0OiAwOyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogNDsgZmlsbDogcmdiKDI1NSwyNTUsMjU1KTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxOyB2aXNpYmlsaXR5OiBoaWRkZW47IiB2ZWN0b3ItZWZmZWN0PSJub24tc2NhbGluZy1zdHJva2UiIHg9Ii01NDAiIHk9Ii01NDAiIHJ4PSIwIiByeT0iMCIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgLz4gPC9nPiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDU0MCA1NDApIiBpZD0iM2ZlNzcxZGYtYjJiYy00NzRhLWE1NDAtYThlYWM4NTI1NzFlIiA+IDwvZz4gPGcgdHJhbnNmb3JtPSJtYXRyaXgoMCAtOTAgOTAgMCA1NDAgNTQwKSIgPiA8cGF0aCBzdHlsZT0ic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtZGFzaG9mZnNldDogMDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7IGZpbGw6IHJnYigyMDksMjEzLDIxOSk7IGZpbGwtcnVsZTogZXZlbm9kZDsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0iIHRyYW5zbGF0ZSgtNiwgLTYpIiBkPSJNIDAuNzUgMy44NTY2NiBMIDEuNzEzMzUgMi44OTMzMSBMIDYgNy4xNzk0MyBMIDEwLjI4NjcgMi44OTMzMSBMIDExLjI1IDMuODU2NjYgTCA2IDkuMTA2NjYgTCAwLjc1IDMuODU2NjYgWiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPiA8L2c+IDwvc3ZnPg=="},242:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic2VhcmNoIj4gPHBhdGggZD0iTTIyLjcwNywyMS4yOTNsLTUuNjgyLTUuNjgyQzE4LjI1OCwxNC4wNzEsMTksMTIuMTIyLDE5LDEwYzAtNC45NjItNC4wMzctOS05LTljLTQuOTYyLDAtOSw0LjAzOC05LDljMCw0Ljk2Myw0LjAzOCw5LDksOSBjMi4xMjIsMCw0LjA3MS0wLjc0Miw1LjYxMS0xLjk3NWw1LjY4Miw1LjY4MkMyMS40ODgsMjIuOTAyLDIxLjc0NCwyMywyMiwyM3MwLjUxMi0wLjA5OCwwLjcwNy0wLjI5MyBDMjMuMDk4LDIyLjMxNiwyMy4wOTgsMjEuNjg0LDIyLjcwNywyMS4yOTN6IE0xMCwxN2MtMy44NiwwLTctMy4xNDEtNy03YzAtMy44NiwzLjE0LTcsNy03YzMuODU5LDAsNywzLjE0LDcsNyBDMTcsMTMuODU5LDEzLjg1OSwxNywxMCwxN3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},1730:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic3Rhcl9vbiI+IDxwYXRoIGQ9Ik0yMi4xNDMsOC4yNjdsLTEuNTY5LTAuMjI4djBsLTQuODItMC43bC0yLjAxOC00LjA4NGMwLDAsMCwwLDAsMGwtMC44MzktMS42OTljLTAuMzY3LTAuNzQzLTEuNDI2LTAuNzQzLTEuNzkzLDAgbC0wLjgzOSwxLjY5OWMwLDAsMCwwLDAsMEw4LjI0Niw3LjM0TDIuNjc4LDguMTQ4YzAsMCwwLDAsMCwwTDEuODU3LDguMjY3Yy0wLjgyLDAuMTE5LTEuMTQ4LDEuMTI3LTAuNTU0LDEuNzA2bDAuNTk0LDAuNTc5bDAsMCBsNC4wMjgsMy45MjNsLTEuMDIyLDUuOTUyYzAsMCwwLDAsMCwwbC0wLjA2OSwwLjQwMmMtMC4xNCwwLjgxNywwLjcxNywxLjQ0LDEuNDUsMS4wNTRsMC42NDUtMC4zMzhsMCwwTDEyLDE4Ljg4Mmw0LjU5LDIuNDFsMCwwIGwxLjEyNSwwLjU5YzAuNzM0LDAuMzg1LDEuNTkxLTAuMjM4LDEuNDUtMS4wNTVsLTAuMjM0LTEuMzY0bDAsMGwtMC44NTctNC45OTFsMy44MjctMy43MjdsMCwwbDAuNzk2LTAuNzc1IEMyMy4yOTEsOS4zOTQsMjIuOTYzLDguMzg2LDIyLjE0Myw4LjI2N3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},640:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0ic2VsZWN0X3RleHQiPiA8cGF0aCBkPSJNMSw5aDJ2MkgxVjl6IE0xLDdoMlY1SDFWN3ogTTUsMjNoMnYtMkg1VjIzeiBNMSwzaDJWMUgxVjN6IE0xLDIzaDJ2LTJIMVYyM3ogTTExLDFIOXYyaDJWMXogTTE1LDFoLTJ2MmgyVjF6IE03LDFINXYyaDIgVjF6IE05LDIzaDJ2LTJIOVYyM3ogTTEsMTloMnYtMkgxVjE5eiBNMSwxNWgydi0ySDFWMTV6IE0yMSwxMWgyVjloLTJWMTF6IE0xMywyM2gydi0yaC0yVjIzeiBNMjEsMTVoMnYtMmgtMlYxNXogTTIxLDdoMlY1aC0yVjd6IE0yMSwxdjJoMlYxSDIxeiBNMjEsMTloMnYtMmgtMlYxOXogTTIxLDIzaDJ2LTJoLTJWMjN6IE0xNywyM2gydi0yaC0yVjIzeiBNMTcsM2gyVjFoLTJWM3ogTTE3Ljg5NSw3LjMwMyBDMTcuOTY1LDcuMjE5LDE4LDcuMDkzLDE4LDYuOTE4VjUuNTA0YzAtMC4xODktMC4wMzUtMC4zMjItMC4xMDUtMC4zOTJDMTcuODE4LDUuMDM1LDE3LjY4NSw1LDE3LjQ5Niw1SDE1LjVoLTAuNzc1aC01LjQ1SDguNSBINi41MDRDNi4zMjksNSw2LjE5Niw1LjAzNSw2LjExOSw1LjExMkM2LjAzNSw1LjE4Miw2LDUuMzE1LDYsNS41MDR2MS40MTRjMCwwLjE3NSwwLjAzNSwwLjMwMSwwLjExOSwwLjM4NSBjMC4wNzcsMC4wODQsMC4yMSwwLjExOSwwLjM4NSwwLjExOUg4LjVoMC43NzVoMS4yMTN2MTEuMDc0YzAsMC4xNzUsMC4wMzUsMC4zMDEsMC4xMTksMC4zODVDMTAuNjg0LDE4Ljk1OCwxMC44MTcsMTksMTAuOTkyLDE5IGgyLjAxNmMwLjE4OSwwLDAuMzIyLTAuMDQyLDAuMzk5LTAuMTE5YzAuMDctMC4wODQsMC4xMDUtMC4yMSwwLjEwNS0wLjM4NVY3LjQyMmgxLjIxM0gxNS41aDEuOTk2IEMxNy42ODUsNy40MjIsMTcuODE4LDcuMzg3LDE3Ljg5NSw3LjMwM3oiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},4365:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjUgMC43NUMxLjA4NTc5IDAuNzUgMC43NSAxLjA4NTc5IDAuNzUgMS41VjYuNzVDMC43NSA3LjE2NDIxIDEuMDg1NzkgNy41IDEuNSA3LjVIMy4zMjU1Mkw1LjA3OTUxIDEwLjQyMTFMNS4wODA4NyAxMC40MjM0QzUuMzg4MjkgMTAuOTMxMyA1Ljk0NTcyIDExLjI1IDYuNTQ3NSAxMS4yNUM3LjQ5NDIxIDExLjI1IDguMjU3NSAxMC40ODY3IDguMjU3NSA5LjU0VjguMjg3NUg5LjMzNzVDMTAuODAyIDguMjg3NSAxMS44Njg5IDYuOTEzMzYgMTEuNTIwOCA1LjQ5ODMyTDExLjUyMDIgNS40OTYwM0wxMC43NjMxIDIuNDYwMDNMMTAuNzYyOCAyLjQ1ODk2QzEwLjUxNSAxLjQ1ODU2IDkuNjE1OTEgMC43NSA4LjU4IDAuNzVIMy43NUgxLjVaTTIuMjUgNlYyLjI1SDNWNkgyLjI1Wk00LjUgNi41NDIxM0w2LjM2NDEzIDkuNjQ2NjVMNi4zNjQ1NSA5LjY0NzM1QzYuNDAyMjUgOS43MDkwNiA2LjQ3NDU1IDkuNzUgNi41NDc1IDkuNzVDNi42NjU3OSA5Ljc1IDYuNzU3NSA5LjY1ODI5IDYuNzU3NSA5LjU0VjcuNTM3NUM2Ljc1NzUgNy4xMjMyOSA3LjA5MzI5IDYuNzg3NSA3LjUwNzUgNi43ODc1SDkuMzM3NUM5LjgyMjY4IDYuNzg3NSAxMC4xODA2IDYuMzMyMjcgMTAuMDY0NSA1Ljg1NzY1TDEwLjA2NDIgNS44NTY2OUw5LjMwNzI5IDIuODIxNDhMOS4zMDY5MiAyLjgxOTk4QzkuMjI0MzQgMi40ODU5NCA4LjkyMzcyIDIuMjUgOC41OCAyLjI1SDQuNVY2LjU0MjEzWiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},9541:r=>{r.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjM2NDU1IDIuMzUyNjRMNi4zNjQxMiAyLjM1MzM1TDQuNSA1LjQ1Nzg3VjkuNzVIOC41OEM4LjkyMzcyIDkuNzUgOS4yMjQzNCA5LjUxNDA2IDkuMzA2OTEgOS4xODAwMkwxMC4wNjQyIDYuMTQzMzJMMTAuMDY0NCA2LjE0MjQ4QzEwLjE4MDcgNS42Njc4MSA5LjgyMjcxIDUuMjEyNSA5LjMzNzUgNS4yMTI1SDcuNTA3NUM3LjA5MzI5IDUuMjEyNSA2Ljc1NzUgNC44NzY3MSA2Ljc1NzUgNC40NjI1VjIuNDZDNi43NTc1IDIuMzQxNzEgNi42NjU3OSAyLjI1IDYuNTQ3NSAyLjI1QzYuNDc0NTUgMi4yNSA2LjQwMjI2IDIuMjkwOTQgNi4zNjQ1NSAyLjM1MjY0Wk0zIDkuNzVWNkgyLjI1VjkuNzVIM1pNMy4zMjU1MiA0LjVMNS4wNzk1MSAxLjU3ODkxTDUuMDgwODcgMS41NzY2NEM1LjM4ODI5IDEuMDY4NzQgNS45NDU3MyAwLjc1IDYuNTQ3NSAwLjc1QzcuNDk0MjIgMC43NSA4LjI1NzUgMS41MTMyOSA4LjI1NzUgMi40NlYzLjcxMjVIOS4zMzc1QzEwLjgwMiAzLjcxMjUgMTEuODY4OSA1LjA4NjY2IDExLjUyMDggNi41MDE2OUwxMS41MjAyIDYuNTAzOTlMMTAuNzYzMSA5LjUzOTk3TDEwLjc2MjkgOS41NDA3NkMxMC41MTUyIDEwLjU0MTMgOS42MTYwMSAxMS4yNSA4LjU4IDExLjI1SDEuNUMxLjA4NTc5IDExLjI1IDAuNzUgMTAuOTE0MiAwLjc1IDEwLjVWNS4yNUMwLjc1IDQuODM1NzkgMS4wODU3OSA0LjUgMS41IDQuNUgzLjMyNTUyWiIgZmlsbD0id2hpdGUiIC8+IDwvc3ZnPiA="},5512:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0iY2FyZXRfdXAiPiA8cGF0aCBkPSJNMTcsMTVjLTAuMjU2LDAtMC41MTItMC4wOTgtMC43MDctMC4yOTNMMTIsMTAuNDE0bC00LjI5Myw0LjI5M2MtMC4zOTEsMC4zOTEtMS4wMjMsMC4zOTEtMS40MTQsMHMtMC4zOTEtMS4wMjMsMC0xLjQxNCBsNS01YzAuMzkxLTAuMzkxLDEuMDIzLTAuMzkxLDEuNDE0LDBsNSw1YzAuMzkxLDAuMzkxLDAuMzkxLDEuMDIzLDAsMS40MTRDMTcuNTEyLDE0LjkwMiwxNy4yNTYsMTUsMTcsMTV6Ii8+IDwvZz4gPGcgaWQ9IkxheWVyXzEiPiA8L2c+IDwvc3ZnPiA="},3786:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0icHJvZmlsZSI+IDxwYXRoIGQ9Ik03LDZjMC0yLjc2MSwyLjIzOS01LDUtNXM1LDIuMjM5LDUsNXMtMi4yMzksNS01LDVTNyw4Ljc2MSw3LDZ6IE0yMS45NDgsMTguNjg0QzIwLjg2OCwxNS40NDMsMTcuMDE1LDEyLDEyLDEyIHMtOC44NjksMy40NDMtOS45NDksNi42ODRjLTAuMTIsMC4zNTktMC4wMjYsMC43NTYsMC4yNDIsMS4wMjNDNC40MTcsMjEuODMsNy44NjQsMjMsMTIsMjNjNC4xMzcsMCw3LjU4NC0xLjE3LDkuNzA3LTMuMjkzIEMyMS45NzUsMTkuNDM5LDIyLjA2OCwxOS4wNDMsMjEuOTQ4LDE4LjY4NHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},9610:r=>{r.exports="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8ZyBpZD0id2FybmluZyI+IDxwYXRoIGQ9Ik0yMS44NTcsMTguNDgybC05LTE1LjAzYy0wLjM2MS0wLjYwNC0xLjM1NC0wLjYwNC0xLjcxNSwwbC05LDE1LjAzYy0wLjE4NiwwLjMwOS0wLjE5LDAuNjk1LTAuMDEzLDEuMDEgQzIuMzA3LDE5LjgwNiwyLjY0LDIwLDMsMjBoMThjMC4zNiwwLDAuNjkyLTAuMTk0LDAuODctMC41MDhDMjIuMDQ4LDE5LjE3NywyMi4wNDMsMTguNzkyLDIxLjg1NywxOC40ODJ6IE0xMiwxOCBjLTAuNTUyLDAtMS0wLjQ0OC0xLTFjMC0wLjU1MiwwLjQ0OC0xLDEtMXMxLDAuNDQ4LDEsMUMxMywxNy41NTIsMTIuNTUyLDE4LDEyLDE4eiBNMTMsMTRjMCwwLjU1My0wLjQ0OCwxLTEsMXMtMS0wLjQ0Ny0xLTFWOCBjMC0wLjU1MiwwLjQ0OC0xLDEtMXMxLDAuNDQ4LDEsMVYxNHoiLz4gPC9nPiA8ZyBpZD0iTGF5ZXJfMSI+IDwvZz4gPC9zdmc+IA=="},1407:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const a=e(4769);t.Button=class{constructor(p){var c;this.updateLabel=i=>{this.render.querySelector(".mynah-button-label").replaceWith(a.DomBuilder.getInstance().build({type:"span",classNames:["mynah-button-label"],children:[i]}))},this.setEnabled=i=>{i?this.render.removeAttribute("disabled"):this.render.setAttribute("disabled","disabled")},this.render=a.DomBuilder.getInstance().build({type:"button",classNames:["mynah-button",...p.primary===!1?["mynah-button-secondary"]:[],...p.classNames!==void 0?p.classNames:[]],attributes:{...p.attributes},events:{...p.additionalEvents,click:p.onClick},children:[...p.icon!==void 0?[p.icon]:[],...p.label!==void 0?[{type:"span",classNames:["mynah-button-label"],children:[p.label]}]:[],...(c=p.children)!==null&&c!==void 0?c:[]]})}}},7853:function(r,t,e){"use strict";var a=this&&this.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=t.PARTS_CLASS_NAME_VISIBLE=t.PARTS_CLASS_NAME=t.highlightersWithTooltip=void 0;const p=e(4769),c=e(970),i=a(e(5937)),y=e(4083),n=e(8990),o=e(7019);t.highlightersWithTooltip={start:{markupStart:"<mark ",markupAttributes:u=>`marker-index=${u}`,markupEnd:" reference-tracker>"},end:{markup:"</mark>"}},t.PARTS_CLASS_NAME="typewriter-part",t.PARTS_CLASS_NAME_VISIBLE="typewriter";class d{constructor(C){var D;this.processNode=(v,m,I)=>{var E,x,M,k,j,L,U,B,W,Q;const z=v;if(((E=z.tagName)===null||E===void 0?void 0:E.toLowerCase())==="a"){const O=(x=z.getAttribute("href"))!==null&&x!==void 0?x:"";return p.DomBuilder.getInstance().build({type:"a",events:{click:ne=>{this.props.onLinkClick!==void 0&&this.props.onLinkClick(O,ne)}},attributes:{href:(M=z.getAttribute("href"))!==null&&M!==void 0?M:"",target:"_blank"},innerHTML:z.innerHTML})}if(((k=z.tagName)===null||k===void 0?void 0:k.toLowerCase())==="pre"&&z.querySelector("code")!==null||((j=z.tagName)===null||j===void 0?void 0:j.toLowerCase())==="code"){const O=((L=z.tagName)===null||L===void 0?void 0:L.toLowerCase())==="pre"||z.innerHTML.match(/\r|\n/)!==null,ne=((U=z.tagName)===null||U===void 0?void 0:U.toLowerCase())==="pre"?z.querySelector("code"):z,f=(W=Array.from((B=ne?.classList)!==null&&B!==void 0?B:[]).find(S=>S.match("language-")))===null||W===void 0?void 0:W.replace("language-",""),A=(Q=ne?.innerHTML)!==null&&Q!==void 0?Q:"",w=new n.SyntaxHighlighter({codeStringWithMarkup:(0,i.default)(A),language:f?.trim()!==""?f:I,keepHighlights:!0,showCopyOptions:O,block:O,onCopiedToClipboard:(S,H)=>{this.props.onCopiedToClipboard!=null&&this.props.onCopiedToClipboard(S,H,this.getReferenceTrackerInformationFromElement(w))},onInsertToCursorPosition:(S,H)=>{this.props.onInsertToCursorPosition!=null&&this.props.onInsertToCursorPosition(S,H,this.getReferenceTrackerInformationFromElement(w))}}).render;return this.props.useParts===!0&&w.classList.add(t.PARTS_CLASS_NAME),w}return z.childNodes.forEach(O=>{z.replaceChild(this.processNode(O,m),O)}),z},this.getReferenceTrackerInformationFromElement=v=>{var m;const I=(m=v.querySelector("code"))===null||m===void 0?void 0:m.cloneNode(!0);if(I!==void 0){const E=I.querySelectorAll("mark[reference-tracker]");if(E.length>0)return Array.from(E).map((x,M)=>{var k,j,L,U;const B=`__MARK${M}_${(0,o.generateUID)()}_START__`,W=p.DomBuilder.getInstance().build({type:"span",innerHTML:B});x.insertAdjacentElement("afterbegin",W);const Q=I.innerText.indexOf(B);W.remove();const z=(k=this.props.highlightRangeWithTooltip)===null||k===void 0?void 0:k[parseInt((j=x.getAttribute("marker-index"))!==null&&j!==void 0?j:"0")];return{...z,recommendationContentSpan:{start:Q,end:Q+(((L=z?.recommendationContentSpan.end)!==null&&L!==void 0?L:0)-((U=z?.recommendationContentSpan.start)!==null&&U!==void 0?U:0))}}})}return[]},this.showHighlightRangeTooltip=(v,m)=>{clearTimeout(this.highlightRangeTooltipTimeout),this.highlightRangeTooltipTimeout=setTimeout(()=>{var I;this.highlightRangeTooltip=new y.Overlay({background:!1,closeOnOutsideClick:!1,referenceElement:(I=v.currentTarget)!==null&&I!==void 0?I:v.target,removeOtherOverlays:!0,dimOutside:!1,verticalDirection:y.OverlayVerticalDirection.TO_TOP,horizontalDirection:y.OverlayHorizontalDirection.START_TO_RIGHT,children:[{type:"div",classNames:["mynah-ui-syntax-highlighter-highlight-tooltip"],children:[new d({body:m}).render]}]})},500)},this.hideHighlightRangeTooltip=()=>{var v;clearTimeout(this.highlightRangeTooltipTimeout),this.highlightRangeTooltip!==null&&((v=this.highlightRangeTooltip)===null||v===void 0||v.close(),this.highlightRangeTooltip=null)},this.getContentBodyChildren=v=>{let m=v.body;return v.body!==void 0&&v.highlightRangeWithTooltip!==void 0&&v.highlightRangeWithTooltip.length>0&&v.highlightRangeWithTooltip.forEach((I,E)=>{if(m!==void 0){const x=`${t.highlightersWithTooltip.start.markupStart}${t.highlightersWithTooltip.start.markupAttributes(E.toString())}${t.highlightersWithTooltip.start.markupEnd}`;let M=I.recommendationContentSpan.start+E*(x.length+t.highlightersWithTooltip.end.markup.length),k=M+x.length-I.recommendationContentSpan.start+I.recommendationContentSpan.end;k>m.length&&(M=m.length-1),k>m.length&&(k=m.length-1),m=m.slice(0,M)+x+m.slice(M),m=m.slice(0,k)+t.highlightersWithTooltip.end.markup+m.slice(k)}}),this.props.useParts===!0?c.marked.use({extensions:[{name:"text",renderer:I=>this.props.useParts===!0&&I.text.split(" ").map(E=>`<span class="${t.PARTS_CLASS_NAME}">${E}</span>`).join(" ")}]}):c.marked.use({extensions:[{name:"text",renderer:I=>I.text}]}),[...Array.from(p.DomBuilder.getInstance().build({type:"div",innerHTML:`${c.marked.parse(m,{breaks:!0})}`}).childNodes).map(I=>{const E=this.processNode(I,v.body);return E.querySelectorAll!==void 0&&Array.from(E.querySelectorAll("*:empty")).forEach(x=>{x.remove()}),E})]},this.props=C,this.render=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-card-body"],children:[...this.getContentBodyChildren(this.props),...(D=this.props.children)!==null&&D!==void 0?D:[]]}),Array.from(this.render.querySelectorAll("mark[reference-tracker]")).forEach(v=>{v.addEventListener("mouseenter",m=>{var I,E;const x=parseInt((I=m.target.getAttribute("marker-index"))!==null&&I!==void 0?I:"0");((E=C.highlightRangeWithTooltip)===null||E===void 0?void 0:E[x])!==void 0&&this.showHighlightRangeTooltip(m,C.highlightRangeWithTooltip[x].information)}),v.addEventListener("mouseleave",this.hideHighlightRangeTooltip)})}}t.CardBody=d},4977:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;const a=e(4769),p=e(7609);t.Card=class{constructor(c){var i,y,n;this.engagementStartTime=-1,this.totalMouseDistanceTraveled={x:0,y:0},this.resetEngagement=()=>{this.engagementStartTime=-1,this.totalMouseDistanceTraveled={x:0,y:0},this.previousMousePosition={x:0,y:0},this.mouseDownInfo={x:0,y:0,time:-1}},this.handleEngagement=o=>{var d;this.props.onCardEngaged!==void 0&&this.props.onCardEngaged({engagementDurationTillTrigger:new Date().getTime()-this.engagementStartTime,engagementType:o!==void 0?p.EngagementType.INTERACTION:p.EngagementType.TIME,totalMouseDistanceTraveled:this.totalMouseDistanceTraveled,selectionDistanceTraveled:Boolean((d=o?.x)!==null&&d!==void 0?d:0)&&Boolean(o?.y)?o:void 0}),this.resetEngagement()},this.props=c,this.render=a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-card",`padding-${(i=c.padding)!==null&&i!==void 0?i:"large"}`,c.border!==!1?"border":"",c.background!==!1?"background":"",...(y=c.classNames)!==null&&y!==void 0?y:[]],persistent:c.persistent,innerHTML:c.innerHTML,children:[...(n=c.children)!==null&&n!==void 0?n:[]],events:{...c.events,...c.onCardEngaged!==void 0?{mouseenter:o=>{this.engagementStartTime===-1&&(this.engagementStartTime=new Date().getTime(),this.previousMousePosition={x:o.clientX,y:o.clientY},this.totalMouseDistanceTraveled={x:0,y:0})},mousemove:o=>{this.engagementStartTime===-1&&(this.engagementStartTime=new Date().getTime()),this.totalMouseDistanceTraveled={x:this.totalMouseDistanceTraveled.x+Math.abs(o.clientX-this.previousMousePosition.x),y:this.totalMouseDistanceTraveled.y+Math.abs(o.clientY-this.previousMousePosition.y)},this.previousMousePosition={x:o.clientX,y:o.clientY}},mousedown:o=>{this.mouseDownInfo={x:o.clientX,y:o.clientY,time:new Date().getTime()}},mouseup:o=>{var d;const u=o.clientX,C=o.clientY,D=new Date().getTime();this.mouseDownInfo!==void 0&&(Math.abs(this.mouseDownInfo.x-u)>6||Math.abs(this.mouseDownInfo.y-C)>6)&&D-this.mouseDownInfo.time>300&&this.handleEngagement({x:Math.abs(this.mouseDownInfo.x-u),y:Math.abs(this.mouseDownInfo.y-C),selectedText:(d=window?.getSelection())===null||d===void 0?void 0:d.toString()})},mouseleave:()=>{const o=new Date().getTime();this.engagementStartTime!==-1&&o-this.engagementStartTime>3e3?this.handleEngagement():this.resetEngagement()}}:{}},attributes:c.attributes})}}},8892:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemCard=void 0;const a=e(4769),p=e(4601),c=e(6508),i=e(7609),y=e(4977),n=e(7853),o=e(9275),d=e(9674),u=e(7690),C=e(5369),D=e(4221),v=e(9456),m=e(7019);t.ChatItemCard=class{constructor(I){this.updateStack=[],this.typewriterItemIndex=0,this.previousTypewriterItemIndex=0,this.generateCard=()=>{var E;const x=a.DomBuilder.getInstance().build({type:"div",classNames:this.getCardClasses(),attributes:{messageId:(E=this.props.chatItem.messageId)!==null&&E!==void 0?E:"unknown"},children:[...this.props.chatItem.type===i.ChatItemType.ANSWER_STREAM?[new y.Card({children:[a.DomBuilder.getInstance().build({type:"div",persistent:!0,classNames:["mynah-chat-items-spinner"],children:[{type:"span"},{type:"div",children:[v.Config.getInstance().config.texts.spinnerText]}]})]}).render]:[...this.getCardContent()]]});return setTimeout(()=>{x.addClass("reveal")},this.props.chatItem.type===i.ChatItemType.PROMPT?10:200),x},this.getCardClasses=()=>{var E;const x=a.DomBuilder.getInstance().build({type:"span",innerHTML:typeof this.props.chatItem.body=="string"?this.props.chatItem.body:""}).innerText.trim()==="",M=x&&this.props.chatItem.followUp===void 0&&this.props.chatItem.relatedContent===void 0&&this.props.chatItem.type===i.ChatItemType.ANSWER;return["mynah-chat-item-card",`mynah-chat-item-${(E=this.props.chatItem.type)!==null&&E!==void 0?E:i.ChatItemType.ANSWER}`,...x?["mynah-chat-item-empty"]:[],...M?["mynah-chat-item-no-content"]:[]]},this.getCardContent=()=>{var E;return c.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId)===void 0?[]:[...c.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("showChatAvatars")===!0?[this.chatAvatar]:[],...this.props.chatItem.body!==void 0||this.props.chatItem.fileList!==void 0?[new y.Card({onCardEngaged:x=>{p.MynahUIGlobalEvents.getInstance().dispatch(i.MynahEventNames.CHAT_ITEM_ENGAGEMENT,{engagement:x,messageId:this.props.chatItem.messageId})},children:[(()=>{var x,M,k,j,L,U,B;const W={body:(x=this.props.chatItem.body)!==null&&x!==void 0?x:"",onLinkClick:(Q,z)=>{p.MynahUIGlobalEvents.getInstance().dispatch(i.MynahEventNames.LINK_CLICK,{messageId:this.props.chatItem.messageId,link:Q,event:z})}};if(this.props.chatItem.type===i.ChatItemType.CODE_RESULT&&this.props.chatItem.fileList!==void 0){const{filePaths:Q=[],deletedFiles:z=[]}=this.props.chatItem.fileList,O=(M=this.props.chatItem.body)!==null&&M!==void 0?M:"";this.contentBody=new n.CardBody({...W,body:"",children:[new D.ChatItemTreeViewWrapper({tabId:this.props.tabId,messageId:(k=this.props.chatItem.messageId)!==null&&k!==void 0?k:"",files:Q,deletedFiles:z,references:(j=this.props.chatItem.codeReference)!==null&&j!==void 0?j:[],referenceSuggestionLabel:O}).render]})}else this.contentBody=new n.CardBody({...W,useParts:this.props.chatItem.type===i.ChatItemType.ANSWER_STREAM,highlightRangeWithTooltip:this.props.chatItem.codeReference,children:this.props.chatItem.relatedContent!==void 0?[new u.ChatItemSourceLinksContainer({messageId:(L=this.props.chatItem.messageId)!==null&&L!==void 0?L:"unknown",tabId:this.props.tabId,relatedContent:(U=this.props.chatItem.relatedContent)===null||U===void 0?void 0:U.content,title:(B=this.props.chatItem.relatedContent)===null||B===void 0?void 0:B.title}).render]:[],onCopiedToClipboard:(Q,z,O)=>{p.MynahUIGlobalEvents.getInstance().dispatch(i.MynahEventNames.COPY_CODE_TO_CLIPBOARD,{messageId:this.props.chatItem.messageId,type:Q,text:z,referenceTrackerInformation:O})},onInsertToCursorPosition:(Q,z,O)=>{p.MynahUIGlobalEvents.getInstance().dispatch(i.MynahEventNames.INSERT_CODE_TO_CURSOR_POSITION,{messageId:this.props.chatItem.messageId,type:Q,text:z,referenceTrackerInformation:O})}});return this.contentBody.render})(),...this.props.chatItem.canBeVoted===!0&&this.props.chatItem.messageId!==void 0?[new C.ChatItemRelevanceVote({tabId:this.props.tabId,messageId:this.props.chatItem.messageId}).render]:[]]}).render]:"",((E=this.props.chatItem.followUp)===null||E===void 0?void 0:E.text)!==void 0?new d.ChatItemFollowUpContainer({tabId:this.props.tabId,chatItem:this.props.chatItem}).render:""]},this.getChatAvatar=()=>a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-icon-wrapper"],children:[new o.Icon({icon:this.props.chatItem.type===i.ChatItemType.PROMPT?o.MynahIcons.USER:o.MynahIcons.MYNAH}).render]}),this.getInsertedTypewriterPartsCss=()=>{var E,x;return a.DomBuilder.getInstance().build({type:"style",attributes:{type:"text/css"},persistent:!0,innerHTML:`
    ${new Array(Math.max(0,((E=this.typewriterItemIndex)!==null&&E!==void 0?E:0)-((x=this.previousTypewriterItemIndex)!==null&&x!==void 0?x:0))).fill(null).map((M,k)=>`
        .${this.typewriterId} .typewriter-part[index="${k+this.previousTypewriterItemIndex}"] {
          animation: none !important;
          opacity: 1 !important;
          visibility: visible !important;
        }

        `).join("")}
    `})},this.getInsertingTypewriterPartsCss=(E,x)=>a.DomBuilder.getInstance().build({type:"style",attributes:{type:"text/css"},innerHTML:`
        ${new Array(Math.max(0,E??0)).fill(null).map((M,k)=>`
            .${this.typewriterId} .typewriter-part[index="${k+this.typewriterItemIndex}"] {
              animation: typewriter 100ms ease-out forwards;
              animation-delay: ${k*x}ms !important;
            }
            `).join("")}
        `}),this.updateCard=()=>{if(this.updateTimer===void 0&&this.updateCardStack.length>0){const E=this.updateStack.shift();if(E!==void 0){this.props.chatItem={...this.props.chatItem,...E};const x=this.getCardContent(),M=Array.from(this.contentBody.render.querySelectorAll(".typewriter-part"));for(let L=0;L<M.length;L++)M[L].setAttribute("index",L.toString());this.typewriterId===void 0&&(this.typewriterId=`typewriter-card-${(0,m.generateUID)()}`),this.render.update({classNames:[...this.getCardClasses(),"reveal",this.typewriterId,"typewriter-animating"],children:[...x,this.getInsertedTypewriterPartsCss()]});const k=M.length-this.typewriterItemIndex,j=Math.min(50,Math.floor(500/k));this.render.insertChild("beforeend",this.getInsertingTypewriterPartsCss(k,j)),this.previousTypewriterItemIndex=this.typewriterItemIndex,this.typewriterItemIndex=M.length,this.updateTimer=setTimeout(()=>{this.render.removeClass("typewriter-animating"),this.render.insertChild("beforeend",this.getInsertedTypewriterPartsCss()),this.updateTimer=void 0,this.updateCard()},j*k)}}},this.updateCardStack=E=>{this.updateStack.push(E),this.updateCard()},this.props=I,this.chatAvatar=this.getChatAvatar(),c.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("showChatAvatars",E=>{E?(this.chatAvatar=this.getChatAvatar(),this.render.insertChild("afterbegin",this.chatAvatar)):this.chatAvatar.remove()}),this.render=this.generateCard()}}},9674:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemFollowUpContainer=void 0;const a=e(970),p=e(4769),c=e(4601),i=e(7609),y=e(9275),n=e(4083),o=e(4977),d=e(7853);t.ChatItemFollowUpContainer=class{constructor(u){var C,D,v,m;this.showCroppedFollowupText=(I,E)=>{E.trim()!==void 0&&(clearTimeout(this.followupTooltipTimeout),this.followupTooltipTimeout=setTimeout(()=>{const x=I.target;this.followupTooltip=new n.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:x,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:n.OverlayVerticalDirection.TO_TOP,horizontalDirection:n.OverlayHorizontalDirection.START_TO_RIGHT,children:[new o.Card({border:!1,children:[new d.CardBody({body:E}).render]}).render]})},250))},this.hideCroppedFollowupText=()=>{var I;clearTimeout(this.followupTooltipTimeout),this.followupTooltip!==null&&((I=this.followupTooltip)===null||I===void 0||I.close(),this.followupTooltip=null)},this.props=u,this.props.chatItem=u.chatItem,this.itemAddListenerId=c.MynahUIGlobalEvents.getInstance().addListener(i.MynahEventNames.CHAT_ITEM_ADD,I=>{I.tabId===this.props.tabId&&(this.render.remove(),this.hideCroppedFollowupText(),c.MynahUIGlobalEvents.getInstance().removeListener(i.MynahEventNames.CHAT_ITEM_ADD,this.itemAddListenerId))}),this.render=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-followup-question"],children:[{type:"div",classNames:["mynah-chat-item-followup-question-text"],children:[(D=(C=this.props.chatItem.followUp)===null||C===void 0?void 0:C.text)!==null&&D!==void 0?D:""]},{type:"div",classNames:["mynah-chat-item-followup-question-options-wrapper"],children:(m=(v=this.props.chatItem.followUp)===null||v===void 0?void 0:v.options)===null||m===void 0?void 0:m.map(I=>{var E;return{type:"div",classNames:["mynah-chat-item-followup-question-option",`mynah-chat-item-followup-question-option-status-${(E=I.status)!==null&&E!==void 0?E:"default"}`,I.disabled===!0?"mynah-chat-item-followup-question-option-disabled":""],children:[...I.icon!==void 0?[new y.Icon({icon:I.icon}).render]:[],I.pillText.length>40?`${I.pillText.substring(0,37)}...`:I.pillText],events:{...I.disabled!==!0?{click:x=>{var M,k;this.hideCroppedFollowupText(),c.MynahUIGlobalEvents.getInstance().removeListener(i.MynahEventNames.CHAT_ITEM_ADD,this.itemAddListenerId),c.MynahUIGlobalEvents.getInstance().dispatch(i.MynahEventNames.FOLLOW_UP_CLICKED,{tabId:this.props.tabId,messageId:this.props.chatItem.messageId,followUpOption:I}),!((M=this.render.parentElement)===null||M===void 0)&&M.hasClass("mynah-chat-item-empty")?(k=this.render.parentElement)===null||k===void 0||k.remove():this.render.remove()}}:{},...I.pillText.length>40||I.description!==void 0?{mouseover:x=>{let M=I.pillText.length>40?I.pillText:"";I.description!==void 0&&(M!==""&&(M+=`

`),M+=I.description),this.showCroppedFollowupText(x,M)},mouseleave:this.hideCroppedFollowupText}:{}}}})}]}),a.marked.use({extensions:[{name:"text",renderer:I=>I.text}]}),Array.from(this.render.getElementsByClassName("mynah-chat-item-followup-question-option")).forEach(I=>{I.innerHTML=(0,a.marked)(I.innerHTML,{breaks:!0}).replace("<p>","").replace("</p>","")}),Array.from(this.render.getElementsByTagName("a")).forEach(I=>{const E=I.href;I.onclick=x=>{c.MynahUIGlobalEvents.getInstance().dispatch(i.MynahEventNames.LINK_CLICK,{tabId:this.props.tabId,messageId:this.props.chatItem.messageId,link:E,event:x})}})}}},5369:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemRelevanceVote=void 0;const a=e(7609),p=e(4769),c=e(9275),i=e(4601),y=e(1407),n=e(9456);t.ChatItemRelevanceVote=class{constructor(o){this.handleVoteChange=d=>{i.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.CARD_VOTE,{messageId:this.props.messageId,tabId:this.props.tabId,vote:d});const u=[n.Config.getInstance().config.texts.feedbackThanks,...d===a.RelevancyVoteType.DOWN?[new y.Button({label:n.Config.getInstance().config.texts.feedbackReportButtonLabel,onClick:()=>{this.sendFeedbackListenerId===void 0&&(this.sendFeedbackListenerId=i.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.FEEDBACK_SET,C=>{C.messageId===this.props.messageId&&C.tabId===this.props.tabId&&(i.MynahUIGlobalEvents.getInstance().removeListener(a.MynahEventNames.FEEDBACK_SET,this.sendFeedbackListenerId),this.render.remove())})),i.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.SHOW_FEEDBACK_FORM,{tabId:this.props.tabId,messageId:this.props.messageId})},primary:!1}).render]:[]];this.render.replaceChildren(...u),d===a.RelevancyVoteType.UP&&setTimeout(()=>{this.render.remove()},3500)},this.props=o,this.votingId=`${this.props.tabId}-${this.props.messageId}`,this.render=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-card-votes-wrapper"],children:[{type:"div",classNames:["mynah-card-vote"],children:[{type:"input",events:{change:d=>{this.handleVoteChange(a.RelevancyVoteType.UP)}},attributes:{type:"radio",id:`${this.votingId}-vote-up`,name:`${this.votingId}-vote`,value:"up"},classNames:["mynah-vote-radio","mynah-vote-up-radio"]},{type:"input",events:{change:d=>{this.handleVoteChange(a.RelevancyVoteType.DOWN)}},attributes:{type:"radio",id:`${this.votingId}-vote-down`,name:`${this.votingId}-vote`,value:"down"},classNames:["mynah-vote-radio","mynah-vote-down-radio"]},{type:"label",attributes:{for:`${this.votingId}-vote-up`},classNames:["mynah-vote-label","mynah-vote-up"],children:[new c.Icon({icon:c.MynahIcons.THUMBS_UP}).render]},{type:"label",attributes:{for:`${this.votingId}-vote-down`},classNames:["mynah-vote-label","mynah-vote-down"],children:[new c.Icon({icon:c.MynahIcons.THUMBS_DOWN}).render]}]}]})}}},7690:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemSourceLinksContainer=void 0;const a=e(4769),p=e(4601),c=e(7609),i=e(1407),y=e(4977),n=e(9275),o=e(8948);t.ChatItemSourceLinksContainer=class{constructor(d){this.props=d,this.showMoreButtonBlock=new i.Button({classNames:["mynah-chat-item-card-related-content-show-more"],primary:!1,icon:new n.Icon({icon:n.MynahIcons.DOWN_OPEN}).render,onClick:()=>{p.MynahUIGlobalEvents.getInstance().dispatch(c.MynahEventNames.SHOW_MORE_WEB_RESULTS_CLICK,{messageId:this.props.messageId}),this.showMoreButtonBlock.render.remove(),this.render.addClass("expanded")},label:"Show more"}),this.props.relatedContent!==void 0&&(this.render=a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-related-content",this.props.relatedContent!==void 0&&this.props.relatedContent.length<=1?"expanded":""],children:[...this.props.title!==void 0?[{type:"span",classNames:["mynah-chat-item-card-related-content-title"],children:[this.props.title]}]:[],...this.props.relatedContent.map(u=>a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-card-related-content-item"],children:[new y.Card({background:!1,border:!1,padding:"none",children:[new o.SourceLinkHeader({sourceLink:u,showCardOnHover:!0,onClick:C=>{p.MynahUIGlobalEvents.getInstance().dispatch(c.MynahEventNames.SOURCE_LINK_CLICK,{messageId:this.props.messageId,link:u.url,event:C})}}).render]}).render]})),this.showMoreButtonBlock.render]}))}}},2932:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemTreeViewLicense=void 0;const a=e(9456),p=e(4769),c=e(7853),i=e(8029);t.ChatItemTreeViewLicense=class{constructor(y){this.buildDropdownChildren=n=>p.DomBuilder.getInstance().build({type:"ul",classNames:["mynah-chat-item-tree-view-license-container"],children:n.map(o=>({type:"li",children:[new c.CardBody({body:o.information}).render]}))}),y.references.length!==0?this.render=new i.CollapsibleContent({title:a.Config.getInstance().config.texts.codeSuggestionWithReferenceTitle,classNames:["mynah-chat-item-tree-view-license"],children:[this.buildDropdownChildren(y.references)]}).render:this.render=p.DomBuilder.getInstance().build({type:"span",classNames:["empty"]})}}},4221:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemTreeViewWrapper=void 0;const a=e(9456),p=e(4769),c=e(7831),i=e(4469),y=e(2932);t.ChatItemTreeViewWrapper=class{constructor(n){const o=new y.ChatItemTreeViewLicense({referenceSuggestionLabel:n.referenceSuggestionLabel,references:n.references}).render,d=new i.ChatItemTreeView({messageId:n.messageId,tabId:n.tabId,node:(0,c.fileListToTree)(n.files,n.deletedFiles)}).render;this.render=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-tree-view-wrapper"],children:[{type:"div",classNames:["mynah-chat-item-tree-view-wrapper-container"],children:[{type:"div",classNames:["mynah-chat-item-tree-view-wrapper-title"],children:[{type:"h4",children:[`${a.Config.getInstance().config.texts.codeSuggestions}`]},{type:"span",children:[`${n.files.length} ${a.Config.getInstance().config.texts.files}`]}]},o,d]},{type:"p",children:[a.Config.getInstance().config.texts.clickFileToViewDiff]}]})}}},4469:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatItemTreeView=void 0;const a=e(4769),p=e(4601),c=e(7609),i=e(1407),y=e(9275);class n{constructor(d){var u;this.node=d.node,this.tabId=d.tabId,this.messageId=d.messageId,this.isOpen=!0,this.depth=(u=d.depth)!==null&&u!==void 0?u:0,this.render=a.DomBuilder.getInstance().build({type:"div",classNames:this.getClassNames(),children:[...this.node.type==="folder"?this.buildFolderNode():this.buildFileNode()]})}getClassNames(){return["mynah-chat-item-tree-view",this.node.type==="file"?"mynah-chat-tree-view-file":"mynah-chat-tree-view-folder-"+(this.isOpen?"open":"closed")]}updateTree(){this.render.update({classNames:this.getClassNames(),children:[...this.node.type==="folder"?this.buildFolderNode():this.buildFileNode()]})}buildFolderChildren(){return this.node.type!=="folder"?[]:this.isOpen?this.node.children.map(d=>a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-item-pull-request-item"],children:[new n({node:d,depth:this.depth+1,tabId:this.tabId,messageId:this.messageId}).render]})):[]}buildFolderNode(){if(this.node.type!=="folder")return[];const d=new i.Button({icon:new y.Icon({icon:this.isOpen?y.MynahIcons.DOWN_OPEN:y.MynahIcons.RIGHT_OPEN}).render,label:`${this.node.name} ${this.node.children.length} files`,primary:!1,onClick:u=>{(0,p.cancelEvent)(u),this.isOpen=!this.isOpen,this.updateTree()}}).render;return d.style.paddingLeft=15*this.depth+"px",[d,...this.buildFolderChildren()]}buildFileNode(){if(this.node.type!=="file")return[];const d=new i.Button({icon:new y.Icon({icon:y.MynahIcons.DOC}).render,label:this.node.name,primary:!1,onClick:()=>{p.MynahUIGlobalEvents.getInstance().dispatch(c.MynahEventNames.OPEN_DIFF,{tabId:this.tabId,messageId:this.messageId,filePath:this.node.filePath,deleted:this.node.deleted})}}).render;return d.style.paddingLeft=15*this.depth+"px",this.node.deleted&&(d.style.textDecoration="line-through"),[d]}}t.ChatItemTreeView=n},2990:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPromptInputCommand=void 0;const a=e(4769);t.ChatPromptInputCommand=class{constructor(p){this.setCommand=c=>{c.trim()===""?this.render.addClass("hidden"):this.render.removeClass("hidden"),this.promptTextInputCommand.innerText=c},this.props=p,this.promptTextInputCommand=a.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-input-command-text"],events:{click:this.props.onRemoveClick}}),this.render=a.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-input-command-wrapper",this.props.command===""?"hidden":""],children:[this.promptTextInputCommand]})}}},6200:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPromptInputInfo=void 0;const a=e(970),p=e(4769),c=e(6508),i=e(7853),y=e(4601),n=e(7609);t.ChatPromptInputInfo=class{constructor(o){var d,u;this.linkClick=(C,D)=>{y.MynahUIGlobalEvents.getInstance().dispatch(n.MynahEventNames.INFO_LINK_CLICK,{link:C,event:D})},a.marked.use({extensions:[{name:"text",renderer:C=>C.text}]}),c.MynahUITabsStore.getInstance().addListenerToDataStore(o.tabId,"promptInputInfo",C=>{var D,v;this.render.update({children:[new i.CardBody({onLinkClick:this.linkClick,body:(v=(D=c.MynahUITabsStore.getInstance().getTabDataStore(o.tabId))===null||D===void 0?void 0:D.getValue("promptInputInfo"))!==null&&v!==void 0?v:""}).render]})}),this.render=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-input-info"],children:[new i.CardBody({onLinkClick:this.linkClick,body:(u=(d=c.MynahUITabsStore.getInstance().getTabDataStore(o.tabId))===null||d===void 0?void 0:d.getValue("promptInputInfo"))!==null&&u!==void 0?u:""}).render]})}}},967:function(r,t,e){"use strict";var a=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(t,"__esModule",{value:!0}),t.ChatPromptInput=t.MAX_USER_INPUT_THRESHOLD=t.MAX_USER_INPUT=void 0;const p=e(4769),c=e(7609),i=e(4601),y=e(4083),n=e(6508),o=a(e(5573)),d=e(2990),u=e(9689),C=e(3883),D=e(9123);t.MAX_USER_INPUT=4e3,t.MAX_USER_INPUT_THRESHOLD=96,t.ChatPromptInput=class{constructor(v){this.commandSelectorOpen=!1,this.selectedCommand="",this.updateAvailableCharactersIndicator=()=>{const m=this.promptTextInput.promptTextInputMaxLength-this.promptTextInput.getTextInputValue().trim().length;this.remainingCharsIndicator.update({innerHTML:`${Math.max(0,m)}/${t.MAX_USER_INPUT}`})},this.handleInputKeydown=m=>{var I,E,x,M;if(this.commandSelectorOpen){const k=[c.KeyMap.ENTER,c.KeyMap.ESCAPE,c.KeyMap.SPACE,c.KeyMap.TAB,c.KeyMap.BACK_SLASH,c.KeyMap.SLASH],j=[c.KeyMap.ARROW_UP,c.KeyMap.ARROW_DOWN];if(k.includes(m.key)){if(m.preventDefault(),m.key===c.KeyMap.ENTER||m.key===c.KeyMap.TAB||m.key===c.KeyMap.SPACE){let L;this.filteredCommandsList.length>0&&(L=(I=this.commandSelector.render.querySelector(".target-command"))!==null&&I!==void 0?I:this.commandSelector.render.querySelector(".mynah-chat-command-selector-command")),this.handleCommandSelection({command:(E=L?.getAttribute("command"))!==null&&E!==void 0?E:"",placeholder:(x=L?.getAttribute("placeholder"))!==null&&x!==void 0?x:void 0})}this.commandSelector!==void 0&&(m.key===c.KeyMap.ESCAPE&&this.clearTextArea(!0),this.commandSelector.close())}else if(j.includes(m.key)){m.preventDefault();const L=Array.from(this.commandSelector.render.querySelectorAll(".mynah-chat-command-selector-command"));let U,B=L.findIndex(W=>W.classList.contains("target-command"));B=B===-1?L.length:B,U=m.key===c.KeyMap.ARROW_UP?B>0?B-1:L.length-1:B<L.length-1?B+1:0,(M=L[B])===null||M===void 0||M.classList.remove("target-command"),L[U].classList.add("target-command"),L[U].getAttribute("prompt")!==null&&this.promptTextInput.updateTextInputValue(L[U].getAttribute("prompt"))}else this.commandSelector!==void 0&&setTimeout(()=>{this.promptTextInput.getTextInputValue()===""?this.commandSelector.close():(this.filteredCommandsList=[],[...this.quickActionCommands].forEach(L=>{var U;const B={...L};try{const W=new RegExp((U=`${this.promptTextInput.getTextInputValue().substring(1)}`)!==null&&U!==void 0?U:"","gi");B.commands=B.commands.filter(Q=>Q.command.match(W)),B.commands.length>0&&this.filteredCommandsList.push(B)}catch{}}),this.filteredCommandsList.length>0?(this.commandSelector.toggleHidden(!1),this.commandSelector.updateContent([this.getQuickCommandActions(this.filteredCommandsList)])):this.commandSelector.toggleHidden(!0))},1)}else this.quickActionCommands=n.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("quickActionCommands"),m.key===c.KeyMap.BACKSPACE&&this.selectedCommand!==""&&this.promptTextInput.getTextInputValue()===""?((0,i.cancelEvent)(m),this.clearTextArea(!0)):m.key!==c.KeyMap.ENTER||m.shiftKey||m.ctrlKey?this.selectedCommand===""&&this.quickActionCommands.length>0&&m.key===c.KeyMap.SLASH&&this.promptTextInput.getTextInputValue()===""&&(this.commandSelector!==void 0&&this.commandSelector.close(),this.filteredCommandsList=[...this.quickActionCommands],this.commandSelector=new y.Overlay({closeOnOutsideClick:!0,referenceElement:this.render.querySelector(".mynah-chat-prompt"),dimOutside:!1,stretchWidth:!0,verticalDirection:y.OverlayVerticalDirection.TO_TOP,horizontalDirection:y.OverlayHorizontalDirection.START_TO_RIGHT,onClose:()=>{this.commandSelectorOpen=!1},children:[this.getQuickCommandActions(this.quickActionCommands)]}),this.commandSelectorOpen=!0):((0,i.cancelEvent)(m),this.sendPrompt())},this.getQuickCommandActions=m=>p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-command-selector"],children:m.map(I=>p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-command-selector-group"],children:[...I.groupName!==void 0?[p.DomBuilder.getInstance().build({type:"h4",classNames:["mynah-chat-command-selector-group-title"],children:[I.groupName]})]:[],...I.commands.map(E=>p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-command-selector-command"],attributes:{...E},events:{click:()=>{this.handleCommandSelection(E)}},children:[{type:"div",classNames:["mynah-chat-command-selector-command-name"],children:[E.command]},...E.description!==void 0?[{type:"div",classNames:["mynah-chat-command-selector-command-description"],children:[E.description]}]:[]]}))]}))}),this.handleCommandSelection=m=>{this.selectedCommand=m.command,this.promptTextInput.updateTextInputValue(""),m.placeholder!==void 0?(this.promptTextInputCommand.setCommand(this.selectedCommand),this.promptTextInput.updateTextInputPlaceholder(m.placeholder)):this.sendPrompt(),this.commandSelector.close(),this.promptTextInput.focus()},this.clearTextArea=m=>{this.selectedCommand="",this.promptTextInput.clear(),this.promptTextInput.updateTextInputMaxLength(t.MAX_USER_INPUT),this.promptTextInputCommand.setCommand(""),m!==!0&&(this.attachmentWrapper.clear(),this.codeSnippet.clear(),this.attachment=void 0),this.updateAvailableCharactersIndicator()},this.addText=m=>{i.MynahUIGlobalEvents.getInstance().dispatch(c.MynahEventNames.ADD_CODE_SNIPPET,{textToAdd:m,tabId:this.props.tabId})},this.sendPrompt=()=>{const m=this.promptTextInput.getTextInputValue();if(m.trim()!==""||this.selectedCommand.trim()!==""){const I=n.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("selectedCodeSnippet");i.MynahUIGlobalEvents.getInstance().dispatch(c.MynahEventNames.CHAT_PROMPT,{tabId:this.props.tabId,prompt:{prompt:m+(I??""),escapedPrompt:(0,o.default)(m+(I??"")),...this.selectedCommand!==""?{command:this.selectedCommand}:{},attachment:this.attachment}}),this.clearTextArea()}},this.props=v,this.quickActionCommands=n.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("quickActionCommands"),this.promptTextInputCommand=new d.ChatPromptInputCommand({command:"",onRemoveClick:()=>{this.selectedCommand="",this.promptTextInputCommand.setCommand("")}}),this.promptTextInput=new D.PromptTextInput({initMaxLength:t.MAX_USER_INPUT,tabId:this.props.tabId,onKeydown:this.handleInputKeydown,onInput:()=>this.updateAvailableCharactersIndicator()}),this.remainingCharsIndicator=p.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-chars-indicator"],innerHTML:`${t.MAX_USER_INPUT-this.promptTextInput.getTextInputValue().length}/${t.MAX_USER_INPUT}`}),this.sendButton=new C.SendButton({tabId:this.props.tabId,onClick:()=>{this.sendPrompt()}}),this.codeSnippet=new u.CodeSnippet({tabId:this.props.tabId}),this.attachmentWrapper=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-attachment-wrapper"],children:[this.codeSnippet.render]}),this.render=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-wrapper"],children:[{type:"div",classNames:["mynah-chat-prompt"],children:[{type:"div",classNames:["mynah-chat-prompt-input-wrapper"],children:[this.promptTextInputCommand.render,this.promptTextInput.render,this.sendButton.render]},this.attachmentWrapper]},this.remainingCharsIndicator]}),i.MynahUIGlobalEvents.getInstance().addListener(c.MynahEventNames.ADD_CODE_SNIPPET,m=>{var I,E;if(this.props.tabId===m.tabId){const x=this.promptTextInput.getTextInputValue().trim().length,M=t.MAX_USER_INPUT+t.MAX_USER_INPUT_THRESHOLD-x,k=(E=(I=m.textToAdd)!==null&&I!==void 0?I:"")===null||E===void 0?void 0:E.slice(0,M);this.codeSnippet.updateSelectedCodeSnippet(k),this.promptTextInput.updateTextInputMaxLength(Math.min(t.MAX_USER_INPUT,Math.max(t.MAX_USER_INPUT_THRESHOLD,t.MAX_USER_INPUT+t.MAX_USER_INPUT_THRESHOLD-k.length))),this.updateAvailableCharactersIndicator()}}),i.MynahUIGlobalEvents.getInstance().addListener(c.MynahEventNames.REMOVE_CODE_SNIPPET,()=>{this.promptTextInput.updateTextInputMaxLength(t.MAX_USER_INPUT),this.codeSnippet.clear(),this.updateAvailableCharactersIndicator()}),setTimeout(()=>{this.promptTextInput.focus()},500)}}},8347:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChatWrapper=void 0;const a=e(9456),p=e(4769),c=e(6508),i=e(7609),y=e(1407),n=e(9275),o=e(8892),d=e(967),u=e(6200);t.ChatWrapper=class{constructor(C){var D;this.insertChatItem=m=>{var I,E;const x=new o.ChatItemCard({tabId:this.props.tabId,chatItem:m});m.type===i.ChatItemType.ANSWER_STREAM?((I=this.lastChatItemCard)===null||I===void 0||I.render.addClass("stream-ended"),this.lastChatItemCard=x):m.type!==i.ChatItemType.ANSWER&&m.type!==i.ChatItemType.PROMPT&&m.type!==i.ChatItemType.AI_PROMPT&&m.type!==i.ChatItemType.SYSTEM_PROMPT||m.body===void 0||((E=this.lastChatItemCard)===null||E===void 0||E.render.addClass("stream-ended"),this.lastChatItemCard=null),this.chatItemsContainer.insertChild("afterbegin",x.render),m.type!==i.ChatItemType.PROMPT&&m.type!==i.ChatItemType.SYSTEM_PROMPT||(this.chatItemsContainer.scrollTop=this.chatItemsContainer.scrollHeight+500)},this.updateLastChatAnswer=m=>{this.lastChatItemCard!==null&&this.lastChatItemCard.updateCardStack(m)},this.addToPrompt=m=>{this.promptInput.addText(m)},this.props=C,c.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("chatItems",m=>{const I=m[m.length-1];if(this.chatItemsContainer.children.length===m.length){const E=this.chatItemsContainer.children.item(0);E!==null&&(E.innerHTML=new o.ChatItemCard({tabId:this.props.tabId,chatItem:I}).render.innerHTML)}else m.length>0?this.chatItemsContainer.children.length===0?m.forEach(E=>{this.insertChatItem(E)}):this.insertChatItem(I):this.chatItemsContainer.clear(!0)}),c.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("loadingChat",m=>{m?this.render.addClass("loading"):this.render.removeClass("loading")}),c.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("cancelButtonWhenLoading",m=>{m?this.intermediateBlockContainer.removeClass("hidden"):this.intermediateBlockContainer.addClass("hidden")}),this.promptInput=new d.ChatPromptInput({tabId:this.props.tabId}),this.promptInputElement=this.promptInput.render,this.promptInfo=new u.ChatPromptInputInfo({tabId:this.props.tabId}).render,this.chatItemsContainer=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-items-container"],persistent:!0,children:[]}),this.intermediateBlockContainer=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-overflowing-intermediate-block",...c.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("cancelButtonWhenLoading")===!1?["hidden"]:[]],children:[...((D=this.props)===null||D===void 0?void 0:D.onStopChatResponse)!==void 0?[new y.Button({classNames:["mynah-chat-stop-chat-response-button"],label:a.Config.getInstance().config.texts.stopGenerating,icon:new n.Icon({icon:n.MynahIcons.BLOCK}).render,onClick:()=>{var m,I;((m=this.props)===null||m===void 0?void 0:m.onStopChatResponse)!==void 0&&((I=this.props)===null||I===void 0||I.onStopChatResponse(this.props.tabId))}}).render]:[]]}),this.render=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-wrapper"],attributes:{"mynah-tab-id":this.props.tabId},persistent:!0,children:[{type:"style",children:[`
          .mynah-nav-tabs-wrapper[selected-tab="${this.props.tabId}"] + .mynah-ui-tab-contents-wrapper > .mynah-chat-wrapper[mynah-tab-id="${this.props.tabId}"]{
              display: flex;
            }
            .mynah-nav-tabs-wrapper[selected-tab="${this.props.tabId}"] + .mynah-ui-tab-contents-wrapper > .mynah-chat-wrapper:not([mynah-tab-id="${this.props.tabId}"]) * {
              pointer-events: none !important;
            }`]},this.chatItemsContainer,this.intermediateBlockContainer,this.promptInputElement,this.promptInfo]});const v=c.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("chatItems");v.length>0&&v.forEach(m=>this.insertChatItem(m))}}},277:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeSnippetWidget=void 0;const a=e(4083),p=e(9275),c=e(1407),i=e(4601),y=e(7609),n=e(4977),o=e(7853);t.CodeSnippetWidget=class{constructor(d){this.showPreviewOverLay=u=>{this.previewOverlay=new a.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:this.render,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:a.OverlayVerticalDirection.TO_TOP,horizontalDirection:a.OverlayHorizontalDirection.START_TO_RIGHT,children:[new n.Card({border:!1,classNames:["mynah-prompt-input-snippet-attachment-overlay"],children:[new o.CardBody({body:u}).render]}).render]})},this.closePreviewOverLay=()=>{this.previewOverlay!==void 0&&(this.previewOverlay.close(),this.previewOverlay=void 0)},this.renderCodeSnippetWidget=u=>new n.Card({padding:"none",events:{mouseenter:()=>{this.showPreviewOverLay(u)},mouseleave:()=>{this.closePreviewOverLay()}},classNames:["snippet-card-container"],children:[new o.CardBody({body:u}).render,new c.Button({classNames:["code-snippet-close-button"],onClick:C=>{(0,i.cancelEvent)(C),i.MynahUIGlobalEvents.getInstance().dispatch(y.MynahEventNames.REMOVE_CODE_SNIPPET,this.props.tabId),this.closePreviewOverLay()},icon:new p.Icon({icon:p.MynahIcons.CANCEL}).render,primary:!1}).render]}).render,this.clear=()=>{this.closePreviewOverLay()},this.props=d,this.render=this.renderCodeSnippetWidget(this.props.markdownText)}}},9689:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeSnippet=void 0;const a=e(4769),p=e(6508),c=e(277);t.CodeSnippet=class{constructor(i){this.lastCodeSnippet="",this.updateSelectedCodeSnippet=y=>{var n,o,d,u,C,D,v;this.snippetWidget!==void 0&&this.snippetWidget.clear(),this._render.clear(),this.lastCodeSnippet=y??"",y!==void 0&&y!==""&&(this.snippetWidget=new c.CodeSnippetWidget({tabId:this._props.tabId,markdownText:y}),this._render.insertChild("afterbegin",this.snippetWidget.render),((o=(n=this._render.getBoundingClientRect())===null||n===void 0?void 0:n.height)!==null&&o!==void 0?o:0)<((D=(C=(u=(d=this._render.getElementsByTagName("code"))===null||d===void 0?void 0:d[0])===null||u===void 0?void 0:u.getBoundingClientRect())===null||C===void 0?void 0:C.height)!==null&&D!==void 0?D:0)&&this._render.children[0].classList.add("vertical-overflow")),(v=p.MynahUITabsStore.getInstance().getTabDataStore(this._props.tabId))===null||v===void 0||v.updateStore({selectedCodeSnippet:y})},this.clear=()=>{var y;this.lastCodeSnippet="",this.snippetWidget!==void 0&&this.snippetWidget.clear(),this.snippetWidget=void 0,this._render.clear(),(y=p.MynahUITabsStore.getInstance().getTabDataStore(this._props.tabId))===null||y===void 0||y.updateStore({selectedCodeSnippet:void 0})},this._props=i,this._render=a.DomBuilder.getInstance().build({type:"div",classNames:["outer-container"],persistent:!0})}get render(){return this._render}}},9123:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PromptTextInput=void 0;const a=e(4769),p=e(6508),c=e(967);t.PromptTextInput=class{constructor(i){this.updatePromptTextInputSizer=()=>{this.promptTextInput.value.trim()!==""?this.render.removeClass("no-text"):this.render.addClass("no-text"),this.promptTextInputSizer.innerHTML=this.promptTextInput.value.replace(/\n/g,"</br>&nbsp;")},this.clear=()=>{this.promptTextInputSizer.innerHTML="",this.updateTextInputValue("");const n=p.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputPlaceholder");this.updateTextInputPlaceholder(n),this.render.addClass("no-text")},this.focus=()=>{this.promptTextInput.focus(),this.updateTextInputValue("")},this.getTextInputValue=()=>this.promptTextInput.value,this.updateTextInputValue=n=>{this.promptTextInput.value=n},this.updateTextInputMaxLength=n=>{this.promptTextInputMaxLength=n,this.promptTextInput.update({attributes:{maxlength:n.toString()}})},this.updateTextInputPlaceholder=n=>{this.promptTextInput.update({attributes:{placeholder:n}})},this.props=i,this.promptTextInputMaxLength=i.initMaxLength;const y=p.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputDisabledState");this.promptTextInputSizer=a.DomBuilder.getInstance().build({type:"span",classNames:["mynah-chat-prompt-input","mynah-chat-prompt-input-sizer"]}),this.promptTextInput=a.DomBuilder.getInstance().build({type:"textarea",classNames:["mynah-chat-prompt-input"],attributes:{...y?{disabled:"disabled"}:{},tabindex:"1",rows:"1",maxlength:c.MAX_USER_INPUT.toString(),type:"text",placeholder:p.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).getValue("promptInputPlaceholder"),value:""},events:{keydown:this.props.onKeydown,input:n=>{this.updatePromptTextInputSizer(),this.props.onInput!==void 0&&this.props.onInput(n)},focus:()=>{this.render.addClass("input-has-focus")},blur:()=>{this.render.removeClass("input-has-focus")}}}),this.render=a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-chat-prompt-input-inner-wrapper","no-text"],children:[this.promptTextInputSizer,this.promptTextInput]}),p.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("promptInputDisabledState",n=>{n?this.promptTextInput.setAttribute("disabled","disabled"):(this.promptTextInput.removeAttribute("disabled"),this.promptTextInput.focus())}),p.MynahUITabsStore.getInstance().getTabDataStore(this.props.tabId).subscribe("promptInputPlaceholder",n=>{n!==void 0&&this.promptTextInput.update({attributes:{placeholder:n}})})}}},3883:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SendButton=void 0;const a=e(6508),p=e(1407),c=e(9275);t.SendButton=class{constructor(i){this._props=i;const y=a.MynahUITabsStore.getInstance().getTabDataStore(this._props.tabId).getValue("promptInputDisabledState");this._render=new p.Button({classNames:["mynah-icon-button","mynah-chat-prompt-button"],attributes:{...y?{disabled:"disabled"}:{},tabindex:"5"},icon:new c.Icon({icon:c.MynahIcons.ENVELOPE_SEND}).render,onClick:()=>{this._props.onClick()}}).render,a.MynahUITabsStore.getInstance().getTabDataStore(this._props.tabId).subscribe("promptInputDisabledState",n=>{n?this.render.setAttribute("disabled","disabled"):this.render.removeAttribute("disabled")})}get render(){return this._render}}},8029:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CollapsibleContent=void 0;const a=e(4769),p=e(7019),c=e(9275);t.CollapsibleContent=class{constructor(i){this.uid=(0,p.generateUID)(),this.props={initialCollapsedState:!0,onCollapseStateChange:()=>{},classNames:[],...i},this.icon=new c.Icon({icon:this.props.initialCollapsedState?c.MynahIcons.RIGHT_OPEN:c.MynahIcons.DOWN_OPEN}).render,this.render=a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-collapsible-content-wrapper",...this.props.classNames],children:[{type:"input",classNames:["mynah-collapsible-content-checkbox"],attributes:{type:"checkbox",name:this.uid,id:this.uid,...this.props.initialCollapsedState?{checked:"checked"}:{}},events:{change:y=>{const n=y.currentTarget.checked,o=new c.Icon({icon:n===!0?c.MynahIcons.RIGHT_OPEN:c.MynahIcons.DOWN_OPEN}).render;this.icon.replaceWith(o),this.icon=o,this.props.onCollapseStateChange(n)}}},{type:"label",classNames:["mynah-collapsible-content-label"],attributes:{for:this.uid},children:[{type:"div",classNames:["mynah-collapsible-content-label-title-wrapper"],children:[this.icon,{type:"span",classNames:["mynah-collapsible-content-label-title-text"],children:[this.props.title]}]},{type:"div",classNames:["mynah-collapsible-content-label-content-wrapper"],children:this.props.children}]}]})}}},1223:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeedbackFormComment=void 0;const a=e(4769);t.FeedbackFormComment=class{constructor(p){var c;this.getComment=()=>this.render.value,this.clear=()=>{this.render.value=""},this.render=a.DomBuilder.getInstance().build({type:"textarea",events:{keyup:i=>{p.onChange!==void 0&&p.onChange(this.render.value)}},classNames:["mynah-feedback-form-comment"],attributes:{value:(c=p.initComment)!==null&&c!==void 0?c:""}})}}},8054:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeedbackForm=void 0;const a=e(7609),p=e(4769),c=e(1407),i=e(1223),y=e(4601),n=e(9275),o=e(9456);t.FeedbackForm=class{constructor(d){var u;this.feedbackPayload={messageId:"",selectedOption:"",tabId:"",comment:""},this.onFeedbackSet=C=>{y.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.FEEDBACK_SET,C)},this.close=()=>{this.feedbackComment.clear(),this.feedbackSelect.value=o.Config.getInstance().config.feedbackOptions[0].value,this.feedbackPayload={messageId:"",selectedOption:o.Config.getInstance().config.feedbackOptions[0].value,tabId:"",comment:""},this.feedbackFormWrapper.removeClass("mynah-feedback-form-show")},this.show=()=>{this.feedbackFormWrapper.addClass("mynah-feedback-form-show")},this.feedbackPayload={selectedOption:o.Config.getInstance().config.feedbackOptions[0].value,messageId:"",tabId:"",comment:"",...d?.initPayload},y.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.SHOW_FEEDBACK_FORM,C=>{this.feedbackFormWrapper===void 0&&(this.feedbackFormWrapper=p.DomBuilder.getInstance().createPortal(a.MynahPortalNames.FEEDBACK_FORM,{type:"div",attributes:{id:"mynah-feedback-form-wrapper"},children:[this.feedbackFormContainer]},"afterbegin")),this.feedbackPayload.messageId=C.messageId,this.feedbackPayload.tabId=C.tabId,setTimeout(()=>{this.show()},5)}),this.feedbackSelect=p.DomBuilder.getInstance().build({type:"select",attributes:{value:o.Config.getInstance().config.feedbackOptions[0].value},classNames:["mynah-feedback-form-select"],events:{change:()=>{this.feedbackPayload.selectedOption=this.feedbackSelect.value}},children:o.Config.getInstance().config.feedbackOptions.map(C=>({type:"option",attributes:{value:C.value},children:[C.label]}))}),this.feedbackOptionsWrapper=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form-select-wrapper"],children:[this.feedbackSelect,new n.Icon({icon:n.MynahIcons.DOWN_OPEN,classNames:["mynah-feedback-form-select-handle"]}).render]}),this.feedbackComment=new i.FeedbackFormComment({onChange:C=>{this.feedbackPayload.comment=C},initComment:(u=this.feedbackPayload)===null||u===void 0?void 0:u.comment}),this.feedbackSubmitButton=new c.Button({label:o.Config.getInstance().config.texts.submit,onClick:()=>{this.onFeedbackSet(this.feedbackPayload),this.close()}}),this.feedbackFormContainer=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-feedback-form"],events:{click:y.cancelEvent},children:[{type:"div",classNames:["mynah-feedback-form-header"],children:[{type:"h4",children:[o.Config.getInstance().config.texts.feedbackFormTitle]},new c.Button({primary:!1,onClick:()=>{this.close()},icon:new n.Icon({icon:n.MynahIcons.CANCEL}).render}).render]},{type:"span",children:[o.Config.getInstance().config.texts.feedbackFormOptionsLabel]},this.feedbackOptionsWrapper,{type:"span",children:[o.Config.getInstance().config.texts.feedbackFormCommentLabel]},this.feedbackComment.render,{type:"div",classNames:["mynah-feedback-form-buttons-container"],children:[new c.Button({primary:!1,label:o.Config.getInstance().config.texts.cancel,onClick:()=>{this.close()}}).render,this.feedbackSubmitButton.render]}]})}}},9275:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=t.MynahIcons=void 0;const a=e(4769),p=e(6364);var c;(function(i){i.MYNAH="mynah",i.MENU="menu",i.MINUS="minus",i.SEARCH="search",i.PLUS="plus",i.CHAT="chat",i.LINK="link",i.DOC="doc",i.EXTERNAL="external",i.CANCEL="cancel",i.CALENDAR="calendar",i.MEGAPHONE="megaphone",i.NOTIFICATION="notification",i.EYE="eye",i.ELLIPSIS="ellipsis",i.OK="ok",i.UP_OPEN="up-open",i.DOWN_OPEN="down-open",i.RIGHT_OPEN="right-open",i.LEFT_OPEN="left-open",i.RESIZE_FULL="resize-full",i.RESIZE_SMALL="resize-small",i.BLOCK="block",i.OK_CIRCLED="ok-circled",i.INFO="info",i.WARNING="warning",i.ERROR="error",i.THUMBS_UP="thumbs-up",i.THUMBS_DOWN="thumbs-down",i.STAR="star",i.LIGHT_BULB="light-bulb",i.ENVELOPE_SEND="envelope-send",i.REFRESH="refresh",i.USER="user",i.PLAY="play",i.PAUSE="pause",i.CODE_BLOCK="code-block",i.COPY="copy",i.CURSOR_INSERT="cursor-insert",i.TEXT_SELECT="text-select",i.REVERT="revert"})(c||(t.MynahIcons=c={})),t.Icon=class{constructor(i){p.MynahUIIconImporter.getInstance(),this.render=a.DomBuilder.getInstance().build({type:"i",classNames:["mynah-ui-icon",`mynah-ui-icon-${i.icon}`,...i.classNames!==void 0?i.classNames:[]],children:[{type:"span",attributes:{"aria-hidden":"true"},children:[i.icon]}]})}}},6364:function(r,t,e){"use strict";var a=this&&this.__importDefault||function(ye){return ye&&ye.__esModule?ye:{default:ye}};Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUIIconImporter=void 0;const p=e(4769),c=e(9275),i=a(e(6541)),y=a(e(7701)),n=a(e(5654)),o=a(e(242)),d=a(e(1033)),u=a(e(880)),C=a(e(4743)),D=a(e(6829)),v=a(e(4784)),m=a(e(1925)),I=a(e(7111)),E=a(e(487)),x=a(e(6283)),M=a(e(2591)),k=a(e(5227)),j=a(e(3522)),L=a(e(5512)),U=a(e(4983)),B=a(e(1140)),W=a(e(5355)),Q=a(e(7016)),z=a(e(6147)),O=a(e(6981)),ne=a(e(5957)),f=a(e(8166)),A=a(e(9610)),w=a(e(5430)),S=a(e(9541)),H=a(e(4365)),te=a(e(1730)),ce=a(e(9124)),ie=a(e(5548)),le=a(e(723)),q=a(e(3786)),we=a(e(1783)),me=a(e(8728)),_=a(e(4339)),F=a(e(2666)),re=a(e(5070)),Ae=a(e(640)),be=a(e(9448));class Ce{constructor(){const Oe={MYNAH:i.default,MENU:y.default,MINUS:n.default,SEARCH:o.default,PLUS:d.default,CHAT:u.default,LINK:C.default,DOC:D.default,EXTERNAL:v.default,CANCEL:m.default,CALENDAR:I.default,MEGAPHONE:E.default,NOTIFICATION:x.default,EYE:M.default,ELLIPSIS:k.default,OK:j.default,UP_OPEN:L.default,DOWN_OPEN:U.default,RIGHT_OPEN:B.default,LEFT_OPEN:W.default,RESIZE_FULL:Q.default,RESIZE_SMALL:z.default,BLOCK:O.default,OK_CIRCLED:ne.default,INFO:f.default,WARNING:A.default,ERROR:w.default,THUMBS_UP:S.default,THUMBS_DOWN:H.default,STAR:te.default,LIGHT_BULB:ce.default,ENVELOPE_SEND:ie.default,REFRESH:le.default,USER:q.default,PLAY:we.default,PAUSE:me.default,CODE_BLOCK:_.default,COPY:F.default,CURSOR_INSERT:re.default,TEXT_SELECT:Ae.default,REVERT:be.default};p.DomBuilder.getInstance().createPortal("mynah-ui-icons",{type:"style",attributes:{type:"text/css"},children:[`
      ${Object.keys(c.MynahIcons).map(ve=>{const Me=c.MynahIcons[ve];return`
        .mynah-ui-icon-${Me} {
          --mynah-ui-icon-${Me}: url(${Oe[ve]});
          -webkit-mask-image: var(--mynah-ui-icon-${Me});
          mask-image: var(--mynah-ui-icon-${Me});
        }`}).join("")}
      `]},"beforebegin")}}t.MynahUIIconImporter=Ce,Ce.getInstance=()=>(Ce.instance===void 0&&(Ce.instance=new Ce),Ce.instance)},6446:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=void 0;const a=e(9456),p=e(4769),c=e(4601),i=e(6508),y=e(1407),n=e(4977),o=e(7853),d=e(9275),u=e(4083),C=e(3392);t.Tabs=class{constructor(D){this.tabIdTitleSubscriptions={},this.tabIdChatItemsSubscriptions={},this.getTabOptionsFromTabStoreData=()=>{const v=i.MynahUITabsStore.getInstance().getAllTabs();return Object.keys(v).map(m=>{var I;return{value:m,label:(I=v[m].store)===null||I===void 0?void 0:I.tabTitle,selected:v[m].isSelected}})},this.getTabsRender=v=>{const m=this.getTabOptionsFromTabStoreData();return m.forEach(I=>{this.assignListener(I.value)}),this.toggleGroup=new C.Toggle({onChange:I=>{i.MynahUITabsStore.getInstance().selectTab(I),this.props.onChange!==void 0&&this.props.onChange(I)},onRemove:I=>{i.MynahUITabsStore.getInstance().removeTab(I)},name:"mynah-main-tabs",options:m,value:v}),[this.toggleGroup.render,new y.Button({classNames:["mynah-toggle-close-button"],additionalEvents:{mouseenter:I=>{i.MynahUITabsStore.getInstance().tabsLength()===a.Config.getInstance().config.maxTabs&&this.showMaxReachedOverLay(I.currentTarget,a.Config.getInstance().config.texts.noMoreTabsTooltip)},mouseleave:()=>{this.hideMaxReachedOverLay()}},onClick:I=>{(0,c.cancelEvent)(I),i.MynahUITabsStore.getInstance().tabsLength()<a.Config.getInstance().config.maxTabs&&i.MynahUITabsStore.getInstance().addTab()},icon:new d.Icon({icon:d.MynahIcons.PLUS}).render,primary:!1}).render]},this.showMaxReachedOverLay=(v,m)=>{this.maxReachedOverlay=new u.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:v,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:u.OverlayVerticalDirection.TO_BOTTOM,horizontalDirection:u.OverlayHorizontalDirection.CENTER,children:[new n.Card({border:!1,classNames:["mynah-nav-tabs-max-reached-overlay"],children:[new o.CardBody({body:m}).render]}).render]})},this.hideMaxReachedOverLay=()=>{this.maxReachedOverlay!==void 0&&(this.maxReachedOverlay.close(),this.maxReachedOverlay=void 0)},this.assignListener=v=>{var m,I;this.tabIdTitleSubscriptions[v]=(m=i.MynahUITabsStore.getInstance().addListenerToDataStore(v,"tabTitle",E=>{this.toggleGroup.updateOptionTitle(v,E)}))!==null&&m!==void 0?m:"",this.tabIdChatItemsSubscriptions[v]=(I=i.MynahUITabsStore.getInstance().addListenerToDataStore(v,"chatItems",()=>{this.toggleGroup.updateOptionIndicator(v,!0)}))!==null&&I!==void 0?I:""},this.removeListenerAssignments=v=>{i.MynahUITabsStore.getInstance().removeListenerFromDataStore(v,this.tabIdTitleSubscriptions[v],"tabTitle"),i.MynahUITabsStore.getInstance().removeListenerFromDataStore(v,this.tabIdChatItemsSubscriptions[v],"chatItems")},this.props=D,this.render=p.DomBuilder.getInstance().build({type:"div",persistent:!0,classNames:["mynah-nav-tabs-wrapper"],events:{dblclick:v=>{(0,c.cancelEvent)(v),i.MynahUITabsStore.getInstance().tabsLength()<a.Config.getInstance().config.maxTabs&&i.MynahUITabsStore.getInstance().addTab()}},children:this.getTabsRender(i.MynahUITabsStore.getInstance().getSelectedTabId())}),i.MynahUITabsStore.getInstance().addListener("add",(v,m)=>{var I;this.assignListener(v),this.toggleGroup.addOption({value:v,label:(I=m?.store)===null||I===void 0?void 0:I.tabTitle,selected:m?.isSelected}),this.render.setAttribute("selected-tab",v)}),i.MynahUITabsStore.getInstance().addListener("remove",(v,m)=>{this.removeListenerAssignments(v),this.toggleGroup.removeOption(v),m!==void 0&&this.toggleGroup.snapToOption(i.MynahUITabsStore.getInstance().getSelectedTabId()),this.render.setAttribute("selected-tab",i.MynahUITabsStore.getInstance().getSelectedTabId())}),i.MynahUITabsStore.getInstance().addListener("selectedTabChange",v=>{this.render.setAttribute("selected-tab",v),this.toggleGroup.setValue(v)})}}},7067:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Notification=void 0;const a=e(4769),p=e(4601),c=e(7609),i=e(9275),y=e(4083);t.Notification=class{constructor(n){var o;this.getNextCalculatedTop=()=>{const d=(0,a.DS)(".mynah-notification");if(d.length>0){const u=d[d.length-1].getBoundingClientRect();return u.top+u.height+y.OVERLAY_MARGIN}return 0},this.getChildren=d=>d instanceof Array?d:[d],this.duration=n.duration!==void 0?n.duration:5e3,this.type=(o=n.type)!==null&&o!==void 0?o:c.NotificationType.INFO,this.props=n}notify(){var n,o,d;this.notificationOverlay=new y.Overlay({referencePoint:{left:Math.max((n=document.documentElement.clientWidth)!==null&&n!==void 0?n:0,(o=window.innerWidth)!==null&&o!==void 0?o:0),top:this.getNextCalculatedTop()},dimOutside:!1,closeOnOutsideClick:!1,horizontalDirection:y.OverlayHorizontalDirection.TO_LEFT,verticalDirection:y.OverlayVerticalDirection.TO_BOTTOM,onClose:this.props.onNotificationHide,children:[{type:"div",classNames:["mynah-notification",this.props.onNotificationClick!==void 0?"mynah-notification-clickable":""],events:{click:u=>{var C;(0,p.cancelEvent)(u),this.props.onNotificationClick!==void 0&&(this.props.onNotificationClick(),(C=this.notificationOverlay)===null||C===void 0||C.close())}},children:[new i.Icon({icon:this.type.toString()}).render,{type:"div",classNames:["mynah-notification-container"],children:[{type:"h3",classNames:["mynah-notification-title"],children:[(d=this.props.title)!==null&&d!==void 0?d:""]},{type:"div",classNames:["mynah-notification-content"],children:this.getChildren(this.props.content)}]}]}]}),this.duration!==-1&&setTimeout(()=>{var u;(u=this.notificationOverlay)===null||u===void 0||u.close()},this.duration)}}},4083:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=t.OverlayVerticalDirection=t.OverlayHorizontalDirection=t.OVERLAY_MARGIN=void 0;const a=e(4769),p=e(7019),c=e(7609);var i,y;t.OVERLAY_MARGIN=8,function(n){n.TO_LEFT="horizontal-direction-to-left",n.END_TO_LEFT="horizontal-direction-from-end-to-left",n.TO_RIGHT="horizontal-direction-to-right",n.START_TO_RIGHT="horizontal-direction-from-start-to-right",n.CENTER="horizontal-direction-at-center"}(i||(t.OverlayHorizontalDirection=i={})),function(n){n.TO_BOTTOM="vertical-direction-to-bottom",n.START_TO_BOTTOM="vertical-direction-from-start-to-bottom",n.TO_TOP="vertical-direction-to-top",n.END_TO_TOP="vertical-direction-from-end-to-top",n.CENTER="vertical-direction-at-center"}(y||(t.OverlayVerticalDirection=y={})),t.Overlay=class{constructor(n){var o,d,u,C,D,v;this.guid=(0,p.generateUID)(),this.close=()=>{this.render.removeClass("mynah-overlay-open"),setTimeout(()=>{this.render.remove()},250),this.onClose!==void 0&&this.onClose()},this.windowBlurHandler=()=>{this.close(),window.removeEventListener("blur",this.windowBlurHandler.bind(this)),window.removeEventListener("resize",this.windowBlurHandler.bind(this))},this.getCalculatedLeft=(z,O,ne)=>{const f=O!==void 0?O.getBoundingClientRect():ne!==void 0?{left:ne.left,width:0}:{left:0,width:0};switch(z.toString()){case i.TO_RIGHT:return f.left+f.width+t.OVERLAY_MARGIN;case i.START_TO_RIGHT:return f.left;case i.TO_LEFT:return f.left-t.OVERLAY_MARGIN;case i.END_TO_LEFT:return f.left+f.width;case i.CENTER:return f.left+f.width/2;default:return 0}},this.getCalculatedWidth=z=>z!==void 0?z.getBoundingClientRect().width:0,this.getCalculatedTop=(z,O,ne)=>{const f=O!==void 0?O.getBoundingClientRect():ne!==void 0?{top:ne.top,height:0}:{top:0,height:0};switch(z.toString()){case y.TO_BOTTOM:return f.top+f.height+t.OVERLAY_MARGIN;case y.START_TO_BOTTOM:return f.top;case y.TO_TOP:return f.top-t.OVERLAY_MARGIN;case y.END_TO_TOP:return f.top+f.height;case y.CENTER:return f.top+f.height/2;default:return f.top}},this.updateContent=z=>{this.innerContainer.update({children:z})},this.toggleHidden=z=>{this.render.hidden=z};const m=(o=n.horizontalDirection)!==null&&o!==void 0?o:i.TO_RIGHT,I=(d=n.verticalDirection)!==null&&d!==void 0?d:y.START_TO_BOTTOM;this.onClose=n.onClose;const E=n.dimOutside!==!1,x=n.closeOnOutsideClick!==!1,M=this.getCalculatedTop(I,n.referenceElement,n.referencePoint),k=this.getCalculatedLeft(m,n.referenceElement,n.referencePoint),j=n.stretchWidth===!0?this.getCalculatedWidth(n.referenceElement):0;this.innerContainer=a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-overlay-inner-container"],children:n.children}),this.container=a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-overlay-container",m,I,n.background!==!1?"background":""],attributes:{style:`top: ${M}px; left: ${k}px; ${j!==0?`width: ${j}px;`:""}`},children:[this.innerContainer]}),n.removeOtherOverlays===!0&&a.DomBuilder.getInstance().removeAllPortals(c.MynahPortalNames.OVERLAY),this.render=a.DomBuilder.getInstance().createPortal(`${c.MynahPortalNames.OVERLAY}-${this.guid}`,{type:"div",attributes:{id:`mynah-overlay-${this.guid}`},classNames:["mynah-overlay",...E?["mynah-overlay-dim-outside"]:[],...x?["mynah-overlay-close-on-outside-click"]:[]],events:{click:x?this.close:()=>{}},children:[this.container]},"beforeend");const L=this.container.getBoundingClientRect(),U=Math.max((u=document.documentElement.clientHeight)!==null&&u!==void 0?u:0,(C=window.innerHeight)!==null&&C!==void 0?C:0),B=Math.max((D=document.documentElement.clientWidth)!==null&&D!==void 0?D:0,(v=window.innerWidth)!==null&&v!==void 0?v:0),W=m===i.CENTER?L.width/2:L.width,Q=I===y.CENTER?L.height/2:L.height;m!==i.TO_LEFT&&m!==i.END_TO_LEFT&&W+t.OVERLAY_MARGIN+k>B?m===i.CENTER?this.container.style.left=k-.5*(L.width+2*t.OVERLAY_MARGIN+k-B)+"px":this.container.style.left=k-(L.width+t.OVERLAY_MARGIN+k-B)+"px":k+W-L.width<t.OVERLAY_MARGIN&&(this.container.style.left=k+(t.OVERLAY_MARGIN-k+(W-L.width))+"px"),I!==y.TO_TOP&&I!==y.END_TO_TOP&&Q+t.OVERLAY_MARGIN+M>U?this.container.style.top=M-(Q+t.OVERLAY_MARGIN+M-U)+"px":M+Q-L.height<t.OVERLAY_MARGIN&&(this.container.style.top=M+(t.OVERLAY_MARGIN-M+(Q-L.height))+"px"),setTimeout(()=>{this.render.addClass("mynah-overlay-open"),x&&(window.addEventListener("blur",this.windowBlurHandler.bind(this)),window.addEventListener("resize",this.windowBlurHandler.bind(this)))},10)}}},3304:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SourceLinkBody=void 0;const a=e(7853);t.SourceLinkBody=class{constructor(p){var c;this.props=p,this.render=new a.CardBody({highlightRangeWithTooltip:p.highlightRangeWithTooltip,body:(c=this.props.suggestion.body)!==null&&c!==void 0?c:"",children:this.props.children}).render}}},8948:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SourceLinkHeader=void 0;const a=e(160),p=e(4769),c=e(827),i=e(9275),y=e(4083),n=e(4862);t.SourceLinkHeader=class{constructor(o){this.getSourceMetaBlock=u=>{const C=[];return u!=null&&Object.keys(u).forEach(D=>{const v=u[D];v.isAccepted===!0&&C.push({type:"span",classNames:["mynah-title-meta-block-item","approved-answer"],children:[new i.Icon({icon:i.MynahIcons.OK}).render]}),v.lastActivityDate!==void 0&&C.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new i.Icon({icon:i.MynahIcons.CALENDAR}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[(0,a.getTimeDiff)(new Date().getTime()-v.lastActivityDate,2)]}]}),v.answerCount!==void 0&&C.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new i.Icon({icon:i.MynahIcons.CHAT}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[v.answerCount.toString()]}]}),v.stars!==void 0&&C.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new i.Icon({icon:i.MynahIcons.STAR}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[`${v.stars.toString()} contributors`]}]}),v.forks!==void 0&&C.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new i.Icon({icon:i.MynahIcons.DOWN_OPEN}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[`${v.forks.toString()} forks`]}]}),v.score!==void 0&&C.push({type:"span",classNames:["mynah-title-meta-block-item"],children:[new i.Icon({icon:i.MynahIcons.THUMBS_UP}).render,{type:"span",classNames:["mynah-title-meta-block-item-text"],children:[`${v.score.toString()}`]}]})}),{type:"span",classNames:["mynah-title-meta-block"],children:C}},this.showLinkPreview=(u,C)=>{C.body!==void 0&&(clearTimeout(this.sourceLinkPreviewTimeout),this.sourceLinkPreviewTimeout=setTimeout(()=>{const D=u.target;this.sourceLinkPreview=new y.Overlay({background:!0,closeOnOutsideClick:!1,referenceElement:D,dimOutside:!1,removeOtherOverlays:!0,verticalDirection:y.OverlayVerticalDirection.TO_TOP,horizontalDirection:y.OverlayHorizontalDirection.START_TO_RIGHT,children:[new n.SourceLinkCard({sourceLink:C}).render]})},500))},this.hideLinkPreview=()=>{var u;clearTimeout(this.sourceLinkPreviewTimeout),this.sourceLinkPreview!==null&&((u=this.sourceLinkPreview)===null||u===void 0||u.close(),this.sourceLinkPreview=null)};const d=o.sourceLink.url.replace(/^(http|https):\/\//,"").split("/");d[d.length-1].trim()===""&&d.pop(),this.render=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-source-link-header"],...o.showCardOnHover===!0?{events:{mouseenter:u=>{this.showLinkPreview(u,o.sourceLink)},mouseleave:this.hideLinkPreview}}:{},attributes:{origin:(0,c.getOrigin)(o.sourceLink.url)},children:[{type:"span",classNames:["mynah-source-thumbnail"]},{type:"div",classNames:["mynah-source-link-title-wrapper"],children:[{type:"a",classNames:["mynah-source-link-title"],events:{...o.onClick!==void 0&&{click:o.onClick}},attributes:{href:o.sourceLink.url,target:"_blank"},children:[o.sourceLink.title,{type:"div",classNames:["mynah-source-link-expand-icon"],children:[new i.Icon({icon:i.MynahIcons.EXTERNAL}).render]}]},{type:"a",classNames:["mynah-source-link-url"],events:{...o.onClick!==void 0&&{click:o.onClick}},attributes:{href:o.sourceLink.url,target:"_blank"},innerHTML:d.map(u=>`<span>${u}</span>`).join("")},...o.sourceLink.metadata!=null?[this.getSourceMetaBlock(o.sourceLink.metadata)]:[]]}]})}}},4862:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SourceLinkCard=void 0;const a=e(4977),p=e(3304),c=e(8948);t.SourceLinkCard=class{constructor(i){this.sourceLink=i.sourceLink,this.render=new a.Card({border:!1,background:!1,children:[new c.SourceLinkHeader({sourceLink:this.sourceLink}).render,...this.sourceLink.body!==void 0?[new p.SourceLinkBody({suggestion:this.sourceLink}).render]:[]]}).render}}},8990:function(r,t,e){"use strict";var a=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(t,"__esModule",{value:!0}),t.SyntaxHighlighter=t.ellipsis=t.highlighters=void 0;const p=e(4769),c=e(5660);e(4060),e(9883),e(2247),e(8080),e(235),e(6456),e(1233),e(4833),e(3047),e(7706),e(8674),e(47),e(5584),e(6551),e(7013),e(3229),e(1637),e(9208),e(4297),e(7239),e(9578),e(4006),e(8759),e(6488);const i=e(1407),y=e(7067),n=e(9275),o=e(4601),d=e(9456),u=e(7853),C=a(e(5573)),D=a(e(5937)),v=["markup","xml","css","clike","javascript","typescript","jsx","tsx","lua","java","json","markdown","mongodb","c","bash","csharp","objectivec","python","regex","scala","scss","less"];t.highlighters={start:{markup:'<span class="amzn-mynah-search-result-highlight">',textReplacement:"__mynahhighlighterstart__"},end:{markup:"</span>",textReplacement:"__mynahhighlighterend__"}},t.ellipsis={start:{markup:'<span class="amzn-mynah-search-result-ellipsis">',textReplacement:"__mynahcodeellipsisstart__"},end:{markup:"</span>",textReplacement:"__mynahcodeellipsisend__"}},t.SyntaxHighlighter=class{constructor(m){this.getSelectedCodeContextMenu=()=>{var M,k;return{code:(k=(M=document.getSelection())===null||M===void 0?void 0:M.toString())!==null&&k!==void 0?k:"",type:"selection"}},this.getSelectedCode=()=>{var M,k;return{code:(k=(M=this.render.querySelector("pre"))===null||M===void 0?void 0:M.innerText)!==null&&k!==void 0?k:"",type:"block"}},this.copyToClipboard=(M,k,j)=>{document.hasFocus()||window.focus(),navigator.clipboard.writeText(M).then(()=>{this.onCopiedToClipboard!==void 0&&this.onCopiedToClipboard(k,M),j!==void 0&&new y.Notification({content:j,title:d.Config.getInstance().config.texts.copyToClipboard,duration:2e3}).notify()}).catch(L=>{})},this.onCopiedToClipboard=m.onCopiedToClipboard,this.onInsertToCursorPosition=m.onInsertToCursorPosition;let I=(0,D.default)(m.codeStringWithMarkup);m.keepHighlights===!0&&(I=I.replace(new RegExp(t.highlighters.start.markup,"g"),t.highlighters.start.textReplacement).replace(new RegExp(t.highlighters.end.markup,"g"),t.highlighters.end.textReplacement).replace(new RegExp(t.ellipsis.start.markup,"g"),t.ellipsis.start.textReplacement).replace(new RegExp(t.ellipsis.end.markup,"g"),t.ellipsis.end.textReplacement));let E=(0,C.default)(I);E=E.replace(new RegExp((0,C.default)(u.highlightersWithTooltip.start.markupStart),"g"),u.highlightersWithTooltip.start.markupStart).replace(new RegExp((0,C.default)(u.highlightersWithTooltip.start.markupEnd),"g"),u.highlightersWithTooltip.start.markupEnd).replace(new RegExp((0,C.default)(u.highlightersWithTooltip.end.markup),"g"),u.highlightersWithTooltip.end.markup);const x=p.DomBuilder.getInstance().build({type:"pre",classNames:["keep-markup",`language-${m.language!==void 0&&v.includes(m.language)?m.language:"clike"}`,...m.showLineNumbers===!0?["line-numbers"]:[]],children:[{type:"code",innerHTML:E}],events:{copy:M=>{(0,o.cancelEvent)(M);const k=this.getSelectedCodeContextMenu();k.code.length>0&&this.copyToClipboard(k.code,k.type)}}});(0,c.highlightElement)(x),m.keepHighlights===!0&&(x.innerHTML=x.innerHTML.replace(new RegExp(t.highlighters.start.textReplacement,"g"),t.highlighters.start.markup).replace(new RegExp(t.highlighters.end.textReplacement,"g"),t.highlighters.end.markup).replace(new RegExp(t.ellipsis.start.textReplacement,"g"),t.ellipsis.start.markup).replace(new RegExp(t.ellipsis.end.textReplacement,"g"),t.ellipsis.end.markup)),this.render=p.DomBuilder.getInstance().build({type:"div",classNames:["mynah-syntax-highlighter",...m.block!==!0?["mynah-inline-code"]:[]],children:[...m.showCopyOptions===!0?[{type:"div",classNames:["mynah-syntax-highlighter-copy-buttons"],children:[...m.language!==void 0?[{type:"span",classNames:["mynah-syntax-highlighter-language"],children:[m.language]}]:[],new i.Button({icon:new n.Icon({icon:n.MynahIcons.CURSOR_INSERT}).render,label:d.Config.getInstance().config.texts.insertAtCursorLabel,attributes:{title:d.Config.getInstance().config.texts.insertAtCursorLabel},primary:!1,onClick:M=>{(0,o.cancelEvent)(M);const k=this.getSelectedCode();this.onInsertToCursorPosition!==void 0&&this.onInsertToCursorPosition(k.type,k.code)},additionalEvents:{mousedown:o.cancelEvent}}).render,new i.Button({icon:new n.Icon({icon:n.MynahIcons.COPY}).render,label:d.Config.getInstance().config.texts.copy,attributes:{title:d.Config.getInstance().config.texts.copy},primary:!1,onClick:M=>{(0,o.cancelEvent)(M);const k=this.getSelectedCode();this.copyToClipboard(k.code,k.type)},additionalEvents:{mousedown:o.cancelEvent}}).render]}]:[],x,...m.showLineNumbers===!0?[{type:"span",classNames:["line-numbers-rows"],children:x.innerHTML.split(/\n/).slice(0,-1).map((M,k)=>{var j;return{type:"span",innerHTML:String(k+((j=m.startingLineNumber)!==null&&j!==void 0?j:1))}})}]:[]]})}}},3392:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Toggle=void 0;const a=e(4769),p=e(4601),c=e(1407),i=e(9275),y=e(4083);class n{constructor(d){var u,C;this.props=d,this.render=a.DomBuilder.getInstance().build({type:"span",attributes:{key:`${this.props.name}-${this.props.value}`,title:(u=this.props.label)!==null&&u!==void 0?u:""},events:{...this.props.disabled===!0&&this.props.disabledTooltip!==void 0?{mouseenter:()=>{this.disabledTooltipTimer=setTimeout(()=>{var D;this.disabledTooltip=new y.Overlay({children:[{type:"span",classNames:["mynah-toggle-disabled-tooltip-container"],children:[(D=this.props.disabledTooltip)!==null&&D!==void 0?D:""]}],closeOnOutsideClick:!1,dimOutside:!1,referenceElement:this.render,horizontalDirection:y.OverlayHorizontalDirection.CENTER,verticalDirection:y.OverlayVerticalDirection.TO_TOP})},500)},mouseleave:()=>{clearTimeout(this.disabledTooltipTimer),this.disabledTooltip!==void 0&&(this.disabledTooltip.close(),setTimeout(()=>{this.disabledTooltip=void 0},50))}}:{}},children:[{type:"input",classNames:["mynah-toggle-option"],attributes:{type:"radio",id:`${this.props.name}-${this.props.value}`,value:this.props.value,name:this.props.name,...this.props.selected===!0?{checked:"checked"}:{},...this.props.disabled===!0?{disabled:"disabled"}:{}},events:{change:()=>{this.props.onChange!=null&&this.props.onChange(this.props.value)}}},{type:"label",classNames:["mynah-toggle-option-label"],attributes:{for:`${this.props.name}-${this.props.value}`},events:{dblclick:D=>{(0,p.cancelEvent)(D)},auxclick:()=>{this.props.onRemove!==void 0&&this.props.onRemove(this.props.value)}},children:[this.props.icon!==void 0?new i.Icon({icon:d.icon}).render:"",{type:"span",classNames:["mynah-toggle-option-label-text"],children:[(C=this.props.label)!==null&&C!==void 0?C:""]},this.props.onRemove!==void 0?new c.Button({classNames:["mynah-toggle-close-button"],onClick:()=>{this.props.onRemove!==void 0&&this.props.onRemove(this.props.value)},icon:new i.Icon({icon:i.MynahIcons.CANCEL}).render,primary:!1}).render:""]}]})}}t.Toggle=class{constructor(o){this.transformScroll=d=>{d.deltaY!==0&&(this.render.scrollLeft+=d.deltaY,(0,p.cancelEvent)(d))},this.getChildren=d=>[...this.props.options.map(u=>new n({...u,selected:d===u.value,name:this.props.name,onChange:this.updateSelectionRender,onRemove:this.props.onRemove}).render)],this.updateSelectionRender=d=>{this.props.onChange!==void 0&&this.props.onChange(d)},this.setValue=d=>{if(d!==this.getValue()){this.currentValue=d;const u=this.render.querySelector(`#${this.props.name}-${d}`);u!==void 0&&(u.click(),u.checked=!0,u.nextSibling.classList.remove("indication"))}},this.addOption=d=>{this.props.options.push(d),this.render.appendChild(new n({...d,name:this.props.name,onChange:this.updateSelectionRender,onRemove:this.props.onRemove}).render),d.selected===!0&&(this.setValue(d.value),this.snapToOption(d.value))},this.removeOption=d=>{this.props.options=this.props.options.filter(C=>C.value!==d);const u=this.render.querySelector(`span[key="${this.props.name}-${d}"]`);u!==void 0&&u?.remove()},this.updateOptionTitle=(d,u)=>{this.props.options=this.props.options.filter(D=>D.value!==d);const C=this.render.querySelector(`span[key="${this.props.name}-${d}"] .mynah-toggle-option-label-text`);C!==void 0&&(C.innerHTML=u)},this.updateOptionIndicator=(d,u)=>{this.props.options=this.props.options.filter(D=>D.value!==d);const C=this.render.querySelector(`label[for="${this.props.name}-${d}"]`);C!==null&&(u&&d!==this.getValue()?C.classList.add("indication"):C.classList.remove("indication"))},this.snapToOption=d=>{const u=this.render.querySelector(`#${this.props.name}-${d}`);u!==void 0&&(this.render.scrollLeft=(u?.parentNode).offsetLeft)},this.getValue=()=>this.currentValue,this.props={direction:"horizontal",...o},this.currentValue=this.props.value,this.render=a.DomBuilder.getInstance().build({type:"div",classNames:["mynah-toggle-container","mynah-toggle-type-tabs",`mynah-toggle-direction-${this.props.direction}`],attributes:{disabled:o.disabled===!0?"disabled":""},children:this.getChildren(o.value),events:{wheel:this.transformScroll}})}}},9456:(r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Config=void 0;const e={maxTabs:1e3,feedbackOptions:[{value:"inaccurate-response",label:"Inaccurate response"},{value:"harmful-content",label:"Harmful content"},{value:"overlap",label:"Overlaps with existing content"},{value:"incorrect-syntax",label:"Incorrect syntax"},{value:"buggy-code",label:"Buggy code"},{value:"low-quality",label:"Low quality"},{value:"other",label:"Other"}],texts:{mainTitle:"AWS Q",copy:"Copy",insertAtCursorLabel:"Insert at cursor",feedbackFormTitle:"Report an issue",feedbackFormOptionsLabel:"What type of issue would you like to report?",feedbackFormCommentLabel:"Description of issue (optional):",feedbackThanks:"Thanks!",feedbackReportButtonLabel:"Report an issue",codeSuggestions:"Code Suggestions",files:"file(s)",clickFileToViewDiff:"Click on a file to view diff.",showMore:"Show more",save:"Save",cancel:"Cancel",submit:"Submit",stopGenerating:"Stop generating",copyToClipboard:"Copied to clipboard",noMoreTabsTooltip:"You've reached maximum number of tabs you can simultaneously use.",codeSuggestionWithReferenceTitle:"Some suggestions contain code with references.",spinnerText:"Amazon Q is generating your answer..."}};class a{constructor(c){this.config={...e,...c}}static getInstance(c){return a.instance===void 0&&(a.instance=new a(c)),a.instance}}t.Config=a},160:(r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeDiff=void 0,t.getTimeDiff=(e,a,p)=>{let c=Math.abs(e)/1e3;const i=Math.floor(c/31104e3);c-=31104e3*i;const y=Math.floor(c/2592e3);c-=2592e3*y;const n=Math.floor(c/604800);c-=604800*n;const o=Math.floor(c/86400);c-=86400*o;const d=Math.floor(c/3600)%24;c-=3600*d;const u=Math.floor(c/60)%60;c-=60*u;const C=[];return i===0||a!==void 0&&typeof a=="object"&&a.years===!1||C.push(`${i}yr`),y===0||a!==void 0&&typeof a=="object"&&a.months===!1||C.push(`${y}mo`),n===0||a!==void 0&&typeof a=="object"&&a.weeks===!1||C.push(`${n}we`),o===0||a!==void 0&&typeof a=="object"&&a.days===!1||C.push(`${o}da`),d===0||a!==void 0&&typeof a=="object"&&a.hours===!1||C.push(`${d}hr`),u===0||a!==void 0&&typeof a=="object"&&a.minutes===!1||C.push(`${u}min`),i+y+n+o+d+u===0?"1min":(a!==void 0&&typeof a=="number"&&C.splice(a,C.length),C.join(p??" "))}},4769:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.htmlDecode=t.DomBuilder=t.DS=void 0;const a=e(4601);t.DS=document.querySelectorAll.bind(document);const p={type:"div",attributes:{},classNames:[],events:{},children:[],innerHTML:void 0,persistent:!1};class c{constructor(y){this.portals={},this.addClass=function(n){var o;return n!==""&&(this.classList.add(n),((o=this.builderObject.classNames)===null||o===void 0?void 0:o.indexOf(n))===-1&&(this.builderObject.classNames=[...this.builderObject.classNames,n])),this},this.removeClass=function(n){return this.classList.remove(n),this.builderObject.classNames!==void 0&&this.builderObject.classNames.includes(n)&&this.builderObject.classNames.splice(this.builderObject.classNames.indexOf(n),1),this},this.toggleClass=function(n){return this.classList.contains(n)?this.removeClass(n):this.addClass(n),this},this.hasClass=function(n){return this.classList.contains(n)},this.insertChild=function(n,o){return o&&(o instanceof Array?o.forEach(d=>{d instanceof Element?this.insertAdjacentElement(n,d):typeof d=="string"&&this.insertAdjacentText(n,d)}):o instanceof Element?this.insertAdjacentElement(n,o):typeof o=="string"&&this.insertAdjacentText(n,o)),this},this.clearChildren=function(n){return Array.from(this.childNodes).forEach(o=>{!n&&o.builderObject&&o.builderObject.persistent===!0||o.remove()}),this},this.extendDomFunctionality=function(n){const o=n;return o.addClass=this.addClass.bind(o),o.removeClass=this.removeClass.bind(o),o.toggleClass=this.toggleClass.bind(o),o.hasClass=this.hasClass.bind(o),o.insertChild=this.insertChild.bind(o),o.clear=this.clearChildren.bind(o),o},this.build=n=>{var o,d,u,C;const D={...p,...n},v=document.createElement(D.type);return v.classList.add(...((o=D.classNames)===null||o===void 0?void 0:o.filter(m=>m!==""))||[]),Object.keys((d=D.events)!==null&&d!==void 0?d:{}).forEach(m=>v.addEventListener(m,D.events?D.events[m]:a.cancelEvent)),Object.keys((u=D.attributes)!==null&&u!==void 0?u:{}).forEach(m=>v.setAttribute(m,D.attributes!==void 0?D.attributes[m]:"")),typeof D.innerHTML=="string"?v.innerHTML=D.innerHTML:D.children!==void 0&&((C=D.children)===null||C===void 0?void 0:C.length)>0&&this.insertChild.apply(v,["beforeend",[...D.children.map(m=>typeof m=="string"||m instanceof HTMLElement?m:this.build(m))]]),v.builderObject=D,v.update=m=>this.update(v,m),this.extendDomFunctionality(v),v},this.update=function(n,o){var d,u;return n.builderObject?(o.classNames!==void 0&&(n.classList.remove(...n.builderObject.classNames),n.classList.add(...o.classNames.filter(C=>C!==""))),Object.keys((d=o.events)!==null&&d!==void 0?d:{}).forEach(C=>{n.builderObject.events!==void 0&&n.builderObject.events[C]&&n.removeEventListener(C,n.builderObject.events[C]),o.events!==void 0&&o.events[C]!==void 0&&n.addEventListener(C,o.events[C])}),Object.keys((u=o.attributes)!==null&&u!==void 0?u:{}).forEach(C=>{o.attributes!==void 0&&o.attributes[C]===void 0?n.removeAttribute(C):o.attributes!==void 0&&n.setAttribute(C,o.attributes[C])}),typeof o.innerHTML=="string"?n.innerHTML=o.innerHTML:o.children!==void 0&&o.children.length>0&&(n.clear(),n.insertChild("beforeend",o.children)),n.builderObject={...p,...o}):console.warn("element was not created with dom builder"),n},this.createPortal=(n,o,d)=>{const u=this.build(o);return this.root.insertChild(d||"beforeend",u),this.portals[n]=u,u},this.getPortal=n=>this.portals[n],this.removePortal=n=>{var o;return(o=this.portals[n])===null||o===void 0?void 0:o.remove()},this.removeAllPortals=n=>{Object.keys(this.portals).forEach(o=>{o.match(n)!==null&&(this.portals[o].remove(),delete this.portals[o])})},this.root=(0,t.DS)(y)[0],this.extendDomFunctionality(this.root)}static getInstance(y){return c.instance||(c.instance=new c(y!==void 0?y:"body")),c.instance}}t.DomBuilder=c,t.htmlDecode=i=>{var y;const n=document.createElement("textarea");return n.innerHTML=i,n.childNodes.length===0?"":(y=n.childNodes[0].nodeValue)!==null&&y!==void 0?y:i}},4601:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUIGlobalEvents=t.cancelEvent=void 0;const a=e(7019);t.cancelEvent=c=>(c.preventDefault(),c.stopPropagation(),c.stopImmediatePropagation(),!1);class p{constructor(){this.addListener=(i,y)=>{const n=(0,a.generateUID)();return this.listeners[i]===void 0&&(this.listeners[i]={}),this.listeners[i][n]=y,n},this.removeListener=(i,y)=>{var n;((n=this.listeners[i])===null||n===void 0?void 0:n[y])!==void 0&&delete this.listeners[i][y]},this.dispatch=(i,y)=>{this.listeners[i]!==void 0&&Object.keys(this.listeners[i]).forEach(n=>{this.listeners[i][n](y)})},this.listeners={...this.listeners}}}t.MynahUIGlobalEvents=p,p.getInstance=()=>(p.instance===void 0&&(p.instance=new p),p.instance)},7831:(r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fileListToTree=void 0,t.fileListToTree=(a,p=[])=>[...e(a,!1),...e(p,!0)].reduce((c,{filePath:i,deleted:y})=>{let n=c;for(let o=0;o<i.length;o++){const d=i[o];if(o===i.length-1){n.children.push({type:"file",name:d,filePath:i.join("/"),deleted:y});break}{const u=n.children.find(({name:C})=>C===d);if(u!=null)n=u;else{const C={name:d,type:"folder",children:[]};n.children.push(C),n=C}}}return c},{name:"Changes",type:"folder",children:[]});const e=(a,p)=>a.map(c=>({filePath:c.split("/").filter(i=>i!==void 0&&i!=="."),deleted:p}))},7019:(r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateUID=void 0,t.generateUID=()=>{const e=46656*Math.random()|0,a=46656*Math.random()|0;return`000${e.toString(36)}`.slice(-3)+`000${a.toString(36)}`.slice(-3)}},4511:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUIDataStore=t.EmptyMynahUIDataModel=void 0;const a=e(7609),p=e(9456),c=e(4601),i=e(7019),y=["string","number","boolean"];class n{constructor(d){this.data={tabTitle:p.Config.getInstance().config.texts.mainTitle,loadingChat:!1,cancelButtonWhenLoading:!0,showChatAvatars:!1,quickActionCommands:[],promptInputPlaceholder:"",promptInputInfo:"",promptInputDisabledState:!1,chatItems:[],selectedCodeSnippet:"",...d}}}t.EmptyMynahUIDataModel=n,t.MynahUIDataStore=class{constructor(o,d){this.store=new n().data,this.defaults=null,this.setDefaults=u=>{this.defaults=u},this.getDefaults=()=>this.defaults,this.subscribe=(u,C)=>{const D=(0,i.generateUID)();return this.subscriptions[u][D]=C,D},this.unsubscribe=(u,C)=>{var D;((D=this.subscriptions[u])===null||D===void 0?void 0:D[C])!==void 0&&delete this.subscriptions[u][C]},this.getValue=u=>structuredClone(this.store[u]),this.getDefaultValue=u=>new n(this.defaults).data[u],this.updateStore=(u,C)=>{C!==!0&&Object.keys(u).forEach(D=>{Object.keys(this.subscriptions[D]).forEach(v=>{y.includes(typeof u[D])&&u[D]===this.store[D]||this.subscriptions[D][v](u[D],this.store[D])})}),this.store=Object.assign(structuredClone(this.store),u)},this.resetStore=()=>{this.updateStore(new n(structuredClone(this.defaults)).data),c.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.RESET_STORE,{tabId:this.tabId})},this.tabId=o,this.store=Object.assign(this.store,d),this.subscriptions=Object.create({}),Object.keys(this.store).forEach(u=>{Object.assign(this.subscriptions,{[u]:{}})})}}},6508:(r,t,e)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MynahUITabsStore=t.EmptyMynahUITabsStoreModel=void 0;const a=e(9456),p=e(7019),c=e(4511);t.EmptyMynahUITabsStoreModel=class{constructor(){const y=(0,p.generateUID)();this.data={[y]:{isSelected:!0,store:{}}}}};class i{constructor(n,o){this.subscriptions={add:{},remove:{},update:{},selectedTabChange:{}},this.tabDefaults={},this.tabsStore={},this.tabsDataStore={},this.deselectAllTabs=()=>{Object.keys(this.tabsStore).forEach(d=>{this.tabsStore[d].isSelected=!1})},this.addTab=d=>{var u;if(Object.keys(this.tabsStore).length<a.Config.getInstance().config.maxTabs){const C=(0,p.generateUID)();return this.deselectAllTabs(),this.tabsStore[C]={...this.tabDefaults,...d,isSelected:!0},this.tabsDataStore[C]=new c.MynahUIDataStore(C,(u=this.tabsStore[C].store)!==null&&u!==void 0?u:{}),this.informSubscribers("add",C,this.tabsStore[C]),this.informSubscribers("selectedTabChange",C,this.tabsStore[C]),C}},this.removeTab=d=>{var u;const C=(u=this.tabsStore[d].isSelected)!==null&&u!==void 0&&u;let D;if(delete this.tabsStore[d],this.tabsDataStore[d].resetStore(),delete this.tabsDataStore[d],C){const v=Object.keys(this.tabsStore);v.length>0&&(this.deselectAllTabs(),this.selectTab(v[v.length-1]),D=this.tabsStore[this.getSelectedTabId()])}return this.informSubscribers("remove",d,D),d},this.selectTab=d=>{this.deselectAllTabs(),this.tabsStore[d].isSelected=!0,this.informSubscribers("selectedTabChange",d,this.tabsStore[d])},this.updateTab=(d,u,C)=>{this.tabsStore[d]!==void 0&&(u?.isSelected===!0&&this.getSelectedTabId()!==d&&(this.deselectAllTabs(),this.informSubscribers("selectedTabChange",d)),this.tabsStore[d]={...this.tabsStore[d],...u},u?.store!==void 0&&(this.tabsDataStore[d]===void 0&&(this.tabsDataStore[d]=new c.MynahUIDataStore(d)),this.tabsDataStore[d].updateStore(u?.store)),C!==!0&&this.informSubscribers("update",d,this.tabsStore[d]))},this.addListener=(d,u)=>{const C=(0,p.generateUID)();return this.subscriptions[d][C]=u,C},this.addListenerToDataStore=(d,u,C)=>this.tabsDataStore[d]!==void 0?this.tabsDataStore[d].subscribe(u,C):null,this.removeListenerFromDataStore=(d,u,C)=>{this.tabsDataStore[d]!==void 0&&this.tabsDataStore[d].unsubscribe(C,u)},this.removeListener=(d,u)=>{this.subscriptions[d][u]!==void 0&&delete this.subscriptions[d][u]},this.informSubscribers=(d,u,C)=>{Object.keys(this.subscriptions[d]).forEach(D=>{this.subscriptions[d][D](u,C)})},this.getTab=d=>{var u;return(u=this.tabsStore[d])!==null&&u!==void 0?u:null},this.getAllTabs=()=>structuredClone(this.tabsStore),this.getTabDataStore=d=>this.tabsDataStore[d],this.getSelectedTabId=()=>{var d;return(d=Object.keys(this.tabsStore).find(u=>this.tabsStore[u].isSelected===!0))!==null&&d!==void 0?d:""},this.removeAllTabs=()=>{Object.keys(this.tabsStore).forEach(d=>{this.removeTab(d)})},this.tabsLength=()=>Object.keys(this.tabsStore).length,this.tabsStore=Object.assign(this.tabsStore,n),o!=null&&(this.tabDefaults=o),n!=null&&Object.keys(n).length>0&&Object.keys(n).forEach(d=>{var u;this.tabsDataStore[d]=new c.MynahUIDataStore(d,(u=n[d].store)!==null&&u!==void 0?u:{})})}}t.MynahUITabsStore=i,i.getInstance=(y,n)=>(i.instance===void 0&&(i.instance=new i(y,n)),i.instance)},827:(r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOrigin=void 0,t.getOrigin=e=>{let a="";try{a=new URL(e).origin}catch{a="unknown"}return a}},7609:(r,t)=>{"use strict";var e,a,p,c,i,y,n;Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationType=t.EngagementType=t.RelevancyVoteType=t.KeyMap=t.ChatItemType=t.MynahPortalNames=t.MynahEventNames=void 0,function(o){o.RESET_STORE="resetStore",o.FEEDBACK_SET="feedbackSet",o.CARD_VOTE="cardVote",o.SOURCE_LINK_CLICK="sourceLinkClick",o.INFO_LINK_CLICK="infoLinkClick",o.LINK_CLICK="linkClick",o.CHAT_ITEM_ENGAGEMENT="chatItemEngagement",o.COPY_CODE_TO_CLIPBOARD="copyCodeToClipboard",o.INSERT_CODE_TO_CURSOR_POSITION="insertCodeToCursorPosition",o.CHAT_PROMPT="chatPrompt",o.CHAT_ITEM_ADD="chatItemAdd",o.FOLLOW_UP_CLICKED="followUpClicked",o.SHOW_MORE_WEB_RESULTS_CLICK="showMoreWebResultsClick",o.SHOW_FEEDBACK_FORM="showFeedbackForm",o.OPEN_DIFF="openDiff",o.ADD_CODE_SNIPPET="addCodeSnippet",o.REMOVE_CODE_SNIPPET="removeCodeSnippet"}(e||(t.MynahEventNames=e={})),function(o){o.WRAPPER="wrapper",o.SIDE_NAV="sideNav",o.OVERLAY="overlay",o.FEEDBACK_FORM="feedbackForm"}(a||(t.MynahPortalNames=a={})),function(o){o.PROMPT="prompt",o.SYSTEM_PROMPT="system-prompt",o.AI_PROMPT="ai-prompt",o.ANSWER="answer",o.ANSWER_STREAM="answer-stream",o.ANSWER_PART="answer-part",o.CODE_RESULT="code-result"}(p||(t.ChatItemType=p={})),function(o){o.ESCAPE="Escape",o.ENTER="Enter",o.BACKSPACE="Backspace",o.SPACE=" ",o.DELETE="Delete",o.ARROW_UP="ArrowUp",o.ARROW_DOWN="ArrowDown",o.ARROW_LEFT="ArrowLeft",o.ARROW_RIGHT="ArrowRight",o.PAGE_UP="PageUp",o.PAGED_OWN="PageDown",o.HOME="Home",o.END="End",o.META="Meta",o.TAB="Tab",o.SHIFT="Shift",o.CONTROL="Control",o.ALT="Alt",o.SLASH="/",o.BACK_SLASH="\\"}(c||(t.KeyMap=c={})),function(o){o.UP="upvote",o.DOWN="downvote"}(i||(t.RelevancyVoteType=i={})),function(o){o.INTERACTION="interaction",o.TIME="timespend"}(y||(t.EngagementType=y={})),function(o){o.INFO="info",o.SUCCESS="ok-circled",o.WARNING="warning",o.ERROR="error"}(n||(t.NotificationType=n={}))},5937:r=>{"use strict";r.exports=function(t){return String(t).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x3A;/g,":").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}},970:(r,t)=>{var ye,Le,ve,je;"use strict";function e(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}function a(V){t.defaults=V}t.defaults={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const p=/[&<>"']/,c=new RegExp(p.source,"g"),i=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,y=new RegExp(i.source,"g"),n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},o=V=>n[V];function d(V,h){if(h){if(p.test(V))return V.replace(c,o)}else if(i.test(V))return V.replace(y,o);return V}const u=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function C(V){return V.replace(u,(h,l)=>(l=l.toLowerCase())==="colon"?":":l.charAt(0)==="#"?l.charAt(1)==="x"?String.fromCharCode(parseInt(l.substring(2),16)):String.fromCharCode(+l.substring(1)):"")}const D=/(^|[^\[])\^/g;function v(V,h){V=typeof V=="string"?V:V.source,h=h||"";const l={replace:(s,g)=>(g=(g=typeof g=="object"&&"source"in g?g.source:g).replace(D,"$1"),V=V.replace(s,g),l),getRegex:()=>new RegExp(V,h)};return l}const m=/[^\w:]/g,I=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function E(V,h,l){if(V){let s;try{s=decodeURIComponent(C(l)).replace(m,"").toLowerCase()}catch{return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}h&&!I.test(l)&&(l=function(s,g){x[" "+s]||(M.test(s)?x[" "+s]=s+"/":x[" "+s]=B(s,"/",!0));const b=(s=x[" "+s]).indexOf(":")===-1;return g.substring(0,2)==="//"?b?g:s.replace(k,"$1")+g:g.charAt(0)==="/"?b?g:s.replace(j,"$1")+g:s+g}(h,l));try{l=encodeURI(l).replace(/%25/g,"%")}catch{return null}return l}const x={},M=/^[^:]+:\/*[^/]*$/,k=/^([^:]+:)[\s\S]*$/,j=/^([^:]+:\/*[^/]*)[\s\S]*$/,L={exec:()=>null};function U(V,h){const l=V.replace(/\|/g,(g,b,T)=>{let N=!1,G=b;for(;--G>=0&&T[G]==="\\";)N=!N;return N?"|":" |"}).split(/ \|/);let s=0;if(l[0].trim()||l.shift(),l.length>0&&!l[l.length-1].trim()&&l.pop(),h)if(l.length>h)l.splice(h);else for(;l.length<h;)l.push("");for(;s<l.length;s++)l[s]=l[s].trim().replace(/\\\|/g,"|");return l}function B(V,h,l){const s=V.length;if(s===0)return"";let g=0;for(;g<s;){const b=V.charAt(s-g-1);if(b!==h||l){if(b===h||!l)break;g++}else g++}return V.slice(0,s-g)}function W(V,h,l,s){const g=h.href,b=h.title?d(h.title):null,T=V[1].replace(/\\([\[\]])/g,"$1");if(V[0].charAt(0)!=="!"){s.state.inLink=!0;const N={type:"link",raw:l,href:g,title:b,text:T,tokens:s.inlineTokens(T)};return s.state.inLink=!1,N}return{type:"image",raw:l,href:g,title:b,text:d(T)}}class Q{constructor(h){se(this,"options");se(this,"rules");se(this,"lexer");this.options=h||t.defaults}space(h){const l=this.rules.block.newline.exec(h);if(l&&l[0].length>0)return{type:"space",raw:l[0]}}code(h){const l=this.rules.block.code.exec(h);if(l){const s=l[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:l[0],codeBlockStyle:"indented",text:this.options.pedantic?s:B(s,`
`)}}}fences(h){const l=this.rules.block.fences.exec(h);if(l){const s=l[0],g=function(b,T){const N=b.match(/^(\s+)(?:```)/);if(N===null)return T;const G=N[1];return T.split(`
`).map(P=>{const R=P.match(/^\s+/);if(R===null)return P;const[K]=R;return K.length>=G.length?P.slice(G.length):P}).join(`
`)}(s,l[3]||"");return{type:"code",raw:s,lang:l[2]?l[2].trim().replace(this.rules.inline._escapes,"$1"):l[2],text:g}}}heading(h){const l=this.rules.block.heading.exec(h);if(l){let s=l[2].trim();if(/#$/.test(s)){const g=B(s,"#");this.options.pedantic?s=g.trim():g&&!/ $/.test(g)||(s=g.trim())}return{type:"heading",raw:l[0],depth:l[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(h){const l=this.rules.block.hr.exec(h);if(l)return{type:"hr",raw:l[0]}}blockquote(h){const l=this.rules.block.blockquote.exec(h);if(l){const s=l[0].replace(/^ *>[ \t]?/gm,""),g=this.lexer.state.top;this.lexer.state.top=!0;const b=this.lexer.blockTokens(s);return this.lexer.state.top=g,{type:"blockquote",raw:l[0],tokens:b,text:s}}}list(h){let l=this.rules.block.list.exec(h);if(l){let s=l[1].trim();const g=s.length>1,b={type:"list",raw:"",ordered:g,start:g?+s.slice(0,-1):"",loose:!1,items:[]};s=g?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=g?s:"[*+-]");const T=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let N="",G="",P=!1;for(;h;){let R=!1;if(!(l=T.exec(h))||this.rules.block.hr.test(h))break;N=l[0],h=h.substring(N.length);let K=l[2].split(`
`,1)[0].replace(/^\t+/,xe=>" ".repeat(3*xe.length)),Y=h.split(`
`,1)[0],oe=0;this.options.pedantic?(oe=2,G=K.trimLeft()):(oe=l[2].search(/[^ ]/),oe=oe>4?1:oe,G=K.slice(oe),oe+=l[1].length);let de=!1;if(!K&&/^ *$/.test(Y)&&(N+=Y+`
`,h=h.substring(Y.length+1),R=!0),!R){const xe=new RegExp(`^ {0,${Math.min(3,oe-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Ne=new RegExp(`^ {0,${Math.min(3,oe-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Se=new RegExp(`^ {0,${Math.min(3,oe-1)}}(?:\`\`\`|~~~)`),Ee=new RegExp(`^ {0,${Math.min(3,oe-1)}}#`);for(;h;){const ke=h.split(`
`,1)[0];if(Y=ke,this.options.pedantic&&(Y=Y.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Se.test(Y)||Ee.test(Y)||xe.test(Y)||Ne.test(h))break;if(Y.search(/[^ ]/)>=oe||!Y.trim())G+=`
`+Y.slice(oe);else{if(de||K.search(/[^ ]/)>=4||Se.test(K)||Ee.test(K)||Ne.test(K))break;G+=`
`+Y}de||Y.trim()||(de=!0),N+=ke+`
`,h=h.substring(ke.length+1),K=Y.slice(oe)}}b.loose||(P?b.loose=!0:/\n *\n *$/.test(N)&&(P=!0));let ge,ue=null;this.options.gfm&&(ue=/^\[[ xX]\] /.exec(G),ue&&(ge=ue[0]!=="[ ] ",G=G.replace(/^\[[ xX]\] +/,""))),b.items.push({type:"list_item",raw:N,task:!!ue,checked:ge,loose:!1,text:G,tokens:[]}),b.raw+=N}b.items[b.items.length-1].raw=N.trimRight(),b.items[b.items.length-1].text=G.trimRight(),b.raw=b.raw.trimRight();for(let R=0;R<b.items.length;R++)if(this.lexer.state.top=!1,b.items[R].tokens=this.lexer.blockTokens(b.items[R].text,[]),!b.loose){const K=b.items[R].tokens.filter(oe=>oe.type==="space"),Y=K.length>0&&K.some(oe=>/\n.*\n/.test(oe.raw));b.loose=Y}if(b.loose)for(let R=0;R<b.items.length;R++)b.items[R].loose=!0;return b}}html(h){const l=this.rules.block.html.exec(h);if(l){const s={type:"html",block:!0,raw:l[0],pre:!this.options.sanitizer&&(l[1]==="pre"||l[1]==="script"||l[1]==="style"),text:l[0]};if(this.options.sanitize){const g=this.options.sanitizer?this.options.sanitizer(l[0]):d(l[0]),b=s;b.type="paragraph",b.text=g,b.tokens=this.lexer.inline(g)}return s}}def(h){const l=this.rules.block.def.exec(h);if(l){const s=l[1].toLowerCase().replace(/\s+/g," "),g=l[2]?l[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",b=l[3]?l[3].substring(1,l[3].length-1).replace(this.rules.inline._escapes,"$1"):l[3];return{type:"def",tag:s,raw:l[0],href:g,title:b}}}table(h){const l=this.rules.block.table.exec(h);if(l){const s={type:"table",raw:l[0],header:U(l[1]).map(g=>({text:g,tokens:[]})),align:l[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:l[3]&&l[3].trim()?l[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){let g,b,T,N,G=s.align.length;for(g=0;g<G;g++){const P=s.align[g];P&&(/^ *-+: *$/.test(P)?s.align[g]="right":/^ *:-+: *$/.test(P)?s.align[g]="center":/^ *:-+ *$/.test(P)?s.align[g]="left":s.align[g]=null)}for(G=s.rows.length,g=0;g<G;g++)s.rows[g]=U(s.rows[g],s.header.length).map(P=>({text:P,tokens:[]}));for(G=s.header.length,b=0;b<G;b++)s.header[b].tokens=this.lexer.inline(s.header[b].text);for(G=s.rows.length,b=0;b<G;b++)for(N=s.rows[b],T=0;T<N.length;T++)N[T].tokens=this.lexer.inline(N[T].text);return s}}}lheading(h){const l=this.rules.block.lheading.exec(h);if(l)return{type:"heading",raw:l[0],depth:l[2].charAt(0)==="="?1:2,text:l[1],tokens:this.lexer.inline(l[1])}}paragraph(h){const l=this.rules.block.paragraph.exec(h);if(l){const s=l[1].charAt(l[1].length-1)===`
`?l[1].slice(0,-1):l[1];return{type:"paragraph",raw:l[0],text:s,tokens:this.lexer.inline(s)}}}text(h){const l=this.rules.block.text.exec(h);if(l)return{type:"text",raw:l[0],text:l[0],tokens:this.lexer.inline(l[0])}}escape(h){const l=this.rules.inline.escape.exec(h);if(l)return{type:"escape",raw:l[0],text:d(l[1])}}tag(h){const l=this.rules.inline.tag.exec(h);if(l)return!this.lexer.state.inLink&&/^<a /i.test(l[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(l[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(l[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(l[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:l[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):d(l[0]):l[0]}}link(h){const l=this.rules.inline.link.exec(h);if(l){const s=l[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const T=B(s.slice(0,-1),"\\");if((s.length-T.length)%2==0)return}else{const T=function(N,G){if(N.indexOf(G[1])===-1)return-1;let P=0;for(let R=0;R<N.length;R++)if(N[R]==="\\")R++;else if(N[R]===G[0])P++;else if(N[R]===G[1]&&(P--,P<0))return R;return-1}(l[2],"()");if(T>-1){const N=(l[0].indexOf("!")===0?5:4)+l[1].length+T;l[2]=l[2].substring(0,T),l[0]=l[0].substring(0,N).trim(),l[3]=""}}let g=l[2],b="";if(this.options.pedantic){const T=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(g);T&&(g=T[1],b=T[3])}else b=l[3]?l[3].slice(1,-1):"";return g=g.trim(),/^</.test(g)&&(g=this.options.pedantic&&!/>$/.test(s)?g.slice(1):g.slice(1,-1)),W(l,{href:g&&g.replace(this.rules.inline._escapes,"$1"),title:b&&b.replace(this.rules.inline._escapes,"$1")},l[0],this.lexer)}}reflink(h,l){let s;if((s=this.rules.inline.reflink.exec(h))||(s=this.rules.inline.nolink.exec(h))){let g=(s[2]||s[1]).replace(/\s+/g," ");if(g=l[g.toLowerCase()],!g){const b=s[0].charAt(0);return{type:"text",raw:b,text:b}}return W(s,g,s[0],this.lexer)}}emStrong(h,l,s=""){let g=this.rules.inline.emStrong.lDelim.exec(h);if(g&&(!g[3]||!s.match(/[\p{L}\p{N}]/u))&&(!g[1]&&!g[2]||!s||this.rules.inline.punctuation.exec(s))){const b=[...g[0]].length-1;let T,N,G=b,P=0;const R=g[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(R.lastIndex=0,l=l.slice(-1*h.length+b);(g=R.exec(l))!=null;){if(T=g[1]||g[2]||g[3]||g[4]||g[5]||g[6],!T)continue;if(N=[...T].length,g[3]||g[4]){G+=N;continue}if((g[5]||g[6])&&b%3&&!((b+N)%3)){P+=N;continue}if(G-=N,G>0)continue;N=Math.min(N,N+G+P);const K=[...h].slice(0,b+g.index+N+1).join("");if(Math.min(b,N)%2){const oe=K.slice(1,-1);return{type:"em",raw:K,text:oe,tokens:this.lexer.inlineTokens(oe)}}const Y=K.slice(2,-2);return{type:"strong",raw:K,text:Y,tokens:this.lexer.inlineTokens(Y)}}}}codespan(h){const l=this.rules.inline.code.exec(h);if(l){let s=l[2].replace(/\n/g," ");const g=/[^ ]/.test(s),b=/^ /.test(s)&&/ $/.test(s);return g&&b&&(s=s.substring(1,s.length-1)),s=d(s,!0),{type:"codespan",raw:l[0],text:s}}}br(h){const l=this.rules.inline.br.exec(h);if(l)return{type:"br",raw:l[0]}}del(h){const l=this.rules.inline.del.exec(h);if(l)return{type:"del",raw:l[0],text:l[2],tokens:this.lexer.inlineTokens(l[2])}}autolink(h,l){const s=this.rules.inline.autolink.exec(h);if(s){let g,b;return s[2]==="@"?(g=d(this.options.mangle?l(s[1]):s[1]),b="mailto:"+g):(g=d(s[1]),b=g),{type:"link",raw:s[0],text:g,href:b,tokens:[{type:"text",raw:g,text:g}]}}}url(h,l){let s;if(s=this.rules.inline.url.exec(h)){let g,b;if(s[2]==="@")g=d(this.options.mangle?l(s[0]):s[0]),b="mailto:"+g;else{let T;do T=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(T!==s[0]);g=d(s[0]),b=s[1]==="www."?"http://"+s[0]:s[0]}return{type:"link",raw:s[0],text:g,href:b,tokens:[{type:"text",raw:g,text:g}]}}}inlineText(h,l){const s=this.rules.inline.text.exec(h);if(s){let g;return g=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):d(s[0]):s[0]:d(this.options.smartypants?l(s[0]):s[0]),{type:"text",raw:s[0],text:g}}}}const z={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:L,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};z.def=v(z.def).replace("label",z._label).replace("title",z._title).getRegex(),z.bullet=/(?:[*+-]|\d{1,9}[.)])/,z.listItemStart=v(/^( *)(bull) */).replace("bull",z.bullet).getRegex(),z.list=v(z.list).replace(/bull/g,z.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+z.def.source+")").getRegex(),z._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",z._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,z.html=v(z.html,"i").replace("comment",z._comment).replace("tag",z._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),z.lheading=v(z.lheading).replace(/bull/g,z.bullet).getRegex(),z.paragraph=v(z._paragraph).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",z._tag).getRegex(),z.blockquote=v(z.blockquote).replace("paragraph",z.paragraph).getRegex(),z.normal={...z},z.gfm={...z.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},z.gfm.table=v(z.gfm.table).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",z._tag).getRegex(),z.gfm.paragraph=v(z._paragraph).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",z.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",z._tag).getRegex(),z.pedantic={...z.normal,html:v(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",z._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:L,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:v(z.normal._paragraph).replace("hr",z.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",z.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const O={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:L,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:L,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};function ne(V){return V.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function f(V){let h="";for(let l=0;l<V.length;l++)h+="&#"+(Math.random()>.5?"x"+V.charCodeAt(l).toString(16):V.charCodeAt(l).toString())+";";return h}O._punctuation="\\p{P}$+<=>`^|~",O.punctuation=v(O.punctuation,"u").replace(/punctuation/g,O._punctuation).getRegex(),O.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,O.anyPunctuation=/\\[punct]/g,O._escapes=/\\([punct])/g,O._comment=v(z._comment).replace("(?:-->|$)","-->").getRegex(),O.emStrong.lDelim=v(O.emStrong.lDelim,"u").replace(/punct/g,O._punctuation).getRegex(),O.emStrong.rDelimAst=v(O.emStrong.rDelimAst,"gu").replace(/punct/g,O._punctuation).getRegex(),O.emStrong.rDelimUnd=v(O.emStrong.rDelimUnd,"gu").replace(/punct/g,O._punctuation).getRegex(),O.anyPunctuation=v(O.anyPunctuation,"gu").replace(/punct/g,O._punctuation).getRegex(),O._escapes=v(O._escapes,"gu").replace(/punct/g,O._punctuation).getRegex(),O._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,O._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,O.autolink=v(O.autolink).replace("scheme",O._scheme).replace("email",O._email).getRegex(),O._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,O.tag=v(O.tag).replace("comment",O._comment).replace("attribute",O._attribute).getRegex(),O._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,O._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,O._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,O.link=v(O.link).replace("label",O._label).replace("href",O._href).replace("title",O._title).getRegex(),O.reflink=v(O.reflink).replace("label",O._label).replace("ref",z._label).getRegex(),O.nolink=v(O.nolink).replace("ref",z._label).getRegex(),O.reflinkSearch=v(O.reflinkSearch,"g").replace("reflink",O.reflink).replace("nolink",O.nolink).getRegex(),O.normal={...O},O.pedantic={...O.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:v(/^!?\[(label)\]\((.*?)\)/).replace("label",O._label).getRegex(),reflink:v(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",O._label).getRegex()},O.gfm={...O.normal,escape:v(O.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},O.gfm.url=v(O.gfm.url,"i").replace("email",O.gfm._extended_email).getRegex(),O.breaks={...O.gfm,br:v(O.br).replace("{2,}","*").getRegex(),text:v(O.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class A{constructor(h){se(this,"tokens");se(this,"options");se(this,"state");se(this,"tokenizer");se(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=h||t.defaults,this.options.tokenizer=this.options.tokenizer||new Q,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const l={block:z.normal,inline:O.normal};this.options.pedantic?(l.block=z.pedantic,l.inline=O.pedantic):this.options.gfm&&(l.block=z.gfm,this.options.breaks?l.inline=O.breaks:l.inline=O.gfm),this.tokenizer.rules=l}static get rules(){return{block:z,inline:O}}static lex(h,l){return new A(l).lex(h)}static lexInline(h,l){return new A(l).inlineTokens(h)}lex(h){let l;for(h=h.replace(/\r\n|\r/g,`
`),this.blockTokens(h,this.tokens);l=this.inlineQueue.shift();)this.inlineTokens(l.src,l.tokens);return this.tokens}blockTokens(h,l=[]){let s,g,b,T;for(h=this.options.pedantic?h.replace(/\t/g,"    ").replace(/^ +$/gm,""):h.replace(/^( *)(\t+)/gm,(N,G,P)=>G+"    ".repeat(P.length));h;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(N=>!!(s=N.call({lexer:this},h,l))&&(h=h.substring(s.raw.length),l.push(s),!0))))if(s=this.tokenizer.space(h))h=h.substring(s.raw.length),s.raw.length===1&&l.length>0?l[l.length-1].raw+=`
`:l.push(s);else if(s=this.tokenizer.code(h))h=h.substring(s.raw.length),g=l[l.length-1],!g||g.type!=="paragraph"&&g.type!=="text"?l.push(s):(g.raw+=`
`+s.raw,g.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=g.text);else if(s=this.tokenizer.fences(h))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.heading(h))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.hr(h))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.blockquote(h))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.list(h))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.html(h))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.def(h))h=h.substring(s.raw.length),g=l[l.length-1],!g||g.type!=="paragraph"&&g.type!=="text"?this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title}):(g.raw+=`
`+s.raw,g.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=g.text);else if(s=this.tokenizer.table(h))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.lheading(h))h=h.substring(s.raw.length),l.push(s);else{if(b=h,this.options.extensions&&this.options.extensions.startBlock){let N=1/0;const G=h.slice(1);let P;this.options.extensions.startBlock.forEach(R=>{P=R.call({lexer:this},G),typeof P=="number"&&P>=0&&(N=Math.min(N,P))}),N<1/0&&N>=0&&(b=h.substring(0,N+1))}if(this.state.top&&(s=this.tokenizer.paragraph(b)))g=l[l.length-1],T&&g.type==="paragraph"?(g.raw+=`
`+s.raw,g.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=g.text):l.push(s),T=b.length!==h.length,h=h.substring(s.raw.length);else if(s=this.tokenizer.text(h))h=h.substring(s.raw.length),g=l[l.length-1],g&&g.type==="text"?(g.raw+=`
`+s.raw,g.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=g.text):l.push(s);else if(h){const N="Infinite loop on byte: "+h.charCodeAt(0);if(this.options.silent){console.error(N);break}throw new Error(N)}}return this.state.top=!0,l}inline(h,l=[]){return this.inlineQueue.push({src:h,tokens:l}),l}inlineTokens(h,l=[]){let s,g,b,T,N,G,P=h;if(this.tokens.links){const R=Object.keys(this.tokens.links);if(R.length>0)for(;(T=this.tokenizer.rules.inline.reflinkSearch.exec(P))!=null;)R.includes(T[0].slice(T[0].lastIndexOf("[")+1,-1))&&(P=P.slice(0,T.index)+"["+"a".repeat(T[0].length-2)+"]"+P.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(T=this.tokenizer.rules.inline.blockSkip.exec(P))!=null;)P=P.slice(0,T.index)+"["+"a".repeat(T[0].length-2)+"]"+P.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(T=this.tokenizer.rules.inline.anyPunctuation.exec(P))!=null;)P=P.slice(0,T.index)+"++"+P.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;h;)if(N||(G=""),N=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(R=>!!(s=R.call({lexer:this},h,l))&&(h=h.substring(s.raw.length),l.push(s),!0))))if(s=this.tokenizer.escape(h))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.tag(h))h=h.substring(s.raw.length),g=l[l.length-1],g&&s.type==="text"&&g.type==="text"?(g.raw+=s.raw,g.text+=s.text):l.push(s);else if(s=this.tokenizer.link(h))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.reflink(h,this.tokens.links))h=h.substring(s.raw.length),g=l[l.length-1],g&&s.type==="text"&&g.type==="text"?(g.raw+=s.raw,g.text+=s.text):l.push(s);else if(s=this.tokenizer.emStrong(h,P,G))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.codespan(h))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.br(h))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.del(h))h=h.substring(s.raw.length),l.push(s);else if(s=this.tokenizer.autolink(h,f))h=h.substring(s.raw.length),l.push(s);else if(this.state.inLink||!(s=this.tokenizer.url(h,f))){if(b=h,this.options.extensions&&this.options.extensions.startInline){let R=1/0;const K=h.slice(1);let Y;this.options.extensions.startInline.forEach(oe=>{Y=oe.call({lexer:this},K),typeof Y=="number"&&Y>=0&&(R=Math.min(R,Y))}),R<1/0&&R>=0&&(b=h.substring(0,R+1))}if(s=this.tokenizer.inlineText(b,ne))h=h.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(G=s.raw.slice(-1)),N=!0,g=l[l.length-1],g&&g.type==="text"?(g.raw+=s.raw,g.text+=s.text):l.push(s);else if(h){const R="Infinite loop on byte: "+h.charCodeAt(0);if(this.options.silent){console.error(R);break}throw new Error(R)}}else h=h.substring(s.raw.length),l.push(s);return l}}class w{constructor(h){se(this,"options");this.options=h||t.defaults}code(h,l,s){const g=(l||"").match(/^\S*/)?.[0];if(this.options.highlight){const b=this.options.highlight(h,g);b!=null&&b!==h&&(s=!0,h=b)}return h=h.replace(/\n$/,"")+`
`,g?'<pre><code class="'+this.options.langPrefix+d(g)+'">'+(s?h:d(h,!0))+`</code></pre>
`:"<pre><code>"+(s?h:d(h,!0))+`</code></pre>
`}blockquote(h){return`<blockquote>
${h}</blockquote>
`}html(h,l){return h}heading(h,l,s,g){return this.options.headerIds?`<h${l} id="${this.options.headerPrefix+g.slug(s)}">${h}</h${l}>
`:`<h${l}>${h}</h${l}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(h,l,s){const g=l?"ol":"ul";return"<"+g+(l&&s!==1?' start="'+s+'"':"")+`>
`+h+"</"+g+`>
`}listitem(h,l,s){return`<li>${h}</li>
`}checkbox(h){return"<input "+(h?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(h){return`<p>${h}</p>
`}table(h,l){return l&&(l=`<tbody>${l}</tbody>`),`<table>
<thead>
`+h+`</thead>
`+l+`</table>
`}tablerow(h){return`<tr>
${h}</tr>
`}tablecell(h,l){const s=l.header?"th":"td";return(l.align?`<${s} align="${l.align}">`:`<${s}>`)+h+`</${s}>
`}strong(h){return`<strong>${h}</strong>`}em(h){return`<em>${h}</em>`}codespan(h){return`<code>${h}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(h){return`<del>${h}</del>`}link(h,l,s){const g=E(this.options.sanitize,this.options.baseUrl,h);if(g===null)return s;let b='<a href="'+(h=g)+'"';return l&&(b+=' title="'+l+'"'),b+=">"+s+"</a>",b}image(h,l,s){const g=E(this.options.sanitize,this.options.baseUrl,h);if(g===null)return s;let b=`<img src="${h=g}" alt="${s}"`;return l&&(b+=` title="${l}"`),b+=this.options.xhtml?"/>":">",b}text(h){return h}}class S{strong(h){return h}em(h){return h}codespan(h){return h}del(h){return h}html(h){return h}text(h){return h}link(h,l,s){return""+s}image(h,l,s){return""+s}br(){return""}}class H{constructor(){se(this,"seen");this.seen={}}serialize(h){return h.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(h,l){let s=h,g=0;if(this.seen.hasOwnProperty(s)){g=this.seen[h];do g++,s=h+"-"+g;while(this.seen.hasOwnProperty(s))}return l||(this.seen[h]=g,this.seen[s]=0),s}slug(h,l={}){const s=this.serialize(h);return this.getNextSafeSlug(s,l.dryrun)}}class te{constructor(h){se(this,"options");se(this,"renderer");se(this,"textRenderer");se(this,"slugger");this.options=h||t.defaults,this.options.renderer=this.options.renderer||new w,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new S,this.slugger=new H}static parse(h,l){return new te(l).parse(h)}static parseInline(h,l){return new te(l).parseInline(h)}parse(h,l=!0){let s="";for(let g=0;g<h.length;g++){const b=h[g];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[b.type]){const T=b,N=this.options.extensions.renderers[T.type].call({parser:this},T);if(N!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(T.type)){s+=N||"";continue}}switch(b.type){case"space":continue;case"hr":s+=this.renderer.hr();continue;case"heading":{const T=b;s+=this.renderer.heading(this.parseInline(T.tokens),T.depth,C(this.parseInline(T.tokens,this.textRenderer)),this.slugger);continue}case"code":{const T=b;s+=this.renderer.code(T.text,T.lang,!!T.escaped);continue}case"table":{const T=b;let N="",G="";for(let R=0;R<T.header.length;R++)G+=this.renderer.tablecell(this.parseInline(T.header[R].tokens),{header:!0,align:T.align[R]});N+=this.renderer.tablerow(G);let P="";for(let R=0;R<T.rows.length;R++){const K=T.rows[R];G="";for(let Y=0;Y<K.length;Y++)G+=this.renderer.tablecell(this.parseInline(K[Y].tokens),{header:!1,align:T.align[Y]});P+=this.renderer.tablerow(G)}s+=this.renderer.table(N,P);continue}case"blockquote":{const T=b,N=this.parse(T.tokens);s+=this.renderer.blockquote(N);continue}case"list":{const T=b,N=T.ordered,G=T.start,P=T.loose;let R="";for(let K=0;K<T.items.length;K++){const Y=T.items[K],oe=Y.checked,de=Y.task;let ge="";if(Y.task){const ue=this.renderer.checkbox(!!oe);P?Y.tokens.length>0&&Y.tokens[0].type==="paragraph"?(Y.tokens[0].text=ue+" "+Y.tokens[0].text,Y.tokens[0].tokens&&Y.tokens[0].tokens.length>0&&Y.tokens[0].tokens[0].type==="text"&&(Y.tokens[0].tokens[0].text=ue+" "+Y.tokens[0].tokens[0].text)):Y.tokens.unshift({type:"text",text:ue}):ge+=ue}ge+=this.parse(Y.tokens,P),R+=this.renderer.listitem(ge,de,!!oe)}s+=this.renderer.list(R,N,G);continue}case"html":{const T=b;s+=this.renderer.html(T.text,T.block);continue}case"paragraph":{const T=b;s+=this.renderer.paragraph(this.parseInline(T.tokens));continue}case"text":{let T=b,N=T.tokens?this.parseInline(T.tokens):T.text;for(;g+1<h.length&&h[g+1].type==="text";)T=h[++g],N+=`
`+(T.tokens?this.parseInline(T.tokens):T.text);s+=l?this.renderer.paragraph(N):N;continue}default:{const T='Token with "'+b.type+'" type was not found.';if(this.options.silent)return console.error(T),"";throw new Error(T)}}}return s}parseInline(h,l){l=l||this.renderer;let s="";for(let g=0;g<h.length;g++){const b=h[g];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[b.type]){const T=this.options.extensions.renderers[b.type].call({parser:this},b);if(T!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(b.type)){s+=T||"";continue}}switch(b.type){case"escape":{const T=b;s+=l.text(T.text);break}case"html":{const T=b;s+=l.html(T.text);break}case"link":{const T=b;s+=l.link(T.href,T.title,this.parseInline(T.tokens,l));break}case"image":{const T=b;s+=l.image(T.href,T.title,T.text);break}case"strong":{const T=b;s+=l.strong(this.parseInline(T.tokens,l));break}case"em":{const T=b;s+=l.em(this.parseInline(T.tokens,l));break}case"codespan":{const T=b;s+=l.codespan(T.text);break}case"br":s+=l.br();break;case"del":{const T=b;s+=l.del(this.parseInline(T.tokens,l));break}case"text":{const T=b;s+=l.text(T.text);break}default:{const T='Token with "'+b.type+'" type was not found.';if(this.options.silent)return console.error(T),"";throw new Error(T)}}}return s}}class ce{constructor(h){se(this,"options");this.options=h||t.defaults}preprocess(h){return h}postprocess(h){return h}}se(ce,"passThroughHooks",new Set(["preprocess","postprocess"]));class ie{constructor(...h){Te(this,ye);Te(this,ve);se(this,"defaults",{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1});se(this,"options",this.setOptions);se(this,"parse",Ie(this,ye,Le).call(this,A.lex,te.parse));se(this,"parseInline",Ie(this,ye,Le).call(this,A.lexInline,te.parseInline));se(this,"Parser",te);se(this,"parser",te.parse);se(this,"Renderer",w);se(this,"TextRenderer",S);se(this,"Lexer",A);se(this,"lexer",A.lex);se(this,"Tokenizer",Q);se(this,"Slugger",H);se(this,"Hooks",ce);this.use(...h)}walkTokens(h,l){let s=[];for(const g of h)switch(s=s.concat(l.call(this,g)),g.type){case"table":{const b=g;for(const T of b.header)s=s.concat(this.walkTokens(T.tokens,l));for(const T of b.rows)for(const N of T)s=s.concat(this.walkTokens(N.tokens,l));break}case"list":{const b=g;s=s.concat(this.walkTokens(b.items,l));break}default:{const b=g;this.defaults.extensions?.childTokens?.[b.type]?this.defaults.extensions.childTokens[b.type].forEach(T=>{s=s.concat(this.walkTokens(b[T],l))}):b.tokens&&(s=s.concat(this.walkTokens(b.tokens,l)))}}return s}use(...h){const l=this.defaults.extensions||{renderers:{},childTokens:{}};return h.forEach(s=>{const g={...s};if(g.async=this.defaults.async||g.async||!1,s.extensions&&(s.extensions.forEach(b=>{if(!b.name)throw new Error("extension name required");if("renderer"in b){const T=l.renderers[b.name];l.renderers[b.name]=T?function(...N){let G=b.renderer.apply(this,N);return G===!1&&(G=T.apply(this,N)),G}:b.renderer}if("tokenizer"in b){if(!b.level||b.level!=="block"&&b.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const T=l[b.level];T?T.unshift(b.tokenizer):l[b.level]=[b.tokenizer],b.start&&(b.level==="block"?l.startBlock?l.startBlock.push(b.start):l.startBlock=[b.start]:b.level==="inline"&&(l.startInline?l.startInline.push(b.start):l.startInline=[b.start]))}"childTokens"in b&&b.childTokens&&(l.childTokens[b.name]=b.childTokens)}),g.extensions=l),s.renderer){const b=this.defaults.renderer||new w(this.defaults);for(const T in s.renderer){const N=s.renderer[T],G=T,P=b[G];b[G]=(...R)=>{let K=N.apply(b,R);return K===!1&&(K=P.apply(b,R)),K||""}}g.renderer=b}if(s.tokenizer){const b=this.defaults.tokenizer||new Q(this.defaults);for(const T in s.tokenizer){const N=s.tokenizer[T],G=T,P=b[G];b[G]=(...R)=>{let K=N.apply(b,R);return K===!1&&(K=P.apply(b,R)),K}}g.tokenizer=b}if(s.hooks){const b=this.defaults.hooks||new ce;for(const T in s.hooks){const N=s.hooks[T],G=T,P=b[G];ce.passThroughHooks.has(T)?b[G]=R=>{if(this.defaults.async)return Promise.resolve(N.call(b,R)).then(Y=>P.call(b,Y));const K=N.call(b,R);return P.call(b,K)}:b[G]=(...R)=>{let K=N.apply(b,R);return K===!1&&(K=P.apply(b,R)),K}}g.hooks=b}if(s.walkTokens){const b=this.defaults.walkTokens,T=s.walkTokens;g.walkTokens=function(N){let G=[];return G.push(T.call(this,N)),b&&(G=G.concat(b.call(this,N))),G}}this.defaults={...this.defaults,...g}}),this}setOptions(h){return this.defaults={...this.defaults,...h},this}}ye=new WeakSet,Le=function(h,l){return(s,g,b)=>{typeof g=="function"&&(b=g,g=null);const T={...g},N={...this.defaults,...T};this.defaults.async===!0&&T.async===!1&&(N.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),N.async=!0);const G=Ie(this,ve,je).call(this,!!N.silent,!!N.async,b);if(s==null)return G(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return G(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(function(P,R){P&&!P.silent&&(R&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(P.sanitize||P.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(P.highlight||P.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),P.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),P.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),P.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),P.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(P.headerIds||P.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}(N,b),N.hooks&&(N.hooks.options=N),b){const P=b,R=N.highlight;let K;try{N.hooks&&(s=N.hooks.preprocess(s)),K=h(s,N)}catch(de){return G(de)}const Y=de=>{let ge;if(!de)try{N.walkTokens&&this.walkTokens(K,N.walkTokens),ge=l(K,N),N.hooks&&(ge=N.hooks.postprocess(ge))}catch(ue){de=ue}return N.highlight=R,de?G(de):P(null,ge)};if(!R||R.length<3||(delete N.highlight,!K.length))return Y();let oe=0;return this.walkTokens(K,de=>{de.type==="code"&&(oe++,setTimeout(()=>{R(de.text,de.lang,(ge,ue)=>{if(ge)return Y(ge);ue!=null&&ue!==de.text&&(de.text=ue,de.escaped=!0),oe--,oe===0&&Y()})},0))}),void(oe===0&&Y())}if(N.async)return Promise.resolve(N.hooks?N.hooks.preprocess(s):s).then(P=>h(P,N)).then(P=>N.walkTokens?Promise.all(this.walkTokens(P,N.walkTokens)).then(()=>P):P).then(P=>l(P,N)).then(P=>N.hooks?N.hooks.postprocess(P):P).catch(G);try{N.hooks&&(s=N.hooks.preprocess(s));const P=h(s,N);N.walkTokens&&this.walkTokens(P,N.walkTokens);let R=l(P,N);return N.hooks&&(R=N.hooks.postprocess(R)),R}catch(P){return G(P)}}},ve=new WeakSet,je=function(h,l,s){return g=>{if(g.message+=`
Please report this to https://github.com/markedjs/marked.`,h){const b="<p>An error occurred:</p><pre>"+d(g.message+"",!0)+"</pre>";return l?Promise.resolve(b):s?void s(null,b):b}if(l)return Promise.reject(g);if(!s)throw g;s(g)}};const le=new ie;function q(V,h,l){return le.parse(V,h,l)}q.options=q.setOptions=function(V){return le.setOptions(V),q.defaults=le.defaults,a(q.defaults),q},q.getDefaults=e,q.defaults=t.defaults,q.use=function(...V){return le.use(...V),q.defaults=le.defaults,a(q.defaults),q},q.walkTokens=function(V,h){return le.walkTokens(V,h)},q.parseInline=le.parseInline,q.Parser=te,q.parser=te.parse,q.Renderer=w,q.TextRenderer=S,q.Lexer=A,q.lexer=A.lex,q.Tokenizer=Q,q.Slugger=H,q.Hooks=ce,q.parse=q;const we=q.options,me=q.setOptions,_=q.use,F=q.walkTokens,re=q.parseInline,Ae=q,be=te.parse,Ce=A.lex;t.Hooks=ce,t.Lexer=A,t.Marked=ie,t.Parser=te,t.Renderer=w,t.Slugger=H,t.TextRenderer=S,t.Tokenizer=Q,t.getDefaults=e,t.lexer=Ce,t.marked=q,t.options=we,t.parse=Ae,t.parseInline=re,t.parser=be,t.setOptions=me,t.use=_,t.walkTokens=F}},J={};function $(r){var t=J[r];if(t!==void 0)return t.exports;var e=J[r]={id:r,exports:{}};return X[r].call(e.exports,e,e.exports,$),e.exports}$.n=r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return $.d(t,{a:t}),t},$.d=(r,t)=>{for(var e in t)$.o(t,e)&&!$.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:t[e]})},$.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),$.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),$.r=r=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},$.nc=void 0;var ee={};return(()=>{"use strict";var r=ee;Object.defineProperty(r,"__esModule",{value:!0}),r.MynahUI=r.MynahIcons=r.ChatItemType=r.NotificationType=r.EngagementType=r.RelevancyVoteType=void 0;const t=$(7067),e=$(4769),a=$(7609),p=$(4601),c=$(6446),i=$(8347),y=$(8054),n=$(6508),o=$(9456),d=$(970);$(9967);var u=$(7609);Object.defineProperty(r,"RelevancyVoteType",{enumerable:!0,get:function(){return u.RelevancyVoteType}}),Object.defineProperty(r,"EngagementType",{enumerable:!0,get:function(){return u.EngagementType}}),Object.defineProperty(r,"NotificationType",{enumerable:!0,get:function(){return u.NotificationType}}),Object.defineProperty(r,"ChatItemType",{enumerable:!0,get:function(){return u.ChatItemType}});var C=$(9275);Object.defineProperty(r,"MynahIcons",{enumerable:!0,get:function(){return C.MynahIcons}}),r.MynahUI=class{constructor(D){this.chatWrappers={},this.addGlobalListeners=()=>{p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.CHAT_PROMPT,m=>{this.props.onChatPrompt!==void 0&&this.props.onChatPrompt(m.tabId,m.prompt)}),p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.FOLLOW_UP_CLICKED,m=>{this.props.onFollowUpClicked!==void 0&&this.props.onFollowUpClicked(m.tabId,m.messageId,m.followUpOption)}),p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.SHOW_MORE_WEB_RESULTS_CLICK,m=>{this.props.onShowMoreWebResultsClick!==void 0&&this.props.onShowMoreWebResultsClick(n.MynahUITabsStore.getInstance().getSelectedTabId(),m.messageId)}),p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.FEEDBACK_SET,m=>{this.props.onSendFeedback!==void 0&&this.props.onSendFeedback(n.MynahUITabsStore.getInstance().getSelectedTabId(),m)}),p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.CHAT_ITEM_ENGAGEMENT,m=>{this.props.onChatItemEngagement!==void 0&&this.props.onChatItemEngagement(n.MynahUITabsStore.getInstance().getSelectedTabId(),m.messageId,m.engagement)}),p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.COPY_CODE_TO_CLIPBOARD,m=>{this.props.onCopyCodeToClipboard!==void 0&&this.props.onCopyCodeToClipboard(n.MynahUITabsStore.getInstance().getSelectedTabId(),m.messageId,m.text,m.type,m.referenceTrackerInformation)}),p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.INSERT_CODE_TO_CURSOR_POSITION,m=>{this.props.onCodeInsertToCursorPosition!==void 0&&this.props.onCodeInsertToCursorPosition(n.MynahUITabsStore.getInstance().getSelectedTabId(),m.messageId,m.text,m.type,m.referenceTrackerInformation)}),p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.SOURCE_LINK_CLICK,m=>{this.props.onSourceLinkClick!==void 0&&this.props.onSourceLinkClick(n.MynahUITabsStore.getInstance().getSelectedTabId(),m.messageId,m.link,m.event)}),p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.LINK_CLICK,m=>{this.props.onLinkClick!==void 0&&this.props.onLinkClick(n.MynahUITabsStore.getInstance().getSelectedTabId(),m.messageId,m.link,m.event)}),p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.INFO_LINK_CLICK,m=>{this.props.onInfoLinkClick!==void 0&&this.props.onInfoLinkClick(n.MynahUITabsStore.getInstance().getSelectedTabId(),m.link,m.event)}),p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.CARD_VOTE,m=>{this.props.onVote!==void 0&&this.props.onVote(m.tabId,m.messageId,m.vote)}),p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.RESET_STORE,m=>{this.props.onResetStore!==void 0&&this.props.onResetStore(m.tabId)}),p.MynahUIGlobalEvents.getInstance().addListener(a.MynahEventNames.OPEN_DIFF,m=>{this.props.onOpenDiff!==void 0&&this.props.onOpenDiff(m.tabId,m.filePath,m.deleted,m.messageId)})},this.addToUserPrompt=(m,I)=>{n.MynahUITabsStore.getInstance().getTab(m)!==null&&this.chatWrappers[m].addToPrompt(I)},this.addChatItem=(m,I)=>{n.MynahUITabsStore.getInstance().getTab(m)!==null&&(p.MynahUIGlobalEvents.getInstance().dispatch(a.MynahEventNames.CHAT_ITEM_ADD,{tabId:m,chatItem:I}),n.MynahUITabsStore.getInstance().getTabDataStore(m).updateStore({chatItems:[...n.MynahUITabsStore.getInstance().getTabDataStore(m).getValue("chatItems"),I]}))},this.updateLastChatAnswer=(m,I)=>{n.MynahUITabsStore.getInstance().getTab(m)!==null&&this.chatWrappers[m].updateLastChatAnswer(I)},this.updateStore=(m,I)=>m===""?n.MynahUITabsStore.getInstance().addTab({store:{...I}}):(n.MynahUITabsStore.getInstance().getTab(m)!==null&&n.MynahUITabsStore.getInstance().updateTab(m,{store:{...I}}),m),this.notify=m=>{new t.Notification({...m,onNotificationClick:()=>{}}).notify()},d.marked.use({renderer:{listitem:m=>`<li> ${m.replace(/\[\[([^[]+)\]\](\(([^)]*))\)/gim,'<a href="$3">[$1]</a>')}</li>`}}),this.props=D,o.Config.getInstance(D.config),e.DomBuilder.getInstance(D.rootSelector),n.MynahUITabsStore.getInstance(this.props.tabs,this.props.defaults),p.MynahUIGlobalEvents.getInstance();const v=n.MynahUITabsStore.getInstance().getAllTabs();this.tabContentsWrapper=e.DomBuilder.getInstance().build({type:"div",classNames:["mynah-ui-tab-contents-wrapper"],children:Object.keys(v).map(m=>(this.chatWrappers[m]=new i.ChatWrapper({tabId:m,onStopChatResponse:D.onStopChatResponse}),this.chatWrappers[m].render))}),D.onSendFeedback!==void 0&&(this.feedbackForm=new y.FeedbackForm),this.tabsWrapper=new c.Tabs({onChange:m=>{this.props.onTabChange!==void 0&&this.props.onTabChange(m)}}).render,this.tabsWrapper.setAttribute("selected-tab",n.MynahUITabsStore.getInstance().getSelectedTabId()),this.wrapper=e.DomBuilder.getInstance().createPortal(a.MynahPortalNames.WRAPPER,{type:"div",attributes:{id:"mynah-wrapper"},children:[this.tabsWrapper,this.tabContentsWrapper]},"afterbegin"),n.MynahUITabsStore.getInstance().addListener("add",m=>{this.chatWrappers[m]=new i.ChatWrapper({tabId:m,onStopChatResponse:D.onStopChatResponse}),this.tabContentsWrapper.appendChild(this.chatWrappers[m].render),this.props.onTabAdd!==void 0&&this.props.onTabAdd(m)}),n.MynahUITabsStore.getInstance().addListener("remove",m=>{this.chatWrappers[m].render.remove(),delete this.chatWrappers[m],this.props.onTabRemove!==void 0&&this.props.onTabRemove(m)}),this.addGlobalListeners(),this.props.onReady!==void 0&&this.props.onReady()}}})(),ee})())},754:(Z,X,J)=>{"use strict";J.d(X,{Z:()=>a});var $=J(7537),ee=J.n($),r=J(3645),t=J.n(r),e=t()(ee());e.push([Z.id,"body.vscode-dark,body.vscode-high-contrast:not(.vscode-high-contrast-light){--mynah-color-light: rgba(255, 255, 255, 0.05);--mynah-color-highlight: rgba(0, 137, 255, 0.2);--mynah-color-highlight-text: rgba(0, 137, 255, 1)}","",{version:3,sources:["webpack://./src/amazonq/webview/ui/styles/dark.scss"],names:[],mappings:"AAAA,4EAEI,8CAAA,CACA,+CAAA,CACA,kDAAA",sourcesContent:[`body.vscode-dark,
body.vscode-high-contrast:not(.vscode-high-contrast-light) {
    --mynah-color-light: rgba(255, 255, 255, 0.05);
    --mynah-color-highlight: rgba(0, 137, 255, 0.2);
    --mynah-color-highlight-text: rgba(0, 137, 255, 1);
}
`],sourceRoot:""}]);const a=e},3645:Z=>{"use strict";Z.exports=function(X){var J=[];return J.toString=function(){return this.map(function(ee){var r="",t=typeof ee[5]<"u";return ee[4]&&(r+="@supports (".concat(ee[4],") {")),ee[2]&&(r+="@media ".concat(ee[2]," {")),t&&(r+="@layer".concat(ee[5].length>0?" ".concat(ee[5]):""," {")),r+=X(ee),t&&(r+="}"),ee[2]&&(r+="}"),ee[4]&&(r+="}"),r}).join("")},J.i=function(ee,r,t,e,a){typeof ee=="string"&&(ee=[[null,ee,void 0]]);var p={};if(t)for(var c=0;c<this.length;c++){var i=this[c][0];i!=null&&(p[i]=!0)}for(var y=0;y<ee.length;y++){var n=[].concat(ee[y]);t&&p[n[0]]||(typeof a<"u"&&(typeof n[5]>"u"||(n[1]="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {").concat(n[1],"}")),n[5]=a),r&&(n[2]&&(n[1]="@media ".concat(n[2]," {").concat(n[1],"}")),n[2]=r),e&&(n[4]?(n[1]="@supports (".concat(n[4],") {").concat(n[1],"}"),n[4]=e):n[4]="".concat(e)),J.push(n))}},J}},7537:Z=>{"use strict";Z.exports=function(X){var J=X[1],$=X[3];if(!$)return J;if(typeof btoa=="function"){var ee=btoa(unescape(encodeURIComponent(JSON.stringify($)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(ee),t="/*# ".concat(r," */");return[J].concat([t]).join(`
`)}return[J].join(`
`)}},3379:Z=>{"use strict";var X=[];function J(r){for(var t=-1,e=0;e<X.length;e++)if(X[e].identifier===r){t=e;break}return t}function $(r,t){for(var e={},a=[],p=0;p<r.length;p++){var c=r[p],i=t.base?c[0]+t.base:c[0],y=e[i]||0,n="".concat(i," ").concat(y);e[i]=y+1;var o=J(n),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(o!==-1)X[o].references++,X[o].updater(d);else{var u=ee(d,t);t.byIndex=p,X.splice(p,0,{identifier:n,updater:u,references:1})}a.push(n)}return a}function ee(r,t){var e=t.domAPI(t);e.update(r);var a=function(c){if(c){if(c.css===r.css&&c.media===r.media&&c.sourceMap===r.sourceMap&&c.supports===r.supports&&c.layer===r.layer)return;e.update(r=c)}else e.remove()};return a}Z.exports=function(r,t){t=t||{},r=r||[];var e=$(r,t);return function(p){p=p||[];for(var c=0;c<e.length;c++){var i=e[c],y=J(i);X[y].references--}for(var n=$(p,t),o=0;o<e.length;o++){var d=e[o],u=J(d);X[u].references===0&&(X[u].updater(),X.splice(u,1))}e=n}}},569:Z=>{"use strict";var X={};function J(ee){if(typeof X[ee]>"u"){var r=document.querySelector(ee);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch{r=null}X[ee]=r}return X[ee]}function $(ee,r){var t=J(ee);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}Z.exports=$},9216:Z=>{"use strict";function X(J){var $=document.createElement("style");return J.setAttributes($,J.attributes),J.insert($,J.options),$}Z.exports=X},3565:(Z,X,J)=>{"use strict";function $(ee){var r=J.nc;r&&ee.setAttribute("nonce",r)}Z.exports=$},7795:Z=>{"use strict";function X(ee,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var a=typeof t.layer<"u";a&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,a&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var p=t.sourceMap;p&&typeof btoa<"u"&&(e+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(p))))," */")),r.styleTagTransform(e,ee,r.options)}function J(ee){if(ee.parentNode===null)return!1;ee.parentNode.removeChild(ee)}function $(ee){if(typeof document>"u")return{update:function(){},remove:function(){}};var r=ee.insertStyleElement(ee);return{update:function(e){X(r,ee,e)},remove:function(){J(r)}}}Z.exports=$},4589:Z=>{"use strict";function X(J,$){if($.styleSheet)$.styleSheet.cssText=J;else{for(;$.firstChild;)$.removeChild($.firstChild);$.appendChild(document.createTextNode(J))}}Z.exports=X}},he={};function ae(Z){var X=he[Z];if(X!==void 0)return X.exports;var J=he[Z]={id:Z,exports:{}};return pe[Z](J,J.exports,ae),J.exports}ae.n=Z=>{var X=Z&&Z.__esModule?()=>Z.default:()=>Z;return ae.d(X,{a:X}),X},ae.d=(Z,X)=>{for(var J in X)ae.o(X,J)&&!ae.o(Z,J)&&Object.defineProperty(Z,J,{enumerable:!0,get:X[J]})},ae.o=(Z,X)=>Object.prototype.hasOwnProperty.call(Z,X),ae.r=Z=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(Z,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Z,"__esModule",{value:!0})},ae.nc=void 0;var fe={};(()=>{"use strict";ae.r(fe),ae.d(fe,{createMynahUI:()=>O});var Z=ae(5399);/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class X{generateAuthFollowUps(f,A){let w;switch(A){case"full-auth":w="Authenticate";break;case"use-supported-auth":case"missing_scopes":w="Enable Amazon Q";break;case"re-auth":w="Re-authenticate";break}switch(f){default:return{text:"",options:[{pillText:w,type:A,status:"info",icon:"refresh"}]}}}generateWelcomeBlockForTab(f){switch(f){case"featuredev":return{text:"Would you like to follow up with",options:[{pillText:"What are some examples?",type:"DevExamples"}]};default:return{text:"Try Examples:",options:[{pillText:"Explain selected code",prompt:"Explain selected code",type:"init-prompt"},{pillText:"How can Amazon Q help me?",type:"help"}]}}}}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class J{constructor(f){this.onSourceLinkClick=(A,w,S)=>{this.sendMessageToExtension({command:"source-link-click",tabID:A,messageId:w,link:S,tabType:"cwc"})},this.onResponseBodyLinkClick=(A,w,S)=>{this.sendMessageToExtension({command:"response-body-link-click",tabID:A,messageId:w,link:S,tabType:"cwc"})},this.onInfoLinkClick=(A,w)=>{this.sendMessageToExtension({command:"footer-info-link-click",tabID:A,link:w,tabType:"cwc"})},this.followUpClicked=(A,w,S)=>{this.sendMessageToExtension({command:"follow-up-was-clicked",followUp:S,tabID:A,messageId:w,tabType:"cwc"})},this.onTabAdd=(A,w)=>{this.sendMessageToExtension({tabID:A,command:"new-tab-was-created",tabType:"cwc",tabOpenInteractionType:w})},this.onCodeInsertToCursorPosition=(A,w,S,H,te)=>{this.sendMessageToExtension({tabID:A,messageId:w,code:S,command:"insert_code_at_cursor_position",tabType:"cwc",insertionTargetType:H,codeReference:te})},this.onCopyCodeToClipboard=(A,w,S,H,te)=>{this.sendMessageToExtension({tabID:A,messageId:w,code:S,command:"code_was_copied_to_clipboard",tabType:"cwc",insertionTargetType:H,codeReference:te})},this.onTabRemove=A=>{this.sendMessageToExtension({tabID:A,command:"tab-was-removed",tabType:"cwc"})},this.onTabChange=(A,w)=>{this.sendMessageToExtension({tabID:A,command:"tab-was-changed",tabType:"cwc",prevTabID:w})},this.onStopChatResponse=A=>{this.sendMessageToExtension({tabID:A,command:"stop-response",tabType:"cwc"})},this.onChatItemVoted=(A,w,S)=>{this.sendMessageToExtension({tabID:A,command:"chat-item-voted",messageId:w,vote:S,tabType:"cwc"})},this.onSendFeedback=(A,w)=>{this.sendMessageToExtension({command:"chat-item-feedback",...w,tabType:"cwc",tabID:A})},this.requestGenerativeAIAnswer=(A,w)=>new Promise((S,H)=>{this.sendMessageToExtension({tabID:A,command:"chat-prompt",chatMessage:w.chatMessage,chatCommand:w.chatCommand,tabType:"cwc"})}),this.clearChat=A=>{this.sendMessageToExtension({tabID:A,command:"clear",chatMessage:"",tabType:"cwc"})},this.help=A=>{this.sendMessageToExtension({tabID:A,command:"help",chatMessage:"",tabType:"cwc"})},this.sendTriggerMessageProcessed=async A=>{this.sendMessageToExtension({command:"trigger-message-processed",requestID:A,tabType:"cwc"})},this.processEditorContextCommandMessage=async A=>{const w=this.onCWCContextCommandMessage({body:A.message,type:Z.ChatItemType.PROMPT},A.command);this.sendTriggerTabIDReceived(A.triggerID,w!==void 0?w:"no-available-tabs")},this.sendTriggerTabIDReceived=async(A,w)=>{this.sendMessageToExtension({command:"trigger-tabID-received",triggerID:A,tabID:w,tabType:"cwc"})},this.processChatMessage=async A=>{if(this.onChatAnswerReceived!==void 0){if(A.message!==void 0||A.relatedSuggestions!==void 0||A.codeReference!==void 0){const w=A.followUps!==void 0&&A.followUps.length>0?{text:A.followUpsHeader??"Suggested follow up questions:",options:A.followUps}:void 0,S={type:A.messageType,messageId:A.messageID??A.triggerID,body:A.message,followUp:w,canBeVoted:!0,codeReference:A.codeReference};(A.messageType==="answer-part"||A.messageType==="answer")&&(S.canBeVoted=!0),A.relatedSuggestions!==void 0&&(S.relatedContent={title:"Sources",content:A.relatedSuggestions}),this.onChatAnswerReceived(A.tabID,S),(A.messageType===Z.ChatItemType.SYSTEM_PROMPT||A.messageType===Z.ChatItemType.AI_PROMPT)&&await this.sendTriggerMessageProcessed(A.requestID);return}if(A.messageType===Z.ChatItemType.ANSWER){const w={type:A.messageType,body:void 0,relatedContent:void 0,messageId:A.messageID,codeReference:A.codeReference,followUp:A.followUps!==void 0&&A.followUps.length>0?{text:"Suggested follow up questions:",options:A.followUps}:void 0};this.onChatAnswerReceived(A.tabID,w);return}}},this.transform=A=>{this.sendMessageToExtension({tabID:A,command:"transform",chatMessage:"transform",tabType:"cwc"})},this.processAuthNeededException=async A=>{this.onChatAnswerReceived!==void 0&&this.onChatAnswerReceived(A.tabID,{type:Z.ChatItemType.ANSWER,messageId:A.triggerID,body:A.message,followUp:this.followUpGenerator.generateAuthFollowUps("cwc",A.authType),canBeVoted:!1})},this.handleMessageReceive=async A=>{if(A.type==="errorMessage"){this.onError(A.tabID,A.message,A.title);return}if(A.type==="showInvalidTokenNotification"){this.onWarning(A.tabID,A.message,A.title);return}if(A.type==="chatMessage"){await this.processChatMessage(A);return}if(A.type==="editorContextCommandMessage"){await this.processEditorContextCommandMessage(A);return}if(A.type==="authNeededException"){await this.processAuthNeededException(A);return}},this.sendMessageToExtension=f.sendMessageToExtension,this.onChatAnswerReceived=f.onChatAnswerReceived,this.onWarning=f.onWarning,this.onError=f.onError,this.onCWCContextCommandMessage=f.onCWCContextCommandMessage,this.followUpGenerator=new X}}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class ${constructor(f){this.onCodeInsertToCursorPosition=(A,w,S,H)=>{this.sendMessageToExtension({tabID:A,code:w,command:"insert_code_at_cursor_position",codeReference:H,tabType:"featuredev"})},this.onCopyCodeToClipboard=(A,w,S,H)=>{this.sendMessageToExtension({tabID:A,code:w,command:"code_was_copied_to_clipboard",codeReference:H,tabType:"featuredev"})},this.onOpenDiff=(A,w,S)=>{this.sendMessageToExtension({command:"open-diff",tabID:A,filePath:w,deleted:S,tabType:"featuredev"})},this.followUpClicked=(A,w)=>{this.sendMessageToExtension({command:"follow-up-was-clicked",followUp:w,tabID:A,tabType:"featuredev"})},this.requestGenerativeAIAnswer=(A,w)=>new Promise((S,H)=>{this.sendMessageToExtension({tabID:A,command:"chat-prompt",chatMessage:w.chatMessage,tabType:"featuredev"})}),this.processChatMessage=async A=>{if(this.onChatAnswerReceived!==void 0){const w={type:A.messageType,body:A.message??void 0,messageId:A.messageID??A.triggerID??"",relatedContent:void 0,canBeVoted:A.canBeVoted,followUp:A.followUps!==void 0&&A.followUps.length>0?{text:A.messageType===Z.ChatItemType.SYSTEM_PROMPT?"":"Please follow up with one of these",options:A.followUps}:void 0};this.onChatAnswerReceived(A.tabID,w)}},this.processAuthNeededException=async A=>{this.onChatAnswerReceived!==void 0&&(this.onChatAnswerReceived(A.tabID,{type:Z.ChatItemType.ANSWER,body:A.message,followUp:void 0,canBeVoted:!1}),this.onChatAnswerReceived(A.tabID,{type:Z.ChatItemType.SYSTEM_PROMPT,body:void 0,followUp:this.followUpGenerator.generateAuthFollowUps("featuredev",A.authType),canBeVoted:!1}))},this.handleMessageReceive=async A=>{if(A.type==="errorMessage"){this.onError(A.tabID,A.message,A.title);return}if(A.type==="showInvalidTokenNotification"){this.onWarning(A.tabID,A.message,A.title);return}if(A.type==="chatMessage"){await this.processChatMessage(A);return}if(A.type==="asyncEventProgressMessage"){this.onAsyncEventProgress(A.tabID,A.inProgress,A.message??void 0);return}if(A.type==="updatePlaceholderMessage"){this.updatePlaceholder(A.tabID,A.newPlaceholder);return}if(A.type==="chatInputEnabledMessage"){this.chatInputEnabled(A.tabID,A.enabled);return}if(A.type==="authenticationUpdateMessage"){this.onUpdateAuthentication(A.featureDevEnabled,A.authenticatingTabIDs);return}if(A.type==="authNeededException"){this.processAuthNeededException(A);return}if(A.type==="openNewTabMessage"){this.onNewTab("featuredev");return}},this.onStopChatResponse=A=>{this.sendMessageToExtension({tabID:A,command:"stop-response"})},this.onTabOpen=A=>{this.sendMessageToExtension({tabID:A,command:"new-tab-was-created",tabType:"featuredev"})},this.onTabRemove=A=>{this.sendMessageToExtension({tabID:A,command:"tab-was-removed",tabType:"featuredev"})},this.sendFeedback=(A,w)=>{},this.onChatItemVoted=(A,w,S)=>{this.sendMessageToExtension({tabID:A,messageId:w,vote:S,command:"chat-item-voted",tabType:"featuredev"})},this.onResponseBodyLinkClick=(A,w,S)=>{this.sendMessageToExtension({command:"response-body-link-click",tabID:A,messageId:w,link:S,tabType:"featuredev"})},this.sendMessageToExtension=f.sendMessageToExtension,this.onChatAnswerReceived=f.onChatAnswerReceived,this.onWarning=f.onWarning,this.onError=f.onError,this.onAsyncEventProgress=f.onAsyncEventProgress,this.updatePlaceholder=f.onUpdatePlaceholder,this.chatInputEnabled=f.onChatInputEnabled,this.onUpdateAuthentication=f.onUpdateAuthentication,this.followUpGenerator=new X,this.onNewTab=f.onNewTab}}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class ee{constructor(f){this.followUpClicked=(A,w)=>{w.type!==void 0&&w.type==="continue-to-chat"&&this.onWelcomeFollowUpClicked(A,w.type)},this.authFollowUpClicked=(A,w,S)=>{this.sendMessageToExtension({command:"auth-follow-up-was-clicked",authType:S,tabID:A,tabType:w})},this.sendMessageToExtension=f.sendMessageToExtension,this.onWelcomeFollowUpClicked=f.onWelcomeFollowUpClicked}}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class r{constructor(f){this.isUIReady=!1,this.onSourceLinkClick=(A,w,S)=>{switch(this.tabsStorage.getTab(A)?.type){case"cwc":this.cwChatConnector.onSourceLinkClick(A,w,S);break}},this.onResponseBodyLinkClick=(A,w,S)=>{switch(this.tabsStorage.getTab(A)?.type){case"cwc":this.cwChatConnector.onResponseBodyLinkClick(A,w,S);break;case"featuredev":this.featureDevChatConnector.onResponseBodyLinkClick(A,w,S);break}},this.onInfoLinkClick=(A,w)=>{switch(this.tabsStorage.getTab(A)?.type){default:this.cwChatConnector.onInfoLinkClick(A,w);break}},this.requestGenerativeAIAnswer=(A,w)=>new Promise((S,H)=>{if(this.isUIReady)switch(this.tabsStorage.getTab(A)?.type){case"featuredev":this.featureDevChatConnector.requestGenerativeAIAnswer(A,w);break;default:this.cwChatConnector.requestGenerativeAIAnswer(A,w);break}else{setTimeout(()=>{this.requestGenerativeAIAnswer(A,w)},2e3);return}}),this.clearChat=A=>{switch(this.tabsStorage.getTab(A)?.type){case"cwc":this.cwChatConnector.clearChat(A);break}},this.help=A=>{switch(this.tabsStorage.getTab(A)?.type){case"cwc":this.cwChatConnector.help(A);break}},this.transform=A=>{switch(this.tabsStorage.getTab(A)?.type){default:this.cwChatConnector.transform(A);break}},this.handleMessageReceive=async A=>{if(A.data===void 0)return;const w=JSON.parse(A.data);w!==void 0&&(w.sender==="CWChat"?this.cwChatConnector.handleMessageReceive(w):w.sender==="featureDevChat"&&this.featureDevChatConnector.handleMessageReceive(w))},this.onTabAdd=A=>{this.tabsStorage.addTab({id:A,type:"unknown",status:"free",isSelected:!0})},this.onUpdateTabType=A=>{const w=this.tabsStorage.getTab(A);switch(w?.type){case"cwc":this.cwChatConnector.onTabAdd(A,w.openInteractionType);break}},this.onKnownTabOpen=A=>{switch(this.tabsStorage.getTab(A)?.type){case"featuredev":this.featureDevChatConnector.onTabOpen(A);break}},this.onTabChange=A=>{const w=this.tabsStorage.setSelectedTab(A);this.cwChatConnector.onTabChange(A,w)},this.onCodeInsertToCursorPosition=(A,w,S,H,te)=>{switch(this.tabsStorage.getTab(A)?.type){case"cwc":this.cwChatConnector.onCodeInsertToCursorPosition(A,w,S,H,te);break;case"featuredev":this.featureDevChatConnector.onCodeInsertToCursorPosition(A,S,H,te);break}},this.onCopyCodeToClipboard=(A,w,S,H,te)=>{switch(this.tabsStorage.getTab(A)?.type){case"cwc":this.cwChatConnector.onCopyCodeToClipboard(A,w,S,H,te);break;case"featuredev":this.featureDevChatConnector.onCopyCodeToClipboard(A,S,H,te);break}},this.onTabRemove=A=>{const w=this.tabsStorage.getTab(A);switch(this.tabsStorage.deleteTab(A),w?.type){case"cwc":this.cwChatConnector.onTabRemove(A);break;case"featuredev":this.featureDevChatConnector.onTabRemove(A);break}},this.uiReady=()=>{this.isUIReady=!0,this.sendMessageToExtension({command:"ui-is-ready"}),this.onMessageReceived!==void 0&&window.addEventListener("message",this.handleMessageReceive.bind(this)),window.addEventListener("focus",this.handleApplicationFocus),window.addEventListener("blur",this.handleApplicationFocus)},this.handleApplicationFocus=async A=>{this.sendMessageToExtension({command:"ui-focus",type:A.type,tabType:"cwc"})},this.triggerSuggestionEngagement=(A,w,S)=>{},this.onAuthFollowUpClicked=(A,w)=>{const S=this.tabsStorage.getTab(A)?.type;switch(S){case"cwc":case"featuredev":this.amazonqCommonsConnector.authFollowUpClicked(A,S,w)}},this.onFollowUpClicked=(A,w,S)=>{switch(this.tabsStorage.getTab(A)?.type){case"unknown":this.amazonqCommonsConnector.followUpClicked(A,S);break;case"featuredev":this.featureDevChatConnector.followUpClicked(A,S);break;default:this.cwChatConnector.followUpClicked(A,w,S);break}},this.onOpenDiff=(A,w,S)=>{switch(this.tabsStorage.getTab(A)?.type){case"featuredev":this.featureDevChatConnector.onOpenDiff(A,w,S);break}},this.onStopChatResponse=A=>{switch(this.tabsStorage.getTab(A)?.type){case"featuredev":this.featureDevChatConnector.onStopChatResponse(A);break;case"cwc":this.cwChatConnector.onStopChatResponse(A);break}},this.sendFeedback=(A,w)=>{switch(this.tabsStorage.getTab(A)?.type){case"featuredev":this.featureDevChatConnector.sendFeedback(A,w);break;case"cwc":this.cwChatConnector.onSendFeedback(A,w);break}},this.onChatItemVoted=(A,w,S)=>{switch(this.tabsStorage.getTab(A)?.type){case"cwc":this.cwChatConnector.onChatItemVoted(A,w,S);break;case"featuredev":this.featureDevChatConnector.onChatItemVoted(A,w,S);break}},this.sendMessageToExtension=f.sendMessageToExtension,this.onMessageReceived=f.onMessageReceived,this.cwChatConnector=new J(f),this.featureDevChatConnector=new $(f),this.amazonqCommonsConnector=new ee({sendMessageToExtension:this.sendMessageToExtension,onWelcomeFollowUpClicked:f.onWelcomeFollowUpClicked}),this.tabsStorage=f.tabsStorage}}var t=ae(3379),e=ae.n(t),a=ae(7795),p=ae.n(a),c=ae(569),i=ae.n(c),y=ae(3565),n=ae.n(y),o=ae(9216),d=ae.n(o),u=ae(4589),C=ae.n(u),D=ae(754),v={};v.styleTagTransform=C(),v.setAttributes=n(),v.insert=i().bind(null,"head"),v.domAPI=p(),v.insertStyleElement=d();var m=e()(D.Z,v);const I=D.Z&&D.Z.locals?D.Z.locals:void 0;/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const E=1728e5;class x{constructor(f){this.tabs=new Map,this.lastCreatedTabByType=new Map,this.lastSelectedTab=void 0,this.tabActivityTimers={},this.onTabTimeout=f?.onTabTimeout}addTab(f){this.tabs.has(f.id)||(this.tabs.set(f.id,f),this.lastCreatedTabByType.set(f.type,f.id),f.isSelected&&this.setSelectedTab(f.id))}deleteTab(f){this.tabActivityTimers[f]!==void 0&&(clearTimeout(this.tabActivityTimers[f]),delete this.tabActivityTimers[f]),f===this.lastSelectedTab?.id&&(this.lastSelectedTab=void 0),this.tabs.delete(f)}getTab(f){return this.tabs.get(f)}getTabs(){return Array.from(this.tabs.values())}isTabDead(f){return this.tabs.get(f)?.status==="dead"}updateTabStatus(f,A){const w=this.tabs.get(f);w===void 0||w.status==="dead"||(w.status=A,this.tabs.set(f,w))}updateTabTypeFromUnknown(f,A){const w=this.tabs.get(f);w===void 0||w.type!=="unknown"||(w.type=A,this.tabs.set(f,w),this.lastCreatedTabByType.set(A,f))}resetTabTimer(f){this.onTabTimeout!==void 0&&(this.tabActivityTimers[f]!==void 0&&clearTimeout(this.tabActivityTimers[f]),this.tabActivityTimers[f]=setTimeout(()=>{this.onTabTimeout!==void 0&&(this.updateTabStatus(f,"dead"),this.onTabTimeout(f))},E))}setSelectedTab(f){const A=this.lastSelectedTab,w=this.lastSelectedTab?.id;A!==void 0&&(A.isSelected=!1,this.tabs.set(A.id,A));const S=this.tabs.get(f);return S===void 0||(S.isSelected=!0,this.tabs.set(S.id,S),this.lastSelectedTab=S),w}getSelectedTab(){return this.lastSelectedTab}}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class M{constructor(f){this.isFeatureDevEnabled=f.isFeatureDevEnabled,this.isGumbyEnabled=f.isGumbyEnabled}generateForTab(f){switch(f){case"featuredev":return[];default:return[...this.isFeatureDevEnabled?[{groupName:"Application Development",commands:[{command:"/dev",placeholder:"Briefly describe a task or issue",description:"Generate implementation plan for a change, code generation coming soon."}]}]:[],...this.isGumbyEnabled?[{commands:[{command:"/transform",description:"Transform your Java 8 or 11 Maven project to Java 17"}]}]:[],{commands:[{command:"/help",description:"Learn more about Amazon Q"},{command:"/clear",description:"Clear this session"}]}]}}}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class k{constructor(f){this.tabTitle=new Map([["unknown","Chat"],["cwc","Chat"],["featuredev","Q - Dev"]]),this.tabInputPlaceholder=new Map([["unknown",'Ask a question or enter "/" for quick actions'],["cwc",'Ask a question or enter "/" for quick actions'],["featuredev","Briefly describe a task or issue"]]),this.tabWelcomeMessage=new Map([["unknown","Hi, I'm Amazon Q. I can answer your software development questions. \n        Ask me to explain, debug, or optimize your code. \n        You can enter `/` to see a list of quick actions."],["cwc","Hi, I'm Amazon Q. I can answer your software development questions. \n        Ask me to explain, debug, or optimize your code. \n        You can enter `/` to see a list of quick actions."],["featuredev",`Welcome to /dev. 

I can help you create a plan or define an approach to development. I'll reference and make suggestions based on your open project.

_Coming soon_: I'll provide code suggestions to help you implement the plan.
`]]),this.followUpsGenerator=new X,this.quickActionsGenerator=new M({isFeatureDevEnabled:f.isFeatureDevEnabled,isGumbyEnabled:f.isGumbyEnabled})}getTabData(f,A,w=!0,S){return{tabTitle:S??this.tabTitle.get(f),promptInputInfo:"Use of Amazon Q is subject to the [AWS Responsible AI Policy](https://aws.amazon.com/machine-learning/responsible-ai/policy/).",quickActionCommands:this.quickActionsGenerator.generateForTab(f),promptInputPlaceholder:this.tabInputPlaceholder.get(f),chatItems:A?[{type:Z.ChatItemType.ANSWER,body:this.tabWelcomeMessage.get(f)},...w?[{type:Z.ChatItemType.ANSWER,followUp:this.followUpsGenerator.generateWelcomeBlockForTab(f)}]:[]]:[]}}}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const j=[{value:"inaccurate-response",label:"Inaccurate response"},{value:"harmful-content",label:"Harmful content"},{value:"incorrect-syntax",label:"Incorrect syntax"},{value:"buggy-code",label:"Buggy code"},{value:"low-quality",label:"Low quality"},{value:"other",label:"Other"}];/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const L={mainTitle:"Amazon Q (Preview)",copy:"Copy",insertAtCursorLabel:"Insert at cursor",feedbackFormTitle:"Report an issue",feedbackFormOptionsLabel:"What type of issue would you like to report?",feedbackFormCommentLabel:"Description of issue (optional):",feedbackThanks:"Thanks for your feedback!",feedbackReportButtonLabel:"Report an issue",codeSuggestions:"Code suggestions",files:"file(s)",clickFileToViewDiff:"Click on a file to view diff.",showMore:"Show more",save:"Save",cancel:"Cancel",submit:"Submit",stopGenerating:"Stop generating",copyToClipboard:"Copied to clipboard",noMoreTabsTooltip:"You can only open ten conversation tabs at a time.",codeSuggestionWithReferenceTitle:"Some suggestions contain code with references.",spinnerText:"Generating your answer..."},U="https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/getting-started.html";/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class B{constructor(f){this.mynahUI=f.mynahUI,this.connector=f.connector,this.tabsStorage=f.tabsStorage}onFollowUpClicked(f,A,w){if(w.type!==void 0&&["full-auth","re-auth","missing_scopes","use-supported-auth"].includes(w.type)){this.connector.onAuthFollowUpClicked(f,w.type);return}if(w.type!==void 0&&w.type==="help"){this.tabsStorage.updateTabTypeFromUnknown(f,"cwc"),this.connector.onUpdateTabType(f),this.connector.help(f);return}if(w.prompt!==void 0&&(this.mynahUI.updateStore(f,{loadingChat:!0,promptInputDisabledState:!0}),this.mynahUI.addChatItem(f,{type:Z.ChatItemType.PROMPT,body:w.prompt}),this.mynahUI.addChatItem(f,{type:Z.ChatItemType.ANSWER_STREAM,body:""}),this.tabsStorage.updateTabStatus(f,"busy"),this.tabsStorage.resetTabTimer(f),w.type!==void 0&&w.type==="init-prompt")){this.connector.requestGenerativeAIAnswer(f,{chatMessage:w.prompt});return}this.connector.onFollowUpClicked(f,A,w)}onWelcomeFollowUpClicked(f,A){if(A==="continue-to-chat"){this.mynahUI.addChatItem(f,{type:Z.ChatItemType.ANSWER,body:"Ok, please write your question below."}),this.tabsStorage.updateTabTypeFromUnknown(f,"cwc"),this.connector.onUpdateTabType(f);return}}}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class W{constructor(f){this.mynahUI=f.mynahUI,this.connector=f.connector,this.tabsStorage=f.tabsStorage,this.tabDataGenerator=new k({isFeatureDevEnabled:f.isFeatureDevEnabled,isGumbyEnabled:f.isGumbyEnabled}),this.isFeatureDevEnabled=f.isFeatureDevEnabled}handle(f,A){switch(this.tabsStorage.resetTabTimer(A),f.command){case"/dev":this.handleFeatureDevCommand(f,A,"Q - Dev");break;case"/help":this.handleHelpCommand(A);break;case"/transform":this.handleGumbyCommand(A);break;case"/clear":this.handleClearCommand(A);break}}handleGumbyCommand(f){this.connector.transform(f)}handleClearCommand(f){this.mynahUI.updateStore(f,{chatItems:[]}),this.connector.clearChat(f)}handleHelpCommand(f){this.tabsStorage.getTab(f)?.type==="unknown"&&this.tabsStorage.updateTabTypeFromUnknown(f,"cwc"),this.connector.help(f)}handleFeatureDevCommand(f,A,w){if(!this.isFeatureDevEnabled)return;let S=A;const H=f.escapedPrompt?.trim()??"";if(this.tabsStorage.getTab(S)?.type!=="unknown"&&(S=this.mynahUI.updateStore("",{})),S===void 0){this.mynahUI.notify({content:L.noMoreTabsTooltip,type:Z.NotificationType.WARNING});return}else this.tabsStorage.updateTabTypeFromUnknown(S,"featuredev"),this.connector.onKnownTabOpen(S),this.connector.onUpdateTabType(S),this.mynahUI.updateStore(S,{chatItems:[]}),this.mynahUI.updateStore(S,this.tabDataGenerator.getTabData("featuredev",!0,H==="",w)),H!==""&&(this.mynahUI.addChatItem(S,{type:Z.ChatItemType.PROMPT,body:H,...f.attachment!==void 0?{relatedContent:{content:[f.attachment]}}:{}}),this.mynahUI.addChatItem(S,{type:Z.ChatItemType.ANSWER_STREAM,body:""}),this.mynahUI.updateStore(S,{loadingChat:!0,promptInputDisabledState:!0}),this.connector.requestGenerativeAIAnswer(S,{chatMessage:H}))}}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class Q{constructor(f){this.mynahUI=f.mynahUI,this.connector=f.connector,this.tabsStorage=f.tabsStorage}handle(f,A){this.tabsStorage.updateTabTypeFromUnknown(A,"cwc"),this.tabsStorage.resetTabTimer(A),this.connector.onUpdateTabType(A),this.mynahUI.addChatItem(A,{type:Z.ChatItemType.PROMPT,body:f.escapedPrompt,...f.attachment!==void 0?{relatedContent:{content:[f.attachment]}}:{}}),this.mynahUI.updateStore(A,{loadingChat:!0,promptInputDisabledState:!0}),this.tabsStorage.updateTabStatus(A,"busy"),this.connector.requestGenerativeAIAnswer(A,{chatMessage:f.prompt??"",chatCommand:f.command}).then(()=>{})}}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class z{constructor(f){this.mynahUI=f.mynahUI,this.connector=f.connector,this.tabsStorage=f.tabsStorage,this.tabDataGenerator=new k({isFeatureDevEnabled:f.isFeatureDevEnabled,isGumbyEnabled:f.isGumbyEnabled})}sendSelectedCodeToTab(f){const A={...this.tabsStorage.getSelectedTab()};if(A?.id===void 0||A?.type==="featuredev"){const w=this.mynahUI.updateStore("",this.tabDataGenerator.getTabData("cwc",!1));if(w===void 0){this.mynahUI.notify({content:L.noMoreTabsTooltip,type:Z.NotificationType.WARNING});return}this.tabsStorage.addTab({id:w,type:"cwc",status:"free",isSelected:!0}),A.id=w}return this.mynahUI.addToUserPrompt(A.id,f.body),A.id}sendMessageToTab(f,A){const w=this.tabsStorage.getSelectedTab();if(w!==void 0&&[A,"unknown"].includes(w.type)&&w.status==="free")return this.tabsStorage.updateTabStatus(w.id,"busy"),this.tabsStorage.updateTabTypeFromUnknown(w.id,A),this.mynahUI.updateStore(w.id,{loadingChat:!0,promptInputDisabledState:!0}),this.mynahUI.addChatItem(w.id,f),this.mynahUI.addChatItem(w.id,{type:Z.ChatItemType.ANSWER_STREAM,body:""}),w.id;const S=this.mynahUI.updateStore("",this.tabDataGenerator.getTabData("cwc",!1));if(S===void 0){this.mynahUI.notify({content:L.noMoreTabsTooltip,type:Z.NotificationType.WARNING});return}else return this.mynahUI.addChatItem(S,f),this.mynahUI.addChatItem(S,{type:Z.ChatItemType.ANSWER_STREAM,body:""}),this.mynahUI.updateStore(S,{loadingChat:!0,promptInputDisabledState:!0}),this.tabsStorage.addTab({id:S,type:"cwc",status:"busy",isSelected:!0,openInteractionType:"contextMenu"}),this.tabsStorage.updateTabTypeFromUnknown(S,"cwc"),this.connector.onUpdateTabType(S),this.tabsStorage.updateTabStatus(S,"busy"),S}}/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const O=(ne,f,A)=>{let w,S;const H=new x({onTabTimeout:_=>{w.addChatItem(_,{type:Z.ChatItemType.ANSWER,body:"This conversation has timed out after 48 hours. It will not be saved. Start a new conversation."}),w.updateStore(_,{promptInputDisabledState:!0,promptInputPlaceholder:"Session ended."})}});H.addTab({id:"tab-1",status:"free",type:"cwc",isSelected:!0});let te=f;const ce=A,ie=new k({isFeatureDevEnabled:te,isGumbyEnabled:ce});let le,q,we,me;S=new r({tabsStorage:H,onUpdateAuthentication:(_,F)=>{te=_,q.isFeatureDevEnabled=te,ie.quickActionsGenerator.isFeatureDevEnabled=te;for(const re of H.getTabs())w.updateStore(re.id,{quickActionCommands:ie.quickActionsGenerator.generateForTab(re.type)});if(_)for(const re of F)w.addChatItem(re,{type:Z.ChatItemType.ANSWER,body:"Authentication successful. Connected to Amazon Q."}),w.updateStore(re,{promptInputDisabledState:!1})},onCWCOnboardingPageInteractionMessage:_=>me.sendMessageToTab(_,"cwc"),onCWCContextCommandMessage:(_,F)=>F==="aws.amazonq.sendToPrompt"?me.sendSelectedCodeToTab(_):me.sendMessageToTab(_,"cwc"),onWelcomeFollowUpClicked:(_,F)=>{le.onWelcomeFollowUpClicked(_,F)},onChatInputEnabled:(_,F)=>{w.updateStore(_,{promptInputDisabledState:H.isTabDead(_)||!F})},onAsyncEventProgress:(_,F,re)=>{if(F){w.updateStore(_,{loadingChat:!0,promptInputDisabledState:!0}),re&&w.updateLastChatAnswer(_,{body:re}),w.addChatItem(_,{type:Z.ChatItemType.ANSWER_STREAM,body:""}),H.updateTabStatus(_,"busy");return}w.updateStore(_,{loadingChat:!1,promptInputDisabledState:H.isTabDead(_)}),H.updateTabStatus(_,"free")},sendMessageToExtension:_=>{ne.postMessage(_)},onChatAnswerReceived:(_,F)=>{if(F.type===Z.ChatItemType.ANSWER_PART){w.updateLastChatAnswer(_,{...F.messageId!==void 0?{messageId:F.messageId}:{},...F.canBeVoted!==void 0?{canBeVoted:F.canBeVoted}:{},...F.codeReference!==void 0?{codeReference:F.codeReference}:{},...F.body!==void 0?{body:F.body}:{},...F.relatedContent!==void 0?{relatedContent:F.relatedContent}:{}});return}if((F.body!==void 0||F.relatedContent!==void 0||F.followUp!==void 0)&&w.addChatItem(_,F),F.type===Z.ChatItemType.PROMPT||F.type===Z.ChatItemType.SYSTEM_PROMPT||F.type===Z.ChatItemType.AI_PROMPT){w.updateStore(_,{loadingChat:!0,promptInputDisabledState:!0}),H.updateTabStatus(_,"busy");return}F.type===Z.ChatItemType.ANSWER&&(w.updateStore(_,{loadingChat:!1,promptInputDisabledState:H.isTabDead(_)}),H.updateTabStatus(_,"free"))},onMessageReceived:(_,F)=>{w.updateStore(_,F)},onWarning:(_,F,re)=>{w.notify({title:re,content:F,type:Z.NotificationType.WARNING}),w.updateStore(_,{loadingChat:!1,promptInputDisabledState:H.isTabDead(_)}),H.updateTabStatus(_,"free")},onError:(_,F,re)=>{const Ae={type:Z.ChatItemType.ANSWER,body:`**${re}** 
 ${F}`};if(_!=="")w.updateStore(_,{loadingChat:!1,promptInputDisabledState:H.isTabDead(_)}),H.updateTabStatus(_,"free"),w.addChatItem(_,Ae);else{const be=w.updateStore("",{tabTitle:"Error",quickActionCommands:[],promptInputPlaceholder:"",chatItems:[Ae]});if(be===void 0){w.notify({content:L.noMoreTabsTooltip,type:Z.NotificationType.WARNING});return}else H.addTab({id:be,status:"busy",type:"cwc",isSelected:!0})}},onUpdatePlaceholder(_,F){w.updateStore(_,{promptInputPlaceholder:F})},onNewTab(_){const F=w.updateStore("",{});!F||(H.updateTabTypeFromUnknown(F,_),S.onKnownTabOpen(F),S.onUpdateTabType(F),w.updateStore(F,ie.getTabData(_,!0)))}}),w=new Z.MynahUI({onReady:S.uiReady,onTabAdd:_=>{w.updateStore(_,{quickActionCommands:ie.quickActionsGenerator.generateForTab("unknown")}),S.onTabAdd(_)},onTabRemove:S.onTabRemove,onTabChange:S.onTabChange,onChatPrompt:(_,F)=>{if(!((F.prompt??"")===""&&(F.command??"")==="")){if(H.getTab(_)?.type==="featuredev"&&w.addChatItem(_,{type:Z.ChatItemType.ANSWER_STREAM}),F.command!==void 0&&F.command.trim()!==""){q.handle(F,_);return}we.handle(F,_)}},onVote:S.onChatItemVoted,onSendFeedback:(_,F)=>{S.sendFeedback(_,F),w.notify({type:Z.NotificationType.INFO,title:"Your feedback is sent",content:"Thanks for your feedback."})},onCodeInsertToCursorPosition:S.onCodeInsertToCursorPosition,onCopyCodeToClipboard:(_,F,re,Ae,be)=>{S.onCopyCodeToClipboard(_,F,re,Ae,be),w.notify({type:Z.NotificationType.SUCCESS,content:"Selected code is copied to clipboard"})},onChatItemEngagement:S.triggerSuggestionEngagement,onSourceLinkClick:(_,F,re,Ae)=>{Ae?.preventDefault(),Ae?.stopPropagation(),Ae?.stopImmediatePropagation(),S.onSourceLinkClick(_,F,re)},onLinkClick:(_,F,re,Ae)=>{Ae?.preventDefault(),Ae?.stopPropagation(),Ae?.stopImmediatePropagation(),S.onResponseBodyLinkClick(_,F,re)},onInfoLinkClick:(_,F,re)=>{re?.preventDefault(),re?.stopPropagation(),re?.stopImmediatePropagation(),S.onInfoLinkClick(_,F)},onResetStore:()=>{},onFollowUpClicked:(_,F,re)=>{le.onFollowUpClicked(_,F,re)},onOpenDiff:S.onOpenDiff,tabs:{"tab-1":{isSelected:!0,store:ie.getTabData("cwc",!0)}},defaults:{store:ie.getTabData("cwc",!0)},config:{maxTabs:10,feedbackOptions:j,texts:L}}),le=new B({mynahUI:w,connector:S,tabsStorage:H}),q=new W({mynahUI:w,connector:S,tabsStorage:H,isFeatureDevEnabled:te,isGumbyEnabled:ce}),we=new Q({mynahUI:w,connector:S,tabsStorage:H}),me=new z({mynahUI:w,connector:S,tabsStorage:H,isFeatureDevEnabled:te,isGumbyEnabled:ce})}})();var De=this;for(var ze in fe)De[ze]=fe[ze];fe.__esModule&&Object.defineProperty(De,"__esModule",{value:!0})})();

//# sourceMappingURL=amazonq-ui.js.map