const items = document.getElementById('items')


const alumno1 = {
  name: 'Arregui, Thiago',
  asistencias: 4,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 4
}
const alumno2 = {
  name: 'Barletta, Milagros',
  asistencias: 0,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 0
}
const alumno3 = {
  name: 'Cerulli, Sofia',
  asistencias: 0,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 0
}
const alumno4 = {
  name: 'Cordoba, Renata',
  asistencias: 4,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 4
}
const alumno5 = {
  name: 'Infante, Nahiara',
  asistencias: 3,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 3
}
const alumno6 = {
  name: 'Farfan, Malena',
  asistencias: 4,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 4
}
const alumno7 = {
  name: 'Garcia, Florencia',
  asistencias: 0,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 0
}
const alumno8 = {
  name: 'Garrido, Ludmila',
  asistencias: 0,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 0
}
const alumno9 = {
  name: 'Giacobone, Joaquín',
  asistencias: 0,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 0
}
const alumno10 = {
  name: 'Guzman, Joaquín',
  asistencias: 0,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 0
}
const alumno11 = {
  name: 'Juarez, Luis Gustavo',
  asistencias: 3,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 3
}
const alumno12 = {
  name: 'Junco, Lucas',
  asistencias: 3,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 3
}
const alumno13 = {
  name: 'Ludueña, Uriel',
  asistencias: 4,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 4
}
const alumno14 = {
  name: 'Mele, Nehemias',
  asistencias: 2,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 2
}
const alumno15 = {
  name: 'Morua, Lucia',
  asistencias: 3,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 3
}
const alumno16 = {
  name: 'Passeri, Alma',
  asistencias: 4,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 4
}
const alumno17 = {
  name: 'Ponce, Santino',
  asistencias: 0,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 0
}
const alumno18 = {
  name: 'Quinteros, Facundo',
  asistencias: 4,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 4
}
const alumno19 = {
  name: 'Rodriguez, Marcos',
  asistencias: 4,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 4
}
const alumno20 = {
  name: 'Román, Luca',
  asistencias: 4,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 4
}
const alumno21 = {
  name: 'Rosales, Mia',
  asistencias: 3,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 3
}
const alumno22 = {
  name: 'Torres, Priscila',
  asistencias: 4,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 4
}
const alumno23 = {
  name: 'Zapias, Zoe',
  asistencias: 0,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 0
}
const alumno24 = {
  name: 'Brenni, Benjamin',
  asistencias: 3,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 3
}
const alumno25 = {
  name: 'Fernandez, Jenaro',
  asistencias: 1,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 1
}
const alumno26 = {
  name: 'Quiroga, Tomás',
  asistencias: 1,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 1
}
const alumno27 = {
  name: 'Chavez, Dilan',
  asistencias: 1,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 1
}
const alumno28 = {
  name: 'Cano, Zaira',
  asistencias: 1,
  modulos: 0,
  evaluaciones: 0,
  recuperatorios: 0,
  puntaje: 1
}



items.innerHTML = `
<tr>
  
  <td><i class="bi-trophy-fill"></i> ${alumno1.name}</td>
  <td>${alumno1.asistencias}</td>
  <td>${alumno1.modulos}</td>
  <td>${alumno1.evaluaciones}</td>
  <td>${alumno1.recuperatorios}</td>
  <td>${alumno1.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno4.name}</td>
  <td>${alumno4.asistencias}</td>
  <td>${alumno4.modulos}</td>
  <td>${alumno4.evaluaciones}</td>
  <td>${alumno4.recuperatorios}</td>
  <td>${alumno4.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno6.name}</td>
  <td>${alumno6.asistencias}</td>
  <td>${alumno6.modulos}</td>
  <td>${alumno6.evaluaciones}</td>
  <td>${alumno6.recuperatorios}</td>
  <td>${alumno6.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno13.name}</td>
  <td>${alumno13.asistencias}</td>
  <td>${alumno13.modulos}</td>
  <td>${alumno13.evaluaciones}</td>
  <td>${alumno13.recuperatorios}</td>
  <td>${alumno13.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno16.name}</td>
  <td>${alumno16.asistencias}</td>
  <td>${alumno16.modulos}</td>
  <td>${alumno16.evaluaciones}</td>
  <td>${alumno16.recuperatorios}</td>
  <td>${alumno16.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno18.name}</td>
  <td>${alumno18.asistencias}</td>
  <td>${alumno18.modulos}</td>
  <td>${alumno18.evaluaciones}</td>
  <td>${alumno18.recuperatorios}</td>
  <td>${alumno18.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno19.name}</td>
  <td>${alumno19.asistencias}</td>
  <td>${alumno19.modulos}</td>
  <td>${alumno19.evaluaciones}</td>
  <td>${alumno19.recuperatorios}</td>
  <td>${alumno19.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno20.name}</td>
  <td>${alumno20.asistencias}</td>
  <td>${alumno20.modulos}</td>
  <td>${alumno20.evaluaciones}</td>
  <td>${alumno20.recuperatorios}</td>
  <td>${alumno20.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno22.name}</td>
  <td>${alumno22.asistencias}</td>
  <td>${alumno22.modulos}</td>
  <td>${alumno22.evaluaciones}</td>
  <td>${alumno22.recuperatorios}</td>
  <td>${alumno22.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno24.name}</td>
  <td>${alumno24.asistencias}</td>
  <td>${alumno24.modulos}</td>
  <td>${alumno24.evaluaciones}</td>
  <td>${alumno24.recuperatorios}</td>
  <td>${alumno24.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno5.name}</td>
  <td>${alumno5.asistencias}</td>
  <td>${alumno5.modulos}</td>
  <td>${alumno5.evaluaciones}</td>
  <td>${alumno5.recuperatorios}</td>
  <td>${alumno5.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno11.name}</td>
  <td>${alumno11.asistencias}</td>
  <td>${alumno11.modulos}</td>
  <td>${alumno11.evaluaciones}</td>
  <td>${alumno11.recuperatorios}</td>
  <td>${alumno11.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno12.name}</td>
  <td>${alumno12.asistencias}</td>
  <td>${alumno12.modulos}</td>
  <td>${alumno12.evaluaciones}</td>
  <td>${alumno12.recuperatorios}</td>
  <td>${alumno12.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno15.name}</td>
  <td>${alumno15.asistencias}</td>
  <td>${alumno15.modulos}</td>
  <td>${alumno15.evaluaciones}</td>
  <td>${alumno15.recuperatorios}</td>
  <td>${alumno15.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno21.name}</td>
  <td>${alumno21.asistencias}</td>
  <td>${alumno21.modulos}</td>
  <td>${alumno21.evaluaciones}</td>
  <td>${alumno21.recuperatorios}</td>
  <td>${alumno21.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno14.name}</td>
  <td>${alumno14.asistencias}</td>
  <td>${alumno14.modulos}</td>
  <td>${alumno14.evaluaciones}</td>
  <td>${alumno14.recuperatorios}</td>
  <td>${alumno14.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno25.name}</td>
  <td>${alumno25.asistencias}</td>
  <td>${alumno25.modulos}</td>
  <td>${alumno25.evaluaciones}</td>
  <td>${alumno25.recuperatorios}</td>
  <td>${alumno25.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno26.name}</td>
  <td>${alumno26.asistencias}</td>
  <td>${alumno26.modulos}</td>
  <td>${alumno26.evaluaciones}</td>
  <td>${alumno26.recuperatorios}</td>
  <td>${alumno26.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno27.name}</td>
  <td>${alumno27.asistencias}</td>
  <td>${alumno27.modulos}</td>
  <td>${alumno27.evaluaciones}</td>
  <td>${alumno27.recuperatorios}</td>
  <td>${alumno27.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno28.name}</td>
  <td>${alumno28.asistencias}</td>
  <td>${alumno28.modulos}</td>
  <td>${alumno28.evaluaciones}</td>
  <td>${alumno28.recuperatorios}</td>
  <td>${alumno28.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno2.name}</td>
  <td>${alumno2.asistencias}</td>
  <td>${alumno2.modulos}</td>
  <td>${alumno2.evaluaciones}</td>
  <td>${alumno2.recuperatorios}</td>
  <td>${alumno2.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno3.name}</td>
  <td>${alumno3.asistencias}</td>
  <td>${alumno3.modulos}</td>
  <td>${alumno3.evaluaciones}</td>
  <td>${alumno3.recuperatorios}</td>
  <td>${alumno3.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno7.name}</td>
  <td>${alumno7.asistencias}</td>
  <td>${alumno7.modulos}</td>
  <td>${alumno7.evaluaciones}</td>
  <td>${alumno7.recuperatorios}</td>
  <td>${alumno7.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno8.name}</td>
  <td>${alumno8.asistencias}</td>
  <td>${alumno8.modulos}</td>
  <td>${alumno8.evaluaciones}</td>
  <td>${alumno8.recuperatorios}</td>
  <td>${alumno8.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno9.name}</td>
  <td>${alumno9.asistencias}</td>
  <td>${alumno9.modulos}</td>
  <td>${alumno9.evaluaciones}</td>
  <td>${alumno9.recuperatorios}</td>
  <td>${alumno9.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno10.name}</td>
  <td>${alumno10.asistencias}</td>
  <td>${alumno10.modulos}</td>
  <td>${alumno10.evaluaciones}</td>
  <td>${alumno10.recuperatorios}</td>
  <td>${alumno10.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno17.name}</td>
  <td>${alumno17.asistencias}</td>
  <td>${alumno17.modulos}</td>
  <td>${alumno17.evaluaciones}</td>
  <td>${alumno17.recuperatorios}</td>
  <td>${alumno17.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno23.name}</td>
  <td>${alumno23.asistencias}</td>
  <td>${alumno23.modulos}</td>
  <td>${alumno23.evaluaciones}</td>
  <td>${alumno23.recuperatorios}</td>
  <td>${alumno23.puntaje}</td>
</tr>


`;