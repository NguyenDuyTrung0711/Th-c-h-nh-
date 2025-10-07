// Quản lý giao diện (UI)

function renderBooks(list = books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  list.forEach(book => {
    bookList.innerHTML += `
      <div class="book-card">
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.author} (${book.year})</p>
        <div class="actions">
          <button class="btn-detail" onclick="viewDetail(${book.id})">Chi tiết</button>
          <button class="btn-edit" onclick="editBook(${book.id})">Sửa</button>
          <button class="btn-delete" onclick="deleteBook(${book.id})">Xóa</button>
        </div>
      </div>
    `;
  });
}

function clearForm() {
  document.getElementById("bookId").value = "";
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("year").value = "";
  document.getElementById("image").value = "";
  document.getElementById("description").value = "";
}

function showModal(book) {
  document.getElementById("modalImage").src = book.image;
  document.getElementById("modalTitle").innerText = book.title;
  document.getElementById("modalAuthor").innerText = book.author;
  document.getElementById("modalYear").innerText = book.year;
  document.getElementById("modalDesc").innerText = book.description;
  document.getElementById("bookModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("bookModal").style.display = "none";
}

// Đóng modal khi click ra ngoài
window.onclick = function(event) {
  let modal = document.getElementById("bookModal");
  if (event.target === modal) {
    closeModal();
  }
}

// Đóng modal khi nhấn ESC
window.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

