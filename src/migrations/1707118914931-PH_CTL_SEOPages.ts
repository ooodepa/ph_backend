import { MigrationInterface, QueryRunner } from 'typeorm';

export class PHCTLSEOPages1707118914931 implements MigrationInterface {
  name = 'PHCTLSEOPages1707118914931';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "PH_CTL_SEOPages" (
                "ph_code" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "ph_description" character varying(512) NOT NULL,
                "ph_HTMLTitle" character varying(512) NOT NULL,
                "ph_HTMLDescription" character varying(1024) NOT NULL,
                "ph_HTMLKeywords" character varying(1024) NOT NULL,
                "ph_HTMLLang" character varying(8) NOT NULL,
                "ph_languageCode" integer NOT NULL,
                "ph_sitemapChangefreqCode" integer NOT NULL,
                "ph_sitemapPriority" double precision NOT NULL,
                "ph_sitemapLoc" character varying(2000) NOT NULL,
                "ph_sitemapLastmod" TIMESTAMP NOT NULL,
                CONSTRAINT "PK_36bb1f3ab4a74f926301691b894" PRIMARY KEY ("ph_code")
            )
        `);
    await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlSEOPages_HTMLTitle" ON "PH_CTL_SEOPages" ("ph_HTMLTitle")
        `);
    await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlSEOPages_HTMLDescription" ON "PH_CTL_SEOPages" ("ph_HTMLDescription")
        `);
    await queryRunner.query(`
            CREATE UNIQUE INDEX "UNI_ctlSEOPages_sitemapLoc" ON "PH_CTL_SEOPages" ("ph_sitemapLoc")
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_CTL_SEOPages"
            ADD CONSTRAINT "FK_efef72b98b4bd128dade9407091" FOREIGN KEY ("ph_languageCode") REFERENCES "PH_CTL_Languages"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_CTL_SEOPages"
            ADD CONSTRAINT "FK_95db32a3dd24a6aef09aa48782c" FOREIGN KEY ("ph_sitemapChangefreqCode") REFERENCES "PH_CTL_SitemapChangefreq"("ph_code") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "PH_CTL_SEOPages" DROP CONSTRAINT "FK_95db32a3dd24a6aef09aa48782c"
        `);
    await queryRunner.query(`
            ALTER TABLE "PH_CTL_SEOPages" DROP CONSTRAINT "FK_efef72b98b4bd128dade9407091"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."UNI_ctlSEOPages_sitemapLoc"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."UNI_ctlSEOPages_HTMLDescription"
        `);
    await queryRunner.query(`
            DROP INDEX "public"."UNI_ctlSEOPages_HTMLTitle"
        `);
    await queryRunner.query(`
            DROP TABLE "PH_CTL_SEOPages"
        `);
  }
}
