-- soal 2 tetapi hilangkan juga product yg suppliernya tidak ada data kotanya
select *
from products a
inner Join ( select j.*, c.city from  suppliers j
				inner join supplier_cities c
					on j.id = c.supplier_id
			) b
on a.supplier_id = b.id