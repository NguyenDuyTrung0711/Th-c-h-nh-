// Quản lý dữ liệu + LocalStorage

const STORAGE_KEY = "library_books";

// Dữ liệu mẫu
let books = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  {id: 1, title: "JavaScript Cơ bản", author: "Nguyễn Văn A", year: 2020, image: "https://picsum.photos/200/300?1", description: "Sách nhập môn lập trình JS."},
  {id: 2, title: "HTML & CSS", author: "Trần Văn B", year: 2019, image: "https://picsum.photos/200/300?2", description: "Cẩm nang thiết kế web cơ bản."}
];

function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}
