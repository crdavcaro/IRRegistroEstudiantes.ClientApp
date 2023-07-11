import { Profesor } from "src/app/profesor/interfaces/profesor.interface";
import { Materia } from "./materia.interface";

export interface ProfesorMaterias {
  materia: Materia,
  profesor: Profesor
}
