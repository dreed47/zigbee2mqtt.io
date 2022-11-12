"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[64849],{90354:(t,e,o)=>{o.r(e),o.d(e,{data:()=>i});const i={key:"v-39c718d0",path:"/devices/WS-USC02.html",title:"Xiaomi WS-USC02 control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi WS-USC02 control via MQTT",description:"Integrate your Xiaomi WS-USC02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-06-10T16:45:59.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (top endpoint)",slug:"switch-top-endpoint",children:[]},{level:3,title:"Switch (bottom endpoint)",slug:"switch-bottom-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/WS-USC02.md",git:{updatedTime:1668265982e3}}},88766:(t,e,o)=>{o.r(e),o.d(e,{default:()=>h});var i=o(66252);const a=(0,i.uE)('<h1 id="xiaomi-ws-usc02" tabindex="-1"><a class="header-anchor" href="#xiaomi-ws-usc02" aria-hidden="true">#</a> Xiaomi WS-USC02</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>WS-USC02</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara smart wall switch (no neutral, double rocker)</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/WS-USC02.jpg" alt="Xiaomi WS-USC02"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),d=(0,i.Uk)("This device supports OTA updates, for more information see "),s=(0,i.Uk)("OTA updates"),c=(0,i.Uk)("."),r=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-top-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-endpoint" aria-hidden="true">#</a> Switch (top endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_top</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top&quot;: &quot;&quot;}</code>.</p><h3 id="switch-bottom-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-endpoint" aria-hidden="true">#</a> Switch (bottom endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),u={},h=(0,o(83744).Z)(u,[["render",function(t,e){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[d,(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[s])),_:1}),c]),r],64)}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[o,i]of e)t[o]=i;return t}}}]);