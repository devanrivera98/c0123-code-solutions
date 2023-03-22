SELECT "filmId",
       "title"
  FROM "films"
  WHERE "rentalRate" < 1
  ORDER by "filmId" ASC
  LIMIT 50;
