const express = require('express');
const helmet = require('helmet'); // Thư viện bảo mật Headers
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware bảo mật và xử lý dữ liệu
app.use(helmet()); // Kích hoạt bảo mật Helmet ngay lập tức
app.use(cors());
app.use(express.json()); // Cho phép server đọc dữ liệu JSON

// Route cơ bản chạy thử
app.get('/', (req, res) => {
    res.send('Fashion E-commerce Backend is running securely!');
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});