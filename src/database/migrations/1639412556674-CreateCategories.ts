import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1639412556674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"categories",
                columns:[
                    {
                        name:'id',
                        type:'varchar',
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type:"varchar(50)",
                        isUnique:true,
                        
                    },
                    {
                        name:"description",
                        type:"varchar(255)"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("categories")
    }

}
