import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PH_CTL_Languages')
export class PhCtlLanguageEntity {
  @PrimaryGeneratedColumn()
  ph_code: number;

  @Column({ length: 32 })
  ph_description: string;
}
