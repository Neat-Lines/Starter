const contactForm=$("#contact-form")[0];contactForm.addEventListener("submit",(e=>{let o=new FormData;for(var t of(o.append("from",$("#name")[0].value+" <"+$("#email")[0].value+">"),o.append("to","support@neatlinesco.com"),o.append("subject","New Contact Form Entry"),o.append("text",$("#message")[0].value),o.entries()))console.log(t[0]+", "+t[1]);fetch("https://api.mailgun.net/v3/mg.neatlinesco.com/messages",{mode:"cors",method:"POST",headers:{Authorization:"Basic YXBpOmJlMjY4YzAyMTRlYTQzYWVmNTc1ZThkNTkxYTc2ZTI3LWFmZjhhYTk1LWE0ODA5ZGEx"},body:o}).then((e=>console.log(e))).then((e=>console.log(e))),e.preventDefault()}));const encodeFormData=e=>Object.keys(e).map((o=>encodeURIComponent(o)+"="+encodeURIComponent(e[o]))).join("&");
//# sourceMappingURL=contact-form.js.map