import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHCTLLanguages1707051738510 implements MigrationInterface {
  name = 'PHCTLLanguages1707051738510';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_CTL_Languages" (
                "ph_code" SERIAL NOT NULL,
                "ph_description" character varying(32) NOT NULL,
                CONSTRAINT "PK_9c25514c4a4622f6f3171a79b48" PRIMARY KEY ("ph_code")
            )
        `);

    await queryRunner.query(`
            INSERT INTO "PH_CTL_Languages"
            ("ph_code", "ph_description")
            VALUES
            (1, 'EN'),
            (2, 'TR'),
            (3, 'BY'),
            (4, 'RU')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "PH_CTL_Languages"
        `);
  }
}
