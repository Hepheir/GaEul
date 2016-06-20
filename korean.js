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
