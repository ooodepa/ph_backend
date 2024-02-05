import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHCTLSitemapChangefreq1706993412033 implements MigrationInterface {
  name = 'PHCTLSitemapChangefreq1706993412033';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_CTL_SitemapChangefreq" (
                "ph_code" SERIAL NOT NULL,
                "ph_description" character varying(32) NOT NULL,
                "ph_value" character varying(16) NOT NULL,
                CONSTRAINT "PK_891b14762b131d61245fad3dee6" PRIMARY KEY ("ph_code")
            )
        `);

    await queryRunner.query(`
            INSERT INTO "PH_CTL_SitemapChangefreq"
            ("ph_code", "ph_description", "ph_value")
            VALUES
            (1, 'Always update', 'always'),
            (2, 'Update after 1 h', 'hourly'),
            (3, 'Update after 24 h', 'daily'),
            (4, 'Update after 168 h (7d)', 'weekly'),
            (5, 'Update after ~5208 h (1m)', 'monthly'),
            (6, 'Update after 1 year', 'yearly'),
            (7, 'Never update', 'never')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "PH_CTL_SitemapChangefreq"
        `);
  }
}
