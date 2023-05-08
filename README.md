# SIMPLE REST API PRODUCT
Repository ini berisikan tentang simple REST API product (CRUD) menggunakan Node.js, Express, PostgreSQL

## Pengembangan
Pengembangan dilakukan menggunakan Node.js v16.13.0.
Menggunakan:
1. Rate limiter untuk limit hit API
2. Express validator untuk melakukan validasi input request


## Running dan Konfigurasi
1. Membutuhkan pembuatan database baru di PostgreSQL dengan nama: 

    > taskbackendsalt
2. Mengubah file .env sesuai dengan local environment.
3. Install dependencies dengan menggunakan command

    >npm install
4. Migrasi database schema
    
    >npx sequelize-cli db:migrate
    
5. Running file seeder, untuk data dummy

    > npx sequelize-cli db:seed:all

6. Running server dengan command

    > npm run dev


## API Dokumentasi
- POST /product/create - menambah/membuat product
    > input => {"title", "description, "price"}
- GET /product - mengambil semua product
- GET /product/:id - mengambil product berdasarkan id
- PUT /product/update/:id - update product berdasarkan id
    > input => {"title", "description, "price"}
- DELETE /product/delete-all - menghapus semua product
- DELETE /product/delete/:id - menghapus product berdasarkan id
- POST /user/create - membuat/menambahkan user
    > input => {"username"}
- POST /user/:username/add-product-likes  - menambahkan likes product berdasarkan username(user)
    > input => {"idProduct"}
- GET /user - mendapatkan semua user
- GET /user/:username - mendapatkan user tertentu beserta dengan product likesnya apabila ada






