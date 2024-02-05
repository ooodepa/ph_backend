import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHLSTItemGalery1707125309568 implements MigrationInterface {
  name = 'PHLSTItemGalery1707125309568';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemGalery" (
                "ph_id" SERIAL NOT NULL,
                "ph_itemCode" uuid NOT NULL,
                "ph_photoUrl" character varying(2000) NOT NULL,
                CONSTRAINT "PK_ba10172ac2158f918e3338cd744" PRIMARY KEY ("ph_id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemGalery"
            ADD CONSTRAINT "FK_3f83b80c335a2e7d7d014351bc8" FOREIGN KEY ("ph_itemCode") REFERENCES "PH_CTL_Items"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemGalery" DROP CONSTRAINT "FK_3f83b80c335a2e7d7d014351bc8"
        `);
    await queryRunner.query(`
            DROP TABLE "PH_LST_ItemGalery"
        `);
  }
}
