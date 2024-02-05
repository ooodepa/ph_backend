import { MigrationInterface, QueryRunner } from "typeorm";

export class PHLSTItemSEOPages1707132961275 implements MigrationInterface {
    name = 'PHLSTItemSEOPages1707132961275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemSEOPages" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCode" varchar NOT NULL,
                "ph_SEOPageCode" varchar NOT NULL
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_PH_LST_ItemSEOPages" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCode" varchar NOT NULL,
                "ph_SEOPageCode" varchar NOT NULL,
                CONSTRAINT "FK_e2fb2645b278ef8459abcb75625" FOREIGN KEY ("ph_itemCode") REFERENCES "PH_CTL_Items" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_561c460df699b26d75382350e91" FOREIGN KEY ("ph_SEOPageCode") REFERENCES "PH_CTL_SEOPages" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_PH_LST_ItemSEOPages"("ph_id", "ph_itemCode", "ph_SEOPageCode")
            SELECT "ph_id",
                "ph_itemCode",
                "ph_SEOPageCode"
            FROM "PH_LST_ItemSEOPages"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_ItemSEOPages"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_PH_LST_ItemSEOPages"
                RENAME TO "PH_LST_ItemSEOPages"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemSEOPages"
                RENAME TO "temporary_PH_LST_ItemSEOPages"
        `);
        await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemSEOPages" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCode" varchar NOT NULL,
                "ph_SEOPageCode" varchar NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "PH_LST_ItemSEOPages"("ph_id", "ph_itemCode", "ph_SEOPageCode")
            SELECT "ph_id",
                "ph_itemCode",
                "ph_SEOPageCode"
            FROM "temporary_PH_LST_ItemSEOPages"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_PH_LST_ItemSEOPages"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_ItemSEOPages"
        `);
    }

}
