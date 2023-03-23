SELECT "c"."firstName",
       "c"."lastName"
  FROM "inventory" as "i"
  JOIN "customers" as "c" USING ("storeId")
  JOIN "films" as "f" USING ("filmId")
  JOIN "rentals" as "r" USING ("inventoryId")
  WHERE "f"."title" = 'Magic Mallrats';
