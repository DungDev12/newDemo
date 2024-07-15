export const changeTitleHead = (title) => {
  document.title = "Đang tải...";

  // Giả lập thời gian tải trang
  setTimeout(() => {
    // Cập nhật tiêu đề trang sau khi tải xong
    document.title = title;
  }, 500); // Thời gian tải giả lập là 1 giây
};
