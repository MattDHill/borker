import { MigrationInterface, QueryRunner } from 'typeorm'
export class Init1559574348868 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "orphans" ("txid" text PRIMARY KEY NOT NULL, "created_at" datetime NOT NULL, "block_height" bigint NOT NULL, "nonce" integer NOT NULL, "position" integer NOT NULL, "content" text NOT NULL, "mentions" text, "sender_address" text)`)
        await queryRunner.query(`CREATE INDEX "IDX_4149b5d28a9d574cb35ac0b880" ON "orphans" ("created_at") `)
        await queryRunner.query(`CREATE INDEX "IDX_08f49bf2cacd532e2e10eb5779" ON "orphans" ("block_height") `)
        await queryRunner.query(`CREATE INDEX "IDX_2ccda451e12bc68c5af8d3c9b4" ON "orphans" ("position") `)
        await queryRunner.query(`CREATE INDEX "IDX_d8dc419b6ee03babf580a7b3c3" ON "orphans" ("sender_address") `)
        await queryRunner.query(`CREATE TABLE "users" ("address" text PRIMARY KEY NOT NULL, "created_at" datetime NOT NULL, "birth_block" bigint NOT NULL, "name" text NOT NULL, "bio" text, "avatar_link" text)`)
        await queryRunner.query(`CREATE INDEX "IDX_1b4832240d11291453c40c3281" ON "users" ("birth_block") `)
        await queryRunner.query(`CREATE TABLE "tags" ("name" text PRIMARY KEY NOT NULL)`)
        await queryRunner.query(`CREATE TABLE "borks" ("txid" text PRIMARY KEY NOT NULL, "created_at" datetime NOT NULL, "deleted_at" datetime, "nonce" integer NOT NULL, "position" integer NOT NULL, "type" text NOT NULL, "content" text, "parent_txid" text, "sender_address" text)`)
        await queryRunner.query(`CREATE INDEX "IDX_225c8d7a66d2e44dc46bff2b89" ON "borks" ("created_at") `)
        await queryRunner.query(`CREATE INDEX "IDX_f1d79da8758a51316b819cc38a" ON "borks" ("position") `)
        await queryRunner.query(`CREATE INDEX "IDX_b556e61d2d0907016c8ee58465" ON "borks" ("type") `)
        await queryRunner.query(`CREATE INDEX "IDX_2873c3b06729583654b6b70fe9" ON "borks" ("parent_txid") `)
        await queryRunner.query(`CREATE INDEX "IDX_6d695ba01f87a7cefa3617a85c" ON "borks" ("sender_address") `)
        await queryRunner.query(`CREATE TABLE "tx_blocks" ("height" bigint PRIMARY KEY NOT NULL, "hash" text NOT NULL, "is_cleaning" boolean NOT NULL DEFAULT (0), CONSTRAINT "UQ_d16046b3c22e0ac37b9367ba8d4" UNIQUE ("hash"))`)
        await queryRunner.query(`CREATE INDEX "IDX_d16046b3c22e0ac37b9367ba8d" ON "tx_blocks" ("hash") `)
        await queryRunner.query(`CREATE TABLE "utxos" ("txid" text NOT NULL, "position" integer NOT NULL, "block_height" bigint NOT NULL, "address" text NOT NULL, "value" bigint NOT NULL, "raw" text NOT NULL, PRIMARY KEY ("txid", "position"))`)
        await queryRunner.query(`CREATE INDEX "IDX_f4ddf5596761915d4415c18040" ON "utxos" ("block_height") `)
        await queryRunner.query(`CREATE INDEX "IDX_7ee003620e5c4dc41c8020c3a4" ON "utxos" ("address") `)
        await queryRunner.query(`CREATE TABLE "follows" ("followed_address" text NOT NULL, "follower_address" text NOT NULL, PRIMARY KEY ("followed_address", "follower_address"))`)
        await queryRunner.query(`CREATE TABLE "blocks" ("blocked_address" text NOT NULL, "blocker_address" text NOT NULL, PRIMARY KEY ("blocked_address", "blocker_address"))`)
        await queryRunner.query(`CREATE TABLE "likes" ("user_address" text NOT NULL, "bork_txid" text NOT NULL, PRIMARY KEY ("user_address", "bork_txid"))`)
        await queryRunner.query(`CREATE TABLE "flags" ("user_address" text NOT NULL, "bork_txid" text NOT NULL, PRIMARY KEY ("user_address", "bork_txid"))`)
        await queryRunner.query(`CREATE TABLE "mentions" ("user_address" text NOT NULL, "bork_txid" text NOT NULL, PRIMARY KEY ("user_address", "bork_txid"))`)
        await queryRunner.query(`CREATE TABLE "bork_tags" ("tag_name" text NOT NULL, "bork_txid" text NOT NULL, PRIMARY KEY ("tag_name", "bork_txid"))`)
        await queryRunner.query(`DROP INDEX "IDX_4149b5d28a9d574cb35ac0b880"`)
        await queryRunner.query(`DROP INDEX "IDX_08f49bf2cacd532e2e10eb5779"`)
        await queryRunner.query(`DROP INDEX "IDX_2ccda451e12bc68c5af8d3c9b4"`)
        await queryRunner.query(`DROP INDEX "IDX_d8dc419b6ee03babf580a7b3c3"`)
        await queryRunner.query(`CREATE TABLE "temporary_orphans" ("txid" text PRIMARY KEY NOT NULL, "created_at" datetime NOT NULL, "block_height" bigint NOT NULL, "nonce" integer NOT NULL, "position" integer NOT NULL, "content" text NOT NULL, "mentions" text, "sender_address" text, CONSTRAINT "FK_d8dc419b6ee03babf580a7b3c30" FOREIGN KEY ("sender_address") REFERENCES "users" ("address"))`)
        await queryRunner.query(`INSERT INTO "temporary_orphans"("txid", "created_at", "block_height", "nonce", "position", "content", "mentions", "sender_address") SELECT "txid", "created_at", "block_height", "nonce", "position", "content", "mentions", "sender_address" FROM "orphans"`)
        await queryRunner.query(`DROP TABLE "orphans"`)
        await queryRunner.query(`ALTER TABLE "temporary_orphans" RENAME TO "orphans"`)
        await queryRunner.query(`CREATE INDEX "IDX_4149b5d28a9d574cb35ac0b880" ON "orphans" ("created_at") `)
        await queryRunner.query(`CREATE INDEX "IDX_08f49bf2cacd532e2e10eb5779" ON "orphans" ("block_height") `)
        await queryRunner.query(`CREATE INDEX "IDX_2ccda451e12bc68c5af8d3c9b4" ON "orphans" ("position") `)
        await queryRunner.query(`CREATE INDEX "IDX_d8dc419b6ee03babf580a7b3c3" ON "orphans" ("sender_address") `)
        await queryRunner.query(`DROP INDEX "IDX_225c8d7a66d2e44dc46bff2b89"`)
        await queryRunner.query(`DROP INDEX "IDX_f1d79da8758a51316b819cc38a"`)
        await queryRunner.query(`DROP INDEX "IDX_b556e61d2d0907016c8ee58465"`)
        await queryRunner.query(`DROP INDEX "IDX_2873c3b06729583654b6b70fe9"`)
        await queryRunner.query(`DROP INDEX "IDX_6d695ba01f87a7cefa3617a85c"`)
        await queryRunner.query(`CREATE TABLE "temporary_borks" ("txid" text PRIMARY KEY NOT NULL, "created_at" datetime NOT NULL, "deleted_at" datetime, "nonce" integer NOT NULL, "position" integer NOT NULL, "type" text NOT NULL, "content" text, "parent_txid" text, "sender_address" text, CONSTRAINT "FK_2873c3b06729583654b6b70fe97" FOREIGN KEY ("parent_txid") REFERENCES "borks" ("txid"), CONSTRAINT "FK_6d695ba01f87a7cefa3617a85cd" FOREIGN KEY ("sender_address") REFERENCES "users" ("address"))`)
        await queryRunner.query(`INSERT INTO "temporary_borks"("txid", "created_at", "deleted_at", "nonce", "position", "type", "content", "parent_txid", "sender_address") SELECT "txid", "created_at", "deleted_at", "nonce", "position", "type", "content", "parent_txid", "sender_address" FROM "borks"`)
        await queryRunner.query(`DROP TABLE "borks"`)
        await queryRunner.query(`ALTER TABLE "temporary_borks" RENAME TO "borks"`)
        await queryRunner.query(`CREATE INDEX "IDX_225c8d7a66d2e44dc46bff2b89" ON "borks" ("created_at") `)
        await queryRunner.query(`CREATE INDEX "IDX_f1d79da8758a51316b819cc38a" ON "borks" ("position") `)
        await queryRunner.query(`CREATE INDEX "IDX_b556e61d2d0907016c8ee58465" ON "borks" ("type") `)
        await queryRunner.query(`CREATE INDEX "IDX_2873c3b06729583654b6b70fe9" ON "borks" ("parent_txid") `)
        await queryRunner.query(`CREATE INDEX "IDX_6d695ba01f87a7cefa3617a85c" ON "borks" ("sender_address") `)
        await queryRunner.query(`CREATE TABLE "temporary_follows" ("followed_address" text NOT NULL, "follower_address" text NOT NULL, CONSTRAINT "FK_896ecc3e22c5f3b9fe89e5f6699" FOREIGN KEY ("followed_address") REFERENCES "users" ("address") ON DELETE CASCADE, CONSTRAINT "FK_735aa5a2ac167c99c74ee24650e" FOREIGN KEY ("follower_address") REFERENCES "users" ("address") ON DELETE CASCADE, PRIMARY KEY ("followed_address", "follower_address"))`)
        await queryRunner.query(`INSERT INTO "temporary_follows"("followed_address", "follower_address") SELECT "followed_address", "follower_address" FROM "follows"`)
        await queryRunner.query(`DROP TABLE "follows"`)
        await queryRunner.query(`ALTER TABLE "temporary_follows" RENAME TO "follows"`)
        await queryRunner.query(`CREATE TABLE "temporary_blocks" ("blocked_address" text NOT NULL, "blocker_address" text NOT NULL, CONSTRAINT "FK_ecba0d996258678e9780ed88b70" FOREIGN KEY ("blocked_address") REFERENCES "users" ("address") ON DELETE CASCADE, CONSTRAINT "FK_de6aa57933625d2ce35c1650908" FOREIGN KEY ("blocker_address") REFERENCES "users" ("address") ON DELETE CASCADE, PRIMARY KEY ("blocked_address", "blocker_address"))`)
        await queryRunner.query(`INSERT INTO "temporary_blocks"("blocked_address", "blocker_address") SELECT "blocked_address", "blocker_address" FROM "blocks"`)
        await queryRunner.query(`DROP TABLE "blocks"`)
        await queryRunner.query(`ALTER TABLE "temporary_blocks" RENAME TO "blocks"`)
        await queryRunner.query(`CREATE TABLE "temporary_likes" ("user_address" text NOT NULL, "bork_txid" text NOT NULL, CONSTRAINT "FK_9b4c20f1f1493294a764604d8ac" FOREIGN KEY ("user_address") REFERENCES "users" ("address") ON DELETE CASCADE, CONSTRAINT "FK_08c3dede86258db9edebc08e2f5" FOREIGN KEY ("bork_txid") REFERENCES "borks" ("txid") ON DELETE CASCADE, PRIMARY KEY ("user_address", "bork_txid"))`)
        await queryRunner.query(`INSERT INTO "temporary_likes"("user_address", "bork_txid") SELECT "user_address", "bork_txid" FROM "likes"`)
        await queryRunner.query(`DROP TABLE "likes"`)
        await queryRunner.query(`ALTER TABLE "temporary_likes" RENAME TO "likes"`)
        await queryRunner.query(`CREATE TABLE "temporary_flags" ("user_address" text NOT NULL, "bork_txid" text NOT NULL, CONSTRAINT "FK_77d950f40f013776b34106746f9" FOREIGN KEY ("user_address") REFERENCES "users" ("address") ON DELETE CASCADE, CONSTRAINT "FK_5d1c2dfaf30a9624a0146b90437" FOREIGN KEY ("bork_txid") REFERENCES "borks" ("txid") ON DELETE CASCADE, PRIMARY KEY ("user_address", "bork_txid"))`)
        await queryRunner.query(`INSERT INTO "temporary_flags"("user_address", "bork_txid") SELECT "user_address", "bork_txid" FROM "flags"`)
        await queryRunner.query(`DROP TABLE "flags"`)
        await queryRunner.query(`ALTER TABLE "temporary_flags" RENAME TO "flags"`)
        await queryRunner.query(`CREATE TABLE "temporary_mentions" ("user_address" text NOT NULL, "bork_txid" text NOT NULL, CONSTRAINT "FK_73bf803442939c9f00e57958b3f" FOREIGN KEY ("user_address") REFERENCES "users" ("address") ON DELETE CASCADE, CONSTRAINT "FK_62b455467870e6f35a1d3d1e041" FOREIGN KEY ("bork_txid") REFERENCES "borks" ("txid") ON DELETE CASCADE, PRIMARY KEY ("user_address", "bork_txid"))`)
        await queryRunner.query(`INSERT INTO "temporary_mentions"("user_address", "bork_txid") SELECT "user_address", "bork_txid" FROM "mentions"`)
        await queryRunner.query(`DROP TABLE "mentions"`)
        await queryRunner.query(`ALTER TABLE "temporary_mentions" RENAME TO "mentions"`)
        await queryRunner.query(`CREATE TABLE "temporary_bork_tags" ("tag_name" text NOT NULL, "bork_txid" text NOT NULL, CONSTRAINT "FK_dd1d937e3d78d4e405b6f3f41e6" FOREIGN KEY ("tag_name") REFERENCES "tags" ("name") ON DELETE CASCADE, CONSTRAINT "FK_1a4840b35d90022c563a37326ff" FOREIGN KEY ("bork_txid") REFERENCES "borks" ("txid") ON DELETE CASCADE, PRIMARY KEY ("tag_name", "bork_txid"))`)
        await queryRunner.query(`INSERT INTO "temporary_bork_tags"("tag_name", "bork_txid") SELECT "tag_name", "bork_txid" FROM "bork_tags"`)
        await queryRunner.query(`DROP TABLE "bork_tags"`)
        await queryRunner.query(`ALTER TABLE "temporary_bork_tags" RENAME TO "bork_tags"`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "bork_tags" RENAME TO "temporary_bork_tags"`)
        await queryRunner.query(`CREATE TABLE "bork_tags" ("tag_name" text NOT NULL, "bork_txid" text NOT NULL, PRIMARY KEY ("tag_name", "bork_txid"))`)
        await queryRunner.query(`INSERT INTO "bork_tags"("tag_name", "bork_txid") SELECT "tag_name", "bork_txid" FROM "temporary_bork_tags"`)
        await queryRunner.query(`DROP TABLE "temporary_bork_tags"`)
        await queryRunner.query(`ALTER TABLE "mentions" RENAME TO "temporary_mentions"`)
        await queryRunner.query(`CREATE TABLE "mentions" ("user_address" text NOT NULL, "bork_txid" text NOT NULL, PRIMARY KEY ("user_address", "bork_txid"))`)
        await queryRunner.query(`INSERT INTO "mentions"("user_address", "bork_txid") SELECT "user_address", "bork_txid" FROM "temporary_mentions"`)
        await queryRunner.query(`DROP TABLE "temporary_mentions"`)
        await queryRunner.query(`ALTER TABLE "flags" RENAME TO "temporary_flags"`)
        await queryRunner.query(`CREATE TABLE "flags" ("user_address" text NOT NULL, "bork_txid" text NOT NULL, PRIMARY KEY ("user_address", "bork_txid"))`)
        await queryRunner.query(`INSERT INTO "flags"("user_address", "bork_txid") SELECT "user_address", "bork_txid" FROM "temporary_flags"`)
        await queryRunner.query(`DROP TABLE "temporary_flags"`)
        await queryRunner.query(`ALTER TABLE "likes" RENAME TO "temporary_likes"`)
        await queryRunner.query(`CREATE TABLE "likes" ("user_address" text NOT NULL, "bork_txid" text NOT NULL, PRIMARY KEY ("user_address", "bork_txid"))`)
        await queryRunner.query(`INSERT INTO "likes"("user_address", "bork_txid") SELECT "user_address", "bork_txid" FROM "temporary_likes"`)
        await queryRunner.query(`DROP TABLE "temporary_likes"`)
        await queryRunner.query(`ALTER TABLE "blocks" RENAME TO "temporary_blocks"`)
        await queryRunner.query(`CREATE TABLE "blocks" ("blocked_address" text NOT NULL, "blocker_address" text NOT NULL, PRIMARY KEY ("blocked_address", "blocker_address"))`)
        await queryRunner.query(`INSERT INTO "blocks"("blocked_address", "blocker_address") SELECT "blocked_address", "blocker_address" FROM "temporary_blocks"`)
        await queryRunner.query(`DROP TABLE "temporary_blocks"`)
        await queryRunner.query(`ALTER TABLE "follows" RENAME TO "temporary_follows"`)
        await queryRunner.query(`CREATE TABLE "follows" ("followed_address" text NOT NULL, "follower_address" text NOT NULL, PRIMARY KEY ("followed_address", "follower_address"))`)
        await queryRunner.query(`INSERT INTO "follows"("followed_address", "follower_address") SELECT "followed_address", "follower_address" FROM "temporary_follows"`)
        await queryRunner.query(`DROP TABLE "temporary_follows"`)
        await queryRunner.query(`DROP INDEX "IDX_6d695ba01f87a7cefa3617a85c"`)
        await queryRunner.query(`DROP INDEX "IDX_2873c3b06729583654b6b70fe9"`)
        await queryRunner.query(`DROP INDEX "IDX_b556e61d2d0907016c8ee58465"`)
        await queryRunner.query(`DROP INDEX "IDX_f1d79da8758a51316b819cc38a"`)
        await queryRunner.query(`DROP INDEX "IDX_225c8d7a66d2e44dc46bff2b89"`)
        await queryRunner.query(`ALTER TABLE "borks" RENAME TO "temporary_borks"`)
        await queryRunner.query(`CREATE TABLE "borks" ("txid" text PRIMARY KEY NOT NULL, "created_at" datetime NOT NULL, "deleted_at" datetime, "nonce" integer NOT NULL, "position" integer NOT NULL, "type" text NOT NULL, "content" text, "parent_txid" text, "sender_address" text)`)
        await queryRunner.query(`INSERT INTO "borks"("txid", "created_at", "deleted_at", "nonce", "position", "type", "content", "parent_txid", "sender_address") SELECT "txid", "created_at", "deleted_at", "nonce", "position", "type", "content", "parent_txid", "sender_address" FROM "temporary_borks"`)
        await queryRunner.query(`DROP TABLE "temporary_borks"`)
        await queryRunner.query(`CREATE INDEX "IDX_6d695ba01f87a7cefa3617a85c" ON "borks" ("sender_address") `)
        await queryRunner.query(`CREATE INDEX "IDX_2873c3b06729583654b6b70fe9" ON "borks" ("parent_txid") `)
        await queryRunner.query(`CREATE INDEX "IDX_b556e61d2d0907016c8ee58465" ON "borks" ("type") `)
        await queryRunner.query(`CREATE INDEX "IDX_f1d79da8758a51316b819cc38a" ON "borks" ("position") `)
        await queryRunner.query(`CREATE INDEX "IDX_225c8d7a66d2e44dc46bff2b89" ON "borks" ("created_at") `)
        await queryRunner.query(`DROP INDEX "IDX_d8dc419b6ee03babf580a7b3c3"`)
        await queryRunner.query(`DROP INDEX "IDX_2ccda451e12bc68c5af8d3c9b4"`)
        await queryRunner.query(`DROP INDEX "IDX_08f49bf2cacd532e2e10eb5779"`)
        await queryRunner.query(`DROP INDEX "IDX_4149b5d28a9d574cb35ac0b880"`)
        await queryRunner.query(`ALTER TABLE "orphans" RENAME TO "temporary_orphans"`)
        await queryRunner.query(`CREATE TABLE "orphans" ("txid" text PRIMARY KEY NOT NULL, "created_at" datetime NOT NULL, "block_height" bigint NOT NULL, "nonce" integer NOT NULL, "position" integer NOT NULL, "content" text NOT NULL, "mentions" text, "sender_address" text)`)
        await queryRunner.query(`INSERT INTO "orphans"("txid", "created_at", "block_height", "nonce", "position", "content", "mentions", "sender_address") SELECT "txid", "created_at", "block_height", "nonce", "position", "content", "mentions", "sender_address" FROM "temporary_orphans"`)
        await queryRunner.query(`DROP TABLE "temporary_orphans"`)
        await queryRunner.query(`CREATE INDEX "IDX_d8dc419b6ee03babf580a7b3c3" ON "orphans" ("sender_address") `)
        await queryRunner.query(`CREATE INDEX "IDX_2ccda451e12bc68c5af8d3c9b4" ON "orphans" ("position") `)
        await queryRunner.query(`CREATE INDEX "IDX_08f49bf2cacd532e2e10eb5779" ON "orphans" ("block_height") `)
        await queryRunner.query(`CREATE INDEX "IDX_4149b5d28a9d574cb35ac0b880" ON "orphans" ("created_at") `)
        await queryRunner.query(`DROP TABLE "bork_tags"`)
        await queryRunner.query(`DROP TABLE "mentions"`)
        await queryRunner.query(`DROP TABLE "flags"`)
        await queryRunner.query(`DROP TABLE "likes"`)
        await queryRunner.query(`DROP TABLE "blocks"`)
        await queryRunner.query(`DROP TABLE "follows"`)
        await queryRunner.query(`DROP INDEX "IDX_7ee003620e5c4dc41c8020c3a4"`)
        await queryRunner.query(`DROP INDEX "IDX_f4ddf5596761915d4415c18040"`)
        await queryRunner.query(`DROP TABLE "utxos"`)
        await queryRunner.query(`DROP INDEX "IDX_d16046b3c22e0ac37b9367ba8d"`)
        await queryRunner.query(`DROP TABLE "tx_blocks"`)
        await queryRunner.query(`DROP INDEX "IDX_6d695ba01f87a7cefa3617a85c"`)
        await queryRunner.query(`DROP INDEX "IDX_2873c3b06729583654b6b70fe9"`)
        await queryRunner.query(`DROP INDEX "IDX_b556e61d2d0907016c8ee58465"`)
        await queryRunner.query(`DROP INDEX "IDX_f1d79da8758a51316b819cc38a"`)
        await queryRunner.query(`DROP INDEX "IDX_225c8d7a66d2e44dc46bff2b89"`)
        await queryRunner.query(`DROP TABLE "borks"`)
        await queryRunner.query(`DROP TABLE "tags"`)
        await queryRunner.query(`DROP INDEX "IDX_1b4832240d11291453c40c3281"`)
        await queryRunner.query(`DROP TABLE "users"`)
        await queryRunner.query(`DROP INDEX "IDX_d8dc419b6ee03babf580a7b3c3"`)
        await queryRunner.query(`DROP INDEX "IDX_2ccda451e12bc68c5af8d3c9b4"`)
        await queryRunner.query(`DROP INDEX "IDX_08f49bf2cacd532e2e10eb5779"`)
        await queryRunner.query(`DROP INDEX "IDX_4149b5d28a9d574cb35ac0b880"`)
        await queryRunner.query(`DROP TABLE "orphans"`)
    }

}