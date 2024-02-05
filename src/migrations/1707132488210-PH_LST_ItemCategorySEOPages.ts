import { MigrationInterface, QueryRunner } from "typeorm";

export class PHLSTItemCategorySEOPages1707132488210 implements MigrationInterface {
    name = 'PHLSTItemCategorySEOPages1707132488210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemCategorySEOPages" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCategoryCode" varchar NOT NULL,
                "ph_SEOPageCode" varchar NOT NULL
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_PH_LST_ItemCategorySEOPages" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCategoryCode" varchar NOT NULL,
                "ph_SEOPageCode" varchar NOT NULL,
                CONSTRAINT "FK_e6b56fa5255c692e20148f43b14" FOREIGN KEY ("ph_itemCategoryCode") REFERENCES "PH_CTL_ItemCategories" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_b8845def81d808f0b9697e367c9" FOREIGN KEY ("ph_SEOPageCode") REFERENCES "PH_CTL_SEOPages" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_PH_LST_ItemCategorySEOPages"("ph_id", "ph_itemCategoryCode", "ph_SEOPageCode")
            SELECT "ph_id",
                "ph_itemCategoryCode",
                "ph_SEOPageCode"
            FROM "PH_LST_ItemCategorySEOPages"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_ItemCategorySEOPages"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_PH_LST_ItemCategorySEOPages"
                RENAME TO "PH_LST_ItemCategorySEOPages"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCategorySEOPages"
                RENAME TO "temporary_PH_LST_ItemCategorySEOPages"
        `);
        await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemCategorySEOPages" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCategoryCode" varchar NOT NULL,
                "ph_SEOPageCode" varchar NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "PH_LST_ItemCategorySEOPages"("ph_id", "ph_itemCategoryCode", "ph_SEOPageCode")
            SELECT "ph_id",
                "ph_itemCategoryCode",
                "ph_SEOPageCode"
            FROM "temporary_PH_LST_ItemCategorySEOPages"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_PH_LST_ItemCategorySEOPages"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_ItemCategorySEOPages"
        `);
    }

}
