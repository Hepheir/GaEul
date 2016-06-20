function h_grammar(word){
  var n = word.length;
  if (n == 1){ //임시 예외처리
    return word;
  }
  word += ';'; //단어가 끝나는 부분을 확실히 구분
  /*
  * 격조사
  */
  while(1){
    if (word.endsWith('이;') || word.endsWith('가;')){ //주격, 보격조사
      word.endsWith('이;') ? n = word.lastIndexOf("이;") : n = word.lastIndexOf("가;");
    }
    else if (word.endsWith('께서;')){ //주격조사
      n = word.lastIndexOf("께서;");
    }
    else if (word.endsWith('에서;')){ //주격, 부사격조사
      n = word.lastIndexOf("에서;");
    }
    else if (word.endsWith('다;')){ //서술격조사
      word.endsWith('이다;') ? n = word.lastIndexOf("이다;") : n = word.lastIndexOf("다;");
    }
    else if (word.endsWith('의;')){ //관형격조사
      n = word.lastIndexOf("의;");
    }
    else if (word.endsWith('을;') || word.endsWith('를;')){ //목적격조사
      word.endsWith('을;') ? n = word.lastIndexOf("을;") : n = word.lastIndexOf("를;");
      var hmm = letter(word)[n-1]; //'을' 또는 '를'의 앞글자의 받침이 'ㅆ'이면 조사로 쓰이지 않았다고 추정할 수 있으므로 예외처리.
      if (hmm[3] == 'ㅅ' && hmm[4] == 'ㅅ'){
        n++;
        break;
      }
    }
    else if (word.endsWith('에;')){ //부사격조사
      n = word.lastIndexOf("에;");
    }
    else if (word.endsWith('에게;') || word.endsWith('으로;')){ //부사격조사
      word.endsWith('에게;') ? n = word.lastIndexOf("에게;") : n = word.lastIndexOf("으로;");
    }
    else if (word.endsWith('야;') || word.endsWith('아;')){ //호격조사
      word.endsWith('야;') ? n = word.lastIndexOf("야;") : n = word.lastIndexOf("아;")
    }
    else if (word.endsWith('여;')){ //호격조사
      if (word.endsWith('하여;')){
        break;
      }
      n = word.lastIndexOf("여;");
    }
    /*
    * 접속조사
    */
    else if (word.endsWith('와;')){
      n = word.lastIndexOf("와;");
    }
    else if (word.endsWith('과;')){
      n = word.lastIndexOf("과;");
    }
    else if (word.endsWith('랑;')){
      word.endsWith('이랑;') ? n = word.lastIndexOf("이랑;") : n = word.lastIndexOf("랑;");
    }
    else if (word.endsWith('며;')){
      word.endsWith('이며;') ? n = word.lastIndexOf("이며;") : n = word.lastIndexOf("며;");
    }
    /*
    * 보조사
    */
    else if (word.endsWith('은;')){
      n = word.lastIndexOf("은;");
    }
    else if (word.endsWith('는;')){
      if (word.endsWith('하는;')){
        break;
      }
      n = word.lastIndexOf("는;");
    }
    else if (word.endsWith('도;')){
      n = word.lastIndexOf("도;");
    }
    else if (word.endsWith('만;')){
      n = word.lastIndexOf("만;");
    }
    else if (word.endsWith('까지;')){
      n = word.lastIndexOf("까지;");
    }
    else if (word.endsWith('조차;')){
      n = word.lastIndexOf("조차;");
    }
    else if (word.endsWith('부터;')){
      n = word.lastIndexOf("부터;");
    }
    else if (word.endsWith('마저;')){
      n = word.lastIndexOf("마저;");
    }
    else {
      break;
    }
    word = word.substr(0, n+1);
  }
  word = word.substr(0, n);
  return word;
}

function letter(str){ //초성 중성 종성을 모두 자음/모음만으로 분리 해주는 함수
  var uni = new Array();
  var han = new Array();
  var n = 0;
  for (var a = 0; a < str.length; a++){
    if (str[a] == ' '){ //띄어쓰기를 기준으로 1차 분리. 원래 str.split(' ');을 쓰려 했으나 그리 할 경우 과정이 더 길어지기에 현재 방법을 채택
      han[a] = ' ';
      continue;
    }
    else if (escape(str[a]).includes('%u')) {
      uni.push(Number('0x'+escape(str[a]).replace('%u',''))); //유니코드 사용 유무를 기준으로 2차 분리.
      han[a] = new Array();
      if (uni[n] >= 44032 && uni[n] < 44620 || uni[n] == 12593) //588
        han[a][0] = 'ㄱ';
      else if (uni[n] >= 44620 && uni[n] < 45208 || uni[n] == 12594)
        han[a][0] = 'ㄲ';
      else if (uni[n] >= 45208 && uni[n] < 45796 || uni[n] == 12596)
        han[a][0] = 'ㄴ';
      else if (uni[n] >= 45796 && uni[n] < 46384 || uni[n] == 12599)
        han[a][0] = 'ㄷ';
      else if (uni[n] >= 46384 && uni[n] < 46972 || uni[n] == 12600)
        han[a][0] = 'ㄸ';
      else if (uni[n] >= 46972 && uni[n] < 47560 || uni[n] == 12601)
        han[a][0] = 'ㄹ';
      else if (uni[n] >= 47560 && uni[n] < 48148 || uni[n] == 12609)
        han[a][0] = 'ㅁ';
      else if (uni[n] >= 48148 && uni[n] < 48736 || uni[n] == 12610)
        han[a][0] = 'ㅂ';
      else if (uni[n] >= 48736 && uni[n] < 49324 || uni[n] == 12611)
        han[a][0] = 'ㅃ';
      else if (uni[n] >= 49324 && uni[n] < 49912 || uni[n] == 12613)
        han[a][0] = 'ㅅ';
      else if (uni[n] >= 49912 && uni[n] < 50500 || uni[n] == 12614)
        han[a][0] = 'ㅆ';
      else if (uni[n] >= 50500 && uni[n] < 51088 || uni[n] == 12615)
        han[a][0] = 'ㅇ';
      else if (uni[n] >= 51088 && uni[n] < 51676 || uni[n] == 12616)
        han[a][0] = 'ㅈ';
      else if (uni[n] >= 51676 && uni[n] < 52264 || uni[n] == 12617)
        han[a][0] = 'ㅉ';
      else if (uni[n] >= 52264 && uni[n] < 52852 || uni[n] == 12618)
        han[a][0] = 'ㅊ';
      else if (uni[n] >= 52852 && uni[n] < 53440 || uni[n] == 12619)
        han[a][0] = 'ㅋ';
      else if (uni[n] >= 53440 && uni[n] < 54028 || uni[n] == 12620)
        han[a][0] = 'ㅌ';
      else if (uni[n] >= 54028 && uni[n] < 54616 || uni[n] == 12621)
        han[a][0] = 'ㅍ';
      else if (uni[n] >= 54616 && uni[n] < 55204 || uni[n] == 12622)
        han[a][0] = 'ㅎ';
      else{
        han[a] = str[a];
        continue;
      }
      switch (Math.floor((uni[n] - 520) % 588 /28)) { //모음(결과값의 소수점 자리 수를 버림)
        case 0:
          han[a][1] = 'ㅏ';
          break;
        case 1:
          han[a][1] = 'ㅐ';
          break;
        case 2:
          han[a][1] = 'ㅑ';
          break;
        case 3:
          han[a][1] = 'ㅒ';
          break;
        case 4:
          han[a][1] = 'ㅓ';
          break;
        case 5:
          han[a][1] = 'ㅔ';
          break;
        case 6:
          han[a][1] = 'ㅕ';
          break;
        case 7:
          han[a][1] = 'ㅖ';
          break;
        case 8:
          han[a][1] = 'ㅗ';
          break;
        case 9:
          han[a][1] = 'ㅗ';
          han[a][2] = 'ㅏ';
          break;
        case 10:
          han[a][1] = 'ㅗ';
          han[a][2] = 'ㅐ';
          break;
        case 11:
          han[a][1] = 'ㅗ';
          han[a][2] = 'ㅣ';
          break;
        case 12:
          han[a][1] = 'ㅛ';
          break;
        case 13:
          han[a][1] = 'ㅜ';
          break;
        case 14:
          han[a][1] = 'ㅜ';
          han[a][2] = 'ㅓ';
          break;
        case 15:
          han[a][1] = 'ㅜ';
          han[a][2] = 'ㅔ';
          break;
        case 16:
          han[a][1] = 'ㅜ';
          han[a][2] = 'ㅣ';
          break;
        case 17:
          han[a][1] = 'ㅠ';
          break;
        case 18:
          han[a][1] = 'ㅡ';
          break;
        case 19:
          han[a][1] = 'ㅡ';
          han[a][2] = 'ㅣ';
          break;
        case 20:
          han[a][1] = 'ㅣ';
          break;

      }
      switch (((uni[n] - 520) % 588)%28) { //받침
        case 0:
          break;
        case 1:
          han[a][3] = 'ㄱ';
          break;
        case 2: //ㄲ
          han[a][3] = 'ㄱ';
          han[a][4] = 'ㄱ';
          break;
        case 3: //ㄳ
          han[a][3] = 'ㄱ';
          han[a][4] = 'ㅅ';
          break;
        case 4:
          han[a][3] = 'ㄴ';
          break;
        case 5: //ㄵ
          han[a][3] = 'ㄴ';
          han[a][4] = 'ㅈ';
          break;
        case 6: //ㄶ
          han[a][3] = 'ㄴ';
          han[a][4] = 'ㅎ';
          break;
        case 7:
          han[a][3] = 'ㄷ';
          break;
        case 8:
          han[a][3] = 'ㄹ';
          break;
        case 9: //ㄺ
          han[a][3] = 'ㄹ';
          han[a][4] = 'ㄱ';
          break;
        case 10: //ㄻ
          han[a][3] = 'ㄹ';
          han[a][4] = 'ㅁ';
          break;
        case 11: //ㄼ
          han[a][3] = 'ㄹ';
          han[a][4] = 'ㅂ';
          break;
        case 12: //ㄽ
          han[a][3] = 'ㄹ';
          han[a][4] = 'ㅅ';
          break;
        case 13: //ㄾ
          han[a][3] = 'ㄹ';
          han[a][4] = 'ㅌ';
          break;
        case 14: //ㄿ
          han[a][3] = 'ㄹ';
          han[a][4] = 'ㅍ';
          break;
        case 15: //ㅀ
          han[a][3] = 'ㄹ';
          han[a][4] = 'ㅎ';
          break;
        case 16:
          han[a][3] = 'ㅁ';
          break;
        case 17:
          han[a][3] = 'ㅂ';
          break;
        case 18: //ㅄ
          han[a][3] = 'ㅂ';
          han[a][4] = 'ㅅ';
          break;
        case 19:
          han[a][3] = 'ㅅ';
          break;
        case 20: //ㅆ
          han[a][3] = 'ㅅ';
          han[a][4] = 'ㅅ';
          break;
        case 21:
          han[a][3] = 'ㅇ';
          break;
        case 22:
          han[a][3] = 'ㅈ';
          break;
        case 23:
          han[a][3] = 'ㅊ';
          break;
        case 24:
          han[a][3] = 'ㅋ';
          break;
        case 25:
          han[a][3] = 'ㅌ';
          break;
        case 26:
          han[a][3] = 'ㅍ';
          break;
        case 27:
          han[a][3] = 'ㅎ';
          break;
      }
    }
    else{
      uni.push(str[a]);
      han[a] = uni[n];
    }
    n++;
  }
  return han;
}
