(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{7203:function(e,n,i){"use strict";i.d(n,{c:function(){return L}});var s,r=i(7956),o=i(5610),t=i(6393),a=i(425),l=i(3531),c=i(1454),d=i(3364),g=i(5415),m=i(9637),u=i(6977),f=i(956),p=i(6321),v=((s={})[u.f.info]="Info",s[u.f.warning]="Info",s[u.f.error]="ErrorBadge",s[u.f.blocked]="Blocked2",s[u.f.severeWarning]="Warning",s[u.f.success]="Completed",s),x=(0,a.y)(),h=function(e){switch(e){case u.f.blocked:case u.f.error:case u.f.severeWarning:return"assertive"}return"polite"},w=function(e){switch(e){case u.f.blocked:case u.f.error:case u.f.severeWarning:return"alert"}return"status"},b=t.forwardRef((function(e,n){var i=(0,f.k)(!1),s=i[0],r=i[1].toggle,a=(0,p.M)("MessageBar"),b=e.actions,S=e.className,k=e.children,B=e.overflowButtonAriaLabel,y=e.dismissIconProps,C=e.styles,N=e.theme,M=e.messageBarType,j=void 0===M?u.f.info:M,L=e.onDismiss,T=void 0===L?void 0:L,W=e.isMultiline,E=void 0===W||W,I=e.truncated,H=e.dismissButtonAriaLabel,R=e.messageBarIconProps,_=e.role,P=e.delayedRender,D=void 0===P||P,O=(0,l.pq)(e,l.iY,["className","role"]),A=x(C,{theme:N,messageBarType:j||u.f.info,onDismiss:void 0!==T,actions:void 0!==b,truncated:I,isMultiline:E,expandSingleLine:s,className:S}),z={iconName:s?"DoubleChevronUp":"DoubleChevronDown"},J=b||T?{"aria-describedby":a,role:"region"}:{},G=b?t.createElement("div",{className:A.actions},b):null,F=T?t.createElement(g.h,{disabled:!1,className:A.dismissal,onClick:T,iconProps:y||{iconName:"Clear"},title:H,ariaLabel:H}):null;return t.createElement("div",(0,o.pi)({ref:n,className:A.root},J),t.createElement("div",{className:A.content},t.createElement("div",{className:A.iconContainer,"aria-hidden":!0},R?t.createElement(m.J,(0,o.pi)({},R,{className:(0,c.i)(A.icon,R.className)})):t.createElement(m.J,{iconName:v[j],className:A.icon})),t.createElement("div",{className:A.text,id:a,role:_||w(j),"aria-live":h(j)},t.createElement("span",(0,o.pi)({className:A.innerText},O),D?t.createElement(d.U,null,t.createElement("span",null,k)):t.createElement("span",null,k))),!E&&!G&&I&&t.createElement("div",{className:A.expandSingleLine},t.createElement(g.h,{disabled:!1,className:A.expand,onClick:r,iconProps:z,ariaLabel:B,"aria-expanded":s})),!E&&G,!E&&F&&t.createElement("div",{className:A.dismissSingleLine},F),E&&F),E&&G)}));b.displayName="MessageBar";var S,k,B,y=i(3346),C={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},N=((S={})[u.f.error]="errorBackground",S[u.f.blocked]="errorBackground",S[u.f.success]="successBackground",S[u.f.warning]="warningBackground",S[u.f.severeWarning]="severeWarningBackground",S[u.f.info]="infoBackground",S),M=((k={})[u.f.error]="rgba(255, 0, 0, 0.3)",k[u.f.blocked]="rgba(255, 0, 0, 0.3)",k[u.f.success]="rgba(48, 241, 73, 0.3)",k[u.f.warning]="rgba(255, 254, 57, 0.3)",k[u.f.severeWarning]="rgba(255, 0, 0, 0.3)",k[u.f.info]="Window",k),j=((B={})[u.f.error]="errorIcon",B[u.f.blocked]="errorIcon",B[u.f.success]="successIcon",B[u.f.warning]="warningIcon",B[u.f.severeWarning]="severeWarningIcon",B[u.f.info]="infoIcon",B),L=(0,r.z)(b,(function(e){var n,i,s,r,t,a=e.theme,l=e.className,c=e.onDismiss,d=e.truncated,g=e.isMultiline,m=e.expandSingleLine,f=e.messageBarType,p=void 0===f?u.f.info:f,v=a.semanticColors,x=a.fonts,h=(0,y.getScreenSelector)(0,y.ScreenWidthMaxSmall),w=(0,y.getGlobalClassNames)(C,a),b={fontSize:y.IconFontSizes.xSmall,height:10,lineHeight:"10px",color:v.messageText,selectors:(n={},n[y.HighContrastSelector]=(0,o.pi)((0,o.pi)({},(0,y.getHighContrastNoAdjustStyle)()),{color:"WindowText"}),n)},S=[(0,y.getFocusStyle)(a,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":b,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[w.root,x.medium,p===u.f.error&&w.error,p===u.f.blocked&&w.blocked,p===u.f.severeWarning&&w.severeWarning,p===u.f.success&&w.success,p===u.f.warning&&w.warning,g?w.multiline:w.singleline,!g&&c&&w.dismissalSingleLine,!g&&d&&w.expandingSingleLine,{background:v[N[p]],color:v.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:(i={".ms-Link":{color:v.messageLink,selectors:{":hover":{color:v.messageLinkHovered}}}},i[y.HighContrastSelector]=(0,o.pi)((0,o.pi)({},(0,y.getHighContrastNoAdjustStyle)()),{background:M[p],border:"1px solid WindowText",color:"WindowText"}),i)},g&&{flexDirection:"column"},l],content:[w.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[w.iconContainer,{fontSize:y.IconFontSizes.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:v[j[p]],selectors:(s={},s[y.HighContrastSelector]=(0,o.pi)((0,o.pi)({},(0,y.getHighContrastNoAdjustStyle)()),{color:"WindowText"}),s)},text:[w.text,(0,o.pi)((0,o.pi)({minWidth:0,display:"flex",flexGrow:1,margin:8},x.small),{selectors:(r={},r[y.HighContrastSelector]=(0,o.pi)({},(0,y.getHighContrastNoAdjustStyle)()),r)}),!c&&{marginRight:12}],innerText:[w.innerText,{lineHeight:16,selectors:{"& span a:last-child":{paddingLeft:4}}},d&&{overflow:"visible",whiteSpace:"pre-wrap"},!g&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!g&&!d&&{selectors:(t={},t[h]={overflow:"visible",whiteSpace:"pre-wrap"},t)},m&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:w.dismissSingleLine,expandSingleLine:w.expandSingleLine,dismissal:[w.dismissal,S],expand:[w.expand,S],actions:[g?w.actions:w.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},g&&{marginBottom:8},c&&!g&&{marginRight:0}]}}),void 0,{scope:"MessageBar"})},6977:function(e,n,i){"use strict";var s;i.d(n,{f:function(){return s}}),function(e){e[e.info=0]="info",e[e.error=1]="error",e[e.blocked=2]="blocked",e[e.severeWarning=3]="severeWarning",e[e.success=4]="success",e[e.warning=5]="warning"}(s||(s={}))},3364:function(e,n,i){"use strict";i.d(n,{U:function(){return o}});var s=i(5610),r=i(6393),o=function(e){function n(n){var i=e.call(this,n)||this;return i.state={isRendered:!1},i}return(0,s.ZT)(n,e),n.prototype.componentDidMount=function(){var e=this,n=this.props.delay;this._timeoutId=window.setTimeout((function(){e.setState({isRendered:!0})}),n)},n.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},n.prototype.render=function(){return this.state.isRendered?r.Children.only(this.props.children):null},n.defaultProps={delay:0},n}(r.Component)},2013:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/power",function(){return i(9314)}])},9314:function(e,n,i){"use strict";i.r(n);var s=i(5202),r=i(9067),o=i(7203),t=i(6977),a=i(2559),l=i(9637),c=i(5266),d=i(6929),g=i(4068);n.default=(0,c.Pi)((function(){return(0,s.jsxs)("div",{style:{padding:20},children:[(0,s.jsx)("div",{children:(0,s.jsx)(r.a,{text:"Reboot",disabled:!d.n2.device,onClick:function(){return d.n2.device.power.reboot()}})}),(0,s.jsx)("div",{style:{marginTop:20},children:(0,s.jsx)(r.a,{text:"Power Off",disabled:!d.n2.device,onClick:function(){return d.n2.device.power.powerOff()}})}),(0,s.jsx)("div",{style:{marginTop:20},children:(0,s.jsx)(r.a,{text:"Press Power Button",disabled:!d.n2.device,onClick:function(){return d.n2.device.power.powerButton()}})}),(0,s.jsx)("div",{style:{marginTop:20},children:(0,s.jsx)(o.c,{messageBarType:t.f.severeWarning,children:"Danger Zone Below"})}),(0,s.jsx)("div",{style:{marginTop:20},children:(0,s.jsx)(r.a,{text:"Reboot to Bootloader",disabled:!d.n2.device,onClick:function(){return d.n2.device.power.bootloader()}})}),(0,s.jsx)("div",{style:{marginTop:20},children:(0,s.jsx)(r.a,{text:"Reboot to Fastboot",disabled:!d.n2.device,onClick:function(){return d.n2.device.power.fastboot()}})}),(0,s.jsx)("div",{style:{marginTop:20},children:(0,s.jsx)(r.a,{text:"Reboot to Recovery",disabled:!d.n2.device,onClick:function(){return d.n2.device.power.recovery()}})}),(0,s.jsx)("div",{style:{marginTop:20},children:(0,s.jsx)(r.a,{text:"Reboot to Sideload",disabled:!d.n2.device,onClick:function(){return d.n2.device.power.sideload()}})}),(0,s.jsxs)("div",{style:{marginTop:20},children:[(0,s.jsx)(r.a,{text:"Reboot to Qualcomm EDL Mode",disabled:!d.n2.device,onClick:function(){return d.n2.device.power.qualcommEdlMode()}}),(0,s.jsx)(a.G,{content:(0,s.jsx)("span",{children:"Only works on some Qualcomm devices."}),children:(0,s.jsx)(l.J,{style:{verticalAlign:"middle",marginLeft:4,fontSize:18},iconName:g.PJ.Info})})]}),(0,s.jsxs)("div",{style:{marginTop:20},children:[(0,s.jsx)(r.a,{text:"Reboot to Samsung Odin Download Mode",disabled:!d.n2.device,onClick:function(){return d.n2.device.power.samsungOdin()}}),(0,s.jsx)(a.G,{content:(0,s.jsx)("span",{children:"Only works on Samsung devices."}),children:(0,s.jsx)(l.J,{style:{verticalAlign:"middle",marginLeft:4,fontSize:18},iconName:g.PJ.Info})})]})]})}))}},function(e){e.O(0,[888,179],(function(){return n=2013,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=power-79913faae3aa138b.js.map