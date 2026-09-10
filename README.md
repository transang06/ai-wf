# AI Workflow Mini

Demo tĩnh cực nhỏ để thực hành quy trình: **requirement → GitHub Issue/WBS → design → code → PR/review → test → deploy**.

## Requirement

Người dùng cần một task board tối giản, có thể thêm việc và chuyển trạng thái. Không cần backend: dữ liệu được lưu trong trình duyệt (`localStorage`).

## Quy trình làm việc

1. Ghi requirement và tách WBS thành GitHub Issues.
2. Tạo nhánh cho một Issue, ví dụ `feature/1-task-board`.
3. Design ngắn gọn trong Issue/PR: ba trạng thái *Cần làm*, *Đang làm*, *Hoàn tất*.
4. Code, chạy `npm test`, rồi push nhánh.
5. Mở PR, để CI chạy và review trước khi merge.
6. Merge vào `main`: GitHub Actions tự kiểm thử và deploy lên GitHub Pages.

## Chạy local

Mở `index.html` trực tiếp bằng trình duyệt. Để chạy kiểm thử:

```bash
npm test
```

## Quy ước Issues

- Issue là một đơn vị WBS có tiêu chí hoàn thành rõ ràng.
- PR dùng `Closes #<số-issue>` để tự đóng Issue khi merge.
- Không merge khi workflow **CI** chưa xanh hoặc review chưa đạt.
