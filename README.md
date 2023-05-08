# SIMPLE REST API PRODUCT
Repository ini berisikan tentang simple REST API product (CRUD) menggunakan Node.js, Express, PostgreSQL

## Pengembangan
Pengembangan dilakukan menggunakan Node.js v16.13.0.
Menggunakan:
1. Rate limiter untuk limit hit API
2. Express validator untuk melakukan validasi input request


## Running dan Konfigurasi
1. Membutuhkan pembuatan database baru di PostgreSQL dengan nama: 

    > salt-backend-task
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
1. POST /product/create  {"title", "description, "price"}
2. GET /product 
3. GET /product/:id
4. PUT /product/update  {"title", "description, "price"}
5. DELETE /product/delete-all
6. DELETE /product/delete/:id
7. POST /user/create   {"username"}
8. POST /user/:username/add-product-likes   {"idProduct"}
9. GET /user
10. GET /user/:username






