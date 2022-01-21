-- soal 1 tetapi hilangkan product yg tidak ada data suppliernya
select *
from products a
inner Join ( select j.*, c.city from  suppliers j
				left join supplier_cities c
					on j.id = c.supplier_id
			) b
on a.supplier_id = b.id