import{$ as Se,a0 as _,a1 as Ce,a2 as xe,a3 as Le,a4 as Me,a5 as Ve,a6 as $,a7 as pe,a8 as Ke,a9 as De,aa as Ee,ab as Te,ac as Ae,ad as Fe,ae as ne,af as ze,ag as Be,ah as Re,ai as H,aj as fe,D as q,ak as Oe,o as d,c as m,R as A,al as $e,v as j,l as O,am as v,F as ee,n as he,an as E,i as h,z as k,h as c,ao as Pe,t as x,ap as je,W as Ge,j as z,aq as we,d as Ue,y as He,e as ie,r as K,L as qe,V as Ne,T as We,k as a,ar as X,B as T,x as Je,m as Ze,s as D,C as F,E as C,w as Xe,G as Ye,H as oe,X as Qe,J as Y,as as _e,Z as et,Y as tt,S as nt}from"./index-cZjhLZhb.js";import{s as le,a as it}from"./index-DeqT3jpK.js";import{s as me}from"./index-BPBKCZG5.js";import{c as ot,d as lt,e as at,s as st,a as Q,_ as ve}from"./StatusTag.vue_vue_type_script_setup_true_lang-B3kAwsLG.js";import{s as rt}from"./index-C9qOOCgH.js";import{_ as ut}from"./SectionCard.vue_vue_type_script_setup_true_lang-neYzoJr8.js";import{d as dt}from"./files-CPVPB1bE.js";var ct=function(e){var n=e.dt;return`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: `.concat(n("autocomplete.padding.x"),`;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(`).concat(n("autocomplete.dropdown.width")," + ").concat(n("autocomplete.padding.x"),`);
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: `).concat(n("autocomplete.dropdown.width"),`;
    border-start-end-radius: `).concat(n("autocomplete.dropdown.border.radius"),`;
    border-end-end-radius: `).concat(n("autocomplete.dropdown.border.radius"),`;
    background: `).concat(n("autocomplete.dropdown.background"),`;
    border: 1px solid `).concat(n("autocomplete.dropdown.border.color"),`;
    border-inline-start: 0 none;
    color: `).concat(n("autocomplete.dropdown.color"),`;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),", outline-color ").concat(n("autocomplete.transition.duration"),", box-shadow ").concat(n("autocomplete.transition.duration"),`;
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: `).concat(n("autocomplete.dropdown.hover.background"),`;
    border-color: `).concat(n("autocomplete.dropdown.hover.border.color"),`;
    color: `).concat(n("autocomplete.dropdown.hover.color"),`;
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: `).concat(n("autocomplete.dropdown.active.background"),`;
    border-color: `).concat(n("autocomplete.dropdown.active.border.color"),`;
    color: `).concat(n("autocomplete.dropdown.active.color"),`;
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: `).concat(n("autocomplete.dropdown.focus.ring.shadow"),`;
    outline: `).concat(n("autocomplete.dropdown.focus.ring.width")," ").concat(n("autocomplete.dropdown.focus.ring.style")," ").concat(n("autocomplete.dropdown.focus.ring.color"),`;
    outline-offset: `).concat(n("autocomplete.dropdown.focus.ring.offset"),`;
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(n("autocomplete.overlay.background"),`;
    color: `).concat(n("autocomplete.overlay.color"),`;
    border: 1px solid `).concat(n("autocomplete.overlay.border.color"),`;
    border-radius: `).concat(n("autocomplete.overlay.border.radius"),`;
    box-shadow: `).concat(n("autocomplete.overlay.shadow"),`;
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("autocomplete.list.gap"),`;
    padding: `).concat(n("autocomplete.list.padding"),`;
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: `).concat(n("autocomplete.option.padding"),`;
    border: 0 none;
    color: `).concat(n("autocomplete.option.color"),`;
    background: transparent;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),`;
    border-radius: `).concat(n("autocomplete.option.border.radius"),`;
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: `).concat(n("autocomplete.option.focus.background"),`;
    color: `).concat(n("autocomplete.option.focus.color"),`;
}

.p-autocomplete-option-selected {
    background: `).concat(n("autocomplete.option.selected.background"),`;
    color: `).concat(n("autocomplete.option.selected.color"),`;
}

.p-autocomplete-option-selected.p-focus {
    background: `).concat(n("autocomplete.option.selected.focus.background"),`;
    color: `).concat(n("autocomplete.option.selected.focus.color"),`;
}

.p-autocomplete-option-group {
    margin: 0;
    padding: `).concat(n("autocomplete.option.group.padding"),`;
    color: `).concat(n("autocomplete.option.group.color"),`;
    background: `).concat(n("autocomplete.option.group.background"),`;
    font-weight: `).concat(n("autocomplete.option.group.font.weight"),`;
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(`).concat(n("autocomplete.padding.y")," / 2) ").concat(n("autocomplete.padding.x"),`;
    gap: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    color: `).concat(n("autocomplete.color"),`;
    background: `).concat(n("autocomplete.background"),`;
    border: 1px solid `).concat(n("autocomplete.border.color"),`;
    border-radius: `).concat(n("autocomplete.border.radius"),`;
    width: 100%;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),", outline-color ").concat(n("autocomplete.transition.duration"),", box-shadow ").concat(n("autocomplete.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("autocomplete.shadow"),`;
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.hover.border.color"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.focus.border.color"),`;
    box-shadow: `).concat(n("autocomplete.focus.ring.shadow"),`;
    outline: `).concat(n("autocomplete.focus.ring.width")," ").concat(n("autocomplete.focus.ring.style")," ").concat(n("autocomplete.focus.ring.color"),`;
    outline-offset: `).concat(n("autocomplete.focus.ring.offset"),`;
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.invalid.border.color"),`;
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: `).concat(n("autocomplete.filled.background"),`;
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: `).concat(n("autocomplete.filled.hover.background"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: `).concat(n("autocomplete.filled.focus.background"),`;
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: `).concat(n("autocomplete.disabled.background"),`;
    color: `).concat(n("autocomplete.disabled.color"),`;
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    border-radius: `).concat(n("autocomplete.chip.border.radius"),`;
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-inline-end: calc(`).concat(n("autocomplete.padding.y"),` / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: `).concat(n("autocomplete.chip.focus.background"),`;
    color: `).concat(n("autocomplete.chip.focus.color"),`;
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("autocomplete.padding.y"),` / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: `).concat(n("autocomplete.placeholder.color"),`;
}

.p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
    color: `).concat(n("autocomplete.invalid.placeholder.color"),`;
}

.p-autocomplete-empty-message {
    padding: `).concat(n("autocomplete.empty.message.padding"),`;
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: `).concat(n("autocomplete.dropdown.sm.width"),`;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: `).concat(n("form.field.sm.font.size"),`;
    width: `).concat(n("form.field.sm.font.size"),`;
    height: `).concat(n("form.field.sm.font.size"),`;
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: `).concat(n("autocomplete.dropdown.lg.width"),`;
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: `).concat(n("form.field.lg.font.size"),`;
    width: `).concat(n("form.field.lg.font.size"),`;
    height: `).concat(n("form.field.lg.font.size"),`;
}
`)},pt={root:{position:"relative"}},ft={root:function(e){var n=e.instance,o=e.props;return["p-autocomplete p-component p-inputwrapper",{"p-disabled":o.disabled,"p-invalid":n.$invalid,"p-focus":n.focused,"p-inputwrapper-filled":n.$filled||_(n.inputValue),"p-inputwrapper-focus":n.focused,"p-autocomplete-open":n.overlayVisible,"p-autocomplete-fluid":n.$fluid}]},pcInputText:"p-autocomplete-input",inputMultiple:function(e){e.props;var n=e.instance;return["p-autocomplete-input-multiple",{"p-variant-filled":n.$variant==="filled"}]},chipItem:function(e){var n=e.instance,o=e.i;return["p-autocomplete-chip-item",{"p-focus":n.focusedMultipleOptionIndex===o}]},pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:function(e){var n=e.instance,o=e.option,s=e.i,i=e.getItemOptions;return["p-autocomplete-option",{"p-autocomplete-option-selected":n.isSelected(o),"p-focus":n.focusedOptionIndex===n.getOptionIndex(s,i),"p-disabled":n.isOptionDisabled(o)}]},emptyMessage:"p-autocomplete-empty-message"},ht=Se.extend({name:"autocomplete",theme:ct,classes:ft,inlineStyles:pt}),mt={name:"BaseAutoComplete",extends:it,props:{suggestions:{type:Array,default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},dropdownIcon:{type:String,default:null},dropdownClass:{type:[String,Object],default:null},loader:{type:String,default:null},loadingIcon:{type:String,default:null},removeTokenIcon:{type:String,default:null},chipIcon:{type:String,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},showEmptyMessage:{type:Boolean,default:!0},tabindex:{type:Number,default:0},typeahead:{type:Boolean,default:!0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:ht,provide:function(){return{$pcAutoComplete:this,$parentInstance:this}}};function ae(t){"@babel/helpers - typeof";return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae(t)}function be(t){return gt(t)||yt(t)||bt(t)||vt()}function vt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bt(t,e){if(t){if(typeof t=="string")return se(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?se(t,e):void 0}}function yt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gt(t){if(Array.isArray(t))return se(t)}function se(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var re={name:"AutoComplete",extends:mt,inheritAttrs:!1,emits:["change","focus","blur","item-select","item-unselect","option-select","option-unselect","dropdown-click","clear","complete","before-show","before-hide","show","hide"],inject:{$pcFluid:{default:null}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,dirty:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{"$attrs.id":function(e){this.id=e||fe()},suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1,!this.showEmptyMessage&&this.visibleOptions.length===0&&this.hide()),this.autoUpdateModel()}},mounted:function(){this.id=this.id||fe(),this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(ne.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?H(e,this.optionLabel):e},getOptionValue:function(e){return e},getOptionRenderKey:function(e,n){return(this.dataKey?H(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTOptions:function(e,n,o,s){return this.ptm(s,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(o,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?H(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return H(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return H(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(o){return n.isOptionGroup(o)}).length:e)+1},show:function(e){this.$emit("before-show"),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&$(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},hide:function(e){var n=this,o=function(){var i;n.$emit("before-hide"),n.dirty=e,n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,e&&$(n.multiple?n.$refs.focusInput:(i=n.$refs.focusInput)===null||i===void 0?void 0:i.$el)};setTimeout(function(){o()},0)},onFocus:function(e){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){var n,o;this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e),(n=(o=this.formField).onBlur)===null||n===void 0||n.call(o)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break}this.clicked=!1},onInput:function(e){var n=this;if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);var o=e.target.value;this.multiple||this.updateModel(e,o),o.length===0?(this.hide(),this.$emit("clear")):o.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){n.search(e,o,"input")},this.delay)):this.hide()}},onChange:function(e){var n=this;if(this.forceSelection){var o=!1;if(this.visibleOptions&&!this.multiple){var s=this.multiple?this.$refs.focusInput.value:this.$refs.focusInput.$el.value,i=this.visibleOptions.find(function(w){return n.isOptionMatched(w,s||"")});i!==void 0&&(o=!0,!this.isSelected(i)&&this.onOptionSelect(e,i))}o||(this.multiple?this.$refs.focusInput.value="":this.$refs.focusInput.$el.value="",this.$emit("clear"),!this.multiple&&this.updateModel(e,null))}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break}},onContainerClick:function(e){this.clicked=!0,!(this.disabled||this.searching||this.loading||this.isDropdownClicked(e))&&(!this.overlay||!this.overlay.contains(e.target))&&$(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},onDropdownClick:function(e){var n=void 0;if(this.overlayVisible)this.hide(!0);else{var o=this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el;$(o),n=o.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,n,"dropdown")}this.$emit("dropdown-click",{originalEvent:e,query:n})},onOptionSelect:function(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=this.getOptionValue(n);this.multiple?(this.$refs.focusInput.value="",this.isSelected(n)||this.updateModel(e,[].concat(be(this.d_value||[]),[s]))):this.updateModel(e,s),this.$emit("item-select",{originalEvent:e,value:n}),this.$emit("option-select",{originalEvent:e,value:n}),o&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onOverlayClick:function(e){Re.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(this.overlayVisible){var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowUpKey:function(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowLeftKey:function(e){var n=e.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(Be(n.value)&&this.$filled?($(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.d_value.length):e.stopPropagation())},onArrowRightKey:function(e){this.focusedOptionIndex=-1,this.multiple&&e.stopPropagation()},onHomeKey:function(e){var n=e.currentTarget,o=n.value.length;n.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex=-1,e.preventDefault()},onEndKey:function(e){var n=e.currentTarget,o=n.value.length;n.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex=-1,e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.typeahead?this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)):this.multiple&&(this.updateModel(e,[].concat(be(this.d_value||[]),[e.target.value])),this.$refs.focusInput.value=""),e.preventDefault()},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onBackspaceKey:function(e){if(this.multiple){if(_(this.d_value)&&!this.$refs.focusInput.value){var n=this.d_value[this.d_value.length-1],o=this.d_value.slice(0,-1);this.writeValue(o,e),this.$emit("item-unselect",{originalEvent:e,value:n}),this.$emit("option-unselect",{originalEvent:e,value:n})}e.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.d_value.length-1&&(this.focusedMultipleOptionIndex=-1,$(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(e){this.focusedMultipleOptionIndex!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex)},onOverlayEnter:function(e){ne.set("overlay",e,this.$primevue.config.zIndex.overlay),ze(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){ne.clear(e)},alignOverlay:function(){var e=this.multiple?this.$refs.multiContainer:this.$refs.focusInput.$el;this.appendTo==="self"?Te(this.overlay,e):(this.overlay.style.minWidth=Ae(e)+"px",Fe(this.overlay,e))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&e.isOutsideClicked(n)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Ee(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!De()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked:function(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.focusInput.$el},isDropdownClicked:function(e){return this.$refs.dropdownButton?e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.contains(e.target):!1},isOptionMatched:function(e,n){var o;return this.isValidOption(e)&&((o=this.getOptionLabel(e))===null||o===void 0?void 0:o.toLocaleLowerCase(this.searchLocale))===n.toLocaleLowerCase(this.searchLocale)},isValidOption:function(e){return _(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,n){return Ke(e,n,this.equalityKey)},isSelected:function(e){var n=this,o=this.getOptionValue(e);return this.multiple?(this.d_value||[]).some(function(s){return n.isEquals(s,o)}):this.isEquals(this.d_value,this.getOptionValue(e))},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return pe(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,o=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return n.isValidOption(s)}):-1;return o>-1?o+e+1:e},findPrevOptionIndex:function(e){var n=this,o=e>0?pe(this.visibleOptions.slice(0,e),function(s){return n.isValidOption(s)}):-1;return o>-1?o:e},findSelectedOptionIndex:function(){var e=this;return this.$filled?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},search:function(e,n,o){n!=null&&(o==="input"&&n.trim().length===0||(this.searching=!0,this.$emit("complete",{originalEvent:e,query:n})))},removeOption:function(e,n){var o=this,s=this.d_value[n],i=this.d_value.filter(function(w,L){return L!==n}).map(function(w){return o.getOptionValue(w)});this.updateModel(e,i),this.$emit("item-unselect",{originalEvent:e,value:s}),this.$emit("option-unselect",{originalEvent:e,value:s}),this.dirty=!0,$(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var o=n!==-1?"".concat(e.id,"_").concat(n):e.focusedOptionId,s=Ve(e.list,'li[id="'.concat(o,'"]'));s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.writeValue(n,e),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(o,s,i){o.push({optionGroup:s,group:!0,index:i});var w=n.getOptionGroupChildren(s);return w&&w.forEach(function(L){return o.push(L)}),o},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){if(this.$filled)if(ae(this.d_value)==="object"){var e=this.getOptionLabel(this.d_value);return e??this.d_value}else return this.d_value;else return""},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return _(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.multiple?this.d_value.length:"1"):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex!==-1?"".concat(this.id,"_multiple_option_").concat(this.focusedMultipleOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},panelId:function(){return this.id+"_panel"}},components:{InputText:le,VirtualScroller:ot,Portal:Me,ChevronDownIcon:Le,SpinnerIcon:xe,Chip:rt},directives:{ripple:Ce}};function N(t){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(t)}function ye(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,o)}return n}function ge(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ye(Object(n),!0).forEach(function(o){Ot(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Ot(t,e,n){return(e=wt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wt(t){var e=It(t,"string");return N(e)=="symbol"?e:e+""}function It(t,e){if(N(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(N(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var kt=["aria-activedescendant"],St=["id","aria-label","aria-setsize","aria-posinset"],Ct=["id","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],xt=["disabled","aria-expanded","aria-controls"],Lt=["id"],Mt=["id","aria-label"],Vt=["id"],Kt=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focus","data-p-disabled"];function Dt(t,e,n,o,s,i){var w=q("InputText"),L=q("Chip"),y=q("SpinnerIcon"),S=q("VirtualScroller"),W=q("Portal"),J=Oe("ripple");return d(),m("div",v({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[11]||(e[11]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},t.ptmi("root")),[t.multiple?O("",!0):(d(),A(w,{key:0,ref:"focusInput",id:t.inputId,type:"text",name:t.$formName,class:j([t.cx("pcInputText"),t.inputClass]),style:$e(t.inputStyle),value:i.inputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,fluid:t.$fluid,disabled:t.disabled,size:t.size,invalid:t.invalid,variant:t.variant,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":s.overlayVisible,"aria-controls":i.panelId,"aria-activedescendant":s.focused?i.focusedOptionId:void 0,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onInput:i.onInput,onChange:i.onChange,unstyled:t.unstyled,pt:t.ptm("pcInputText")},null,8,["id","name","class","style","value","placeholder","tabindex","fluid","disabled","size","invalid","variant","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","onFocus","onBlur","onKeydown","onInput","onChange","unstyled","pt"])),t.multiple?(d(),m("ul",v({key:1,ref:"multiContainer",class:t.cx("inputMultiple"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-activedescendant":s.focused?i.focusedMultipleOptionId:void 0,onFocus:e[5]||(e[5]=function(){return i.onMultipleContainerFocus&&i.onMultipleContainerFocus.apply(i,arguments)}),onBlur:e[6]||(e[6]=function(){return i.onMultipleContainerBlur&&i.onMultipleContainerBlur.apply(i,arguments)}),onKeydown:e[7]||(e[7]=function(){return i.onMultipleContainerKeyDown&&i.onMultipleContainerKeyDown.apply(i,arguments)})},t.ptm("inputMultiple")),[(d(!0),m(ee,null,he(t.d_value,function(p,f){return d(),m("li",v({key:"".concat(f,"_").concat(i.getOptionLabel(p)),id:s.id+"_multiple_option_"+f,class:t.cx("chipItem",{i:f}),role:"option","aria-label":i.getOptionLabel(p),"aria-selected":!0,"aria-setsize":t.d_value.length,"aria-posinset":f+1,ref_for:!0},t.ptm("chipItem")),[E(t.$slots,"chip",v({class:t.cx("pcChip"),value:p,index:f,removeCallback:function(g){return i.removeOption(g,f)},ref_for:!0},t.ptm("pcChip")),function(){return[h(L,{class:j(t.cx("pcChip")),label:i.getOptionLabel(p),removeIcon:t.chipIcon||t.removeTokenIcon,removable:"",unstyled:t.unstyled,onRemove:function(g){return i.removeOption(g,f)},pt:t.ptm("pcChip")},{removeicon:k(function(){return[E(t.$slots,t.$slots.chipicon?"chipicon":"removetokenicon",{class:j(t.cx("chipIcon")),index:f,removeCallback:function(g){return i.removeOption(g,f)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16,St)}),128)),c("li",v({class:t.cx("inputChip"),role:"option"},t.ptm("inputChip")),[c("input",v({ref:"focusInput",id:t.inputId,type:"text",style:t.inputStyle,class:t.inputClass,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_list","aria-activedescendant":s.focused?i.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:e[3]||(e[3]=function(){return i.onInput&&i.onInput.apply(i,arguments)}),onChange:e[4]||(e[4]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},t.ptm("input")),null,16,Ct)],16)],16,kt)):O("",!0),s.searching||t.loading?E(t.$slots,t.$slots.loader?"loader":"loadingicon",{key:2,class:j(t.cx("loader"))},function(){return[t.loader||t.loadingIcon?(d(),m("i",v({key:0,class:["pi-spin",t.cx("loader"),t.loader,t.loadingIcon],"aria-hidden":"true"},t.ptm("loader")),null,16)):(d(),A(y,v({key:1,class:t.cx("loader"),spin:"","aria-hidden":"true"},t.ptm("loader")),null,16,["class"]))]}):O("",!0),E(t.$slots,t.$slots.dropdown?"dropdown":"dropdownbutton",{toggleCallback:function(f){return i.onDropdownClick(f)}},function(){return[t.dropdown?(d(),m("button",v({key:0,ref:"dropdownButton",type:"button",class:[t.cx("dropdown"),t.dropdownClass],disabled:t.disabled,"aria-haspopup":"listbox","aria-expanded":s.overlayVisible,"aria-controls":i.panelId,onClick:e[8]||(e[8]=function(){return i.onDropdownClick&&i.onDropdownClick.apply(i,arguments)})},t.ptm("dropdown")),[E(t.$slots,"dropdownicon",{class:j(t.dropdownIcon)},function(){return[(d(),A(Pe(t.dropdownIcon?"span":"ChevronDownIcon"),v({class:t.dropdownIcon},t.ptm("dropdownIcon")),null,16,["class"]))]})],16,xt)):O("",!0)]}),c("span",v({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),x(i.searchResultMessageText),17),h(W,{appendTo:t.appendTo},{default:k(function(){return[h(je,v({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},t.ptm("transition")),{default:k(function(){return[s.overlayVisible?(d(),m("div",v({key:0,ref:i.overlayRef,id:i.panelId,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:ge(ge({},t.panelStyle),t.overlayStyle),onClick:e[9]||(e[9]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:e[10]||(e[10]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},t.ptm("overlay")),[E(t.$slots,"header",{value:t.d_value,suggestions:i.visibleOptions}),c("div",v({class:t.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[h(S,v({ref:i.virtualScrollerRef},t.virtualScrollerOptions,{style:{height:t.scrollHeight},items:i.visibleOptions,tabindex:-1,disabled:i.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),Ge({content:k(function(p){var f=p.styleClass,M=p.contentRef,g=p.items,V=p.getItemOptions,G=p.contentStyle,B=p.itemSize;return[c("ul",v({ref:function(I){return i.listRef(I,M)},id:s.id+"_list",class:[t.cx("list"),f],style:G,role:"listbox","aria-label":i.listAriaLabel},t.ptm("list")),[(d(!0),m(ee,null,he(g,function(b,I){return d(),m(ee,{key:i.getOptionRenderKey(b,i.getOptionIndex(I,V))},[i.isOptionGroup(b)?(d(),m("li",v({key:0,id:s.id+"_"+i.getOptionIndex(I,V),style:{height:B?B+"px":void 0},class:t.cx("optionGroup"),role:"option",ref_for:!0},t.ptm("optionGroup")),[E(t.$slots,"optiongroup",{option:b.optionGroup,index:i.getOptionIndex(I,V)},function(){return[z(x(i.getOptionGroupLabel(b.optionGroup)),1)]})],16,Vt)):we((d(),m("li",v({key:1,id:s.id+"_"+i.getOptionIndex(I,V),style:{height:B?B+"px":void 0},class:t.cx("option",{option:b,i:I,getItemOptions:V}),role:"option","aria-label":i.getOptionLabel(b),"aria-selected":i.isSelected(b),"aria-disabled":i.isOptionDisabled(b),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(I,V)),onClick:function(U){return i.onOptionSelect(U,b)},onMousemove:function(U){return i.onOptionMouseMove(U,i.getOptionIndex(I,V))},"data-p-selected":i.isSelected(b),"data-p-focus":s.focusedOptionIndex===i.getOptionIndex(I,V),"data-p-disabled":i.isOptionDisabled(b),ref_for:!0},i.getPTOptions(b,V,I,"option")),[E(t.$slots,"option",{option:b,index:i.getOptionIndex(I,V)},function(){return[z(x(i.getOptionLabel(b)),1)]})],16,Kt)),[[J]])],64)}),128)),t.showEmptyMessage&&(!g||g&&g.length===0)?(d(),m("li",v({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[E(t.$slots,"empty",{},function(){return[z(x(i.searchResultMessageText),1)]})],16)):O("",!0)],16,Mt)]}),_:2},[t.$slots.loader?{name:"loader",fn:k(function(p){var f=p.options;return[E(t.$slots,"loader",{options:f})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"])],16),E(t.$slots,"footer",{value:t.d_value,suggestions:i.visibleOptions}),c("span",v({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),x(i.selectedMessageText),17)],16,Lt)):O("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}re.render=Dt;const Et={class:"muted"},Tt={class:"minutes-toolbar"},At={class:"field grow"},Ft={class:"checkbox-label",for:"minutes-pending"},zt={class:"field jump-field"},Bt={class:"actions"},Rt={class:"actions minutes-actions"},$t={class:"muted"},Pt={key:0,class:"info-note"},jt={key:1,class:"field-error",role:"alert"},Gt={class:"field"},Ut={class:"field"},Ht={class:"field"},qt={class:"actions"},Nt=["id"],Wt={key:1},Jt={key:1,class:"line-content"},Zt={key:0},Xt={key:0,class:"actions"},Yt={key:1,class:"row-actions"},Qt={key:0,class:"field-error",role:"alert"},sn=Ue({__name:"MinutesView",setup(t){He(ie(()=>[]));const e=K(1),n=K([...X]);function o(r){n.value=X.filter(l=>l.includes(r.query.trim()))}const s=K(""),i=K(!1),w=K(1),L=K(!1),y=K(""),S=K({speaker:X[0],content:""}),W=K(""),J=K(0),p=K(""),f=K(!1),M=K(""),g=ie(()=>T.value.lines.map((r,l)=>({...r,seq:l+1})).filter(r=>(!i.value||!r.verified)&&(!s.value.trim()||`${r.speaker} ${r.content}`.toLowerCase().includes(s.value.trim().toLowerCase())))),V=ie(()=>(!!y.value||f.value)&&JSON.stringify(S.value)!==W.value);function G(){return!V.value||window.confirm("尚未儲存的逐字稿將捨棄，確定繼續？")}function B(r){G()&&(p.value="",y.value=r?.id??"",f.value=!r,e.value=T.value.lines.length+1,S.value={speaker:r?.speaker??X[0],content:r?.content??""},W.value=JSON.stringify(S.value),J.value=T.value.revision)}function b(){G()&&(y.value="",f.value=!1,p.value="")}async function I(){if(!C.value){p.value="";try{const r={...S.value,id:y.value||void 0,...f.value?{position:e.value}:{}};await oe(l=>Qe(l,"lines",r,F.value),J.value),y.value="",f.value=!1,Y("逐字稿已儲存")}catch(r){p.value=r instanceof Error?r.message:"儲存失敗"}}}async function te(r){if(!C.value){p.value="";try{await oe(l=>_e(l,r,F.value)),Y("校對狀態已更新")}catch(l){p.value=l instanceof Error?l.message:"校對失敗"}}}function U(r){M.value=r,p.value=""}async function Ie(){if(!C.value){p.value="";try{await oe(r=>et(r,"lines",M.value,F.value)),M.value="",Y("段落已刪除")}catch(r){p.value=r instanceof Error?r.message:"刪除失敗"}}}async function ue(){const r=T.value.lines.length;if(!r)return;w.value=Math.max(1,Math.min(r,Math.floor(Number(w.value)||1))),s.value="",i.value=!1,await tt();const l=document.getElementById(`segment-${T.value.lines[w.value-1].id}`);l?.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",block:"center"}),l?.focus({preventScroll:!0})}function Z(r){const l=s.value.trim(),R=r.toLowerCase().indexOf(l.toLowerCase());return l&&R>=0?[r.slice(0,R),r.slice(R,R+l.length),r.slice(R+l.length)]:[r,"",""]}function ke(){dt(nt([["序號","發言人","內容","校對"],...g.value.map(r=>[r.seq,r.speaker,r.content,r.verified?"已校對":"待校對"])]),"islet-meeting.csv"),Y(`已匯出 ${g.value.length} 段逐字稿`)}qe(L,r=>document.body.style.overflow=r?"hidden":"");function de(r){r.key==="Escape"&&!f.value&&!M.value&&(L.value=!1)}function ce(r){V.value&&(r.preventDefault(),r.returnValue="")}return window.addEventListener("keydown",de),window.addEventListener("beforeunload",ce),Ne(()=>{document.body.style.overflow="",window.removeEventListener("keydown",de),window.removeEventListener("beforeunload",ce)}),We(G),(r,l)=>{const R=Oe("tooltip");return d(),m(ee,null,[c("div",{class:j(["minutes-workspace main-body",{expanded:L.value}])},[l[20]||(l[20]=c("h2",{id:"minutes-title",class:"section-title","data-toc":"",tabindex:"-1"},[c("i",{class:"pi pi-check-circle","aria-hidden":"true"}),z("會議逐字稿 ")],-1)),h(ut,{title:"場域協作會議",divider:"",class:"detail-card minutes-card"},{button:k(()=>[h(ve,{value:`${a(T).lines.filter(u=>u.verified).length} / ${a(T).lines.length} 已校對`},null,8,["value"])]),default:k(()=>[c("p",Et,x(a(Je).meeting),1),c("div",Tt,[c("div",At,[l[12]||(l[12]=c("label",{for:"minutes-query"},"搜尋內容或發言人",-1)),h(a(le),{id:"minutes-query",modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=u=>s.value=u),placeholder:"內容或發言人",disabled:!!y.value||f.value},null,8,["modelValue","disabled"])]),c("label",Ft,[h(a(lt),{"input-id":"minutes-pending",binary:"",modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=u=>i.value=u),disabled:!!y.value||f.value},null,8,["modelValue","disabled"]),l[13]||(l[13]=z("只看待校對"))]),c("div",zt,[l[14]||(l[14]=c("label",{for:"jump-line"},"定位序號",-1)),c("div",Bt,[h(a(le),{id:"jump-line","model-value":String(w.value),"onUpdate:modelValue":l[2]||(l[2]=u=>w.value=Number(u)),type:"number",inputmode:"numeric",min:"1",max:a(T).lines.length,onKeydown:Ze(ue,["enter"])},null,8,["model-value","max"]),h(a(D),{icon:"pi pi-arrow-down","aria-label":"定位段落",disabled:!a(T).lines.length||!!y.value||f.value,onClick:ue},null,8,["disabled"])])])]),c("div",Rt,[c("span",$t,"顯示 "+x(g.value.length)+" 段",1),h(a(D),{icon:L.value?"pi pi-window-minimize":"pi pi-window-maximize",label:L.value?"離開專注模式":"專注模式",severity:"secondary",outlined:"",onClick:l[3]||(l[3]=u=>L.value=!L.value)},null,8,["icon","label"]),h(a(D),{label:"匯出 CSV",icon:"pi pi-download",severity:"secondary",outlined:"",disabled:!g.value.length,onClick:ke},null,8,["disabled"]),a(F)!=="reader"?(d(),A(a(D),{key:0,label:"新增段落",icon:"pi pi-plus",disabled:a(C)||!!y.value||f.value,onClick:l[4]||(l[4]=u=>B())},null,8,["disabled"])):O("",!0)]),a(F)==="editor"?(d(),m("p",Pt,"校對限管理員。")):O("",!0),p.value&&!M.value?(d(),m("p",jt,x(p.value),1)):O("",!0),f.value?(d(),m("form",{key:2,class:"new-segment-row",onSubmit:Xe(I,["prevent"]),novalidate:""},[c("div",Gt,[l[15]||(l[15]=c("label",{for:"line-position"},"新增序號",-1)),h(a(at),{"input-id":"line-position",modelValue:e.value,"onUpdate:modelValue":l[5]||(l[5]=u=>e.value=u),min:1,max:a(T).lines.length+1,"show-buttons":""},null,8,["modelValue","max"])]),c("div",Ut,[l[16]||(l[16]=c("label",{for:"line-speaker"},"發言人 *",-1)),h(a(re),{"input-id":"line-speaker",modelValue:S.value.speaker,"onUpdate:modelValue":l[6]||(l[6]=u=>S.value.speaker=u),suggestions:n.value,dropdown:"","force-selection":"",onComplete:o},null,8,["modelValue","suggestions"])]),c("div",Ht,[l[17]||(l[17]=c("label",{for:"line-content"},"發言內容 *",-1)),h(a(me),{id:"line-content",modelValue:S.value.content,"onUpdate:modelValue":l[7]||(l[7]=u=>S.value.content=u),"auto-resize":"",rows:"3",maxlength:"5000"},null,8,["modelValue"])]),c("div",qt,[h(a(D),{label:"儲存段落",size:"small",type:"submit",loading:a(C)},null,8,["loading"]),h(a(D),{label:"取消新增",size:"small",severity:"secondary",outlined:"",disabled:a(C),onClick:b},null,8,["disabled"])])],32)):O("",!0),h(a(st),{value:g.value,"data-key":"id",scrollable:"","scroll-height":"65vh","row-class":u=>u.verified?"verified-row":"","show-gridlines":"","table-style":{minWidth:"48rem"},pt:{tableContainer:{tabindex:0,"aria-label":"逐字稿內容，可左右捲動"}}},{empty:k(()=>l[18]||(l[18]=[c("div",{class:"empty-state"},"沒有符合條件的段落",-1)])),default:k(()=>[h(a(Q),{header:"序號",style:{width:"5rem"}},{body:k(({data:u})=>[c("span",{id:"segment-"+u.id,tabindex:"-1",class:"segment-number"},x(u.seq),9,Nt)]),_:1}),h(a(Q),{field:"speaker",header:"發言人",style:{width:"10rem"}},{body:k(({data:u})=>[y.value===u.id?(d(),A(a(re),{key:0,modelValue:S.value.speaker,"onUpdate:modelValue":l[8]||(l[8]=P=>S.value.speaker=P),"aria-label":"編輯發言人",suggestions:n.value,dropdown:"","force-selection":"",onComplete:o},null,8,["modelValue","suggestions"])):(d(),m("span",Wt,x(u.speaker),1))]),_:1}),h(a(Q),{field:"content",header:"發言內容"},{body:k(({data:u})=>[y.value===u.id?(d(),A(a(me),{key:0,modelValue:S.value.content,"onUpdate:modelValue":l[9]||(l[9]=P=>S.value.content=P),"aria-label":"編輯發言內容",rows:"4","auto-resize":"",maxlength:"5000",class:"line-textarea"},null,8,["modelValue"])):(d(),m("p",Jt,[z(x(Z(u.content)[0]),1),Z(u.content)[1]?(d(),m("mark",Zt,x(Z(u.content)[1]),1)):O("",!0),z(x(Z(u.content)[2]),1)]))]),_:1}),h(a(Q),{header:"校對與操作",style:{width:"14rem"}},{body:k(({data:u})=>[y.value===u.id?(d(),m("div",Xt,[h(a(D),{label:"儲存段落",size:"small",loading:a(C),onClick:I},null,8,["loading"]),h(a(D),{label:"取消編輯",size:"small",severity:"secondary",disabled:a(C),onClick:b},null,8,["disabled"])])):(d(),m("div",Yt,[a(F)!=="manager"?(d(),A(ve,{key:0,value:u.verified?"已校對":"待校對"},null,8,["value"])):O("",!0),a(F)==="manager"?(d(),A(a(D),{key:1,label:u.verified?"已校對":"校對",size:"small",outlined:!u.verified,"aria-label":`${u.verified?"取消校對":"校對"}第 ${u.seq} 段`,"aria-pressed":u.verified,disabled:a(C)||!!y.value||f.value,onClick:P=>te(u.id)},null,8,["label","outlined","aria-label","aria-pressed","disabled","onClick"])):O("",!0),a(F)!=="reader"?we((d(),A(a(D),{key:2,icon:"pi pi-pencil",severity:"success",outlined:"","aria-label":"編輯第 "+u.seq+" 段",disabled:u.verified||a(C)||!!y.value,onClick:P=>B(u)},null,8,["aria-label","disabled","onClick"])),[[R,u.verified?"請先取消校對":"編輯段落",void 0,{top:!0}]]):O("",!0),a(F)!=="reader"?(d(),A(a(D),{key:3,icon:"pi pi-trash",outlined:"",severity:"danger","aria-label":"刪除第 "+u.seq+" 段",disabled:u.verified||a(C)||!!y.value,onClick:P=>U(u.id)},null,8,["aria-label","disabled","onClick"])):O("",!0)]))]),_:1})]),_:1},8,["value","row-class"]),l[19]||(l[19]=c("p",{class:"detail-scroll-hint"},[c("i",{class:"pi pi-arrows-h","aria-hidden":"true"}),z("左右捲動查看完整內容 ")],-1))]),_:1})],2),h(a(Ye),{visible:!!M.value,header:"刪除段落",modal:"",style:{width:"26rem"},draggable:!1,closable:!a(C),"onUpdate:visible":l[11]||(l[11]=u=>M.value="")},{footer:k(()=>[h(a(D),{label:"取消",severity:"secondary",disabled:a(C),onClick:l[10]||(l[10]=u=>M.value="")},null,8,["disabled"]),h(a(D),{label:"確認刪除段落",severity:"danger",loading:a(C),onClick:Ie},null,8,["loading"])]),default:k(()=>[l[21]||(l[21]=c("p",null,"確定刪除此段發言？",-1)),p.value?(d(),m("p",Qt,x(p.value),1)):O("",!0)]),_:1},8,["visible","closable"])],64)}}});export{sn as default};
