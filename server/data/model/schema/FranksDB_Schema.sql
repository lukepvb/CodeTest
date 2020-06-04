CREATE TABLE "cheeses" (
	"id" integer NOT NULL,
	"name" varchar(30) NOT NULL,
	"country" varchar(24),
	"price" numeric NOT NULL,
	CONSTRAINT "cheeses_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "specials" (
	"id" serial NOT NULL,
	"zip" integer NOT NULL,
	"cheese_id" integer NOT NULL,
	"percent_discount" integer NOT NULL,
	"out_of_stock" BOOLEAN NOT NULL,
	CONSTRAINT "specials_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "specials" ADD CONSTRAINT "specials_fk0" FOREIGN KEY ("cheese_id") REFERENCES "cheeses"("id");

