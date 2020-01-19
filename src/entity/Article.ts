import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Article extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  date: Date;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  articleText: string;

  @Field()
  @Column()
  author: string;

  @Column()
  password: string;
}
