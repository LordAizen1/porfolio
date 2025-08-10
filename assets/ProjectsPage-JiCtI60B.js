import{r as u,j as i,A as D,m as d,L as x,_ as M,C as P,a as E}from"./index-BOJhiiQ0.js";const k=({isOpen:e,onClose:s,images:t,projectTitle:r})=>{const[l,c]=u.useState(0);if(!e||!t||t.length===0)return null;const g=n=>{n.stopPropagation(),c(o=>o===0?t.length-1:o-1)},a=n=>{n.stopPropagation(),c(o=>o===t.length-1?0:o+1)},p=n=>{n.key==="ArrowLeft"&&g(n),n.key==="ArrowRight"&&a(n),n.key==="Escape"&&s()};return i.jsx(D,{children:i.jsx(d.div,{className:"gallery-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:s,onKeyDown:p,tabIndex:0,children:i.jsxs(d.div,{className:"gallery-modal-content",initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},transition:{type:"spring",damping:25,stiffness:300},onClick:n=>n.stopPropagation(),children:[i.jsxs("div",{className:"gallery-modal-header",children:[i.jsx("h3",{children:r}),i.jsx("button",{className:"gallery-modal-close",onClick:s,children:"×"})]}),i.jsxs("div",{className:"gallery-modal-image-container",children:[i.jsx(d.img,{src:t[l].src,alt:t[l].alt,className:"main-image",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}},l),t.length>1&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"gallery-nav-button prev",onClick:g,children:"‹"}),i.jsx("button",{className:"gallery-nav-button next",onClick:a,children:"›"})]})]}),t.length>1&&i.jsx("div",{className:"gallery-thumbnails",children:t.map((n,o)=>i.jsx("div",{className:`gallery-thumbnail ${o===l?"active":""}`,onClick:()=>c(o),children:i.jsx("img",{src:n.src,alt:`Thumbnail ${o+1}`})},o))})]})})})};var h="@firebase/vertexai",A="1.2.2";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B="vertexAI",G="us-central1";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(s,t,r,l){var c;this.app=s,this.options=l;const g=r==null?void 0:r.getImmediate({optional:!0}),a=t==null?void 0:t.getImmediate({optional:!0});this.auth=a||null,this.appCheck=g||null,this.location=((c=this.options)===null||c===void 0?void 0:c.location)||G}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new x("@firebase/vertexai");/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.PREDICT="predict"})(T||(T={}));var _;(function(e){e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(_||(_={}));var I;(function(e){e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(I||(I={}));var O;(function(e){e.SEVERITY="SEVERITY",e.PROBABILITY="PROBABILITY"})(O||(O={}));var N;(function(e){e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(N||(N={}));var v;(function(e){e.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",e.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",e.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",e.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(v||(v={}));var f;(function(e){e.SAFETY="SAFETY",e.OTHER="OTHER",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT"})(f||(f={}));var m;(function(e){e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL"})(m||(m={}));var L;(function(e){e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(L||(L={}));var y;(function(e){e.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",e.TEXT="TEXT",e.IMAGE="IMAGE",e.VIDEO="VIDEO",e.AUDIO="AUDIO",e.DOCUMENT="DOCUMENT"})(y||(y={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(C||(C={}));/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(e){e.BLOCK_LOW_AND_ABOVE="block_low_and_above",e.BLOCK_MEDIUM_AND_ABOVE="block_medium_and_above",e.BLOCK_ONLY_HIGH="block_only_high",e.BLOCK_NONE="block_none"})(S||(S={}));var R;(function(e){e.BLOCK_ALL="dont_allow",e.ALLOW_ADULT="allow_adult",e.ALLOW_ALL="allow_all"})(R||(R={}));var b;(function(e){e.SQUARE="1:1",e.LANDSCAPE_3x4="3:4",e.PORTRAIT_4x3="4:3",e.LANDSCAPE_16x9="16:9",e.PORTRAIT_9x16="9:16"})(b||(b={}));m.RECITATION,m.SAFETY;function j(){M(new P(B,(e,{instanceIdentifier:s})=>{const t=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return new H(t,r,l,{location:s})},"PUBLIC").setMultipleInstances(!0)),E(h,A),E(h,A,"esm2017")}j();const Y=()=>{const[e,s]=u.useState(!1),[t,r]=u.useState(null),l=a=>{r(a),s(!0)},c=()=>{s(!1),r(null)},g=[{title:"AI For Architects",images:[{src:"/porfolio/images/ai-for-architects2.png",alt:"AI For Architects - Main Dashboard"},{src:"/porfolio/images/ai-for-architects1.png",alt:"AI For Architects - Generation Interface"},{src:"/porfolio/images/ai-for-architects3.png",alt:"AI For Architects - Results Showcase"},{src:"/porfolio/images/ai-for-architects4.png",alt:"AI For Architects - Gallery Showcase"}],mainImage:"/porfolio/images/ai-for-architects1.png",description:"A comprehensive AI-powered platform that transforms architectural visualization through intelligent design generation and dynamic video creation. The application leverages cutting-edge AI models including OpenAIs DALL-E 3, GPT-4o Vision, and Googles Veo 2.0, Veo 3.0 to convert architectural concepts into photorealistic visual content. Key features include: advanced room customization with 15+ architectural styles, intelligent lighting and color controls, real-time image editing and enhancement, text-to-video generation for architectural walkthroughs, image-to-video conversion for dynamic presentations, portfolio-based style extraction using computer vision, and compressed thumbnail generation for optimized performance. The platform features enterprise-grade architecture with role-based access control, quota management systems, cross-origin video streaming, and scalable user management designed for professional architectural firms and design studios. <br /><br /><b>Technologies:</b> React 18, TailwindCSS, Node.js, Express.js, MongoDB, OpenAI API (DALL-E 3, GPT-4o Vision), Google Veo 2.0 API, FFmpeg, Sharp, JWT Authentication, Cloudflare Tunnels, Google Cloud Storage, Video Proxy Streaming",link:"https://ai-for-architects.com"},{title:"Document Privacy (DP-Fusion)",images:[{src:"/porfolio/images/document-privacy2.png",alt:"Document Privacy - Upload Interface"},{src:"/porfolio/images/document-privacy1.png",alt:"Document Privacy - Processing Results"}],mainImage:"/porfolio/images/document-privacy1.png",description:"An enterprise-grade document sanitization platform that automatically removes sensitive information from business documents while maintaining document integrity. Built during my internship at Alpine Privacy, this solution processes multiple file formats (DOCX, PPTX, PDF, TXT) using advanced Named Entity Recognition (NER) systems including spaCy, BERT, and Flair. The platform implements DP-Fusion, a novel decoding strategy that provides theoretical privacy guarantees while ensuring all uploaded data is permanently deleted post-processing.<br /><br /><b>Technologies:</b> React 18.3 (TypeScript), Vite, Redux Toolkit, Tailwind CSS, Node.js, PyTorch, Transformers, Presidio, spaCy, FastAPI, Docker, Nginx",link:"https://documentprivacy.com/"},{title:"U.S. Lightning Strikes Analysis",images:[{src:"/porfolio/images/lightning-strike-analysis1.png",alt:"U.S. Lightning Strikes - Dashboard"},{src:"/porfolio/images/lightning-strike-analysis2.png",alt:"U.S. Lightning Strikes - Heatmap"},{src:"/porfolio/images/lightning-strike-analysis3.png",alt:"U.S. Lightning Strikes - Time Series"}],mainImage:"/porfolio/images/lightning-strike-analysis1.png",description:"A comprehensive data visualization project analyzing 13+ million U.S. lightning strike records (2009-2018) to uncover critical meteorological patterns. Developed interactive Tableau dashboards featuring time-series analysis, geospatial heatmaps, and comparative visualizations that reveal seasonal trends and geographic hotspots. The project demonstrates advanced data storytelling techniques and provides actionable insights for weather prediction and safety planning.<br /><br /><b>Technologies:</b> Tableau, Python, Data Analytics, Statistical Analysis",link:"https://public.tableau.com/app/profile/md.kaif8168/viz/U_S_LightningStrikesStory/U_S_LightningStrikesStory"},{title:"Multi-Scan App",image:"/porfolio/images/multi-scan.png",description:"A sophisticated Android application that combines document scanning capabilities with real-time landmark recognition using advanced machine learning. Built with modern Android development practices, the app features an intuitive interface powered by Jetpack Compose, TensorFlow Lite for efficient on-device ML inference, and automated PDF generation for scanned documents.<br /><br /><b>Technologies:</b> Kotlin, Jetpack Compose, TensorFlow Lite, CameraX, ML Kit"},{title:"StickHero",image:"/porfolio/images/stickhero.png",description:"A fully functional game implementation demonstrating advanced object-oriented programming principles and software engineering best practices. Built using JavaFX, the game features smooth animations, collision detection, and comprehensive error handling. Includes extensive unit testing with JUnit to ensure code reliability and maintainability.<br /><br /><b>Technologies:</b> Java, JavaFX, JUnit, Object-Oriented Programming"}];return i.jsxs(d.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"projects-page",children:[i.jsx(d.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"My Projects"}),i.jsx(d.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},className:"project-section",children:g.map((a,p)=>i.jsxs(d.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.1,delay:.1+p*.1},whileHover:{scale:1.03},className:"project",children:[i.jsxs("div",{className:"project-content",children:[i.jsx("h2",{children:a.link?i.jsx("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:a.title}):a.title}),i.jsx("div",{className:"project-description",children:i.jsx("p",{dangerouslySetInnerHTML:{__html:a.description}})})]}),i.jsx("div",{className:"project-image-container",onClick:()=>l(a),children:i.jsxs("div",{className:"card-stack-container",children:[a.images?a.images.slice(0,3).map((n,o)=>i.jsx(d.div,{className:"stacked-image",initial:!1,animate:{translateX:o*15,translateY:o*10,rotate:o*3,zIndex:-o},children:i.jsx("img",{src:n.src,alt:n.alt,className:"project-image"})},o)):i.jsx("div",{className:"stacked-image",children:i.jsx("img",{src:a.image,alt:a.title,className:"project-image"})}),a.images&&a.images.length>3&&i.jsxs("div",{className:"remaining-indicator",children:["+",a.images.length-3]})]})})]},a.title))}),i.jsx(k,{isOpen:e,onClose:c,images:(t==null?void 0:t.images)||(t?[{src:t.image,alt:t.title}]:[]),projectTitle:t==null?void 0:t.title})]})};export{Y as default};
