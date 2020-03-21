import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  BaseEntity
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Article extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  date: Date;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  articleText: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ default: false })
  isPublished: boolean;

  @Field()
  @Column()
  author: string;
}
