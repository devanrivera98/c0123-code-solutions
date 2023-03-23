SELECT "g"."name" as "genre",
       COUNT("g".*) as "genreName"
  FROM "castMembers" as "cm"
  JOIN "actors" as "a" USING ("actorId")
  JOIN "filmGenre" as "fg" USING ("filmId")
  JOIN "genres" as "g" USING ("genreId")
  WHERE "actorId" = 178
GROUP by "g"."genreId";
-- Notes

-- Actors table
-- actorId, firstName, lastName

-- castMembers
-- actorId, filmId

-- filmGenre
-- filmId, genreId

-- Genre
-- GenreId name
