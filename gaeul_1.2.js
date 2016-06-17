function sentence_end(i){
  if (i == '.' || i == '!' || i == '?' || i == undefined){
    return true;
  }
  return false;
}

function user_input(i){
  var s = new Array();
  var n = 0;
  for (var a = 0; i[a] != undefined; a++){
    for (s[n] = ''; !sentence_end(i[a]); a++){
      s[n] += i[a];
    }
    s[n] += i[a];
    n++;
    if (i[a+1] == ' '){
      a++;
      //문장과 문장 사이 공백을 지움.
    }
  }
  //여기까지가 문장을 분류하여 s에 저장하는 소스.
  var w = new Array();
  var sw = new Array();
  a = 0;
  var b = 0;
  for (n = 0; s[n] != undefined; n++) {
    for (b = 0; !sentence_end(s[n][a]); b++) {
      for (w[b] = ''; s[n][a] != ' ' && !sentence_end(s[n][a]); a++){
        w[b] += s[n][a];
      }
      a++;
    }
    sw[n] = new Array();
    for (var c = 0; c < b; c++){
      sw[n][c] = remove_postposition(w[c]);
    }
    a = 0;
  }
  var result = '';
  for (a = 0; sw[a] != undefined; a++){
    for (b = 0; sw[a][b] != undefined; b++){
      result += sw[a][b][1]+' ';
      if (sw[a][b][2] != undefined){
        result += sw[a][b][2];
      }
    }
  }
  alert(result);
}

function remove_postposition(i){
  var r = new Array(i,i,''); //0:원형, 1:조사제거, 2:조사, 3:문장성분, 4:시제
  if(i.length == 1){
    return r;
  }
  while (true){ //결합한 조사까지 제거
    if(i.endsWith('이')) {
      i = i.replace("이","");
      r[2] = '이 '+r[2];
    }
    else if(i.endsWith('가')){
      i = i.replace("가","");
      r[2] = '가 '+r[2];
    }
    //주격조사 또는 보격조사

    else if (i.endsWith('께서')) {
      i = i.replace("께서","");
      r[2] = '께서 '+r[2];
    }
    //주격조사

    else if (i.endsWith('에서')) {
      i = i.replace("에서","");
      r[2] = '에서 '+r[2];
    }
    //주격조사 또는 부사격조사

    else if (i.endsWith('다')) {
      i = i.replace("다","");
      r[2] = '다 '+r[2];
    }
    //서술격 조사

    else if (i.endsWith('의')) {
      i = i.replace("의","");
      r[2] = '의 '+r[2];
    }
    //관형격조사

    else if (i.endsWith('을')) {
      i = i.replace("을","");
      r[2] = '을 '+r[2];
    }
    else if (i.endsWith('를')) {
      i = i.replace("를","");
      r[2] = '를 '+r[2];
    }
    //목적격조사

    else if (i.endsWith('에')) {
      i = i.replace("에","");
      r[2] = '에 '+r[2];
    }
    else if (i.endsWith('에게')) {
      i = i.replace("에게","");
      r[2] = '에게 '+r[2];
    }
    else if (i.endsWith('으로')){
      i = i.replace("으로","");
      r[2] = '으로 '+r[2];
    }
    //부사격조사

    else if (i.endsWith('야')) {
      i = i.replace("야","");
      r[2] = '야 '+r[2];
    } //호격조사
    else if(i.endsWith('어')){
      i = i.replace("어","");
      r[2] = '어 '+r[2];
    }
    else if(i.endsWith('아')){
      i = i.replace("아","");
      r[2] = '아 '+r[2];
    }
    else if (i.endsWith('이여')) {
      i = i.replace("이여","");
      r[2] = '이여 '+r[2];
    }
    else if (i.endsWith('시여')){
      i = i.replace("시여","");
      r[2] = '시여 '+r[2];
    }
    //호격조사


    else if (i.endsWith('와')) {
      i = i.replace("와","");
      r[2] = '와 '+r[2];
    }
    else if(i.endsWith('과')){
      i = i.replace("과","");
      r[2] = '과 '+r[2];
    }
    else if(i.endsWith('랑')){
      i = i.replace("랑","");
      r[2] = '랑 '+r[2];
    }
    else if(i.endsWith('며')){
      i = i.replace("며","");
      r[2] = '며 '+r[2];
    }
    //접속조사


    else if (i.endsWith('은')) {
      i = i.replace("은","");
      r[2] = '은 '+r[2];
    }
    else if (i.endsWith('는')){
      i = i.replace("는","");
      r[2] = '는 '+r[2];
    }
    else if (i.endsWith('도')){
      i = i.replace("도","");
      r[2] = '도 '+r[2];
    }
    else if (i.endsWith('만')){
      i = i.replace("만","");
      r[2] = '만 '+r[2];
    }
    else if (i.endsWith('까지')) {
      i = i.replace("까지","");
      r[2] = '까지 '+r[2];
    }
    else if (i.endsWith('조차')){
      i = i.replace("조차","");
      r[2] = '조차 '+r[2];
    }
    else if (i.endsWith('부터')){
      i = i.replace("부터","");
      r[2] = '부터 '+r[2];
    }
    else if (i.endsWith('마저')){
      i = i.replace("마저","");
      r[2] = '마저 '+r[2];
    }
    //보조사


    else{
      break;
    }
    r[1] = i;
  }
  return r;
}
