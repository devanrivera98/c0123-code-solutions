Select "a"."line1",
       "a"."district",
       "c"."name"
FROM "addresses" as "a"
  JOIN "cities" as "c" USING ("cityId");
