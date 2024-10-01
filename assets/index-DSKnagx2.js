(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))v(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&v(m)}).observe(document,{childList:!0,subtree:!0});function h(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function v(t){if(t.ep)return;t.ep=!0;const c=h(t);fetch(t.href,c)}})();const k=document.getElementById("nav-doctor"),B=document.getElementById("nav-services"),w=document.getElementById("nav-treatment"),L=document.getElementById("nav-sertificate"),F=document.getElementById("nav-feedback"),N=document.getElementById("contact"),l=document.getElementById("about-container"),b=document.getElementById("services"),p=document.getElementById("treatment"),E=document.getElementById("certificates"),y=document.getElementById("feedback"),I=document.getElementById("contacts"),G=document.getElementById("arrow-top"),U=document.getElementById("logo");k.addEventListener("click",e=>{l.scrollIntoView({block:"start",behavior:"smooth"})});B.addEventListener("click",e=>{b.scrollIntoView({block:"start",behavior:"smooth"})});w.addEventListener("click",e=>{p.scrollIntoView({block:"start",behavior:"smooth"})});L.addEventListener("click",e=>{E.scrollIntoView({block:"start",behavior:"smooth"})});F.addEventListener("click",e=>{y.scrollIntoView({block:"start",behavior:"smooth"})});N.addEventListener("click",e=>{I.scrollIntoView({block:"start",behavior:"smooth"})});G.addEventListener("click",e=>{l.scrollIntoView({block:"start",behavior:"smooth"})});U.addEventListener("click",e=>{l.scrollIntoView({block:"start",behavior:"smooth"})});const j="/FU_GAN/assets/certificate_1-C6IC0oMB.jpg",A="/FU_GAN/assets/certificate_2-DU2qLnzQ.jpg",V="/FU_GAN/assets/certificate_3-CaZNn1Ed.jpg",C="/FU_GAN/assets/certificate_4-Dtr98qcK.jpg",x="/FU_GAN/assets/certificate_5-e7euyBxU.jpg",O="/FU_GAN/assets/certificate_6-B9Kx20dt.jpg",T="/FU_GAN/assets/certificate_7-SkjVkEsO.jpg",S="/FU_GAN/assets/certificate_8-DJKOmSqw.jpg",D="/FU_GAN/assets/certificate_9-CiWjp37N.jpg",P="/FU_GAN/assets/certificate_10-CkyTGTzz.jpg",a=[j,A,V,C,x,O,T,S,D,P];let i=0;function u(){const e=document.getElementById("certificate-image");e.style.opacity=0,setTimeout(()=>{e.src=a[i],e.style.opacity=1},300)}document.getElementById("prevBtnCertificate").addEventListener("click",()=>{i=(i-1+a.length)%a.length,u()});document.getElementById("nextBtnCertificate").addEventListener("click",()=>{i=(i+1)%a.length,u()});u();const z="/FU_GAN/assets/review_1-BCIBpGZ3.jpg",q="/FU_GAN/assets/review_2-BrwGIRFv.jpg",K="/FU_GAN/assets/review_3-CG3Y3V6y.jpg",J="/FU_GAN/assets/review_4-B-CJNHO3.jpg",f="/FU_GAN/assets/review_without_photo-CJzwEjPz.png",d=[{id:"1",photo:z,review:"Летом 2024 года я проходила реабилитацию в поликлинике, где врачи посоветовали мне попробовать иглоукалывание. Сначала я сомневалась, стоит ли обращаться к Фу Ган Львовичу, так как прошлый опыт рефлексотерапии не дал результатов, и каждый сеанс вызывал страх. Фу Ган Львович, благодарю вас за понимание, заботу и индивидуальный подход. Уже после первого сеанса боль начала утихать, а слабость и онемение в ногах значительно уменьшились. С каждым сеансом мое тело оживало: вернулась чувствительность, улучшилось настроение, и я смогла отказаться от антидепрессантов. Вы — замечательный врач! Желаю вам здоровья и продолжайте дарить его своим пациентам!",name:"Валерия, 30 лет"},{id:"2",photo:q,review:"Добрый день, хотел бы оставить здесь свой отзыв. В возрасте 33 лет у меня случился микроинсульт, в результате которого пропал слух в одном ухе, появились тиннитус и шум в голове, что впоследствии диагностировали как нейросенсорную тугоухость. Я пробовал различные методы лечения, включая акупунктуру. По рекомендации я обратился к Гану Львовичу и после первых сеансов мануальной и иглорефлексотерапии почувствовал значительное улучшение общего самочувствия, а также снижение шума в ухе и голове. Очень рад, что попал к такому специалисту, профессионалу своего дела и внимательному человеку. Спасибо вам!",name:"Дмитрий, 39 лет"},{id:"3",photo:K,review:"Впервые я обратилась к Гану Львовичу с старшей дочерью, у которой много лет продолжался ночной энурез. Мы годами посещали различных врачей, но ничего не помогало. На фоне иглоукалывания у Гана Львовича мы заметили эффект очень быстро — всего через несколько сеансов. Хотя проблема была упорной, мы прошли несколько курсов с интервалами в несколько месяцев, и в конечном итоге энурез прекратился. После этого Ган Львович не раз мне помог: за один сеанс он поставил на ноги мою 85-летнюю бабушку с радикулитом, а я регулярно хожу к нему на мануальную терапию со сколиозом. Сейчас привела младшую дочку с заболеванием щитовидной железы. Ган Львович — чудесный доктор, профессионал и очень приятный человек, врач от Бога.",name:"Татьяна"},{id:"4",photo:J,review:"Добрый день, доктор! Ещё раз хочу выразить вам огромную благодарность. Помните, я спрашивала насчет миом? Думать больше не надо — вы уже справились!У меня были миомы (58 мм) и полипы, готовилась к операции, но её отложили из-за проблемы с рукой. После вашего лечения врач была удивлена: рука в порядке, на УЗИ — матка чистая, полипов нет, две миомы исчезли, а большая уменьшилась до 40 мм. Врач даже не взяла деньги, сказав, что это не её заслуга. Я до сих пор в шоке!",name:"Ярослава, 50 лет"},{id:"5",photo:f,review:"После тяжелого развода у меня начались постоянные головные боли, бессонница, бесконечная усталость и апатия. В поликлинике сначала долго и непонятно лечили, затем невролог выписала антидепрессанты, что немного помогло, но головные боли продолжались. Я принимала таблетки каждый день, иногда несколько раз в день, бессонница не проходила, а таблетки начали портить желудок. Хотя страшных диагнозов мне не ставили, состояние не улучшалось. Случайно узнала о иглорефлексотерапии и посоветовала обратиться к доктору. Уважаемый Ган Львович, выражаю вам огромную благодарность и низкий поклон! Вы терпеливо относились ко мне, несмотря на мои сомнения. Уже после первого сеанса я начала лучше спать. Хотя курс лечения продолжается, я уже не пью таблетки, настроение улучшилось, головные боли исчезли, и умственная ясность вернулась. Ушли и другие проблемы, на которые я раньше не обращала внимания: нормализовался цикл, улучшилась работа кишечника, и даже кожа стала более здорового цвета. Спасибо вам еще раз и до встречи!",name:"Ксения, 38 лет"},{id:"6",photo:f,review:"Много лет страдал от болей в спине: грыжи межпозвоночных дисков в поясничной области, протрузии, гемангиома позвонка. Пробовал различные методы лечения, делал уколы и блокады, но эффект был слабый и кратковременный. Обратился к чудесному доктору и настоящему профессионалу Гану Львовичу. Ушли боль и скованность движений, я стал нормально вставать по утрам, прошло онемение в ногах, и в целом прибавилось энергии. Спасибо огромное! Всем советую — теперь только к нему!",name:"Владимир, 62 года"}];let s=0;function g(){const e=d[s],o=document.getElementById("feedback-wrapper");o.style.opacity=0,setTimeout(()=>{document.getElementById("feedback-img").src=e.photo,document.getElementById("feedback-text").innerText=e.review,document.getElementById("feedback-name").innerText=e.name,o.style.opacity=1},300)}document.getElementById("prevBtnFeedback").addEventListener("click",()=>{s=(s-1+d.length)%d.length,g()});document.getElementById("nextBtnFeedback").addEventListener("click",()=>{s=(s+1)%d.length,g()});g();const r=document.getElementById("header__burger"),_=document.getElementById("pop-up"),M=document.getElementById("burger__doctor"),W=document.getElementById("burger__services"),Z=document.getElementById("burger__treatment"),H=document.getElementById("burger__sertificate"),Q=document.getElementById("burger__feedback"),R=document.getElementById("burger-contact");r.addEventListener("click",()=>{r.classList.toggle("burger__inactive"),r.classList.toggle("burger__active"),_.classList.toggle("pop-up-inactive")});function n(){r.classList.toggle("burger__inactive"),r.classList.toggle("burger__active"),_.classList.toggle("pop-up-inactive")}M.addEventListener("click",()=>{n(),l.scrollIntoView({block:"start",behavior:"auto"})});W.addEventListener("click",()=>{n(),b.scrollIntoView({block:"start",behavior:"auto"})});Z.addEventListener("click",()=>{n(),p.scrollIntoView({block:"start",behavior:"auto"})});H.addEventListener("click",()=>{n(),E.scrollIntoView({block:"start",behavior:"auto"})});Q.addEventListener("click",()=>{n(),y.scrollIntoView({block:"start",behavior:"auto"})});R.addEventListener("click",()=>{n(),I.scrollIntoView({block:"start",behavior:"auto"})});
