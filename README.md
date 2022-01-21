# Backend Test

Diberikan array string sebagai berikut:
```bash
const combination = ["Merah-S-Katun", "Merah-S-Polyester", "Merah-M-Katun", "Merah-M- Polyester", "Merah-L-Katun", "Merah-L-Polyester", "Merah-XL-Katun", "Merah-XL-Polyester", "Merah-XXL-Katun", "Merah-XXL-Polyester", "Kuning-S-Katun", "Kuning-S-Polyester", "Kuning-M- Katun", "Kuning-M-Polyester", "Kuning-L-Katun", "Kuning-L-Polyester", "Kuning-XL-Katun", "Kuning- XL-Polyester", "Kuning-XXL-Katun", "Kuning-XXL-Polyester", "Hijau-S-Katun", "Hijau-S-Polyester", "Hijau-M-Katun", "Hijau-M-Polyester", "Hijau-L-Katun", "Hijau-L-Polyester", "Hijau-XL-Katun", "Hijau- XL-Polyester", "Hijau-XXL-Katun", "Hijau-XXL-Polyester"]
```

Buatlah program nodejs untuk menyederhanakan data kombinasi di atas menjadi tiga array sebagai berikut:
```bash
array color: ["Merah", "Kuning", "Hijau"]
array size: ["S", "M", "L", "XL", "XXL"] 
array material: ["Katun", "Polyester"]
```

### (cukup sampai di console.log saja)

Buatlah program nodejs untuk fetch data dari api di bawah (cukup sampai di console.log saja): https://randomuser.me/api/?page=1&results=20
Format ulang data array hasil fetch tersebut menjadi json seperti berikut:
```bash
{
  "fullname":"Mr. Abraham Lincoln",
  "age":45,
  "city":"Perth",
  "email":"email@example.com",
  "phone":"958-966-181", "picture":"https://randomuser.me/api/portraits/men/51.jpg"
}
```
- Filter data hasil response api di atas supaya hanya menampilkan title Mrs
- Filter data hasil response api di atas supaya hanya menampilkan user dengan rentang umur 20-30 tahun (inclusive)
- Sort data hasil response api di atas berdasrkan umur termuda


<img width="455" alt="Screen Shot 2022-01-21 at 21 21 28" src="https://user-images.githubusercontent.com/26369965/150542832-f855b8dc-633b-4425-9fd8-4f819ea4a784.png">

- Buat join SQL supaya table product mempunya detail supplier beserta kotanya
- Buat join SQL seperti soal 1 tetapi hilangkan product yg tidak ada data suppliernya
- Buat join SQL seperti soal 2 tetapi hilangkan juga product yg suppliernya tidak ada data kotanya
