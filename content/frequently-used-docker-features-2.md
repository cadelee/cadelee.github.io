---
author: Cade Lee
title: 자주 사용하는 도커기능 [2]
subtitle: frequently-used-docker-features-2
category: DOCKER
date: 2018/09/03
---

///
[Docker][Docker]를 사용하면서 궁금했던 혹은 겪게되었던 부분을 상세히 들여다보고 정리하기 위해 글을 썼다.  
이번편은 Storage! 컨테이너별 저장되는 데이터, 호스트와 컨테이너 사이의 Volume 공유 등과 관련한 내용을 정리해보고자 한다.
///

## Docker에서의 데이터 관리
[공식문서]에서의 데이터 관리에 대한 부분을 살펴보면 도커가 제공하는 3가지 옵션에 대해서 어떤 상황일 경우에 해당 옵션을 사용해야하는지에 대한 상세한 설명이 기재되어있다.  
간단하게 요약하면  
  - <code class="word">Volumes</code>: host에 설치된 도커 경로의 volumes/ 밑으로 관리되는 옵션.
  - <code class="word">Bind mount</code>: host의 모든 경로에 사용가능한 옵션.
  - <code class="word">tmpfs mount</code>: host의 memory영역에 쓰여지는 옵션이다. (파일시스템에 기록되지 않는다.)

![types-of-mounts](https://docs.docker.com/storage/images/types-of-mounts.png)

공식문서에 기재된 위 그림이 설명이 잘 표현이 되어있다.  

#### Good use cases for {type} mounts
[마운트의 좋은 사용사례]에 대해서 설명한글도 확인할 수 있다. 옵션별로 사례 하나씩만 예를들어보면,  
  - <code class="word">Volumes</code>의 경우 다수의 컨테이너들간에 데이터 공유가 필요할 경우 사용.
  - <code class="word">Bind mounts</code>의 경우 호스트의 특정 환경설정 파일을 컨테이너로 공유시키고자 할때 사용. <code class="word">ex: nginx.conf</code>
  - <code class="word">tmpfs</code>의 경우 데이터가 호스트와 컨테이너 어디에도 유지될 필요가 없을 경우 사용.


이 외에도 적지 않은 양의 Option, Driver 설정 관련 내용이 존재하지만 해당 내용을 다 살펴본것도 아니고 파헤치기에도 적지않은양이므로 생략하도록 하겠다.  

## 자주 사용하는 옵션 -v, --mount

비슷한 기능을 하면서도 차이점이 존재하는 두 옵션은 컨테이너를 생성할때 많이 사용해준다.  
보통 host의 특정 폴더 혹은 파일을 컨테이너로 맵핑시킬때 사용하며 사용방법은 아래와 같다.  

### --mount 옵션 사용
```bash
$ docker run -d \
  --name devtest \
  --mount source=myvol2,target=/app \
  nginx:latest
```

<code class="word">--mount</code> 옵션 사용시에는 type(위에서 설명한 3가지 옵션), source(host의 특정 폴더 혹은 파일 경로거나 Volume 이름), 그리고 특별한 옵션(Read only, Propagation)을 줄수있다.

### -v 옵션 사용 -v
```bash
$ docker run -d \
  --name devtest \
  -v myvol2:/app \
  nginx:latest
```

<code class="word">-v</code> 옵션은 (host의 특정 폴더 혹은 파일 경로거나 Volume 이름):(컨테이너 경로)로 지정할 수 있다.

도커의 버전이 올라가면서 17.06 이상 버전에서는 다양한 설정이 가능하고 좀더 명확한 <code class="word">--mount</code> 옵션을 사용하기를 공식문서에서는 권하고 있다.

[Docker]: https://www.docker.com/
[공식문서]: https://docs.docker.com/storage/
[마운트의 좋은 사용사례]: https://docs.docker.com/storage/#good-use-cases-for-volumes
