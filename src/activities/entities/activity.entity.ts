import { Column,CreateDateColumn,DeleteDateColumn,
    Entity,JoinColumn,ManyToOne} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Activity {

    // @PrimaryGeneratedColumn()
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    title: string;

    @Column()
    desc: string;

    @Column()
    date: string;

    @Column()
    time: string;

    @Column()
    img: string;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userEmail', referencedColumnName: 'email',  })
    user: User;
  
    @Column()
    userEmail: string;
}

