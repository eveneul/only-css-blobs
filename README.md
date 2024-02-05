## CSS로 조랭이떡 효과 (blobs 효과) 만들기

1. 먼저 조랭이떡(circle)과 조랭이떡을 담을 그릇(wrapper)을 준비해 줍니다.

   
```
   <div class="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
   </div>
```

2. 조랭이떡과 조랭이떡 그릇에는 다음과 같은 CSS를 적용해 주었습니다.

```
.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;

  .circle {
    width: 300px;
    height: 300px;
    background-color: black;
    border-radius: 50%;
    display: inline-block;
  }
}
```

3. 조랭이떡에는 filter: blur(20px)을, 그릇에는 filter: contrast(40)을 적용해 줍니다. blur에는 px 단위가 들어가야 하고, contrast에는 px 단위가 필요 없습니다.

```
.wrapper { filter: contrast(40) }
.circle { filter: blur(20px) }
```

4. 조랭이떡 완성입니다!



<img width="856" alt="스크린샷 2024-02-05 오전 11 15 34" src="https://github.com/eveneul/only-css-blobs/assets/99119406/cb65e8e3-8852-4fe6-a85b-8fddddbe3161">







