const request = require('request');

const soalNo1 = () => {
    const combination = ["Merah-S-Katun", "Merah-S-Polyester", "Merah-M-Katun", "Merah-M- Polyester", "Merah-L-Katun", "Merah-L-Polyester", "Merah-XL-Katun", "Merah-XL-Polyester", "Merah-XXL-Katun", "Merah-XXL-Polyester", "Kuning-S-Katun", "Kuning-S-Polyester", "Kuning-M- Katun", "Kuning-M-Polyester", "Kuning-L-Katun", "Kuning-L-Polyester", "Kuning-XL-Katun", "Kuning- XL-Polyester", "Kuning-XXL-Katun", "Kuning-XXL-Polyester", "Hijau-S-Katun", "Hijau-S-Polyester", "Hijau-M-Katun", "Hijau-M-Polyester", "Hijau-L-Katun", "Hijau-L-Polyester", "Hijau-XL-Katun", "Hijau- XL-Polyester", "Hijau-XXL-Katun", "Hijau-XXL-Polyester"];
    let color = [];
    let size = [];
    let material = [];
    combination.forEach(element => {
        element.split('-').forEach((value, index)=>{
            if(index == 0 && !color.includes(value)) color.push(value);
            if(index == 1 && !size.includes(value)) size.push(value);
            if(index == 2 && !material.includes(value)) material.push(value);
        })
    });
    console.log('array color:', color);
    console.log('array size:', size);
    console.log('array material: ', material);
}

const soalNo2 = () => {
    const soalNo2_a = (obj) => {
        let fullName = '';
        Object.keys(obj?.name).map((val, index) => { 
            fullName = fullName + (obj?.name[val] + (index == 0? '. ' : ' '));
        })
        return {
            fullname : fullName,
            age: obj.dob.age,
            city: obj.location.city,
            email: obj.email,
            phone: obj.phone, 
            picture: obj.picture.large
        }
    };

    request('https://randomuser.me/api/?page=1&results=20', function (error, response, body) {
        const bodyParse = JSON.parse(body);
        const array = bodyParse.results;
        let resultConvertJSON = [];
        let resultTitleMrs = [];
        let resultRentangUmur = [];
        let resultSortUmurTermuda = array.sort((a, b) => (a.dob.age) - (b.dob.age));

        array.forEach(element => {
            resultConvertJSON.push(soalNo2_a(element));
            if(element.name.title == 'Mrs') resultTitleMrs.push(element);
            if(element.dob.age > 20 && element.dob.age < 30) resultRentangUmur.push(element);
        });

        console.log('just value needed:', resultConvertJSON);
        console.log('just Mrs:', resultTitleMrs);
        console.log('just age between 20 & 30: ', resultRentangUmur);
        console.log('sort young to old: ', resultSortUmurTermuda);
    });
}

soalNo1();
// soalNo2();
