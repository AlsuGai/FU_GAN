import review1 from "/assets/images/photo/review_1.jpg";
import review2 from "/assets/images/photo/review_2.jpg";
import review3 from "/assets/images/photo/review_3.jpg";
import review4 from "/assets/images/photo/review_4.jpg";
import reviewWithoutPhoto from "/assets/images/photo/review_without_photo.png";

const feedbackArr = [
  {
    id: "1",
    photo: review1,
    review:
      "Летом 2024 года я проходила реабилитацию в поликлинике, где врачи посоветовали мне попробовать иглоукалывание. Сначала я сомневалась, стоит ли обращаться к Фу Ган Львовичу, так как прошлый опыт рефлексотерапии не дал результатов, и каждый сеанс вызывал страх. Фу Ган Львович, благодарю вас за понимание, заботу и индивидуальный подход. Уже после первого сеанса боль начала утихать, а слабость и онемение в ногах значительно уменьшились. С каждым сеансом мое тело оживало: вернулась чувствительность, улучшилось настроение, и я смогла отказаться от антидепрессантов. Вы — замечательный врач! Желаю вам здоровья и продолжайте дарить его своим пациентам!",
    name: "Валерия, 30 лет",
  },
  {
    id: "2",
    photo: review2,
    review:
      "Добрый день, хотел бы оставить здесь свой отзыв. В возрасте 33 лет у меня случился микроинсульт, в результате которого пропал слух в одном ухе, появились тиннитус и шум в голове, что впоследствии диагностировали как нейросенсорную тугоухость. Я пробовал различные методы лечения, включая акупунктуру. По рекомендации я обратился к Гану Львовичу и после первых сеансов мануальной и иглорефлексотерапии почувствовал значительное улучшение общего самочувствия, а также снижение шума в ухе и голове. Очень рад, что попал к такому специалисту, профессионалу своего дела и внимательному человеку. Спасибо вам!",
    name: "Дмитрий, 39 лет",
  },
  {
    id: "3",
    photo: review3,
    review:
      "Впервые я обратилась к Гану Львовичу с старшей дочерью, у которой много лет продолжался ночной энурез. Мы годами посещали различных врачей, но ничего не помогало. На фоне иглоукалывания у Гана Львовича мы заметили эффект очень быстро — всего через несколько сеансов. Хотя проблема была упорной, мы прошли несколько курсов с интервалами в несколько месяцев, и в конечном итоге энурез прекратился. После этого Ган Львович не раз мне помог: за один сеанс он поставил на ноги мою 85-летнюю бабушку с радикулитом, а я регулярно хожу к нему на мануальную терапию со сколиозом. Сейчас привела младшую дочку с заболеванием щитовидной железы. Ган Львович — чудесный доктор, профессионал и очень приятный человек, врач от Бога.",
    name: "Татьяна",
  },
  {
    id: "4",
    photo: review4,
    review:
      "Добрый день, доктор! Ещё раз хочу выразить вам огромную благодарность. Помните, я спрашивала насчет миом? Думать больше не надо — вы уже справились!У меня были миомы (58 мм) и полипы, готовилась к операции, но её отложили из-за проблемы с рукой. После вашего лечения врач была удивлена: рука в порядке, на УЗИ — матка чистая, полипов нет, две миомы исчезли, а большая уменьшилась до 40 мм. Врач даже не взяла деньги, сказав, что это не её заслуга. Я до сих пор в шоке!",
    name: "Ярослава, 50 лет",
  },
  {
    id: "5",
    photo: reviewWithoutPhoto,
    review:
      "После тяжелого развода у меня начались постоянные головные боли, бессонница, бесконечная усталость и апатия. В поликлинике сначала долго и непонятно лечили, затем невролог выписала антидепрессанты, что немного помогло, но головные боли продолжались. Я принимала таблетки каждый день, иногда несколько раз в день, бессонница не проходила, а таблетки начали портить желудок. Хотя страшных диагнозов мне не ставили, состояние не улучшалось. Случайно узнала о иглорефлексотерапии и посоветовала обратиться к доктору. Уважаемый Ган Львович, выражаю вам огромную благодарность и низкий поклон! Вы терпеливо относились ко мне, несмотря на мои сомнения. Уже после первого сеанса я начала лучше спать. Хотя курс лечения продолжается, я уже не пью таблетки, настроение улучшилось, головные боли исчезли, и умственная ясность вернулась. Ушли и другие проблемы, на которые я раньше не обращала внимания: нормализовался цикл, улучшилась работа кишечника, и даже кожа стала более здорового цвета. Спасибо вам еще раз и до встречи!",
    name: "Ксения, 38 лет",
  },
  {
    id: "6",
    photo: reviewWithoutPhoto,
    review:
      "Много лет страдал от болей в спине: грыжи межпозвоночных дисков в поясничной области, протрузии, гемангиома позвонка. Пробовал различные методы лечения, делал уколы и блокады, но эффект был слабый и кратковременный. Обратился к чудесному доктору и настоящему профессионалу Гану Львовичу. Ушли боль и скованность движений, я стал нормально вставать по утрам, прошло онемение в ногах, и в целом прибавилось энергии. Спасибо огромное! Всем советую — теперь только к нему!",
    name: "Владимир, 62 года",
  },
];

let currentIndex = 0;

function displayFeedback() {
  const feedback = feedbackArr[currentIndex];
  const feedbackDiv = document.getElementById("feedback-wrapper");
  feedbackDiv.style.opacity = 0;
  setTimeout(() => {
    document.getElementById("feedback-img").src = feedback.photo;
    document.getElementById("feedback-text").innerText = feedback.review;
    document.getElementById("feedback-name").innerText = feedback.name;
    feedbackDiv.style.opacity = 1;
  }, 300);
}

document.getElementById("prevBtnFeedback").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + feedbackArr.length) % feedbackArr.length;
  displayFeedback(currentIndex);
});

document.getElementById("nextBtnFeedback").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % feedbackArr.length;
  displayFeedback(currentIndex);
});

displayFeedback(currentIndex);