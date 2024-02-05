import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PhLstSeoPageGaleryEntity } from './ph_lst_seopagesgalery.entity';
import { PhCtlLanguageEntity } from '../../ph_ctl_languages/entities/ph_ctl_language.entity';
import { PhCtlSitemapChangefreqEntity } from '../../ph_ctl_sitemap-changefreq/entities/ph_ctl_sitemap-changefreq.entity';

@Entity('PH_CTL_SEOPages')
export class PhCtlSeopageEntity {
  @PrimaryGeneratedColumn('uuid')
  ph_code: string;

  @Column({ length: 512 })
  ph_description: string;

  @Index('UNI_ctlSEOPages_HTMLTitle', { unique: true })
  @Column({ length: 512 })
  ph_HTMLTitle: string;

  @Index('UNI_ctlSEOPages_HTMLDescription', { unique: true })
  @Column({ length: 1024 })
  ph_HTMLDescription: string;

  @Column({ length: 1024 })
  ph_HTMLKeywords: string;

  @Column({ length: 8 })
  ph_HTMLLang: string;

  @ManyToOne(() => PhCtlLanguageEntity, (e: PhCtlLanguageEntity) => e.ph_code, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ph_languageCode' })
  @Column()
  ph_languageCode: number;

  @ManyToOne(
    () => PhCtlSitemapChangefreqEntity,
    (e: PhCtlSitemapChangefreqEntity) => e.ph_code,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'ph_sitemapChangefreqCode' })
  @Column()
  ph_sitemapChangefreqCode: number;

  @Column({ type: 'float' })
  ph_sitemapPriority: number;

  @Index('UNI_ctlSEOPages_sitemapLoc', { unique: true })
  @Column({ length: 2000 })
  ph_sitemapLoc: string;

  @Column()
  ph_sitemapLastmod: Date;

  @OneToMany(
    () => PhLstSeoPageGaleryEntity,
    (e: PhLstSeoPageGaleryEntity) => e.ph_SEOPageCode,
  )
  @JoinColumn({ name: 'ph_code' })
  ph_SEOPageGalery: PhLstSeoPageGaleryEntity[];
}
