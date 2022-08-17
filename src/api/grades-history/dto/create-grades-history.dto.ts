import { IsNumber, IsString, Max, Min } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateGradesHistoryDto {
  @IsNumber()
  @ApiProperty({ example: 3 })
  studentId: number

  @IsNumber()
  @ApiProperty({ example: 1 })
  courseId: number

  @IsNumber()
  @ApiProperty({ example: 1 })
  userChangedId: number

  @IsNumber()
  @Min(0)
  @Max(100)
  @ApiProperty({ example: 1 })
  grade: number

  @IsString()
  @ApiProperty({ example: 'Exam' })
  reasonOfChange: string
}
