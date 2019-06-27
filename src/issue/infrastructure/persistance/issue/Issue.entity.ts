import { PrimaryColumn, Entity, Column } from 'typeorm';

@Entity('Issue')
export class IssueEntity {

  @PrimaryColumn()
  id: number;

  @Column()
  state: string;

  @Column()
  category: string;

  @Column()
  githubIssueNumber: number;

  @Column()
  githubRepositoryFullName: string;

  @Column()
  githubTitle: string;

  @Column()
  githubBody: string;

  @Column()
  klaytnId: number;

  @Column()
  klaytnPrice: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

}
