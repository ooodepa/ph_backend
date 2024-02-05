import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHLSTItemCharactTranslate1707117507376
  implements MigrationInterface
{
  name = 'PHLSTItemCharactTranslate1707117507376';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemCharactTranslate" (
                "ph_id" SERIAL NOT NULL,
                "ph_description" character varying(32) NOT NULL,
                "ph_itemId" uuid NOT NULL,
                "ph_languageCode" uuid NOT NULL,
                "ph_translateName" character varying(64) NOT NULL,
                CONSTRAINT "PK_57dd2ddc1f1e7e3c2f81a482247" PRIMARY KEY ("ph_id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCharactTranslate"
            ADD CONSTRAINT "FK_68a996eedfe5302c3a5508614e6" FOREIGN KEY ("ph_itemId") REFERENCES "PH_CTL_ItemCharacteristics"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCharactTranslate"
            ADD CONSTRAINT "FK_dc6eb39abbee66c5c7eed27b4c2" FOREIGN KEY ("ph_languageCode") REFERENCES "PH_CTL_ItemCharacteristics"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCharactTranslate" DROP CONSTRAINT "FK_dc6eb39abbee66c5c7eed27b4c2"
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCharactTranslate" DROP CONSTRAINT "FK_68a996eedfe5302c3a5508614e6"
        `);
    await queryRunner.query(`
            DROP TABLE "PH_LST_ItemCharactTranslate"
        `);
  }
}
