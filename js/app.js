const items = document.getElementById('items')


const alumno1 = {
  name: 'Arregui, Thiago',
  asistencias: 22,
  tbc:13,
  modulos: 9,
  evaluaciones: 6,
  evaluaciones2:9,
  evaluaciones3:10,
  recuperatorios: 'Aus',
  recuperatorios2:'-',
  puntaje: 69
}
const alumno2 = {
  name: 'Brenni, Benjamin',
  asistencias: 22,
  tbc:16,
  modulos: 7,
  evaluaciones:5,
  evaluaciones2:'-',
  evaluaciones3:6,
  recuperatorios: 'Aus',
  recuperatorios2:6,
  puntaje: 62
}

const alumno3 = {
  name: 'Cano, Zaira',
  asistencias: 25,
  tbc:18,
  modulos: 10,
  evaluaciones: 8,
  evaluaciones2:9,
  evaluaciones3:9,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 79
}
const alumno4 = {
  name: 'Chavez, Dilan',
  asistencias: 18,
  tbc:10,
  modulos: 'N/E',
  evaluaciones: 'Des',
  evaluaciones2:'Aus',
  evaluaciones3:'-',
  recuperatorios: 'Aus',
  recuperatorios2:9,
  puntaje: 37
}
const alumno5 = {
  name: 'Cordoba, Renata',
  asistencias: 25,
  tbc:16,
  modulos: 10,
  evaluaciones: '-',
  evaluaciones2:'-',
  evaluaciones3:'Aus',
  recuperatorios: 8,
  recuperatorios2:4,
  puntaje: 63
}

const alumno6 = {
  name: 'Farfan, Malena',
  asistencias: 25,
  tbc:15,
  modulos: 10,
  evaluaciones: 9,
  evaluaciones2:'Aus',
  evaluaciones3:9,
  recuperatorios: '-',
  recuperatorios2:10,
  puntaje: 78
}
const alumno7 = {
  name: 'Fernandez, Jenaro',
  asistencias: 26,
  tbc:18,
  modulos: 10,
  evaluaciones: 8,
  evaluaciones2:7,
  evaluaciones3:9,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 78
}
const alumno8 = {
  name: 'Juarez, Gustavo',
  asistencias: 25,
  tbc:16,
  modulos: 10,
  evaluaciones: 9,
  evaluaciones2:9,
  evaluaciones3:9,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 78
}
const alumno9 = {
  name: 'Junco, Lucas',
  asistencias: 24,
  tbc:15,
  modulos: 9,
  evaluaciones:'-',
  evaluaciones2:'Aus',
  evaluaciones3:4,
  recuperatorios: 5,
  recuperatorios2:7,
  puntaje: 64
}
const alumno10 = {
  name: 'Ludueña, Uriel',
  asistencias: 25,
  tbc:14,
  modulos: 10,
  evaluaciones: 6,
  evaluaciones2:8,
  evaluaciones3:'Aus',
  recuperatorios: 'Aus',
  recuperatorios2:'-',
  puntaje: 63
}
const alumno11 = {
  name: 'Mele, Nehemias',
  asistencias: 19,
  tbc:11,
  modulos: 7,
  evaluaciones: 4,
  evaluaciones2:9,
  evaluaciones3:10,
  recuperatorios: 'Aus',
  recuperatorios2:'-',
  puntaje: 60
}
const alumno12 = {
  name: 'Morua, Lucia',
  asistencias: 23,
  tbc:16,
  modulos: 0,
  evaluaciones: 3,
  evaluaciones2:'Aus',
  evaluaciones3:5,
  recuperatorios: 'Aus',
  recuperatorios2:8,
  puntaje: 55
}
const alumno13 = {
  name: 'Passeri, Alma',
  asistencias: 25,
  tbc:14,
  modulos: 10,
  evaluaciones: 8,
  evaluaciones2:7,
  evaluaciones3:9,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 73
}
const alumno14 = {
  name: 'Quinteros, Facundo',
  asistencias: 29,
  tbc:18,
  modulos: 10,
  evaluaciones:'-',
  evaluaciones2:9,
  evaluaciones3:7,
  recuperatorios: 8,
  recuperatorios2:'-',
  puntaje: 81
}

const alumno15 = {
  name: 'Quiroga, Tomás',
  asistencias: 14,
  tbc:8,
  modulos: 'N/E',
  evaluaciones: 'Aus',
  evaluaciones2:'Aus',
  evaluaciones3:'Aus',
  recuperatorios: 'Aus',
  recuperatorios2:7,
  puntaje: 29
}
const alumno16 = {
  name: 'Rodriguez, Marcos',
  asistencias: 23,
  tbc:14,
  modulos: 10,
  evaluaciones: '-',
  evaluaciones2:'-',
  evaluaciones3:7,
  recuperatorios: 7,
  recuperatorios2:9,
  puntaje: 70
}
const alumno17 = {
  name: 'Román, Luca',
  asistencias: 29,
  tbc:18,
  modulos: 10,
  evaluaciones: 10,
  evaluaciones2:9,
  evaluaciones3:8,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 84
}

const alumno18 = {
  name: 'Rosales, Mia',
  asistencias: 19,
  tbc:9,
  modulos: 10,
  evaluaciones: 10,
  evaluaciones2:'-',
  evaluaciones3:'Aus',
  recuperatorios: '-',
  recuperatorios2:8,
  puntaje: 56
}
const alumno19 = {
  name: 'Torres, Priscila',
  asistencias: 29,
  tbc:18,
  modulos: 10,
  evaluaciones: '-',
  evaluaciones2:'-',
  evaluaciones3:7,
  recuperatorios: 8,
  recuperatorios2:10,
  puntaje: 82
}
const alumno20 = {
  name: 'Infante, Nahiara',
  asistencias: 19,
  tbc:14,
  modulos: 3,
  evaluaciones: 7,
  evaluaciones2:'-',
  evaluaciones3:8,
  recuperatorios: '-',
  recuperatorios2:6,
  puntaje: 57
}
const alumno21 = {
  name: 'Beer, Kevin',
  asistencias: 21,
  tbc:16,
  modulos: 4,
  evaluaciones: '-',
  evaluaciones2:8,
  evaluaciones3:7,
  recuperatorios: 7,
  recuperatorios2:'-',
  puntaje: 63
}
const alumno22 = {
  name: 'Carrizo, Demian',
  asistencias: 12,
  tbc:10,
  modulos: 0,
  evaluaciones:1,
  evaluaciones2:'Aus',
  evaluaciones3:'Aus',
  recuperatorios: 'Aus',
  recuperatorios2:6,
  puntaje: 29
}
const alumno23 = {
  name: 'Fagundez, Dylan',
  asistencias: 3,
  tbc:3,
  modulos: 0,
  evaluaciones:'-',
  evaluaciones2:'-',
  evaluaciones3:'Aus',
  recuperatorios: '-',
  recuperatorios2:2,
  puntaje: 8
}
const alumno24 = {
  name: 'Avila, Gonzalo',
  asistencias: 5,
  tbc:5,
  modulos: 0,
  evaluaciones:'-',
  evaluaciones2:'-',
  evaluaciones3:9,
  recuperatorios: '-',
  recuperatorios2:'-',
  puntaje: 19
}



items.innerHTML = `
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno17.name}</td>
  <td>${alumno17.asistencias}</td>
  <td>${alumno17.tbc}</td>
  <td>${alumno17.modulos}</td>
  <td><i class="bi-star-fill"></i> ${alumno17.evaluaciones}  |  ${alumno17.evaluaciones2} | ${alumno17.evaluaciones3} </td>
  <td> ${alumno17.recuperatorios}</td>
  <td>${alumno17.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno19.name}</td>
  <td>${alumno19.asistencias}</td>
  <td>${alumno19.tbc}</td>
  <td>${alumno19.modulos}</td>
  <td>${alumno19.evaluaciones}  |  ${alumno19.evaluaciones2} | ${alumno19.evaluaciones3}</td>
  <td>${alumno19.recuperatorios}  | <i class="bi-star-fill"></i>  ${alumno19.recuperatorios2}</td>
  <td>${alumno19.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno14.name}</td>
  <td>${alumno14.asistencias}</td>
  <td>${alumno14.tbc}</td>
  <td>${alumno14.modulos}</td>
  <td>${alumno14.evaluaciones}  |  ${alumno14.evaluaciones2} | ${alumno14.evaluaciones3}</td>
  <td>${alumno14.recuperatorios}  | ${alumno14.recuperatorios2}</td>
  <td>${alumno14.puntaje}</td>
</tr>



<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno3.name}</td>
  <td>${alumno3.asistencias}</td>
  <td>${alumno3.tbc}</td>
  <td>${alumno3.modulos}</td>
  <td>${alumno3.evaluaciones}  |  ${alumno3.evaluaciones2} | ${alumno3.evaluaciones3}</td>
  <td>${alumno3.recuperatorios}</td>
  <td>${alumno3.puntaje}</td>
</tr> 

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno6.name}</td>
  <td>${alumno6.asistencias}</td>
  <td>${alumno6.tbc}</td>
  <td>${alumno6.modulos}</td>
  <td>${alumno6.evaluaciones}  |  ${alumno6.evaluaciones2} | ${alumno6.evaluaciones3}</td>
  <td>${alumno6.recuperatorios}  | <i class="bi-star-fill"></i> ${alumno6.recuperatorios2}</td>
  <td>${alumno6.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno8.name}</td>
  <td>${alumno8.asistencias}</td>
  <td>${alumno8.tbc}</td>
  <td>${alumno8.modulos}</td>
  <td>${alumno8.evaluaciones}  |  ${alumno8.evaluaciones2} | ${alumno8.evaluaciones3}</td>
  <td>${alumno8.recuperatorios}</td>
  <td>${alumno8.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno7.name}</td>
  <td>${alumno7.asistencias}</td>
  <td>${alumno7.tbc}</td>
  <td>${alumno7.modulos}</td>
  <td>${alumno7.evaluaciones}  |  ${alumno7.evaluaciones2} | ${alumno7.evaluaciones3}</td>
  <td>${alumno7.recuperatorios} </td>
  <td>${alumno7.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno13.name}</td>
  <td>${alumno13.asistencias}</td>
  <td>${alumno13.tbc}</td>
  <td>${alumno13.modulos}</td>
  <td>${alumno13.evaluaciones}  |  ${alumno13.evaluaciones2} | ${alumno13.evaluaciones3}</td>
  <td>${alumno13.recuperatorios}  </td>
  <td>${alumno13.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno16.name}</td>
  <td>${alumno16.asistencias}</td>
  <td>${alumno16.tbc}</td>
  <td>${alumno16.modulos}</td>
  <td>${alumno16.evaluaciones}  |  ${alumno16.evaluaciones2} | ${alumno16.evaluaciones3}</td>
  <td>${alumno16.recuperatorios}  | ${alumno16.recuperatorios2}</td>
  <td>${alumno16.puntaje}</td>
</tr>





<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno1.name}</td>
  <td>${alumno1.asistencias}</td>
  <td>${alumno1.tbc}</td>
  <td>${alumno1.modulos}</td>
  <td>${alumno1.evaluaciones}  |  ${alumno1.evaluaciones2}  | ${alumno1.evaluaciones3}</td>
  <td>${alumno1.recuperatorios}  | ${alumno1.recuperatorios2}</td>
  <td>${alumno1.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno9.name}</td>
  <td>${alumno9.asistencias}</td>
  <td>${alumno9.tbc}</td>
  <td>${alumno9.modulos}</td>
  <td>${alumno9.evaluaciones}  |  ${alumno9.evaluaciones2} | ${alumno9.evaluaciones3}</td>
  <td>${alumno9.recuperatorios}  | ${alumno9.recuperatorios2}</td>
  <td>${alumno9.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno21.name}</td>
  <td>${alumno21.asistencias}</td>
  <td>${alumno21.tbc}</td>
  <td>${alumno21.modulos}</td>
  <td>${alumno21.evaluaciones}  |  ${alumno21.evaluaciones2} | ${alumno21.evaluaciones3}</td>
  <td>${alumno21.recuperatorios}  | ${alumno21.recuperatorios2}</td>
  <td>${alumno21.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno10.name}</td>
  <td>${alumno10.asistencias}</td>
  <td>${alumno10.tbc}</td>
  <td>${alumno10.modulos}</td>
  <td>${alumno10.evaluaciones}  |  ${alumno10.evaluaciones2} | ${alumno10.evaluaciones3}</td>
  <td>${alumno10.recuperatorios}  | ${alumno10.recuperatorios2}</td>
  <td>${alumno10.puntaje}</td>
</tr>




<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno5.name}</td>
  <td>${alumno5.asistencias}</td>
  <td>${alumno5.tbc}</td>
  <td>${alumno5.modulos}</td>
  <td>${alumno5.evaluaciones}  |  ${alumno5.evaluaciones2} | ${alumno5.evaluaciones3}</td>
  <td>${alumno5.recuperatorios} | ${alumno5.recuperatorios2}</td>
  <td>${alumno5.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno2.name}</td>
  <td>${alumno2.asistencias}</td>
  <td>${alumno2.tbc}</td>
  <td>${alumno2.modulos}</td>
  <td>${alumno2.evaluaciones}  |  ${alumno2.evaluaciones2} | ${alumno2.evaluaciones3}</td>
  <td>${alumno2.recuperatorios}  | ${alumno2.recuperatorios2}</td>
  <td>${alumno2.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno11.name}</td>
  <td>${alumno11.asistencias}</td>
  <td>${alumno11.tbc}</td>
  <td>${alumno11.modulos}</td>
  <td>${alumno11.evaluaciones}  |  ${alumno11.evaluaciones2} | <i class="bi-star-fill"></i> ${alumno11.evaluaciones3}</td>
  <td>${alumno11.recuperatorios}  | ${alumno11.recuperatorios2}</td>
  <td>${alumno11.puntaje}</td>
</tr>




<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno20.name}</td>
  <td>${alumno20.asistencias}</td>
  <td>${alumno20.tbc}</td>
  <td>${alumno20.modulos}</td>
  <td>${alumno20.evaluaciones}  |  ${alumno20.evaluaciones2} | ${alumno20.evaluaciones3}</td>
  <td>${alumno20.recuperatorios}  | ${alumno20.recuperatorios2}</td>
  <td>${alumno20.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno18.name}</td>
  <td>${alumno18.asistencias}</td>
  <td>${alumno18.tbc}</td>
  <td>${alumno18.modulos}</td>
  <td><i class="bi-star-fill"></i> ${alumno18.evaluaciones}  |  ${alumno18.evaluaciones2} | ${alumno18.evaluaciones3}</td>
  <td>${alumno18.recuperatorios}  | ${alumno18.recuperatorios2}</td>
  <td>${alumno18.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno12.name}</td>
  <td>${alumno12.asistencias}</td>
  <td>${alumno12.tbc}</td>
  <td>${alumno12.modulos}</td>
  <td>${alumno12.evaluaciones}  |  ${alumno12.evaluaciones2} | ${alumno12.evaluaciones3}</td>
  <td>${alumno12.recuperatorios}  | ${alumno12.recuperatorios2}</td>
  <td>${alumno12.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno4.name}</td>
  <td>${alumno4.asistencias}</td>
  <td>${alumno4.tbc}</td>
  <td>${alumno4.modulos}</td>
  <td>${alumno4.evaluaciones}  |  ${alumno4.evaluaciones2}  | ${alumno4.evaluaciones3}</td>
  <td>${alumno4.recuperatorios}  | ${alumno4.recuperatorios2}</td>
  <td>${alumno4.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno22.name}</td>
  <td>${alumno22.asistencias}</td>
  <td>${alumno22.tbc}</td>
  <td>${alumno22.modulos}</td>
  <td>${alumno22.evaluaciones}  |  ${alumno22.evaluaciones2} | ${alumno22.evaluaciones3}</td>
  <td>${alumno22.recuperatorios}  | ${alumno22.recuperatorios2}</td>
  <td>${alumno22.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno15.name}</td>
  <td>${alumno15.asistencias}</td>
  <td>${alumno15.tbc}</td>
  <td>${alumno15.modulos}</td>
  <td>${alumno15.evaluaciones}  |  ${alumno15.evaluaciones2}  | ${alumno15.evaluaciones3}</td>
  <td>${alumno15.recuperatorios}  | ${alumno15.recuperatorios2}</td>
  <td>${alumno15.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno24.name}</td>
  <td>${alumno24.asistencias}</td>
  <td>${alumno24.tbc}</td>
  <td>${alumno24.modulos}</td>
  <td>${alumno24.evaluaciones}  |  ${alumno24.evaluaciones2} | ${alumno24.evaluaciones3}</td>
  <td>${alumno24.recuperatorios}  | ${alumno24.recuperatorios2}</td>
  <td>${alumno24.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno23.name}</td>
  <td>${alumno23.asistencias}</td>
  <td>${alumno23.tbc}</td>
  <td>${alumno23.modulos}</td>
  <td>${alumno23.evaluaciones}  |  ${alumno23.evaluaciones2}  | ${alumno23.evaluaciones3}</td>
  <td>${alumno23.recuperatorios}  | ${alumno23.recuperatorios2}</td>
  <td>${alumno23.puntaje}</td>
</tr>





`;