SELECT Count("ci".*) as "totalCities",
       "co"."name" as "CountryName"
  FROM "cities" as "ci"
  JOIN "countries" as "co" USING ("countryId")
GROUP by "co"."countryId"
