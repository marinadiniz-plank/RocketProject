import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMigrations1682021382064 implements MigrationInterface {
    name = 'CreateMigrations1682021382064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "crewman" ("id" SERIAL NOT NULL, "name" character varying NOT NULL,  "patent" character varying NOT NULL, CONSTRAINT "PK_4fb6d9687691fd6b62b98a62955" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rocket" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_89b0efae402998623e1367aa34a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crew" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cc72b429996b3476dbaac59f1c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "launch" ("id" SERIAL NOT NULL, "launchCode" character varying NOT NULL, "date" character varying NOT NULL, "success" boolean NOT NULL, "rocket_id" integer, "crew_id" integer, CONSTRAINT "REL_968817f025629bca18fe3f56bb" UNIQUE ("rocket_id"), CONSTRAINT "REL_3913e7efe32c3b5394fdcb7379" UNIQUE ("crew_id"), CONSTRAINT "PK_0efd83695074312cab129ff59f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crew_crewman" ("crewId" integer NOT NULL, "crewmanId" integer NOT NULL, CONSTRAINT "PK_72f5b4c0b353f409d8088ee7835" PRIMARY KEY ("crewId", "crewmanId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1a360a675365254b4c18f44bf6" ON "crew_crewman" ("crewId") `);
        await queryRunner.query(`CREATE INDEX "IDX_50e00efe4bcd74fc76fdad58f1" ON "crew_crewman" ("crewmanId") `);
        await queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_968817f025629bca18fe3f56bba" FOREIGN KEY ("rocket_id") REFERENCES "rocket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_3913e7efe32c3b5394fdcb7379e" FOREIGN KEY ("crew_id") REFERENCES "crew"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crew_crewman" ADD CONSTRAINT "FK_1a360a675365254b4c18f44bf6d" FOREIGN KEY ("crewId") REFERENCES "crew"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "crew_crewman" ADD CONSTRAINT "FK_50e00efe4bcd74fc76fdad58f12" FOREIGN KEY ("crewmanId") REFERENCES "crewman"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crew_crewman" DROP CONSTRAINT "FK_50e00efe4bcd74fc76fdad58f12"`);
        await queryRunner.query(`ALTER TABLE "crew_crewman" DROP CONSTRAINT "FK_1a360a675365254b4c18f44bf6d"`);
        await queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_3913e7efe32c3b5394fdcb7379e"`);
        await queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_968817f025629bca18fe3f56bba"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_50e00efe4bcd74fc76fdad58f1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1a360a675365254b4c18f44bf6"`);
        await queryRunner.query(`DROP TABLE "crew_crewman"`);
        await queryRunner.query(`DROP TABLE "launch"`);
        await queryRunner.query(`DROP TABLE "crew"`);
        await queryRunner.query(`DROP TABLE "rocket"`);
        await queryRunner.query(`DROP TABLE "crewman"`);
    }

}
