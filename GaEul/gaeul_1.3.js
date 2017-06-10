function user_input(i){
  first(i);
}

//아래 기술된 코드들은 http://nlp.kookmin.ac.kr/ 의 HAM 형태소 분리기의 알고리즘을 토대로 javascript로 비슷하게 구현하여 본 것임을 알립니다. -Hepheir

function first(str){ //전처리 과정
  var words = str.replace(/\./g,"").replace(/\!/g,"").replace(/\,/g,"").replace(/\?/g,"").replace(/\~/g,"").split(' ');
  var r = new Array();
  for (var a = 0; a < words.length; a++){
    r[a] = h_grammar(words[a]);
  }
  var han = letter(str);
  han = han.join(",").replace(/,/g,"");
  r = r.join(",").replace(/,/g," ");
  document.getElementById("bodyWrap").innerHTML += r;
}
