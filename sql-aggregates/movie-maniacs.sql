SELECT "c"."firstName" as "firstName",
       "c"."lastName" as "lastName",
       SUM("p"."amount") as "Total Amount per Person"
  FROM "customers" as "c"
  JOIN "payments" as "p" USING ("customerId")
  JOIN "rentals" as "r" USING ("customerId")
  GROUP BY "firstName", "lastName"
  ORDER BY "Total Amount per Person" DESC;


-- Notes

-- List the first and last name of all Customers, plus the total amount they've spent on rentals. Order them by total paid, desc

-- rentals table
-- rentalId, inventoryId, customerId, staffId

-- customers table
-- customerId, storeId, firstName, lastName,

-- payments table
-- paymentId, customerId, staffId, rentalId, amount
