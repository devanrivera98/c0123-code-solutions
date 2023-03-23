SELECT "a"."firstName",
       "a"."lastName"
  FROM "castMembers" as "cm"
  JOIN "films" as "f" USING ("filmId")
  JOIN "actors" as "a" USING ("actorId")
  WHERE "f"."title" = 'Jersey Sassy';
