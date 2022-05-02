const items = document.getElementById('items')


const alumno1 = {
  name: 'Arregui, Thiago',
  asistencias: 12,
  tbc:4,
  modulos: 9,
  evaluaciones: 6,
  recuperatorios: 'Aus',
  puntaje: 31
}
const alumno2 = {
  name: 'Brenni, Benjamin',
  asistencias: 12,
  tbc:7,
  modulos: 7,
  evaluaciones:5,
  recuperatorios: 'Aus',
  puntaje: 31
}

const alumno3 = {
  name: 'Cano, Zaira',
  asistencias: 14,
  tbc:8,
  modulos: 10,
  evaluaciones: 8,
  recuperatorios: '-',
  puntaje: 40
}
const alumno4 = {
  name: 'Chavez, Dilan',
  asistencias: 12,
  tbc:5,
  modulos: 'N/E',
  evaluaciones: 'Des',
  recuperatorios: 'Aus',
  puntaje: 17
}
const alumno5 = {
  name: 'Cordoba, Renata',
  asistencias: 17,
  tbc:8,
  modulos: 10,
  evaluaciones: '-',
  recuperatorios: 8,
  puntaje: 43
}

const alumno6 = {
  name: 'Farfan, Malena',
  asistencias: 17,
  tbc:8,
  modulos: 10,
  evaluaciones: 9,
  recuperatorios: '-',
  puntaje: 44
}
const alumno7 = {
  name: 'Fernandez, Jenaro',
  asistencias: 15,
  tbc:8,
  modulos: 10,
  evaluaciones: 8,
  recuperatorios: '-',
  puntaje: 41
}
const alumno8 = {
  name: 'Juarez, Gustavo',
  asistencias: 15,
  tbc:7,
  modulos: 10,
  evaluaciones: 9,
  recuperatorios: '-',
  puntaje: 41
}
const alumno9 = {
  name: 'Junco, Lucas',
  asistencias: 16,
  tbc:8,
  modulos: 9,
  evaluaciones:'Des',
  recuperatorios: 5,
  puntaje: 38
}
const alumno10 = {
  name: 'Ludueña, Uriel',
  asistencias: 16,
  tbc:6,
  modulos: 10,
  evaluaciones: 6,
  recuperatorios: 'Aus',
  puntaje: 38
}
const alumno11 = {
  name: 'Mele, Nehemias',
  asistencias: 12,
  tbc:5,
  modulos: 7,
  evaluaciones: 4,
  recuperatorios: 'Aus',
  puntaje: 28
}
const alumno12 = {
  name: 'Morua, Lucia',
  asistencias: 13,
  tbc:7,
  modulos: 0,
  evaluaciones: 3,
  recuperatorios: 'Aus',
  puntaje: 23
}
const alumno13 = {
  name: 'Passeri, Alma',
  asistencias: 16,
  tbc:6,
  modulos: 10,
  evaluaciones: 8,
  recuperatorios: '-',
  puntaje: 40
}
const alumno14 = {
  name: 'Quinteros, Facundo',
  asistencias: 18,
  tbc:8,
  modulos: 10,
  evaluaciones:'-',
  recuperatorios: 8,
  puntaje: 44
}

const alumno15 = {
  name: 'Quiroga, Tomás',
  asistencias: 8,
  tbc:3,
  modulos: 'N/E',
  evaluaciones: 'Aus',
  recuperatorios: 'Aus',
  puntaje: 11
}
const alumno16 = {
  name: 'Rodriguez, Marcos',
  asistencias: 16,
  tbc:8,
  modulos: 10,
  evaluaciones: '-',
  recuperatorios: 7,
  puntaje: 41
}
const alumno17 = {
  name: 'Román, Luca',
  asistencias: 18,
  tbc:8,
  modulos: 10,
  evaluaciones: 10,
  recuperatorios: '-',
  puntaje: 46
}

const alumno18 = {
  name: 'Rosales, Mia',
  asistencias: 15,
  tbc:6,
  modulos: 10,
  evaluaciones: 10,
  recuperatorios: '-',
  puntaje: 41
}
const alumno19 = {
  name: 'Torres, Priscila',
  asistencias: 18,
  tbc:8,
  modulos: 10,
  evaluaciones: '-',
  recuperatorios: 8,
  puntaje: 44
}
const alumno20 = {
  name: 'Infante, Nahiara',
  asistencias: 11,
  tbc:7,
  modulos: 3,
  evaluaciones: 7,
  recuperatorios: '-',
  puntaje: 28
}
const alumno21 = {
  name: 'Beer, Kevin',
  asistencias: 12,
  tbc:8,
  modulos: 4,
  evaluaciones: '-',
  recuperatorios: 7,
  puntaje: 31
}
const alumno22 = {
  name: 'Carrizo, Demian',
  asistencias: 6,
  tbc:5,
  modulos: 0,
  evaluaciones:1,
  recuperatorios: 'Aus',
  puntaje: 12
}



items.innerHTML = `
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno17.name}</td>
  <td>${alumno17.asistencias}</td>
  <td>${alumno17.tbc}</td>
  <td>${alumno17.modulos}</td>
  <td><i class="bi-star-fill"></i> ${alumno17.evaluaciones}</td>
  <td>${alumno17.recuperatorios}</td>
  <td>${alumno17.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno6.name}</td>
  <td>${alumno6.asistencias}</td>
  <td>${alumno6.tbc}</td>
  <td>${alumno6.modulos}</td>
  <td>${alumno6.evaluaciones}</td>
  <td>${alumno6.recuperatorios}</td>
  <td>${alumno6.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno19.name}</td>
  <td>${alumno19.asistencias}</td>
  <td>${alumno19.tbc}</td>
  <td>${alumno19.modulos}</td>
  <td>${alumno19.evaluaciones}</td>
  <td>${alumno19.recuperatorios}</td>
  <td>${alumno19.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno14.name}</td>
  <td>${alumno14.asistencias}</td>
  <td>${alumno14.tbc}</td>
  <td>${alumno14.modulos}</td>
  <td>${alumno14.evaluaciones}</td>
  <td>${alumno14.recuperatorios}</td>
  <td>${alumno14.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno5.name}</td>
  <td>${alumno5.asistencias}</td>
  <td>${alumno5.tbc}</td>
  <td>${alumno5.modulos}</td>
  <td>${alumno5.evaluaciones}</td>
  <td>${alumno5.recuperatorios}</td>
  <td>${alumno5.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno16.name}</td>
  <td>${alumno16.asistencias}</td>
  <td>${alumno16.tbc}</td>
  <td>${alumno16.modulos}</td>
  <td>${alumno16.evaluaciones}</td>
  <td>${alumno16.recuperatorios}</td>
  <td>${alumno16.puntaje}</td>
</tr>




<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno8.name}</td>
  <td>${alumno8.asistencias}</td>
  <td>${alumno8.tbc}</td>
  <td>${alumno8.modulos}</td>
  <td>${alumno8.evaluaciones}</td>
  <td>${alumno8.recuperatorios}</td>
  <td>${alumno8.puntaje}</td>
</tr>



<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno18.name}</td>
  <td>${alumno18.asistencias}</td>
  <td>${alumno18.tbc}</td>
  <td>${alumno18.modulos}</td>
  <td><i class="bi-star-fill"></i> ${alumno18.evaluaciones}</td>
  <td>${alumno18.recuperatorios}</td>
  <td>${alumno18.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno7.name}</td>
  <td>${alumno7.asistencias}</td>
  <td>${alumno7.tbc}</td>
  <td>${alumno7.modulos}</td>
  <td>${alumno7.evaluaciones}</td>
  <td>${alumno7.recuperatorios}</td>
  <td>${alumno7.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno13.name}</td>
  <td>${alumno13.asistencias}</td>
  <td>${alumno13.tbc}</td>
  <td>${alumno13.modulos}</td>
  <td>${alumno13.evaluaciones}</td>
  <td>${alumno13.recuperatorios}</td>
  <td>${alumno13.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno3.name}</td>
  <td>${alumno3.asistencias}</td>
  <td>${alumno3.tbc}</td>
  <td>${alumno3.modulos}</td>
  <td>${alumno3.evaluaciones}</td>
  <td>${alumno3.recuperatorios}</td>
  <td>${alumno3.puntaje}</td>
</tr>





<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno9.name}</td>
  <td>${alumno9.asistencias}</td>
  <td>${alumno9.tbc}</td>
  <td>${alumno9.modulos}</td>
  <td>${alumno9.evaluaciones}</td>
  <td>${alumno9.recuperatorios}</td>
  <td>${alumno9.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno10.name}</td>
  <td>${alumno10.asistencias}</td>
  <td>${alumno10.tbc}</td>
  <td>${alumno10.modulos}</td>
  <td>${alumno10.evaluaciones}</td>
  <td>${alumno10.recuperatorios}</td>
  <td>${alumno10.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno2.name}</td>
  <td>${alumno2.asistencias}</td>
  <td>${alumno2.tbc}</td>
  <td>${alumno2.modulos}</td>
  <td>${alumno2.evaluaciones}</td>
  <td>${alumno2.recuperatorios}</td>
  <td>${alumno2.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno21.name}</td>
  <td>${alumno21.asistencias}</td>
  <td>${alumno21.tbc}</td>
  <td>${alumno21.modulos}</td>
  <td>${alumno21.evaluaciones}</td>
  <td>${alumno21.recuperatorios}</td>
  <td>${alumno21.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno1.name}</td>
  <td>${alumno1.asistencias}</td>
  <td>${alumno1.tbc}</td>
  <td>${alumno1.modulos}</td>
  <td>${alumno1.evaluaciones}</td>
  <td>${alumno1.recuperatorios}</td>
  <td>${alumno1.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno20.name}</td>
  <td>${alumno20.asistencias}</td>
  <td>${alumno20.tbc}</td>
  <td>${alumno20.modulos}</td>
  <td>${alumno20.evaluaciones}</td>
  <td>${alumno20.recuperatorios}</td>
  <td>${alumno20.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno11.name}</td>
  <td>${alumno11.asistencias}</td>
  <td>${alumno11.tbc}</td>
  <td>${alumno11.modulos}</td>
  <td>${alumno11.evaluaciones}</td>
  <td>${alumno11.recuperatorios}</td>
  <td>${alumno11.puntaje}</td>
</tr>





<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno12.name}</td>
  <td>${alumno12.asistencias}</td>
  <td>${alumno12.tbc}</td>
  <td>${alumno12.modulos}</td>
  <td>${alumno12.evaluaciones}</td>
  <td>${alumno12.recuperatorios}</td>
  <td>${alumno12.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno4.name}</td>
  <td>${alumno4.asistencias}</td>
  <td>${alumno4.tbc}</td>
  <td>${alumno4.modulos}</td>
  <td>${alumno4.evaluaciones}</td>
  <td>${alumno4.recuperatorios}</td>
  <td>${alumno4.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno22.name}</td>
  <td>${alumno22.asistencias}</td>
  <td>${alumno22.tbc}</td>
  <td>${alumno22.modulos}</td>
  <td>${alumno22.evaluaciones}</td>
  <td>${alumno22.recuperatorios}</td>
  <td>${alumno22.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno15.name}</td>
  <td>${alumno15.asistencias}</td>
  <td>${alumno15.tbc}</td>
  <td>${alumno15.modulos}</td>
  <td>${alumno15.evaluaciones}</td>
  <td>${alumno15.recuperatorios}</td>
  <td>${alumno15.puntaje}</td>
</tr>




`;