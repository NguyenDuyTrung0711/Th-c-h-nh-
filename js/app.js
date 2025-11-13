// Xử lý logic (Thêm, Sửa, Xóa, Tìm kiếm)

function saveBook() {
  let id = document.getElementById("bookId").value;
  let title = document.getElementById("title").value.trim();
  let author = document.getElementById("author").value.trim();
  let year = document.getElementById("year").value;
  let image = document.getElementById("image").value || "https://picsum.photos/200/300?random";
  let description = document.getElementById("description").value.trim();

  if (!title || !author || !year) {
    alert("Vui lòng nhập đầy đủ thông tin sách!");
    return;
  }

  if (id) {
    // update
    let book = books.find(b => b.id == id);
    book.title = title;
    book.author = author;
    book.year = year;
    book.image = image;
    book.description = description;
  } else {
    // add new
    let newBook = {
      id: Date.now(),
      title, author, year, image, description
    };
    books.push(newBook);
  }
  saveToStorage();
  clearForm();
  renderBooks();
}

function editBook(id) {
  let book = books.find(b => b.id === id);
  document.getElementById("bookId").value = book.id;
  document.getElementById("title").value = book.title;
  document.getElementById("author").value = book.author;
  document.getElementById("year").value = book.year;
  document.getElementById("image").value = book.image;
  document.getElementById("description").value = book.description;
}

function deleteBook(id) {
  if (confirm("Bạn có chắc muốn xóa sách này?")) {
    books = books.filter(b => b.id !== id);
    saveToStorage();
    renderBooks();
  }
}

function viewDetail(id) {
  let book = books.find(b => b.id === id);
  showModal(book);
}

function searchBooks() {
  let keyword = document.getElementById("searchInput").value.toLowerCase();
  let filtered = books.filter(b =>
    b.title.toLowerCase().includes(keyword) ||
    b.author.toLowerCase().includes(keyword)
  );
  renderBooks(filtered);
}

// render ban đầu
renderBooks();
