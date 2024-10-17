(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))h(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const v of n.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&h(v)}).observe(document,{childList:!0,subtree:!0});function r(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(c){if(c.ep)return;c.ep=!0;const n=r(c);fetch(c.href,n)}})();const A=document.getElementById("nav-doctor"),V=document.getElementById("nav-services"),S=document.getElementById("nav-treatment"),z=document.getElementById("nav-sertificate"),C=document.getElementById("nav-feedback"),x=document.getElementById("contact"),u=document.getElementById("about-container"),y=document.getElementById("services"),I=document.getElementById("treatment"),_=document.getElementById("certificates"),k=document.getElementById("feedback"),w=document.getElementById("contacts"),O=document.getElementById("arrow-top"),T=document.getElementById("logo");A.addEventListener("click",e=>{u.scrollIntoView({block:"start",behavior:"smooth"})});V.addEventListener("click",e=>{y.scrollIntoView({block:"start",behavior:"smooth"})});S.addEventListener("click",e=>{I.scrollIntoView({block:"start",behavior:"smooth"})});z.addEventListener("click",e=>{_.scrollIntoView({block:"start",behavior:"smooth"})});C.addEventListener("click",e=>{k.scrollIntoView({block:"start",behavior:"smooth"})});x.addEventListener("click",e=>{w.scrollIntoView({block:"start",behavior:"smooth"})});O.addEventListener("click",e=>{u.scrollIntoView({block:"start",behavior:"smooth"})});T.addEventListener("click",e=>{u.scrollIntoView({block:"start",behavior:"smooth"})});const X="/FU_GAN/assets/certificate_1-C6IC0oMB.jpg",D="/FU_GAN/assets/certificate_2-DU2qLnzQ.jpg",M="/FU_GAN/assets/certificate_3-CaZNn1Ed.jpg",P="/FU_GAN/assets/certificate_4-Dtr98qcK.jpg",q="/FU_GAN/assets/certificate_5-e7euyBxU.jpg",$="/FU_GAN/assets/certificate_6-B9Kx20dt.jpg",H="/FU_GAN/assets/certificate_7-SkjVkEsO.jpg",K="/FU_GAN/assets/certificate_8-DJKOmSqw.jpg",R="/FU_GAN/assets/certificate_9-CiWjp37N.jpg",J="/FU_GAN/assets/certificate_10-CkyTGTzz.jpg",Q="/FU_GAN/assets/certificate_11-BHENtQCv.jpg",W="/FU_GAN/assets/certificate_12-jjdTRyas.jpg",s=[X,D,M,P,q,$,H,K,R,J,Q,W];let o=0,b=!1;function g(){const e=document.getElementById("certificate-image");e.style.opacity=0,setTimeout(()=>{e.src=s[o],e.onload=()=>{e.style.opacity=1,b=!1}},300)}document.getElementById("prevBtnCertificate").addEventListener("click",()=>{o=(o-1+s.length)%s.length,g()});document.getElementById("nextBtnCertificate").addEventListener("click",()=>{o=(o+1)%s.length,g()});let B;const L=document.getElementById("certificate-image");L.addEventListener("touchstart",e=>{B=e.touches[0].clientX});L.addEventListener("touchmove",e=>{if(b)return;const t=e.touches[0].clientX,r=B-t;Math.abs(r)>50&&(b=!0,r>0?o=(o+1)%s.length:o=(o-1+s.length)%s.length,g(),e.preventDefault())});g();const Z="/FU_GAN/assets/review_1-BCIBpGZ3.jpg",Y="/FU_GAN/assets/review_2-BrwGIRFv.jpg",ee="/FU_GAN/assets/review_3-CG3Y3V6y.jpg",te="/FU_GAN/assets/review_4-B-CJNHO3.jpg",E="/FU_GAN/assets/review_without_photo-CJzwEjPz.png",a=[{id:"1",photo:Z,review:"Летом 2024 года я проходила реабилитацию в поликлинике, где врачи посоветовали мне попробовать иглоукалывание. Сначала я сомневалась, стоит ли обращаться к Фу Ган Львовичу, так как прошлый опыт рефлексотерапии не дал результатов, и каждый сеанс вызывал страх. Фу Ган Львович, благодарю вас за понимание, заботу и индивидуальный подход. Уже после первого сеанса боль начала утихать, а слабость и онемение в ногах значительно уменьшились. С каждым сеансом мое тело оживало: вернулась чувствительность, улучшилось настроение, и я смогла отказаться от антидепрессантов. Вы — замечательный врач! Желаю вам здоровья и продолжайте дарить его своим пациентам!",name:"Валерия, 30 лет"},{id:"2",photo:Y,review:"Добрый день, хотел бы оставить здесь свой отзыв. В возрасте 33 лет у меня случился микроинсульт, в результате которого пропал слух в одном ухе, появились тиннитус и шум в голове, что впоследствии диагностировали как нейросенсорную тугоухость. Я пробовал различные методы лечения, включая акупунктуру. По рекомендации я обратился к Гану Львовичу и после первых сеансов мануальной и иглорефлексотерапии почувствовал значительное улучшение общего самочувствия, а также снижение шума в ухе и голове. Очень рад, что попал к такому специалисту, профессионалу своего дела и внимательному человеку. Спасибо вам!",name:"Дмитрий, 39 лет"},{id:"3",photo:ee,review:"Впервые я обратилась к Гану Львовичу с старшей дочерью, у которой много лет продолжался ночной энурез. Мы годами посещали различных врачей, но ничего не помогало. На фоне иглоукалывания у Гана Львовича мы заметили эффект очень быстро — всего через несколько сеансов. Хотя проблема была упорной, мы прошли несколько курсов с интервалами в несколько месяцев, и в конечном итоге энурез прекратился. После этого Ган Львович не раз мне помог: за один сеанс он поставил на ноги мою 85-летнюю бабушку с радикулитом, а я регулярно хожу к нему на мануальную терапию со сколиозом. Сейчас привела младшую дочку с заболеванием щитовидной железы. Ган Львович — чудесный доктор, профессионал и очень приятный человек, врач от Бога.",name:"Татьяна"},{id:"4",photo:te,review:"Добрый день, доктор! Ещё раз хочу выразить вам огромную благодарность. Помните, я спрашивала насчет миом? Думать больше не надо — вы уже справились!У меня были миомы (58 мм) и полипы, готовилась к операции, но её отложили из-за проблемы с рукой. После вашего лечения врач была удивлена: рука в порядке, на УЗИ — матка чистая, полипов нет, две миомы исчезли, а большая уменьшилась до 40 мм. Врач даже не взяла деньги, сказав, что это не её заслуга. Я до сих пор в шоке!",name:"Ярослава, 50 лет"},{id:"5",photo:E,review:"После тяжелого развода у меня начались постоянные головные боли, бессонница, бесконечная усталость и апатия. В поликлинике сначала долго и непонятно лечили, затем невролог выписала антидепрессанты, что немного помогло, но головные боли продолжались. Я принимала таблетки каждый день, иногда несколько раз в день, бессонница не проходила, а таблетки начали портить желудок. Хотя страшных диагнозов мне не ставили, состояние не улучшалось. Случайно узнала о иглорефлексотерапии и посоветовала обратиться к доктору. Уважаемый Ган Львович, выражаю вам огромную благодарность и низкий поклон! Вы терпеливо относились ко мне, несмотря на мои сомнения. Уже после первого сеанса я начала лучше спать. Хотя курс лечения продолжается, я уже не пью таблетки, настроение улучшилось, головные боли исчезли, и умственная ясность вернулась. Ушли и другие проблемы, на которые я раньше не обращала внимания: нормализовался цикл, улучшилась работа кишечника, и даже кожа стала более здорового цвета. Спасибо вам еще раз и до встречи!",name:"Ксения, 38 лет"},{id:"6",photo:E,review:"Много лет страдал от болей в спине: грыжи межпозвоночных дисков в поясничной области, протрузии, гемангиома позвонка. Пробовал различные методы лечения, делал уколы и блокады, но эффект был слабый и кратковременный. Обратился к чудесному доктору и настоящему профессионалу Гану Львовичу. Ушли боль и скованность движений, я стал нормально вставать по утрам, прошло онемение в ногах, и в целом прибавилось энергии. Спасибо огромное! Всем советую — теперь только к нему!",name:"Владимир, 62 года"}];let i=0,p=!1;function f(){const e=a[i],t=document.getElementById("feedback-wrapper");t.style.opacity=0,setTimeout(()=>{document.getElementById("feedback-img").src=e.photo,document.getElementById("feedback-text").innerText=e.review,document.getElementById("feedback-name").innerText=e.name,t.style.opacity=1,p=!1},300)}document.getElementById("prevBtnFeedback").addEventListener("click",()=>{i=(i-1+a.length)%a.length,f()});document.getElementById("nextBtnFeedback").addEventListener("click",()=>{i=(i+1)%a.length,f()});let F;const N=document.getElementById("feedback-wrapper");N.addEventListener("touchstart",e=>{F=e.touches[0].clientX});N.addEventListener("touchmove",e=>{if(p)return;const t=e.touches[0].clientX,r=F-t;Math.abs(r)>50&&(p=!0,r>0?i=(i+1)%a.length:i=(i-1+a.length)%a.length,f(),e.preventDefault())});f();const m=document.getElementById("header__burger"),j=document.getElementById("pop-up"),ce=document.getElementById("burger__doctor"),ne=document.getElementById("burger__services"),oe=document.getElementById("burger__treatment"),ie=document.getElementById("burger__sertificate"),re=document.getElementById("burger__feedback"),se=document.getElementById("burger-contact");m.addEventListener("click",()=>{m.classList.toggle("burger__inactive"),m.classList.toggle("burger__active"),j.classList.toggle("pop-up-inactive")});function l(){m.classList.toggle("burger__inactive"),m.classList.toggle("burger__active"),j.classList.toggle("pop-up-inactive")}ce.addEventListener("click",()=>{l(),u.scrollIntoView({block:"start",behavior:"auto"})});ne.addEventListener("click",()=>{l(),y.scrollIntoView({block:"start",behavior:"auto"})});oe.addEventListener("click",()=>{l(),I.scrollIntoView({block:"start",behavior:"auto"})});ie.addEventListener("click",()=>{l(),_.scrollIntoView({block:"start",behavior:"auto"})});re.addEventListener("click",()=>{l(),k.scrollIntoView({block:"start",behavior:"auto"})});se.addEventListener("click",()=>{l(),w.scrollIntoView({block:"start",behavior:"auto"})});const d=document.querySelector(".about-info");function G(){let t=1.5;for(d.style.fontSize=`${t}rem`;d.scrollHeight>d.clientHeight&&t>.8;)t-=.1,d.style.fontSize=`${t}rem`}function U(){return window.matchMedia("(min-width: 769px)").matches}const ae=new ResizeObserver(()=>{U()&&G()});ae.observe(d);window.addEventListener("load",()=>{U()&&G()});