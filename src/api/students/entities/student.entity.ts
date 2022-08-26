import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Entities } from '../../common/enums'
import { Group } from '../../groups/entities/group.entity'
import { User } from '../../users/entities/user.entity'
import { Course } from '../../courses/entities/course.entity'
import { GradeHistory } from '../../grades-history/entities/grades-history.entity'
import { Vote } from '../../voting/entities/voting.entity'
import { Grade } from '../../grades/entities/grade.entity'

@Entity({ name: Entities.STUDENTS })
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 10, nullable: false })
  dateOfBirth: string

  @Column({ type: 'varchar', length: 20, nullable: false })
  orderNumber: string

  @Column({ type: 'varchar', length: 8, nullable: false })
  edeboId: string

  @Column({ type: 'boolean', nullable: false })
  isFullTime: boolean

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created: Date

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date

  @OneToMany(() => Grade, (grade) => grade.student, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  grades: Grade[]

  @ManyToOne(() => Group, (group) => group.students, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  group: Group

  @OneToOne(() => User, (user) => user.id, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn()
  user: User

  @ManyToMany(() => Course, (course) => course.students, { onDelete: 'SET NULL' })
  courses: Course[]

  @OneToMany(() => GradeHistory, (gradeHistory) => gradeHistory.student, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  gradesHistories: GradeHistory[]

  @ManyToMany(() => Vote, (vote) => vote.students, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinTable()
  votes: Vote[]
}
