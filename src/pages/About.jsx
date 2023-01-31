import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div style = {{"font-family":"Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif"}}>
    <h1>О книжном клубе MyBook</h1>    
       <p>Что это такое
        MyBook — это современная библиотека в интернете, которая открывает вам доступ к каталогу бестселлеров и классической литературы, включая новинки разных жанров: от художественных до научно-популярных книг и деловой литературы. Более 455 000 наименований из более чем двадцати разных жанров.
        Привычная идея библиотеки в том, что вместо покупки отдельных книг вы получаете доступ ко всему каталогу. Мы не продаём книги и не заставляем их скачивать, а даём читать без ограничений и на разных устройствах. Достаточно оформить подписку.
        В привычном понимании электронные книги до сих пор были похожи на бумажные: это отдельные файлы, которые нужно где-то скачать и хранить, после этого закинуть в ридер-читалку, а если у вас несколько устройств для чтения, то придётся на каждом поддерживать отдельную копию своей библиотеки. Если же вы не просто читаете книги, а ещё и сохраняете цитаты и закладки, то синхронизировать всё это чаще всего приходится вручную.
        Именно для тех, кто читает много и с удовольствием, мы решили сделать MyBook — клуб-библиотеку, вступив в который вы сможете читать не только книги, которые у вас уже есть, но и издания из нашего обширного каталога.
        Как устроен MyBook?
        У нас, как и в обычной библиотеке, нужна регистрация для того, чтобы мы точно знали, какие книги вы читаете, и могли из десятков тысяч книг предложить что-то, подходящее именно вам. После регистрации вы сразу можете начать читать любые книги — почти для каждой есть пробный фрагмент, чтобы вы могли бесплатно полистать и распробовать ту или иную книгу прежде, чем оформить подписку.
        Понравившиеся книги добавляйте в список чтения, оплачивайте подписку, и всё — книги в вашем распоряжении до конца оплаченного времени. Их можно читать на сайте через браузер, воспользоваться приложением для iPhone и iPad или приложением для Android.
        Многие книги из бесплатного набора вы можете читать без подписки, например, классику и издания, которые авторы и издатели разрешили читать без оплаты. Их больше 132 000, так что если у вас подписка закончилась, а читать хочется — обратите на них внимание или перечитайте заново что-то из вечной классики.
        Откуда берутся книг
        Сейчас у нас в коллекции более 455 000 книг. Из них 132 000 — это книги, которые можно читать бесплатно, достаточно зарегистрироваться. В каталог MyBook сейчас попадает вся коллекция изданий из книжного магазина ЛитРес, и мы постоянно работаем над тем, чтобы в каталоге появлялись всё новые и новые издательства и авторы.
        Десятки тысяч книг — внушительное число, но это пока совсем немного по сравнению с сотнями тысяч книг, которые доступны только в бумажном виде. Если вы представляете издательство, которое хочет свои книги открыть для читателей по подписке, или вы — автор, который хочет попасть в библиотеку, минуя привычные издательства — напишите нам.
        Если вы представляете правообладателя и у вас возникли вопросы по правам на книги и о распространении их через MyBook, задайте вопрос почтой, мы обязательно ответим.
        Реквизиты компании
        ООО «Живая Библиотека», ОГРН 1117746445640, ИНН 7734658075, КПП 770301001
        Почтовый адрес: 123112, город Москва, 1-й Красногвардейский проезд, дом 15, этаж 28</p> 
        <Link to="/addbook">Добавить книгу </Link>
        <Link to="/">Главная</Link>
    </div>
  )
}

export default About