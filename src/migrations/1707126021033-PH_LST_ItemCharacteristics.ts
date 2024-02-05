import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHLSTItemCharacteristics1707126021033
  implements MigrationInterface
{
  name = 'PHLSTItemCharacteristics1707126021033';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemCharacteristics" (
                "ph_id" SERIAL NOT NULL,
                "ph_itemCode" uuid NOT NULL,
                "ph_itemCharacteristicCode" uuid NOT NULL,
                CONSTRAINT "PK_e593f788116687ecd80f5888a92" PRIMARY KEY ("ph_id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCharacteristics"
            ADD CONSTRAINT "FK_fcda5468b518c4142c1a97a31a9" FOREIGN KEY ("ph_itemCode") REFERENCES "PH_CTL_Items"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCharacteristics"
            ADD CONSTRAINT "FK_2be0f9297e46e2c02ef3be4b28c" FOREIGN KEY ("ph_itemCharacteristicCode") REFERENCES "PH_CTL_ItemCharacteristics"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCharacteristics" DROP CONSTRAINT "FK_2be0f9297e46e2c02ef3be4b28c"
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemCharacteristics" DROP CONSTRAINT "FK_fcda5468b518c4142c1a97a31a9"
        `);
    await queryRunner.query(`
            DROP TABLE "PH_LST_ItemCharacteristics"
        `);
  }
}
