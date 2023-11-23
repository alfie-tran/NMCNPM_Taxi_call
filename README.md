# NMCNPM_Taxi_call
`Nhóm đồ án NMCNPM`
`
Đức phát triển phần ứng dụng cho tài xế
Vi phát triển phần ứng dụng cho khách hàng
Tuyền và Tài phát triển ứng dụng tổng đài điều phối
`

## Phần 1: Làm việc nhóm với github

Đồ án chia ra các nhánh (`taixe_app`, `khachhang_app`,`tongdai_app`) 
1 số lệnh cơ bản thao tác với nhánh:
git checkout <tên-nhánh>
git add -A 
git commit -m "comment của bạn"
git push origin <tên-nhánh>
git pull 

## Phần 2: Môi trường phát triển 

### Server : sử dụng `nodejs` và 1 số extension: exprees, axios, ..

hệ thống quản lý gói cho JavaScript: `npm (Node Package Manager)`

### Ứng dụng: `react native`

Cấu Hình Ứng Dụng React Native:

Sử dụng các thư viện react-navigation để quản lý điều hướng.

Tương tác với server sử dụng thư viện axios.

## hai thư viện điều hướng: react-router và react-navigation 
1. Môi trường sử dụng:

### react-router: Thường được sử dụng trong các ứng dụng web React.

Để có nhiều màn hình trong ứng dụng React, sử dụng thư viện React Router. React Router giúp quản lý các đường dẫn và hiển thị các component tương ứng với từng đường dẫn. 

Cài đặt React Router: `npm install react-router-dom`

Chuyển đổi giữa các màn hình:

Bạn có thể thêm các liên kết hoặc các phần tử tương tự trong mỗi component để chuyển đổi giữa các màn hình.

// Trong DriverInfoScreen.js và BookingInfoScreen.js
```
<Link to="/booking">Go to Booking Info</Link>
```
### react-navigation: Thường được sử dụng trong các ứng dụng di động React Native.

3. Đa nền tảng:

react-router: Tích hợp nhanh chóng với React Native thông qua react-router-native hoặc react-router-dom khi sử dụng Expo.

react-navigation: Chỉ được thiết kế cho React Native, không dễ dàng tích hợp trực tiếp vào ứng dụng web React.