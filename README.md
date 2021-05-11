# E-store
Là một mini project gồm có các API để thao tác với dữ liệu từ CSDL Mongodb, dùng trong các trang web/ ứng dụng thương mại điện tử về các sản phẩm giày đơn giản. 

CSDL gồm có 4 bảng : 
  + categories: chứa các thể loại của giày
  + products: chứa các sản phẩm giày
  + users: thông tin khách hàng, admin
  + orders: thông tin các đơn orders của khách hàng

Giải thích về API:
Khi login vào hệ thống thì tùy vào tài khoản đó là ADMIN hay USER thì sẽ có token với phạm vi truy cập sử dụng các API khác nhau 
(ADMIN: sử dụng được tất cả API, USER: chỉ sử dụng được các API cơ bản của hệ thống - cụ thể trong helpers/jwt.js )
Tài khoản : 
  + admin: admin@gmail.com ( pass: admin )
  + user: user@gmail.com (pass: user )

base_url: http://localhost:3000/api/v1/

users:
  login: POST base_url/users/login
  register: POST base_url/users/register
  get All: GET base_url/users
  get By Id: GET base_url/users/:id
  get current user: GET base_url/users/getCurrentUser
  count users: GET base_url/users/get/count
  update info: PUT base_url/users/updateUser
  change password: PUT base_url/users/changePassword
  delete: DELETE base_url/users/:id

categories:
  get All: GET base_url/categories
  get By Id: GET base_url/categories/:id
  create: POST base_url/categories
  update: PUT base_url/categories/:id
  delete: DELETE base_url/categories/:id
  
products: 
  get All: GET base_url/products
  get By Id: GET base_url/products/:id
  create: POST base_url/products
  update: PUT base_url/products/:id
  delete: DELETE base_url/products/:id
  count: GET base_url/products/get/count
  
orders:
  get All: GET base_url/orders
  get By Id: GET base_url/orders/:id
  create: POST base_url/orders
  update: PUT base_url/orders/:id
  delete: DELETE base_url/orders/:id
