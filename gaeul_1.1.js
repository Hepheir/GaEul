function user_input(i){
  var str = new Array();
  for (var a = 0; sort_sentences(i)[a] != undefined; a++) {
    str[a] = sort_sentences(i)[a];
  }

  for (var b = 0; b < a; b++) {
    str[b] = str[b].replace(/하세요;/g,";");
    str[b] = str[b].replace(/세요;/g,";");
    str[b] = str[b].replace(/하시게;/g,";");
    str[b] = str[b].replace(/하게;/g,";");
    str[b] = str[b].replace(/시게;/g,";");
    str[b] = str[b].replace(/하다;/g,";");
    str[b] = str[b].replace(/하네;/g,";");
    str[b] = str[b].replace(/이다;/g,";");

    str[b] = str[b].replace(/해요;/g,";");
    str[b] = str[b].replace(/해;/g,";");
    str[b] = str[b].replace(/나요;/g,";");
    str[b] = str[b].replace(/요;/g,";");
    
    str[b] = str[b].replace(/하시죠;/g,";");
    str[b] = str[b].replace(/하죠;/g,";");
    str[b] = str[b].replace(/시죠;/g,";");
    str[b] = str[b].replace(/죠;/g,";");

    str[b] = str[b].replace(/하셨노라;/g,";");
    str[b] = str[b].replace(/하노라;/g,";");
    str[b] = str[b].replace(/하거라;/g,";");
    str[b] = str[b].replace(/보거라;/g,";");
    
    str[b] = str[b].replace(/입니다;/g,";");
    str[b] = str[b].replace(/니다;/g,";");
    str[b] = str[b].replace(/이다;/g,";");
    str[b] = str[b].replace(/다;/g,";");

    str[b] = str[b].replace(/같다;/g,";");
    str[b] = str[b].replace(/같네;/g,";");
    str[b] = str[b].replace(/처럼;/g,"");
    str[b] = str[b].replace(/마치/g,"");
    str[b] = str[b].replace(/좀\+/g,"+");
    
    str[b] = str[b].replace(/야;/g,";");

    str[b] = str[b].replace(/을\+/g,"+");
    str[b] = str[b].replace(/를\+/g,"+");
    str[b] = str[b].replace(/의\+/g,"+");
    str[b] = str[b].replace(/도\+/g,"+");
    str[b] = str[b].replace(/에게\+/g,"+");
    str[b] = str[b].replace(/께\+/g,"+");
    str[b] = str[b].replace(/으로\+/g,"+");
    str[b] = str[b].replace(/로\+/g,"+");

    //조사
    str[b] = str[b].replace(/은\+/g,"+");
    str[b] = str[b].replace(/는\+/g,"+");
    str[b] = str[b].replace(/이\+/g,"+");
    str[b] = str[b].replace(/가\+/g,"+");
    //기호
    str[b] = str[b].replace(/\./g,"");
    str[b] = str[b].replace(/,/g,"");
    str[b] = str[b].replace(/!/g,"");
    str[b] = str[b].replace(/\?/g,"");
    str[b] = str[b].replace(/;/g,"");
    str[b] = str[b].replace(/\+/g,", ");
  }
  alert(str[0]+str[1]);
  return str;
}

//마침표를 기준으로 문장을 분리하여 배열로 저장하여 반환해주는 함수.
function sort_sentences(i){
  var sentences = new Array();
  var n = 0;
  sentences[n] = '';
  for (var a = 0; a < i.length; a++) {
    i = i.replace(".",";");
    i = i.replace("!",";");
    i = i.replace("?",";");
    i = i.replace(" ","+");
    sentences[n] += i[a];
    if (i[a] == ';') {
      n++;
      sentences[n] = '';
    }
  }
  return sentences;
}
function get_words(i) {
  i = i.replace(/\+AND/g,"");
  i = i.replace(/\+DO/g,"");
  i = i.replace(/;/g,".");
  i = i.replace(/\+/g," ");
  var s = new Array();
  var b = 1;
  for (var a = 0; i[a] != '.' && i[a] != undefined; a++) {
    for (s[b] = ''; i[a] != ' ' && i[a] != '.' && i[a] != undefined; a++) {
      s[b] += i[a];
    }
    b++;
  }
  s[0] = --b;
  return s;
}

//마침표를 기준으로 문장을 분리하여 배열로 저장하여 반환해주는 함수.
function sort_sentences(i){
  i = i.replace(/\./g,"+;");
  i = i.replace(/\,/g,"+;");
  i = i.replace(/\!/g,"+;");
  i = i.replace(/\?/g,"+;");
  i = i.replace(/ /g,"+");
  i = i.replace(/;\+/g,";");
  var sentences = new Array();
  var n = 0;
  sentences[n] = '';
  for (var a = 0; a < i.length; a++) {
    sentences[n] += i[a];
    if (i[a] == ';' && i[a+1] != undefined) {
      n++;
      sentences[n] = '';
    }
  }
  return sentences;
}

function fix_words(i,debug){
  //예외처리 input
  i = i.replace(/의의/g,"ㅇㅇ1");

  //구어체 관련
  i = i.replace(/어\+;/g,"다+;");
  i = i.replace(/자\+;/g,"다+;");
  i = i.replace(/게\+;/g,"다+;");
  i = i.replace(/죠\+;/g,"다+;");
  i = i.replace(/거라\+;/g,"다+;");
  i = i.replace(/할\+;/g,"하다+;");

  //특수처리
  i = i.replace(/과는\+/g,"+AND+");
  i = i.replace(/과\+/g,"+AND+");
  i = i.replace(/와는\+/g,"+AND+");
  i = i.replace(/와\+/g,"+AND+");
  i = i.replace(/하고\+/g,"+AND+");
  i = i.replace(/랑\+/g,"+AND+");

  i = i.replace(/같다\+/g,"+LIKE+");
  i = i.replace(/같네\+/g,"+LIKE+");
  i = i.replace(/같은\+/g,"+LIKE+");
  i = i.replace(/처럼\+/g,"+LIKE+");
  i = i.replace(/마치\+/g,"+LIKE+");
  i = i.replace(/좀\+/g,"+");


  i = i.replace(/한다\+/g,"+DO+");
  i = i.replace(/하는\+/g,"+DO+");
  i = i.replace(/하다\+/g,"+DO+");
  i = i.replace(/했다\+/g,"+PAST+DO+");
  i = i.replace(/하였다\+/g,"+PAST+DO+");

  i = i.replace(/하지만\+/g,"+BUT+");
  i = i.replace(/그러나\+/g,"+BUT+");
  i = i.replace(/그렇지만\+/g,"+BUT+");
  i = i.replace(/같지만\+/g,"+LIKE+BUT+");


  //조사
  i = i.replace(/은\+/g,"+");
  i = i.replace(/는\+/g,"+");
  i = i.replace(/이\+/g,"+");
  i = i.replace(/가\+/g,"+");

  i = i.replace(/을\+/g,"+");
  i = i.replace(/를\+/g,"+");
  i = i.replace(/도\+/g,"+");
  i = i.replace(/역시\+/g,"+");
  i = i.replace(/에서\+/g,"+");
  i = i.replace(/에\+/g,"+");
  i = i.replace(/의\+/g,"+");

  //일반
  i = i.replace(/하세요\+/g,"+");
  i = i.replace(/세요\+/g,"+");
  i = i.replace(/하네\+/g,"+");
  i = i.replace(/하려\+/g,"+");
  i = i.replace(/시게\+/g,"+");
  i = i.replace(/이다\+/g,"+");
  i = i.replace(/였다\+/g,"+PAST+");

  i = i.replace(/해요\+/g,"+");
  i = i.replace(/해\+/g,"+");
  i = i.replace(/나요\+/g,"+");
  i = i.replace(/요\+/g,"+");

  i = i.replace(/하도록\+/g,"+");

  i = i.replace(/입니다\+/g,"+");
  i = i.replace(/니다\+/g,"+");
  i = i.replace(/이다\+/g,"+");
  i = i.replace(/되다\+/g,"+");
  i = i.replace(/된다\+/g,"+");
  i = i.replace(/다\+/g,"+");
  i = i.replace(/되는지\+/g,"+");
  i = i.replace(/는지\+/g,"+");

  i = i.replace(/야\+/g,"+");

  i = i.replace(/에게\+/g,"+");
  i = i.replace(/께\+/g,"+");
  i = i.replace(/으로\+/g,"+");
  i = i.replace(/로\+/g,"+");

  //기호 & 디버그
  i = i.replace(/\+\+/g,"+");

  //예외처리 output
  i = i.replace(/ㅇㅇ1/g,"의의");

  if (debug == 'on'){
    alert(i);
  }
  return i;
}
