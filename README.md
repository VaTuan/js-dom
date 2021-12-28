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

- getElementById
  ==> trả trực tiếp về element, nếu có nhiều ID giống nhau thì trả về element đầu tiên, không tìm thấy trả về `null`

```jsx
const headingNode = document.getElementById("heading");
```
