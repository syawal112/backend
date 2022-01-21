-- table product mempunya detail supplier beserta kotanya
select *
from products a
left Join ( select j.*, c.city from  suppliers j
				left join supplier_cities c
					on j.id = c.supplier_id
			) b
on a.supplier_id = b.id