// Khởi tạo SDK Facebook
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1048996152762274', // Bạn sẽ thay số App ID vào đây ở Giai đoạn 2
        cookie     : true,
        xfbml      : true,
        version    : 'v19.0'
    });
};

// Xử lý sự kiện click nút Đăng nhập
document.getElementById('fb-login-btn').addEventListener('click', function() {
    
    // GỌI POPUP LOGIN CỦA FACEBOOK
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Đăng nhập thành công, chuyển hướng vào Dashboard...');
            
            // Ẩn màn hình đăng nhập, hiện Dashboard
            document.getElementById('login-screen').classList.remove('active');
            document.getElementById('dashboard-screen').classList.add('active');
            
            // Lấy tên người dùng hiển thị lên góc phải
            FB.api('/me', function(res) {
                if(res.name) {
                    document.getElementById('user-profile-name').innerText = 'Xin chào, ' + res.name;
                }
            });
        } else {
            alert('Bạn đã hủy đăng nhập hoặc chưa cấp quyền.');
        }
    }, {scope: 'public_profile,ads_management,business_management'}); // Xin các quyền cần thiết
    
    // LƯU Ý TEST: Trong quá trình làm Giai đoạn 1 chưa có App ID để FB.login chạy được, 
    // bạn có thể test giao diện bằng cách bỏ comment 2 dòng code dưới đây và click nút Đăng nhập:
    // document.getElementById('login-screen').classList.remove('active');
    // document.getElementById('dashboard-screen').classList.add('active');
});
