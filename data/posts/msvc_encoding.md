---
title: Visual Studio의 인코딩
date: 2018-10-08T23:47:00+09:00
categories:
    - software
tags:
    - C++
    - Visual Studio
    - git
---

## TL;DR

소스코드는 **UTF-8 without signature** + [editorconfig](https://editorconfig.org/) 해결.\
rc파일은 현재 답이 없다. 포기하자.

## 멀티바이트 인코딩이 싫어요. 유니코드를 주세요.

Visual Studio는 여전히 유니코드를 기본으로 지원하고 있지 않다.
윈도우에서만, 하나의 언어로만 개발을 한다면 크게 문제가 되지 않는 일이지만,
여러 언어나, 크로스 플랫폼을 지원하려고 한다면 충분히 문제가 될 수 있는 부분이다.

해결하는 가장 단순한 방법은 **UTF-8 with signature**로 소스 코드를 저장하는 방법이다.
하지만 gcc에서 UTF-8 signature이 있는 소스코드 컴파일을 지원하지 않기 때문에 적당한 방법은 아니다.
그렇다고 **UTF-8 without signature**로 소스 코드를 저장하면 Visual Studio가 알 수 없는 문자가 있다고 워닝을 내뿜는다.\
([editorconfig](https://editorconfig.org/) 없이 **UTF-8 without signature**로 저장해두고 VS에서 편집을 하면 멀티바이트 인코딩으로 저장해버린다.)

Visual Studio 2015이후로 `source-charset` 컴파일러 옵션이 추가되어서 멀티바이트 인코딩으로 인식하지 않고,
UTF-8 signature 없이도 UTF-8로 저장된 소스코드를 컴파일 할 수 있게 되었다.
[MSDN source-charset](https://msdn.microsoft.com/ko-kr/library/mt708819.aspx) 문서를 참고하여 컴파일 옵션에 `/source-charset:utf-8`을 설정하는 것만으로 적용이 된다.\
다만, 한 프로젝트 안에서 소스코드를 여러 인코딩으로 저장하여 사용 할 수는 없지만, 어차피 UTF-8로 저장하기 위해 이 작업을 했기 때문에 표현 못 하는 문자는 없을테니 문제는 없다.

소스코드는 해결이 되었으나 리소스에는 여전히 문제가 남아있다.
VisualStudio에서 rc파일의 인코딩으로 멀티바이트 인코딩 혹은 **UTF-16LE**만을 허용한다.
**UTF-16LE**으로 저장을 한 경우에 Visual Studio가 읽어들이는데에는 아무 문제가 없으나,
파일에 BOM이 없으면 Visual Studio상에서 다시 저장을 하기만 하면 멀티바이트 인코딩으로 저장 해버린다.

**UTF-16LE with BOM**으로 저장하면 모든 문제가 해결될 것 같으나, 이번에는 git에서 문제가 발생한다.
git에서는 UTF-16으로 저장된 파일을 바이너리 파일로 취급을 해버리며 diff를 제공 해 주지 않는다.
글 작성 시점에서의 최신 버전인 **git 2.18**에서 새로 추가된 `working-tree-encoding` 기능으로 UTF-16파일을 바이너리가 아닌 텍스트 파일로 처리를 할 수 있게 되었으나,
여전히 Visual Studio와 함께쓰는 문제는 남아있다.
git에서 `working-tree-encoding`옵션으로 `UTF-16`, `UTF-16LE`, `UTF-16BE` 총 3종류의 UTF-16을 지원하나 `UTF-16`만이 BOM을 기록하는 것을 허용한다. LE/BE를 명시하게 되면 BOM이 있는 파일에 대해서 오류가 발생하며, staging이 불가능해진다.
`UTF-16`옵션이 시스템에 맞춰서 LE/BE여부를 맞춰준다고 [문서](https://git-scm.com/docs/gitattributes#_code_working_tree_encoding_code)에는 작성되어있으나,
실험해본 환경(Intel CPU, Windows 10) LE가 아닌 BE로만 파일이 생성되어서 Visual Studio에서 사용을 할 수 없었다.

이런 문제를 확인하고 고민해보았으나 아직까지는 git filter 기능을 사용하여 직접 인코딩을 변환해주는 방법뿐일 것으로 보인다.\
(rc파일은 왜 BE with BOM을 여는데 실패하게 되어있는지 잘 모르겠다.
더 알 수 없는 포인트는 BE rc파일은 빌드는 되는데 런타임에서 리소스를 읽을 때 에러가 발생한다.)