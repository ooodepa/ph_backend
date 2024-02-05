import { MigrationInterface, QueryRunner } from "typeorm";

export class PHLSTItemCharactTranslate1707130695277 implements MigrationInterface {
    name = 'PHLSTItemCharactTranslate1707130695277'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemCharactTranslate" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_description" varchar(32) NOT NULL,
                "ph_itemId" varchar NOT NULL,
                "ph_languageCode" varchar NOT NULL,
                "ph_translateName" varchar(64) NOT NULL
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_PH_LST_ItemCharactTranslate" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_description" varchar(32) NOT NULL,
                "ph_itemId" varchar NOT NULL,
                "ph_languageCode" varchar NOT NULL,
                "ph_translateName" varchar(64) NOT NULL,
                CONSTRAINT "FK_68a996eedfe5302c3a5508614e6" FOREIGN KEY ("ph_itemId") REFERENCES "PH_CTL_ItemCharacteristics" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_dc6eb39abbee66c5c7eed27b4c2" FOREIGN KEY ("ph_languageCode") REFERENCES "PH_CTL_ItemCharacteristics" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_PH_LST_ItemCharactTranslate"(
                    "ph_id",
                    "ph_description",
                    "ph_itemId",
                    "ph_languageCode",
                    "ph_translateName"
                )
            SELECT "ph_id",
                "ph_description",
                "ph_itemId",
                "ph_languageCode",
                "ph_translateName"
            FROM "PH_LST_ItemCharactTranslate"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_ItemCharactTranslate"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_PH_LST_ItemCharactTranslate"
                RENAME TO "PH_LST_ItemCharactTranslate"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCharactTranslate"
                RENAME TO "temporary_PH_LST_ItemCharactTranslate"
        `);
        await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemCharactTranslate" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_description" varchar(32) NOT NULL,
                "ph_itemId" varchar NOT NULL,
                "ph_languageCode" varchar NOT NULL,
                "ph_translateName" varchar(64) NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "PH_LST_ItemCharactTranslate"(
                    "ph_id",
                    "ph_description",
                    "ph_itemId",
                    "ph_languageCode",
                    "ph_translateName"
                )
            SELECT "ph_id",
                "ph_description",
                "ph_itemId",
                "ph_languageCode",
                "ph_translateName"
            FROM "temporary_PH_LST_ItemCharactTranslate"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_PH_LST_ItemCharactTranslate"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_ItemCharactTranslate"
        `);
    }

}
