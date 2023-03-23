SELECT "g"."name",
       "f"."releaseYear"
  FROM "filmGenre" as "fg"
  JOIN "films" as "f" USING ("filmId")
  JOIN "genres" as "g" USING ("genreId")
  WHERE "f"."title" = 'Boogie Amelie';
