import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const s=document.querySelector("body"),e=document.createElement("form");s.append(e);e.classList.add("feedback-form");e.setAttribute("autocomplete","off");e.innerHTML="<label>Email<input type='email' name='email' autofocus /></label><label>Message<textarea name='message' rows='8'></textarea></label><button type='submit'>Submit</button>";const t={email:null,message:null},m=l=>{t.email=e.elements.email.value.trim(),t.message=e.elements.message.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))},a=JSON.parse(localStorage.getItem("feedback-form-state"));localStorage.length!==0&&(e.elements.email.value=a.email,e.elements.message.value=a.message);e.addEventListener("input",m);e.addEventListener("submit",l=>{l.preventDefault(),localStorage.removeItem("feedback-form-state"),e.reset(),console.log(a)});
//# sourceMappingURL=commonHelpers2.js.map
