SELECT "c"."firstName",
       "c"."lastName",
       "p"."amount"
  FROM "customers" as "c"
  JOIN "payments" as "p" USING ("customerId")
  ORDER by "p"."amount" DESC
  LIMIT 10;
