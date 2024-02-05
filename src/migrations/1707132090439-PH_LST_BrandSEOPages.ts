import { MigrationInterface, QueryRunner } from "typeorm";

export class PHLSTBrandSEOPages1707132090439 implements MigrationInterface {
    name = 'PHLSTBrandSEOPages1707132090439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_LST_BrandSEOPages" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_brandCode" varchar NOT NULL,
                "ph_SEOPageCode" varchar NOT NULL
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_PH_LST_BrandSEOPages" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_brandCode" varchar NOT NULL,
                "ph_SEOPageCode" varchar NOT NULL,
                CONSTRAINT "FK_4d46c9f853d63792ef9b57c8a14" FOREIGN KEY ("ph_brandCode") REFERENCES "PH_CTL_Brands" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_f24baa8635044ae6c60fd72ab6f" FOREIGN KEY ("ph_SEOPageCode") REFERENCES "PH_CTL_SEOPages" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_PH_LST_BrandSEOPages"("ph_id", "ph_brandCode", "ph_SEOPageCode")
            SELECT "ph_id",
                "ph_brandCode",
                "ph_SEOPageCode"
            FROM "PH_LST_BrandSEOPages"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_BrandSEOPages"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_PH_LST_BrandSEOPages"
                RENAME TO "PH_LST_BrandSEOPages"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "PH_LST_BrandSEOPages"
                RENAME TO "temporary_PH_LST_BrandSEOPages"
        `);
        await queryRunner.query(`
            CREATE TABLE "PH_LST_BrandSEOPages" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_brandCode" varchar NOT NULL,
                "ph_SEOPageCode" varchar NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "PH_LST_BrandSEOPages"("ph_id", "ph_brandCode", "ph_SEOPageCode")
            SELECT "ph_id",
                "ph_brandCode",
                "ph_SEOPageCode"
            FROM "temporary_PH_LST_BrandSEOPages"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_PH_LST_BrandSEOPages"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_BrandSEOPages"
        `);
    }

}
