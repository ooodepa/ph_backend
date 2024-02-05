import { MigrationInterface, QueryRunner } from "typeorm";

export class PHLSTItemCharacteristics1707133025982 implements MigrationInterface {
    name = 'PHLSTItemCharacteristics1707133025982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemCharacteristics" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCode" varchar NOT NULL,
                "ph_itemCharacteristicCode" varchar NOT NULL
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_PH_LST_ItemCharacteristics" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCode" varchar NOT NULL,
                "ph_itemCharacteristicCode" varchar NOT NULL,
                CONSTRAINT "FK_fcda5468b518c4142c1a97a31a9" FOREIGN KEY ("ph_itemCode") REFERENCES "PH_CTL_Items" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION,
                CONSTRAINT "FK_2be0f9297e46e2c02ef3be4b28c" FOREIGN KEY ("ph_itemCharacteristicCode") REFERENCES "PH_CTL_ItemCharacteristics" ("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_PH_LST_ItemCharacteristics"(
                    "ph_id",
                    "ph_itemCode",
                    "ph_itemCharacteristicCode"
                )
            SELECT "ph_id",
                "ph_itemCode",
                "ph_itemCharacteristicCode"
            FROM "PH_LST_ItemCharacteristics"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_ItemCharacteristics"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_PH_LST_ItemCharacteristics"
                RENAME TO "PH_LST_ItemCharacteristics"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCharacteristics"
                RENAME TO "temporary_PH_LST_ItemCharacteristics"
        `);
        await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemCharacteristics" (
                "ph_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "ph_itemCode" varchar NOT NULL,
                "ph_itemCharacteristicCode" varchar NOT NULL
            )
        `);
        await queryRunner.query(`
            INSERT INTO "PH_LST_ItemCharacteristics"(
                    "ph_id",
                    "ph_itemCode",
                    "ph_itemCharacteristicCode"
                )
            SELECT "ph_id",
                "ph_itemCode",
                "ph_itemCharacteristicCode"
            FROM "temporary_PH_LST_ItemCharacteristics"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_PH_LST_ItemCharacteristics"
        `);
        await queryRunner.query(`
            DROP TABLE "PH_LST_ItemCharacteristics"
        `);
    }

}
