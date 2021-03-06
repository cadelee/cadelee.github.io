---
author: Cade Lee
title: 자주 사용하는 도커기능 [1]
subtitle: frequently-used-docker-features-1
category: DOCKER
date: 2018/08/08
---

///
[Docker][Docker]는 컨테이너 기반 가상화 도구이다. 요즘의 Docker는 테스트를 위해서나 실제 운영할 서비스 등 어느곳에서나 활용되며 Microservice, Devops를 위한 최적의 기술로 각광받고 있다.
그만큼 Docker에 대한 훌륭하고 좋은 정보들이 많기에 기본적인 개념에 대한 부분은 생략하고 Docker를 이용할때 개인적으로 자주 이용하는 커맨드와 그 개념에 대해서 몇가지 정리해보고자 포스팅을 작성했다.
///

## Network
처음 Docker를 사용할때 network의 존재를 모르고 같은 서버에 존재하는 다른 컨테이너를 연결할려고 할때 <code class="word">nginx proxy</code>를 설정하여 A 컨테이너, B 컨테이너를 서로 웹서버를 통해서 바라볼 수 있게 했었다. 이렇게 하면 안되나? 아니다, 해도 된다. 서로 다른 서버에 존재하는 컨테이너라면 위와같은 방식을 통해서 할수도 있을것이다. (이 경우에도 <code class="word">overlay driver</code> 방식을 통해서 사용할수도 있다.) 다만 같은 서버라면 얘기가 달라진다. 도메인을 통해서 호출하는 방식은 DNS를 거쳐 아이피를 얻어온 후 요청을 하게된다. 같은 네트워크로 묶어준다면 DNS에 질의할 필요없이 다이렉트로 해당 컨테이너에 연결이 가능하다. 전자와 후자중 더 빠른건 후자다. 빠르고 간편한데 안쓸 이유가 없다.

간단히 도식화한 그림이다. 아래중 첫번째가 웹서버를 통한 컨테이너 접근이고 두번째는 같은 네트워크를 이용해서 다이렉트로 서로를 바라볼 수 있게 만든 방식이다.

![docker-network-explain](/images/docker-network-explain(1).png)

이제 같은 네트워크로 묶는 방법을 설명하고자 한다.  
먼저 서로를 같은 영역에 둘 네트워크를 생성하고, 해당 네트워크가 제대로 생성되었는지 확인한다.

```bash
$ docker network create abcd //network 생성 명령어 abcd가 네트워크 명칭이다.
8422a4b89f4c14359cf1ed7e1f64e8992e55aa6580c924d199e165d7d83be6a4 // 생성된 결과 메시지
$ docker network ls // 네트워크 목록 확인
NETWORK ID          NAME                          DRIVER              SCOPE
8422a4b89f4c        abcd                          bridge              local
```
&nbsp;  
새로운 컨테이너를 생성할때 네트워크를 추가해주면 된다.  
```bash
$ docker run -d --name a-container --network=abcd ${image}
```
&nbsp;  
-d: background로 동작함. 없이 실행하면 보고있는 커맨드 화면에서 직접 실행되고 종료시 컨테이너도 종료됨.  
--name: 컨테이너 이름지정  
--network: 네트워크 지정(아까 생성한 abcd 네트워크를 입력해줬다.)  
${image}: 구동할 컨테이너의 이미지명  

이렇게 실행시킨 컨테이너가 abcd 네트워크에서 잘 동작하고 있는지 확인할려면

```bash
$ docker network inspect abcd
[
    {
        "Name": "abcd",
        "Id": "8422a4b89f4c14359cf1ed7e1f64e8992e55aa6580c924d199e165d7d83be6a4",
        "Created": "2018-08-08T08:42:03.294322358Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.20.0.0/16",
                    "Gateway": "172.20.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "7b70c0efc9586da76958d19e96aff04ca03c0f1fc9f148528bc4ada106dcfdb8": {
                "Name": "a-container",
                "EndpointID": "771f92ceda2513aea20d3c8bcf9b2f2c7d3d53e46cc5940f898535002fe0537b",
                "MacAddress": "02:42:ac:14:00:02",
                "IPv4Address": "172.20.0.2/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]
```
&nbsp;  
Containers 부분에 내가 지정한 컨테이너명이 배열로 들어가있는걸 확인할 수 있다.  
마찬가지로 b-container도 동일한 방법으로 구동시키고 동일한 명령어로 확인해본다.  
설정이 완료됐다면 이제 서로의 컨테이너로 다이렉트로 접근이 가능하다. 어떻게?!  
연결하고자 하는 컨테이너에서 {컨테이너명}:port로 접근을 시도하거나 컨테이너 내부에서도 테스트가 가능하다.

아래와 같은 명령어를 통해서 컨테이너 안으로 접근한 다음 curl이나 ping 명령어를 통해서 b-container를 확인해주면 된다.

```bash
$ docker exec -it a-container bin/bash
$ ping b-container
64 bytes from 172.20.0.3: icmp_seq=0 ttl=255 time=0.074 ms
64 bytes from 172.20.0.3: icmp_seq=1 ttl=255 time=0.067 ms
64 bytes from 172.20.0.3: icmp_seq=2 ttl=255 time=0.072 ms
64 bytes from 172.20.0.3: icmp_seq=3 ttl=255 time=0.075 ms
```

## Network Driver
Docker에서 제공하는 <code class="word">Network Driver</code> 옵션은 5가지가 있다. 하나씩 설명하고자 한다.  

| driver  | description                                                                                            |
|---------|--------------------------------------------------------------------------------------------------------|
| bridge  | 기본 네트워크 성격의 드라이버. 네트워크 드라이버 옵션을 따로 지정해주지 않을 경우 default로 생성된다.  |
| host    | 도커가 설치된 host의 네트워크를 사용한다.                                                              |
| overlay | [Docker Swarm] 혹은 다중 서버 컨테이너 네트워크 공유를 위해 사용한다.                                  |
| macvlan | Mac Address를 직접적으로 할당하여 네트워크를 사용한다.                                                 |
| none    | 네트워크 연결이 필요없을 경우 사용한다.                                                                |

용도에 맞는 드라이버를 사용하면되고, 관리할 컨테이너가 많아지는 경우에는 <code class="word">Orchestration 프레임워크</code>를 도입해서 사용하는게 편하다.

간단한 사용예시를 적어보자면,  
<code class="word">nginx</code>는 도커를 사용하고자 하고, 서비스들이 컨테이너가 아닌 내 호스트에서 동작하는경우 nginx 컨테이너 파일을 생성할때 네트워크 드라이버를 <code class="word">host</code>를 적용시켜서 호스트의 서비스들도 <code class="word">nginx proxy</code>를 이용해서 적용하게끔 할 수 있다. 이렇게 할 경우 컨테이너로 존재하는 서비스들도 <code class="word">nginx proxy</code> 적용이 가능해진다. (컨테이너 서비스들을 생성할때 -p 옵션으로 호스트와 포트가 연결되어 있어야 한다)

다음에는 도커 데이터 저장관련 내용을 적어보고자 한다. 끝!

[Docker]: https://www.docker.com/
[Docker Swarm]: https://docs.docker.com/engine/swarm/
