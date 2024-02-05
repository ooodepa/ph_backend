import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHLSTItemSEOPages1707125711488 implements MigrationInterface {
  name = 'PHLSTItemSEOPages1707125711488';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_LST_ItemSEOPages" (
                "ph_id" SERIAL NOT NULL,
                "ph_itemCode" uuid NOT NULL,
                "ph_SEOPageCode" uuid NOT NULL,
                CONSTRAINT "PK_d46f90dbc9cfe35ec359edb87e2" PRIMARY KEY ("ph_id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemSEOPages"
            ADD CONSTRAINT "FK_e2fb2645b278ef8459abcb75625" FOREIGN KEY ("ph_itemCode") REFERENCES "PH_CTL_Items"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemSEOPages"
            ADD CONSTRAINT "FK_561c460df699b26d75382350e91" FOREIGN KEY ("ph_SEOPageCode") REFERENCES "PH_CTL_SEOPages"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemSEOPages" DROP CONSTRAINT "FK_561c460df699b26d75382350e91"
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_ItemSEOPages" DROP CONSTRAINT "FK_e2fb2645b278ef8459abcb75625"
        `);
    await queryRunner.query(`
            DROP TABLE "PH_LST_ItemSEOPages"
        `);
  }
}
