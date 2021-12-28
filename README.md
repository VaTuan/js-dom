## HTML DOM

- HTML DOM là viết tắt của HTML Document Object Model
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
