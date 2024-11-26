# MovieChill Frontend

## 🌟 Tính năng

- Xác thực người dùng và tùy chỉnh hồ sơ
- Duyệt phim và chương trình truyền hình với tích hợp TMDB API
- Chức năng danh sách theo dõi và lịch sử xem
- Trò chuyện toàn cầu theo thời gian thực và nhắn tin riêng
- Chỉ báo trạng thái người dùng trực tuyến
- Quản lý tài khoản người dùng

## 🚀 Công nghệ

- [Next.js](https://nextjs.org/) - Khung React để kết xuất và định tuyến phía máy chủ
- [Tailwind CSS](https://tailwindcss.com/) - Khung CSS tiện ích đầu tiên
- [Redux](https://redux.js.org/) - Quản lý trạng thái
- [React Query](https://react-query.tanstack.com/) - Lấy dữ liệu và lưu vào bộ nhớ đệm
- [Socket.IO](https://socket.io/) - Giao tiếp hai chiều theo thời gian thực

## 🛠 Cài đặt

1. Sao chép kho lưu trữ: `git clone https://github.com/doqhuy/moviechill-frontend.git`
2. Thay đổi thư mục: `cd moviechill-frontend`
3. Cài đặt các phụ thuộc: `npm install`
4. Tạo tệp `.env.local` trong thư mục gốc và thêm các biến môi trường sau:

```bash
BASE_URL=https://api.themoviedb.org"
NEXT_PUBLIC_BASE_URL="https://api.themoviedb.org"
NEXT_PUBLIC_LAN="en"
API_KEY="your_tmdb_api_key"
NEXT_PUBLIC_API_KEY="your_tmdb_api_key"
NEXT_PUBLIC_USER_URL="http://localhost:8080 hoặc URL backend đã triển khai của bạn"
```

5. Khởi động máy chủ phát triển: `npm run build` && `npm run start`

6. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt xem ứng dụng.

## 🔗 Kho lưu trữ liên quan

- [MovieChill Backend](https://github.com/doqhuy/moviechill-backend) - API phụ trợ cho MovieChill
