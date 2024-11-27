(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))w(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&w(h)}).observe(document,{childList:!0,subtree:!0});function r(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function w(t){if(t.ep)return;t.ep=!0;const c=r(t);fetch(t.href,c)}})();const X=document.getElementById("nav-doctor"),O=document.getElementById("nav-services"),D=document.getElementById("nav-treatment"),N=document.getElementById("nav-sertificate"),T=document.getElementById("nav-feedback"),M=document.getElementById("contact"),g=document.getElementById("about-container"),L=document.getElementById("services"),k=document.getElementById("treatment"),B=document.getElementById("certificates"),_=document.getElementById("feedback"),j=document.getElementById("contacts"),$=document.getElementById("arrow-top"),F=document.getElementById("logo");X.addEventListener("click",e=>{g.scrollIntoView({block:"start",behavior:"smooth"})});O.addEventListener("click",e=>{L.scrollIntoView({block:"start",behavior:"smooth"})});D.addEventListener("click",e=>{k.scrollIntoView({block:"start",behavior:"smooth"})});N.addEventListener("click",e=>{B.scrollIntoView({block:"start",behavior:"smooth"})});T.addEventListener("click",e=>{_.scrollIntoView({block:"start",behavior:"smooth"})});M.addEventListener("click",e=>{j.scrollIntoView({block:"start",behavior:"smooth"})});$.addEventListener("click",e=>{g.scrollIntoView({block:"start",behavior:"smooth"})});F.addEventListener("click",e=>{g.scrollIntoView({block:"start",behavior:"smooth"})});const J=""+new URL("certificate_1-C6IC0oMB.jpg",import.meta.url).href,P=""+new URL("certificate_2-DU2qLnzQ.jpg",import.meta.url).href,q=""+new URL("certificate_3-CaZNn1Ed.jpg",import.meta.url).href,G=""+new URL("certificate_4-Dtr98qcK.jpg",import.meta.url).href,H=""+new URL("certificate_5-e7euyBxU.jpg",import.meta.url).href,K=""+new URL("certificate_6-B9Kx20dt.jpg",import.meta.url).href,z=""+new URL("certificate_7-SkjVkEsO.jpg",import.meta.url).href,A=""+new URL("certificate_8-DJKOmSqw.jpg",import.meta.url).href,Q=""+new URL("certificate_9-CiWjp37N.jpg",import.meta.url).href,Z=""+new URL("certificate_10-CkyTGTzz.jpg",import.meta.url).href,W=""+new URL("certificate_11-BHENtQCv.jpg",import.meta.url).href,Y=""+new URL("certificate_12-jjdTRyas.jpg",import.meta.url).href,s=[J,P,q,G,H,K,z,A,Q,Z,W,Y];let o=0,b=!1;function f(){const e=document.getElementById("certificate-image");e.style.opacity=0,setTimeout(()=>{e.src=s[o],e.onload=()=>{e.style.opacity=1,b=!1}},300)}document.getElementById("prevBtnCertificate").addEventListener("click",()=>{o=(o-1+s.length)%s.length,f()});document.getElementById("nextBtnCertificate").addEventListener("click",()=>{o=(o+1)%s.length,f()});let U;const x=document.getElementById("certificate-image");x.addEventListener("touchstart",e=>{U=e.touches[0].clientX});x.addEventListener("touchmove",e=>{if(b)return;const n=e.touches[0].clientX,r=U-n;Math.abs(r)>50&&(b=!0,r>0?o=(o+1)%s.length:o=(o-1+s.length)%s.length,f(),e.preventDefault())});f();const ee=""+new URL("review_1-BCIBpGZ3.jpg",import.meta.url).href,te=""+new URL("review_2-BrwGIRFv.jpg",import.meta.url).href,ne=""+new URL("review_3-CG3Y3V6y.jpg",import.meta.url).href,ce=""+new URL("review_4-B-CJNHO3.jpg",import.meta.url).href,d=[{id:"0",photo:ee,review:"<p>Летом 2024 года я проходила реабилитацию в поликлинике, где врачи посоветовали мне попробовать иглоукалывание. Я долго не решалась обратиться к Фу Ган Львовичу, так как ранее пробовала рефлексотерапию, но результаты были незначительными. К тому же, каждый сеанс вызывал у меня страх, и я смогла пройти лишь четыре из них.</p><p>Фу Ган Львович, хочу выразить вам огромную благодарность за ваше понимание, заботу и индивидуальный подход. После первого сеанса я заметила, что боль в теле начала утихать, а на следующий день слабость и онемение в ногах стали значительно меньше, с каждым сеансом тело стало оживать, вернулась чувствительность,  нормализовался цикл, удалось мягко уйти с антидепрессантов, улучшилось настроение и появились силы на дальнейшее восстановление.</p><p>Ган Львович, Вы замечательный врач, профессионал, которого трудно найти! Будьте здоровы и дарите возможность быть здоровыми всем своим пациентам. До встречи!</p>",name:"Валерия, 30 лет"},{id:"1",photo:ce,review:"<p>Добрый день! Я опять пишу вам с глубочайшей благодарностью. Помните, я спрашивала насчёт гинекологии? Можно ли уменьшить миомы? А вы обещали подумать. Так вот, думать не надо — вы уже со всем и так справились.</p><p>Миомы у меня давно — четыре штуки, они растут, мы наблюдаем, тенденций к уменьшению не было. Потом обнаружили полипы в матке. На январь мне была назначена гистероскопия. Врач моя, хирург, сказала: «Приходи после Нового года, сдадим анализы, я тебя почищу, и тогда будем смотреть, что делать с миомой». Предположительно, придётся всё-таки удалять, ибо она растёт. Судя по гормональному фону, это, скорее всего, текома — гормонально активная опухоль, которая, в отличие от обычной эндометриоидной, может перерасти в онкологию.</p><p>После Нового года меня оперировать не смогли, так как рука не двигалась и прилипла к телу, и мне даже наркоз нормально не сделали. Руку-то не отведёшь в сторону. Она мне сказала: «Давай лечи руку, а потом будем делать гистероскопию и смотреть дальше». В ноябре размер самой большой миомы был 58 мм. Если всё так и будет расти, придётся каким-то образом удалять самую большую миому, возможно, вместе со всеми органами.</p><p>И вот, после вашего лечения руки, я пришла к своей гинекологу-хирургу. Она просто глаза выкатила и говорит: «Рука живая совсем, и я очень живая, и изнутри очень спокойная и расслабленная». Говорит, впервые видит, чтобы настолько легко человек двигался после того, что она видела. Я даже на кресло залезть не могла с этой рукой, у меня голова-то не поворачивалась. Она расспрашивала, чем и как меня лечили, спросила даже, куда конкретно тыкали иглами. Посмотрела УЗИ и сказала свой вердикт: матка чистая, ни эндометриоза, ни полипов нет, две миомы исчезли, две остались, но та, которая большая, значительно уменьшилась — на треть точно: 40 мм и 12 мм. Есть тенденция к уменьшению.</p><p>Изнутри руками посмотрела и сказала, что вся гинекология очень спокойная, чистая и здоровая. Её жутко удивило, что вся эта красота произошла не на фоне климакса, его у меня нет и не предвидится в ближайшее время, и гормональный фон не поменялся. Рожать я могу, аж в путь! Так что она сказала быть аккуратнее.</p><p>И ещё, я-то к ней пришла частным образом, у меня ДМС от той организации закончился давно, достаю деньги — она не берёт. Я такая: 'Боже мой, почему?' Она говорит: 'Я ничего не сделала, вас вылечила не я. Я не возьму с вас ничего'. Я в шоке! А она такая: 'Никаких конфет и коньяков. Вас вылечила не я'. Потом меня обняла и говорит: 'Дай вам Бог здоровья, я так хочу, чтобы у вас было всё хорошо'. И отпустила…</p>",name:"Ярослава"},{id:"2",photo:te,review:"<p>Добрый день, хотел бы оставить здесь свой отзыв. В возрасте 33 лет случился микроинсульт, в результате пропал слух в одном ухе, появился так называемый тиннитус и шум в голове (диагноз впоследствии нейросенсорная тугоухость). До этого пробовал разные методы лечения в том числе и акупунктуру.</p><p>К Гану Львовичу попал по рекомендации и после первых же сеансов мануальной и иглорефлексотерапии почувствовал значительное улучшение как общего самочувствия, так и снижение шума в ухе и голове. Очень рад, что попал к такому специалисту, профессионалу своего дела и внимательному, чуткому человеку. Спасибо вам!</p>",name:"Дмитрий, 39 лет"},{id:"3",photo:ne,review:"<p>Впервые я обратилась к Гану Львовичу со старшей дочерью. У нее много лет продолжался ночной энурез, мы годами ходили по классическим и альтернативным врачам, но ничего не помогало. На фоне иглоукалывания у Гана Львовича мы заметили эффект очень быстро (через несколько сеансов). Проблема оказалась упорной, мы в итоге прошли несколько курсов с интервалом в несколько месяцев, но в конечном счете энурез прекратился.</p><p>После этого Ган Львович помогал мне не раз: поставил за 1 раз на ноги мою 85-летнюю бабушку с радикулитом, я сама регулярно хожу к нему на мануальную терапию со сколиозом. Сейчас привела младшую дочку с заболеванием щитовидной железы. Ган Львович - чудесный доктор: профессионал и очень приятный человек, врач от Бога.</p>",name:"Татьяна"},{id:"4",review:"<p>Огромная благодарность Вам Ган Львович за высочайший профессионализм, внимательность и чуткость! Пришла сразу с несколькими проблемами. Основная - профессиональные голосовые зажимы. Также была проблема с циклом, женских дней могло не быть по несколько месяцев.</p><p>Ни один врач решить вопросы не смог. После посещения курса процедур иголок все восстановилось. Зажимы ушли, цикл восстановился. Да, пока нужно еще периодически приходить на повторные процедуры, но факт остается фактом - иглорефлексотерапия в умелых руках грамотного специалиста работает безотказно!</p>",name:"Мария,35 лет"},{id:"5",review:"<p>Пришла к Гану Львовичу после перелома лучезапястного сустава. После снятия гипса рука была малоподвижной, очень болела, а самое главное - сильно немели пальцы. После первого(!!!) сеанса иголочек и реабилитационной гимнастики онемение в пальцах прошло полностью! Ган Львович показал, как заниматься дома, какие процедуры проводить. Далее были еще сеансы с плечевым суставом, который тоже стал болеть после долгой неподвижности в гипсе. На данный момент рука полностью восстановилась.Огромная благодарность Гану Львовичу за высокий профессионализм!</p>",name:"Оксана"},{id:"6",review:"<p>Много лет болела спина (грыжи межпозвоночных дисков в области поясницы, протрузии, гемангиома позвонка), что только не делал. Лечился, колол уколы , делал блокады.   Эффект был слабый и кратковременный. Потом попал к чудесному доктору, настоящему профессионалу своего дела Гану Львовичу.  Ушла боль, скованность движений, я стал нормально вставать по утрам, прошло онемение в ногах да и в целом прибавилось энергии. Спасибо огромное!! Всем советую!!  Теперь только к нему!!</p>",name:"Владимир, 62 года"},{id:"7",review:"<p>После тяжелого развода, стала постоянно болеть голова, появилась бессонница, бесконечная усталость и апатия. Обратилась  в поликлинику, сначала долго и непонятно от чего лечили, потом невролог выписала антидепрессанты, стало лучше, но вот головная боль не проходила, фактически я пила таблетки каждый день и даже несколько раз в день, бессоница так и продолжала мучать. Ко всему начал от таблеток болеть желудок.  Каких только страшных диагнозов мне не ставили, все в норме , но состояние не улучшалось. Потом случайно узнала, что можно попробовать иглорефлексотерапию, посоветовали доктора. И теперь о главном.</p><p>Уважаемый Ган Львович, выражаю вам огромную благодарность!!! И низкий поклон!!! Вы со мной, конечно, натерпелись, я долго сомневалась, но уже после первого сеанса стала лучше спать! Курс лечения продолжается, но уже сейчас я не пью таблетки, настроение стало лучше, голова не болит и стала более ясная. Ушли и другие проблемы, на которые я не обращала внимание, нормализовался цикл, стал хорошо работать кишечник, все приходит  в норму. И даже ощущение, что кожа стала более здорового цвета!! Спасибо еще раз!! И до встречи!!</p>",name:"Ксения, 38 лет"},{id:"8",review:"<p>Добрый день! Хочу выразить благодарность замечательному человеку и доктору с большой буквы Гану Львовичу. Спасибо Вам огромное, что ставите на ноги в прямом смысле этого слова. Первый раз к Гану на прием меня практически на руках принес муж, в спине заклинило. После мануальной терапии и иголок я не поверила сама себе, потому что я встала и пошла))) Конечно, чтобы все встало на место, нужен курс терапии, который я прошла и после лечения спина не беспокоила.</p><p>С этого момента Ган стал нашим любимым доктором! Спасибо Вам огромное за ваше внимание и чуткое отношение к пациентам! Желаю Вам огромного здоровья, удачи и успехов в вашем нелегком труде!</p>",name:"Иванова Мария Владимировна,  08.09.1977"},{id:"9",review:"<p>Обратилась за лечением к доктору с постоянной головной болью. На протяжении долгого времени наблюдалась в поликлинике, но эффективного лечения не было. Пройдя курс лечения у Гана Львовича, я забыла что такое, когда болит голова. Лечение проводилось комплексное, работал не только с головной болью, но и с болью в спине. Прошла боль, улучшилось общее состояние, ушла тревожность, нормализовался сон. Выражаю большую благодарность Гану Львовичу!</p>",name:"Катерина, 38 лет"},{id:"10",review:"<p>После сильного стресса был сбой всего организма, знакомые посоветовали обратиться к доктору Гану Львовичу. Прошел курс лечения мануальной терапии и иглорефлексотерапии. Улучшение наступило уже после первого сеанса. Состояние организма нормализовалось. Очень благодарен доктору. Всем рекомендую!</p>",name:"Роман, 37 лет"},{id:"11",review:"<p>Здравствуйте, Доктор! С такой, а вернее с полным списком по разным причинам поражающей боли я столкнулась в 2019 году. В конце января боль меня скрутила и не отпускала, я не могла ходить, лежать и уж тем более сидеть. Это было ужасно! Я лежала в платном отделении хорошей больницы, посещала платных врачей, массажи, но ничего мне не помогало… спустя полгода от местной поликлиники меня направили на реабилитацию в Ховрино, на самом деле более чем просто побыть в тишине, я наверное уже и не рассчитывала… Но каково же было удивление, не эффект 'плацебо', не даже надежда, так как меня привезли в кресле… когда после трёх сеансов вашего лечения, я посещала совершенно спокойно ЛФК, гуляла и раздумывала всерьез о пробежке… Могу сказать без преувеличения – ко мне вернулась жизнь! Искренне Благодарна! Дай Бог Вам и Вашим рукам здоровья!</p><p>Не стала писать, что во время всех моих мытарств по больницам прошла анализы и врачи поставили мне диагноз, страшный диагноз… а я очень хотела доченьку. И никаких надежд мне не дали, только ЭКО. Через месяц после твоего лечения, я занялась спортом и спустя месяц мой организм так восстановился, что я забеременела и выносила прекрасную девочку. Вот такие чудеса!</p>",name:"Татьяна"},{id:"12",review:"<p>Хочу выразить благодарность, замечательному специалисту своего дела иглорефлексотерапевту, мануальному терапевту, зав. ЛФК Гану Львовичу Фу! Этот доктор – великолепен, отличное отношение к каждому пациенту, не важно, молодой он или пожилой, к каждому индивидуальный подход и отличная мотивация к лечению. Профессионал в своей области работы! Всегда поддержит и успокоит, а это важное качество врача. Ган Львович – единственная причина, почему я легла в этот центр.</p><p>Этому молодому доктору есть дело до каждого, и нет наплевательского отношения к своим пациентам разных возрастов. После общения с ним чувствуешь прилив энергии, бодрости, выпрямляется больная спина. Спасибо, желаю ему много здоровья, счастья, успехов, карьерного роста! Таких врачей нужно беречь, ценить, всячески поддерживает и давать возможность работать в полную силу! С уважением,</p>",name:"Милашевская Л.Н."},{id:"13",review:"<p>Хочу выразить благодарность за оказанную медицинскую помощь зав. отделением ЛФК Фу Ган Львовичу. Процедуры ИРТ и мануальная терапия – это просто сказка! У меня перестало болеть плечо, движение его также улучшились.Мое утро в течении 5-6 лет начиналось с головокружения, спать поносам в привычном положении было проблематично. Я смирилась уже с этим. И вот здесь мне помогли, это просто чудо! Я так счастлива! Огромное спасибо доктору!</p>",name:"Штаркина Н.В."},{id:"14",review:"<p>Хочу выразить благодарность заведующему отделением ЛФК Фу Гану Львовичу за отличное отношение к пациентам, высочайший профессионализм в своем деле. После его процедур иглоукалывания у меня сразу уменьшились боли в спине и оперированной ноге. Хотелось бы и дальше в будущем проходить лечение у такого замечательного специалиста от Бога. Спасибо огромное всему Вашему коллективу. С уважением,</p>",name:"Бирюкова С.М."},{id:"15",review:"<p>Хочу выразить искреннюю благодарность за высокий профессионализм, моральную и психологическую поддержку всему медперсоналу центра - особенно Фу Гану Львовичу. Благодаря методам лечения доктора, я, потерявший надежду на восстановление после полученной травмы на производстве (правый коленный сустав, постоянное онемение и обездвиженность левой ступни) получил высококвалифицированную помощь. Спасибо за проделанную работу, за возможность полноценно жить. Спасибо врачу с большой буквы. С уважением,</p>",name:"Ушнов С.А."},{id:"16",review:"<p>Хочу выразить благодарность мед.персоналу реабилитационного центра: за внимание , чуткость и участие. Особенно хочу отметить Фу Гана Львовича за профессионализм, за эффективное лечение, с его помощью я вернулась к  полноценной жизни. Поступила с проблемами двигательной системы левой ноги, болями в пояснице и онемением стопы. Благодаря лечению движение ноги улучшилось, прошло онемение стопы, боли в пояснице тоже прошли. Огромная благодарность Гану Львовичу, спасибо за качественное лечение! С уважением,</p>",name:"Беликова Н.Ф"},{id:"17",review:"<p>Хочу выразить благодарность доктору иглорефлексотерапевту Фу Ган Львовичу. За всё моё лечение доктор был очень внимательным, понимающим. Он всегда интересовался моим здоровьем. При поступлении у меня были очень сильные боли, я мучилась с 2019 года. Благодаря доктору Фу Ган Львовичу, его умению и профессионализму, мне с каждым днём становилось всё легче. Он очень добрый, внимательный и уважающий своих пациентов. Спасибо доктору Фу Ган Львовичу! С большим уважением,</p>",name:"Мазурова А. И."}];let a=0,E=!1;function v(){const e=d[a],n=document.getElementById("feedback-wrapper");n.style.opacity=0,setTimeout(()=>{e.photo?(document.getElementById("feedback-img").src=e.photo,document.getElementById("feedback-img").style.display="block"):document.getElementById("feedback-img").style.display="none",document.getElementById("feedback-text").innerHTML=e.review,document.getElementById("feedback-name").innerText=e.name,n.style.opacity=1,E=!1},300)}document.getElementById("prevBtnFeedback").addEventListener("click",()=>{a=(a-1+d.length)%d.length,v()});document.getElementById("nextBtnFeedback").addEventListener("click",()=>{a=(a+1)%d.length,v()});let R;const S=document.getElementById("feedback-wrapper");S.addEventListener("touchstart",e=>{R=e.touches[0].clientX});S.addEventListener("touchmove",e=>{if(E)return;const n=e.touches[0].clientX,r=R-n;Math.abs(r)>50&&(E=!0,r>0?a=(a+1)%d.length:a=(a-1+d.length)%d.length,v(),e.preventDefault())});v();const m=document.getElementById("header__burger"),V=document.getElementById("pop-up"),ie=document.getElementById("burger__doctor"),re=document.getElementById("burger__services"),oe=document.getElementById("burger__treatment"),ae=document.getElementById("burger__sertificate"),se=document.getElementById("burger__feedback"),de=document.getElementById("burger-contact");m.addEventListener("click",()=>{m.classList.toggle("burger__inactive"),m.classList.toggle("burger__active"),V.classList.toggle("pop-up-inactive")});function l(){m.classList.toggle("burger__inactive"),m.classList.toggle("burger__active"),V.classList.toggle("pop-up-inactive")}ie.addEventListener("click",()=>{l(),g.scrollIntoView({block:"start",behavior:"auto"})});re.addEventListener("click",()=>{l(),L.scrollIntoView({block:"start",behavior:"auto"})});oe.addEventListener("click",()=>{l(),k.scrollIntoView({block:"start",behavior:"auto"})});ae.addEventListener("click",()=>{l(),B.scrollIntoView({block:"start",behavior:"auto"})});se.addEventListener("click",()=>{l(),_.scrollIntoView({block:"start",behavior:"auto"})});de.addEventListener("click",()=>{l(),j.scrollIntoView({block:"start",behavior:"auto"})});const le=[{id:"1",image:"ilgotherapy",title:"Иглотерапия",text:"Иглотерапия — древнее искусство, которое с помощью тончайших игл пробуждает внутренние силы организма. Точки на теле, куда вводятся иглы, связаны с различными органами и системами, и их стимуляция помогает восстановить баланс, снять боль и улучшить общее самочувствие."},{id:"2",title:"Мануальная терапия",image:"manualTherapy",text:"Мануальная терапия — техника исцеления руками, которая возвращает телу естественную свободу движения. Специалист работает с позвоночником и суставами, устраняя блоки и напряжение, словно «включая» тело заново. После сеанса возникает ощущение легкости и обновления, как будто тело снова обрело свою естественную гибкость и силу."},{id:"3",image:"auriculotherapy",title:"Аурикулотерапия",text:"Аурикулотерапия — это метод, основанный на стимуляции биологически активных точек на ушной раковине. Каждая из этих точек связана с внутренними органами и системами организма. Воздействие на них с помощью игл или других инструментов помогает снять стресс, облегчить боль и восстановить баланс организма, воздействуя на его самые глубокие резервы."},{id:"4",image:"acupressure",title:"Акупрессура",text:"Акупрессура — это древняя техника, которая использует силу нажатия на биологически активные точки тела для стимуляции самоисцеления. В отличие от игл, здесь работают руки: нажатия пальцами или ладонями мягко, но уверенно воздействуют на точки, связанные с внутренними органами и системами. Это метод, который помогает снять боль, расслабиться и восстановить энергию, просто через прикосновения."},{id:"5",image:"electropuncture",title:"Электропунктура",text:"Электропунктура — современный метод, который объединяет традиционную иглотерапию и достижения электротерапии. Мягкие электрические импульсы подаются на точки, где установлены иглы, усиливая их воздействие и ускоряя процесс восстановления. Этот метод особенно эффективен для снятия боли и восстановления функций организма, сочетая древнюю мудрость и современные технологии."},{id:"6",image:"pir",title:"Постизометрическая релаксация",text:'Постизометрическая релаксация (ПИР) — это мягкая, но невероятно эффективная техника, которая помогает снять мышечное напряжение, избавить от боли и вернуть подвижность суставам. Основной принцип ПИР — это чередование напряжения и расслабления мышц, после чего тело словно само по себе "отпускает" зажимы.'}],me=document.getElementById("prevBtnServices"),pe=document.getElementById("nextBtnServices"),y=document.getElementById("services-container"),ue=JSON.stringify(le),u=JSON.parse(ue);let ge=0,i=ge,I=!1;pe.addEventListener("click",()=>{i>=5?i=0:i++,p()});me.addEventListener("click",()=>{i<=0?i=5:i--,p()});document.addEventListener("DOMContentLoaded",e=>{u?p():console.log(error.message)});function p(){y.innerHTML=`<div>
            <div class=${u[i].image}>
              <h3>${u[i].title}</h3>
            </div>
            <p>${u[i].text}</p>
          </div>`}let C;y.addEventListener("touchstart",e=>{C=e.touches[0].clientX});y.addEventListener("touchmove",e=>{if(I)return;const n=e.touches[0].clientX,r=C-n;Math.abs(r)>50&&(I=!0,r>0?i++:i--,p())});p();