import{r as u,j as e,A as D,m as d,L as x,_ as M,C as P,a as h}from"./index-DbB_2DOZ.js";const k=({isOpen:i,onClose:o,images:t,projectTitle:r})=>{const[l,c]=u.useState(0);if(!i||!t||t.length===0)return null;const p=n=>{n.stopPropagation(),c(s=>s===0?t.length-1:s-1)},a=n=>{n.stopPropagation(),c(s=>s===t.length-1?0:s+1)},m=n=>{n.key==="ArrowLeft"&&p(n),n.key==="ArrowRight"&&a(n),n.key==="Escape"&&o()};return e.jsx(D,{children:e.jsx(d.div,{className:"gallery-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:o,onKeyDown:m,tabIndex:0,children:e.jsxs(d.div,{className:"gallery-modal-content",initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},transition:{type:"spring",damping:25,stiffness:300},onClick:n=>n.stopPropagation(),children:[e.jsxs("div",{className:"gallery-modal-header",children:[e.jsx("h3",{children:r}),e.jsx("button",{className:"gallery-modal-close",onClick:o,children:"×"})]}),e.jsxs("div",{className:"gallery-modal-image-container",children:[e.jsx(d.img,{src:t[l].src,alt:t[l].alt,className:"main-image",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}},l),t.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"gallery-nav-button prev",onClick:p,children:"‹"}),e.jsx("button",{className:"gallery-nav-button next",onClick:a,children:"›"})]})]}),t.length>1&&e.jsx("div",{className:"gallery-thumbnails",children:t.map((n,s)=>e.jsx("div",{className:`gallery-thumbnail ${s===l?"active":""}`,onClick:()=>c(s),children:e.jsx("img",{src:n.src,alt:`Thumbnail ${s+1}`})},s))})]})})})};var E="@firebase/vertexai",A="1.2.2";/**
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
 */const B="vertexAI",j="us-central1";/**
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
 */class G{constructor(o,t,r,l){var c;this.app=o,this.options=l;const p=r==null?void 0:r.getImmediate({optional:!0}),a=t==null?void 0:t.getImmediate({optional:!0});this.auth=a||null,this.appCheck=p||null,this.location=((c=this.options)===null||c===void 0?void 0:c.location)||j}_delete(){return Promise.resolve()}}/**
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
 */var T;(function(i){i.GENERATE_CONTENT="generateContent",i.STREAM_GENERATE_CONTENT="streamGenerateContent",i.COUNT_TOKENS="countTokens",i.PREDICT="predict"})(T||(T={}));var I;(function(i){i.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",i.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",i.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",i.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(I||(I={}));var _;(function(i){i.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",i.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",i.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",i.BLOCK_NONE="BLOCK_NONE"})(_||(_={}));var f;(function(i){i.SEVERITY="SEVERITY",i.PROBABILITY="PROBABILITY"})(f||(f={}));var O;(function(i){i.NEGLIGIBLE="NEGLIGIBLE",i.LOW="LOW",i.MEDIUM="MEDIUM",i.HIGH="HIGH"})(O||(O={}));var N;(function(i){i.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",i.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",i.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",i.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(N||(N={}));var v;(function(i){i.SAFETY="SAFETY",i.OTHER="OTHER",i.BLOCKLIST="BLOCKLIST",i.PROHIBITED_CONTENT="PROHIBITED_CONTENT"})(v||(v={}));var g;(function(i){i.STOP="STOP",i.MAX_TOKENS="MAX_TOKENS",i.SAFETY="SAFETY",i.RECITATION="RECITATION",i.OTHER="OTHER",i.BLOCKLIST="BLOCKLIST",i.PROHIBITED_CONTENT="PROHIBITED_CONTENT",i.SPII="SPII",i.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL"})(g||(g={}));var L;(function(i){i.AUTO="AUTO",i.ANY="ANY",i.NONE="NONE"})(L||(L={}));var y;(function(i){i.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",i.TEXT="TEXT",i.IMAGE="IMAGE",i.VIDEO="VIDEO",i.AUDIO="AUDIO",i.DOCUMENT="DOCUMENT"})(y||(y={}));/**
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
 */var C;(function(i){i.STRING="string",i.NUMBER="number",i.INTEGER="integer",i.BOOLEAN="boolean",i.ARRAY="array",i.OBJECT="object"})(C||(C={}));/**
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
 */var S;(function(i){i.BLOCK_LOW_AND_ABOVE="block_low_and_above",i.BLOCK_MEDIUM_AND_ABOVE="block_medium_and_above",i.BLOCK_ONLY_HIGH="block_only_high",i.BLOCK_NONE="block_none"})(S||(S={}));var R;(function(i){i.BLOCK_ALL="dont_allow",i.ALLOW_ADULT="allow_adult",i.ALLOW_ALL="allow_all"})(R||(R={}));var b;(function(i){i.SQUARE="1:1",i.LANDSCAPE_3x4="3:4",i.PORTRAIT_4x3="4:3",i.LANDSCAPE_16x9="16:9",i.PORTRAIT_9x16="9:16"})(b||(b={}));g.RECITATION,g.SAFETY;function H(){M(new P(B,(i,{instanceIdentifier:o})=>{const t=i.getProvider("app").getImmediate(),r=i.getProvider("auth-internal"),l=i.getProvider("app-check-internal");return new G(t,r,l,{location:o})},"PUBLIC").setMultipleInstances(!0)),h(E,A),h(E,A,"esm2017")}H();const Y=()=>{const[i,o]=u.useState(!1),[t,r]=u.useState(null),l=a=>{r(a),o(!0)},c=()=>{o(!1),r(null)},p=[{title:"Classical Cipher Identification Using Machine Learning",images:[{src:"/porfolio/images/iiitd.png",alt:"IIIT Delhi Logo"}],mainImage:"/porfolio/images/iiitd.png",description:`
        <div class="project-header">
          <strong>BTech Project (BTP) under Dr. Ravi Anand at IIIT-Delhi</strong>
          <span class="project-period">Aug 2025 - Present</span>
        </div>
        <p>Training machine learning models to automatically identify classical cipher types from ciphertext using statistical and structural patterns.</p>
        <h4>Key Features:</h4>
        <ul>
          <li>Analyzes distinct patterns introduced by different classical ciphers in encrypted text:
            <ul>
              <li>Caesar cipher - preserved but shifted letter frequencies</li>
              <li>Vigenère cipher - smoothed frequency distributions across alphabets</li>
              <li>Substitution ciphers - maintained but permuted frequency distributions</li>
              <li>Transposition ciphers - preserved frequencies with disrupted n-gram structures</li>
            </ul>
          </li>
          <li>Implements automated cryptanalysis using machine learning to reverse-engineer encryption methods</li>
          <li>Plans to scale for multiple languages including Mandarin and Urdu</li>
        </ul>
      `,githubLink:"",demoLink:"https://iiitd.ac.in/"},{title:"AI For Architects",images:[{src:"/porfolio/images/ai-for-architects1.png",alt:"AI For Architects - Main Dashboard"},{src:"/porfolio/images/ai-for-architects2.png",alt:"AI For Architects - Generation Interface"},{src:"/porfolio/images/ai-for-architects3.png",alt:"AI For Architects - Results Showcase"},{src:"/porfolio/images/ai-for-architects4.png",alt:"AI For Architects - Gallery Showcase"}],mainImage:"/porfolio/images/ai-for-architects1.png",description:"A comprehensive AI-powered platform that transforms architectural visualization through intelligent design generation and dynamic video creation. The application leverages cutting-edge AI models including OpenAIs DALL-E 3, GPT-4o Vision, and Googles Veo 2.0, Veo 3.0 to convert architectural concepts into photorealistic visual content. Key features include: advanced room customization with 15+ architectural styles, intelligent lighting and color controls, real-time image editing and enhancement, text-to-video generation for architectural walkthroughs, image-to-video conversion for dynamic presentations, portfolio-based style extraction using computer vision, and compressed thumbnail generation for optimized performance. The platform features enterprise-grade architecture with role-based access control, quota management systems, cross-origin video streaming, and scalable user management designed for professional architectural firms and design studios. <br /><br /><b>Technologies:</b> React 18, TailwindCSS, Node.js, Express.js, MongoDB, OpenAI API (DALL-E 3, GPT-4o Vision), Google Veo 2.0 API, FFmpeg, Sharp, JWT Authentication, Cloudflare Tunnels, Google Cloud Storage, Video Proxy Streaming",link:"https://ai-for-architects.com"},{title:"Document Privacy (DP-Fusion)",images:[{src:"/porfolio/images/document-privacy2.png",alt:"Document Privacy - Upload Interface"},{src:"/porfolio/images/document-privacy1.png",alt:"Document Privacy - Processing Results"}],mainImage:"/porfolio/images/document-privacy1.png",description:"An enterprise-grade document sanitization platform that automatically removes sensitive information from business documents while maintaining document integrity. Built during my internship at Alpine Privacy, this solution processes multiple file formats (DOCX, PPTX, PDF, TXT) using advanced Named Entity Recognition (NER) systems including spaCy, BERT, and Flair. The platform implements DP-Fusion, a novel decoding strategy that provides theoretical privacy guarantees while ensuring all uploaded data is permanently deleted post-processing.<br /><br /><b>Technologies:</b> React 18.3 (TypeScript), Vite, Redux Toolkit, Tailwind CSS, Node.js, PyTorch, Transformers, Presidio, spaCy, FastAPI, Docker, Nginx",link:"https://documentprivacy.com/"},{title:"FinSight-NLP-App",images:[{src:"/porfolio/images/finsight1.png",alt:"FinSight - Screen"},{src:"/porfolio/images/finsight2.png",alt:"FinSight - Screen"},{src:"/porfolio/images/finsight3.png",alt:"FinSight - Screen"}],mainImage:"/porfolio/images/finsight1.png",description:"A web app that performs NLP on financial text using a custom-trained spaCy model. It identifies custom entities (Stocks, Financial Events) and analyzes sentiment with VADER. The backend is built with Python and Flask, serving an interactive UI with a color-coded legend for the analysis.",link:"https://finsight-app-md6v.onrender.com/"},{title:"U.S. Lightning Strikes Analysis",images:[{src:"/porfolio/images/lightning-strike-analysis1.png",alt:"U.S. Lightning Strikes - Dashboard"},{src:"/porfolio/images/lightning-strike-analysis2.png",alt:"U.S. Lightning Strikes - Heatmap"},{src:"/porfolio/images/lightning-strike-analysis3.png",alt:"U.S. Lightning Strikes - Time Series"}],mainImage:"/porfolio/images/lightning-strike-analysis1.png",description:"A comprehensive data visualization project analyzing 13+ million U.S. lightning strike records (2009-2018) to uncover critical meteorological patterns. Developed interactive Tableau dashboards featuring time-series analysis, geospatial heatmaps, and comparative visualizations that reveal seasonal trends and geographic hotspots. The project demonstrates advanced data storytelling techniques and provides actionable insights for weather prediction and safety planning.<br /><br /><b>Technologies:</b> Tableau, Python, Data Analytics, Statistical Analysis",link:"https://public.tableau.com/app/profile/md.kaif8168/viz/U_S_LightningStrikesStory/U_S_LightningStrikesStory"},{title:"Multi-Scan App",image:"/porfolio/images/multi-scan.png",description:"A sophisticated Android application that combines document scanning capabilities with real-time landmark recognition using advanced machine learning. Built with modern Android development practices, the app features an intuitive interface powered by Jetpack Compose, TensorFlow Lite for efficient on-device ML inference, and automated PDF generation for scanned documents.<br /><br /><b>Technologies:</b> Kotlin, Jetpack Compose, TensorFlow Lite, CameraX, ML Kit"}];return e.jsxs(d.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"projects-page",children:[e.jsx(d.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"My Projects"}),e.jsx(d.section,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},className:"project-section",children:p.map((a,m)=>e.jsxs(d.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.1,delay:.1+m*.1},whileHover:{scale:1.03},className:"project",children:[e.jsxs("div",{className:"project-content",children:[e.jsx("h2",{children:a.link?e.jsx("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"project-link",children:a.title}):a.title}),e.jsx("div",{className:"project-description",children:e.jsx("p",{dangerouslySetInnerHTML:{__html:a.description}})})]}),e.jsx("div",{className:"project-image-container",onClick:()=>l(a),children:e.jsxs("div",{className:"card-stack-container",children:[a.images?a.images.slice(0,3).map((n,s)=>e.jsx(d.div,{className:"stacked-image",initial:!1,animate:{translateX:s*15,translateY:s*10,rotate:s*3,zIndex:-s},children:e.jsx("img",{src:n.src,alt:n.alt,className:"project-image"})},s)):e.jsx("div",{className:"stacked-image",children:e.jsx("img",{src:a.image,alt:a.title,className:"project-image"})}),a.images&&a.images.length>3&&e.jsxs("div",{className:"remaining-indicator",children:["+",a.images.length-3]})]})})]},a.title))}),e.jsx(k,{isOpen:i,onClose:c,images:(t==null?void 0:t.images)||(t?[{src:t.image,alt:t.title}]:[]),projectTitle:t==null?void 0:t.title})]})};export{Y as default};
