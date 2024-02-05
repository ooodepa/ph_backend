import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHCTLItemCharacteristics1707117456650
  implements MigrationInterface
{
  name = 'PHCTLItemCharacteristics1707117456650';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_CTL_ItemCharacteristics" (
                "ph_code" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "ph_description" character varying(32) NOT NULL,
                CONSTRAINT "PK_5f40d3ccef51c8b35565993f202" PRIMARY KEY ("ph_code")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "PH_CTL_ItemCharacteristics"
        `);
  }
}
