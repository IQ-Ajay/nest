import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("patient", { schema: "dev" })
export class Patient {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("datetime", { name: "dob" })
  dob: Date;

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 20 })
  phone: string | null;

  @Column("bit", { name: "is_deleted", default: () => "'b'0''" })
  isDeleted: boolean;
}
