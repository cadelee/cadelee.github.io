---
author: Cade Lee
title: 깔끔한 코드 작성을 위한 고찰
subtitle: how-to-clean-code
category: LOG
date: 2019/01/10
---

///
예전부터 항상 간결하고 깔끔한 코드에 매료되고는 했었다. 알고리즘 풀이 사이트에서 타 언어에 비해서 파이썬으로 작성된 코드가 주는 매력에 반하기도 했었다. 그렇기에 작업할때마다 항상 "어떻게 하면 줄일 수 있을까?" 혹은 "어떻게 하면 직관적으로 짤 수 있을까?" 에 대해서 중점을 두면서 코드를 가다듬는걸 좋아했었다. 어떤 언어든간에 패턴이든 기법이든 대부분 일맥상통한다고 생각하기에 범용적으로 사용될만한 깔끔한 코드 작성 기법을 정리해보고자 한다.
///



##### 1. 변수명 사용시 의미있고 발음 가능한 변수를 사용한다.
ex) 현재 날짜를 저장하는 변수가 있다고 가정할 경우
```JAVA
Bad  : String yyyyMMDD = "";
-------------------------------------------------
Good : String currentDate = "";
```

##### 2. 검색가능한 변수를 사용한다.
ex) 날짜를 더하는 함수를 사용할 경우
```JAVA
Bad  :
  setAddDate(currentDate, 10);
-------------------------------------------------
Good :
  // 상수의 경우 목적에 맞는 변수명 사용.
  int addDate = 10;
  setAddDate(currentDate, addDate);
```

##### 3. 함수는 하나의 행동만 한다.
ex) 1~10의 숫자중 짝수만 출력하는 함수를 사용할 경우
```JAVA
Bad  :
  getEvenNumber() {
    for(int i=1; i<=10; i++) {
      if (i % 2 == 0) System.out.println("짝수");
    }
  }
-------------------------------------------------
Good :
  getEvenNumber() {
    for(int i=1; i<=10; i++) isEven(i);
  }

  isEven(data) {
    if (data % 2 == 0) System.out.println("짝수");
  }
```

### 내용을 계속 정리중에 있습니다. 계속해서 추가할 예정입니다.