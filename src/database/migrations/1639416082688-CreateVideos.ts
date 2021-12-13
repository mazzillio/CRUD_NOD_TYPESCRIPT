import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateVideos1639416082688 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"Videos",
                columns:[
                    {
                        name:"id",
                        type:"varchar",
    
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type:"varchar",
                        isUnique:true
                    },
                    {
                        name:"description",
                        type:"varchar"
                    },
                    {
                        name:"category_id",
                        type:"varchar"
                    },
                    {
                        name:"duration",
                        type:"numeric"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ],
                foreignKeys:[
                    {
                        name:"FK_category",
                        columnNames:["category_id"],
                        referencedTableName:"categories",
                        referencedColumnNames:["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Videos")
    }

}
