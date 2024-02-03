import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PH_CTL_SitemapChangefreq')
export class PhCtlSitemapChangefreqEntity {
  @PrimaryGeneratedColumn()
  ph_code: number;

  @Column({ length: 32 })
  ph_description: string;

  @Column({ length: 16 })
  ph_value: string;
}
