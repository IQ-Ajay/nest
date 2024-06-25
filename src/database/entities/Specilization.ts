import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("specilization", { schema: "dev" })
export class Specilization {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 50 })
  name: string | null;
}
