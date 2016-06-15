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
    //조사
    str[b] = str[b].replace(/은\+/g,"+");
    str[b] = str[b].replace(/는\+/g,"+");
    str[b] = str[b].replace(/이\+/g,"+");
    str[b] = str[b].replace(/가\+/g,"+");

    str[b] = str[b].replace(/을\+/g,"+");
    str[b] = str[b].replace(/를\+/g,"+");
    str[b] = str[b].replace(/에게\+/g,"+");
    str[b] = str[b].replace(/께\+/g,"+");
    str[b] = str[b].replace(/으로\+/g,"+");
    str[b] = str[b].replace(/로\+/g,"+");

    str[b] = str[b].replace(/하셨노라;/g,";");
    str[b] = str[b].replace(/하노라;/g,";");
    str[b] = str[b].replace(/하거라;/g,";");
    str[b] = str[b].replace(/보거라;/g,";");
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
