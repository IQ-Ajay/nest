import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("surgery", { schema: "dev" })
export class Surgery {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "patient_id", nullable: true })
  patientId: number | null;

  @Column("int", { name: "doctor_id", nullable: true })
  doctorId: number | null;

  @Column("date", { name: "date", nullable: true })
  date: string | null;

  @Column("time", { name: "time", nullable: true })
  time: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("bit", { name: "is_deleted", default: () => "'b'0''" })
  isDeleted: boolean;
}
