import './App.css'
import schoolLogo from './assets/logo udck.png'
import avatarImg from './assets/avatar.jpg'

function App() {
  return (
    <div className="page">
      <header className="hero-section">
        <img
          className="avatar-img"
          src={avatarImg}
          alt="Avatar Nguyễn Nguyên Đức"
        />
        <img
          className="school-logo-img"
          src={schoolLogo}
          alt="Logo Đại học Đà Nẵng - Kon Tum"
        />
        <h1>Xin chào, tôi là Nguyễn Nguyên Đức</h1>
        <p>Sinh viên K24TT - Phân hiệu Đại học Đà Nẵng tại Kon Tum</p>
      </header>

      <section className="profile-grid">
        <div className="profile-card">
          <h2>Về tôi</h2>
          <p>
            Tôi là Nguyễn Nguyên Đức, là sinh viên năm 2 ngành Công nghệ Thông tin, đam mê công
            nghệ và sáng tạo. Mục tiêu nghề nghiệp: trở thành
            developer front-end chuyên nghiệp, xây dựng website phản hồi tốt và
            trải nghiệm người dùng tối ưu.
          </p>
        </div>

        <div className="profile-card">
          <h2>Thông tin cá nhân</h2>
          <ul>
            <li><strong>Họ & Tên:</strong> Nguyễn Nguyên Đức</li>
            <li><strong>Lớp:</strong> K24TT</li>
            <li><strong>Trường:</strong> Phân hiệu Đại học Đà Nẵng tại Kon Tum</li>
            <li><strong>Năm học:</strong> 2024 - 2028</li>
          </ul>
        </div>

        <div className="profile-card">
          <h2>Học vấn</h2>
          <ul>
            <li>Phân hiệu Đại học Đà Nẵng tại Kon Tum</li>
            <li>Ngành CNTT, chuyên sâu web, mobile</li>
            <li>Điểm GPA: (cập nhật sau)</li>
            <li>Giải thưởng học thuật: (cập nhật sau)</li>
          </ul>
        </div>

        <div className="profile-card">
          <h2>Liên hệ</h2>
          <ul>
            <li>Email: nnduc.k24tt@kontum.udn.vn</li>
            <li>Điện thoại: 0900 123 456</li>
            <li>Facebook: <a href="https://facebook.com/nguyennguyenduc" target="_blank" rel="noreferrer">facebook.com/nguyennguyenduc</a></li>
            <li>Địa chỉ: Phân hiệu Đại học Đà Nẵng tại Kon Tum</li>
          </ul>
        </div>
      </section>

      <section className="skills-section">
        <h2>Kỹ năng</h2>
        <ul className="skills-list">
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>React, Vite, Tailwind CSS</li>
          <li>Git, Node.js, npm</li>
          <li>Thiết kế UI/UX cơ bản, responsive</li>
          <li>Kỹ Năng (đọc tài liệu, viết email)</li>
        </ul>
      </section>

      <section className="projects-section">
        <h2>Dự án tiêu biểu</h2>
        <article>
          <h3>Website giới thiệu cá nhân</h3>
          <p>Web tĩnh dùng React và Tailwind CSS, giới thiệu về tôi, kỹ năng và liên hệ.</p>
        </article>
        <article>
          <h3>App quản lý chuyến phượt</h3>
          <p>Web app MVP dùng localStorage để lưu địa điểm, lịch trình và chi phí.</p>
        </article>
      </section>

      <section className="hobby-section">
        <h2>Sở thích & Đam mê</h2>
        <ul>
          <li>Đi phượt khám phá vùng núi và biển</li>
          <li>Chụp ảnh chân dung và phong cảnh đời sống.</li>
          <li>Chế tạo đồ chơi tự động, mạch điện nhỏ</li>
          <li>Nghiên cứu văn hoá Việt Nam, lịch sử địa phương</li>
        </ul>
      </section>
    </div>
  )
}

export default App
