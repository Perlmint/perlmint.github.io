---
title: Typescript의 타입 시스템을 활용하는 테크닉
date: 2019-02-25T15:58:00+09:00
categories:
    - software
tags:
    - typescript
---

이 글은 [Typescript WebWorker RPC](https://github.com/lacti/typescript-webworker-rpc)에 기여를 하면서 사용한 테크닉을 정리하는 글이다.
여기에 정리하는 내용과 예시는 기여한 내용과 관련된 내용만을 다룬다.

## 특정 타입만을 멤버로 가지는 타입 조건

특정 타입만을 멤버로 가지는 타입 조건 자체는 기본적이며 단순하다. 우선 다음과 같은 형태로 표현이 가능하다.
```typescript
class RPC<RPC extends {
    [key: string]: Function,
}> {}
```

하지만 위와 같은 타입을 사용하면 Type literal에는 문제가 없으나 interface를 사용할 수 없다는 문제가 있다.
```typescript
// correct!
const rpc_with_type_literal = new RPC<{
    func(): void;
}>();

interface RPCDecl {
    func(): void;
}

// error!
const rpc_with_interface = new RPC<RPCDecl>();
```

RPCDecl은 index operator에 동작을 안하니 쓸 수 없다는 에러가 발생하는데 이는 `[key: string]`이 가리키는 것이 RPCDecl의 키 보다 더 많기 때문이다.
즉, 저 `key`가 가리키는 것을 제약을 걸어주면 되는데 정확히는 자기 자신이 가지고 있는 모든 키로 제약을 걸어주면 된다.
[Curiosly recurring template pattern](https://en.wikipedia.org/wiki/Curiously_recurring_template_pattern) 처럼 자기 자신의 타입을 참조하는 방식으로 다음과 같은 코드를 작성할 수 있고 사용에 있어서 원치 않는 제약을 피할 수 있다.

```typescript
type RPCDeclaration<RPC> = { [K in keyof RPC]: AnyFunction };

class RPC<RPCDecl extends RPCDeclaration<RPCDecl> {}
```

## 타입 안전한 여러 인자가 사용 가능한 proxy method

3.0에서 추가된 [generic rest parameter](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#generic-rest-parameters)덕에 `bind`, `apply`와 같은 함수의 타입들에서도 타입 검사가 가능해졌다.
그리고 `Parameter`, `ReturnType`과 같은 함수에 대한 상세한 타입 정보를 얻을 수 있는 기본 제공 타입이 여럿 추가 되었다.
이를 사용하면 매우 간편하게 proxy method의 타입을 표현할 수 있다.

```typescript
class RPC<RPCDecl> {
  public call: <M extends keyof RPCDecl>(
    method: M,
    ...args: Parameters<RPCDecl[M]>
  ) => Promise<ReturnType<RPCDecl[M]>>;
};
```

RPCDecl에서는 Promise가 아니었던 리턴타입을 Promise로 변환하고, method 이름을 인자로 받고, 원래 인자들을 rest parameter로 표현할 수 있다.

## phantom type을 활용한 method에 제약 걸기

phantom type은 실제 데이터 표현으로는 의미가 없는 정보를 타입에 넣는 것으로, 타입 시스템이 의미적인 검증을 할 수 있도록 사용할 수 있다.
typescript에서는 실제 표현하려는 타입에 `never` 타입인 멤버를 넣는 것으로 표현할 수 있으며, 캐스팅을 통해서 값이 해당 타입을 가지도록 한 후에 사용한다.

여기서는 RPC의 정의에 post 프로시저와 call 프로시저를 phantom type을 통해서 구분하도록 하고, 각각의 프로시저에 대한 method인 `RPC.post`, `RPC.call` 중 매칭되는 것만을 호출할 수 있도록 제한하는데 사용했다.

RPC 정의 타입은 타입 검사에서만 사용되고 실제로 구현을 하는 타입이 아닌만큼 phantom type을 조금 색다르게 사용 해 보았다.
대부분의 경우 추가적인 태그가 달리기를 원하는 타입 자체를 phantom type으로 표현을 하겠으나, post 프로시저에 대응되는 interface method선언에서 리턴타입을 phantom type으로 대체를 하는 방법을 사용했다. 우선 post 프로시저는 리턴타입이 있으면 안된다는 제약조건이 있으며, 해당 타입을 직접 써야하는 곳이 없기 때문에 원하는 대로 대체해서 쓰기에 불편한 점이 없었다.

```typescript
interface PostReturn {
  __post__: never;
}

interface RPCDecl {
    someCallProcedure(): void;
    somePostProcedure(): PostReturn;
}
```
위와 같이 리턴타입을 `PostReturn`으로 선언하는 것만으로 해당 프로시저가 post임을 표현할 수 있다.

이제 저 정보를 사용해서 `RPC.post`, `RPC.call`에 사용할 수 있는 프로시저 종류에 제약을 걸어보자.

```typescript
type PostMethodCondition<FN extends Function, T, F> = ReturnType<FN> extends PostReturn ? T : F;

type CallMethodNames<
  T extends { [K: string]: Function }
  > = {
    [K in keyof T]: PostMethodCondition<T[K], never, K>
  }[keyof T];

type PostMethodNames<T extends { [K: string]: Function }> = Exclude<keyof T, CallMethodNames<T>>;
```

우선 RPCDecl의 키 메소드 이름 중에서 `ReturnType`이 `PostReturn`인 것만을 골라내는 것으로 call 프로시저와 post 프로시저의 이름 타입을 추출할 수 있다.
타입을 필터링하는 `PostMethodCondition`은 2.8에서 추가된 [Conditional Type](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#conditional-types)을 사용해서 표현할 수 있다.

각각의 method에 다음과 같이 기준이 되는 값의 제약인 키를 기존의 `keyof RPCDecl` 대신에 더 좁은 범위의 타입으로 변경하는 것으로 `method` 값에 따라서 해당 method를 호출하려고 할 때 타입 검사를 할 수 있다.

```typescript
class RPC<RPCDecl> {
    public post: <M extends PostMethodNames<RPCDecl>>(
        method: M,
        ...args: Parameters<RPCDecl[M]>
    ) => void;

    public call: <M extends CallMethodNames<RPCDecl>>(
        method: M,
        ...args: Parameters<RPCDecl[M]>
    ) => Promise<ReturnType<RPCDecl[M]>>;
};
```

## Conditional type으로 표현한 함수에서 조건에 따른 optional인자 받기

conditional type으로 함수의 인자를 optional로 하고 싶더라도 인자가 optional로 지정되어있지 않으면 호출 할 때 꼭 값을 명시해줘야 한다. 심지어 undefined여도 말이다. never인 경우에는 넣을 평범한 방법이 없으니 타입 오류 없이 호출이 불가능해져버린다. 그렇다고 인자를 optional로 지정하면 optional이 아닌 경우에도 optional일 수 밖에 없는 문제가 있다.

즉, overload로 함수를 표현해줘서 optional인 경우는 optional로 표현을 해줄 수 밖에 없다.

현재 arrow function에 대해서는 overload를 지원하지 않는 것 같으므로 별도의 interface로 overload 타입을 선언하고 arrow function을 대입하는 방법으로 해결을 했다.

```typescript
type RPCHandlerRType<F extends AnyFunction> = ReturnType<F> extends void ? (void | { result?: never, transfer: Transferable[] }) : {
  result: ReturnType<F>;
  transfer?: Transferable[];
};
type RPCHandler<F extends AnyFunction> = (
  ...args: Parameters<F>
) => PromiseOrValue<PostMethodCondition<F, void, RPCHandlerRType<F>>>;
interface PostRPCHandlerOptions {
  noReturn: true;
}

type CallRPCHandlerOptions = never;

type RPCHandlerOptions<F extends AnyFunction> = PostMethodCondition<F, PostRPCHandlerOptions, CallRPCHandlerOptions>;

interface RPCServerOnMethod<RPC extends RPCDeclaration<RPC>> {
  <M extends CallMethodNames<RPC>>(
    method: M,
    handler: RPCHandler<RPC[M]>,
    options?: RPCHandlerOptions<RPC[M]>,
  ): RPCServer<RPC>,
  <M extends PostMethodNames<RPC>>(
    method: M,
    handler: RPCHandler<RPC[M]>,
    options: RPCHandlerOptions<RPC[M]>,
  ): RPCServer<RPC>,
}
```

앞서 phantom type과 mapped type을 사용하여 여러 메소드에 각각 타입 조건을 건 것을 이번에는 overload 타입을 표현하는데 사용했다.
