//Definir variables Auxiiliares
let round_counter = 1;
let round_numbers = 0;

//Definir Variables dsection
var section_match_numbers = document.getElementById("section_match_numbers");
var input_match_numbers = document.getElementById("input_match_numbers");
var game_section = document.getElementById("game_section");
var div_after_choice = document.getElementById("div_after_choice");

var div_player_choice = document.getElementById("div_player_choice");
var div_round_number = document.getElementById("div_round_number");
var div_machine_choice = document.getElementById("div_machine_choice");
var div_result = document.getElementById("div_result");
var div_player_counter = document.getElementById("div_player_counter");
var div_machine_counter = document.getElementById("div_machine_counter");
var div_game_end = document.getElementById("div_game_end");
var div_play_again = document.getElementById("div_play_again");

//Función Botón Aceptar Jugar
function accept_match_numbers(input) {
  if (input !== "") {
    input = parseFloat(input);
    if (round_counter <= input) {
      round_numbers = input;
      section_match_numbers.classList.add("d-none");
      div_choice_buttons.classList.remove("d-none");
    }
  }
}

//Funcion Máquina escoge
function machine_choice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      str_choice = "Piedra";
      break;
    case 1:
      str_choice = "Papel";
      break;
    case 2:
      str_choice = "Tijeras";
      break;
  }
  return str_choice;
}

//Funcion Escoger Piedra
function choice_rock(input) {
  div_after_choice.classList.remove("d-none");
  if (round_counter <= round_numbers) {
    switch (input) {
      case "Piedra":
        div_round_number.innerHTML =
          "Ronda: " + round_counter + " de " + round_numbers;
        div_player_choice.innerHTML = "Ecogiste Piedra";
        div_machine_choice.innerHTML = "La máquina escogío Piedra";
        div_result.innerHTML = "Han empatado";
        div_player_counter.innerHTML = parseFloat(div_player_counter.innerHTML);
        div_machine_counter.innerHTML = parseFloat(
          div_machine_counter.innerHTML
        );
        round_counter = round_counter + 1;
        break;
      case "Papel":
        div_round_number.innerHTML =
          "Ronda: " + round_counter + " de " + round_numbers;
        div_player_choice.innerHTML = "Ecogiste Piedra";
        div_machine_choice.innerHTML = "La máquina escogío Papel";
        div_result.innerHTML = "Papel envuelve Piedra. Has perdido";
        div_player_counter.innerHTML = parseFloat(div_player_counter.innerHTML);
        div_machine_counter.innerHTML =
          parseFloat(div_machine_counter.innerHTML) + 1;
        round_counter = round_counter + 1;
        break;
      case "Tijeras":
        div_round_number.innerHTML =
          "Ronda: " + round_counter + " de " + round_numbers;
        div_player_choice.innerHTML = "Ecogiste Piedra";
        div_machine_choice.innerHTML = "La máquina escogío Tijeras";
        div_result.innerHTML = "Piedra rompe Tijera. Has ganado";
        div_player_counter.innerHTML =
          parseFloat(div_player_counter.innerHTML) + 1;
        div_machine_counter.innerHTML = parseFloat(
          div_machine_counter.innerHTML
        );
        round_counter = round_counter + 1;
        break;
    }
  } else {
    div_game_end.innerHTML = "Has jugado todas tus rondas";
    div_game_end.classList.remove("d-none");
    div_play_again.classList.remove("d-none");
  }
}

//Funcion Escoger Papel
function choice_paper(input) {
  div_after_choice.classList.remove("d-none");
  if (round_counter <= round_numbers) {
    switch (input) {
      case "Piedra":
        div_round_number.innerHTML =
          "Ronda: " + round_counter + " de " + round_numbers;
        div_player_choice.innerHTML = "Ecogiste Papel";
        div_machine_choice.innerHTML = "La máquina escogío Piedra";
        div_result.innerHTML = "Papel envuelve Piedra. Has ganado";
        div_player_counter.innerHTML =
          parseFloat(div_player_counter.innerHTML) + 1;
        div_machine_counter.innerHTML = parseFloat(
          div_machine_counter.innerHTML
        );
        round_counter = round_counter + 1;
        break;
      case "Papel":
        div_round_number.innerHTML =
          "Ronda: " + round_counter + " de " + round_numbers;
        div_player_choice.innerHTML = "Ecogiste Papel";
        div_machine_choice.innerHTML = "La máquina escogío Papel";
        div_result.innerHTML = "Han empatado";
        div_player_counter.innerHTML = parseFloat(div_player_counter.innerHTML);
        div_machine_counter.innerHTML = parseFloat(
          div_machine_counter.innerHTML
        );
        round_counter = round_counter + 1;
        break;
      case "Tijeras":
        div_round_number.innerHTML =
          "Ronda: " + round_counter + " de " + round_numbers;
        div_player_choice.innerHTML = "Ecogiste Papel";
        div_machine_choice.innerHTML = "La máquina escogío Tijeras";
        div_result.innerHTML = "Tijeras corta Papel. Has perdido";
        div_player_counter.innerHTML = parseFloat(div_player_counter.innerHTML);
        div_machine_counter.innerHTML =
          parseFloat(div_machine_counter.innerHTML) + 1;
        round_counter = round_counter + 1;
        break;
    }
  } else {
    div_game_end.innerHTML = "Has jugado todas tus rondas";
    div_game_end.classList.remove("d-none");
    div_play_again.classList.remove("d-none");
  }
}

//Funcion Escoger Tijeras
function choice_sissors(input) {
  div_after_choice.classList.remove("d-none");
  if (round_counter <= round_numbers) {
    switch (input) {
      case "Piedra":
        div_round_number.innerHTML =
          "Ronda: " + round_counter + " de " + round_numbers;
        div_player_choice.innerHTML = "Ecogiste Tijeras";
        div_machine_choice.innerHTML = "La máquina escogío Piedra";
        div_result.innerHTML = "Piedra rompe Tijeras. Has perdido";
        div_player_counter.innerHTML = parseFloat(div_player_counter.innerHTML);
        div_machine_counter.innerHTML =
          parseFloat(div_machine_counter.innerHTML) + 1;
        round_counter = round_counter + 1;
        break;
      case "Papel":
        div_round_number.innerHTML =
          "Ronda: " + round_counter + " de " + round_numbers;
        div_player_choice.innerHTML = "Ecogiste Tijeras";
        div_machine_choice.innerHTML = "La máquina escogío Papel";
        div_result.innerHTML = "Tijeras corta Papel. Has ganado";
        div_player_counter.innerHTML =
          parseFloat(div_player_counter.innerHTML) + 1;
        div_machine_counter.innerHTML = parseFloat(
          div_machine_counter.innerHTML
        );
        round_counter = round_counter + 1;
        break;
      case "Tijeras":
        div_round_number.innerHTML =
          "Ronda: " + round_counter + " de " + round_numbers;
        div_player_choice.innerHTML = "Ecogiste Tijeras";
        div_machine_choice.innerHTML = "La máquina escogío Tijeras";
        div_result.innerHTML = "Han empatado";
        div_player_counter.innerHTML = parseFloat(div_player_counter.innerHTML);
        div_machine_counter.innerHTML = parseFloat(
          div_machine_counter.innerHTML
        );
        round_counter = round_counter + 1;
        break;
    }
  } else {
    div_game_end.innerHTML = "Has jugado todas tus rondas";
    div_game_end.classList.remove("d-none");
    div_play_again.classList.remove("d-none");
  }
}

function play_again() {
  section_match_numbers.classList.remove("d-none");
  input_match_numbers.value = "";
  div_game_end.classList.add("d-none");
  div_play_again.classList.add("d-none");
  div_choice_buttons.classList.add("d-none");
  div_after_choice.classList.add("d-none");
  round_numbers = 0;
  round_counter = 1;
  div_player_counter.innerHTML = 0;
  div_machine_counter.innerHTML = 0;
}
