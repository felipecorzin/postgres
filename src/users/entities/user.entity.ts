import { Column, DeleteDateColumn, Entity } from "typeorm";
import { Role } from '../../common/enums/rol.enum';


@Entity()
export class User {
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;
  
  @Column({ type: 'enum', enum: Role, default: Role.ADMIN })
  role: Role;
  
  @DeleteDateColumn()
  deletedAt: Date;
}

