import { MigrationInterface, QueryRunner } from "typeorm";

export class PHCTLItemCategoryGalery1707132377320 implements MigrationInterface {
    name = 'PHCTLItemCategoryGalery1707132377320'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemCategoryGalery" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCategoryCode" varchar NOT NULL,
                "ph_photoUrl" varchar(2000) NOT NULL
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_PH_LST_ItemCategoryGalery" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCategoryCode" varchar NOT NULL,
                "ph_photoUrl" varchar(2000) NOT NULL,
                CONSTRAINT "FK_f876af64e1091151a89319f6a39" FOREIGN KEY ("ph_itemCategoryCode") REFERENCES "PH_CTL_ItemCategories" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_PH_LST_ItemCategoryGalery"("ph_id", "ph_itemCategoryCode", "ph_photoUrl")
            SELECT "ph_id",
                "ph_itemCategoryCode",
                "ph_photoUrl"
            FROM "PH_LST_ItemCategoryGalery"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_ItemCategoryGalery"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_PH_LST_ItemCategoryGalery"
                RENAME TO "PH_LST_ItemCategoryGalery"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCategoryGalery"
                RENAME TO "temporary_PH_LST_ItemCategoryGalery"
        `);
        await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemCategoryGalery" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCategoryCode" varchar NOT NULL,
                "ph_photoUrl" varchar(2000) NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "PH_LST_ItemCategoryGalery"("ph_id", "ph_itemCategoryCode", "ph_photoUrl")
            SELECT "ph_id",
                "ph_itemCategoryCode",
                "ph_photoUrl"
            FROM "temporary_PH_LST_ItemCategoryGalery"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_PH_LST_ItemCategoryGalery"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_ItemCategoryGalery"
        `);
    }

}
