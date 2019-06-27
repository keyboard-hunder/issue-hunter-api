import { PrimaryColumn, Entity, Column } from 'typeorm';

@Entity('User')
export class UserEntity {

  @PrimaryColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  avatarUrl: string;

  @Column()
  accessToken: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

}
