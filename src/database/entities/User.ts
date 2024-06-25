import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "dev" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 45 })
  title: string | null;
}
