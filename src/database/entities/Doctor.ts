import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("doctor", { schema: "dev" })
export class Doctor {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 50 })
  name: string;

  @Column("int", { name: "specilization_id" })
  specilizationId: number;

  @Column("varchar", { name: "email", nullable: true, length: 30 })
  email: string | null;

  @Column("varchar", { name: "phone_number", nullable: true, length: 20 })
  phoneNumber: string | null;

  @Column("bit", { name: "is_deleted", default: () => "'b'0''" })
  isDeleted: boolean;
}
