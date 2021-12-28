## HTML DOM

- HTML DOM là viết tắt của HTML Document Object Model , là quy chuẩn của W3C đưa ra
- Khi trang web được tải , trình duyệt sẽ tạo ra DOM
  Note : Chuỗi dưới này không phải là DOM, mà nó sẽ được trình duyệt đọc và tạo ra 1 mô hình được gọi là HTML DOM
- DOM có 3 thành phần
  1. Element (là những thẻ tag vd : h1, p , a)
  2. Attribute (là những thuộc tính nằm trong thẻ tag, vd : class, id,...)
  3. Text (là chữ thôi)
- Node : là 1 trong 3 thằng Element, Attribute, Text
- Khi dùng JS có thể chọc vào và thay đổi DOM (có nghĩa là có thể thay đổi cả 3 thằng Element, Attribute, Text)

```jsx
<body>
  <div id="tost-message">
    <div class="toast__body">
      <h3 class="toast__title">Warnimg</h3>
      <p class="toast__msg">I am not DOM</p>
    </div>
  </div>
</body>
```

## Phân biết HTML DOM và Javascript

- HTML DOM : là quy chuẩn của W3C đưa ra
- Javascript cung cấp đối tượng làm việc với DOM , vd : _document_
- **document** của JS là một phương tiện để truy xuất vào DOM
  ==> HTML DOM không phải là của Javascript, JS chỉ cung cấp phương tiện để truy xuất vào HTML DOM.

-Js có thể chạy ở môi trường : Browser | Server

- Browser cần viết mã HTML và sinh ra DOM ( HTML --> DOM ), để access (truy cập) vào DOM , **Browser** cần DOM API
- DOM API thuộc WEB API, WEB API chỉ tồn tại trên môi trường chạy web, vd: trên trình duyệt
  WEB API nó có rất nhiều, VD : muốn lấy vị trí (đối tượng location), bắn notification

  ==> Javascript bản chất không hề có DOM, chạy trên Browser nó lại có DOM là bởi vì trên Browser có WEB API và WEB API thì cung cấp thằng DOM ở trong đó

## Get element methods

Element : ID , class , tag, CSS selector, HTML colection

> Select by ID

- getElementById
  ==> trả trực tiếp về element, nếu có nhiều ID giống nhau thì trả về element đầu tiên, không tìm thấy trả về `null`

```jsx
const headingNode = document.getElementById("heading");
```

> Select by class

- getElementsByClassName
  ==> trả về 1 `HTML Collection` (1 mảng), muốn làm việc phải dùng vòng lặp

```jsx
const headingNodes = document.getElementsByClassName("heading");
```

> Select by tag

- getElementsByTagName
  ==> trả về 1 `HTML Collection` (1 mảng), muốn làm việc phải dùng vòng lặp

```jsx
const tagNames = document.getElementsByTagName("a");
```

> CSS selector

```jsx
<div class="box">
  <div class="box-02">Box 02 -- 01</div>
  <p>Title</p>
  <div class="box-02">Box 02</div>
  <div class="box-02">Box 02</div>
  <div class="box-02">Box 02</div>
</div>;

const boxNode = document.querySelector(".box .box-02");
const boxNodes = document.querySelectorAll(".box-02");
const titleEl = document.querySelectorAll("p");
```

- querySelector
  ==> trả về 1 element, nếu có phần tử cùng matching, thì sẽ trả về phần tử đầu tiên
- querySelectorAll
  ==> trả về 1 Node list (1 mảng) gồm tất cả các element matching, muốn làm việc phải dùng mảng

##### Note : TH khác với Get element

```jsx
<div class="box-1">
  <ul>
    <li>01</li>
    <li>02</li>
    <li>03</li>
  </ul>
</div>
```

Làm sao để lấy tất cả các thẻ `li` nằm trong `box-1` ?

cách 1 :

```jsx
// Trả về 1 NodeList gồm tất cả các li thuộc .box-1
const liBox01s = document.querySelectorAll(".box-1 li");
```

cách 2 :

```jsx
//Việc 1:  lấy về element box-1
const box01 = document.querySelector(".box-1");
// Việc 2: Lấy tất cả li thuộc box-1
const liBox01s = box01.getElementsByTagName("li");

// với cách này có thể dùng lại box01
```

## Attribute node & Text node

### Attribute

###### Muốn get/set được Attribute thì đầu tiên phải lấy được Element

1. Attribute hợp lệ
   VD: thẻ `<a/>` thì có attribute hợp lệ là `href`,

   ```jsx
   // Lấy element
   const headingEl = document.querySelector("h1");
   // set attribute hợp lệ
   headingEl.title = "title";
   // thẻ h1 không có attribute hợp lệ là 'data' nên khi set , log ra thì có nhưng trong DOM lại không hiển thị
   headingEl.data = "data test";
   // get attribute
   console.log(headingEl.title); // ==> title
   console.log(headingEl.data); // ==> data test
   ```

2. Attribute không hợp lệ
   VD: thẻ `<a/>` thì có attribute không hợp lệ là `tuanva` chẳng hạn,

```jsx
// Lấy Element
const headingEl02 = document.querySelector("h2");
// set attribute
headingEl02.setAttribute("class", "heading-02");
// get attribute
console.log(headingEl02.getAttribute("class")); // ==> heading-02
```

==> sẽ có 2 cách để truy cập `Attribute`

- Cách 1 : Truy xuất trực tiếp qua thuộc tính
- Cách 1 : Truy xuất qua phương thức
  ==> Thường thì sẽ hay dùng cách truy xuất qua phương thức (dùng `setAttribute` và `getAttribute` để làm việc với Attribute) hơn

### Text node
