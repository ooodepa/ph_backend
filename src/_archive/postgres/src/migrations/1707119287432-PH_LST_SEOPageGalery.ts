import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHLSTSEOPageGalery1707119287432 implements MigrationInterface {
  name = 'PHLSTSEOPageGalery1707119287432';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_LST_SEOPageGalery" (
                "ph_id" SERIAL NOT NULL,
                "ph_SEOPageCode" uuid NOT NULL,
                "ph_photoUrl" character varying(2000) NOT NULL,
                CONSTRAINT "PK_25979e5a3ceb4d9be644cc55688" PRIMARY KEY ("ph_id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_LST_SEOPageGalery"
            ADD CONSTRAINT "FK_9c287ec219ba8efb67d89ed9617" FOREIGN KEY ("ph_SEOPageCode") REFERENCES "PH_CTL_SEOPages"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "PH_LST_SEOPageGalery" DROP CONSTRAINT "FK_9c287ec219ba8efb67d89ed9617"
        `);
    await queryRunner.query(`
            DROP TABLE "PH_LST_SEOPageGalery"
        `);
  }
}
